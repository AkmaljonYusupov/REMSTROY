import { useTranslation } from 'react-i18next'
import './Home.scss'

const Home = () => {
	const { t } = useTranslation()

	return (
		<main className='home'>
			{/* ================= HERO ================= */}
			<section className='hero'>
				<div className='hero__overlay' />

				<div className='container'>
					<div className='hero__content'>
						<span className='hero__company'>REMSTROY CONSTRUCTION</span>

						<h1 className='hero__title'>{t('hero.title')}</h1>

						<p className='hero__desc'>{t('hero.desc')}</p>

						<button className='hero__btn'>{t('hero.button')}</button>
					</div>
				</div>
			</section>

			{/* ================= FEATURES ================= */}
			<section className='features-wrapper'>
				<div className='container'>
					<div className='features'>
						<div className='feature'>
							<h3 className='feature__title'>{t('features.standard.title')}</h3>
							<p className='feature__desc'>{t('features.standard.desc')}</p>
						</div>

						<div className='feature'>
							<h3 className='feature__title'>{t('features.quality.title')}</h3>
							<p className='feature__desc'>{t('features.quality.desc')}</p>
						</div>

						<div className='feature'>
							<h3 className='feature__title'>{t('features.tech.title')}</h3>
							<p className='feature__desc'>{t('features.tech.desc')}</p>
						</div>
					</div>
				</div>
			</section>
			{/* ================= ABOUT ================= */}
			<section className='about'>
				<div className='container'>
					<div className='about__wrapper'>
						{/* LEGEND */}
						<h6 className='about__label'>{t('about.label')}</h6>

						{/* LEFT */}
						<div className='about__content'>
							<h2 className='about__title'>{t('about.title')}</h2>

							<p className='about__text'>{t('about.text')}</p>

							<div className='about__stats'>
								<div className='about__stat'>
									<span>{t('about.stat1.value')}</span>
									<p>{t('about.stat1.label')}</p>
								</div>

								<div className='about__stat'>
									<span>{t('about.stat2.value')}</span>
									<p>{t('about.stat2.label')}</p>
								</div>
							</div>
						</div>

						{/* RIGHT */}
						<div className='about__image'>
							<img
								src='../assets/images/about_company.png'
								alt='RSC Construction'
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
