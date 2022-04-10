export enum ErrorCode {
  Unknown_Error = "Unknown_Error",
  Invalid_Input = "Invalid_Input",
  Update_Error = "Update_Error",
  Update_Expired = "Update_Expired",
  Username_Or_Password_Invalid = "Username_Or_Password_Invalid",
  Password_Not_True = "Password_Not_True",
  Email_Already_exist = "Email_Already_exist",
  Email_Not_exist = "Email_Not_exist",
  Token_Not_Exist = "Token_Not_Exist",
  User_Blocked = "User_Blocked",
  User_Not_Verify = "User_Not_Verify",
  Token_Expired = "Token_Expired",
  /**The client not send the required token in header */
  Refresh_Token_Not_Exist = "Refresh_Token_Not_Exist",
  /**The client send the expire token or invalid token*/
  Refresh_Token_Expire = "Refresh_Token_Expire",
  /**The client do not have permission for this action. */
  Permission_Denied = "Permission_Denied",
  User_Not_Exist = "User_Not_Exist",
  Not_Found = "Not_Found",
  Maximum_Retry_Verification_Code = "Maximum_Retry_Verification_Code",
  Missing_Access_Token_In_Header = "Missing_Access_Token_In_Header",
  ACCESS_DENIED = "ACCESS_DENIED",
  AUTH_FAILED = "AuthFailed",
}

export enum UserStatus {
  BLOCKED = 0,
  ACTIVE = 1,
  NOT_VERIFY = 2,
  REJECT_VERIFY = 3,
}

export enum RoleType {
  ADMIN = 1,
  STORE = 2,
}

export enum UserType {
  ADMIN = 1,
  MEMBER = 2,
  STORE = 3,
}

export enum Gender {
  MALE = 1,
  FE_MALE = 2,
  OTHER = 3,
}

export enum ControllerApp {
  CMS = "CmsController",
  STORE = "StoreController",
  User = "UserController",
}

export enum CMSMiddlewares {}

export enum PermissionAction {
  VIEW = "VIEW",
  CREATE = "CREATE",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

export enum AdminPermission {
  USER_MANAGEMENT = "USER_MANAGEMENT",
  CONVERSATION_MANAGEMENT = "CONVERSATION_MANAGEMENT",
  ROLE_MANAGEMENT = "ROLE_MANAGEMENT",
  PRODUCT_MANAGEMENT = "PRODUCT_MANAGEMENT",
  POINT_MANAGEMENT = "POINT_MANAGEMENT",
  SYSTEM_MANAGEMENT = "SYSTEM_MANAGEMENT",
  STORE_MANAGEMENT = "STORE_MANAGEMENT",
}
