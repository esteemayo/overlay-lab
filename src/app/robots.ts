export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://overlaylab.vercel.com/sitemap.xml',
  };
}
