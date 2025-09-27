"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircleIcon, MusicIcon, BookOpenIcon } from "lucide-react"

const bots = [
  {
    name: "Healy",
    description:
      "The original mental health therapist bot that detects when users need support and provides personalized mental health assistance.",
    icon: MessageCircleIcon,
    color: "#f38d9d",
    image: "/images/healy-icon.png",
    discordUrl:
      "https://discord.com/oauth2/authorize?client_id=1314753929359261827&permissions=1126864127384640&integration_type=0&scope=bot",
    features: ["Mental Health Detection", "Personal Therapy Sessions", "Positivity Promotion"],
  },
  {
    name: "HealyTunes",
    description:
      "A therapeutic music bot that plays calming, mood-boosting music to help users relax and improve their mental state.",
    icon: MusicIcon,
    color: "#8b5cf6",
    image: "/images/healy-tunes-icon.png",
    discordUrl:
      "https://discord.com/oauth2/authorize?client_id=1320298643445518336&permissions=1126864127384640&integration_type=0&scope=bot",
    features: ["Therapeutic Playlists", "Mood-Based Music", "Relaxation Sounds"],
  },
  {
    name: "HealyLearn",
    description:
      "An educational bot focused on teaching mental health awareness, coping strategies, and wellness techniques.",
    icon: BookOpenIcon,
    color: "#10b981",
    image: "/images/meditation-brain-large.png", // Using existing brain image as placeholder
    discordUrl: "#", // Replace with actual URL
    features: ["Mental Health Education", "Coping Strategies", "Wellness Tips"],
  },
]

export default function BotsPage() {
  return (
    <div className="min-h-screen bg-[#0b0606] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#101c36] to-[#0b0606]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/meditation-brain-large.png"
              alt="Brain Icon"
              width={80}
              height={80}
              className="object-contain mr-4"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Our <span className="text-[#f38d9d]">Bots</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of mental health focused Discord bots, each designed to promote positivity and
            well-being in your community.
          </p>
        </div>
      </section>

      {/* Bots Grid */}
      <section className="py-20 bg-[#2c324c]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bots.map((bot, index) => {
              const IconComponent = bot.icon
              return (
                <div
                  key={bot.name}
                  className="bg-[#1a1620] p-8 rounded-xl text-center relative transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Bot image instead of brain icon */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                    <Image
                      src={bot.image || "/placeholder.svg"}
                      alt={`${bot.name} Icon`}
                      width={80}
                      height={80}
                      className="object-contain rounded-full"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{bot.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{bot.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#f38d9d] mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {bot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add to Discord Button */}
                  <Link
                    href={bot.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 duration-300"
                    style={{
                      backgroundColor: bot.color,
                      color: "white",
                    }}
                  >
                    <Image src="/images/discord-icon.png" alt="Discord" width={20} height={20} className="mr-2" />
                    Add to Discord
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0b0606]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to improve your server's mental health?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the bots that best fit your community's needs and start promoting positivity today.
          </p>
          <Link
            href="/services"
            className="bg-[#f38d9d] text-black font-medium px-8 py-4 rounded-full inline-flex items-center hover:bg-opacity-90 transition-all transform hover:scale-105 duration-300"
          >
            Learn More About Our Services
          </Link>
        </div>
      </section>
    </div>
  )
}
