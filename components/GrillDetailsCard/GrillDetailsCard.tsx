import styled from 'styled-components';
// import Link from 'next/link';
import Typography from 'components/Typography';

//IMG
import OpenSeaLogo from '../../public/img/OpenSea-Full-Logo(light).svg';

type ComponentProps = {
  pageTitle?: string;
  style?: React.CSSProperties;
};

export default function GrillDetailsCard(props: ComponentProps): JSX.Element {
  const { style } = props;
  const grillId = 42;
  const contractNumber = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
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
            href={`https://opensea.io/assets/${contractNumber}/${grillId}`}
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

const OpenSeaLink = styled.a`
  display: flex;
  cursor: pointer;
`;
