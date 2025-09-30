"use client"

import React, { useCallback, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type WasteType = "dry" | "wet" | "hazardous"

type WasteItem = {
  id: string
  label: string
  type: WasteType
  color: string
}

const initialItems = (): WasteItem[] => [
  { id: "1", label: "Plastic Bottle", type: "dry", color: "bg-blue-400" },
  { id: "2", label: "Apple Core", type: "wet", color: "bg-green-400" },
  { id: "3", label: "Battery", type: "hazardous", color: "bg-yellow-500" },
  { id: "4", label: "Newspaper", type: "dry", color: "bg-slate-400" },
  { id: "5", label: "Leftover Food", type: "wet", color: "bg-emerald-400" },
]

export default function WasteGamePage() {
  const [items, setItems] = useState<WasteItem[]>(() => initialItems())
  const [score, setScore] = useState<number>(0)
  // User will provide bin images in /public; no runtime fallback needed

  const bins = useMemo(
    () => [
      { id: "dry", title: "Dry (Recyclables)", color: "bg-slate-700" },
      { id: "wet", title: "Wet (Organic)", color: "bg-amber-700" },
      { id: "hazardous", title: "Hazardous", color: "bg-red-700" },
    ],
    []
  )

  const onDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData("text/plain", itemId)
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent, binType: WasteType) => {
      e.preventDefault()
      const id = e.dataTransfer.getData("text/plain")
      if (!id) return
      setItems((prev) => {
        const item = prev.find((p) => p.id === id)
        if (!item) return prev
        // scoring: +10 correct, -5 wrong
        setScore((s) => s + (item.type === binType ? 10 : -5))
        return prev.filter((p) => p.id !== id)
      })
    },
    []
  )

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const addRandom = useCallback(() => {
    const pool: WasteItem[] = [
      { id: Date.now().toString(), label: "Glass Jar", type: "dry", color: "bg-cyan-300" },
      { id: Date.now().toString() + "a", label: "Orange Peel", type: "wet", color: "bg-lime-300" },
      { id: Date.now().toString() + "b", label: "Used Syringe", type: "hazardous", color: "bg-pink-500" },
    ]
    const pick = pool[Math.floor(Math.random() * pool.length)]
    setItems((p) => [...p, pick])
  }, [])

  const reset = useCallback(() => {
    setItems(initialItems())
    setScore(0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Waste Sorter - Prototype</h1>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-slate-300">Score</div>
                <div className="text-2xl font-bold">{score}</div>
              </div>
              <Button onClick={addRandom} className="bg-slate-700">Add Item</Button>
              <Button onClick={reset} className="bg-rose-600">Reset</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-8 max-w-4xl w-full">
              {bins.map((bin) => (
                <div
                  key={bin.id}
                  onDrop={(e) => onDrop(e as React.DragEvent, bin.id as WasteType)}
                  onDragOver={onDragOver}
                  className="p-4 rounded-lg flex flex-col items-center justify-between min-h-[220px] w-full"
                >
                  <div className="w-full flex justify-center">
                    <img src={`/${bin.id}-bin.png`} alt={`${bin.title} bin`} className="w-32 h-28 object-contain" />
                  </div>

                  <div className="w-full text-center mt-4">
                    <h2 className="font-semibold">{bin.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Available Waste</h3>
            <div className="flex flex-wrap gap-3">
              {items.length === 0 && <div className="text-slate-300">No items left — add more or reset.</div>}
              {items.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, item.id)}
                  className={`cursor-grab select-none px-3 py-2 rounded shadow ${item.color} text-slate-900`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
