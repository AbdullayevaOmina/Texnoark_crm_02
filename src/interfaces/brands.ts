// --------------------------------- brand
// POST
export interface CreateBrand {
  name: string;
  description: string;
  category_id: number | undefined | null;
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

// ======================================================== brand-category

// POST
export interface CreateBC {
  name: string;
  brand_id: number;
}

export interface UpdateBC {
  id: number;
  data: CreateBC;
}

export interface GetBCs {
  id: number;
  page: number;
  limit: number;
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

export interface BC_Store {
  data_bc: any[];
  isLoading: boolean;
  totalCount: number;
  create_bc: (data: CreateBrand) => Promise<any>;
  update_bc: (data: UpdateBrand) => Promise<any>;
  get_bc: (id: number) => Promise<any>;
  getAll_bc: (params: GetAll) => Promise<any>;
  getAll_bcs: (params: GetBCs) => Promise<any>;
  delete_bc: (id: number) => Promise<any>;
}

export interface Request {
  get: (id: number) => unknown;
  getAll: (params: GetAll) => unknown;
  create: (data: CreateBrand) => unknown;
  update: (data: UpdateBrand) => unknown;
  deleteBrand: (id: number) => unknown;

  // BC
  get_bc: (id: number) => unknown;
  getAll_bc: (params: GetAll) => unknown;
  getAll_bcs: (params: GetBCs) => unknown;
  create_bc: (data: CreateBC) => unknown;
  update_bc: (data: UpdateBC) => unknown;
  delete_bc: (id: number) => unknown;
}
