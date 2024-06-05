// --------------------------------- Product
// Get
export interface GetByCatetgoryID {
  category_id: number;
}
export interface GetByBrand {
  brand_id: number;
}
export interface GetByModel {
  model_id: number;
}

// POST
export interface CreateProduct {
  category_id: number;
  brand_id: number;
  model_id: number;
  price: number;
  quantity: number;
}
export interface FilterAttribute {
  attribute_id: number;
  attribute_value: string;
}

export interface Filter {
  price: {
    from: number;
    to: number;
  };
  brand_id: number;
  attributes: FilterAttribute[];
}

// PUT
export interface UpdateProduct extends CreateProduct {}

// STORE
export interface ProductStore {
  data: any[];
  isLoading: boolean;
  create: (data: CreateProduct) => Promise<any>;
  get: (id: string) => Promise<any>;
  getAll: () => Promise<any>;
  getPopular: () => Promise<any>;
  getSaleProtucts: () => Promise<any>;
  delete: (id: string) => Promise<any>;
  // media
  addMedia: (product_id: any) => Promise<any>;
  deleteMedia: (id: string) => Promise<any>;
}

export interface Request {
  create: (data: CreateProduct) => unknown;
  get: (id: string) => unknown;
  getAll: () => unknown;
  getPopular: () => unknown;
  getSaleProtucts: () => unknown;
  delete: (id: string) => unknown;
  // media
  addMedia: (product_id: any) => unknown;
  deleteMedia: (id: string) => unknown;
}
