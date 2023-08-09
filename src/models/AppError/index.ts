class AppError {
  constructor(
    public statusCode: number,
    public error: {
      type: string;
      message: string;
    }
  ) {
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
