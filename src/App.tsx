import { Route, Routes } from 'react-router-dom'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
			<FloatingButtons />
		</>
	)
}

export default App
