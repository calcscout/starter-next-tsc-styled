import styled from 'styled-components';
import '@reach/dialog/styles.css';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Image from 'next/image';

//redux
import { selectDialogGrillsIsOpen, closeDialogGrills } from 'store/slices/grillsSlice';
import { useDispatch, useSelector } from 'react-redux';

//components
import VisuallyHidden from 'components/VisuallyHidden';
import Typography from 'components/Typography';

//icons
import { IoIosClose } from 'react-icons/io';
import Spacer from 'components/Spacer';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type ComponentProps = WithChildren<{
  pageTitle?: string;
}>;

export default function DialogGrills(_props: ComponentProps): JSX.Element {
  const dispatch = useDispatch();
  const showDialog = useSelector(selectDialogGrillsIsOpen);

  const close = () => {
    dispatch(closeDialogGrills());
  };

  return (
    <DialogOverlay isOpen={showDialog} onDismiss={close}>
      <DialogContentStyled>
        <CloseButtonWrapper onClick={close}>
          <IoIosClose />
          <VisuallyHidden>Close Button</VisuallyHidden>
        </CloseButtonWrapper>
        <Typography variant="h6" align="center">
          Choose your Grill
        </Typography>
        <Spacer size={8} />
        <GalleryWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/grin/1.png"
              blurDataURL="/img/races/grin/1.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/grin/2.png"
              blurDataURL="/img/races/grin/2.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/phoneme-vuh/3.png"
              blurDataURL="/img/races/phoneme-vuh/3.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/phoneme-vuh/4.png"
              blurDataURL="/img/races/phoneme-vuh/4.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/rage/5.png"
              blurDataURL="/img/races/rage/5.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/rage/6.png"
              blurDataURL="/img/races/rage/6.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/small-grin/7.png"
              blurDataURL="/img/races/small-grin/7.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/img/races/small-grin/8.png"
              blurDataURL="/img/races/small-grin/8.png"
              alt="Grin1"
              width={631}
              height={631}
              placeholder="blur"
            />
          </ImageWrapper>
        </GalleryWrapper>
      </DialogContentStyled>
    </DialogOverlay>
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
  grid-template-columns: repeat(auto-fill, minmax(min(100px, 100%), 1fr));
`;

const ImageWrapper = styled.div`
  border: 1px solid var(--color-axie-gray-2);
  background-color: var(--color-axie-gray-3);
  border-radius: 8px;
  display: flex;
  height: 100%;
`;

const DialogContentStyled = styled(DialogContent)`
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
