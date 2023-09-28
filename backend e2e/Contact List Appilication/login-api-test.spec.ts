import axios from "axios";
import expect from "expect";

describe("Login Endpoint E2E Test", () => {
  let authToken;

  beforeEach(async () => {
    authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRkM2UxN2I5YWJlMTAwMTMxNWEwZmYiLCJpYXQiOjE2OTIyNTkzNDd9.4UZ4EHenAGBo_c-r5SRvUHNezuoT-C0_u5X6zcEdZTA";
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
  });

  let reusableEmail: String;
  describe("POST - Add User", () => {
    it("Should Successfully Add A New User", async () => {
      //ARRANGE
      const randomEmail = `test${Math.floor(
        Math.random() * 100000
      )}@example.com`;
      reusableEmail = randomEmail;
      const userData = {
        firstName: "John",
        lastName: "Wall",
        email: randomEmail,
        password: "password123",
      };
      const expectedResult = {
        user: {
          _id: expect.any(String),
          firstName: "John",
          lastName: "Wall",
          email: randomEmail,
          __v: expect.any(Number),
        },
        token: expect.any(String),
      };

      //ACT
      const response = await axios.post(
        `https://thinking-tester-contact-list.herokuapp.com/users`,
        userData
      );
      const result = response.data;

      //ASSERT
      expect(result).toEqual(expectedResult);
    });
  });
  
  describe("GET - Get User Profile", () => {
    it("Should Successfully Return A Valid User", async () => {
      //ARRANGE
      const expectedResult = {
        _id: expect.any(String),
        firstName: "Mark",
        lastName: "Lett",
        email: "somenew@email.com",
        __v: expect.any(Number),
      };

      //ACT
      const response = await axios.get(
        `https://thinking-tester-contact-list.herokuapp.com/users/me`
      );
      const result = response.data;

      //ASSERT
      expect(result).toEqual(expectedResult);
    });
  });

  describe("POST - Log In User", () => {
    it("Should Successfully Log In A User", async () => {
      //ARRANGE
      const userData = {
        email: reusableEmail,
        password: "password123",
      };
      const expectedResult = {
        user: {
          _id: expect.any(String),
          firstName: "John",
          lastName: "Wall",
          email: reusableEmail,
          __v: expect.any(Number),
        },
        token: expect.any(String),
      };

      //ACT
      const response = await axios.post(
        `https://thinking-tester-contact-list.herokuapp.com/users/login`,
        userData
      );
      const result = response.data;

      //ASSERT
      expect(result).toEqual(expectedResult);
    });
  });

  describe("PATCH - Update User", () => {
    it("Should Update A User Successfully", async () => {
      //ARRANGE
      const updatedData = {
        firstName: "Mark",
        lastName: "Lett",
        email: "somenew@email.com",
        password: "myNewPassword",
      };
      const expectedResult = {
        _id: expect.any(String),
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        __v: expect.any(Number),
      };

      //ACT
      const response = await axios.patch(
        `https://thinking-tester-contact-list.herokuapp.com/users/me`,
        updatedData
      );
      const result = response.data;

      //ASSERT
      expect(result).toEqual(expectedResult);
    });
  });
});
