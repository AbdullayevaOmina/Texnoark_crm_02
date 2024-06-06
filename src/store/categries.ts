import { create } from "zustand";
import { CategoryStore, CreateCategory } from "@category-interface";
import { categories } from "@service";
import { toast } from "react-toastify";

const useCategoryStore = create<CategoryStore>((set, get) => ({
  data: [],
  isLoading: false,
  totalCount: 1,
  create: async (reqdata: CreateCategory) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.create(reqdata);
      if (response.status === 201) {
        toast.success("Category created successfully");
        console.log(response);
        const currentData = get().data;
        console.log(currentData);
        set({ data: [...currentData, response.data.data] });
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
      const response: any = await categories.update(data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Category updated successfully");
        const currentData = get().data;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.data : item
        );
        set({ data: updatedData });
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
      const response: any = await categories.get(id);
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
      const response: any = await categories.getAll(params);
      if (response.status === 200) {
        set({
          data: response.data.data.categories,
          totalCount: response.data.data.count,
        });
      }
    } catch (error) {
      console.error("Fetch categories error:", error);
      toast.error("Failed to fetch categories");
    } finally {
      set({ isLoading: false });
    }
  },

  deleteCategory: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await categories.deleteCategory(id);
      if (response.status === 200) {
        toast.success("Category deleted successfully");
        const currentData = get().data;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Delete category error:", error);
      toast.error("Failed to delete category");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCategoryStore;
