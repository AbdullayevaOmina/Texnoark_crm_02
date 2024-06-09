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

  // ++++++++++++++++++++ BC ++++++++++++++++++++
  create_bc: (data) => request.post(`/brand-category/create`, data),
  get_bc: (id) => request.get(`/brand-category/${id}`),
  getAll_bc: (params) =>
    request.get(
      `/brand-category/search?search=${params.search}&limit=${params.limit}&page=${params.page}`
    ),
  getAll_bcs: (params) =>
    request.get(
      `/brand-category/brand/${params.id}?limit=${params.limit}&page=${params.page}`
    ),
  update_bc: (data) =>
    request.patch(`/brand-category/update/${data.id}`, data.data),
  delete_bc: (id) => request.delete(`/brand-category/delete/${id}`),
};
