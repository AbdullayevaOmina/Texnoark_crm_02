import request from "../config";
import { Request } from "@brands-interface";
export const brands: Request = {
  create: (data) => request.post(`/brand`, data),
  get: (id) => request.get(`/brand/${id}`),
  getAll: (params) =>
    request.get(`/brand?limit=${params.limit}&page=${params.page}`),
  update: (data) => request.patch(`/brand/${data.id}`, data.data),
  delete: (id) => request.delete(`/brand/${id}`),
};
