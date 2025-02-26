import React from "react";

const ShipmentList = ({ shipments }) => {
  return (
    <div className="shipment-container">
      <h2 className="heading">Shipments</h2>
      <div className="shipment-list">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="shipment-item">
            <p>
              {" "}
              <span className="tag">ID:</span> {shipment.id}
            </p>
            <p>
              {" "}
              <span className="tag">Status:</span> {shipment.status}
            </p>
            <p>
              {" "}
              <span className="tag">Destination:</span> {shipment.destination}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentList;
