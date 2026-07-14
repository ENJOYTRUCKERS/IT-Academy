import Link from 'next/link'
import Image from 'next/image'

const SUBJECTS = [
  {
    id: 'language',
    title: '言語学習',
    description: '日本語、英語、中国語、韓国語などの語学学習',
    icon: '🗣️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'certification',
    title: '資格試験勉強',
    description: '基本情報技術者試験やITパスポートなど、ITに関連する資格試験対策',
    icon: '🎓',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'computer-basics',
    title: 'コンピュータ基礎',
    description: '機器名称やコンピュータの仕組み（拡張子など）、マウスやキーボードの操作方法',
    icon: '💻',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'computer-advanced',
    title: 'コンピュータ応用',
    description: 'ソフトウェアのインストール、開発環境構築 (Visual Studio Codeなど)',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'programming-basics',
    title: 'プログラミング基礎',
    description: 'Java, SQL, Pythonなどの言語学習や、GitHub Copilotを活用したAIプログラミング',
    icon: '🧑‍💻',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'programming-advanced',
    title: 'プログラミング応用',
    description: 'APIやテレメトリを使用した連携ソフトウェア制作、Blenderモデリング',
    icon: '🚀',
    color: 'from-red-500 to-[var(--color-accent)]'
  },
  {
    id: 'driving-academy',
    title: 'ドライビングアカデミー',
    description: 'ETS2/ATS/TruckersMPのコンテンツや、実際の日本の運転免許に関する知識',
    icon: '🚚',
    color: 'from-slate-600 to-gray-800'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-[#0a0a0a] -z-10" />
        <div className="absolute inset-0 opacity-30 dark:opacity-20 -z-10" style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <Image src="/logo.png" alt="Logo" width={120} height={120} className="mb-8 drop-shadow-2xl rounded-2xl" />
        
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight mb-6">
          IT Academy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-pink-500">
            Powered by ENJOYTRUCKERS
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-10">
          小学生から大人まで、初心者も上級者も。<br/>
          みんなが楽しくITとプログラミングを学べる学習プラットフォーム。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/courses" className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-bold text-lg hover:shadow-[0_8px_30px_rgb(255,17,85,0.3)] transition-all hover:-translate-y-1">
            学習をはじめる
          </Link>
          <Link href="/ide" className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg border border-gray-200 dark:border-gray-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all hover:-translate-y-1">
            Web IDEを開く
          </Link>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">学べるコース</h2>
          <p className="text-gray-600 dark:text-gray-400">幅広いジャンルのコースを用意しています。好きなものから始めましょう！</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SUBJECTS.map((subject) => (
            <Link href={`/courses/${subject.id}`} key={subject.id} className="group flex flex-col h-full bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all hover:-translate-y-1 overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${subject.color} opacity-80`} />
              <div className="text-4xl mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {subject.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{subject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                {subject.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
