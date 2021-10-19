import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';

import styled from 'styled-components';

export default function Home(): JSX.Element {
  const { t, lang } = useTranslation('home'),
    og = {
      images: [
        {
          url: `https://www.calcscout.com/img/og/og-square-logo-text-slogan-${lang}.png`,
          width: 800,
          height: 800,
          alt: t('og-image-alt')
        }
      ]
    };

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout>
        <Title>Calcscout Starter Kit</Title>
      </MainLayout>
    </>
  );
}

const Title = styled.h1`
  color: var(--color-white);
  font-size: 50px;
`;
