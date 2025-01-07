'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import WindowXPLogo from "@/../public/WindowsXPLogo.png"

const Screensaver: React.FC = () => {
  const [isActive, setIsActive] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [lastMouseMove, setLastMouseMove] = useState(Date.now())
  const [isMouseIdle, setIsMouseIdle] = useState(false)

  const x = useMotionValue(Math.random() * windowSize.width)
  const y = useMotionValue(Math.random() * windowSize.height)
  const controls = useAnimation()
  const timelimit = 30000

  const [velocity, setVelocity] = useState({ x: 5, y: 5 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const move = useCallback(() => {
    let newX = x.get() + velocity.x
    let newY = y.get() + velocity.y
    let newVelocityX = velocity.x
    let newVelocityY = velocity.y

    if (newX <= 0 || newX >= windowSize.width - 200) {
      newVelocityX = -newVelocityX
    }
    if (newY <= 0 || newY >= windowSize.height - 200) {
      newVelocityY = -newVelocityY
    }

    setVelocity({ x: newVelocityX, y: newVelocityY })
    x.set(newX)
    y.set(newY)
  }, [velocity, windowSize, x, y])

  useEffect(() => {
    if (isActive && isMouseIdle) {
      const intervalId = setInterval(move, 50)
      return () => clearInterval(intervalId)
    }
  }, [isActive, isMouseIdle, move])

  const handleInteraction = useCallback(() => {
    setIsActive((prev) => !prev)
    setLastMouseMove(Date.now())
    setIsMouseIdle(false)
  }, [])

  const handleMouseMove = useCallback(() => {
    setLastMouseMove(Date.now())
    setIsMouseIdle(false)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleInteraction)

    const checkMouseIdle = setInterval(() => {
      if (Date.now() - lastMouseMove > timelimit) {
        setIsMouseIdle(true)
      }
    }, 1000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleInteraction)
      clearInterval(checkMouseIdle)
    }
  }, [handleInteraction, handleMouseMove, lastMouseMove])

  if (!isActive || !isMouseIdle) return null

  return (
    <div className="absolute w-screen h-screen inset-0 top-0 bg-black overflow-hidden z-[999]">
      <motion.div
        style={{ x, y }}
        animate={controls}
        className="absolute"
      >
        <Image
          src={WindowXPLogo}
          alt="Windows XP Logo"
          width={200}
          height={200}
          priority
        />
      </motion.div>
    </div>
  )
}

export default Screensaver

