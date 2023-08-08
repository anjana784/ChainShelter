class User {
  private name: string;
  private email: string;
  private mobile: string;
  private password: string;
  private role: "admin" | "sales" | "tailor";

  constructor(
    name: string,
    email: string,
    mobile: string,
    password: string,
    role: "admin" | "sales" | "tailor"
  ) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
    this.role = role;
  }
}

export default User;
