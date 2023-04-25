import { State as AppState } from "./Models";
const InitState: AppState = {
  application: {
    logo: "",
    name: "BrainLib",
    title: "BrainLib",
    description: "BrainLib",
    version: "1.0.0.0",
  },
  company: {
    name: "UC",
    webUrl: "https://ouc.vn/",
  },
  apps: [{
    name: "home",
    title: "Trang chủ",
    url: "/",
    menu:[{
      name: "role",
      title: "Vai trò",
      url: "/role/list"
      },
      {
        name: "user",
        title: "Người dùng",
        url: "/user/list"
      }
    ]
  }],
  theme:{
    scale: 12,
    layoutMode: "light",
    menuMode: "static",
    inlineMenuPosition: "bottom",
    inputBackground: "outlined",
    rippleEffect: true,
    isRTL: false,
    menuTheme: "light",
    topbarTheme: "blue",
    componentTheme: "blue"
  },
  toastRef: null
};
export default InitState;
