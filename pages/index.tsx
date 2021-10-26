import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import Ape126 from '../public/img/apes/original/126.png';

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
        <Wrapper>
          <Typography variant="h6" align="right">
            APECESSORIZE YOUR APE
          </Typography>
          <Spacer axis="vertical" size={1} />
          <ImageWrapper>
            <Image src={Ape126} alt="Ape 126" width={631} height={631} placeholder="blur" />
          </ImageWrapper>
          <Spacer axis="vertical" size={12} />
          <StyledButton>Explore</StyledButton>
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

const ImageWrapper = styled.div`
  width: 60vmin;
  height: 60vmin;
  max-width: 631px;
  max-height: 631px;
  background-color: transparent;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  border-radius: 9999px;
  width: 100%;
  max-width: 60vmin;
`;
