// --------- Authorization  -------------

export interface Signin {
  PhoneNumber: string;
  password: string;
}

export interface Signup {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface AuthStore {
  data: any[];
  isLoading: boolean;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
  logout: () => Promise<any>;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
  logout: () => unknown;
}
