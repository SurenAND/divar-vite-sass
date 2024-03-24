import { El } from './shared/el';

export const Header = () => {
  return El({
    element: 'header',
    children: [
      El({
        element: 'nav',
        className: 'nav-bar',
        children: [
          El({
            element: 'img',
            className: 'nav-bar-logo',
            src: './src/assets/images/logo.svg',
          }),
          El({
            element: 'hr',
            className: 'nav-logo-line',
          }),
          El({
            element: 'button',
            className: 'btn',
            children: [
              El({
                element: 'img',
                className: 'location-icon',
                src: './src/assets/images/Location.svg',
              }),
              El({
                element: 'span',
                children: ['تهران'],
              }),
            ],
          }),
          El({
            element: 'button',
            className: 'btn',
            children: [
              El({
                element: 'span',
                children: ['دسته ها'],
              }),
              El({
                element: 'img',
                className: 'chevron-icon',
                src: './src/assets/images/Down 2.svg',
              }),
            ],
          }),
          El({
            element: 'form',
            className: 'searchBar',
            children: [
              El({
                element: 'input',
                className: 'inputSearch',
                restAttrs: {
                  placeholder: 'جستجو در همه آگهی ها',
                },
              }),
              El({
                element: 'img',
                className: 'searchIcon',
                src: './src/assets/images/Search 2.svg',
              }),
            ],
          }),
          El({
            element: 'button',
            className: 'btn',
            children: [
              El({
                element: 'img',
                className: 'profile-icon',
                src: './src/assets/images/Profile 1.svg',
              }),
              El({
                element: 'span',
                children: ['دیوار من'],
              }),
            ],
          }),
          El({
            element: 'button',
            className: 'btn',
            children: [
              El({
                element: 'img',
                className: 'chat-icon',
                src: './src/assets/images/Message 28.svg',
              }),
              El({
                element: 'span',
                children: ['چت'],
              }),
            ],
          }),
          El({
            element: 'button',
            className: 'btn',
            children: ['پشتیبانی'],
          }),
          El({
            element: 'button',
            className: 'btn submit-ad',
            children: ['ثبت آگهی'],
          }),
        ],
      }),
    ],
  });
};
