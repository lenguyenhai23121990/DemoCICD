import { NOT_FOUND } from "redux-first-router";
import ENV from "services";

const screen = (state = "HOME", action: any = {}) => screens[action.type] || state
export default screen
const screens: any = {
  [NOT_FOUND]: "NotFound",
  "signin-oidc": "signin-oidc",
  "home": ENV.HOME_PATH,
  "login": 'login/Login',
  "contenthome/ContentHome": "contenthome/ContentHome",
  "contentdetail/FromCategoryNews": "contentdetail/FromCategoryNews",
  "contentdetail/FormCollectionCategory": "contentdetail/FormCollectionCategory",
  "contentdetail/FormCollectionHome": "contentdetail/FormCollectionHome",
  "contentdetail/FormDetailBook": "contentdetail/FormDetailBook",
  "contentdetail/FromDetailNews": "contentdetail/FromDetailNews",
  "contentdetail/search/FromSearch": "contentdetail/search/FromSearch",
  
  // "service1/master": "service1/master/List",
  // "service1/detail": "service1/detail/List",
  // "service2/master": "service2/master/List",
  // "service2/detail": "service2/detail/List",
  // "service2/readers": "service2/readers/List",
};

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router"s <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.

// Map Action với 1 Page (component) để render
