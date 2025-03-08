import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  return {
    locale,
    messages: {
      common: (await import(`./locales/${locale}/common.json`)).default,
      home: (await import(`./locales/${locale}/home.json`)).default,
      about: (await import(`./locales/${locale}/about.json`)).default,
      product: (await import(`./locales/${locale}/product.json`)).default
    }
  };
});