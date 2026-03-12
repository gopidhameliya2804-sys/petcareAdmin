import React from "react";
import Sidebar from "../common/Sidebar";

function FileUpload() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>File Uploader</h3>
                  <p className="text-subtitle text-muted">
                    File uploader that makes user easier to upload their files
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        File Uploader
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Basic File Uploader</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic file uploader up, upload here to see
                          how
                          <code>.basic-filepond</code> look.
                        </p>
                        {/* Basic file uploader */}
                        <input type="file" className="basic-filepond" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">ImgBB Uploader</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic file uploader up, upload here to see
                          how
                          <code>.imgbb-filepond</code>-based basic file uploader
                          look. You must use
                          <code>name=image</code> or by FormData fieldName for
                          your input <code>type=file</code> to upload in imgBB.
                        </p>
                        {/* imgBB file uploader */}
                        <input
                          type="file"
                          name="image"
                          className="imgbb-filepond"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Multiple Files</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.multiple-files-filepond</code>-based basic file
                          uploader look. You can use
                          <code>allowMultiple</code> or <code>multiple</code>{" "}
                          attribute too to implement multiple upload.
                        </p>
                        {/* File uploader with multiple files upload */}
                        <input
                          type="file"
                          className="multiple-files-filepond"
                          multiple
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">With Validation</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.with-validation-filepond</code>-based basic
                          file uploader look. You can use
                          <a
                            href="https://pqina.nl/filepond/docs/patterns/plugins/file-validate-size/#properties"
                            target="_blank"
                          >
                            see here
                          </a>
                          or{" "}
                          <code>
                            required (to make your input required),
                            data-max-file-size (to limit your input file size),
                            data-max-files (to limit your uploaded files), etc
                            (start with data-)
                          </code>{" "}
                          attribute too to implement validation.
                        </p>
                        {/* File uploader with validation */}
                        <input
                          type="file"
                          className="with-validation-filepond"
                          required
                          multiple
                          data-max-file-size="1MB"
                          data-max-files={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Image Preview</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.image-preview-filepond</code>-based basic file
                          uploader look. This preview for uploaded or dropped
                          images.
                        </p>
                        {/* File uploader with image preview */}
                        <input type="file" className="image-preview-filepond" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Image Exif Orientation</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.image-exif-filepond</code>-based basic file
                          uploader look. This helps in correctly orienting
                          photos taken on mobile devices.
                        </p>
                        {/* Auto image crop file uploader */}
                        <input type="file" className="image-exif-filepond" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Image Auto Crop</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.image-crop-filepond</code>-based basic file
                          uploader look. You can use
                          <code>imageCropAspectRatio</code> or{" "}
                          <code>image-crop-aspect-ratio</code> to set aspect
                          ratio.
                        </p>
                        {/* Auto crop image file uploader */}
                        <input
                          type="file"
                          className="image-crop-filepond"
                          image-crop-aspect-ratio="1:1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Image Auto Filter</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.image-filter-filepond</code>-based basic file
                          uploader look.
                        </p>
                        {/* Auto filter image file uploader */}
                        <input type="file" className="image-filter-filepond" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Image Auto Resize</h5>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the basic table up, upload here to see how
                          <code>.image-resize-filepond</code>-based basic file
                          uploader look.
                        </p>
                        {/* Auto resize image file uploader */}
                        <input type="file" className="image-resize-filepond" />
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
    </div>
  );
}

export default FileUpload;
