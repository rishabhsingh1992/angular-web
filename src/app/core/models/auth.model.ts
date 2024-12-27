export interface IResponse {
  status: 'success' | 'error';
  statusCode: number;
  message: string;
}

export interface IUserSignUpRequest {
  firstName: string;
  lastName: string;
  mail?: string;
  password: string;
  phoneNumber: string;

  email?: string;
}

export interface IUserSignUpResponse extends IResponse {
  data?: {};
}

export interface IUserLoginRequest {
  emailOrPhone?: string;
  password: string;

  numberOrEmail?: string;
}

export interface IUserLoginResponse extends IResponse {
  data?: {
    id: string;
    firstName: string;
    roles: string[];
  };
}
