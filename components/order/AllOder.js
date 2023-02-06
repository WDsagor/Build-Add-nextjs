import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import DetailsModal from "./DetailsModal";

const AllOder = () => {
  const [order, setOrder] = useState("Order No");
  return (
    <DashboardLayout title="All Oders">
      <h1>all Oders</h1>
      <div className="flex-1 px-2 mx-2 justify-center mt-4">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>SL no</th>
                <th>Name</th>
                <th>Order No</th>
                <th>Order Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <button className="btn btn-xs btn-primary">Pending...</button>
                </td>
                <td>
                  <label
                    htmlFor="order-details"
                    className="btn btn-link capitalize">
                    Details
                  </label>
                  <DetailsModal order={order} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllOder;
