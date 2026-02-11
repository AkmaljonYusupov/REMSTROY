import { useTranslation } from 'react-i18next'
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
							onClick={() => (window.location.href = '/')} // home sahifaga o'tish
						>
							{t('about.home')}
						</span>

						<span className='arrow'>→</span>

						<span
							className={`breadcrumb-link ${
								window.location.pathname === '/about' ? 'active' : ''
							}`}
							onClick={() => (window.location.href = '/about')} // joriy sahifa
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
						<div className='features-grid'>
							<div className='feature-card'>
								<img src='/src/assets/icons/card3-icon.png' alt='Card 1 Icon' />
								<h3>{t('about.card1.title')}</h3>
								<p>{t('about.card1.text')}</p>
							</div>

							<div className='feature-card'>
								<img src='/src/assets/icons/card2-icon.png' alt='Card 2 Icon' />
								<h3>{t('about.card2.title')}</h3>
								<p>{t('about.card2.text')}</p>
							</div>

							<div className='feature-card'>
								<img src='/src/assets/icons/card1-icon.png' alt='Card 3 Icon' />
								<h3>{t('about.card3.title')}</h3>
								<p>{t('about.card3.text')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
