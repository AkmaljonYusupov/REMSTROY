import { useTranslation } from 'react-i18next'


import { useEffect, useRef, useState } from 'react'
import './Projects.scss'

function Projects() {
	const { t } = useTranslation()

	// =========================
	// COUNTER LOGIC
	// =========================
	const statsRef = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.disconnect() // faqat 1 marta ishlaydi
				}
			},
			{ threshold: 0.4 }
		)

		if (statsRef.current) {
			observer.observe(statsRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const useCountUp = (end, duration = 2000) => {
		const [count, setCount] = useState(0)

		useEffect(() => {
			if (!visible) return

			let startTime = null
			let animationFrame

			const animate = (time) => {
				if (!startTime) startTime = time
				const progress = time - startTime
				const percent = Math.min(progress / duration, 1)

				const value = Math.floor(end * percent)
				setCount(value)

				if (percent < 1) {
					animationFrame = requestAnimationFrame(animate)
				} else {
					setCount(end) // oxirida aniq end ga tenglashadi
				}
			}

			animationFrame = requestAnimationFrame(animate)

			return () => cancelAnimationFrame(animationFrame)
		}, [visible, end, duration]) // MUHIM

		return count
	}

	const projects = useCountUp(5698)
	const team = useCountUp(864)
	const coffee = useCountUp(9654)
	const awards = useCountUp(578)


	return (
		<section className="about-page">
			{/* HERO */}
			<div className="about-hero">
				<div className="container">
					<h1 className="about-title">{t('projects.projectsjoyiy')}</h1>
					<div className="breadcrumb">
						<span
							className="breadcrumb-link"
							onClick={() => (window.location.href = '/')}
						>
							{t('contact.home')}
						</span>
						<span className="arrow">→</span>
						<span
							className={`breadcrumb-link ${window.location.pathname === '/contact' ? 'active' : ''
								}`}
							onClick={() => (window.location.href = '/contact')}
						>
							{t('projects.projectsjoyiy')}
						</span>
					</div>
				</div>
			</div>


			{/* STATISTICS */}
			<div className='about-stats' ref={statsRef}>
				<div className='stats-overlay'>
					<div className='container'>
						<div className='stats-header'>
							<span className='stats-small'>
								{t('about.stats.small')}
							</span>
							<h2 className='stats-title'>
								{t('about.stats.title')}
							</h2>
						</div>

						<div className='stats-grid'>
							<div className='stat-card'>
								<h3>{projects.toLocaleString()}+</h3>
								<p>{t('about.stats.projects')}</p>
							</div>

							<div className='stat-card'>
								<h3>{team.toLocaleString()}+</h3>
								<p>{t('about.stats.team')}</p>
							</div>

							<div className='stat-card'>
								<h3>{coffee.toLocaleString()}+</h3>
								<p>{t('about.stats.coffee')}</p>
							</div>

							<div className='stat-card'>
								<h3>{awards.toLocaleString()}+</h3>
								<p>{t('about.stats.awards')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA SECTION */}
			<div className='cta-section'>

				{/* Background shapes */}
				<div className="cta-decorations">
					<div className="cta-bg-left"></div>
					<div className="cta-bg-right"></div>

					<div className="cta-shape shape-1">

					</div>
					<div className="cta-shape shape-2"></div>
					<div className="cta-shape shape-3"></div>
					<div className="cta-shape shape-4"></div>
					<div className="cta-shape shape-5"></div>
					<div className="cta-shape shape-6"></div>
				</div>

				<div className='container'>

					<div className='cta-header'>
						<span className='cta-subtitle'>
							{t('about.cta.small')}
						</span>

						<h2 className='cta-title'>
							{t('about.cta.title')}
						</h2>

						<p className='cta-text'>
							{t('about.cta.text')}
						</p>

						<button className='cta-button'>
							{t('about.cta.button')}
						</button>
					</div>
				</div>
			</div>

			{/* MAP SECTION */}
			<div className='about-map'>
				<div className='map-frame'>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.893932426892!2d69.33107757572047!3d41.31117100071977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50327e60f73%3A0x671d676293ffbc9!2z0YPQu9C40YbQsCDQn9Cw0YDQutC10L3RgtGB0LrQsNGPLCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1771122502240!5m2!1sru!2s"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Melbourne Office Location"
					></iframe>


				</div>
			</div>

		</section>
	)
}

export default Projects