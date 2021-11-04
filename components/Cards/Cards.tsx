import styled from 'styled-components';
// import Link from 'next/link';
import Typography from 'components/Typography';

//redux
import { selectApeId, selectGrillId } from 'store/slices/grillsSlice';
import { useSelector } from 'react-redux';

//IMG
import OpenSeaLogo from '../../public/img/OpenSea-Full-Logo(light).svg';
import VerifiedIcon from '../../public/img/icons/CustomVerifiedIcon.svg';
import EthLogo from '../../public/img/icons/ethLogo.svg';
// import { MdVerified } from 'react-icons/md';
// import { FaEthereum } from 'react-icons/fa';
// import Spacer from 'components/Spacer';

type ComponentProps = {
  pageTitle?: string;
  style?: React.CSSProperties;
};

export function ApeDetailsCard(props: ComponentProps): JSX.Element {
  const { style } = props;
  const apeId = useSelector(selectApeId);

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
          href={`https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${apeId}`}
        >
          <OpenSeaLogo />
        </OpenSeaLink>
      </LogoWrapper>
    </Wrapper>
  );
}

export function GrillDetailsCard(props: ComponentProps): JSX.Element {
  const { style } = props;
  const grillId = useSelector(selectGrillId);

  return (
    <Wrapper style={style}>
      <RowGrill>
        <Typography variant="caption1" style={{ flexBasis: '100px' }}>
          Owned by
        </Typography>
        <EthAddress variant="caption1" align="right">
          APECESSORIES
        </EthAddress>
      </RowGrill>
      <RowGrill style={{ marginLeft: 'auto' }}>
        <Typography variant="h4">BUY ON</Typography>
      </RowGrill>
      <RowGrill style={{ marginLeft: 'auto' }}>
        <LogoWrapper style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <OpenSeaLink
            target="_blank"
            rel="noreferrer"
            href={`https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${grillId}`}
          >
            <OpenSeaLogo />
          </OpenSeaLink>
        </LogoWrapper>
      </RowGrill>
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

const RowGrill = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: center; */
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
