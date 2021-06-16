export type authenticationData = {
  id: string;
};

export type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type RegisterUserIdDTO = RegisterUserDTO & { id: string }

