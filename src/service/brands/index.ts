import request from "../config";
import { Request } from "@brands-interface";
export const brands: Request = {
  create: (data) => request.post(`/brand/create`, data),
  get: (id) => request.get(`/brand/${id}`),
  getAll: (params) =>
    request.get(
      `/brand/search?search=${params.search}&limit=${params.limit}&page=${params.page}`
    ),
  update: (data) => request.patch(`/brand/update/${data.id}`, data.data),
  deleteBrand: (id) => request.delete(`/brand/delete/${id}`),
};
