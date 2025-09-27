"use client"
import { HeartIcon, UsersIcon, ShieldCheckIcon, MessageSquareIcon } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0b0606] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#101c36] to-[#0b0606]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#f38d9d]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            HealyBot specializes in building custom mental health Discord bots tailored to your community's specific
            needs.
          </p>
        </div>
      </section>

      {/* Contact Section - Moved to top */}
      <section className="py-20 bg-[#2c324c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Your Custom <span className="text-[#f38d9d]">Mental Health Bot</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                <strong>Our specialty:</strong> Building personalized mental health Discord bots based on your
                community's unique requirements. Whether you need therapy support, mood tracking, wellness reminders, or
                community positivity features - we create bots that truly serve your members' mental health needs.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1620] p-8 rounded-xl">
              <form action="https://formspree.io/f/xpwzgqpb" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#2c324c] text-white rounded-lg border border-[#3a4553] focus:border-[#f38d9d] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#2c324c] text-white rounded-lg border border-[#3a4553] focus:border-[#f38d9d] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    What type of mental health bot do you need?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-[#2c324c] text-white rounded-lg border border-[#3a4553] focus:border-[#f38d9d] focus:outline-none transition-colors"
                    placeholder="e.g., Therapy support bot, Mood tracker, Wellness reminders..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Describe your community's mental health needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-[#2c324c] text-white rounded-lg border border-[#3a4553] focus:border-[#f38d9d] focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your server, what mental health challenges your members face, and what features would help them most..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#f38d9d] text-black font-medium px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 duration-300"
                  >
                    Request Custom Bot
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                We typically respond within 24 hours with a custom proposal. Your information is completely private and
                secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0b0606]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#f38d9d]">HealyBot</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              HealyBot is a forward-thinking company specializing in the development of mental health-focused Discord
              bots. Our mission is to create digital tools that foster positive environments, provide mental health
              support, and build stronger, more supportive online communities. We believe that technology can be a
              powerful force for mental wellness and social connection.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#1a1620] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f38d9d] rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Mental Health Bots</h3>
              <p className="text-gray-300">
                We build personalized Discord bots tailored to your community's specific mental health needs, from
                therapy support to wellness tracking.
              </p>
            </div>

            <div className="bg-[#1a1620] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mb-6">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community-Focused Design</h3>
              <p className="text-gray-300">
                Every bot we create is designed around your community's unique culture and mental health challenges,
                ensuring maximum impact and engagement.
              </p>
            </div>

            <div className="bg-[#1a1620] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe & Supportive Features</h3>
              <p className="text-gray-300">
                Our bots prioritize user safety and privacy while providing effective mental health support and crisis
                intervention capabilities.
              </p>
            </div>

            <div className="bg-[#1a1620] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mb-6">
                <MessageSquareIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support & Updates</h3>
              <p className="text-gray-300">
                We provide continuous support and regular updates to ensure your mental health bot evolves with your
                community's needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
