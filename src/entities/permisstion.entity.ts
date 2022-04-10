import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { RoleEntity } from "./role.entity";

@Index("pk_permissions", ["id"], { unique: true })
@Index("ix_permissions_name", ["name"])
@Index("ix_permissions_is_admin_permission", ["isAdminPermission"])
@Entity("permissions")
export class PermissionEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column("varchar", { name: "name" })
  name: string;

  @Column("boolean", { name: "is_admin_permission" })
  isAdminPermission: boolean;

  @Column("int", { name: "parent_permission_id", nullable: true })
  parentPermissionId: number;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @ManyToOne(
    () => PermissionEntity,
    (permission) => permission.childrenPermissions
  )
  @JoinColumn({ name: "parent_permission_id", referencedColumnName: "id" })
  parentPermission?: PermissionEntity;

  @OneToMany(
    () => PermissionEntity,
    (permission) => permission.parentPermission,
    {
      onDelete: "CASCADE",
    }
  )
  childrenPermissions?: PermissionEntity[];

  @ManyToMany(() => RoleEntity, (roles) => roles.permissions, {
    onDelete: "CASCADE",
  })
  roles?: RoleEntity[];
}
