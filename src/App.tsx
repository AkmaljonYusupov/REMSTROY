import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'
import Projects from './pages/Projects'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/news' element={<News />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
