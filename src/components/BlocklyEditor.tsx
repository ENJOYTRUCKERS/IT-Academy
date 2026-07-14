'use client'

import React, { useEffect, useRef } from 'react'
import * as Blockly from 'blockly/core'
import 'blockly/blocks'
import 'blockly/javascript'
// Default English language file; you'd typically import JP
import * as Ja from 'blockly/msg/ja'

Blockly.setLocale(Ja as any)

const INITIAL_TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '論理',
      colour: '%{BKY_LOGIC_HUE}',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_boolean' },
      ],
    },
    {
      kind: 'category',
      name: 'ループ',
      colour: '%{BKY_LOOPS_HUE}',
      contents: [
        { kind: 'block', type: 'controls_repeat_ext' },
        { kind: 'block', type: 'controls_whileUntil' },
      ],
    },
    {
      kind: 'category',
      name: '数学',
      colour: '%{BKY_MATH_HUE}',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
      ],
    },
    {
      kind: 'category',
      name: 'テキスト',
      colour: '%{BKY_TEXTS_HUE}',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_print' },
      ],
    },
  ],
}

export default function BlocklyEditor() {
  const blocklyDiv = useRef<HTMLDivElement>(null)
  const workspace = useRef<Blockly.WorkspaceSvg | null>(null)

  useEffect(() => {
    if (blocklyDiv.current && !workspace.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: INITIAL_TOOLBOX,
      })
    }
  }, [])

  return (
    <div className="w-full h-full relative">
      <div ref={blocklyDiv} className="absolute inset-0" />
    </div>
  )
}
