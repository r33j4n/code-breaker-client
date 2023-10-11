import React from "react";
const GamePage = () => {
  return (
    <React.Fragment>
      <div class="d-flex flex-column BoxBorder m-2">
        <div className="d-flex justify-content-between m-5">
          <div></div>
          <div class="d-flex flex-column">
            <div class="p-2 BoxBorder">
            <form>
              <input className="Levelx m-2"/>
             </form> 
            </div>
            <div>
              <div class="p-2">
                <div className="d-flex justify-content-between mt-5">
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 1&nbsp; </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 2 &nbsp;  </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 3 &nbsp;  </h1>
                  </button>
                </div>
              </div>
              <div class="p-2">
                <div className="d-flex justify-content-between mt-5">
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 4 &nbsp;  </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 5 &nbsp;  </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 6 &nbsp;  </h1>
                  </button>
                </div>
              </div>
              <div class="p-2">
                <div className="d-flex justify-content-between mt-5">
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 7 &nbsp;  </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 8 &nbsp;  </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 9 &nbsp;  </h1>
                  </button>
                </div>
              </div>
              <div class="p-2">
                <div className="d-flex justify-content-between mt-5">
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">Clear</h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">&nbsp; 0&nbsp; </h1>
                  </button>
                  <button className="BoxBorder">
                    <h1 className="Levelx m-2">Back</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GamePage;
