import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  return {
    locale,
    messages: {
      common: (await import(`./locales/${locale}/common.json`)).default,
      chatbotTemplate: (await import(`./locales/${locale}/chatbotTemplate.json`)).default,
      home: (await import(`./locales/${locale}/home.json`)).default,
      integration:(await import(`./locales/${locale}/integration.json`)).default,
      solution:(await import(`./locales/${locale}/solution.json`)).default,
      about: (await import(`./locales/${locale}/about.json`)).default,
      product: (await import(`./locales/${locale}/product.json`)).default
    }
  };
});