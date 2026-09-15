import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{
 const site=process.env.NEXT_PUBLIC_SITE_URL;
 if(process.env.VERCEL_ENV!=='production'||!site) return {rules:{userAgent:'*',disallow:'/'}};
 return {rules:{userAgent:'*',allow:'/'},sitemap:new URL('/sitemap.xml',site).href};
}
