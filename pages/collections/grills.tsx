import { useEffect } from 'react';
import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useSWR from 'swr';

//redux
import {
  selectApeId,
  selectApeImageUrl,
  changeApeId,
  changeApeImageUrl,
  changePermalink,
  changeMouthType,
  changeOwner
} from 'store/slices/grillsSlice';
import { useDispatch, useSelector } from 'react-redux';

//components
import styled from 'styled-components';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { ApeDetailsCard, GrillDetailsCard } from 'components/Cards';
import SelectorApe from 'components/SelectorApe';
import Spacer from 'components/Spacer';

//images and icons
import Ape126 from '../../public/img/apes/original/126-grin.png';
import Grill1 from '../../public/img/apecessories/grills/mouth-grin/grill-1.png';

//constants and data
import { QUERIES } from 'constants/constants';
// import ape126OpenseaResponseData from 'defaultData/openSeaAssetResponse126';

// const fetcherPost = (url: string) =>
//   fetch(url, {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error('Error:', error);
//     });

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
  const apeImageUrl = useSelector(selectApeImageUrl);

  const setApeId = (id: number) => {
    dispatch(changeApeId(id));
  };

  // const { data: apesData } = useSWR(
  //   `https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/apecessories-rgyid/service/bored-apes/incoming_webhook/get-ape?ape_id=${apeId}`,
  //   fetcherPost
  // );

  const { data: openseaData } = useSWR(
    `https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${apeId}/`,
    fetcherGet
    // { fallbackData: ape126OpenseaResponseData }
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
        ? dispatch(changeOwner(openseaData?.owner?.user?.username))
        : dispatch(changeOwner('unknown'));
    }
  }, [openseaData, dispatch]);

  // const ownerName = openseaData?.owner?.user?.username || 'noName';

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
          <SelectorWrapper style={{ gridArea: 'ape-selector' }}>
            <SelectorApe />
          </SelectorWrapper>

          <ApeWrapper style={{ gridArea: 'ape-image' }}>
            <ImageWrapper>
              {openseaData ? (
                <Image
                  src={apeImageUrl}
                  alt="Ape Image"
                  width={631}
                  height={631}
                  // placeholder="blur"
                />
              ) : (
                <Typography variant="h6">Loading...</Typography>
              )}
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
            <Typography variant="h5" align="center" style={{ color: 'var(--color-axie-danger-4)' }}>
              Work In Progress
            </Typography>
          </div>
          <ApeDetailsCard style={{ gridArea: 'ape-details' }} />
          <GrillDetailsCard style={{ gridArea: 'grill-details' }} />
          <TryApecessoryButton onClick={() => setApeId(40)} style={{ gridArea: 'button' }}>
            Try Grill
          </TryApecessoryButton>
        </GridWrapper>
        <Spacer size={8} />
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
