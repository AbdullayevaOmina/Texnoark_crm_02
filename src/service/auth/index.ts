import request from "../config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signin: (data) => request.post("/auth/sign-in", data),
  signup: (data) => request.post("/auth/admin/sign-up", data),
  logout: () => request.post("/admin/logout"),
};
