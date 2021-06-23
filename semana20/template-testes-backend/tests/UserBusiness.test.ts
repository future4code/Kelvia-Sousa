import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { USER_ROLES } from "../src/model/User";

import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import tokenGeneratorMock from "./mocks/tokenGeneratorMock";
import userDatabaseMock from "./mocks/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
  idGeneratorMock,
  hashGeneratorMock,
  userDatabaseMock as UserDatabase,
  tokenGeneratorMock
);

describe("UserBusiness", () => {
  describe("signup", () => {
    test("Should catch error when name is empty", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "",
          "test@email.com",
          "test123",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Missing input");
      }
    });

    test("Should catch error when email is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "testemail.com",
          "test123",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid email");
      }
    });

    test("Should catch error when password is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test",
          "NORMAL"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid password");
      }
    });

    test("Should catch error when role is invalid", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "GUEST"
        );
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid user role");
      }
    });

    test("Should return access token on sucessful signup", async () => {
      expect.assertions(1);

      try {
        const { accessToken } = await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "NORMAL"
        );

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  describe("login", () => {
    test("Should catch error when email is not registered", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.login("bananinha@hotmail.com", "bananinha123");
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    });

    test("Should catch error when password is incorrect", async () => {
      expect.assertions(2);

      try {
        await userBusinessMock.login("bananinha@gmail.com", "bananinha12345");
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    });

    test("Should return acess token on sucessful login", async () => {
      expect.assertions(1);

      try {
        const { accessToken } = await userBusinessMock.login(
          "bananinha@gmail.com",
          "bananinha123"
        );

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });
  
  describe("getUserById" , () =>{
    test("Error if User doesn't exist", async ()=>{
      expect.assertions(2)
      try {
        await userBusinessMock.getUserById("35b62ff4-64af-4721-a4c5-d038c6f730cf")
      } catch (error) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("User not found")
      }
    });
    test("Return user when ID exists" , async () =>{
      expect.assertions(2)
      try {
        const getUserById = jest.fn(
          (id: string) => userBusinessMock.getUserById(id)
        )

        const result = await getUserById("id_mock_admin")
        expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
      } catch (error) {
        console.log(error.message)
      }
    })
  })

  describe("getAllUsers", () =>{
    test(" Error if user is not admin", async () =>{
      expect.assertions(2)
      try {
        await userBusinessMock.getAllUsers(USER_ROLES.NORMAL)
      } catch (error) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("You must be an admin to access this endpoint")
      }
    })

    test("return users when authorized", async () =>{
      try {
        const getAllUsers = jest.fn(
          (role: USER_ROLES) => userBusinessMock.getAllUsers(role)
        )

        const result = await getAllUsers(USER_ROLES.ADMIN)

        expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN)
        expect(result).toContainEqual({
          id: "id_mock_admin",
          name: "astrodev",
          email: "astrodev@gmail.com",
          role: "ADMIN",
        })
        expect(result).toContainEqual({
          id: "id_mock_normal",
          name: "bananinha",
          email: "bananinha@gmail.com",
          role: "NORMAL",
        })
      } catch (error) {
        console.log(error.message)
      }
    })
  })

});
