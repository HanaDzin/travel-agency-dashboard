import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems, MobileSidebar } from "components";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* mobile sidebar */}
      <MobileSidebar />
      {/* desktop sidebar */}
      <aside className="w-full max-w-[720px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      {/* rest of page content, wrapped by layout */}
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
