class User {
  private email: string;
  private username: string;
  private password: string;
  private id?: string;
  constructor(email: string, username: string, password: string, id?: string) {
    this.email = email;
    this.username = username;
    this.password = password;
    if (id) {
      this.id = id;
    }
  }
  getPassword() {
    return this.password;
  }
  getId() {
    return this.id;
  }
}
export { User };
