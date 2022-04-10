import { PermissionEntity } from "$entities/permisstion.entity";
import RedisService from "$modules/redis";
import { AdminPermission, PermissionAction } from "$types/enums";
import { getConnection, IsNull } from "typeorm";

export async function initializations() {
  return await getConnection().transaction(async (transaction) => {
    const PermissionRepository = transaction.getRepository(PermissionEntity);
    const redisService = new RedisService();

    const permissionActions = Object.values(PermissionAction);

    //ADMIN PERMISSION
    const adminPermissionSaved = await PermissionRepository.find({
      isAdminPermission: true,
      parentPermissionId: IsNull(),
    });

    const adminPermission = Object.values(AdminPermission);

    // await Promise();
  });
}
