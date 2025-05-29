import React from 'react'

interface Job {
  id: string
  title: string
  company: string
  city: string
  salary?: string | number
}

const JobItem = ({ job }: { job: Job }) => (
  <div className="border rounded-md p-4 bg-white shadow-sm">
    <h3 className="text-lg font-semibold">{job.title}</h3>
    <p className="text-gray-700">{job.company}</p>
    <p className="text-gray-600">{job.city}</p>
    {job.salary && <p className="text-gray-500">Salário: {job.salary}</p>}
  </div>
)

export default JobItem
