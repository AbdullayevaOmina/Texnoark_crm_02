import AddModal from "./end";
import DrawerComponent from "./drowerComponent";
import PreviewDrawer from "./prewievDrawer";
import { Start } from "./start";
import { Ask } from "@modals";

const Products = () => {
  return (
    <div className="md:pl-[255px] pt-14">
      {/* <!-- Start block --> */}
      <Start />

      {/* <!-- AddModal block --> */}
      <AddModal />
      {/* <!-- drawer component --> */}
      <DrawerComponent />
      {/* <!-- Preview Drawer --> */}
      <PreviewDrawer />
      {/* <!-- Delete Modal --> */}
      <Ask />
    </div>
  );
};

export default Products;
