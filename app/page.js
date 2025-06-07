"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HomePage() {
  const [text, setText] = useState("")
  const [darkMode, setDarkMode] = useState(true)
  const fullText = `Hi, I’m Akshay V T`

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(prev => prev + fullText[i])
      i++
      if (i >= fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("min-h-screen font-typewriter transition-colors duration-500", darkMode ? "bg-gradient-to-br from-black to-gray-900 text-white" : "bg-white text-black")}> 

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

      {/* Navbar */}
      <nav className="w-full px-6 py-4 flex  items-end relative z-10">
        
        <div className="flex items-center gap-4">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Switch
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
            className="ml-2"
          >
            {darkMode ? <Moon className="ml-2 size-4" /> : <Sun className="ml-2 size-4" />}
          </Switch>
        </div>
      </nav>

      <main className="px-6 py-10 max-w-5xl mx-auto space-y-20 relative z-10">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-4xl sm:text-5xl font-bold tracking-tight">
            {text}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-muted-foreground">
            Front-End Developer specialized in React, Tailwind, and beautiful UI
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Button size="lg">Download Resume</Button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
           I&apos;m a developer who transforms complex problems into elegant, performant web interfaces. I specialize in Next.js and UI libraries like ShadCN.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js", "Git", "Figma"].map(skill => (
              <Badge key={skill} variant="secondary" className="bg-white/10 dark:bg-white/10 text-inherit">{skill}</Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Portfolio Website", desc: "Modern personal portfolio built with Next.js and Tailwind." },
              { title: "LMS Platform", desc: "Learning platform with course structure, built using React and Redux." },
              { title: "eCommerce UI", desc: "Frontend for a custom store using Headless UI and shadcn." },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">I’m open to freelance or full-time opportunities. Let’s connect.</p>
          <Button variant="outline" className="text-black">Contact Me</Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-muted-foreground relative z-10">
        &copy; {new Date().getFullYear()} Akshay V T. Built with ❤️ and Next.js.
      </footer>
    </div>
  )
}
