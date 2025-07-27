export const appPaths = {
  HOME: '/',
  DOCTORS: '/doctors',
  ABOUT_US: '/about-us',
  CALL_CENTER: '/call-center',
  ABOUT_CLINIC: '/about-clinic',
  CONTACTS: '/contacts',
  CONTROL: '/control',
  HEALER: '/healer',
  NEWS: '/news',
  NEWS_DETAIL: '/news-detail',
  ALLSERVICES: '/allservices',

  SERVICE_DETAILS: (key = ':id') => '/service/' + key,
};
