const title = 'FFXIV Stone, Sky, Sea Calculator'
const description =
  'Final Fantasy XIV Shadowbringers DPS Calculator for Stone, Sky, Sea. Updated for Patch 5.3 (17/08/2020)'
const url = 'https://ffxiv.azizarar.com/'
const images = [
  {
    url: 'https://ffxiv.azizarar.com/images/sss-image-01.jpg',
    width: 800,
    height: 600,
    alt: 'SSS Image',
  },
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
  },
  twitter: {
    handle: '@bodmassad',
    site: '@bodmassad',
    cardType: 'summary_large_image',
  },
}
