import { Button } from "bootstrap";
import React from "react";
const Play = () => {
  return (
    <div class="d-flex flex-column BoxBorder m-2">
      <div className="d-flex justify-content-between m-5">
        <div></div>
        <div class="d-flex flex-column">
          <div class="p-2 BoxBorder">
            <h1 className="Levelx m-2">Choose Level</h1>
          </div>
          <div>
            <div class="p-2">
              <div className="d-flex justify-content-between mt-5">
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">1</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">2</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">3</h1>
                </button>
              </div>
            </div>
            <div class="p-2">
            <div className="d-flex justify-content-between mt-5">
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">4</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">5</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">6</h1>
                </button>
              </div>
              
            </div>
            <div class="p-2">
            <div className="d-flex justify-content-between mt-5">
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">7</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">8</h1>
                </button>
                <button className="BoxBorder">
                  <h1 className="Levelx m-2">9</h1>
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Play;
