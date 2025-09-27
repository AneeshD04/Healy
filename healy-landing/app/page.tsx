"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Style for counter-like flickering effect
const counterStyle = `
    @keyframes flicker {
      0%, 100% { opacity: 1; transform: translateY(0); }
      10% { opacity: 0.95; transform: translateY(-0.5px); }
      20% { opacity: 1; transform: translateY(0); }
      30% { opacity: 0.98; transform: translateY(0.3px); }
      40% { opacity: 1; transform: translateY(0); }
      50% { opacity: 0.94; transform: translateY(-0.2px); }
      60% { opacity: 1; transform: translateY(0); }
      70% { opacity: 0.9; transform: translateY(0.4px); }
      80% { opacity: 1; transform: translateY(0); }
      90% { opacity: 0.96; transform: translateY(-0.3px); }
    }
  `

// Style for down arrow bounce
const bounceStyle = `
  @keyframes bounce {
    0%, 15%, 30%, 45%, 100% {
      transform: translateY(0);
    }
    22% {
      transform: translateY(-12px);
    }
    37% {
      transform: translateY(-6px);
    }
  }
  .bounce {
    animation: bounce 4s infinite;
  }
`

export default function Home() {
  // State for brain position and rotation
  const [brainPosition, setBrainPosition] = useState(0)
  const [brainDirection, setBrainDirection] = useState(-1) // -1 for up, 1 for down
  const [isBrainHovered, setIsBrainHovered] = useState(false)
  const [isMoonHovered, setIsMoonHovered] = useState(false)

  // State for glow intensity
  const [glowIntensity, setGlowIntensity] = useState(5)
  const [glowDirection, setGlowDirection] = useState(1) // 1 for increasing, -1 for decreasing

  // Effect for brain animation - slower and smoother with only vertical movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBrainPosition((prev) => {
        // Slow, smooth movement - even slower for meditation
        const newPosition = prev + 0.15 * brainDirection

        // Change direction at extremes
        if (newPosition <= -15) {
          setBrainDirection(1)
          return -15
        }
        if (newPosition >= 0) {
          setBrainDirection(-1)
          return 0
        }

        return newPosition
      })
    }, 50) // Higher frequency for smoother animation

    return () => clearInterval(interval)
  }, [brainDirection])

  // Effect for glow animation - matched to brain speed
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity((prev) => {
        // Smooth movement
        const newIntensity = prev + 0.2 * glowDirection

        // Change direction at extremes
        if (newIntensity <= 5) {
          setGlowDirection(1)
          return 5
        }
        if (newIntensity >= 15) {
          setGlowDirection(-1)
          return 15
        }

        return newIntensity
      })
    }, 50) // Higher frequency for smoother animation

    return () => clearInterval(interval)
  }, [glowDirection])

  return (
    <div className="overflow-hidden relative">
      {/* Style for counter effect */}
      <style dangerouslySetInnerHTML={{ __html: counterStyle }} />
      {/* Style for bounce */}
      <style dangerouslySetInnerHTML={{ __html: bounceStyle }} />

      {/* Hero Section with Background - Fixed */}
      <div className="fixed inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.png"
            alt="Night sky with stars and trees"
            fill
            priority
            className="object-cover sm:object-fill"
            style={{
              objectPosition: "center bottom",
            }}
          />

          {/* Moon with hover glow effect */}
          <div
            className="absolute top-[10%] left-[15%] w-24 h-24 z-10 cursor-pointer"
            onMouseEnter={() => setIsMoonHovered(true)}
            onMouseLeave={() => setIsMoonHovered(false)}
          >
            {/* Moon glow effect that only shows on hover */}
            <div
              className="absolute transition-opacity duration-300"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: isMoonHovered
                  ? "radial-gradient(ellipse, rgba(245, 215, 110, 0.8) 0%, rgba(245, 215, 110, 0.6) 30%, rgba(245, 215, 110, 0) 70%)"
                  : "none",
                opacity: isMoonHovered ? 1 : 0,
                transform: "scale(2.5)",
                left: "0",
                top: "0",
                zIndex: 5,
              }}
            ></div>
          </div>
        </div>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 z-5 bg-[#0b0606] opacity-30"></div>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-32 pb-32 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
          {/* Meet Healy text */}
          <div className="relative">
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold text-center mb-6">
              <span className="text-white mr-10" style={{ letterSpacing: "-0.03em" }}>
                {"Meet".split("").map((letter, index) => (
                  <span
                    key={`meet-${index}`}
                    style={{
                      display: "inline-block",
                      transition: "transform 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="text-[#f38d9d]" style={{ letterSpacing: "-0.03em" }}>
                {"Healy".split("").map((letter, index) => (
                  <span
                    key={`healy-${index}`}
                    style={{
                      display: "inline-block",
                      transition: "transform 0.2s ease",
                      textShadow: `0 0 ${glowIntensity}px rgba(243, 141, 157, 0.8)`,
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <p className="text-white text-center text-xl max-w-2xl mb-8">
            A personal Discord <span className="font-bold">therapist chat-bot</span> promoting
            <span className="font-bold"> positivity</span> and <span className="font-bold">mental health</span> for{" "}
            <span
              className="font-bold"
              style={{
                position: "relative",
                display: "inline-block",
                color: "white",
                animation: "flicker 2s infinite",
                textShadow: "0 0 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              2000+
            </span>{" "}
            individuals.
          </p>

          <Link
            href="/bots"
            className="bg-[#f38d9d] text-black font-medium px-6 py-3 rounded-full flex items-center hover:bg-opacity-90 transition-all transform hover:scale-105 duration-300"
          >
            <Image src="/images/meditation-brain-large.png" alt="Brain" width={24} height={24} className="mr-2" />
            View Bots
          </Link>

          {/* Scroll Down Icon */}
          <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bounce text-white">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </main>

        {/* Brain Character - Hidden on mobile */}
        <div
          className="absolute bottom-[36%] right-[10%] z-20 w-[150px] h-[150px] cursor-pointer hidden sm:block"
          onMouseEnter={() => setIsBrainHovered(true)}
          onMouseLeave={() => setIsBrainHovered(false)}
        >
          <div
            style={{
              transform: `translateY(${brainPosition}px)`,
              transition: "transform 0.05s linear",
            }}
            className="relative flex items-center justify-center"
          >
            {/* Glow effect behind brain */}
            <div
              className="absolute transition-opacity duration-300"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: isBrainHovered
                  ? "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)"
                  : "none",
                opacity: isBrainHovered ? 0.8 : 0,
                transform: "scale(1.3)",
                left: "0",
                top: "0",
              }}
            ></div>
            <Image
              src="/images/brain.png"
              alt="Healy Brain Character"
              width={150}
              height={150}
              className="object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Spacer to push footer down */}
      <div className="h-screen"></div>

      {/* Footer */}
      <footer className="relative z-20 bg-[#2c324c] py-8 text-center border-t border-[#1a1620]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/meditation-brain-large.png"
              alt="Meditation Brain"
              width={40}
              height={40}
              className="object-contain mr-2"
            />
            <span className="text-white text-xl font-bold">Healy</span>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Healy Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
