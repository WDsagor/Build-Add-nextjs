import React, { useState } from "react";
import AllOder from "../../components/order/AllOder";
import Myoders from "../../components/order/MyOders";

const Dashboard = () => {
  const [admin, setAdmin] = useState(true);
  return <>{admin ? <AllOder /> : <Myoders />}</>;
};
export default Dashboard;
