class User {
  constructor(
    private name: string,
    private email: string,
    private mobile: string,
    private password: string,
    private role: "admin" | "sales" | "tailor"
  ) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
    this.role = role;
  }
}

export default User;
