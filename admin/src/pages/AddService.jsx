import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";

function ServiceInput() {
  const [preview, setPreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectFile, setSelectFile] = useState(null);
  const [service, setService] = useState({
    ser_cate_id: "",
    name: "",
    image: "",
    desc: "",
    price: "",
    status: "Active",
    timestamp: new Date(),
  });

  const fetchCategories = async () => {
    try {
      const response = await api.get("/admin/servicecategory");
      setCategories(response.data.data || []);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...service,
      timestamp: new Date(),
    };

    try {
      const formData = new FormData();
      formData.append("ser_cate_id", service.ser_cate_id); 
      formData.append("name", service.name);
      formData.append("image", selectFile);
      formData.append("desc", service.desc);
      formData.append("price", service.price);
      formData.append("status", service.status);
      formData.append("timestamp", new Date());

      const response = await api.post("/admin/service/addservice", formData);
      if (response.data.token) {
        cookie.set("token", response.data.token);
      }

      alert("Service Added Successfully");

      setService({
        ser_cate_id: "",
        name: "",
        image: "",
        desc: "",
        price: "",
        status: "Active",
        timestamp: new Date(),
      });

      window.location.href = "/manage-services";
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
          <h3>Add Service</h3>
          <p className="text-subtitle text-muted">
            Add service details with price
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Service Details</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  {/* SERVICE CATEGORY */}
                  <div className="col-md-6">
                    <label>Service Category</label>
                    <select
                      className="form-control mt-2"
                      name="ser_cate_id"
                      value={service.ser_cate_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* SERVICE NAME */}
                  <div className="col-md-6">
                    <label>Service Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control mt-2"
                      value={service.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  {/* PRICE */}
                  <div className="col-md-4">
                    <label>Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control mt-2"
                      value={service.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* STATUS */}
                  <div className="col-md-4">
                    <label>Status</label>
                    <select
                      className="form-control mt-2"
                      name="status"
                      value={service.status}
                      onChange={handleChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-3">
                  <label>Description</label>
                  <textarea
                    className="form-control mt-2"
                    name="desc"
                    rows="3"
                    value={service.desc}
                    onChange={handleChange}
                  />
                </div>

                {/* IMAGE */}
                <div className="mt-3">
                  <label>Image URL</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control mt-2"
                    onChange={handleFileChange}
                  />
                </div>

                {/* IMAGE PREVIEW */}
                {preview && (
                  <div className="mt-3">
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
                )}

                {/* BUTTONS */}
                <div className="mt-4">
                  <button className="btn btn-primary">Save Service</button>
                  <button
                    type="button"
                    className="btn btn-light ms-2"
                    onClick={() =>
                      setService({
                        ser_cate_id: "",
                        name: "",
                        image: "",
                        desc: "",
                        price: "",
                        status: "Active",
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

export default ServiceInput;
