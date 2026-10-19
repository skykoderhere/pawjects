import { ProjectItem, ValuePrinciple } from './types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pawgram',
    name: 'PawGram',
    category: 'Android',
    description: 'Ad-free Instagram client experience with built-in iOS emoji rendering, AMOLED dark theme, and zero sponsored feed injections.',
    icon: 'fa-brands fa-instagram',
    isBrandIcon: true,
    link: 'https://github.com/pawjects/PawGram',
    linkText: 'View Source',
    tags: ['Android', 'Kotlin', 'Privacy', 'Ad-free'],
    features: [
      'Zero feed, reels, and stories advertisements or sponsored posts',
      'Native iOS emoji rendering across all captions and comments',
      'True AMOLED deep pitch-black dark theme for battery savings',
      'Media download utilities directly built into the action bar',
      'Ghost mode: view stories and direct messages without seen receipts'
    ],
    details: 'PawGram is a tailored Android client build addressing intrusive feed algorithms and bloated ad injection, prioritizing pure photography, connection, and lightweight resource usage.'
  },
  {
    id: 'pawdownloader',
    name: 'PawDownloader',
    category: 'Telegram Bot',
    description: 'Fast, queue-free media downloader robot for Telegram supporting multi-platform links with lossless quality extraction.',
    icon: 'fa-solid fa-download',
    link: 'https://t.me/PawDownloaderRobot',
    linkText: 'Open in Telegram',
    tags: ['Telegram Bot', 'Python', 'FFmpeg', 'Media'],
    features: [
      'Multi-platform URL parsing (Instagram, TikTok, Twitter/X, Pinterest, Reddit)',
      'Direct Telegram CDN caching for instant video and audio streaming',
      'Zero rate-limiting or paywall queues',
      'Lossless audio extraction with metadata preservation',
      'Automated thumbnail and caption generation'
    ],
    details: 'Engineered as an ultra-responsive Telegram bot utility that strips away link shorteners, redirect trackers, and popups to deliver direct high-bitrate media files in seconds.'
  },
  {
    id: 'pawtify',
    name: 'Pawtify',
    category: 'Web Concept',
    description: 'Music streaming player concept focused on smooth waveform playback scrubbing, clean queue management, and lightweight DOM.',
    icon: 'fa-solid fa-music',
    link: 'https://github.com/pawjects/Pawtify',
    linkText: 'View Source',
    tags: ['Web Player', 'TypeScript', 'Web Audio API', 'Canvas'],
    features: [
      'Interactive canvas audio frequency and waveform visualizer',
      'Drag-and-drop local audio file playback and tagging',
      'Lightweight memory footprint without background analytics',
      'Gapless playback buffer with customizable crossfade',
      'Keyboard media shortcuts and mediaSession API integration'
    ],
    details: 'A clean room audio interface design proving that modern streaming interfaces do not need bloated DOM trees or invasive tracking telemetry to deliver an expressive listening experience.'
  },
  {
    id: 'pawtube',
    name: 'PawTube',
    category: 'Web Player',
    description: 'Minimalist video playback portal designed for lightweight, distraction-free viewing without recommendation traps.',
    icon: 'fa-solid fa-play',
    link: 'https://github.com/pawjects/PawTube/',
    linkText: 'View Source',
    tags: ['Frontend', 'React', 'Video', 'Minimalist'],
    features: [
      'Distraction-free theater mode without algorithmically generated recommendations',
      'Customizable playback speed increments and frame-by-frame stepping',
      'Picture-in-picture with keyboard navigation',
      'Zero telemetry and zero cookie footprint',
      'Dark ambient glow background matched to video frames'
    ],
    details: 'PawTube strips down the modern video player experience to what matters most: crisp playback, intuitive hotkeys, and respectful attention design.'
  }
];

export const VALUES: ValuePrinciple[] = [
  {
    title: 'Lightweight',
    icon: 'fa-solid fa-bolt',
    description: 'Fast, efficient software that runs smoothly without unneeded background scripts or tracking bloat.'
  },
  {
    title: 'Open Source',
    icon: 'fa-solid fa-code-branch',
    description: 'Transparent code openly published on GitHub for community audit, customization, and PR contributions.'
  },
  {
    title: 'Practical',
    icon: 'fa-solid fa-compass',
    description: 'Focused software built to solve specific everyday needs without unnecessary complications.'
  }
];
