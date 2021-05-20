import Global from './views/components/global/global';
import Header from './views/components/header/header';

$(document).ready(() => {
  Global.lazyLoad();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});
