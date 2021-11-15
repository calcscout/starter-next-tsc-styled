import { useMemo } from 'react';
import styled from 'styled-components';
import '@reach/dialog/styles.css';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

//redux
import {
  selectDialogGrillsIsOpen,
  selectGrillsMetadata,
  selectMouthType,
  resetGrillOnApe,
  // selectGrillType,
  closeDialogGrills,
  changeGrillId,
  changeGrillType
} from 'store/slices/grillsSlice';
import { useDispatch, useSelector } from 'react-redux';

//components
import VisuallyHidden from 'components/VisuallyHidden';
import Typography from 'components/Typography';
import Spacer from 'components/Spacer';

//icons
import { IoIosClose } from 'react-icons/io';
import { BiPaint } from 'react-icons/bi';
import EthLogo from '../../public/img/icons/ethLogo.svg';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type ComponentProps = WithChildren<{
  pageTitle?: string;
}>;

const MotionDialogContent = motion(DialogContent);

export default function DialogGrills(_props: ComponentProps): JSX.Element {
  const dispatch = useDispatch();
  const showDialog = useSelector(selectDialogGrillsIsOpen);
  const grillsMetadata = useSelector(selectGrillsMetadata);
  const mouthType = useSelector(selectMouthType);
  const filteredGrillsMetadata = useMemo(() => {
    const result = grillsMetadata.filter((grill) => {
      const filterResult = grill.mouth === mouthType;
      return filterResult;
    });

    return result;
  }, [mouthType, grillsMetadata]);
  const noGrillsYet = filteredGrillsMetadata.length === 0;

  const close = () => {
    dispatch(resetGrillOnApe());
    dispatch(closeDialogGrills());
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <DialogOverlay
        isOpen={showDialog}
        onDismiss={close}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
      >
        <DialogContentStyled
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <CloseButtonWrapper onClick={close}>
            <IoIosClose />
            <VisuallyHidden>Close Button</VisuallyHidden>
          </CloseButtonWrapper>
          {!noGrillsYet && (
            <Typography variant="h6" align="center">
              Choose your Grill
            </Typography>
          )}
          <Spacer size={12} />
          {noGrillsYet && (
            <DesignersStillWorkWrapper>
              <Typography
                variant="h5"
                align="center"
                style={{ lineHeight: 1.5, textAlign: 'center' }}
              >
                Our designers are working on this type of grill
              </Typography>
              <Spacer size={12} />
              <Typography
                variant="h5"
                align="center"
                style={{ lineHeight: 1.5, textAlign: 'center' }}
              >
                {`(${mouthType.toUpperCase()})`}
              </Typography>
              <Spacer size={24} />
              <BiPaint style={{ width: '40px', height: '40px' }} />
            </DesignersStillWorkWrapper>
          )}
          <GalleryWrapper>
            {filteredGrillsMetadata &&
              filteredGrillsMetadata.map((grill) => (
                <ImageWrapper
                  onClick={() => {
                    dispatch(changeGrillId(grill.edition));
                    dispatch(changeGrillType(grill.mouth));
                    close();
                  }}
                  key={grill.edition}
                >
                  <Image
                    src={`/img/races/${grill.mouth}/${grill.edition}.png`}
                    blurDataURL={`/img/races/${grill.mouth}/${grill.edition}.png`}
                    alt={`Grill ${grill.edition}`}
                    width={631}
                    height={631}
                    placeholder="blur"
                  />
                  <GrillId>Grill #{grill.edition}</GrillId>
                  <GrillPriceWrapper>
                    <>
                      {grill.price}
                      <EthLogo />
                    </>
                  </GrillPriceWrapper>
                </ImageWrapper>
              ))}
          </GalleryWrapper>
        </DialogContentStyled>
      </DialogOverlay>
    </AnimatePresence>
  );
}

const GalleryWrapper = styled.div`
  /* flex: 1; */
  /* background-color: white; */
  color: black;
  overflow: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  /* padding: 16px; */
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
`;

const ImageWrapper = styled.div`
  /* border: 1px solid var(--color-axie-gray-2); */
  background-color: var(--color-grill-card);
  border-radius: 12px;
  display: flex;
  height: 100%;
  cursor: pointer;
  position: relative;
`;

const GrillId = styled(Typography)`
  position: absolute;
  top: 8px;
  left: 12px;
  color: var(--color-gray-400);
`;

const GrillPriceWrapper = styled(Typography)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
`;

const DesignersStillWorkWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: none;
`;

const DialogContentStyled = styled(MotionDialogContent)`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 70vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: '4px';

  /* border: solid 1px var(--color-gray-300); */
  border-radius: 10px;
  background-color: var(--color-gray-500);

  max-width: 70vmin;
  max-height: 80vh;
  padding: 1rem;
  padding-top: 2rem;
`;

const IconButton = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  margin-left: 0px;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  text-align: center;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 12px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* margin-left: 12px; */
  color: inherit;
  padding: 8px;
  font-size: 1.75rem;
  & > svg {
    fill: var(--text-primary);
  }
  &:hover {
    /* background-color: var(--color-gray-800); */
  }
  &:hover > svg {
    fill: var(--text-secondary);
  }
`;

const CloseButtonWrapper = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;
