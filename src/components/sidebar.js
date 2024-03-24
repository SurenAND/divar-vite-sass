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
            children: ['املاک'],
          }),
          El({
            element: 'li',
            children: ['وسایل نقلیه'],
          }),
          El({
            element: 'li',
            children: ['کالای دیجیتال'],
          }),
          El({
            element: 'li',
            children: ['خانه و آشپزخانه'],
          }),
          El({
            element: 'li',
            children: ['خدمات'],
          }),
          El({
            element: 'li',
            children: ['وسایل شخصی'],
          }),
          El({
            element: 'li',
            children: ['سرگرمی و فراغت'],
          }),
          El({
            element: 'li',
            children: ['اجتماعی'],
          }),
          El({
            element: 'li',
            children: ['تجهیزات صنعتی'],
          }),
          El({
            element: 'li',
            children: ['استخدام و کاریابی'],
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
            children: ['درباره دیوار'],
          }),
          El({
            element: 'a',
            children: ['دریافت برنامه'],
          }),
          El({
            element: 'a',
            children: ['اتاق خبر'],
          }),
          El({
            element: 'a',
            children: ['کسب و کارها'],
          }),
          El({
            element: 'a',
            children: ['پشتیبانی و قوانین'],
          }),
        ],
      }),
    ],
  });
};
