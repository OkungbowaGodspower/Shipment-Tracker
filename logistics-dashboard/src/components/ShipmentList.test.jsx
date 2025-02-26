import { render, screen } from "@testing-library/react";
import ShipmentList from "./ShipmentList";
test("renders shipment list with correct data", () => {
  const mockData = [
    { id: 1, status: "In Transit", destination: "Lagos" },
    { id: 2, status: "Pending", destination: "Abuja" },
  ];

  render(<ShipmentList shipments={mockData} />);

  expect(screen.getByText("Shipments")).toBeInTheDocument();

  expect(screen.getByText("ID: 1")).toBeInTheDocument();
  expect(screen.getByText("Status: In Transit")).toBeInTheDocument();
  expect(screen.getByText("Destination: Lagos")).toBeInTheDocument();

  expect(screen.getByText("ID: 2")).toBeInTheDocument();
  expect(screen.getByText("Status: Pending")).toBeInTheDocument();
  expect(screen.getByText("Destination: Abuja")).toBeInTheDocument();
});

test("renders empty shipment list", () => {
  render(<ShipmentList shipments={[]} />);

  expect(screen.getByText("Shipments")).toBeInTheDocument();

  expect(screen.queryByText("ID: 1")).toBeNull();
});
