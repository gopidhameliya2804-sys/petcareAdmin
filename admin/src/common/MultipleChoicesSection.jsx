import React, { useEffect, useRef } from "react";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

function MultipleChoicesSection() {
  // Refs for each select
  const basicRef = useRef(null);
  const labelRef = useRef(null);
  const removeRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    if (basicRef.current) {
      new Choices(basicRef.current, { removeItemButton: false });
    }

    if (labelRef.current) {
      new Choices(labelRef.current, { removeItemButton: false });
    }

    if (removeRef.current) {
      new Choices(removeRef.current, { removeItemButton: true });
    }

    if (lightRef.current) {
      new Choices(lightRef.current, { removeItemButton: false });
    }
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .choices__list--multiple .choices__item {
      background-color: #5a8dee !important;
      color: #fff !important;
      border-radius: 0px !important;
      border:none !important;
    }
  `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="multiple-choices">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Multiple choices</h4>
            </div>

            <div className="card-content">
              <div className="card-body">
                <div className="row">
                  {/* Basic Multiple Choice */}
                  <div className="col-md-6 mb-4">
                    <h6>Basic Multiple choices</h6>
                    <p>
                      Use <code>.choices</code> class for basic choices control.
                      Use
                      <code>multiple="multiple"</code>
                      attribute for multiple select box.
                    </p>

                    <div className="form-group">
                      <select
                        ref={basicRef}
                        multiple
                        className="choices form-select"
                      >
                        <option value="square">Square</option>
                        <option
                          value="rectangle"
                          selected
                          style={{ backgroundColor: "#5a8dee" }}
                        >
                          Rectangle
                        </option>
                        <option value="rombo">Rombo</option>
                        <option value="romboid">Romboid</option>
                        <option value="trapeze">Trapeze</option>
                        <option value="triangle" selected>
                          Triangle
                        </option>
                        <option value="polygon">Polygon</option>
                      </select>
                    </div>
                  </div>

                  {/* Multiple Select with Label */}
                  <div className="col-md-6 mb-4">
                    <h6>Multiple Select with Label</h6>
                    <p>
                      Use <code>optgroup</code> attribute for multiple select
                      box with Label control.
                    </p>

                    <div className="form-group">
                      <select
                        ref={labelRef}
                        multiple
                        className="choices form-select"
                      >
                        <optgroup label="Figures">
                          <option value="romboid">Romboid</option>
                          <option value="trapeze" selected>
                            Trapeze
                          </option>
                          <option value="triangle">Triangle</option>
                          <option value="polygon">Polygon</option>
                        </optgroup>
                        <optgroup label="Colors">
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue" selected>
                            Blue
                          </option>
                          <option value="purple">Purple</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* With Remove Button */}
                  <div className="col-md-6 mb-4">
                    <h6>Multiple Select with Remove Button</h6>
                    <p>
                      Use <code>.multiple-remove</code> attribute for multiple
                      select box with remove button.
                    </p>

                    <div className="form-group">
                      <select
                        ref={removeRef}
                        multiple
                        className="choices form-select"
                      >
                        <optgroup label="Figures">
                          <option value="romboid">Romboid</option>
                          <option value="trapeze" selected>
                            Trapeze
                          </option>
                          <option value="triangle">Triangle</option>
                          <option value="polygon">Polygon</option>
                        </optgroup>
                        <optgroup label="Colors">
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue" selected>
                            Blue
                          </option>
                          <option value="purple">Purple</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Light Background */}
                  <div className="col-md-6 mb-4">
                    <h6>Choices with Light Background</h6>
                    <p>
                      Use{" "}
                      <code>
                        .select-light-{"{"}colorName{"}"}
                      </code>{" "}
                      class for light background to selected Options.
                    </p>
                    <div className="form-group">
                      <select
                        ref={lightRef}
                        multiple
                        className="choices form-select select-light-danger"
                      >
                        <option value="square">Square</option>
                        <option value="rectangle" selected>
                          Rectangle
                        </option>
                        <option value="rombo">Rombo</option>
                        <option value="romboid">Romboid</option>
                        <option value="trapeze">Trapeze</option>
                        <option value="triangle" selected>
                          Triangle
                        </option>
                        <option value="polygon">Polygon</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultipleChoicesSection;
