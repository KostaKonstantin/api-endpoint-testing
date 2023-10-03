import axios from "axios";
import expect from "expect";

describe("Reqres Api E2E Test", () => {
  it("POST - Create A User", async () => {
    // Arrange
    const userData = {
      name: "Joe Doe",
      job: "developer",
    };
    const expectedResult = {
      name: userData.name,
      job: userData.job,
      id: expect.any(String),
      createdAt: expect.any(String),
    };

    // Act
    const response = await axios.post(`https://reqres.in/api/users`, userData);
    const result = response.data;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it("PATCH - Update User Data", async () => {
    // Arrange
    const updateUserData = {
      name: "Constantine",
      job: "seller",
    };
    const expectedResult = {
      name: updateUserData.name,
      job: updateUserData.job,
      updatedAt: expect.any(String),
    };

    // Act
    const response = await axios.patch(
      `https://reqres.in/api/users/2`,
      updateUserData
    );
    const result = response.data;

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it("POST - Register A User", async () => {
    // Arrange
    const registerUserData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const expectedResult = {
      id: expect.any(Number),
      token: expect.any(String),
    };

    // Act
    const response = await axios.post(
      `https://reqres.in/api/register`,
      registerUserData
    );
    const result = response.data;

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it("POST - Unsuccessful Registering A User", async () => {
    // Arrange
    const registerUserData = {
      email: "sydney@fife",
    };
    const expectedResult = {
      error: "Missing password",
    };

    try {
      // Act
      const response = await axios.post(
        `https://reqres.in/api/register`,
        registerUserData
      );

      expect(response).toBeUndefined();
    } catch (error: any) {
      // Assert
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual(expectedResult);
    }
  });

  it("POST - Login Successfully", async () => {
    // Arrange
    const loginData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    const expectedResult = {
      token: expect.any(String),
    };

    // Act
    const response = await axios.post(`https://reqres.in/api/login`, loginData);
    const result = response.data;

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it("POST - Unsuccessful Login A User", async () => {
    // Arrange
    const loginUserData = {
      email: "sydney@fife",
    };
    const expectedResult = {
      error: "Missing password",
    };

    try {
      // Act
      const response = await axios.post(
        `https://reqres.in/api/login`,
        loginUserData
      );

      expect(response).toBeUndefined();
    } catch (error: any) {
      // Assert
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual(expectedResult);
    }
  });
});
