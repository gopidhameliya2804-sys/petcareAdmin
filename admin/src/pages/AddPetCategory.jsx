import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";

function PetCategoryInput() {
  const [admin, setAdmin] = useState({});
  const [preview, setPreview] = useState(null);
  const [selectFile, setSelectFile] = useState(null);
  const [petcategory, setPetCategory] = useState({
    name: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetCategory((prev) => ({
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

    try {
    const formData = new FormData();
    formData.append("name", petcategory.name);
    formData.append("image", selectFile);

    const response = await api.post(
      "/admin/petcategory/addpetcategory",
      formData,
    );

    if (response.data.token) {
      cookie.set("token", response.data.token);
    }

    alert("Pet Category Added Successfully");

    setPetCategory({
      name: "",
      image: "",
    });

    window.location.href = "/manage-petcategory";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  console.log(petcategory);

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6">
                <h3>Pet Category</h3>
                <p className="text-subtitle text-muted">
                  Add pet category with image URL
                </p>
              </div>
            </div>
          </div>

          {/* ===== FORM ===== */}
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Pet Category</h4>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    {/* Category Name */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pet Category Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control mt-2"
                          placeholder="Enter category name"
                          value={petcategory.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Image URL */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Image URL</label>
                        <input
                          type="file"
                          name="image"
                          className="form-control mt-2"
                          placeholder="imageUrl"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Image Preview */}
                  {preview && (
                    <div className="mt-3">
                      <label>Preview</label>
                      <div>
                        <img
                          src={preview}
                          alt="Preview"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="row mt-4">
                    <div className="col-12">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value={"Save Category"}
                      />

                      <button
                        type="reset"
                        className="btn btn-light ms-2"
                        onClick={() =>
                          setPetCategory({
                            name: "",
                            image: "",
                            adminId: admin._id,
                          })
                        }
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetCategoryInput;
