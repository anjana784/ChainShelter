class AppError extends Error {
  constructor(
    public statusCode: number,
    public error: {
      type: string;
      message: string;
    }
  ) {
    super(error.message);
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
