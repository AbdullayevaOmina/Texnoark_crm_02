import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import {
  Brands,
  Categories,
  Home,
  Models,
  NotFound,
  Products,
  Settings,
  SingleCategory,
} from "@pages";
import { MainLayout, SignIn, SignUp } from "@layout";
import { getDataFromCookie } from "@cookie";
// import { ProtectedRoute, RequireAuth } from "./protected-routes/index";

const index = () => {
  const id = getDataFromCookie("parent_category_id");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        {/* <Route index element={<ProtectedRoute element={<SignIn />} />} /> */}
        {/* <Route
          path="signup"
          element={<ProtectedRoute element={<SignUp />} />}
        /> */}
        {/* <Route
          path="/main/*"
          element={<RequireAuth element={<MainLayout />} />}
        > */}
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/main/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="brands" element={<Brands />} />
          <Route path="models" element={<Models />} />
          <Route path="categories" element={<Categories />} />
          <Route
            path={`categories/category=${id}`}
            element={<SingleCategory />}
          />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
