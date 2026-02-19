import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FloatingButtons.scss'

const FloatingButtons = () => {
	const [visible, setVisible] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const handleScroll = () => setVisible(window.scrollY > 300)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Tepaga chiqish
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	// Contact page ga o‘tish
	const goToContact = () => {
		navigate('/contact')
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			{/* Scroll Top */}
			<button
				className={`floating-btn right scroll-top ${visible ? 'show' : ''}`}
				onClick={scrollToTop}
				aria-label="Scroll to top"
			>
				<span className="arrow">↑</span>
			</button>

			{/* Phone */}
			<button
				className="floating-btn left pulse"
				onClick={goToContact}
				aria-label="Go to Contact Page"
			>
				<Phone size={24} />
			</button>
		</>
	)
}

export default FloatingButtons
