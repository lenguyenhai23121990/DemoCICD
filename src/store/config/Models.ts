export interface State
{
  application: IApplicationInfo;
  apps: IApp[];
  company: ICompanyInfo;
  Menus?: MainMenu[];
  theme: ITheme;
  toastRef?: any;
}

interface IApp
{
  name: string;
  title: string;
  url: string;
  icon?: string;
  menu?: IAppMenu[];
}

interface IAppMenu
{
  name: string;
  title?: string;
  url?: string | undefined;
  params?: string;
  icon?: string;
  menu?: IAppMenu[];
  isDefault?: boolean;
}

interface IApplicationInfo
{
  logo: string | undefined;
  name: string;
  title: string;
  description?: string | undefined;
  version: string | undefined;
}

interface ICompanyInfo
{
  name: string | undefined;
  description?: string | undefined;
  webUrl?: string | undefined;
  address?: string | undefined;
  phone?: string | undefined;
  fax?: string | undefined;
}

export interface MainMenu
{
  Title?: string;
  Name?: string;
  Url?: string;
  Icon?: string;
  Menus?: Menu[];
}
export interface Menu
{
  Title?: string;
  Name?: string;
  Url?: string;
  Icon?: string;
  SubMenu?: SubMenu[];
}
export interface SubMenu
{
  Title?: string;
  Name?: string;
  Url?: string;
}

export interface ITheme
{
  layoutMode: string,
  menuMode: string,
  inlineMenuPosition: string,
  inputBackground: string,
  rippleEffect: boolean,
  isRTL: boolean,
  scale: number,
  menuTheme: string,
  topbarTheme: string,
  componentTheme: string,
}
