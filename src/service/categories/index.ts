import request from "../config";
import { Request } from "@category-interface";

export const categories: Request = {
  create: (data) => request.post(`/category/create`, data),
  get: (id) => request.get(`/category/${id}`),
  getAll: (params) =>
    request.get(
      `/category/search?search=${params.search}&limit=${params.limit}&page=${params.page}`
    ),
  update: (data) => request.patch(`/category/update/${data.id}`, data.data),
  deleteCategory: (id) => request.delete(`/category/delete/${id}`),

  // ======================== sub-category ==========================
  create_sub: (data) => request.post(`/sub-category/create`, data),
  get_sub: (id) => request.get(`/category/${id}`),
  update_sub: (data) => request.patch(`/sub-category/update/${data.id}`, data.data),
  deleteCategory_sub: (id) => request.delete(`/sub-category/delete/${id}`),
  getAllSubCategory: (params) =>
    request.get(
      `/sub-category/search/${params.parent_category_id}?limit=${params.limit}&page=${params.page}`
    ),
};

// /sub-category/search/293?limit=100&page=1

// /sub-category/update/1
// https://ecomapi.ilyosbekdev.uz/sub-category/update/1
