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
        email: "nccong@cmc.com.vn",
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
            },
            {
                id: 2,
                roleId: 2,
                roleCode: "DEV",
                roleName: "Developer",
                departmentId: 2,
                departmentCode: "PDC",
                departmentName: "Phát triển sản phẩm",
                isDefault: false
            },
        ]
    },
}
export default(InitState)