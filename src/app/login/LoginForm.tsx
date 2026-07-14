'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Wand2, ArrowRight } from 'lucide-react'

type Step = 'AGE_VERIFICATION' | 'GITHUB_LOGIN' | 'SECRET_SPELL'

export default function LoginForm() {
  const [step, setStep] = useState<Step>('AGE_VERIFICATION')
  const [ageGroup, setAgeGroup] = useState<'under13' | '13to17' | '18plus' | null>(null)
  const [spell, setSpell] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleAgeSelect = (selectedAge: 'under13' | '13to17' | '18plus') => {
    setAgeGroup(selectedAge)
    if (selectedAge === 'under13') {
      setStep('SECRET_SPELL')
    } else {
      setStep('GITHUB_LOGIN')
    }
  }

  const handleGithubLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const handleSecretSpellLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!spell) return
    setLoading(true)
    
    // In a real app, this spell acts as a password for a dummy email
    // e.g., child_<spell_hash>@truckers.jp
    // For now, we simulate anonymous sign in (requires anon signin enabled in Supabase)
    const dummyEmail = `kid_${spell}@truckers.jp`
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: dummyEmail,
      password: spell,
    })

    if (error) {
      // If user doesn't exist, sign them up
      const { error: signUpError } = await supabase.auth.signUp({
        email: dummyEmail,
        password: spell,
        options: {
          data: {
            is_under_13: true,
          }
        }
      })
      if (signUpError) {
        alert('じゅもんがまちがっているか、とうろくに失敗しました。')
      } else {
        window.location.href = '/'
      }
    } else {
      window.location.href = '/'
    }
    setLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
      
      {step === 'AGE_VERIFICATION' && (
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold">ねんれいを教えてね！</h2>
          <p className="text-gray-700 dark:text-gray-300">
            あそぶためには、ねんれいかくにんがひつようです。
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => handleAgeSelect('under13')}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
            >
              12さい以下
            </button>
            <button
              onClick={() => handleAgeSelect('13to17')}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
            >
              13さい 〜 17さい
            </button>
            <button
              onClick={() => handleAgeSelect('18plus')}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
            >
              18さい以上
            </button>
          </div>
        </div>
      )}

      {step === 'GITHUB_LOGIN' && (
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold">ログイン</h2>
          <p className="text-gray-700 dark:text-gray-300">
            GitHubアカウントでログインしてください。
            {ageGroup === '13to17' && (
              <span className="block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                ※18歳未満のため、掲示板への書き込みは制限されます。
              </span>
            )}
          </p>
          <button
            onClick={handleGithubLogin}
            disabled={loading}
            className="w-full p-4 mt-4 flex items-center justify-center gap-3 bg-[var(--color-accent)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHubでログイン
          </button>
          <button 
            onClick={() => setStep('AGE_VERIFICATION')}
            className="text-sm text-gray-500 hover:underline mt-4"
          >
            戻る
          </button>
        </div>
      )}

      {step === 'SECRET_SPELL' && (
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Wand2 className="w-6 h-6 text-[var(--color-accent)]" />
            ひみつのじゅもん
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            GitHubログインはつかえません。<br/>
            「ひみつのじゅもん」をつかって、データをほぞんします。
          </p>
          <form onSubmit={handleSecretSpellLogin} className="space-y-4">
            <input
              type="text"
              required
              placeholder="じゅもんをいれてね（例: りんごごりら）"
              value={spell}
              onChange={(e) => setSpell(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              disabled={loading || !spell}
              className="w-full p-4 flex items-center justify-center gap-3 bg-[var(--color-accent)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 font-bold"
            >
              はじめる <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <button 
            onClick={() => setStep('AGE_VERIFICATION')}
            className="text-sm text-gray-500 hover:underline mt-4"
          >
            もどる
          </button>
        </div>
      )}

    </div>
  )
}
