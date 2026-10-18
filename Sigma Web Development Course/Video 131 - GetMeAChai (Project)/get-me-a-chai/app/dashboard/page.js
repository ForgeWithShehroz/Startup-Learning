"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'
import { useEffect } from 'react'

const newDashboard = () => {
  
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }

  }, [session, router])


  return (
    <Dashboard />
  )
}

export default newDashboard
