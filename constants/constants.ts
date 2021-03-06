export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)'
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)'
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800
};

export const BREAKPOINTS = {
  xs: 0,
  iSE: 325,
  i8: 380,
  i8Plus: 420,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1500
};

export const QUERIES = {
  iSEDown: `(max-width: ${BREAKPOINTS.iSE / 16}rem)`,
  i8Down: `(max-width: ${BREAKPOINTS.i8 / 16}rem)`,
  i8PlusDown: `(max-width: ${BREAKPOINTS.i8Plus / 16}rem)`,
  smDown: `(max-width: ${BREAKPOINTS.sm / 16}rem)`,
  mdDown: `(max-width: ${BREAKPOINTS.md / 16}rem)`,
  lgDown: `(max-width: ${BREAKPOINTS.lg / 16}rem)`,
  xlDown: `(max-width: ${BREAKPOINTS.xl / 16}rem)`,
  iSEUp: `(min-width: ${BREAKPOINTS.iSE / 16}rem)`,
  i8Up: `(min-width: ${BREAKPOINTS.i8 / 16}rem)`,
  i8PlusUp: `(min-width: ${BREAKPOINTS.i8Plus / 16}rem)`,
  smUp: `(min-width: ${BREAKPOINTS.sm / 16}rem)`,
  mdUp: `(min-width: ${BREAKPOINTS.md / 16}rem)`,
  lgUp: `(min-width: ${BREAKPOINTS.lg / 16}rem)`,
  xlUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`
};

export const getApeUri =
  'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/apecessories-rgyid/service/bored-apes/incoming_webhook/get-ape?ape_id=';
