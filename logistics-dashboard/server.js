const io = require("socket.io")(5000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const fs = require("fs");
const path = require("path");

const mockDataPath = path.join(__dirname, "public", "mockData.json");
const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));

console.log("Loaded mockData:", mockData); // Debugging

const statusSequence = ["Pending", "In Transit", "Delivered"];

// Track the current status index for each shipment
const shipmentStatusIndices = mockData.reduce((acc, shipment) => {
  acc[shipment.id] = statusSequence.indexOf(shipment.status); // Start at the current status
  return acc;
}, {});

io.on("connection", (socket) => {
  console.log("Client connected");

  setInterval(() => {
    mockData.forEach((shipment) => {
      const currentStatusIndex = shipmentStatusIndices[shipment.id];
      const nextStatusIndex = currentStatusIndex + 1;

      if (nextStatusIndex < statusSequence.length) {
        const newStatus = statusSequence[nextStatusIndex];
        shipmentStatusIndices[shipment.id] = nextStatusIndex;

        console.log(`Updating shipment ${shipment.id} to ${newStatus}`); // Debugging

        socket.emit("shipmentUpdate", {
          id: shipment.id,
          status: newStatus,
          destination: shipment.destination,
        });
      }
    });
  }, 5000);
});
