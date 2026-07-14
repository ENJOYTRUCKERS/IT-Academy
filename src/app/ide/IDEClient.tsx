'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'
import dynamic from 'next/dynamic'

// Blockly uses window object, so we must disable SSR
const BlocklyEditor = dynamic(() => import('@/components/BlocklyEditor'), {
  ssr: false,
  loading: () => <div className="p-4 text-gray-500">Blockly を読み込み中...</div>
})

export default function IDEClient() {
  const [mode, setMode] = useState<'BLOCK' | 'CODE'>('CODE')
  const [code, setCode] = useState<string>('console.log("Hello, IT Academy!");\n')

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Web IDE</h1>
        <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setMode('BLOCK')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'BLOCK' ? 'bg-white dark:bg-gray-600 shadow' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            ブロックモード
          </button>
          <button
            onClick={() => setMode('CODE')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'CODE' ? 'bg-white dark:bg-gray-600 shadow' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            コードモード
          </button>
        </div>
      </div>

      <div className="flex-grow rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative">
        {mode === 'CODE' ? (
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              padding: { top: 16 },
            }}
          />
        ) : (
          <div className="w-full h-full bg-white dark:bg-[#1e1e1e]">
            <BlocklyEditor />
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button 
          className="px-6 py-2 bg-[var(--color-accent)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          onClick={() => alert('実行機能は準備中です！')}
        >
          実行する
        </button>
      </div>
    </div>
  )
}
