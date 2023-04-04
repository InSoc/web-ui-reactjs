import { HeaderOnly } from '~/components/Layout'

import HomePage from '~/pages/HomePage';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import SearchPage from '~/pages/SearchPage';

const publicRoutes = [
  {
    path: '/', component: HomePage,
  },
  {
    path: '/following', component: Following,
  },
  {
    path: '/profile', component: Profile,
  },
  {
    path: '/upload', component: Upload, layout: HeaderOnly
  },
  {
    path: '/search', component: SearchPage, layout: null
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }