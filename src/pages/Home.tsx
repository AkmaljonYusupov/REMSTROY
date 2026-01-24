import { useTranslation } from 'react-i18next'
import './Home.scss'

const Home = () => {
	const { t } = useTranslation()

	return (
		<main className='home'>
			<section className='hero'>
				<div className='hero__overlay' />

				<div className='hero__content'>
					<span className='hero__company'>REMSTROY CONSTRUCTION</span>

					<h1 className='hero__title'>{t('hero.title')}</h1>

					<p className='hero__desc'>{t('hero.desc')}</p>

					<button className='hero__btn'>{t('hero.button')}</button>
				</div>
			</section>

			<section className='features'>
				<div className='feature'>Соответствие стандартам</div>
				<div className='feature'>Соответствие стандартам</div>
				<div className='feature'>Соответствие стандартам</div>
			</section>
		</main>
	)
}

export default Home
