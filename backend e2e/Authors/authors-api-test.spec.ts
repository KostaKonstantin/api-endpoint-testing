import axios from "axios";
import expect from "expect";
// import { mockAuthors } from "../mock-data/mock-authors"; -> Data length changes with every request, can't be used
describe("Authors Api E2E Test", () => {
  it("GET - Get All Authors Data", async () => {
    //Arrange
    const expectedResult = expect.arrayContaining([
      {
        id: expect.any(Number),
        idBook: expect.any(Number),
        firstName: expect.any(String),
        lastName: expect.any(String),
      },
    ]);

    //Act
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Authors`
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("Post - Create An Author", async () => {
    //Arrange
    const authorsData = {
      id: 222,
      idBook: 11,
      firstName: "Joe",
      lastName: "Doe",
    };
    const expectedResult = {
      id: 222,
      idBook: 11,
      firstName: "Joe",
      lastName: "Doe",
    };

    //Act
    const response = await axios.post(
      `https://fakerestapi.azurewebsites.net/api/v1/Authors`,
      authorsData
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("GET - Get Authors With Book Id", async () => {
    //Arrange
    const bookId = 12;
    const expectedResult = expect.arrayContaining([
      {
        id: expect.any(Number),
        idBook: expect.any(Number),
        firstName: expect.any(String),
        lastName: expect.any(String),
      },
    ]);

    //Act
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${bookId}`
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("GET - Get Authors Name And Last Name By Id", async () => {
    //Arrange
    const authorsId = 2;
    const expectedResult = expect.arrayContaining([
      {
        id: expect.any(Number),
        idBook: expect.any(Number),
        firstName: expect.any(String),
        lastName: expect.any(String),
      },
    ]);

    //Act
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${authorsId}`
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
