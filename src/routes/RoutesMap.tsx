// import { ApplicationState } from '../store';
// import { ActionType } from '../store/context';

// const fakeDelay = (ms: number) => new Promise(res => setTimeout(res, ms))
const RoutesMap: any = {
  'signin-oidc': {
    path: '/signin-oidc/:code'
  },
  'home': { path: '/' },
  'login': { path: '/login' },
  'contenthome/ContentHome': { path: '/Home' },
  'contentdetail/FromCategoryNews': { path: '/CategoryNews' },
  'contentdetail/FormCollectionCategory': { path: '/CollectionCategory' },
  'contentdetail/FormCollectionHome': { path: '/CollectionHome' },
  'contentdetail/FormDetailBook': { path: '/DetailBook' },
  'contentdetail/FromDetailNews': { path: '/DetailNews' },
  'contentdetail/search/FromSearch': { path: '/Search' },
  // 'service1/detail': { path: '/service1/detail' },
  // 'service2/master': { path: '/service2/master' },
  // 'service2/detail': { path: '/service2/detail' },
  // 'service2/readers': { path: '/service2/readers' },
}
//#endregion
export default RoutesMap

// map ACTion tương ứng với 1 Path
