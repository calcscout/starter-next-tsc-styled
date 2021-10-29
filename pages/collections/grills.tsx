import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import Typography from 'components/Typography';

import Ape126 from '../../public/img/apes/original/126-grin.png';

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
`;

const CombinationWrapper = styled.div`
  position: relative;
  width: 60vmin;
  height: 60vmin;
  max-width: 631px;
  max-height: 631px;
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

const ApeCard = styled.div`
  width: 100%;
  min-height: 145px;
  background-color: white;
`;
const GrillCard = styled.div`
  width: 100%;
  min-height: 145px;
  background-color: white;
`;
