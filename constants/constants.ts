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
  iSEAndDown: `(max-width: ${BREAKPOINTS.iSE / 16}rem)`,
  i8AndDown: `(max-width: ${BREAKPOINTS.i8 / 16}rem)`,
  i8PlusAndDown: `(max-width: ${BREAKPOINTS.i8Plus / 16}rem)`,
  smAndDown: `(max-width: ${BREAKPOINTS.sm / 16}rem)`,
  mdAndDown: `(max-width: ${BREAKPOINTS.md / 16}rem)`,
  lgAndDown: `(max-width: ${BREAKPOINTS.lg / 16}rem)`,
  xlAndDown: `(max-width: ${BREAKPOINTS.xl / 16}rem)`,
  iSEUp: `(min-width: ${BREAKPOINTS.iSE / 16}rem)`,
  i8AndUp: `(min-width: ${BREAKPOINTS.i8 / 16}rem)`,
  i8PlusUp: `(min-width: ${BREAKPOINTS.i8Plus / 16}rem)`,
  smUp: `(min-width: ${BREAKPOINTS.sm / 16}rem)`,
  mdUp: `(min-width: ${BREAKPOINTS.md / 16}rem)`,
  lgUp: `(min-width: ${BREAKPOINTS.lg / 16}rem)`,
  xlUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`
};
