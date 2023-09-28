import axios from "axios";
import expect from "expect";

describe("Users Api E2E Test", () => {
  it("GET - Get All Users", async () => {
    //Arrange
    const expectedResult = [
      {
        id: 1,
        userName: "User 1",
        password: "Password1",
      },
      {
        id: 2,
        userName: "User 2",
        password: "Password2",
      },
      {
        id: 3,
        userName: "User 3",
        password: "Password3",
      },
      {
        id: 4,
        userName: "User 4",
        password: "Password4",
      },
      {
        id: 5,
        userName: "User 5",
        password: "Password5",
      },
      {
        id: 6,
        userName: "User 6",
        password: "Password6",
      },
      {
        id: 7,
        userName: "User 7",
        password: "Password7",
      },
      {
        id: 8,
        userName: "User 8",
        password: "Password8",
      },
      {
        id: 9,
        userName: "User 9",
        password: "Password9",
      },
      {
        id: 10,
        userName: "User 10",
        password: "Password10",
      },
    ];
    //Act
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Users`
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("POST - Create A User", async () => {
    //Arrange
    const userData = {
      id: 11,
      userName: "Joe",
      password: "Doe",
    };

    const expectedResult = {
      id: 11,
      userName: "Joe",
      password: "Doe",
    };

    //Act
    const response = await axios.post(
      `https://fakerestapi.azurewebsites.net/api/v1/Users`,
      userData
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("GET - Get A User By Id", async () => {
    //Arrange
    const userId = 1;
    const expectedResult = {
      id: 1,
      userName: "User 1",
      password: "Password1",
    };

    //Act
    const response = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("PUT - Update A User By Id", async () => {
    //Arrange
    const userId = 1;
    const userData = {
      id: 2,
      userName: "Joe",
      password: "Dhoe",
    };
    const expectedResult = {
      id: 2,
      userName: "Joe",
      password: "Dhoe",
    };

    //Act
    const response = await axios.put(
      `https://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`,
      userData
    );
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
