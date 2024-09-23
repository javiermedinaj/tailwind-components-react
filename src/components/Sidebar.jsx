import React from 'react'

const Sidebar = ({ components, onSelectComponent }) => {
  return (
    <div className="w-full md:w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Componentes</h2>
        <ul>
          {Object.keys(components).map((componentName) => (
            <li key={componentName} className="mb-2">
              <button
                onClick={() => onSelectComponent(componentName)}
                className="w-full text-left px-2 py-1 rounded hover:bg-gray-200"
              >
                {componentName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar