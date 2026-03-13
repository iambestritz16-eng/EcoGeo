import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Medal, Star, Crown } from "lucide-react"

type Player = {
  rank: number
  name: string
  score: number
  level: string
  badge: string
  country: string
  quizzesCompleted: number
}

const players: Player[] = [
  { rank: 1, name: "EcoChampion_A", score: 9850, level: "Master", badge: "🥇", country: "🇧🇷", quizzesCompleted: 98 },
  { rank: 2, name: "GreenGuardian", score: 9420, level: "Master", badge: "🥈", country: "🇩🇪", quizzesCompleted: 94 },
  { rank: 3, name: "PlanetProtector", score: 8990, level: "Expert", badge: "🥉", country: "🇮🇳", quizzesCompleted: 89 },
  { rank: 4, name: "WildlifeWatcher", score: 8650, level: "Expert", badge: "⭐", country: "🇺🇸", quizzesCompleted: 86 },
  { rank: 5, name: "ClimateHero", score: 8200, level: "Expert", badge: "⭐", country: "🇯🇵", quizzesCompleted: 82 },
  { rank: 6, name: "OceanDefender", score: 7840, level: "Advanced", badge: "⭐", country: "🇦🇺", quizzesCompleted: 78 },
  { rank: 7, name: "ForestKeeper", score: 7510, level: "Advanced", badge: "⭐", country: "🇧🇷", quizzesCompleted: 75 },
  { rank: 8, name: "BioDiversify", score: 7200, level: "Advanced", badge: "⭐", country: "🇨🇦", quizzesCompleted: 72 },
  { rank: 9, name: "RecycleKing", score: 6890, level: "Intermediate", badge: "⭐", country: "🇫🇷", quizzesCompleted: 68 },
  { rank: 10, name: "EcoWarrior99", score: 6540, level: "Intermediate", badge: "⭐", country: "🇬🇧", quizzesCompleted: 65 },
]

const levelColors: Record<string, string> = {
  Master: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Expert: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Advanced: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Intermediate: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Beginner: "bg-slate-500/20 text-slate-400 border-slate-500/30",
}

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />
  if (rank === 2) return <Medal className="w-5 h-5 text-slate-300" />
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
  return <span className="text-slate-400 font-bold text-sm w-5 text-center">{rank}</span>
}

export default function LeaderboardPage() {
  const topThree = players.slice(0, 3)
  const rest = players.slice(3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Back */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Global Leaderboard</h1>
          <p className="text-slate-400">Top environmental knowledge champions worldwide</p>
        </div>

        {/* Podium — top 3 */}
        <div className="grid grid-cols-3 gap-4 mb-8 items-end">
          {/* 2nd place */}
          <div className="text-center">
            <Card className="bg-slate-800/80 border-slate-600 hover:border-slate-500 transition-all">
              <CardContent className="pt-4 pb-3 px-3 space-y-1">
                <div className="text-2xl">{topThree[1].badge}</div>
                <div className="font-semibold text-white text-sm truncate">{topThree[1].name}</div>
                <div className="text-slate-400 text-xs">{topThree[1].country}</div>
                <div className="text-xl font-bold text-slate-200">{topThree[1].score.toLocaleString()}</div>
                <Badge className={`text-xs ${levelColors[topThree[1].level]}`}>{topThree[1].level}</Badge>
              </CardContent>
            </Card>
          </div>

          {/* 1st place */}
          <div className="text-center -mt-4">
            <Card className="bg-gradient-to-b from-yellow-500/10 to-slate-800/80 border-yellow-500/40 hover:border-yellow-500/60 transition-all shadow-lg shadow-yellow-500/10">
              <CardContent className="pt-4 pb-3 px-3 space-y-1">
                <div className="text-3xl">{topThree[0].badge}</div>
                <div className="font-bold text-white truncate">{topThree[0].name}</div>
                <div className="text-slate-400 text-xs">{topThree[0].country}</div>
                <div className="text-2xl font-bold text-yellow-400">{topThree[0].score.toLocaleString()}</div>
                <Badge className={`text-xs ${levelColors[topThree[0].level]}`}>{topThree[0].level}</Badge>
              </CardContent>
            </Card>
          </div>

          {/* 3rd place */}
          <div className="text-center">
            <Card className="bg-slate-800/80 border-slate-600 hover:border-slate-500 transition-all">
              <CardContent className="pt-4 pb-3 px-3 space-y-1">
                <div className="text-2xl">{topThree[2].badge}</div>
                <div className="font-semibold text-white text-sm truncate">{topThree[2].name}</div>
                <div className="text-slate-400 text-xs">{topThree[2].country}</div>
                <div className="text-xl font-bold text-amber-600">{topThree[2].score.toLocaleString()}</div>
                <Badge className={`text-xs ${levelColors[topThree[2].level]}`}>{topThree[2].level}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ranks 4–10 */}
        <Card className="bg-slate-800/80 border-slate-700 mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Rankings
            </CardTitle>
            <CardDescription className="text-slate-400">Top 10 environmental quiz champions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {rest.map((player) => (
              <div
                key={player.rank}
                className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-center justify-center w-6 shrink-0">
                  <RankIcon rank={player.rank} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white truncate">{player.name}</span>
                    <span className="text-base">{player.country}</span>
                  </div>
                  <div className="text-xs text-slate-400">{player.quizzesCompleted} quizzes completed</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-slate-200">{player.score.toLocaleString()}</div>
                  <Badge className={`text-xs ${levelColors[player.level]}`}>{player.level}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Think you can top the charts? Start a challenge now!</p>
          <Link href="/quiz">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8">
              <Trophy className="w-4 h-4 mr-2" />
              Start Challenge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
