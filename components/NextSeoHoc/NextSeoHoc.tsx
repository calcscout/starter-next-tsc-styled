import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { NextSeoProps } from 'next-seo/lib/types';

const localeTerritory = {
  de: 'de_DE',
  en: 'en_US',
  it: 'it_IT',
  ru: 'ru_RU'
};

function NextSeoHoc(props: NextSeoProps): JSX.Element {
  const domain = 'https://www.calcscout.com',
    router = useRouter(),
    { locale, locales } = useRouter(),
    url = router && router.asPath ? router.asPath : undefined,
    canonical = url && url === '/' ? domain : domain + url;

  let localeFullName = 'en_US';

  Object.entries(localeTerritory).forEach((item) => {
    if (item[0] === locale) {
      localeFullName = item[1];
    }
  });

  const og = {
      locale: localeFullName
    },
    languageAlternates = locales?.map((localeCode) => {
      return {
        hrefLang: localeCode,
        href: url && url === '/' ? `${domain}/${localeCode}` : `${domain}/${localeCode}${url}`
      };
    });

  return (
    <NextSeo
      canonical={canonical}
      languageAlternates={languageAlternates}
      openGraph={og}
      {...props}
    />
  );
}

export default NextSeoHoc;
