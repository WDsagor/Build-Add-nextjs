import React from "react";

const DetailsModal = ({ order }) => {
  return (
    <>
      <input type="checkbox" id="order-details" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box w-10/12 max-w-5xl relative">
          <label
            htmlFor="order-details"
            className="btn btn-sm btn-error btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">{order}</h3>
          <p className="py-4">
            Youve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primary text-white font-normal capitalize text-lg">
                    Sl no
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-lg">
                    Item Name
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-lg">
                    Size
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-lg">
                    Total Litter
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-lg">
                    Total TK
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Blue</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                  <td>Purple</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <label htmlFor="order-details" className="btn btn-sm btn-secondary">
              Download
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
