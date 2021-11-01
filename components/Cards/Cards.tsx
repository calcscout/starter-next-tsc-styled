import styled from 'styled-components';
// import Link from 'next/link';
import Typography from 'components/Typography';

//IMG
import OpenSeaLogo from '../../public/img/OpenSea-Full-Logo(light).svg';
import VerifiedIcon from '../../public/img/icons/CustomVerifiedIcon.svg';
// import { MdVerified } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import Spacer from 'components/Spacer';

type ComponentProps = {
  pageTitle?: string;
  style?: React.CSSProperties;
};

export function ApeDetailsCard(props: ComponentProps): JSX.Element {
  const { style } = props;
  return (
    <Wrapper style={style}>
      <Row>
        <Typography variant="body2" style={{ flexBasis: '100px' }}>
          Owned by
        </Typography>
        <EthAddress variant="body2" align="right">
          0xd29719323...cf542d
        </EthAddress>
      </Row>
      <Row>
        <Typography variant="body2">Last sale price</Typography>
        <Typography variant="body2" style={{ marginLeft: 'auto' }}>
          53.5
        </Typography>
        <Spacer size={4} />
        <FaEthereum />
      </Row>
      <Row>
        <BoredApeTypography variant="body2">Bored Ape Yacht Club</BoredApeTypography>
        <VerifiedIcon style={{ fill: 'var(--color-blue-main)' }} />
      </Row>
      <LogoWrapper>
        <OpenSeaLogo />
      </LogoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
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
  flex: 1;
  display: flex;
  align-items: center;
  & svg {
    height: 30px;
  }
`;

const EthAddress = styled(Typography)`
  flex: 1;
  margin-right: 2px;
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
