import { useTranslation } from 'react-i18next'
import aboutCartimg1 from '../assets/icons/card1-icon.png'
import aboutCartimg2 from '../assets/icons/card2-icon.png'
import aboutCartimg3 from '../assets/icons/card3-icon.png'

import './About.scss'

function About() {
	const { t } = useTranslation()

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
							className={`breadcrumb-link ${
								window.location.pathname === '/about' ? 'active' : ''
							}`}
							onClick={() => (window.location.href = '/about')}
						>
							{t('about.aboutjoyiy')}
						</span>
					</div>
				</div>
			</div>

			{/* FEATURES / CARDS – oldingi 3 ta karta saqlanadi */}
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

			{/* ============================================= */}
			{/* RASHMDAGI "We Believe In The Power of Great Ideas" BO'LIMI – 1:1 mos */}
			{/* ============================================= */}
			<div className='about-believe-section'>
				<div className='container'>
					<div className='believe-content'>
						<h2 className='believe-title'>
							{t('about.believe.title')}{' '}
							{/* "We Believe In The Power of Great Ideas" */}
						</h2>

						<p className='believe-desc'>
							{t('about.believe.desc')} {/* lorem ipsum o'rniga real matn */}
						</p>

						<ul className='believe-checklist'>
							<li>
								<span className='check-icon'>✔</span>
								{t('about.believe.check1')}
							</li>
							<li>
								<span className='check-icon'>✔</span>
								{t('about.believe.check2')}
							</li>
							<li>
								<span className='check-icon'>✔</span>
								{t('about.believe.check3')}
							</li>
							<li>
								<span className='check-icon'>✔</span>
								{t('about.believe.check4')}
							</li>
							<li>
								<span className='check-icon'>✔</span>
								{t('about.believe.check5')}
							</li>
						</ul>

						<button className='btn-read-more'>
							{t('about.believe.readMore')}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
