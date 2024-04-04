import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";

function Total_card() {
  //fetches data stored in store
  const alldata = useSelector((state) => state.app);

  return (
    <div className="card mx-5 text-start sticky-top" style={{}}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: "monospace" }}>
          Cart:
        </h5>
        <hr />
        <h6
          className="card-subtitle mb-2 text-body-secondary"
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Total Quantity is:{alldata.quantity}
        </h6>
        <h6
          className="card-subtitle mb-2 text-body-secondary"
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Total Value is:{alldata.total}$
        </h6>
        <h6></h6>
      </div>
    </div>
  );
}

export default Total_card;
