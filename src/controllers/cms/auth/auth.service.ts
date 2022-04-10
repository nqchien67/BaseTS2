import { UserEntity } from "$entities/user.entity";
import log from "$helpers/log";
import { done, stop } from "$helpers/response";
import { ErrorCode, UserStatus, UserType } from "$types/enums";
import { ILoginCmsRequest, IRegisterCmsRequest } from "$types/interfaces/auth";
import { getRepository } from "typeorm";
import { compareSync, hashSync } from "bcryptjs";
import { generateToken } from "$helpers/auth";
import config from "$config";

export default class AuthService {
  private logger = log(AuthService.name);

  async login(body: ILoginCmsRequest) {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({
      email: body.email,
      userType: UserType.ADMIN,
    });

    if (!user) throw stop(ErrorCode.AUTH_FAILED);

    // const isPasswordCorrect = await compareSync(
    //   body.password,
    //   user?.passwordHash
    // );
    // if (!isPasswordCorrect) throw stop(ErrorCode.AUTH_FAILED);

    userRepository.update({ id: user.id }, { lastLoginDate: new Date() });

    const { accessToken, refreshToken } = await this.generateToken(user);

    return { user, accessToken, refreshToken };
  }

  async register(body: IRegisterCmsRequest) {
    try {
      const { email, password } = body;

      const userRepository = getRepository(UserEntity);
      const oldUser = await userRepository.findOne({
        email: email,
      });

      if (oldUser) {
        throw stop(ErrorCode.Email_Already_exist);
      }

      const passwordHash = hashSync(password, config.AUTH.SALT_ROUND);

      const user = {
        ...body,
        passwordHash: passwordHash,
        status: UserStatus.NOT_VERIFY,
      };

      const newUser = await userRepository.save(user);
      return newUser.email;
    } catch (err) {
      console.log(err);
    }
  }

  async generateToken(user: UserEntity) {
    return generateToken({
      userId: user.id,
      UserType: user.userType,
      isSuperAdmin: user.isSuperAdmin,
    });
  }
}
