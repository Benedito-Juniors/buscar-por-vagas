'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import FormItem from './form-item'

const CadastroPage = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newJob = {
      id: Date.now().toString(),
      title: formData.get('title')?.toString() || '',
      company: formData.get('company')?.toString() || '',
      website: formData.get('website')?.toString() || '',
      city: formData.get('city')?.toString() || '',
      salary: formData.get('salary')?.toString() || '',
      vacancyCount: formData.get('vacancyCount')?.toString() || '',
      jobDescription: formData.get('jobDescription')?.toString() || '',
      period: formData.get('period')?.toString() || '',
      requirements: formData.get('requirements')?.toString() || '',
    }
    const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]')
    savedJobs.push(newJob)
    localStorage.setItem('jobs', JSON.stringify(savedJobs))
    setMessage('Vaga cadastrada com sucesso!')
    e.currentTarget.reset()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <Card className="w-full max-w-xl bg-white shadow-md">
        <CardContent className="py-10 px-8 space-y-6">
          <h2 className="text-center font-display text-2xl font-bold mb-10">
            Cadastrar Vaga
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormItem name="Título da Vaga" description="Máximo de 30 caracteres.">
              <Input
                className="w-full rounded-xs border border-gray-300"
                id="title"
                name="title"
                maxLength={30}
                required
              />
            </FormItem>

            <FormItem name="Nome da Empresa" description="Nome da empresa.">
              <Input
                className="w-full rounded-xs border border-gray-300"
                id="company"
                name="company"
                required
              />
            </FormItem>

            <FormItem name="Website da Empresa" description="Informe se houver.">
              <Input className="w-full rounded-xs border border-gray-300" id="website" name="website" />
            </FormItem>

            <FormItem name="Cidade" description='Informe a cidade ou "Remoto".'>
              <Input className="w-full rounded-xs border border-gray-300" id="city" name="city" required />
            </FormItem>

            <FormItem name="Salário" description="Informe o salário, se aplicável.">
              <Input className="w-full rounded-xs border border-gray-300" id="salary" name="salary" />
            </FormItem>

            <FormItem name="Quantidade de Vagas" description="Número total de vagas.">
              <Input
                className="w-full rounded-xs border border-gray-300"
                id="vacancyCount"
                name="vacancyCount"
                type="number"
              />
            </FormItem>

            <FormItem name="Descrição da Vaga" description="Descrição detalhada.">
              <Textarea
                className="w-full rounded-xs border border-gray-300"
                id="jobDescription"
                name="jobDescription"
                rows={4}
              />
            </FormItem>

            <FormItem name="Período" description="Selecione o turno.">
              <select
                id="period"
                name="period"
                className="w-full rounded-xs border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="">Selecione...</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
            </FormItem>

            <FormItem name="Requisitos" description="Liste os requisitos necessários.">
              <Textarea
                className="w-full rounded-xs border border-gray-300"
                id="requirements"
                name="requirements"
                rows={3}
              />
            </FormItem>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Cadastrar
              </button>
            </div>
          </form>

          {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
        </CardContent>
      </Card>
    </main>
  )
}

export default CadastroPage

