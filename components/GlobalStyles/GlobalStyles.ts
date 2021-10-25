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


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
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
}

.dark-mode {
  --bg-primary: var(--color-bg-dark);
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
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
