"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Dumbbell,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Star,
  Target,
  Zap,
  Calendar,
  Facebook,
  Instagram,
} from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const experiences = [
    {
      title: "Speedball Referee",
      company: "El-tehad El-masry / Cairo",
      period: "2023 - 2025",
      description: "Officiated national-level speedball matches, ensuring fair play and adherence to game rules.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      title: "Injury Rehabilitation Specialist",
      company: "RELIFE Center / Tanta",
      period: "2023 - 2025",
      description: "Provided recovery and rehab programs for clients to restore physical health and mobility.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Gymnastics Coach",
      company: "Academies / Tanta",
      period: "2023 - 2025",
      description: "Trained athletes in core gymnastics techniques, flexibility, and coordination.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Bodybuilding Coach",
      company: "MAX GYM / Tanta",
      period: "2023 - 2025",
      description: "Trained athletes in core gymnastics techniques, flexibility, and coordination.",
      icon: <Dumbbell className="w-5 h-5" />,
    },
  ]

  const achievements = [
    {
      title: "Level 2 Speedball Referee",
      year: "2025",
      description: "Certified to officiate national-level speedball matches.",
    },
    {
      title: "Arab-African Speedball Championship Referee",
      year: "2025",
      description: "Selected to officiate at the prestigious Arab-African championship in speedball.",
    },
    {
      title: "Modern Pentathlon Referee",
      year: "2023",
      description: "Authorized to judge events in the modern pentathlon discipline.",
    },
    {
      title: "Head of Referees Committee – Gharbia (Speedball)",
      year: "2025",
      description:
        "Supervised and managed all referees in the region, ensuring fair play and maintaining high officiating standards.",
    },
  ]

  const skills = [
    "Physical Rehabilitation",
    "Sports Coaching",
    "Speedball Refereeing",
    "Gymnastics Training",
    "Bodybuilding",
    "Event Organization",
    "Team Management",
    "Sports Therapy",
    "Performance Analysis",
    "Injury Prevention",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-gray-900 to-gray-900"
          style={{ y }}
        />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Emad El-faky
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mt-4">Sports Fitness & Gym Coach | Speed Ball Expert</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Expert in physical rehabilitation, helping individuals recover from injuries and return to daily life or
              sports with strength, mobility, and renewed confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/201030758747?text=Hello%20Emad,%20I%20would%20like%20to%20discuss%20fitness%20coaching%20services",
                    "_blank",
                  )
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                Tanta, Egypt
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                +20 1030758747
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-orange-500/30 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-orange-400/20"
              />
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-transparent">
                <Image
                  src="/images/emad-photo.png"
                  alt="Emad El-faky"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-orange-600 rounded-full p-3"
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-orange-600 rounded-full p-3"
              >
                <Dumbbell className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Expert Rehabilitation</h3>
                  <p className="text-gray-400">
                    Specialized in helping individuals recover from injuries and return to daily life or sports with
                    renewed confidence and strength.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Motivated Coaching</h3>
                  <p className="text-gray-400">
                    A highly motivated coach who brings energy and expertise to every session, dedicated to helping
                    clients reach their health and fitness goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Customized Programs</h3>
                  <p className="text-gray-400">
                    Creates fully customized workout programs tailored to each client's unique body, goals, and
                    lifestyle for results that truly last.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-orange-500">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 p-3 rounded-lg flex-shrink-0">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                          <Badge variant="outline" className="border-orange-500 text-orange-500 w-fit">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-orange-400 font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Achievements & <span className="text-orange-500">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                          <Badge className="bg-orange-600 text-white">{achievement.year}</Badge>
                        </div>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-orange-500">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 border border-gray-700 hover:border-orange-500 px-6 py-3 rounded-full transition-colors"
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600/10 to-gray-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Work <span className="text-orange-500">Together</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your fitness journey? Get in touch and let's create a customized program that works for
              you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/201030758747?text=Hello%20Emad,%20I%20would%20like%20to%20discuss%20fitness%20coaching%20services",
                    "_blank",
                  )
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full bg-transparent"
                onClick={() => window.open("tel:+201030758747", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                +20 1030758747
              </Button>
            </div>

            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.a
                href="https://www.facebook.com/emadasd.elfaky"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-blue-600 p-4 rounded-full transition-colors duration-300 border border-gray-700 hover:border-blue-500"
              >
                <Facebook className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/3omdaelfaky/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-4 rounded-full transition-all duration-300 border border-gray-700 hover:border-pink-500"
              >
                <Instagram className="w-6 h-6 text-white" />
              </motion.a>
            </div>

            <p className="text-gray-500 text-sm mt-4">Follow me on social media for fitness tips and updates</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center gap-4">
              <motion.a
                href="https://www.facebook.com/emadasd.elfaky"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/3omdaelfaky/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
            <p className="text-gray-400 text-center">
              © 2025 Emad El-faky. All rights reserved. | Sports Fitness & Gym Coach
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
