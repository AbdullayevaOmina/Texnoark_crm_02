// --------------------------------- brand
// POST
export interface CreateBrand {
  name: string;
  description: string;
  category_id: number | null;
  file: string | undefined;
}
// PUT
export interface UpdateBrand {
  id: number;
  data: {
    name: string;
    categoryId: number;
    description: string;
  };
}
// GET

export interface GetAll {
  page: number;
  limit: number;
  search: any;
}

// STORE
export interface BrandStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  create: (data: CreateBrand) => Promise<any>;
  update: (data: UpdateBrand) => Promise<any>;
  get: (id: number) => Promise<any>;
  getAll: (params: GetAll) => Promise<any>;
  deleteBrand: (id: number) => Promise<any>;
}

export interface Request {
  get: (id: number) => unknown;
  getAll: (params: GetAll) => unknown;
  create: (data: CreateBrand) => unknown;
  update: (data: UpdateBrand) => unknown;
  deleteBrand: (id: number) => unknown;
}
