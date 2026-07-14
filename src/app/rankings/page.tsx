export const metadata = {
  title: 'ランキング - IT Academy',
}

export default function RankingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 w-full min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-bold mb-8">ランキング</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏆 科目達成度ランキング
          </h2>
          <div className="space-y-4">
            <p className="text-gray-500">まだデータがありません</p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            ⌨️ タイピングスコアランキング
          </h2>
          <div className="space-y-4">
            <p className="text-gray-500">まだデータがありません</p>
          </div>
        </div>
      </div>
    </div>
  )
}
