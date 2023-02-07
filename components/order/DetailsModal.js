import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";
import Loading from "../share/Loading";

const DetailsModal = ({ order }) => {
  const [user, loading] = useAuthState(auth);
  const [isEdit, setIsEdit] = useState(false);
  const [admin, setAdmin] = useState(true);
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
        <div className="modal-box w-10/12 max-w-5xl  relative">
          <label
            htmlFor="order-details"
            className="btn btn-sm btn-error btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className=" max-w-sm">
              <h3 className="font-bold uppercase">{order} : 10202</h3>
              <h3 className="">Order Place : {user?.displayName} </h3>
            </div>
            <div className="">
              <p>
                <span className=" text-primary pt-4">Order Date : </span>
                {date}
              </p>
              <p>
                <span className=" text-primary">Delivery Date : </span> {date}
              </p>
            </div>
          </div>
          <hr className="py-2" />
          <div className="overflow-x-auto">
            <table className="table table-normal w-full">
              <thead>
                <tr>
                  <th className="bg-primary text-white font-normal capitalize text-[14px]">
                    Size
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-[14px]">
                    Item Name
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-[14px]">
                    Pcs
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-[14px]">
                    Litter
                  </th>
                  <th className="bg-primary text-white font-normal capitalize text-[14px]">
                    Total TK
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4 Litter</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered input-xs max-w-xs input-ghost disabled:bg-transparent disabled:p-0 disabled:border-hidden disabled:cursor-text"
                      disabled={!isEdit}
                    />
                  </td>
                  <td>Blue</td>
                  <td>Blue</td>
                </tr>

                <tr>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                  <td>Purple</td>
                  <td>Purple</td>
                </tr>

                <tr>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <td className="bg-secondary text-black font-semibold capitalize text-[14px]"></td>
                  <td className="bg-secondary text-black font-semibold capitalize text-[14px]">
                    Total
                  </td>
                  <td className="bg-secondary text-black font-semibold capitalize text-[14px]">
                    200
                  </td>
                  <td className="bg-secondary text-black font-semibold capitalize text-[14px]">
                    2000
                  </td>
                  <td className="bg-secondary text-black font-semibold capitalize text-[14px]">
                    10000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <label
              htmlFor="order-details"
              className="btn btn-sm text-black btn-secondary">
              Download
            </label>
            {admin && (
              <>
                {isEdit ? (
                  <label
                    onClick={() => setIsEdit(!isEdit)}
                    className="btn btn-sm btn-primary text-black hover:text-white font-normal">
                    Update
                  </label>
                ) : (
                  <label
                    onClick={() => setIsEdit(!isEdit)}
                    className="btn btn-sm btn-error text-white font-normal">
                    Edit
                  </label>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
