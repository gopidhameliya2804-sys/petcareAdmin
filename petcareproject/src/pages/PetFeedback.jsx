import React, { useEffect, useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useNavigate } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Feedback() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [profile , setProfile] = useState({});
  const [feedback, setFeedback] = useState({
    rating: 0,
    name: "",
    email: "",
    review: "",
    user_id : "",
    timestamp: new Date(),
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (feedback.rating === 0) {
      alert("Please select a rating");
      return;
    }

    try {
      setLoading(true);
      await api.post("/user/feedback/addfeedback", feedback);
      alert("Thank you for your feedback!");
      setFeedback({
        rating: 0,
        name: "",
        email: "",
        review: "",
        user_id : profile._id,
        timestamp: new Date(),
      })
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");
      console.log(response.data.user);
      setProfile(response.data.user);
      setFeedback((prev) => ({
        ...prev,
        user_id : response.data.user.id,
      }))
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);

  

  return (
    <div>
      <BreadCrumbs
        title1="Feedback"
        title2="User Feedback"
        imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
      />

      <section className="contact-form-style1-area">
        <div
          className="contact-form-style1-bg"
          style={{
            backgroundImage:
              "url(assets/images/shape/contact-form-style1-bg.png)",
          }}
        />
        <div className="container">
          <div className="sec-title text-center">
            <h5>//<span>Feedback</span>//</h5>
            <h2>
              We Value Your Feedback
              <span className="round-box zoominout" />
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form contact-page">
                <form className="default-form2" onSubmit={handleSubmit}>
                  {/* User Id */}
                  <input  type="hidden" name="user_id" value={feedback.user_id}/>

                  {/* ⭐ Star Rating */}
                  <div className="row">
                    <div className="col-xl-12 text-center mb-4">
                      {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                          <span
                            key={ratingValue}
                            style={{
                              fontSize: "32px",
                              cursor: "pointer",
                              color:
                                ratingValue <= (hover || feedback.rating)
                                  ? "#ffc107"
                                  : "#e4e5e9",
                            }}
                            onClick={() =>
                              setFeedback((prev) => ({
                                ...prev,
                                rating: ratingValue,
                              }))
                            }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="row">
                    {/* Name */}
                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={feedback.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={feedback.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="input-box">
                        <textarea
                          name="review"
                          placeholder="Write your message"
                          value={feedback.review}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <button
                          className="btn-one gradient-bg-1"
                          type="submit"
                        >
                          <span className="txt">
                            <i className="icon-send" />
                            Submit feedback
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
