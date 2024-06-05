// --------------------------------- Category
// POST
export interface CreateCategory {
  name: string;
  parent_category_id: number | null;
}

// PUT
export interface UpdateCategory {
  id: number;
  data: CreateCategory;
}

// STORE
export interface CategoryStore {
  data: any[];
  isLoading: boolean;
  create: (data: CreateCategory) => Promise<any>;
  update: (data: UpdateCategory) => Promise<any>;
  get: (id: number) => Promise<any>;
  getAll: () => Promise<any>;
  deleteCategory: (id: number) => Promise<any>;
}

export interface Request {
  get: (id: number) => unknown;
  getAll: () => unknown;
  create: (data: CreateCategory) => unknown;
  update: (data: UpdateCategory) => unknown;
  deleteCategory: (id: number) => unknown;
}
