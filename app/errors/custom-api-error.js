class CustomAPIError extends error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;
