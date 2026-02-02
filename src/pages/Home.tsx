import { useTranslation } from 'react-i18next'
import gearsGif from '../assets/images/1667-yellow-gears.gif'
import AboutImage from '../assets/images/about_company.png'
import sliderImg1 from '../assets/images/slider1.png'
import sliderImg2 from '../assets/images/slider2.avif'
import sliderImg3 from '../assets/images/slider3.webp'
import alarm from '../assets/images/unnamed.png'
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
						<div className='feature' id='feature'>
							<h3 className='feature__title' id='feature__title'>
								{t('features.standard.title')}
							</h3>
							<p className='feature__desc'>{t('features.standard.desc')}</p>
						</div>

						<div className='feature'>
							<img src={alarm} alt='nastroy' />
							<h3 className='feature__title'>{t('features.quality.title')}</h3>
							<p className='feature__desc'>{t('features.quality.desc')}</p>
						</div>

						<div className='feature'>
							<img src={gearsGif} alt='nastroy' />
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
						<h6 className='about__label'>{t('about.label')}</h6>

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

						<div className='about__image'>
							<img src={AboutImage} alt='RSC Construction' />
						</div>
					</div>
				</div>
			</section>
			{/* ================= ADVANTAGES ================= */}
			<section className='advantages'>
				<div className='container'>
					<h2 className='advantages__label'>{t('advantages.label')}</h2>

					<div className='advantages__grid'>
						<div className='advantage'>
							<span className='advantage__num'>01</span>
							<div>
								<h3>{t('advantages.items.1.title')}</h3>
								<p>{t('advantages.items.1.desc')}</p>
							</div>
						</div>

						<div className='advantage'>
							<span className='advantage__num'>04</span>
							<div>
								<h3>{t('advantages.items.4.title')}</h3>
								<p>{t('advantages.items.4.desc')}</p>
							</div>
						</div>

						<div className='advantage'>
							<span className='advantage__num'>02</span>
							<div>
								<h3>{t('advantages.items.2.title')}</h3>
								<p>{t('advantages.items.2.desc')}</p>
							</div>
						</div>

						<div className='advantage'>
							<span className='advantage__num'>05</span>
							<div>
								<h3>{t('advantages.items.5.title')}</h3>
								<p>{t('advantages.items.5.desc')}</p>
							</div>
						</div>

						<div className='advantage'>
							<span className='advantage__num'>03</span>
							<div>
								<h3>{t('advantages.items.3.title')}</h3>
								<p>{t('advantages.items.3.desc')}</p>
							</div>
						</div>

						<div className='advantage'>
							<span className='advantage__num'>06</span>
							<div>
								<h3>{t('advantages.items.6.title')}</h3>
								<p>{t('advantages.items.6.desc')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ================= PROJECTS ================= */}
			<section className='projects'>
				<div className='container'>
					<h2 className='projects__label'>{t('projects.label')}</h2>

					<div className='projects__card'>
						{/* BACKGROUND IMAGE */}
						<img
							src='/src/assets/images/projects-main.webp'
							alt='Projects'
							className='projects__bg'
						/>

						<div className='projects__overlay' />

						{/* LEFT INFO */}
						<div className='projects__left'>
							<h3 className='projects__title'>{t('projects.objects')}</h3>

							<div className='projects__badges'>
								<div className='badge'>
									<strong>10+</strong>
									<span>{t('projects.experience')}</span>
								</div>

								<div className='badge'>
									<strong>150+</strong>
									<span>{t('projects.completed')}</span>
								</div>
							</div>
						</div>

						{/* RIGHT SIDE */}
						<div className='projects__right'>
							<div className='projects__mini'>
								<img src={sliderImg1} alt='Detail1' />
							</div>

							<div className='projects__box'>
								<img src={sliderImg2} alt='Detail2' />
							</div>

							<div className='projects__box'>
								<img src={sliderImg3} alt='Detail3' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
