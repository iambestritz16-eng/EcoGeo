import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trash2 } from "lucide-react"

export default function WastePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-300">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h2 className="text-2xl font-bold">Waste Segregation</h2>
        </div>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <Trash2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Waste Segregation</CardTitle>
                <CardDescription className="text-slate-400">Dry, Wet and Biodegradable Waste: best practices and tips</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              Learn how to separate waste at the source, compost organic materials, recycle plastics and paper, and properly
              dispose of hazardous items. This page contains quick tips, resources, and a short quiz to test your knowledge.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Quick Tips</h3>
                <ul className="list-disc list-inside text-slate-300">
                  <li>Use separate bins for Dry (recyclables), Wet (organic), and Hazardous waste.</li>
                  <li>Rinse containers before recycling to avoid contamination.</li>
                  <li>Compost food scraps to reduce landfill waste.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-white">Resources</h3>
                <ul className="text-slate-300">
                  <li>
                    <a href="#" className="text-emerald-300 hover:underline">
                      Local recycling guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-emerald-300 hover:underline">
                      Composting 101
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-emerald-300 hover:underline">
                      How to handle e-waste
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/waste/game">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                  Start Game
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
