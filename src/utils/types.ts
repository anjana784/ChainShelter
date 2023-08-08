export interface AppErrorType {
  message: string;
  statusCode: number;
  type: string;
}

export interface UserType {
  name: string;
  email: string;
  mobile: string;
  password: string;
  role: "admin" | "sales" | "tailor";
}
