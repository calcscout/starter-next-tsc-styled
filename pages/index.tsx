import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';

import styled from 'styled-components';
import Typography from 'components/Typography';

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
        <Title>Apecessories</Title>
        <Typography variant="h1" align="right">
          Test Component
        </Typography>
        <Typography variant="h2" align="right">
          Test Component
        </Typography>
        <Typography variant="h3" align="right">
          Test Component
        </Typography>
        <Typography variant="h4" align="right">
          Test Component
        </Typography>
        <Typography variant="h5" align="right">
          Test Component
        </Typography>
        <Typography variant="h6" align="right">
          Test Component
        </Typography>
        <Typography variant="body1" align="right">
          Test Component
        </Typography>
        <Typography variant="body2" align="right">
          Test Component
        </Typography>
      </MainLayout>
    </>
  );
}

const Title = styled.h1`
  color: var(--color-white);
  font-size: 2rem;
  text-align: center;
`;
