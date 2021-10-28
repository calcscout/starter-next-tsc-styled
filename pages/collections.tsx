import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import Typography from 'components/Typography';

export default function Collections(): JSX.Element {
  const { t, lang } = useTranslation('collections'),
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
  const router = useRouter();

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout>
        <Wrapper>
          <CaptionTypography variant="h5" align="center">
            Available Collections
          </CaptionTypography>
          <Spacer axis="vertical" size={1} />
          <StyledButton onClick={() => router.push('/collections/grills')}>Grills</StyledButton>
          <Spacer axis="vertical" size={8} />
          <StyledButton onClick={() => router.push('/collections/pills')}>Pills</StyledButton>
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

const StyledButton = styled(Button)`
  border-radius: 9999px;
  width: 100%;
  max-width: 60vmin;
`;

const CaptionTypography = styled(Typography)`
  max-width: 60vmin;
`;
