import type { NextConfig } from 'next';
const config:NextConfig={
 poweredByHeader:false,
 async headers(){return [{source:'/(.*)',headers:[
 {key:'X-Content-Type-Options',value:'nosniff'},
 {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
 ...(process.env.VERCEL_ENV==='production'?[]:[{key:'X-Robots-Tag',value:'noindex, nofollow'}])
 ]}];}
};
export default config;
