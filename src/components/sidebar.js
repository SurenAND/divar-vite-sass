import { El } from './shared/el';

export const Sidebar = () => {
  return El({
    element: 'article',
    className: 'sidebar',
    children: [
      El({
        element: 'span',
        className: 'headermeno',
        children: ['دسته ها'],
      }),
      El({
        element: 'ul',
        children: [
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/buildings.svg',
              }),
              'املاک',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/car-front.svg',
              }),
              'وسایل نقلیه',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/phone.svg',
              }),
              'کالای دیجیتال',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/lamp.svg',
              }),
              'خانه و آشپزخانه',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/fluent--paint-brush-32-regular.svg',
              }),
              'خدمات',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/watch.svg',
              }),
              'وسایل شخصی',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/lucide--dices.svg',
              }),
              'سرگرمی و فراغت',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/octicon--people-16.svg',
              }),
              'اجتماعی',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/solar--chair-2-broken.svg',
              }),
              'تجهیزات صنعتی',
            ],
          }),
          El({
            element: 'li',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/sidebar/fluent-mdl2--work.svg',
              }),
              'استخدام و کاریابی',
            ],
          }),
        ],
      }),
      El({
        element: 'hr',
      }),
      El({
        element: 'article',
        className: 'location',
        children: [
          El({
            element: 'div',
            className: 'iconlocation',
            // id
            children: [
              El({
                element: 'span',
                // id
                children: ['محل'],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'inputlocation ',
            // id
            children: [
              El({
                element: 'input',
                className: 'inputposition',
                restAttrs: {
                  placeholder: 'تعیین در محل',
                },
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'hr',
      }),
      El({
        element: 'article',
        className: 'price',
        children: [
          El({
            element: 'div',
            className: 'iconprice',
            children: [
              El({
                element: 'span',
                className: 'spanprice',
                children: ['قیمت'],
              }),
              El({
                element: 'br',
              }),
              El({
                element: 'label',
                children: ['حداقل:'],
              }),
              El({
                element: 'select',
                children: [
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '',
                    },
                    children: ['وارد کردن مقدار دلخواه'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '10',
                    },
                    children: ['10 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '25',
                    },
                    children: ['25 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '50',
                    },
                    children: ['50 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '70',
                    },
                    children: ['70 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '100',
                    },
                    children: ['100 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '150',
                    },
                    children: ['150 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '300',
                    },
                    children: ['300 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '500',
                    },
                    children: ['500 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '1',
                    },
                    children: ['1 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '2',
                    },
                    children: ['2 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '5',
                    },
                    children: ['5 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '10',
                    },
                    children: ['10 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '50',
                    },
                    children: ['50 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '100',
                    },
                    children: ['100 میلیون'],
                  }),
                ],
              }),
              // El({
              //   element: 'br',
              // }),
              El({
                element: 'div',
                className: 'divdot',
                children: [
                  El({
                    element: 'span',
                    className: 'dot',
                    children: ['.'],
                  }),
                  El({
                    element: 'span',
                    className: 'dot',
                    children: ['.'],
                  }),
                  El({
                    element: 'span',
                    className: 'dot',
                    children: ['.'],
                  }),
                ],
              }),
              El({
                element: 'br',
              }),
              El({
                element: 'span',
                children: 'حداکثر:',
              }),
              El({
                element: 'select',
                children: [
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '',
                    },
                    children: ['وارد کردن مقدار دلخواه'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '10',
                    },
                    children: ['10 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '25',
                    },
                    children: ['25 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '50',
                    },
                    children: ['50 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '70',
                    },
                    children: ['70 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '100',
                    },
                    children: ['100 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '150',
                    },
                    children: ['150 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '300',
                    },
                    children: ['300 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '500',
                    },
                    children: ['500 هزار'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '1',
                    },
                    children: ['1 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '2',
                    },
                    children: ['2 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '5',
                    },
                    children: ['5 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '10',
                    },
                    children: ['10 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '50',
                    },
                    children: ['50 میلیون'],
                  }),
                  El({
                    element: 'option',
                    restAttrs: {
                      value: '100',
                    },
                    children: ['100 میلیون'],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'hr',
      }),
      El({
        element: 'article',
        className: 'Advertising',
        children: [
          El({
            element: 'div',
            className: 'iconadvertising',
            children: [
              El({
                element: 'span',
                children: ['وضعیت آگهی'],
              }),
              El({
                element: 'div',
                className: 'divphoto',
                children: [
                  El({
                    element: 'span',
                    children: ['فقط عکس دار'],
                  }),
                  El({
                    element: 'lable',
                    className: 'swith',
                    children: [
                      // El({
                      //   element: 'input',
                      //   restAttrs: [
                      //     {
                      //       // checked,
                      //       // type:checkbox
                      //     },
                      //   ],
                      // }),
                      El({
                        element: 'span',
                        className: 'slider round',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'divfori',
                children: [
                  El({
                    element: 'span',
                    children: ['فقط فوری ها'],
                  }),
                  El({
                    element: 'lable',
                    className: 'swith',
                    children: [
                      // El({
                      //   element: 'input',
                      //   restAttrs: [
                      //     {
                      //       // checked,
                      //       // type:checkbox
                      //     },
                      //   ],
                      // }),
                      El({
                        element: 'span',
                        className: 'slider round',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'hr',
      }),
      El({
        element: 'article',
        className: 'link',
        children: [
          El({
            element: 'a',
            restAttrs: {
              href: '#',
            },
            children: ['درباره دیوار'],
          }),
          El({
            element: 'a',
            restAttrs: {
              href: '#',
            },
            children: ['دریافت برنامه'],
          }),
          El({
            element: 'a',
            restAttrs: {
              href: '#',
            },
            children: ['اتاق خبر'],
          }),
          El({
            element: 'a',
            restAttrs: {
              href: '#',
            },
            children: ['کسب و کارها'],
          }),
          El({
            element: 'a',
            restAttrs: {
              href: '#',
            },
            children: ['پشتیبانی و قوانین'],
          }),
        ],
      }),
      El({
        element: 'br',
      }),
      El({
        element: 'div',
        className: 'divbtn',
        children: [
          El({
            element: 'img',
            src: './src/assets/images/media/twitter.svg',
            children: [
              El({
                element: 'a',
                restAttrs: {
                  href: '#',
                },
              }),
            ],
          }),
          El({
            element: 'img',
            src: './src/assets/images/media/instagram.svg',
            children: [
              El({
                element: 'a',
                restAttrs: {
                  href: '#',
                },
              }),
            ],
          }),
          El({
            element: 'img',
            src: './src/assets/images/media/linkedin.svg',
            children: [
              El({
                element: 'a',
                restAttrs: {
                  href: '#',
                },
              }),
            ],
          }),
          El({
            element: 'img',
            src: './src/assets/images/media/aparat.svg',
            children: [
              El({
                element: 'a',
                restAttrs: {
                  href: '#',
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
