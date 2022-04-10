import { RoleType } from "$types/enums";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PermissionEntity } from "./permisstion.entity";

@Entity("roles")
export class RoleEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("varchar", { name: "name" })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description?: string;

  @Column("boolean", { name: "is_default_role", default: false })
  isDefaultRole: boolean;

  @Column("uuid", { name: "store_id", nullable: true })
  storeId?: string;

  @Column("tinyint", { name: "type", default: RoleType.STORE })
  type: RoleType;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @ManyToMany(() => PermissionEntity, (permissions) => permissions.roles)
  @JoinTable({
    name: "role_permissions",
    joinColumns: [{ name: "role_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "permission_id", referencedColumnName: "id" }],
    schema: "public",
  })
  permissions?: PermissionEntity[];
}
