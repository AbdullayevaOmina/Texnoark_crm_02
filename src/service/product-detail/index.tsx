import request from "../config";
import { Request } from "@product-detail-interface";
export const productDetail: Request = {
  create: (data) => request.post(`/product-detail/create`, data),
  get: (id) => request.get(`/product-detail/${id}`),
  getAll: (params) =>
    request.get(
      `/product-detail/search?search=${params.search}&limit=${params.limit}&page=${params.page}`
    ),
  update: (data) =>
    request.patch(`/product-detail/update${data.id}`, data.data),
  deleteProduct: (id) => request.delete(`/product-detail/delete/${id}`),
};
