import { State as AppState } from './Models'
const InitState: AppState = {
    language: "vi",
    app: "Home",
    theme: "Default",
    loading: false,
    user: {
        id: 1,
        avatar: "",
        code: "nccong",
        name: "Nguyễn Chí Công",
        email: "rollover79@gmail.com",
        roleId: 1,
        khoaId: 36,
        roles: [
            {
                id: 1,
                roleId: 1,
                roleCode: "ADMIN",
                roleName: "Administrator",
                departmentId: 1,
                departmentCode: "SYSTEM",
                departmentName: "System managers",
                isDefault: true
            }
        ]
    },
}
export default(InitState)