import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';
import api from '../utils/Axios.config';

function ServiceCateEdit() {
  const navigate = useNavigate();
  let servicecategory = useLocation().state;
  let [sercate , setSerCate] = useState({
    ...servicecategory,
    newImage:null,
  });
  console.log(sercate);
  const [ preview ,setPreview] = useState(
    sercate.image ? `http://localhost:3000/uploads/${sercate.image}` : null,
  );

  const handleInputChange = (e) => {
    let { name , value } = e.target;
    setSerCate((prev) => ({
      ...prev, 
      [name] : value 
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
      setSerCate((prev) => ({
        ...prev,
        newImage:file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name" , sercate.name);
    if (sercate.newImage) {
      formData.append("image", sercate.newImage);
    }
    try {
        let response = await api.put(`/admin/servicecategory/edit/${sercate._id}` , formData);
        if(response.status == 200) {
          alert("Service category updated successfully.")
          navigate("/manage-servicecategories")
        }
    } catch (e) {
      console.log(e);
      alert("Failed to update service category");  
    }
  }
  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <h3>Edit Service Category</h3>
          <p className="text-subtitle text-muted">
            Update service category details
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Category</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <input type="hidden" name="_id" defaultValue={sercate._id}/>

                  {/* SERVICE NAME */}
                  <div className="col-md-6">
                    <label>Service Name</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="name"
                      defaultValue={sercate.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* IMAGE URL */}
                  <div className="col-md-6">
                    <label>Image URL</label>
                    <input
                      type="file"
                      className="form-control mt-2"
                      name="image"
                      accept='image/*'
                      // value={sercate.image}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* IMAGE PREVIEW */}
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
                      }}
                    />
                  </div>
                </div>

                {/* STATUS */}
                <div className="mt-4 col-md-4">
                  <label>Status</label>
                  <select
                    className="form-control mt-2"
                    value={sercate.ActiveStatus}
                    name='ActiveStatus'
                    onChange={handleInputChange}
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="mt-4">
                  <button type='submit' className="btn btn-primary me-2">
                    Update Category
                  </button>
                  <button className="btn btn-light" type='reset' onClick={() => navigate(-1)}>
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

export default ServiceCateEdit
