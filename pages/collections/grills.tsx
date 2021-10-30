import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import Typography from 'components/Typography';
import Button from 'components/Button';

import Ape126 from '../../public/img/apes/original/126-grin.png';
import Grill1 from '../../public/img/apecessories/grills/mouth-grin/grill-1.png';
import { QUERIES } from 'constants/constants';

export default function Grills(): JSX.Element {
  const { t, lang } = useTranslation('grills'),
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

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout pageTitle="GRILLS NFT collection">
        <GridWrapper>
          <div style={{ gridArea: 'ape-selector' }}>
            <Typography variant="h5" align="center">
              Ape Selector
            </Typography>
          </div>

          <ApeWrapper style={{ gridArea: 'ape-image' }}>
            <ImageWrapper>
              <Image src={Ape126} alt="Ape 126" width={631} height={631} placeholder="blur" />
            </ImageWrapper>
          </ApeWrapper>
          <ApecessoryWrapper style={{ gridArea: 'apecessory-image' }}>
            <LayerWrapper
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ delay: 2, duration: 8, repeatType: 'reverse', repeat: Infinity }}
            >
              <LayerOneImage src={Ape126} alt="Grill inner fill red" width={631} height={631} />
            </LayerWrapper>
            <ImageWrapper>
              <Image src={Grill1} alt="Ape 126" width={631} height={631} placeholder="blur" />
            </ImageWrapper>
          </ApecessoryWrapper>

          <div style={{ gridArea: 'grill-selector' }}>
            <Typography variant="h5" align="center">
              Grill Selector
            </Typography>
          </div>
          <ApeCard style={{ gridArea: 'grill-details' }}>Ape Card</ApeCard>
          <GrillCard style={{ gridArea: 'ape-details' }}>Grill Card</GrillCard>
          <TryApecessoryButton style={{ gridArea: 'button' }}>Try Grill</TryApecessoryButton>
        </GridWrapper>
      </MainLayout>
    </>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: auto;
  grid-template-areas:
    'ape-selector'
    'ape-image'
    'grill-selector'
    'grill-details'
    'ape-details';
  align-items: center;
  row-gap: 6px;
  justify-items: center;
  width: 80vmin;
  @media ${QUERIES.smUp} {
    grid-template-columns: 1fr 90px 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'ape-selector . grill-selector'
      'ape-image button apecessory-image'
      'grill-details button ape-details';
    column-gap: 16px;
    width: 95vmin;
  }
`;

const ApeWrapper = styled.div`
  justify-self: center;
  position: relative;
  max-width: 300px;
  max-height: 300px;
`;

const ApecessoryWrapper = styled.div`
  display: none;
  @media ${QUERIES.smUp} {
    display: revert;
    justify-self: center;
    position: relative;
    max-width: 300px;
    max-height: 300px;
    border: 1px solid var(--color-gray-700);
    border-radius: 23px;
  }
`;

const ImageWrapper = styled(motion.div)`
  opacity: 1;
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

const Card = styled.div`
  width: 100%;
  min-height: 145px;
  max-width: 300px;
  background-color: var(--color-gray-700);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApeCard = styled(Card)``;
const GrillCard = styled(Card)``;

const TryApecessoryButton = styled(Button)`
  display: none;
  border-radius: 9999px;
  width: 90px;
  height: 100%;
  @media ${QUERIES.smUp} {
    display: revert;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
