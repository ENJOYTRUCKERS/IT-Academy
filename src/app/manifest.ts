import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IT Academy Powered by ENJOYTRUCKERS',
    short_name: 'IT Academy',
    description: '小学生から大人まで、幅広くIT関連について学習するWEBアプリ',
    start_url: '/',
    display: 'standalone',
    background_color: '#1c1c1c',
    theme_color: '#ff1155',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
