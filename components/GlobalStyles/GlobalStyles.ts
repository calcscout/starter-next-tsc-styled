import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
}

/* For images to not be able to exceed their container */
img {
    max-width: 100%;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}

/* GLOBAL STYLES */
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/montserrat-v18-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/montserrat-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/montserrat-v18-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/montserrat-v18-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/montserrat-v18-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

:root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
  --color-white: hsl(0 0% 100%);
  --color-black: hsl(0 0% 0%);
  --color-bg-dark: hsl(233 13% 13%);
  --color-bg-light: hsl(0 0% 100%);
  --color-blue-100: #e8f2ff;
  --color-blue-500: #4b96ff;
  --color-blue-main: #0069ed;
  --color-blue-main-hover: #0053ba;
  --color-blueGray-500: #a9adc1;
  --color-gray-100: #f7f7f7;
  --color-gray-200: #e6e9ee;
  --color-gray-300: #dde0e4;
  --color-gray-400: #818890;
  --color-gray-500: #535661;
  --color-gray-600: #4b4c53;
  --color-gray-700: #3a3d4a;
  --color-gray-800: #2e3039;
  --color-gray-900: #1f2028;
  --color-green-100: #e7f9ed;
  --color-green-500: #30c85e;
  --color-green-600: #68d94a;
  --color-red-500: #ff4545;
  --color-yellow-500: #ffd644;
  --main-container-padding: 16px;
  --color-axie-gray-1: hsl(226 13% 67%);
  --color-axie-gray-2: hsl(226 11% 47%);
  --color-axie-gray-3: hsl(226 16% 27%);
  --color-axie-gray-4: hsl(229 18% 19%);
  --color-axie-gray-5: hsl(229 19% 17%); //background
  --color-axie-gray-6: hsl(228 23% 9%);
  --color-axie-primary-1: hsl(215 87% 79%);
  --color-axie-primary-2: hsl(215 87% 70%);
  --color-axie-primary-3: hsl(215 88% 57%);
  --color-axie-primary-4: hsl(215 98% 50%);
  --color-axie-primary-5: hsl(215 100% 36%);
  --color-axie-primary-6: hsl(218 48% 21%);
  --color-axie-success-1: #b8ecd5;
  --color-axie-success-2: #8ae0ba;
  --color-axie-success-3: #58d49d;
  --color-axie-success-4: #10c274;
  --color-axie-success-5: #048a4f;
  --color-axie-warning-1: #fce2ac;
  --color-axie-warning-2: #fad076;
  --color-axie-warning-3: #f8bc3b;
  --color-axie-warning-4: #f7ac0a;
  --color-axie-warning-5: #bd850f;
  --color-axie-danger-1: #feb4b6;
  --color-axie-danger-2: #f28286;
  --color-axie-danger-3: #fe4c52;
  --color-axie-danger-4: #fe383f;
  --color-axie-danger-5: #be3637;

}

.no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dark-mode {
  --bg-primary: var(--color-axie-gray-5);
  --bg-secondary: var(--color-gray-800);
  --text-primary: var(--color-white);
  --text-secondary: var(--color-blueGray-500);
}


.light-mode {
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-100);
  --text-primary: var(--color-black);
  --text-secondary: var(--color-gray-500);
}

html, body, #root, #__next {
  height: 100%;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

:focus:not(:focus-visible) {
  outline: none;
}

body {
  overflow-x: hidden;
}

#__next {
  display: flex;
  flex-direction: column;
  min-height: '100%';
  align-items: center;
}

* {
  -webkit-tap-highlight-color: transparent;
}

.light-mode input:-webkit-autofill,
.light-mode input:-webkit-autofill:hover,
.light-mode input:-webkit-autofill:focus,
.light-mode input:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  box-shadow: 0 0 0 999px var(--color-gray-100) inset !important;
  background-clip: content-box !important;
}

.dark-mode input:-webkit-autofill,
.dark-mode input:-webkit-autofill:hover,
.dark-mode input:-webkit-autofill:focus,
.dark-mode input:-webkit-autofill:active {
  -webkit-text-fill-color: white !important;
  box-shadow: 0 0 0 999px var(--color-gray-800) inset !important;
  background-clip: content-box !important;
}

input:-webkit-autofill::first-line {
  font-size: 1.125rem;
  font-weight: 500;
  font-family: ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

[hidden] {
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  :focus {
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
  }
}

.underlined {
  position: relative;
  text-decoration: none !important;
  white-space: nowrap;
}

.underlined:focus {
  outline: none;
  text-decoration: none !important;
}

.underlined:after {
  content: '';
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.25s ease;
  transform-origin: left;
  left: 0;
  bottom: -4px;
  width: 100%;
  display: block;
  position: absolute;
}

.underlined:hover:after,
.underlined:focus:after,
.active.underlined:after {
  background-color: currentColor;
  transform: scaleX(1);
}

`;

export default GlobalStyles;
