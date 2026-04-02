import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function PetInput() {
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const [selectFile, setSelectFile] = useState(null);

  const [pet, setPet] = useState({
    pet_cate_id: "",
    name: "",
    desc: "",
    age: "",
    status: "Available",
  });

  const FetchCategories = async () => {
    try {
      const res = await api.get("/admin/petcategory/");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const addPet = async ({ pet, selectFile }) => {
    const formData = new FormData();

    formData.append("pet_cate_id", pet.pet_cate_id);
    formData.append("name", pet.name);
    formData.append("desc", pet.desc);
    formData.append("age", pet.age);
    formData.append("status", pet.status);
    formData.append("timestamp", new Date());

    if (selectFile) {
      formData.append("image", selectFile);
    }

    const response = await api.post("/admin/pet/addpet", formData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: addPet,

    onSuccess: (response) => {
      if (response.token) {
        cookie.set("token", response.token);
      }

      toast.success("Pet Added Successfully", {
        onClose: () => navigate("/manage-pet"),
      });

      setPet({
        pet_cate_id: "",
        name: "",
        desc: "",
        age: "",
        status: "Available",
      });

      setSelectFile(null);
      setPreview(null);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Failed to add pet");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectFile) {
      toast.error("Please select an image");
      return;
    }

    mutation.mutate({ pet, selectFile });
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        <div className="page-heading">
          <h3>Add Pet</h3>
          <p className="text-subtitle text-muted">
            Add pets under specific categories
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Pet Details</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Pet Category</label>
                    <select
                      className="form-control mt-2"
                      name="pet_cate_id"
                      value={pet.pet_cate_id}
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

                  <div className="col-md-6">
                    <label>Pet Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control mt-2"
                      value={pet.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Age</label>
                    <input
                      type="text"
                      name="age"
                      className="form-control mt-2"
                      value={pet.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Status</label>
                    <select
                      className="form-control mt-2"
                      name="status"
                      value={pet.status}
                      onChange={handleChange}
                    >
                      <option value="Available">Available</option>
                      <option value="Adopted">Adopted</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label>Description</label>
                  <textarea
                    className="form-control mt-2"
                    name="desc"
                    rows="3"
                    value={pet.desc}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <label>Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control mt-2"
                    onChange={handleFileChange}
                  />
                </div>

                {preview && (
                  <div className="mt-3">
                    <img
                      src={preview}
                      alt="Preview"
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                )}

                <div className="mt-4">
                  <button
                    className="btn btn-primary"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Adding..." : "Save Pet"}
                  </button>

                  <button
                    type="reset"
                    className="btn btn-light ms-2"
                    onClick={() => {
                      setPet({
                        pet_cate_id: "",
                        name: "",
                        desc: "",
                        age: "",
                        status: "Available",
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

export default PetInput;
