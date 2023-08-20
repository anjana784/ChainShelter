export interface UserType {
  name: string;
  email: string;
  mobile: string;
  password: string;
  role: "admin" | "sales" | "tailor";
}

// app error type
export interface appErrorType {
  statusCode: number;
  type: string;
  message: string;
}
