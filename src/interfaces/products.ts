// --------------------------------- Product
// Get

export interface GetAll {
  page: number;
  limit: number;
  search: any;
}
// POST
export interface CreateProduct {
  name: string;
  price: number | null | undefined;
  category_id: number | null | undefined;
  brand_category_id: number | null | undefined;
  brand_id: number | null | undefined;
}

// PUT
export interface UpdateProduct {
  id: any;
  data: CreateProduct;
}

// STORE
export interface ProductStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  create: (data: CreateProduct) => Promise<any>;
  update: (data: UpdateProduct) => Promise<any>;
  get: (id: string) => Promise<any>;
  getAll: (params: GetAll) => Promise<any>;
  deleteProduct: (id: string) => Promise<any>;
}

export interface Request {
  create: (data: CreateProduct) => unknown;
  update: (data: UpdateProduct) => unknown;
  get: (id: string) => unknown;
  getAll: (params: GetAll) => unknown;
  deleteProduct: (id: string) => unknown;
}
