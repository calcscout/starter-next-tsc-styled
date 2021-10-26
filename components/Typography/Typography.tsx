import styled from 'styled-components';

import { ComponentProps } from 'react';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};

type variantsTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2'
  | 'overline'
  | 'button';

type TypographyProps = WithChildren<{
  variant?: variantsTypes;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  as?: string;
  // [x: string]: any;
}> &
  ComponentProps<typeof H1>;

export default function Typography(props: TypographyProps) {
  const { variant = 'body1', children, ...delegated } = props;

  switch (variant) {
    case 'h1':
      return <H1 {...delegated}>{children}</H1>;
      break;
    case 'h2':
      return <H2 {...delegated}>{children}</H2>;
      break;
    case 'h3':
      return <H3 {...delegated}>{children}</H3>;
      break;
    case 'h4':
      return <H4 {...delegated}>{children}</H4>;
      break;
    case 'h5':
      return <H5 {...delegated}>{children}</H5>;
      break;
    case 'h6':
      return <H6 {...delegated}>{children}</H6>;
      break;
    case 'body1':
      return <Body1 {...delegated}>{children}</Body1>;
      break;
    case 'body2':
      return <Body2 {...delegated}>{children}</Body2>;
      break;
    case 'caption1':
      return <Caption1 {...delegated}>{children}</Caption1>;
      break;
    case 'caption2':
      return <Caption2 {...delegated}>{children}</Caption2>;
      break;
    case 'subtitle1':
      return <Subtitle1 {...delegated}>{children}</Subtitle1>;
      break;
    case 'subtitle2':
      return <Subtitle2 {...delegated}>{children}</Subtitle2>;
      break;
    case 'overline':
      return <Overline {...delegated}>{children}</Overline>;
      break;
    case 'button':
      return <Button {...delegated}>{children}</Button>;
      break;
    default:
      return <Body1 {...delegated}>{children}</Body1>;
      break;
  }
}

const responsiveSizes = {
  h1: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  h2: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  h3: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  h4: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  h5: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  h6: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  body1: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  body2: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  caption1: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  caption2: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  subtitle1: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  subtitle2: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  overline: {
    mobile: '3.5rem',
    smUp: '4.7129rem',
    mdUp: '5.3556rem',
    lgUp: '5.9983rem'
  },
  button: {
    mobile: '0.875rem',
    smUp: '0.875rem',
    mdUp: '0.875rem',
    lgUp: '0.875rem'
  }
};

const H1 = styled.h1`
  font-size: ${responsiveSizes.h1.mobile};
  font-weight: 300;
`;
const H2 = styled.h2`
  font-size: ${responsiveSizes.h2.mobile};
  font-weight: 300;
`;
const H3 = styled.h3`
  font-size: ${responsiveSizes.h3.mobile};
  font-weight: 300;
`;
const H4 = styled.h5`
  font-size: ${responsiveSizes.h4.mobile};
  font-weight: 300;
`;
const H5 = styled.h6`
  font-size: ${responsiveSizes.h5.mobile};
  font-weight: 300;
`;
const H6 = styled.h6`
  font-size: ${responsiveSizes.h6.mobile};
  font-weight: 300;
`;
const Body1 = styled.p`
  font-size: ${responsiveSizes.body1.mobile};
  font-weight: 300;
`;
const Body2 = styled.p`
  font-size: ${responsiveSizes.body2.mobile};
  font-weight: 300;
`;
const Caption1 = styled.span`
  font-size: ${responsiveSizes.caption1.mobile};
  font-weight: 300;
`;
const Caption2 = styled.span`
  font-size: ${responsiveSizes.caption2.mobile};
  font-weight: 300;
`;
const Subtitle1 = styled.span`
  font-size: ${responsiveSizes.subtitle1.mobile};
  font-weight: 300;
`;
const Subtitle2 = styled.span`
  font-size: ${responsiveSizes.subtitle2.mobile};
  font-weight: 400;
`;
const Overline = styled.span`
  font-size: ${responsiveSizes.overline.mobile};
  font-weight: 300;
`;
const Button = styled.span`
  text-transform: uppercase;
  font-size: ${responsiveSizes.button.mobile};
  font-weight: 400;
`;
