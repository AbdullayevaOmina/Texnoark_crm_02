import { create } from "zustand";
import { BrandStore } from "@brands-interface";
import { brands } from "@service";
import { toast } from "react-toastify";

const usebrandsStore = create<BrandStore>((set, get) => ({
  data: [],
  isLoading: false,

  create: async (reqdata) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.create(reqdata);
      if (response.status === 201) {
        toast.success("brand created successfully");
        console.log(response);
        const currentData = get().data;
        console.log(currentData);
        set({ data: [...currentData, response.data.data] });
      }
      return response.status;
    } catch (error) {
      console.error("Create brand error:", error);
      toast.error("Failed to create brand");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  update: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.update(data);
      if (response.status === 200) {
        toast.success("Brand updated successfully");
        const currentData = get().data;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.brands : item
        );
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Update Brand error:", error);
      toast.error("Failed to update brand");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  get: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.get(id);
      console.log(response);

      // if (response.status === 200) {
      //   return response.data.
      // }
    } catch (error) {
      console.error("Get brand error:", error);
      toast.error("Failed to fetch brand");
    } finally {
      set({ isLoading: false });
    }
    return null;
  },

  getAll: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.getAll(params);
      console.log(response);
    } catch (error) {
      console.error("Fetch brands error:", error);
      toast.error("Failed to fetch brands");
    } finally {
      set({ isLoading: false });
    }
  },

  deleteBrand: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.delete(id);
      if (response.status === 200) {
        toast.success("brand deleted successfully");
        const currentData = get().data;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Delete brand error:", error);
      toast.error("Failed to delete brand");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default usebrandsStore;
