import Login from '../components/Login/login'
import Register from '../components/Register/register'
import Dashboard from '../components/Dashboard/dashboard'
import AdvanceSearch from '../components/Search/advance_search';
import CompareMobile from '../components/Mobile/compare-mobile';
import allMobileDevices from '../components/admin-dash/all-mobile-devices';
import news from '../components/News/news';
import MobileDevices from '../components/Mobile/all-mobile-devices';
import WatchDevices from '../components/Mobile/all-watch-devices';
import TabsDevices from '../components/Mobile/all-tab-devices';
import UploadImage from '../components/Image/upload-image';
import AllUsers from '../components/admin-dash/toolbar-admin-sec/users';
import AllMobiles from '../components/admin-dash/toolbar-admin-sec/mobiles';
import AllTabs from '../components/admin-dash/toolbar-admin-sec/tabs';
import AllWatches from '../components/admin-dash/toolbar-admin-sec/watch';

export default {
  
    routes: [
      {
        path: "/",
        component: Dashboard,
        exact: true
      },
      {
        path: "/signin",
        component: Login,
        exact: true
      },
      {
        path: "/register",
        component:Register,
        exact: true
      },
      {
        path: "/mobile/comparemobiles",
        component:CompareMobile,
        exact: true
      },
      {
        path: "/search",
        component:AdvanceSearch,
        exact: true
      },
      {
        path: "/admin/allmobiledevices",
        component:allMobileDevices,
        exact: true
      },
      {
        path :"/technology/news",
        component:news,
        exact: true
      },
      {
        path :"/smartphones",
        component:MobileDevices,
        exact: true
      },
      {
        path :"/tabs",
        component:TabsDevices,
        exact: true
      },
      {
        path :"/smartwatch",
        component:WatchDevices,
        exact: true
      },
      {
        path :"/upload/image",
        component:UploadImage,
        exact: true
      },
      {
        path :"/admin/users",
        component:AllUsers,
        exact: true
      },
      {
        path :"/admin/mobiles",
        component:AllMobiles,
        exact: true
      },
      {
        path :"/admin/tabs",
        component:AllTabs,
        exact: true
      },
      {
        path :"/admin/watches",
        component:AllWatches,
        exact: true
      },
    ],
  };
