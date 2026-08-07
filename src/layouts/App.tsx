import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'primereact/utils';
// import { Route, Routes, useLocation } from 'react-router-dom';

//------------Home------------------------
import BannerHeader from '../components/Home/Banner/BannerHeader'
import BookNewHome from '../components/Home/BookNew/BookNewHome'
import CollectionHome from '../components/Home/CollectionHome'
import FooterHome from '../components/Home/FooterHome'
import ImageVideoHome from '../components/Home/ImageVideoHome'
import InfomationHome from '../components/Home/InfomationHome'
import LinkFooterHome from '../components/Home/LinkFooterHome'
import MenuTop from '../components/Home/Menu/MenuTop'
import NewsHome from '../components/Home/NewHome/NewsHome'
import NewsPaperHome from '../components/Home/NewsPaperHome'
import TopHeader from '../components/Home/TopHeader'
import FormSearch from '../components/Search/FromSearch'
//------------End Home------------------------
import '../assets/CSS/roboto-regular-webfont.ttf'

import Button from 'react-bootstrap/Button';
import AppTopbar from './AppTopbar';
// import AppBreadcrumb from './AppBreadcrumb';
import AppInlineMenu from './AppInlineMenu';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
// import AppConfig from './AppConfig';
import AppRightMenu from './AppRightMenu';

// import Crud from './pages/Crud';
// import Calendar from './pages/Calendar';
// import EmptyPage from './pages/EmptyPage';
// import Invoice from './pages/Invoice';
// import Help from './pages/Help';
// import TimelineDemo from './pages/TimelineDemo';
import 'typeface-roboto';
import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_header from '../assets/Image/logo_header.png';
import mdi_phone from '../assets/Image/mdi_phone.png';
import '../assets/CSS/newLayOutcms.css'
import '../assets/CSS/stylesheet.scss'
import '../assets/CSS/all.css'
import '../assets/CSS/font-awesome.min.css'
import Carousel from 'react-bootstrap/Carousel';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

import { IUserContextModel } from 'models';
import { goToPage, goToPageExt } from 'routes'
import { useJwt } from "react-jwt";
import { connect } from "react-redux";
// import { ActionCreators as AuthActions } from "store/auth";
// import { ActionCreators as ConfigActions } from "store/config";
import { ApplicationState } from 'store';
import Content, { Login } from 'pages';
import { getUser } from 'utils';
import { Col, Container, Row } from 'react-bootstrap';


export const RTLContext = React.createContext(false);
interface State {
    user: IUserContextModel,
    isAuthenticated: boolean,
    goToPage: any,
    goToPageExt: any,
}
type Props = State

const App = (props: Props) => {
    // console.log('App')
    const { isExpired } = useJwt(props.user.AccessToken?.replace(/-/g, "+").replace(/_/g, "/"));
    const [menuMode,] = useState('static');
    const [inlineMenuPosition,] = useState('bottom');
    const [desktopMenuActive, setDesktopMenuActive] = useState(true);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [colorMode, setColorMode] = useState('light');
    const [rightMenuActive, setRightMenuActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('filled');
    const [isRTL,] = useState<boolean>(false);
    const [ripple,] = useState(true);
    const [mobileTopbarActive, setMobileTopbarActive] = useState(false);
    const [menuTheme, setMenuTheme] = useState('light');
    const [topbarTheme, setTopbarTheme] = useState('blue');
    // const [theme, setTheme] = useState('indigo');
    const [isInputBackgroundChanged, setIsInputBackgroundChanged] = useState(false);
    const [inlineMenuActive, setInlineMenuActive] = useState<any>({});
    const [, setNewThemeLoaded] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    let currentInlineMenuKey = useRef('');
    const copyTooltipRef = useRef<any>();
    // const location = useLocation();
    const [titleUrl, settitleUrl] = useState(null);
    
    PrimeReact.ripple = true;

    let searchClick: boolean;
    let topbarItemClick: boolean;
    let menuClick: boolean;
    let inlineMenuClick: boolean;
    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ['Droid Sans', 'Roboto', Chilanka']
    //         }
    //     })
    // }, [])
    const menu = [
        {
            label: 'Service 1',
            icon: 'pi pi-fw pi-home',
            items: [
                { label: 'Master', icon: 'pi pi-fw pi-home', to: '/service1/master', },
                { label: 'Detail', icon: 'pi pi-fw pi-home', to: '/service1/detail', },

            ]
        },
        {
            label: 'Service 2',
            icon: 'pi pi-fw pi-star-fill',
            items: [
                { label: 'Master', icon: 'pi pi-fw pi-bars', to: '/service2/master' },
                { label: 'Detail', icon: 'pi pi-fw pi-comment', to: '/service2/detail' },
                { label: 'Readers', icon: 'pi pi-fw pi-user', to: '/service2/readers', },

            ]
        }
    ];

    // const routes = [
    //     { parent: '', label: '' },
    //     { parent: 'Favorites', label: 'Dashboard Analytics' },
    //     { parent: 'UI Kit', label: 'Form Layout' },
    //     { parent: 'UI Kit', label: 'Input' },
    //     { parent: 'UI Kit', label: 'Float Label' },
    //     { parent: 'UI Kit', label: 'Invalid State' },
    //     { parent: 'UI Kit', label: 'Button' },
    //     { parent: 'UI Kit', label: 'Table' },
    //     { parent: 'UI Kit', label: 'List' },
    //     { parent: 'UI Kit', label: 'Panel' },
    //     { parent: 'UI Kit', label: 'Tree' },
    //     { parent: 'UI Kit', label: 'Overlay' },
    //     { parent: 'UI Kit', label: 'Menu' },
    //     { parent: 'UI Kit', label: 'Media' },
    //     { parent: 'UI Kit', label: 'Message' },
    //     { parent: 'UI Kit', label: 'File' },
    //     { parent: 'UI Kit', label: 'Chart' },
    //     { parent: 'UI Kit', label: 'Misc' },
    //     { parent: 'PrimeBlocks', label: 'Blocks' },
    //     { parent: 'Utilities', label: 'Icons' },
    //     { parent: 'Pages', label: 'Crud' },
    //     { parent: 'Pages', label: 'Calendar' },
    //     { parent: 'Pages', label: 'Timeline' },
    //     { parent: 'Pages', label: 'Invoice' },
    //     { parent: 'Pages', label: 'Login' },
    //     { parent: 'Pages', label: 'Help' },
    //     { parent: 'Pages', label: 'Empty' },
    //     { parent: 'Pages', label: 'Access' },
    //     { parent: 'Start', label: 'Documentation' }
    // ];

    // useEffect(() => {
    //     copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    // }, [location]);

    useEffect(() => {
        if (menuMode === 'overlay') {
            hideOverlayMenu();
        }
        if (menuMode === 'static') {
            setDesktopMenuActive(true);
        }
    }, [menuMode]);

    useEffect(() => {
        onColorModeChange(colorMode);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const onMenuThemeChange = (theme: string) => {
    //     setMenuTheme(theme);
    // };

    // const onTopbarThemeChange = (theme: string) => {
    //     setTopbarTheme(theme);
    // };

    useEffect(() => {
        const appLogoLink = document.getElementById('app-logo') as HTMLInputElement;
        if (appLogoLink) {
            if (topbarTheme === 'white' || topbarTheme === 'yellow' || topbarTheme === 'amber' || topbarTheme === 'orange' || topbarTheme === 'lime') {
                appLogoLink.src = 'assets/brand/logo-dark.png';
            } else {
                appLogoLink.src = 'assets/brand/logo-light.png';
            }
        }
    }, [topbarTheme]);

    // const onThemeChange = (theme: string) => {
    //     setTheme(theme);
    //     const themeLink = document.getElementById('theme-css');
    //     const themeHref = 'assets/theme/' + theme + '/theme-' + colorMode + '.css';
    //     replaceLink(themeLink, themeHref);
    // };

    const onColorModeChange = (mode: string) => {
        setColorMode(mode);
        setIsInputBackgroundChanged(true);

        if (isInputBackgroundChanged) {
            if (mode === 'dark') {
                setInputStyle('filled');
            } else {
                setInputStyle('outlined');
            }
        }

        if (mode === 'dark') {
            setMenuTheme('dark');
            setTopbarTheme('dark');
        } else {
            setMenuTheme('light');
            setTopbarTheme('blue');
        }

        const layoutLink = document.getElementById('layout-css');
        const layoutHref = 'assets/layout/css/layout-' + mode + '.css';
        replaceLink(layoutLink, layoutHref);

        const themeLink = document.getElementById('theme-css') as HTMLInputElement;
        const urlTokens = (themeLink.getAttribute('href') as String).split('/');
        urlTokens[urlTokens.length - 1] = 'theme-' + mode + '.css';
        const newURL = urlTokens.join('/');

        replaceLink(themeLink, newURL, () => {
            setNewThemeLoaded(true);
        });
    };

    const replaceLink = (linkElement: any, href: string, callback?: any) => {
        if (isIE()) {
            linkElement.setAttribute('href', href);

            if (callback) {
                callback();
            }
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                const _linkElement = document.getElementById(id);
                _linkElement && _linkElement.remove();
                cloneLinkElement.setAttribute('id', id);

                if (callback) {
                    callback();
                }
            });
        }
    };

    // const onInputStyleChange = (inputStyle: string) => {
    //     setInputStyle(inputStyle);
    // };

    // const onRipple = (e: any) => {
    //     PrimeReact.ripple = e.value;
    //     setRipple(e.value);
    // };

    // const onInlineMenuPositionChange = (mode: string) => {
    //     setInlineMenuPosition(mode);
    // };

    // const onMenuModeChange = (mode: string) => {
    //     setMenuMode(mode);
    // };

    // const onRTLChange = () => {
    //     setRTL((prevState) => !prevState);
    // };

    const onMenuClick = (event: any) => {
        menuClick = true;

    };

    const onMenuButtonClick = (event: Event) => {
        menuClick = true;

        if (isDesktop()) setDesktopMenuActive((prevState) => !prevState);
        else setMobileMenuActive((prevState) => !prevState);

        event.preventDefault();
    };

    const onTopbarItemClick = (event: any) => {
        topbarItemClick = true;
        if (activeTopbarItem === event.item) setActiveTopbarItem(null);
        else {
            setActiveTopbarItem(event.item);
        }

        event.originalEvent.preventDefault();
    };

    const onSearch = (event: any) => {
        searchClick = true;
        setSearchActive(event);
    };

    const onMenuItemClick = (event: any) => {
        if (!event.item.items && (menuMode === 'overlay' || !isDesktop())) {
            hideOverlayMenu();
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const onRootMenuItemClick = (event: any) => {
        setMenuActive((prevState) => !prevState);
    };

    const onRightMenuButtonClick = () => {
        setRightMenuActive((prevState) => !prevState);
    };

    const onMobileTopbarButtonClick = (event: any) => {
        setMobileTopbarActive((prevState) => !prevState);
        event.preventDefault();
    };

    const onDocumentClick = (event: any) => {
        if (!searchClick && event.target.localName !== 'input') {
            setSearchActive(false);
        }

        if (!topbarItemClick) {
            setActiveTopbarItem(null);
        }

        if (!menuClick && (menuMode === 'overlay' || !isDesktop())) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
            }
            hideOverlayMenu();
        }

        if (inlineMenuActive[currentInlineMenuKey.current] && !inlineMenuClick) {
            let menuKeys = { ...inlineMenuActive };
            menuKeys[currentInlineMenuKey.current] = false;
            setInlineMenuActive(menuKeys);
        }

        if (!menuClick && (isSlim() || isHorizontal())) {
            setMenuActive(false);
        }

        searchClick = false;
        topbarItemClick = false;
        inlineMenuClick = false;
        menuClick = false;
    };

    const hideOverlayMenu = () => {
        setMobileMenuActive(false);
        setDesktopMenuActive(false);
    };

    const isDesktop = () => {
        return window.innerWidth > 1024;
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isIE = () => {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    };

    const onInlineMenuClick = (e: any, key: any) => {
        let menuKeys = { ...inlineMenuActive };
        if (key !== currentInlineMenuKey.current && currentInlineMenuKey.current) {
            menuKeys[currentInlineMenuKey.current] = false;
        }

        menuKeys[key] = !menuKeys[key];
        setInlineMenuActive(menuKeys);
        currentInlineMenuKey.current = key;
        inlineMenuClick = true;
    };

    const layoutContainerClassName = classNames('layout-wrapper ', 'layout-menu-' + menuTheme + ' layout-topbar-' + topbarTheme, {
        'layout-menu-static': menuMode === 'static',
        'layout-menu-overlay': menuMode === 'overlay',
        'layout-menu-slim': menuMode === 'slim',
        'layout-menu-horizontal': menuMode === 'horizontal',
        'layout-menu-active': desktopMenuActive,
        'layout-menu-mobile-active': mobileMenuActive,
        'layout-topbar-mobile-active': mobileTopbarActive,
        'layout-rightmenu-active': rightMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple,
        'layout-rtl': isRTL
    });
    return (
        // props.isAuthenticated && !isExpired?
        (<RTLContext.Provider value={isRTL}>
            {/* <section className='LogoTop'>
                    <div className="col-md-3 col-12 ">        
                        <img id="imgTopHeader" src="https://cosodulieu.evn.com.vn/pages/cms/img/logo_header.png"/> 
                    </div>
                    <div className="col-md-8 col-12 divIconLeft">        
                    </div>
            </section> */}
            {/* 
                <Row>
                    <Col>1 of 1</Col>
                </Row>
            </Container> */}




            {/* Trang home */}
            
            <TopHeader></TopHeader>
            <MenuTop></MenuTop>
          
             <Content />
             
            <LinkFooterHome></LinkFooterHome>
            <FooterHome ></FooterHome>
   
        </RTLContext.Provider>)

    );
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        
        user: getUser(),
        isAuthenticated: getUser().AccessToken !== undefined,
    }
}
const mapDispatchToProps = {
    goToPage: goToPage,
    goToPageExt: goToPageExt,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
