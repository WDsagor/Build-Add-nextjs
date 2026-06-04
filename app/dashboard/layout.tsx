import Sidebar from "@/components/share/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <title>Dashboard | Super FIXIT Ltd</title>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="p-2 max-w-screen-2xl mx-auto">{children}</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible pt-20 md:pt-0">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=" h-auto bg-base-200 is-drawer-close:w-14 is-drawer-open:w-52">
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
