import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { partners } from '../data/partners'

import gearsGif from '../assets/images/1667-yellow-gears.gif'
import AboutImage from '../assets/images/about_company.png'

import newsImg from '../assets/images/news-main.png'
import sliderImg1 from '../assets/images/split_image_1.png'
import sliderImg10 from '../assets/images/split_image_10.png'
import sliderImg11 from '../assets/images/split_image_11.png'
import sliderImg2 from '../assets/images/split_image_2.png'
import sliderImg3 from '../assets/images/split_image_3.png'
import sliderImg4 from '../assets/images/split_image_4.png'
import sliderImg5 from '../assets/images/split_image_5.png'
import sliderImg6 from '../assets/images/split_image_6.png'
import sliderImg7 from '../assets/images/split_image_7.png'
import sliderImg8 from '../assets/images/split_image_8.png'
import sliderImg9 from '../assets/images/split_image_9.png'


import alarm from '../assets/images/unnamed.png'
import './Home.scss'

const Home = () => {
	const { t } = useTranslation()

	// ================= PROJECTS SLIDER =================
	// IMAGE GROUPS
	const projectImages1 = [sliderImg1, sliderImg2, sliderImg3, sliderImg4]
	const projectImages2 = [sliderImg5, sliderImg6, sliderImg7, sliderImg8]
	const projectImages3 = [sliderImg9, sliderImg10, sliderImg1, sliderImg2]
	const projectImages4 = [sliderImg3, sliderImg4, sliderImg5, sliderImg11]

	// STATES
	const [activeIndex1, setActiveIndex1] = useState(0)
	const [activeIndex2, setActiveIndex2] = useState(0)
	const [activeIndex3, setActiveIndex3] = useState(0)
	const [activeIndex4, setActiveIndex4] = useState(0)

	// AUTO SLIDERS
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex1(prev => (prev + 1) % projectImages1.length)
		}, 4500)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex2(prev => (prev + 1) % projectImages2.length)
		}, 4500)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex3(prev => (prev + 1) % projectImages3.length)
		}, 4500)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex4(prev => (prev + 1) % projectImages4.length)
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
							<p className='feature__desc'>{t('features.standard.desc')}
							</p>
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
							<p className='about__text'>{t('about.text')}
								<p>
									<span className='check-mark'>✔</span>
									{t('about.textNested1')}
								</p>
								<p>
									<span className='check-mark'>✔</span>
									{t('about.textNested2')}
								</p>
							</p>

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

			{/* ================= PROJECTS 1 ================= */}
			<section className='projects'>
				<div className='container'>
					<h2 className='projects__label'>{t('projects.label')}</h2>

					<div className='projects__card'>
						{/* SLIDER BACKGROUND */}
						<img
							key={activeIndex1}
							src={projectImages1[activeIndex1]}
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
							{projectImages1.map((img, index) => (
								<div
									key={index}
									className={`projects__box ${activeIndex1 === index ? 'is-active' : ''
										}`}
									onClick={() => setActiveIndex1(index)}
								>
									<img src={img} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* ================= PROJECTS 2 ================= */}
			<section className='projects'>
				<div className='container'>
					{/* <h2 className='projects__label'>{t('projects.label')}</h2> */}

					<div className='projects__card'>
						{/* SLIDER BACKGROUND */}
						<img
							key={activeIndex2}
							src={projectImages2[activeIndex2]}
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
							{projectImages2.map((img, index) => (
								<div
									key={index}
									className={`projects__box ${activeIndex2 === index ? 'is-active' : ''
										}`}
									onClick={() => setActiveIndex2(index)}
								>
									<img src={img} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* ================= PROJECTS 3 ================= */}
			<section className='projects'>
				<div className='container'>
					{/* <h2 className='projects__label'>{t('projects.label')}</h2> */}

					<div className='projects__card'>
						{/* SLIDER BACKGROUND */}
						<img
							key={activeIndex3}
							src={projectImages3[activeIndex3]}
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
							{projectImages3.map((img, index) => (
								<div
									key={index}
									className={`projects__box ${activeIndex3 === index ? 'is-active' : ''
										}`}
									onClick={() => setActiveIndex3(index)}
								>
									<img src={img} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* ================= PROJECTS 4 ================= */}
			<section className='projects'>
				<div className='container'>
					{/* <h2 className='projects__label'>{t('projects.label')}</h2> */}

					<div className='projects__card'>
						{/* SLIDER BACKGROUND */}
						<img
							key={activeIndex4}
							src={projectImages4[activeIndex4]}
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
							{projectImages4.map((img, index) => (
								<div
									key={index}
									className={`projects__box ${activeIndex4 === index ? 'is-active' : ''
										}`}
									onClick={() => setActiveIndex4(index)}
								>
									<img src={img} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>


			{/* ================= PARTNERS ================= */}
			<section className='partners-section'>
				<div className='container'>
					<h2 className='partners-title'>{t('partners.title')}</h2>

					<div className='partners-grid'>
						{partners.map((item, index) => (
							<div className='partner-item' key={index}>
								<img src={item.logo} alt={t(item.name)} />
							</div>
						))}
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
							<video
								src='/videos/news-video.mp4'
								controls
								autoPlay
								muted
								loop
								playsInline
							/>
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
