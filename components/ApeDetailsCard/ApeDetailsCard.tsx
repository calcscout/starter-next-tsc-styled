import styled from 'styled-components';
// import Link from 'next/link';
import Typography from 'components/Typography';

//redux
import {
  selectOwnerName,
  selectOwnerAddress,
  selectPermalink,
  selectLastSalePrice
} from 'store/slices/grillsSlice';
import { useSelector } from 'react-redux';

//IMG
import OpenSeaLogo from '../../public/img/OpenSea-Full-Logo(light).svg';
import VerifiedIcon from '../../public/img/icons/CustomVerifiedIcon.svg';
import EthLogo from '../../public/img/icons/ethLogo.svg';

type ComponentProps = {
  pageTitle?: string;
  style?: React.CSSProperties;
};

export default function ApeDetailsCard(props: ComponentProps): JSX.Element {
  const ownerName = useSelector(selectOwnerName);
  const ownerAddress = useSelector(selectOwnerAddress);
  const permalink = useSelector(selectPermalink);
  const lastSalePrice = useSelector(selectLastSalePrice);

  const { style } = props;

  return (
    <Wrapper style={style}>
      <Row>
        <Typography variant="caption1" style={{ flexBasis: '100px' }}>
          Owned by
        </Typography>
        <EthAddress variant="caption1" align="right">
          {ownerName ? ownerName : ownerAddress}
        </EthAddress>
      </Row>
      <Row>
        <Typography variant="caption1">Last sale price</Typography>
        <Typography variant="caption1" style={{ marginLeft: 'auto' }}>
          {(+lastSalePrice / 1000000000000000000).toFixed(1)}
        </Typography>
        {/* <Spacer size={2} /> */}
        <EthLogo />
      </Row>
      <Row>
        <BoredApeTypography variant="caption1">Bored Ape Yacht Club</BoredApeTypography>
        <VerifiedIcon style={{ fill: 'var(--color-blue-main)' }} />
      </Row>
      <LogoWrapper>
        <OpenSeaLink target="_blank" rel="noreferrer" href={permalink}>
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
