import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';

import styled from 'styled-components';
import Typography from 'components/Typography';
import Spacer from 'components/Spacer';

export default function Elements(): JSX.Element {
  const { t, lang } = useTranslation('pills'),
    og = {
      images: [
        {
          url: `https://apecessories.vercel.app/img/og/og-square-logo-text-slogan-${lang}.png`,
          width: 800,
          height: 800,
          alt: t('og-image-alt')
        }
      ]
    };

  const gap = 16;

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout pageTitle="Typography Viewer">
        <Wrapper>
          <Typography variant="h1" align="center">
            Typography h1
          </Typography>
          <Spacer size={gap} />
          <Typography variant="h2" align="center">
            Typography h2
          </Typography>
          <Spacer size={gap} />

          <Typography variant="h3" align="center">
            Typography h3
          </Typography>
          <Spacer size={gap} />

          <Typography variant="h4" align="center">
            Typography h4
          </Typography>
          <Spacer size={gap} />

          <Typography variant="h5" align="center">
            Typography h5
          </Typography>
          <Spacer size={gap} />

          <Typography variant="h6" align="center">
            Typography h6
          </Typography>
          <Spacer size={gap} />
          <Typography variant="subtitle1" align="center">
            subtitle1
          </Typography>
          <Spacer size={gap} />

          <Typography variant="subtitle2" align="center">
            subtitle2
          </Typography>
          <Spacer size={gap} />

          <Typography variant="body1" align="center">
            body1
          </Typography>
          <Spacer size={gap} />

          <Typography variant="body2" align="center">
            body2
          </Typography>
          <Spacer size={gap} />

          <Typography variant="caption1" align="center">
            caption1
          </Typography>
          <Spacer size={gap} />

          <Typography variant="caption2" align="center">
            caption2
          </Typography>
          <Spacer size={gap} />

          <Typography variant="overline" align="center">
            overline
          </Typography>
          <Spacer size={gap} />

          <Typography variant="button" align="center">
            button
          </Typography>
        </Wrapper>
      </MainLayout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: '4px';
`;
