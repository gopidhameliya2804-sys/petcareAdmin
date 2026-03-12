import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";

function ServiceCategoryInput() {
  const [admin, setAdmin] = useState({});
  const [preview , setPreview] = useState(null);
  const [ selectFile , setSelectFile] = useState(null); 
  const [serviceCategory, setServiceCategory] = useState({
    name: "",
    image: "",
    adminId: "",
    ActiveStatus: true,
    timestamp: "",
  });

  const FetchAdmin = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setAdmin(res.data.user);

      setServiceCategory((prev) => ({
        ...prev,
        adminId: res.data.user._id,
      }));
    } catch (err) {
      console.log("Unauthorized");
    }
  };

  useEffect(() => {
    FetchAdmin();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectFile(file);
    setPreview(URL.createObjectURL(file));
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
    ...serviceCategory,
    timestamp: new Date(), 
  };
    try {
      const formData = new FormData();
      formData.append("name" , serviceCategory.name);
      formData.append("image" , selectFile);
      formData.append("adminId" , serviceCategory.adminId);
      formData.append("ActiveStatus" , serviceCategory.ActiveStatus);

      const response = await api.post("/admin/servicecategory/addservicecategory", formData);

      if (response.data.token) {
        cookie.set("token", response.data.token);
      }

      alert("Service Category Added Successfully");

      setServiceCategory({
        name: "",
        image: "",
        adminId: admin._id,
        ActiveStatus: true,
        timestamp: "",
      });

      window.location.href = "/manage-servicecategories";
    } catch (err) {
      console.error(err);
      alert("Failed to add service");
    }
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        <div className="page-heading">
          <h3>Add Service Category</h3>
          <p className="text-subtitle text-muted">
            Add service Category name with image
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Service Category</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  {/* SERVICE NAME */}
                  <div className="col-md-6">
                    <label>Service Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control mt-2"
                      placeholder="Enter service name"
                      value={serviceCategory.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* IMAGE URL */}
                  <div className="col-md-6">
                    <label>Image URL</label>
                    <input
                      type="file"
                      name="image"
                      className="form-control mt-2"
                      placeholder="https://example.com/image.jpg"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                {/* IMAGE PREVIEW */}
                {preview && (
                  <div className="mt-4">
                    <label>Preview</label>
                    <div>
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          width: "200px",
                          height: "140px",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* ACTIVE STATUS */}
                <div className="mt-4 col-md-4">
                  <label>Status</label>
                  <select
                    className="form-control mt-2"
                    name="ActiveStatus"
                    value={serviceCategory.ActiveStatus}
                    onChange={(e) =>
                      setServiceCategory({
                        ...serviceCategory,
                        ActiveStatus: e.target.value === "true",
                      })
                    }
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="mt-4">
                  <button className="btn btn-primary">
                    Save Service
                  </button>
                  <button
                    type="reset"
                    className="btn btn-light ms-2"
                    onClick={() =>
                      setServiceCategory({
                        name: "",
                        image: "",
                        adminId: admin._id,
                        ActiveStatus: true,
                        timestamp: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ServiceCategoryInput;
