import styled from 'styled-components';
// import Link from 'next/link';
import Typography from 'components/Typography';

//IMG
import OpenSeaLogo from '../../public/img/OpenSea-Full-Logo(light).svg';
import VerifiedIcon from '../../public/img/icons/CustomVerifiedIcon.svg';
import EthLogo from '../../public/img/icons/ethLogo.svg';

type ComponentProps = {
  pageTitle?: string;
  style?: React.CSSProperties;
  apeId: number;
};

export default function ApeDetailsCard(props: ComponentProps): JSX.Element {
  const { style, apeId = 126 } = props;
  const contractNumber = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  return (
    <Wrapper style={style}>
      <Row>
        <Typography variant="caption1" style={{ flexBasis: '100px' }}>
          Owned by
        </Typography>
        <EthAddress variant="caption1" align="right">
          0xd29719323...cf542d
        </EthAddress>
      </Row>
      <Row>
        <Typography variant="caption1">Last sale price</Typography>
        <Typography variant="caption1" style={{ marginLeft: 'auto' }}>
          53.5
        </Typography>
        {/* <Spacer size={2} /> */}
        <EthLogo />
      </Row>
      <Row>
        <BoredApeTypography variant="caption1">Bored Ape Yacht Club</BoredApeTypography>
        <VerifiedIcon style={{ fill: 'var(--color-blue-main)' }} />
      </Row>
      <LogoWrapper>
        <OpenSeaLink
          target="_blank"
          rel="noreferrer"
          href={`https://opensea.io/assets/${contractNumber}/${apeId}`}
        >
          <OpenSeaLogo />
        </OpenSeaLink>
      </LogoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 145px; */
  max-width: 300px;
  padding: 8px;
  background-color: var(--color-gray-700);
  border-radius: 12px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  & svg {
    height: 30px;
  }
`;

const EthAddress = styled(Typography)`
  flex: 1;
  padding-right: 8px;
  & svg {
    fill: black;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoredApeTypography = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OpenSeaLink = styled.a`
  display: flex;
  cursor: pointer;
`;
