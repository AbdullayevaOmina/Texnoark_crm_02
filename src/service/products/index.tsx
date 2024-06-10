import request from "../config";
import { Request } from "@products-interface";
export const products: Request = {
  create: (data) => request.post(`/products/create`, data),
  get: (id) => request.get(`/products/${id}`),
  getAll: (params) =>
    request.get(
      `/products/search?search=${params.search}&limit=${params.limit}&page=${params.page}`
    ),
  update: (data) => request.patch(`/products/update${data.id}`, data.data),
  deleteProduct: (id) => request.delete(`/products/delete${id}`),
};
