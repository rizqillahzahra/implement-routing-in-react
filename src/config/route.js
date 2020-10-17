// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/named
import { Home, Profile, Contact, Login, ProfileId } from '../pages';

const routes = [
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: true,
  },
  {
    path: '/profile',
    component: Profile,
    isPublic: true,
  },
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
];

export default routes;
