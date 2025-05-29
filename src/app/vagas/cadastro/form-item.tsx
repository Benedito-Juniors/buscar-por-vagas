import React from 'react'

interface FormItemProps {
  name: string
  description?: string
  children: React.ReactNode
}

const FormItem = ({ name, description, children }: FormItemProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div>
        <label className="block text-sm font-semibold text-gray-900">
          {name}
        </label>
        {description && (
          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}

export default FormItem
