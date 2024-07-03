// --------------------------------- Product
// Get

export interface GetAll {
  page: number;
  limit: number;
  search: any;
}
// POST
export interface CreateProductDetail {
  quantity: number | null;
  description: string;
  files: object;
  product_id: number;
  colors: string;
  discount: number | null;
}

export interface CreateProductDetailData {
  quantity: number | null;
  description: string;
  product_id: number;
  colors: string;
  discount: number | null;
}

// PUT
export interface UpdateProductDetail {
  id: any;
  data: CreateProductDetailData;
}

// STORE
export interface ProductDetailStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  create: (data: CreateProductDetail) => Promise<any>;
  update: (data: UpdateProductDetail) => Promise<any>;
  get: (id: any) => Promise<any>;
  getAll: (params: GetAll) => Promise<any>;
  deleteProduct: (id: any) => Promise<any>;
}

export interface Request {
  create: (data: CreateProductDetail) => unknown;
  update: (data: UpdateProductDetail) => unknown;
  get: (id: any) => unknown;
  getAll: (params: GetAll) => unknown;
  deleteProduct: (id: any) => unknown;
}
