import { useState } from "react";
import Modal from "../../../Components/UI/Modal";
import Table from "../../../Components/UI/Table";
import { OrderStat } from "./OrderStat";


const initialOrders = [
  {
    id: 1,
    items: "2x Jollof Rice",
    address: "12 Bodija St",
    amount: "5,000",
    status: "Received",
  },
  {
    id: 2,
    items: "1x Egusi Soup",
    address: "4 Ring Rd",
    amount: "3,500",
    status: "Pending",
  },
  {
    id: 3,
    items: "1x vegetable Soup",
    address: "4 Ring Rd",
    amount: "3,500",
    status: "Pending",
  },
  {
    id: 4,
    items: "1x okro Soup",
    address: "4 Ring Rd",
    amount: "3,500",
    status: "Pending",
  },
  {
    id: 5,
    items: "1x plantain",
    address: "4 Ring Rd",
    amount: "3,500",
    status: "Pending",
  },
  
];

const OrdersPage = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const toggleStatus = (id) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === id
          ? {
              ...order,
              status: order.status === "Pending" ? "Received" : "Pending",
            }
          : order,
      ),
    );
  };

  return (
    <>
      <Table
        headers={OrderStat}
        rows={orders}
        renderRow={(order) => (
          <>
            <td
              className="px-4 py-3 cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              {order.items}
            </td>
            <td
              className="px-4 py-3 cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              {order.address}
            </td>
            <td
              className="px-4 py-3 cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              {order.amount}
            </td>
            <td
              className="px-4 py-3 cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              {order.status}
            </td>

            <td className="px-4 py-3">
              <button
                onClick={() => toggleStatus(order.id)}
                className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
              >
                {order.status === "Pending" ? "Mark Received" : "Mark Pending"}
              </button>
            </td>
          </>
        )}
      />

      <Modal
        isOpen={selectedOrder !== null}
        onClose={() => setSelectedOrder(null)}
      >
        {selectedOrder && (
          <div>
            <h2 className="font-semibold text-lg mb-3">
              Order #{selectedOrder.id}
            </h2>
            <p>
              <span className="font-medium">Items:</span> {selectedOrder.items}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {selectedOrder.address}
            </p>
            <p>
              <span className="font-medium">Amount:</span> ₦
              {selectedOrder.amount}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              {selectedOrder.status}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default OrdersPage;
