import { useEffect } from 'react';
import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import Ape126 from '../public/img/apes/original/126.png';
import Layer1 from '../public/img/accessories/grills/mouth-grin/outer-fill/gold.png';
import Layer2 from '../public/img/accessories/grills/mouth-grin/inner-fill/red.png';
import Layer3 from '../public/img/accessories/grills/mouth-grin/inner-fill/hacky.png';
import { motion, useAnimation } from 'framer-motion';
// import { QUERIES } from 'constants/constants';

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

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      // x: 100,
      transition: { delay: i * 2, duration: 2, repeatType: 'reverse', repeat: Infinity }
    }));
  }, []);

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
          <CaptionTypography variant="h4" align="center">
            APECESSORIZE YOUR APE
          </CaptionTypography>
          <Spacer axis="vertical" size={1} />
          <CombinationWrapper>
            <ImageWrapper>
              <Image src={Ape126} alt="Ape 126" width={631} height={631} placeholder="blur" />
            </ImageWrapper>
            <LayerWrapper custom={1} animate={controls}>
              <LayerOneImage src={Layer1} alt="Grill outer fill gold" width={631} height={631} />
            </LayerWrapper>
            <LayerWrapper custom={2} animate={controls}>
              <LayerOneImage src={Layer2} alt="Grill inner fill red" width={631} height={631} />
            </LayerWrapper>
            <LayerWrapper custom={3} animate={controls}>
              <LayerOneImage src={Layer3} alt="Grill inner fill hacky" width={631} height={631} />
            </LayerWrapper>
          </CombinationWrapper>
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

// const Caption = styled(Typography)`
//   font-size: 1.1rem;
//   @media ${QUERIES.iSEAndUp} {
//     font-size: 1.7rem;
//   }
// `;

const CombinationWrapper = styled.div`
  position: relative;
  width: 60vmin;
  height: 60vmin;
  max-width: 631px;
  max-height: 631px;
`;

const ImageWrapper = styled.div`
  background-color: transparent;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayerWrapper = styled(motion.div)`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  background-color: transparent;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayerOneImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledButton = styled(Button)`
  border-radius: 9999px;
  width: 100%;
  max-width: 60vmin;
`;

const CaptionTypography = styled(Typography)`
  max-width: 60vmin;
`;
