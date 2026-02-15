import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"


import aboutpageImg from '../../src/assets/images/aboutpage-image.jpg'
import aboutCartimg1 from '../assets/icons/card1-icon.png'
import aboutCartimg2 from '../assets/icons/card2-icon.png'
import aboutCartimg3 from '../assets/icons/card3-icon.png'
import teamImg1 from '../assets/images/team-image1.jpg'
import teamImg2 from '../assets/images/team-image2.jpg'
import teamImg3 from '../assets/images/team-image3.jpg'

import './About.scss'

function About() {
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
		<section className='about-page'>
			{/* HERO */}
			<div className='about-hero'>
				<div className='container'>
					<h1 className='about-title'>{t('about.aboutjoyiy')}</h1>
					<div className='breadcrumb'>
						<span
							className='breadcrumb-link'
							onClick={() => (window.location.href = '/')}
						>
							{t('about.home')}
						</span>

						<span className='arrow'>→</span>

						<span
							className={`breadcrumb-link ${window.location.pathname === '/about' ? 'active' : ''
								}`}
							onClick={() => (window.location.href = '/about')}
						>
							{t('about.aboutjoyiy')}
						</span>
					</div>
				</div>
			</div>

			{/* FEATURES */}
			<div className='about-features'>
				<div className='container'>
					<div className='features-grid'>
						<div className='feature-card'>
							<img src={aboutCartimg1} alt='Experienced engineers' />
							<h3>{t('about.card1.title')}</h3>
							<p>{t('about.card1.text')}</p>
						</div>

						<div className='feature-card'>
							<img src={aboutCartimg2} alt='24/7 support' />
							<h3>{t('about.card2.title')}</h3>
							<p>{t('about.card2.text')}</p>
						</div>

						<div className='feature-card'>
							<img src={aboutCartimg3} alt='Talented team' />
							<h3>{t('about.card3.title')}</h3>
							<p>{t('about.card3.text')}</p>
						</div>
					</div>
				</div>
			</div>

			{/* ABOUT US */}
			<div className='about-us-hero'>
				<div className='container'>
					<div className='us-grid'>
						<div className='us-image-side'>
							<img
								src={aboutpageImg}
								alt='Construction team discussing plans'
								className='us-main-photo'
							/>
						</div>

						<div className='us-text-side'>
							<span className='us-small-label'>
								{t('nav.reviews')}
							</span>

							<h2 className='us-main-title'>
								{t('about.believe.title')}
							</h2>

							<p className='us-description'>
								{t('about.believe.desc')}
							</p>

							<ul className='us-check-list'>
								<li>
									<span className='check-mark'>✔</span>
									{t('about.believe.check1')}
								</li>
								<li>
									<span className='check-mark'>✔</span>
									{t('about.believe.check2')}
								</li>
								<li>
									<span className='check-mark'>✔</span>
									{t('about.believe.check3')}
								</li>
								<li>
									<span className='check-mark'>✔</span>
									{t('about.believe.check4')}
								</li>
								<li>
									<span className='check-mark'>✔</span>
									{t('about.believe.check5')}
								</li>
							</ul>

							<button className='read-more-btn'>
								{t('about.believe.readMore')}
							</button>
						</div>
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

			{/* TEAM SECTION */}
			<div className='about-team'>
				<div className='container'>
					<div className='team-header'>
						<span className='team-small'>
							{t('about.team.small')}
						</span>
						<h2 className='team-title'>
							{t('about.team.title')}
						</h2>
					</div>

					<div className='team-grid'>

						{/* MEMBER 1 */}
						<div className='team-card'>
							<div className='team-image'>
								<img src={teamImg1} alt={t('about.team.member1.name')} />
							</div>

							<div className='team-info'>
								<h3>{t('about.team.member1.name')}</h3>
								<p>{t('about.team.member1.position')}</p>

								<div className='team-social'>
									<a href="#"><FaFacebookF /></a>
									<a href="#"><FaTwitter /></a>
									<a href="#"><FaLinkedinIn /></a>
								</div>
							</div>
						</div>

						{/* MEMBER 2 */}
						<div className='team-card'>
							<div className='team-image'>
								<img src={teamImg2} alt={t('about.team.member2.name')} />
							</div>

							<div className='team-info'>
								<h3>{t('about.team.member2.name')}</h3>
								<p>{t('about.team.member2.position')}</p>

								<div className='team-social'>
									<a href="#"><FaFacebookF /></a>
									<a href="#"><FaTwitter /></a>
									<a href="#"><FaLinkedinIn /></a>
								</div>
							</div>
						</div>

						{/* MEMBER 3 */}
						<div className='team-card'>
							<div className='team-image'>
								<img src={teamImg3} alt={t('about.team.member3.name')} />
							</div>

							<div className='team-info'>
								<h3>{t('about.team.member3.name')}</h3>
								<p>{t('about.team.member3.position')}</p>

								<div className='team-social'>
									<a href="#"><FaFacebookF /></a>
									<a href="#"><FaTwitter /></a>
									<a href="#"><FaLinkedinIn /></a>
								</div>
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

export default About