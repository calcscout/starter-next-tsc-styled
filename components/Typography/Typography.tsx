import styled from 'styled-components';

import { ComponentProps } from 'react';

import { QUERIES } from 'constants/constants';

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
  className?: string;
  // [x: string]: any;
}> &
  ComponentProps<typeof H1>;

export default function Typography(props: TypographyProps) {
  const { variant = 'body1', align = 'inherit', className = '', children, ...delegated } = props;

  switch (variant) {
    case 'h1':
      return (
        <H1 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H1>
      );
      break;
    case 'h2':
      return (
        <H2 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H2>
      );
      break;
    case 'h3':
      return (
        <H3 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H3>
      );
      break;
    case 'h4':
      return (
        <H4 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H4>
      );
      break;
    case 'h5':
      return (
        <H5 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H5>
      );
      break;
    case 'h6':
      return (
        <H6 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </H6>
      );
      break;
    case 'subtitle1':
      return (
        <Subtitle1 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Subtitle1>
      );
      break;
    case 'subtitle2':
      return (
        <Subtitle2 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Subtitle2>
      );
      break;
    case 'body1':
      return (
        <Body1 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Body1>
      );
      break;
    case 'body2':
      return (
        <Body2 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Body2>
      );
      break;

    case 'button':
      return (
        <Button style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Button>
      );
      break;
    case 'caption1':
      return (
        <Caption style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Caption>
      );
      break;
    case 'overline':
      return (
        <Overline style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Overline>
      );
      break;
    default:
      return (
        <Body1 style={{ '--align': align }} className={className} {...delegated}>
          {children}
        </Body1>
      );
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
    mobile: '2.375rem',
    smUp: '2.9167rem',
    mdUp: '3.3333rem',
    lgUp: '3.75rem'
  },
  h3: {
    mobile: '2.0rem',
    smUp: '2.5707rem',
    mdUp: '2.7849rem',
    lgUp: '2.9991rem'
  },
  h4: {
    mobile: '1.5625rem',
    smUp: '1.8219rem',
    mdUp: '2.0243rem',
    lgUp: '2.0243rem'
  },
  h5: {
    mobile: '1.25rem',
    smUp: '1.3118rem',
    mdUp: '1.4993rem',
    lgUp: '1.4993rem'
  },
  h6: {
    mobile: '1.125rem',
    smUp: '1.25rem',
    mdUp: '1.30rem',
    lgUp: '1.35rem'
  },
  subtitle1: {
    mobile: '1rem',
    smUp: '1rem',
    mdUp: '1rem',
    lgUp: '1rem'
  },
  subtitle2: {
    mobile: '0.875rem',
    smUp: '0.875rem',
    mdUp: '0.875rem',
    lgUp: '0.875rem'
  },
  body1: {
    mobile: '1rem',
    smUp: '1rem',
    mdUp: '1rem',
    lgUp: '1rem'
  },
  body2: {
    mobile: '0.875rem',
    smUp: '0.875rem',
    mdUp: '0.875rem',
    lgUp: '0.875rem'
  },
  button: {
    mobile: '0.875rem',
    smUp: '0.875rem',
    mdUp: '0.875rem',
    lgUp: '0.875rem'
  },
  caption: {
    mobile: '0.75rem',
    smUp: '0.75rem',
    mdUp: '0.75rem',
    lgUp: '0.75rem'
  },
  overline: {
    mobile: '0.75rem',
    smUp: '0.75rem',
    mdUp: '0.75rem',
    lgUp: '0.75rem'
  }
};

const lineHeight = {
  h1: 1.167,
  h2: 1.2,
  h3: 1.167,
  h4: 1.235,
  h5: 1.334,
  h6: 1.6,
  subtitle1: 1.75,
  subtitle2: 1.57,
  body1: 1.5,
  body2: 1.43,
  button: 1.75,
  caption: 1.66,
  overline: 2.66
};

const fontWeight = {
  h1: 300,
  h2: 300,
  h3: 300,
  h4: 300,
  h5: 300,
  h6: 300,
  subtitle1: 300,
  subtitle2: 400,
  body1: 300,
  body2: 300,
  button: 400,
  caption: 300,
  overline: 300
};

const H1 = styled.h1`
  font-size: ${responsiveSizes.h1.mobile};
  font-weight: ${fontWeight.h1};
  line-height: ${lineHeight.h1};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h1.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h1.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h1.lgUp};
  }
`;
const H2 = styled.h2`
  font-size: ${responsiveSizes.h2.mobile};
  font-weight: ${fontWeight.h2};
  line-height: ${lineHeight.h2};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h2.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h2.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h2.lgUp};
  }
`;
const H3 = styled.h3`
  font-size: ${responsiveSizes.h3.mobile};
  font-weight: ${fontWeight.h3};
  line-height: ${lineHeight.h3};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h3.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h3.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h3.lgUp};
  }
`;
const H4 = styled.h5`
  font-size: ${responsiveSizes.h4.mobile};
  font-weight: ${fontWeight.h4};
  line-height: ${lineHeight.h4};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h4.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h4.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h4.lgUp};
  }
`;
const H5 = styled.h6`
  font-size: ${responsiveSizes.h5.mobile};
  font-weight: ${fontWeight.h5};
  line-height: ${lineHeight.h5};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h5.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h5.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h5.lgUp};
  }
`;
const H6 = styled.h6`
  font-size: ${responsiveSizes.h6.mobile};
  font-weight: ${fontWeight.h6};
  line-height: ${lineHeight.h6};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.h6.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.h6.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.h6.lgUp};
  }
`;
const Subtitle1 = styled.div`
  font-size: ${responsiveSizes.subtitle1.mobile};
  font-weight: ${fontWeight.subtitle1};
  line-height: ${lineHeight.subtitle1};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.subtitle1.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.subtitle1.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.subtitle1.lgUp};
  }
`;
const Subtitle2 = styled.div`
  font-size: ${responsiveSizes.subtitle2.mobile};
  font-weight: ${fontWeight.subtitle2};
  line-height: ${lineHeight.subtitle2};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.subtitle2.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.subtitle2.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.subtitle2.lgUp};
  }
`;
const Body1 = styled.p`
  font-size: ${responsiveSizes.body1.mobile};
  font-weight: ${fontWeight.body1};
  line-height: ${lineHeight.body1};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.body1.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.body1.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.body1.lgUp};
  }
`;
const Body2 = styled.p`
  font-size: ${responsiveSizes.body2.mobile};
  font-weight: ${fontWeight.body2};
  line-height: ${lineHeight.body2};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.body2.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.body2.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.body2.lgUp};
  }
`;
const Button = styled.span`
  text-transform: uppercase;
  font-size: ${responsiveSizes.button.mobile};
  font-weight: ${fontWeight.button};
  line-height: ${lineHeight.button};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.button.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.button.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.button.lgUp};
  }
`;
const Caption = styled.span`
  font-size: ${responsiveSizes.caption.mobile};
  font-weight: ${fontWeight.caption};
  line-height: ${lineHeight.caption};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.caption.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.caption.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.caption.lgUp};
  }
`;
const Overline = styled.span`
  text-transform: uppercase;
  font-size: ${responsiveSizes.overline.mobile};
  font-weight: ${fontWeight.overline};
  line-height: ${lineHeight.overline};
  margin: 0px;
  text-align: var(--align);
  @media ${QUERIES.smUp} {
    font-size: ${responsiveSizes.overline.smUp};
  }
  @media ${QUERIES.mdUp} {
    font-size: ${responsiveSizes.overline.mdUp};
  }
  @media ${QUERIES.lgUp} {
    font-size: ${responsiveSizes.overline.lgUp};
  }
`;
