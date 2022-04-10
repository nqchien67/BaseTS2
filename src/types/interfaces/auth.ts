export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginCmsRequest {
  email: string;
  password: string;
}

export interface IRegisterCmsRequest {
  email: string;
  password: string;
}
