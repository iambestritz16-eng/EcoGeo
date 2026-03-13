"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react"

type Question = {
  id: number
  category: string
  text: string
  options: string[]
  correctIndex: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    category: "Forest Ecosystems",
    text: "Which layer of the rainforest receives the most sunlight?",
    options: ["Forest floor", "Understory", "Canopy", "Emergent layer"],
    correctIndex: 3,
    explanation:
      "The emergent layer is the topmost layer, where the tallest trees poke above the main canopy and receive maximum direct sunlight.",
  },
  {
    id: 2,
    category: "Water Systems",
    text: "What percentage of Earth's water is freshwater accessible for human use?",
    options: ["3%", "1%", "0.3%", "10%"],
    correctIndex: 2,
    explanation:
      "Only about 0.3% of Earth's freshwater is easily accessible—found in rivers, lakes, and groundwater. The rest is locked in glaciers or too deep underground.",
  },
  {
    id: 3,
    category: "Climate Change",
    text: "Which greenhouse gas has the highest global warming potential over 100 years?",
    options: ["Carbon dioxide (CO₂)", "Methane (CH₄)", "Nitrous oxide (N₂O)", "Sulfur hexafluoride (SF₆)"],
    correctIndex: 3,
    explanation:
      "Sulfur hexafluoride (SF₆) has a global warming potential ~23,500 times that of CO₂ over 100 years, making it the most potent greenhouse gas.",
  },
  {
    id: 4,
    category: "Waste Segregation",
    text: "Which of the following is classified as hazardous waste?",
    options: ["Banana peel", "Newspaper", "Used batteries", "Glass bottle"],
    correctIndex: 2,
    explanation:
      "Used batteries contain heavy metals such as lead, cadmium, and mercury, making them hazardous waste that requires special disposal.",
  },
  {
    id: 5,
    category: "Urban Sustainability",
    text: "What does the term 'urban heat island' refer to?",
    options: [
      "A tropical park inside a city",
      "The effect where cities are warmer than surrounding rural areas",
      "A government-run urban farming initiative",
      "Renewable energy hubs in metropolitan areas",
    ],
    correctIndex: 1,
    explanation:
      "Urban heat islands occur because cities replace natural land cover with buildings, roads, and other infrastructure that absorb and re-emit heat more than natural surfaces.",
  },
  {
    id: 6,
    category: "Conservation",
    text: "What is the IUCN Red List?",
    options: [
      "A list of banned pesticides",
      "A ranking of the world's most polluted rivers",
      "A global inventory of the conservation status of species",
      "An international treaty on deforestation",
    ],
    correctIndex: 2,
    explanation:
      "The IUCN Red List is the world's most comprehensive inventory of the global conservation status of biological species, assessing extinction risk.",
  },
  {
    id: 7,
    category: "Forest Ecosystems",
    text: "What is the primary role of decomposers in a forest ecosystem?",
    options: [
      "Produce energy through photosynthesis",
      "Break down dead organic matter and return nutrients to the soil",
      "Hunt and regulate herbivore populations",
      "Pollinate flowering plants",
    ],
    correctIndex: 1,
    explanation:
      "Decomposers such as fungi and bacteria break down dead organisms and recycle nutrients back into the soil, completing the nutrient cycle.",
  },
  {
    id: 8,
    category: "Water Systems",
    text: "Which process describes water moving from the soil into the atmosphere through plant leaves?",
    options: ["Precipitation", "Condensation", "Transpiration", "Percolation"],
    correctIndex: 2,
    explanation:
      "Transpiration is the process by which plants absorb water from the soil and release it as water vapor through their leaves.",
  },
]

type AnswerState = "unanswered" | "correct" | "incorrect"

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered")
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<{ correct: boolean }[]>([])

  const question = questions[current]
  const total = questions.length

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (answerState !== "unanswered") return
      setSelected(optionIndex)
      const isCorrect = optionIndex === question.correctIndex
      setAnswerState(isCorrect ? "correct" : "incorrect")
      if (isCorrect) setScore((s) => s + 10)
      setAnswers((prev) => [...prev, { correct: isCorrect }])
    },
    [answerState, question.correctIndex],
  )

  const handleNext = useCallback(() => {
    if (current + 1 >= total) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswerState("unanswered")
    }
  }, [current, total])

  const handleRestart = useCallback(() => {
    setCurrent(0)
    setSelected(null)
    setAnswerState("unanswered")
    setScore(0)
    setFinished(false)
    setAnswers([])
  }, [])

  const percentage = Math.round((score / (total * 10)) * 100)

  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white flex items-center justify-center px-4">
        <Card className="bg-slate-800/80 border-slate-700 max-w-lg w-full">
          <CardHeader className="text-center pb-2">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-white text-2xl">Challenge Complete!</CardTitle>
            <CardDescription className="text-slate-400">Here&apos;s how you did</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-1">{score}</div>
              <div className="text-slate-400">out of {total * 10} points</div>
              <div className="mt-3">
                <Badge
                  className={
                    percentage >= 80
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : percentage >= 50
                        ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                  }
                >
                  {percentage >= 80 ? "🏆 Excellent!" : percentage >= 50 ? "👍 Good effort" : "📚 Keep practising"}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">{answers.filter((a) => a.correct).length}</div>
                <div className="text-xs text-slate-400">Correct</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-red-400">{answers.filter((a) => !a.correct).length}</div>
                <div className="text-xs text-slate-400">Incorrect</div>
              </div>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-3 rounded-full transition-all"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleRestart}
                variant="outline"
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Link href="/leaderboard" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white">
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                ← Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Back + progress */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>
                Question {current + 1} of {total}
              </span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question card */}
        <Card className="bg-slate-800/80 border-slate-700">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
              {question.category}
            </Badge>
            <CardTitle className="text-white text-xl leading-snug">{question.text}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option, idx) => {
              let optionClass =
                "w-full text-left px-4 py-3 rounded-lg border transition-all text-sm font-medium "
              if (answerState === "unanswered") {
                optionClass +=
                  "border-slate-600 bg-slate-700/50 text-slate-200 hover:border-emerald-500 hover:bg-slate-700 cursor-pointer"
              } else if (idx === question.correctIndex) {
                optionClass += "border-emerald-500 bg-emerald-500/20 text-emerald-300"
              } else if (idx === selected && answerState === "incorrect") {
                optionClass += "border-red-500 bg-red-500/20 text-red-300"
              } else {
                optionClass += "border-slate-600 bg-slate-700/30 text-slate-400 cursor-default"
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelect(idx)}
                  disabled={answerState !== "unanswered"}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                    {answerState !== "unanswered" && idx === question.correctIndex && (
                      <CheckCircle className="w-4 h-4 ml-auto text-emerald-400 shrink-0" />
                    )}
                    {answerState !== "unanswered" && idx === selected && answerState === "incorrect" && (
                      <XCircle className="w-4 h-4 ml-auto text-red-400 shrink-0" />
                    )}
                  </span>
                </button>
              )
            })}

            {/* Explanation */}
            {answerState !== "unanswered" && (
              <div className="mt-4 p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-emerald-400">Explanation: </span>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next button */}
            <div className="pt-2">
              <Button
                onClick={handleNext}
                disabled={answerState === "unanswered"}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white disabled:opacity-40"
              >
                {current + 1 >= total ? "See Results" : "Next Question"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
