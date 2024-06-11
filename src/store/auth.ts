import { create } from "zustand";
import { AuthStore } from "@auth-interface";
import { auth } from "@service";
import { setDataToCookie } from "@cookie";
import { toast } from "react-toastify";

const useRegisterStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signin(data);
      console.log(response);

      if (response.status === 201) {
        set({ data: response.data.admin });
        setDataToCookie("access_token", response.data.data.tokens.access_token);
        setDataToCookie(
          "refresh_token",
          response.data.data.tokens.refresh_token
        );
        setDataToCookie("first_name", response.data.data.data.first_name);
        setDataToCookie("last_name", response.data.data.data.last_name);
        setDataToCookie("admin_email", response.data.data.data.email);
        setDataToCookie(
          "admin_phone_number",
          response.data.data.data.phone_number
        );
        setDataToCookie("admin_id", response.data.data.data.id);
      } else if (response.status === 400)
        toast.warning("Wrong email or password!");
      else if (response.status === 404)
        toast.info("You are not registered yet. Please sign up");
      else if (response.status === 500)
        toast.warning("Sorry, the connection to the server has been lost");

      return response.status;
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signup(data);
      return response;
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      const response: any = await auth.logout();
      return response.status;
    } catch (error) {
      console.error("Log-out error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
