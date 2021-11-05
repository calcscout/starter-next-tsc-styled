import { useEffect, useState } from 'react';
import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { AnimateSharedLayout } from 'framer-motion';

//redux
import {
  selectApeId,
  // selectApeImageUrl,
  // changeApeId,
  changeApeImageUrl,
  changePermalink,
  changeMouthType,
  changeOwnerName,
  changeOwnerAddress,
  changeLastSalePrice
} from 'store/slices/grillsSlice';
import { useDispatch, useSelector } from 'react-redux';

//components
import styled from 'styled-components';
import Typography from 'components/Typography';
import Button from 'components/Button';
import ApeDetailsCard from 'components/ApeDetailsCard';
import GrillDetailsCard from 'components/GrillDetailsCard';
import SelectorApe from 'components/SelectorApe';
import SelectorGrill from 'components/SelectorGrill';
import Spacer from 'components/Spacer';

//images and icons
// import Ape126 from '../../public/img/apes/original/126-grin.png';
import Grill1 from '../../public/img/apecessories/grills/mouth-grin/grill-1.png';
import TransparentApe from '../../public/img/transparent-ape.png';

//constants and data
import { QUERIES } from 'constants/constants';

const fetcherGet = (url: string) =>
  fetch(url, {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });

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

  const dispatch = useDispatch();
  const apeId = useSelector(selectApeId);
  const [grillOnApe, setGrillOnApe] = useState(false);

  const tryGrillToggle = () => {
    setGrillOnApe((prevState) => !prevState);
  };

  const { data: openseaData } = useSWR(
    `https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${apeId}/`,
    fetcherGet
  );

  useEffect(() => {
    if (openseaData) {
      openseaData?.image_url ? dispatch(changeApeImageUrl(openseaData?.image_url)) : null;

      openseaData?.permalink ? dispatch(changePermalink(openseaData?.permalink)) : null;

      openseaData?.traits?.filter((e: { trait_type: string }) => e.trait_type === 'Mouth')[0]?.value
        ? dispatch(
            changeMouthType(
              openseaData?.traits?.filter(
                (e: { trait_type: string }) => e.trait_type === 'Mouth'
              )[0]?.value
            )
          )
        : null;

      openseaData?.owner?.user?.username
        ? dispatch(changeOwnerName(openseaData?.owner?.user?.username))
        : dispatch(changeOwnerName('unknown'));

      openseaData?.owner?.address
        ? dispatch(changeOwnerAddress(openseaData?.owner?.address))
        : dispatch(changeOwnerAddress('unknown'));

      openseaData?.last_sale?.total_price
        ? dispatch(changeLastSalePrice(openseaData?.last_sale?.total_price))
        : dispatch(changeLastSalePrice('0'));
    }
  }, [openseaData, dispatch]);

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout pageTitle="GRILLS NFT collection">
        <AnimateSharedLayout>
          <GridWrapper>
            <SelectorWrapper style={{ gridArea: 'ape-selector' }}>
              <SelectorApe />
            </SelectorWrapper>

            <ApeWrapper style={{ gridArea: 'ape-image' }}>
              <ImageWrapper>
                {openseaData && (
                  <Image
                    src={openseaData.image_url}
                    alt="Ape Image"
                    width={631}
                    height={631}
                    placeholder="blur"
                    blurDataURL={openseaData.image_thumbnail_url}
                  />
                )}
              </ImageWrapper>
              {!openseaData && <LoadingLayer variant="h6">Loading...</LoadingLayer>}
              {grillOnApe && (
                <LayerWrapperGrillOnApe layoutId="grill">
                  <Image src={Grill1} alt="Ape 126" width={631} height={631} placeholder="blur" />
                </LayerWrapperGrillOnApe>
              )}
            </ApeWrapper>
            <ApecessoryWrapper style={{ gridArea: 'apecessory-image' }}>
              <LayerWrapper
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ delay: 2, duration: 8, repeatType: 'reverse', repeat: Infinity }}
              >
                {openseaData && (
                  <LayerOneImage src={openseaData.image_url} alt="Grill" width={631} height={631} />
                )}
              </LayerWrapper>
              {grillOnApe ? (
                <TransparentPlaceholder
                  src={TransparentApe}
                  alt="Transparent Placeholder"
                  width={631}
                  height={631}
                />
              ) : (
                <ImageWrapper layoutId="grill">
                  <Image src={Grill1} alt="Ape 126" width={631} height={631} placeholder="blur" />
                </ImageWrapper>
              )}
            </ApecessoryWrapper>

            <SelectorWrapper style={{ gridArea: 'grill-selector' }}>
              <SelectorGrill />
            </SelectorWrapper>

            <ApeDetailsCard style={{ gridArea: 'ape-details' }} />
            <GrillDetailsCard style={{ gridArea: 'grill-details' }} />
            <TryApecessoryButton onClick={() => tryGrillToggle()} style={{ gridArea: 'button' }}>
              {grillOnApe ? 'Remove Grill' : 'Try Grill'}
            </TryApecessoryButton>
          </GridWrapper>
          <Spacer size={8} />
        </AnimateSharedLayout>
      </MainLayout>
    </>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto auto 1fr auto;
  grid-template-columns: auto;
  grid-template-areas:
    'ape-selector'
    'ape-image'
    'ape-details'
    'button'
    'grill-selector'
    'apecessory-image'
    'grill-details';
  align-items: center;
  row-gap: 8px;
  justify-items: center;
  width: 80vmin;
  @media ${QUERIES.smUp} {
    grid-template-columns: 1fr 90px 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'ape-selector . grill-selector'
      'ape-image button apecessory-image'
      'ape-details button grill-details';
    column-gap: 8px;
    /* width: 95vmin; */
  }
`;

const SelectorWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

const ApeWrapper = styled.div`
  justify-self: center;
  position: relative;
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  border: 1px solid var(--color-gray-700);
`;

const ApecessoryWrapper = styled.div`
  justify-self: center;
  position: relative;
  min-width: min(100%, 300px);
  min-height: min(100%, 300px);
  max-width: 300px;
  max-height: 300px;
  border: 1px solid var(--color-gray-700);
  border-radius: 23px;
`;

const ImageWrapper = styled(motion.div)`
  opacity: 1;
  position: relative;
  background-color: transparent;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const TransparentPlaceholder = styled(Image)``;

const LoadingLayer = styled(Typography)`
  position: absolute;
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

const LayerWrapperGrillOnApe = styled(motion.div)`
  position: absolute;
  opacity: 1;
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

const TryApecessoryButton = styled(Button)`
  border-radius: 9999px;
  /* width: 90px; */
  height: 100%;
  width: 100%;
  max-width: 300px;
  @media ${QUERIES.smUp} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
