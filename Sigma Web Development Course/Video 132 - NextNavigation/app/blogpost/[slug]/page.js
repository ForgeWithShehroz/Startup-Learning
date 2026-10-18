'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000);


  }, [])

  const search = searchParams.get('search')
  return (
    <div>
      Slug can only be used by using nameofpage/slug use backslash instead of forward slash {params.slug}
      <button className='m-5 p-2 cursor-pointer border border-amber-100 ' onClick={() => router.push('/')}>Go to Home</button>
      Search: {search}

    </div>
  )
}

export default page
