import { create } from "zustand";
import { ProductDetailStore } from "@product-detail-interface";
import { productDetail } from "@service";
import { toast } from "react-toastify";

const useProductDetailStore = create<ProductDetailStore>((set, get) => ({
  data: [],
  isLoading: false,
  totalCount: 1,

  create: async (reqdata) => {
    set({ isLoading: true });
    try {
      const response: any = await productDetail.create(reqdata);
      if (response.status === 201) {
        toast.success("Product detail created successfully");
        const currentData = get().data;
        set({ data: [...currentData, response.data.data] });
      }
      return response.status;
    } catch (error) {
      console.error("Create product error:", error);
      toast.error("Failed to create product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  update: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await productDetail.update(data);
      if (response.status === 200) {
        toast.success("Product updated successfully");
        const currentData = get().data;
        const updatedData = currentData.map((item) =>
          item.id === data.id ? response.data.product : item
        );
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Update product error:", error);
      toast.error("Failed to update product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  get: async (id: any) => {
    set({ isLoading: true });
    try {
      const response: any = await productDetail.get(id);
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error("Get product error:", error);
      toast.error("Failed to fetch product");
    } finally {
      set({ isLoading: false });
    }
    return null;
  },

  getAll: async (params) => {
    set({ isLoading: true });
    try {
      const response: any = await productDetail.getAll(params);
      if (response.status === 200) {
        set({
          data: response.data.data.products,
          totalCount: Math.ceil(response.data.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("Fetch products error:", error);
      toast.error("Failed to fetch products");
    } finally {
      set({ isLoading: false });
    }
  },

  deleteProduct: async (id: any) => {
    set({ isLoading: true });
    try {
      const response: any = await productDetail.deleteProduct(
        id
      );
      if (response.status === 200) {
        toast.success("Product deleted successfully");
        const currentData = get().data;
        const updatedData = currentData.filter((item) => item.id !== id);
        set({ data: updatedData });
      }
      return response.status;
    } catch (error) {
      console.error("Delete product error:", error);
      toast.error("Failed to delete product");
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductDetailStore;
