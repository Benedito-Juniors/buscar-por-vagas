'use client'

import React, { useEffect, useState } from 'react'
import JobItem from '@/app/components/cards/JobItem'

interface Job {
  id: string
  title: string
  company: string
  city: string
  salary?: string | number
}

const VagasPage = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs')
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs))
    }
  }, [])

  if (jobs.length === 0) {
    return <p className="text-center mt-10">Nenhuma vaga cadastrada.</p>
  }

  return (
    <main className="py-10 max-w-5xl mx-auto px-4">
      <h2 className="font-display mb-8 text-2xl font-bold">Vagas Cadastradas</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  )
}

export default VagasPage
