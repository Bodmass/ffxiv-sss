const title = 'FFXIV Stone, Sky, Sea Calculator'
const description =
  'Final Fantasy XIV Endwalker DPS Calculator for Stone, Sky, Sea. Updated for Patch 7.05 (30/07/2024)'
const url = 'https://ffxiv.azizarar.com/'
const images = [
  {
    url: 'https://ffxiv.azizarar.com/images/sss-image-01.jpg',
    width: 800,
    height: 600,
    alt: 'SSS Image',
  },
]
const tags = [
  'FFXIV, Final Fantasy, Final Fantasy XIV, XIV, Final Fantasy 14, 14, Dawntrail, Endwalker, Shadowbringers, Stone Sky Sea, Stone, Sky, Sea, SSS, DPS, DPS Calculator, Calculator,Trial of Spire, ',
]

module.exports = {
  title,
  description,
  canonical: url,
  openGraph: {
    title,
    description,
    url,
    images,
    site_name: title,
    type: 'website',
    locale: 'en_GB',
    tags,
  },
  twitter: {
    handle: '@bodmassad',
    site: '@bodmassad',
    cardType: 'summary_large_image',
  },
}
