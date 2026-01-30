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
		</main>
	)
}

export default Home
