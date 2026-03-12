import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";

function EditPetCategory() {
  const petCate = useLocation().state;
  const navigate = useNavigate();
  const [petCategory, setPetCategory] = useState({
    ...petCate,
    newImage: null,
  });
  const [preview, setPreview] = useState(
    petCate.image ? `http://localhost:3000/uploads/${petCate.image}` : null,
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPetCategory((prev) => ({
        ...prev,
        newImage: file,
      }));
    }
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", petCategory.name);
    formData.append("ActiveStatus", petCategory.ActiveStatus);
    if (petCategory.newImage) {
      formData.append("image", petCategory.newImage);
    }

    try {
      const response = await api.put(
        `/admin/petcategory/edit/${petCategory._id}`,
        formData,
      );

      if (response.status === 200) {
        alert("Pet category updated successfully.");
        navigate("/manage-petcategory");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update pet category");
    }
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <h3>Edit Pet Category</h3>
          <p className="text-subtitle text-muted">
            Update pet category details
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Pet Category</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_id"
                  defaultValue={petCategory._id}
                />

                <div className="row">
                  {/* PET CATEGORY NAME */}
                  <div className="col-md-6">
                    <label>Pet Category Name</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="name"
                      defaultValue={petCategory.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE URL */}
                  <div className="col-md-6">
                    <label>Image URL</label>
                    <input
                      type="file"
                      className="form-control mt-2"
                      name="image"
                      accept="image/*"
                      // value={petCategory.image}
                      onChange={handleFileChange}
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
                          width: "220px",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "12px",
                          border: "1px solid #ddd",
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
                    name="ActiveStatus"
                    defaultValue={petCategory.ActiveStatus}
                    onChange={handleInputChange}
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary me-2">
                    Update Pet Category
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
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

export default EditPetCategory;
