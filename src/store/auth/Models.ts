export interface State {
  user?: User;
  UserID?: number | string;
  UserName?: string;
  Fullname?: string;
  Email?: string;
  Avatar?: string;
  RoleID?: number | string;
  Role?: string;
  RoleName?: string;
  DepartmentID?: number | string;
  Department?: string;
  DepartmentName?: string;
  OriginalUserName?: string;
  AccessToken?: string;
  RefreshToken?: string;
  IsLoggedIn: boolean;
}

export interface User{
  roles: string[]
}