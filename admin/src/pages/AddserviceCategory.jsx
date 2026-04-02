import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function ServiceCategoryInput() {
  const [admin, setAdmin] = useState({});
  const [preview, setPreview] = useState(null);
  const [selectFile, setSelectFile] = useState(null);
  const navigate = useNavigate();

  const [serviceCategory, setServiceCategory] = useState({
    name: "",
    image:"",
    adminId: "",
    status: "Active",
  });

  // ✅ Fetch Admin
  const FetchAdmin = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      const adminData = res.data.user;

      console.log(adminData);
      setAdmin(adminData);

      setServiceCategory((prev) => ({
        ...prev,
        adminId: adminData.id,
      }));
    } catch (err) {
      console.log("Unauthorized");
    }
  };
 
  useEffect(() => {
    FetchAdmin();
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle File Change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Mutation Function
  const addServiceCategory = async ({ serviceCategory, selectFile }) => {
    if (!serviceCategory.adminId) {
      throw new Error("Admin not loaded yet");
    }

    const formData = new FormData();
    formData.append("name", serviceCategory.name);
    formData.append("adminId", serviceCategory.adminId);
    formData.append("status", serviceCategory.status);
    formData.append("timestamp", new Date());
    if (selectFile) {
      formData.append("image", selectFile);
    }
    console.log(formData);

    const response = await api.post(
      "/admin/servicecategory/addservicecategory",
      formData
    );

    return response.data;
  };

  // ✅ useMutation
  const mutation = useMutation({
    mutationFn: addServiceCategory,

    onSuccess: (data) => {
      if (data.token) {
        cookie.set("token", data.token);
      }

      toast.success("Service Category Added Successfully", {
        onClose: () => navigate("/manage-servicecategories"),
      });

      // ✅ Reset Form
      setServiceCategory({
        name: "",
        adminId: admin._id,
        status: "Active",
      });

      setSelectFile(null);
      setPreview(null);
    },

    onError: (err) => {
      console.error(err);
      toast.error("Failed to add service");
    },
  });

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceCategory.adminId) {
      toast.error("Admin not loaded yet");
      return;
    }

    if (!selectFile) {
      toast.error("Please select an image");
      return;
    }

    mutation.mutate({ serviceCategory, selectFile });
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* NAME */}
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

                  {/* IMAGE */}
                  <div className="col-md-6">
                    <label>Image</label>
                    <input
                      type="file"
                      className="form-control mt-2"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                {/* PREVIEW */}
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

                {/* STATUS */}
                <div className="mt-4 col-md-4">
                  <label>Status</label>
                  <select
                    className="form-control mt-2"
                    value={serviceCategory.status}
                    onChange={(e) =>
                      setServiceCategory((prev) => ({
                        ...prev,
                        status: e.target.value === "true",
                      }))
                    }
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="mt-4">
                  <button
                    className="btn btn-primary"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending
                      ? "Adding..."
                      : "Save Service Category"}
                  </button>

                  <button
                    type="reset"
                    className="btn btn-light ms-2"
                    onClick={() => {
                      setServiceCategory({
                        name: "",
                        adminId: admin._id,
                        status: "Active",
                      });
                      setSelectFile(null);
                      setPreview(null);
                    }}
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