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
							Соответствие стандартам
							<div className='feature__desc'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>

						<div className='feature'>
							Гарантия качества
							<div className='feature__desc'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>

						<div className='feature'>
							Современные технологии
							<div className='feature__desc'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
