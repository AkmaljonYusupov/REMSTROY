import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import gearsGif from '../assets/images/1667-yellow-gears.gif'
import AboutImage from '../assets/images/about_company.png'

import newsImg from '../assets/images/news-main.png'
import bgSlider from '../assets/images/projects-main.webp'
import sliderImg1 from '../assets/images/slider1.png'
import sliderImg2 from '../assets/images/slider2.avif'
import sliderImg3 from '../assets/images/slider3.webp'

import alarm from '../assets/images/unnamed.png'
import './Home.scss'

const Home = () => {
	const { t } = useTranslation()

	// ================= PROJECTS SLIDER =================
	const projectImages = [bgSlider, sliderImg1, sliderImg2, sliderImg3]
	const [activeIndex, setActiveIndex] = useState(0)

	// AUTO SLIDER (responsive uchun)
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prev => (prev + 1) % projectImages.length)
		}, 4500)

		return () => clearInterval(interval)
	}, [])

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
							<img src={alarm} alt='alarm' />
							<h3 className='feature__title'>{t('features.quality.title')}</h3>
							<p className='feature__desc'>{t('features.quality.desc')}</p>
						</div>

						<div className='feature'>
							<img src={gearsGif} alt='gears' />
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
							<img src={AboutImage} alt='About' />
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
						{/* SLIDER BACKGROUND */}
						<img
							key={activeIndex}
							src={projectImages[activeIndex]}
							alt='Projects'
							className='projects__bg projects__bg--animate'
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

						{/* RIGHT SIDE (CONTROLS SLIDER) */}
						<div className='projects__right'>
							{projectImages.slice(1).map((img, index) => (
								<div
									key={index}
									className={`projects__box ${
										activeIndex === index + 1 ? 'is-active' : ''
									}`}
									onClick={() => setActiveIndex(index + 1)}
								>
									<img src={img} alt={`Detail ${index + 1}`} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ================= REVIEWS ================= */}
			<section className='reviews'>
				<div className='container'>
					<h2 className='reviews__title'>{t('reviews.title')}</h2>
					<p className='reviews__subtitle'>{t('reviews.subtitle')}</p>

					<div className='reviews__grid'>
						{/* Review 1 */}
						<div className='review'>
							<div className='review__stars'>★★★★★</div>
							<p className='review__text'>{t('reviews.items.1.text')}</p>
							<h4 className='review__author'>{t('reviews.items.1.author')}</h4>
						</div>

						<div className='review__divider' />

						{/* Review 2 */}
						<div className='review'>
							<div className='review__stars'>★★★★★</div>
							<p className='review__text'>{t('reviews.items.2.text')}</p>
							<h4 className='review__author'>{t('reviews.items.2.author')}</h4>
						</div>

						<div className='review__divider' />

						{/* Review 3 */}
						<div className='review'>
							<div className='review__stars'>★★★★★</div>
							<p className='review__text'>{t('reviews.items.3.text')}</p>
							<h4 className='review__author'>{t('reviews.items.3.author')}</h4>
						</div>
					</div>
				</div>
			</section>

			{/* ================= NEWS ================= */}
			<section className='news'>
				<div className='container news__wrapper'>
					{/* LEFT */}
					<div className='news__left'>
						<span className='news__label'>{t('news.label')}</span>

						<h2 className='news__title'>{t('news.title')}</h2>

						<p className='news__desc'>{t('news.desc')}</p>

						<div className='news__video'>
							{/* <video
								src={nevsVideo}
								controls
								preload='metadata'
								poster='/images/news-video-poster.jpg'
							/> */}
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/ijC99D2Maa0?si=rucewdJ86utlC8rf&amp;start=1'
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerpolicy='strict-origin-when-cross-origin'
								allowfullscreen
							></iframe>
						</div>
					</div>

					{/* RIGHT */}
					<div className='news__right'>
						<div className='news__image'>
							<img src={newsImg} alt='construction' />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
