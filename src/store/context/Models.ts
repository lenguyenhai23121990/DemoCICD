
export interface State{
    language?: string,
    theme?: string,
    app?: string,
    user?: IUser,
    loading: boolean,
    listItems?: {},
    listTimeUpdate?: {},
    listTimeGet?: {},
    item?: {},
    form?:Form,
}

export interface Form{
    mode: FormMode,
    code?: string,
    title?: string,
    dataType?: string,
}
export enum FormMode{
    AddNew = 1,
    Edit = 2,
    Display = 3,
    List = 4
}




export interface IUser{
    id: number,
    code: string,
    name: string,
    avatar: string,
    email: string,
    roleId: number,
    khoaId?: number,
    roles: IRole[]
}

interface IRole{
    id: number,
    roleId: number,
    roleCode: string,
    roleName: string,
    departmentId: number,
    departmentCode: string,
    departmentName: string,
    isDefault: boolean
}