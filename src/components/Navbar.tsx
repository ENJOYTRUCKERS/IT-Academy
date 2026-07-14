import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/server'

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="IT Academy Logo" width={32} height={32} className="rounded" />
              <span className="font-bold text-lg hidden sm:block">IT Academy</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/courses" className="text-sm font-medium hover:text-(--color-accent) transition-colors">学習する</Link>
              <Link href="/ide" className="text-sm font-medium hover:text-(--color-accent) transition-colors">Web IDE</Link>
              <Link href="/rankings" className="text-sm font-medium hover:text-(--color-accent) transition-colors">ランキング</Link>
              <Link href="/board" className="text-sm font-medium hover:text-(--color-accent) transition-colors">掲示板</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/profile" className="text-sm font-medium px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                マイページ
              </Link>
            ) : (
              <Link href="/login" className="text-sm font-medium px-4 py-2 rounded-xl bg-(--color-accent) text-white hover:opacity-90 transition-opacity">
                ログイン / 登録
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
