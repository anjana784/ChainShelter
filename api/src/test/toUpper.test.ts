import toUpper from "./../toUpper";

describe("toUpper", () => {
  it("should convert string to uppercase", () => {
    // Arrange
    const sut = toUpper;
    const expected = "HELLO WORLD";

    // Act
    const actual = sut("hello world");

    // Assert
    expect(actual).toBe(expected);
  });
});
