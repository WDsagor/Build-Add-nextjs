import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const index = () => {
  return (
    <DashboardLayout title="My Order">
      <div className="flex-1 px-2 mx-2 justify-center text-4xl">
        Wellcome to Order Page
      </div>
    </DashboardLayout>
  );
};
export default index;
