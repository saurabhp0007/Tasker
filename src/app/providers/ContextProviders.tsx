"use client"
import React, { useEffect } from 'react'
import { GlobalProvider } from '../context/globalProvider'
import { Toaster } from 'react-hot-toast';

interface Props {
  children: React.ReactNode
}

function ContextProviders({ children }: Props) {

  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 200)

  }, [])
  if (!isReady) return null
  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  )
}

export default ContextProviders