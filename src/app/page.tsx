'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <ThemeToggle />
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Coin Flip Challenge</h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Ready to test your luck?</p>
      <Link href="/flip">
        <Button className="text-lg px-6 py-3">
          Click to Flip Coin
        </Button>
      </Link>
    </div>
  )
}