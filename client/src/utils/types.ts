export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type HeroFormData = {
  location: string;
  date: string;
  checkOut: string;
};

export type RegisterArg = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginArg = {
  email: string;
  password: string;
};

export type User = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
};
