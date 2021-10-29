import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import Typography from 'components/Typography';
import Button from 'components/Button';

import Ape126 from '../../public/img/apes/original/126-grin.png';
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

          <CombinationWrapper style={{ gridArea: 'ape-image' }}>
            <ImageWrapper animate={{ opacity: 0.4 }} transition={{ delay: 2, duration: 2 }}>
              <Image src={Ape126} alt="Ape 126" width={631} height={631} placeholder="blur" />
            </ImageWrapper>
          </CombinationWrapper>

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
  gap: 4px;
  align-items: center;
  column-gap: 16px;
  row-gap: 6px;
  /* width: min(100%, 60vmin); */
  justify-items: center;
  @media ${QUERIES.smUp} {
    grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'ape-selector . grill-selector'
      'ape-image button accessory-image'
      'grill-details button ape-details';
  }
`;

const CombinationWrapper = styled.div`
  justify-self: center;
  position: relative;
  width: min(100%, 60vmin);
  /* height: 60vmin; */
  max-width: 300px;
  max-height: 300px;
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

const Card = styled.div`
  width: min(100%, 60vmin);
  min-height: 145px;
  max-width: 300px;
  background-color: var(--color-gray-700);
  border-radius: 23px;
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
