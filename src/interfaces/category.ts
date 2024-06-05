// --------------------------------- Category
// POST
export interface CreateCategory {
  name: string;
}

// PUT
export interface UpdateCategory {
  id: number;
  data: CreateCategory;
}

// GET
export interface GetAll {
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

export interface Request {
  get: (id: number) => unknown;
  getAll: (params: GetAll) => unknown;
  create: (data: CreateCategory) => unknown;
  update: (data: UpdateCategory) => unknown;
  deleteCategory: (id: number) => unknown;
}
