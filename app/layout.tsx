import type { Metadata } from 'next';
import './globals.css';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
const production=process.env.VERCEL_ENV==='production' && Boolean(siteUrl);
const title='Creonaile Ramos | Psicóloga en Pozuelo de Alarcón y online';
const description='Psicología sanitaria en Pozuelo de Alarcón y online. Trauma, EMDR, mayores, memoria y acompañamiento familiar. Primera toma de contacto gratuita.';
export const metadata:Metadata={
 metadataBase:new URL(siteUrl || 'https://web-creonaile.vercel.app'),
 title,description,applicationName:'Creonaile Ramos',
 robots:{index:production,follow:production},
 ...(siteUrl?{alternates:{canonical:siteUrl}}:{}),
 openGraph:{title,description,locale:'es_ES',type:'website',siteName:'Creonaile Ramos',images:[{url:'/images/creonaile.webp',alt:'Creonaile Ramos'}]},
 twitter:{card:'summary_large_image',title,description,images:['/images/creonaile.webp']},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 const data={'@context':'https://schema.org','@type':'Person',name:'Creonaile Ramos Noesi',jobTitle:'Psicóloga General Sanitaria',telephone:'+34658160726',sameAs:['https://www.instagram.com/creonaileramos/'],workLocation:{'@type':'Place',name:'Pozuelo de Alarcón'},...(siteUrl?{url:siteUrl,image:new URL('/images/creonaile.webp',siteUrl).href}:{})};
 return <html lang="es"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/></body></html>;
}
