import React from "react";
import Sidebar from "../common/Sidebar";


function Chatbox() {
  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Chatbox</h3>
                <p className="text-subtitle text-muted">
                  For user to check they list
                </p>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-header float-start float-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Chatbox
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="media d-flex align-items-center">
                      <div className="avatar me-3">
                        <img src="assets/images/faces/1.jpg" alt srcSet />
                        <span className="avatar-status bg-success" />
                      </div>
                      <div className="name flex-grow-1">
                        <h6 className="mb-0">Fred</h6>
                        <span className="text-xs">Online</span>
                      </div>
                      <button className="btn btn-sm">
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body pt-4 bg-grey">
                    <div className="chat-content">
                      <div className="chat">
                        <div className="chat-body">
                          <div className="chat-message">
                            Hi Alfy, how can i help you?
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-body">
                          <div className="chat-message">
                            I'm looking for the best admin dashboard template
                          </div>
                          <div className="chat-message">
                            With bootstrap certainly
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-body">
                          <div className="chat-message">
                            I recommend you to use Mazer Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-body">
                          <div className="chat-message">
                            That"s great! I like it so much :)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="message-form d-flex flex-direction-column align-items-center">
                      <a href="http://" className="black">
                        <i data-feather="smile" />
                      </a>
                      <div className="d-flex flex-grow-1 ml-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your message.."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2021 © Mazer</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with{" "}
                <span className="text-danger">
                  <i className="bi bi-heart" />
                </span>{" "}
                by <a href="http://ahmadsaugi.com">A. Saugi</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Chatbox;
