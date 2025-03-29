/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bloxfruitsitems.com/', // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 5000, // Adjust if needed
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/public/sitemap.xml',
      },
    ];
  },
};
