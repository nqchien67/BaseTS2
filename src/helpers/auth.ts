import { IToken } from "$types/interfaces/auth";
import jwt from "jsonwebtoken";
import config from "$config";

export function generateToken(data: any): IToken {
  const accessToken = jwt.sign(data, config.AUTH.ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: config.AUTH.TOKEN_TTL,
  });
  const refreshToken = jwt.sign(data, config.AUTH.REFRESH_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: config.AUTH.REFRES_TOKEN_TTL,
  });

  return { accessToken, refreshToken };
}
