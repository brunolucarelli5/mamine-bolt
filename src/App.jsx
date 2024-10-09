import React from 'react'
import { Bread, ShoppingBag, Phone } from 'lucide-react'

const products = [
  { name: 'Pan Lactal', description: 'Suave y esponjoso pan de leche' },
  { name: 'Pan de Panchos', description: 'Perfecto para hot dogs' },
  { name: 'Pan de Hamburguesa', description: 'Ideal para tus hamburguesas caseras' },
  { name: 'Pre-Pizza', description: 'Base crujiente lista para hornear' },
]

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-orange-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Bread size={32} />
            <h1 className="text-2xl font-bold ml-2">Mamine</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#productos" className="hover:text-brown-700">Productos</a></li>
              <li><a href="#contacto" className="hover:text-brown-700">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-brown-700 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos a Mamine</h2>
            <p className="text-xl mb-8">Especialistas en productos panificados de calidad</p>
            <a href="#productos" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
              Ver Productos
            </a>
          </div>
        </section>

        <section id="productos" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-brown-700">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-orange-500">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-brown-700">¿Por qué elegir Mamine?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Bread size={48} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-gray-600">Ingredientes seleccionados y procesos artesanales</p>
              </div>
              <div>
                <ShoppingBag size={48} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">Variedad</h3>
                <p className="text-gray-600">Amplia gama de productos para todas tus necesidades</p>
              </div>
              <div>
                <Phone size={48} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Estamos aquí para ayudarte en todo momento</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
            <p className="text-xl mb-4">¿Tienes alguna pregunta o pedido especial?</p>
            <p className="text-xl mb-8">¡Estamos aquí para ayudarte!</p>
            <a href="tel:+123456789" className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
              Llámanos ahora
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-brown-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mamine. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App