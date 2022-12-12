import React from "react";

import "./Statistics.scss";

const Details = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex studentDetails ms-5">
          <div className="allDetails align-items-center m-5 px-4 py-3">
            <h3>Students</h3>
            <h5>1048</h5>
          </div>
          <div className="allDetails align-items-center m-5 px-4 py-3">
            <h3>Students</h3>
            <h5>1048</h5>
          </div>
          <div className="allDetails align-items-center m-5 px-4 py-3">
            <h3>Students</h3>
            <h5>1048</h5>
          </div>
          <div className="allDetails align-items-center m-5 px-4 py-3">
            <h3>Students</h3>
            <h5>1048</h5>
          </div>
        </div>
        <div className="barGraph-image ms-5 mt-4">
          <img className="barGraph-image" src="./BarGraph.JPG" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Details;
