/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
const locales = ['en', 'ru', 'de', 'it'];

const getDate = new Date().toISOString();
const AWESOME_DOMAIN = 'https://calcscout.com';
const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

const generateSitemap = async () => {
  const pages = await globby([
    // include
    'pages/**/*.tsx',
    'pages/*.tsx',
    // exclude
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/pro'
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        const mainString = `
          <url>
            <loc>${AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
        const localesStrings = locales
          .map((lang) => {
            return `
          <url>
            <loc>${AWESOME_DOMAIN}/${lang}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
          })
          .join('');
        const resultString = mainString + localesStrings;
        return resultString;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);
  fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf8');
};

export default generateSitemap;
