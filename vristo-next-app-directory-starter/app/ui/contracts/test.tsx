'use client'
import useSWR from 'swr'

import { useState, useEffect } from 'react'
import { Photo } from '@/app/lib/definitions'
 
[/** using useEffect**/]
export function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, []);
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  return (   
    <>
        {data?.map((photo) => {
            return (
            <p  key={photo.id}>
                <span>{photo.title}</span>
            </p>
            );
        })}
    </>
  )
}
