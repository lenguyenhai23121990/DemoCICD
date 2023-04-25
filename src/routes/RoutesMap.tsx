// import { ApplicationState } from '../store';
// import { ActionType } from '../store/context';

// const fakeDelay = (ms: number) => new Promise(res => setTimeout(res, ms))
const RoutesMap: any = {
  'signin-oidc': {
    path: '/signin-oidc/:code'
  },
  'home': { path: '/' },
  'login': { path: '/login' },
  'service1/master': { path: '/service1/master' },
  'service1/detail': { path: '/service1/detail' },
  'service2/master': { path: '/service2/master' },
  'service2/detail': { path: '/service2/detail' },
}
//#endregion
export default RoutesMap

// map ACTion tương ứng với 1 Path
