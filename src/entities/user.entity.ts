import { Gender, UserStatus, UserType } from "$types/enums";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { RoleEntity } from "./role.entity";

@Index("pk_users", ["id"], { unique: true })
@Index("ix_users_phone", ["phone"])
@Index("ix_users_email", ["email"])
@Index("ix_users_user_type", ["userType"])
@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("varchar", { name: "full_name", nullable: true })
  fullName?: string;

  @Column("varchar", { name: "nickname", nullable: true })
  nickname?: string;

  @Column("varchar", { name: "dob", nullable: true })
  dob?: Date;

  @Column("varchar", { name: "email", nullable: true })
  email?: string;

  @Column("varchar", { name: "phone", nullable: true })
  phone?: string;

  @Column("varchar", { name: "profile_image", nullable: true })
  profileImage?: string;

  @Column("varchar", { name: "password_hash" })
  passwordHash: string;

  @Column("tinyint", { name: "user_type", default: UserType.MEMBER })
  userType: UserType;

  @Column("tinyint", { name: "gender", nullable: true })
  gender?: Gender;

  @Column("text", { name: "address", nullable: true })
  address?: string;

  @Column("int", { name: "ken_id", comment: "resource_id", nullable: true })
  kenId?: number;

  @Column("varchar", { name: "zip_code", nullable: true })
  zipCode?: string;

  @Column("varchar", { name: "company", nullable: true })
  company?: string;

  @Column("simple-array", { name: "industry_ids", nullable: true })
  industryIds?: number[];

  @Column("datetime", { name: "last_login_date", nullable: true })
  lastLoginDate?: Date;

  @Column("datetime", { name: "last_online_date", nullable: true })
  lastOnlineDate?: Date;

  @Column("boolean", { name: "is_online", default: false })
  isOnline: boolean;

  @Column("tinyint", { name: "status", default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column("int", { name: "point", nullable: true, default: 0 })
  point: number;

  @Column("varchar", {
    name: "referral_code",
    nullable: true,
    comment: "mã giới thiệu",
  })
  referralCode?: string;

  @Column("boolean", { name: "is_super_admin", default: false })
  isSuperAdmin: boolean;

  @Column("boolean", { name: "is_deleted", default: false })
  isDeleted: boolean;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @ManyToMany(() => RoleEntity)
  @JoinTable({
    name: "user_roles",
    joinColumns: [{ name: "user_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "role_id", referencedColumnName: "id" }],
    schema: "public",
  })
  roles?: RoleEntity[];
}
