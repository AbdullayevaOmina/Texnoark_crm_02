// --------------------------------- Category
// POST
export interface CreateCategory {
  name: string;
}
export interface CreateSubCategory {
  name: string;
  parent_category_id: number;
}

// PUT
export interface UpdateCategory {
  id: number;
  data: CreateCategory;
}

export interface UpdateSubCategory {
  id: number;
  data: CreateSubCategory;
}

// GET
export interface GetAll {
  page: number;
  limit: number;
  search: any;
}

export interface GetAllSubCategory {
  parent_category_id: number;
  page: number;
  limit: number;
  search: any;
}

// STORE
export interface CategoryStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  create: (data: CreateCategory) => Promise<any>;
  update: (data: UpdateCategory) => Promise<any>;
  get: (id: number) => Promise<any>;
  getAll: (params: GetAll) => Promise<any>;
  deleteCategory: (id: number) => Promise<any>;
}

export interface SubCategoryStore {
  subData: any[];
  isLoading: boolean;
  totalCount: number;
  create: (data: CreateSubCategory) => Promise<any>;
  update: (data: UpdateSubCategory) => Promise<any>;
  get: (id: number) => Promise<any>;
  getAll: (params: GetAllSubCategory) => Promise<any>;
  deleteSubCategory: (id: number) => Promise<any>;
}

export interface Request {
  get: (id: number) => unknown;
  getAll: (params: GetAll) => unknown;
  create: (data: CreateCategory) => unknown;
  update: (data: UpdateCategory) => unknown;
  deleteCategory: (id: number) => unknown;
  // sub-category
  get_sub: (id: number) => unknown;
  getAllSubCategory: (params: GetAllSubCategory) => unknown;
  create_sub: (data: CreateSubCategory) => unknown;
  update_sub: (data: UpdateSubCategory) => unknown;
  deleteCategory_sub: (id: number) => unknown;
}
