// import { ApplicationState } from '../store';
// import { ActionType } from '../store/context';

// const fakeDelay = (ms: number) => new Promise(res => setTimeout(res, ms))
import { ApplicationState } from '../store';
import { ActionType } from '../store/context';
const RoutesMap: any = {
  'signin-oidc': {
    path: '/signin-oidc/:code'
  },
  'home': { path: '/' },
  'login': { path: '/login' },
  'contenthome/ContentHome': { path: '/Home' },
  'contentdetail/FromCategoryNews': { path: '/CategoryNews/:title/:code' },
  'contentdetail/FromCategoryVideo': { path: '/CategoryVideo/:title/:code' },
  'contentdetail/FromCategoryAudio': { path: '/CategoryAudio/:title/:code' },
  'contentdetail/FromCategoryImage': { path: '/CategoryImage/:title/:code' },
  'contentdetail/FormCollectionCategory': { path: '/CollectionCategory' },
  'contentdetail/FormCollectionHome': { path: '/CollectionHome' },
  'contentdetail/FormDetailBook': { path: '/DetailBook/:title/:code',

  
  thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
    dispatch({
      type: ActionType.SWITCH_APP,
      app: 'DetailBook'
    });
  }
},
  'contentdetail/FromDetailNews': { path: '/DetailNews/:title/:ID' },
  'contentdetail/search/FromSearchParam': { path: '/SearchParam/:keyword/:catesearch' },
  'contentdetail/search/FromSearch': { path: '/Search' },
  'contentdetail/FormDetailVideo': { path: '/DetailVideo/:title/:code'},
  'contentdetail/FormDetailImage': { path: '/DetailImage/:title/:code'},


}
//#endregion
export default RoutesMap

// map ACTion tương ứng với 1 Path
