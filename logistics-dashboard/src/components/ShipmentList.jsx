import React from "react";

const ShipmentList = ({ shipments }) => {
  return (
    <div className="shipment-list">
      <h2>Shipments</h2>
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
  );
};

export default ShipmentList;
