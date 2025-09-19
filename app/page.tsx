import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Leaf, Droplets, TreePine, Users, Play, Trophy, Zap, Target, Star, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EcoGeo</h1>
              <p className="text-xs text-emerald-400">Environmental Quiz Challenge</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Features
            </a>
            <a href="#categories" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Challenges
            </a>
            <a href="#leaderboard" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Leaderboard
            </a>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white bg-transparent transition-all"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-lg shadow-emerald-500/10">
            🌍 Challenge Mode: Environmental Geography
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Master Our Planet Through
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              {" "}
              Epic Challenges
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 text-pretty max-w-2xl mx-auto">
            Level up your environmental knowledge through competitive quizzes, unlock achievements, and climb the global
            leaderboard while learning about our planet's ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Challenge
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 bg-transparent transition-all"
            >
              <Trophy className="w-5 h-5 mr-2" />
              View Leaderboard
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-emerald-400">500+</div>
            <div className="text-slate-400">Challenge Questions</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400">12</div>
            <div className="text-slate-400">Quest Categories</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-purple-400">50K+</div>
            <div className="text-slate-400">Active Players</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">95%</div>
            <div className="text-slate-400">Completion Rate</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Environmental Challenge Quests</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Choose your quest, earn XP, unlock achievements, and compete with players worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-slate-700 hover:shadow-xl hover:shadow-emerald-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-emerald-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <a
                href="/waste-segregator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white cursor-pointer block text-lg font-semibold"
                style={{ textDecoration: "none" }}
              >
                Waste Segregator
              </a>
              <CardDescription className="text-slate-400">
                Explore rainforests, temperate forests, and their biodiversity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">45 Questions</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Beginner
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 75%</span>
                  <span>+250 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-blue-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardTitle className="text-white">Water Systems</CardTitle>
              <CardDescription className="text-slate-400">
                Rivers, lakes, oceans, and water cycle patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">38 Questions</span>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Intermediate
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-1/2"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 50%</span>
                  <span>+400 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-700 hover:shadow-xl hover:shadow-orange-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-orange-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardTitle className="text-white">Climate Change</CardTitle>
              <CardDescription className="text-slate-400">
                Global warming, weather patterns, and climate impacts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">52 Questions</span>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                    Advanced
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-1/4"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 25%</span>
                  <span>+600 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-700 hover:shadow-xl hover:shadow-yellow-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-yellow-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <CardTitle className="text-white">Renewable Energy</CardTitle>
              <CardDescription className="text-slate-400">
                Solar, wind, hydro power and sustainable energy geography
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">29 Questions</span>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    Intermediate
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-5/6"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 85%</span>
                  <span>+350 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-purple-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardTitle className="text-white">Urban Sustainability</CardTitle>
              <CardDescription className="text-slate-400">
                Green cities, urban planning, and sustainable development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">41 Questions</span>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Advanced
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/3"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 33%</span>
                  <span>+500 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-700 hover:shadow-xl hover:shadow-teal-500/10 transition-all bg-slate-800/80 backdrop-blur-sm hover:border-teal-500/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-slate-600" />
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <CardTitle className="text-white">Conservation</CardTitle>
              <CardDescription className="text-slate-400">
                Protected areas, wildlife conservation, and biodiversity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">36 Questions</span>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                    Beginner
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full w-full"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress: 100%</span>
                  <span>+300 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-800/50 backdrop-blur-sm py-16 border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Level Up Your Environmental Knowledge</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Compete, learn, and make a difference with our gamified environmental education platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-slate-800/80 rounded-xl p-6 border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Challenge Mode</h4>
              <p className="text-slate-400">
                Take on environmental challenges, earn XP, and unlock achievements as you master geography
              </p>
            </div>

            <div className="text-center bg-slate-800/80 rounded-xl p-6 border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Global Leaderboard</h4>
              <p className="text-slate-400">
                Compete with players worldwide and climb the ranks while learning about our planet
              </p>
            </div>

            <div className="text-center bg-slate-800/80 rounded-xl p-6 border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Team Battles</h4>
              <p className="text-slate-400">
                Form teams with classmates and compete in environmental knowledge battles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Accept the Challenge?</h3>
          <p className="text-xl text-slate-300 mb-8">
            Join the global community of environmental champions and start your quest to save the planet
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40"
          >
            <Play className="w-5 h-5 mr-2" />
            Begin Your Quest
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">EcoGeo</span>
              </div>
              <p className="text-emerald-300 text-sm">
                Making environmental education accessible through interactive geography learning.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Categories</h5>
              <ul className="space-y-2 text-sm text-emerald-300">
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Forest Ecosystems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Water Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Climate Change
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Renewable Energy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-sm text-emerald-300">
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Teacher Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-emerald-300">
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-100">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-emerald-300">
            <p>&copy; 2025 EcoGeo. Made with 🌱 for environmental education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
