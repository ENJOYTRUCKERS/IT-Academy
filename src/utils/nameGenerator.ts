const ANIMALS = [
  'イヌ', 'ネコ', 'ウサギ', 'クマ', 'ペンギン', 
  'イルカ', 'ライオン', 'パンダ', 'コアラ', 'キツネ',
  'タヌキ', 'キリン', 'ゾウ', 'リス', 'ハリネズミ'
];

const ADJECTIVES = [
  '元気な', 'かしこい', 'かわいい', 'はやい', 'つよい',
  'すごい', 'やさしい', 'たのしい', 'きらきら', 'わくわく'
];

export function generateAnonymousName(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const num = Math.floor(Math.random() * 9000) + 1000; // 1000 ~ 9999
  
  return `${adj}${animal}${num}`;
}
