import Sidebar from "@/components/share/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <title>Dashboard | Super FIXIT Ltd</title>
      <Sidebar />
      <main className="max-w-screen-2xl flex-1 px-2 mx-auto py-5">
        {children}
      </main>
    </div>
  );
};

export default layout;
