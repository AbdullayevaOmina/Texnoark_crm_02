import { create } from "zustand";
import { SubCategoryStore } from "@category-interface";
import { categories } from "@service";
import { toast } from "react-toastify";

const useCategoryStore = create<SubCategoryStore>((set, get) => ({
  subData: [],
  isLoading: false,
  totalCount: 1,
  create: async (reqdata) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.create_sub(reqdata);
      if (response.status === 201) {
        toast.success("Sub Category created successfully");
        console.log(response);
        const currentData = get().subData;
        console.log(currentData);
        set({ subData: [...currentData, response.data.data] });
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

  update: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.update_sub(data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Category updated successfully");
        const currentData = get().subData;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.data : item
        );
        set({ subData: updatedData });
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

  get: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.get_sub(id);
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

  getAll: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.getAllSubCategory(params);
      if (response.status === 200) {
        set({
          subData: response.data.data.subcategories,
          totalCount: Math.ceil(response.data.data.count / params.limit),
          isLoading: false,
        });
      }
      return response.status;
    } catch (error: any) {
      console.log("Fetch categories error:", error);
      return error.response.status;
      toast.error("Failed to fetch categories");
    } finally {
      set({ isLoading: false });
    }
  },
  deleteSubCategory: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.deleteCategory_sub(id);
      if (response.status === 200) {
        toast.success("Category Sub deleted successfully");
        const currentData = get().subData;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ subData: updatedData, isLoading: false });
      }
      return response.status;
    } catch (error) {
      console.error("Delete Sub category error:", error);
      toast.error("Failed to delete category");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCategoryStore;
