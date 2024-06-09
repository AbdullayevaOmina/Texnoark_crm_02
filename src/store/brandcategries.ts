import { create } from "zustand";
import { BC_Store } from "@brands-interface";
import { brands } from "@service";
import { toast } from "react-toastify";

const useCategoryStore = create<BC_Store>((set, get) => ({
  data_bc: [],
  isLoading: false,
  totalCount: 1,
  create_bc: async (reqdata: any) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.create_bc(reqdata);
      console.log(response);

      if (response.status === 201) {
        toast.success("Brand Category created successfully");
        console.log(response);
        const currentData = get().data_bc;
        console.log(currentData);
        set({ data_bc: [...currentData, response.data.data] });
      }
      return response.status;
    } catch (error) {
      console.error("Create category error:", error);
      toast.error("Failed to create category");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  update_bc: async (data: any) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.update_bc(data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Category updated successfully");
        const currentData = get().data_bc;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.data : item
        );
        set({ data_bc: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Update category error:", error);
      toast.error("Failed to update category");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  get_bc: async (id: any) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.getAll_bc(id);
      console.log(response);
      if (response.status === 200) {
        return response.data.data;
      }
      
    } catch (error) {
      console.error("Get category error:", error);
      toast.error("Failed to fetch category");
    } finally {
      set({ isLoading: false });
    }
    return null;
  },

  getAll_bc: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.getAll_bc(params);
      if (response.status === 200) {
        set({
          data_bc: response.data.data.Brandbrands,
          totalCount: Math.ceil(response.data.data.count / params.limit),
          isLoading: false,
        });
      }
      return response.status;
    } catch (error: any) {
      console.log("Fetch brands error:", error);
      return error.response.status;
      toast.error("Failed to fetch brands");
    } finally {
      set({ isLoading: false });
    }
  },

  getAll_bcs: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.getAll_bcs(params);
      if (response.status === 200) {
        set({
          data_bc: response.data.data.brandCategories,
          totalCount: Math.ceil(response.data.data.count / params.limit),
          isLoading: false,
        });
      }
      return response.status;
    } catch (error: any) {
      console.log("Fetch brands error:", error);
      return error.response.status;
      toast.error("Failed to fetch brands");
    } finally {
      set({ isLoading: false });
    }
  },

  delete_bc: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await brands.delete_bc(id);
      if (response.status === 200) {
        toast.success("Brand category deleted successfully");
        const currentData = get().data_bc;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ data_bc: updatedData, isLoading: false });
      }
      return response.status;
    } catch (error) {
      console.error("Delete Brand category error:", error);
      toast.error("Failed to delete category");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCategoryStore;
