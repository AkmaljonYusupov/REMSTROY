import { useTranslation } from 'react-i18next'
import aboutpageImg from '../../src/assets/images/aboutpage-image.jpg'
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
			{/* RASMDAGI "About Us" BO'LIMI – chapda rasm, o'ngda kontent (eng yaqin moslashuv) */}
			{/* ============================================= */}
			<div className='about-us-hero'>
				<div className='container'>
					<div className='us-grid'>
						{/* Chap taraf: Rasm + overlay effekt */}
						<div className='us-image-side'>
							<img
								src={aboutpageImg} // <-- bu rasmni o'zgartiring (masalan image:3 yoki image:6 dan oling)
								alt='Construction team discussing plans'
								className='us-main-photo'
							/>
						</div>

						{/* O'ng taraf: Matn bloki */}
						<div className='us-text-side'>
							<span className='us-small-label'>{t('nav.reviews')}</span>

							<h2 className='us-main-title'>{t('about.believe.title')}</h2>

							<p className='us-description'>{t('about.believe.desc')}</p>

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
		</section>
	)
}

export default About
