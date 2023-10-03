import axios from "axios";
import expect from "expect";

describe("Authors Api E2E Test", () => {
  it("GET - Get All Authors Data", async () => {
    try {
      // Arrange
      const expectedResult = expect.arrayContaining([
        {
          id: expect.any(Number),
          idBook: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
        },
      ]);

      // Act
      const response = await axios.get(
        `https://fakerestapi.azurewebsites.net/api/v1/Authors`
      );
      const result = response.data;

      // Assert
      expect(result).toEqual(expectedResult);
    } catch (error: any) {
      throw new Error(`GET - Get All Authors Data failed: ${error.message}`);
    }
  });

  it("POST - Create An Author", async () => {
    try {
      // Arrange
      const authorsData = {
        id: 222,
        idBook: 11,
        firstName: "Joe",
        lastName: "Doe",
      };
      const expectedResult = authorsData;

      // Act
      const response = await axios.post(
        `https://fakerestapi.azurewebsites.net/api/v1/Authors`,
        authorsData
      );
      const result = response.data;

      // Assert
      expect(result).toEqual(expectedResult);
    } catch (error: any) {
      throw new Error(`GET - Get All Authors Data failed: ${error.message}`);
    }
  });

  it("GET - Get Authors With Book Id", async () => {
    try {
      // Arrange
      const bookId = 12;
      const expectedResult = expect.arrayContaining([
        {
          id: expect.any(Number),
          idBook: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
        },
      ]);

      // Act
      const response = await axios.get(
        `https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${bookId}`
      );
      const result = response.data;

      // Assert
      expect(result).toEqual(expectedResult);
    } catch (error: any) {
      throw new Error(`GET - Get All Authors Data failed: ${error.message}`);
    }
  });

  it("GET - Get Authors Name And Last Name By Id", async () => {
    try {
      // Arrange
      const authorsId = 2;
      const expectedResult = expect.arrayContaining([
        {
          id: expect.any(Number),
          idBook: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
        },
      ]);

      // Act
      const response = await axios.get(
        `https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${authorsId}`
      );
      const result = response.data;

      // Assert
      expect(result).toEqual(expectedResult);
    } catch (error: any) {
      throw new Error(`GET - Get All Authors Data failed: ${error.message}`);
    }
  });
});
