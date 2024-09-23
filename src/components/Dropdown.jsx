import React, { useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { label: 'Opción 1', onClick: () => alert('Opción 1 seleccionada') },
    { label: 'Opción 2', onClick: () => alert('Opción 2 seleccionada') },
    { label: 'Opción 3', onClick: () => alert('Opción 3 seleccionada') },
  ]

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Opciones
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  option.onClick()
                  setIsOpen(false)
                }}
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
