import request from "../config";
import { Request } from "@category-interface";
export const categories: Request = {
  create: (data) => request.post(`/category`, data),
  get: (id) => request.get(`/category/${id}`),
  getAll: () => request.get(`/category`),
  update: (data) => request.patch(`/category/${data.id}`, data.data),
  deleteCategory: (id) => request.delete(`/category/${id}`),
};
