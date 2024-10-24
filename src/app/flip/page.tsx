'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'

export default function PageComponent() {
  const [isFlipping, setIsFlipping] = useState(false)
  const [outcome, setOutcome] = useState<'heads' | 'tails' | null>(null)

  const flipCoin = () => {
    setIsFlipping(true)
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails'
      setOutcome(result)
      setIsFlipping(false)
    }, 1000)
  }

  useEffect(() => {
    flipCoin()

  }, [])
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 p-4">
      <ThemeToggle />
      <motion.div
        className="w-40 h-40 rounded-full bg-yellow-400 dark:bg-yellow-600 border-4 border-yellow-500 dark:border-yellow-700 shadow-lg mb-8 flex items-center justify-center"
        animate={{
          rotateX: isFlipping ? 1800 : 0,
        }}
        transition={{ duration: isFlipping?1:0 }}
      >
        <span className="text-4xl font-bold text-yellow-800 dark:text-yellow-200">
          {outcome === 'heads' ? 'H' : 'T'}
        </span>
      </motion.div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {outcome ? `It's ${outcome}!` : 'Flipping...'}
      </h2>
      
      <Button 
        onClick={flipCoin} 
        disabled={isFlipping}
        className="text-lg px-6 py-3 mb-4"
      >
        {isFlipping ? 'Flipping...' : 'Flip Again'}
      </Button>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        {outcome ? `The coin landed on ${outcome}.` : 'Let\'s see what fate has in store for you!'}
      </p>
    </div>
  )
}