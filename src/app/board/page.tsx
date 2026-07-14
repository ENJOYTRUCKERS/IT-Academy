import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: '質問掲示板 - IT Academy',
}

export default async function BoardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // 13歳未満は投稿不可のチェック用（メタデータから取得など）
  // 実際にはDB側（RLS）で保護することが推奨されます。
  const isUnder18 = user?.user_metadata?.is_under_13 || false;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 w-full min-h-[calc(100vh-4rem)]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">質問掲示板</h1>
        {user && !isUnder18 && (
          <button className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
            質問を投稿する
          </button>
        )}
      </div>

      {!user && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 p-4 rounded-xl mb-8 border border-yellow-200 dark:border-yellow-800/50">
          質問を投稿するにはログインが必要です。
        </div>
      )}

      {user && isUnder18 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 p-4 rounded-xl mb-8 border border-yellow-200 dark:border-yellow-800/50">
          年齢制限により、掲示板への書き込みはできません（閲覧のみ可能です）。
        </div>
      )}

      <div className="bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 shadow-sm">
        <div className="space-y-6">
          <p className="text-gray-500 text-center py-10">まだ質問が投稿されていません。</p>
        </div>
      </div>
    </div>
  )
}
