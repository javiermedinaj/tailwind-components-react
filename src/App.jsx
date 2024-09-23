import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import componentData from './data/componentData'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [isCodeExpanded, setIsCodeExpanded] = useState(false)

  const toggleCodeExpand = () => {
    setIsCodeExpanded(!isCodeExpanded)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 pb-4">
      <Sidebar components={componentData} onSelectComponent={setSelectedComponent} />
      <div className="flex-1 p-4 md:p-8">
        {selectedComponent ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedComponent}</h2>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Vista previa</h3>
              <div className="p-4 border rounded">
                {React.createElement(componentData[selectedComponent].component)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Código</h3>
              <SyntaxHighlighter language="jsx" style={tomorrow}>
                {isCodeExpanded
                  ? componentData[selectedComponent].code
                  : componentData[selectedComponent].code.substring(0, 300) + '...'}
              </SyntaxHighlighter>
              {componentData[selectedComponent].code.length > 300 && (
                <button
                  onClick={toggleCodeExpand}
                  className="text-blue-500 hover:underline mt-2"
                >
                  {isCodeExpanded ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Selecciona un componente de la barra lateral para ver su código y vista previa.</p>
        )}
      </div>
    </div>
  )
}

export default App