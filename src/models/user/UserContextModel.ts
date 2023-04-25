export interface IUserContextModel{
    UserId: string,
    UserName: string,
    Fullname: string,
    Roles: string[],
    AccessToken: string,
    RefreshToken: string,
    Avatar?: string,
}