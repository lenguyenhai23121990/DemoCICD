export { };
declare global {
    interface Window {
        _env_: {
            PROFILE: string,
            API_URL: string,
            TIMEOUT: number,
            USE_CAPTCHA: boolean,
            HOME_PATH: string,
            LANDING_PATH: string,
            LANDING_PARAMS: string,
            APPLICATION_NAME: string
        }
    }
}
