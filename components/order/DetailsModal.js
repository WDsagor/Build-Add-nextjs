import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";
import Loading from "../share/Loading";

const DetailsModal = ({ order }) => {
  const [user, loading] = useAuthState(auth);
  const [date, setDate] = useState();

  useEffect(() => {
    const dateFormate = [
      { day: "numeric" },
      { month: "short" },
      { year: "numeric" },
    ];
    const joinFullDate = (t, a, s) => {
      const format = (m) => {
        const f = new Intl.DateTimeFormat("en-US", m);
        return f.format(t);
      };
      return a.map(format).join(s);
    };
    const getDate = joinFullDate(new Date(), dateFormate, "-");
    setDate(getDate);
  }, []);

  if (loading) {
    return <Loading />;
  }
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
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className=" max-w-sm">
              <h3 className="font-bold uppercase">{order} : 10202</h3>
              <h3 className="">Order Place : {user?.displayName} </h3>
              <p>
                Address: Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi reprehenderit modi iste sint doloremque dolore
                delectus vitae illo veniam id.
              </p>
            </div>
            <div>
              {" "}
              <p className=" text-primary pt-4">Order Date : {date}</p>
              <p className="">Delivery Date : {date}</p>
            </div>
          </div>
          <hr className="py-2" />
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
