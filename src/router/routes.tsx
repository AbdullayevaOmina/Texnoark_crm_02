import {
  ProductsIcon,
  CatgoryIcon,
  BrandsIcon,
  OwerviewIcon,
} from "@drawer-icons";

const router = [
  {
    path: "/main",
    content: "Overview",
    icon: OwerviewIcon,
  },
  {
    path: "/main/categories",
    content: "Categories",
    icon: CatgoryIcon,
  },
  {
    path: "/main/brands",
    content: "Brands",
    icon: BrandsIcon,
  },
  {
    path: "/main/products",
    content: "Products",
    icon: ProductsIcon,
  },
];

export default router;
