import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import { useRouter } from 'next/router';
import { QUERIES } from 'constants/constants';

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
          <CaptionTypography variant="h4" align="center">
            Collections
          </CaptionTypography>
          <Spacer axis="vertical" size={18} />
          <StyledButton onClick={() => router.push('/collections/grills')}>Grills</StyledButton>
          <Spacer axis="vertical" size={8} />
          <StyledButtonInactive>Pills (WIP)</StyledButtonInactive>
          <Spacer axis="vertical" size={8} />
          <StyledButtonInactive>Necklaces (WIP)</StyledButtonInactive>
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
  min-width: 150px;
  max-width: 60vmin;
`;

const StyledButtonInactive = styled(StyledButton)`
  background-color: var(--color-gray-500);
  color: var(--color-gray-400);
  cursor: revert;
  &:hover,
  &:focus {
    background-color: var(--color-gray-500);
  }

  &:focus {
    outline: 0px solid var(--color-gray-500);
    outline-offset: 0px;
  }

  &:active {
    transform: scale(1);
  }
  font-size: 0.8rem;

  @media ${QUERIES.smUp} {
    font-size: 1rem;
  }
  @media ${QUERIES.mdUp} {
    font-size: 1rem;
  }
  @media ${QUERIES.lgUp} {
    font-size: 1rem;
  }
`;

const CaptionTypography = styled(Typography)`
  max-width: 60vmin;
`;
