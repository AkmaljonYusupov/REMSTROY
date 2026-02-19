import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import './Footer.scss'

function Footer() {
	const { t } = useTranslation()
	const location = useLocation()
	const currentYear = new Date().getFullYear()

	/* ✅ ROUTE O'ZGARGANDA TEPADAN OCHILSIN */
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<footer className='footer'>
			<div className='container footer__wrapper'>

				{/* LEFT CARD */}
				<div className='footer__left'>
					<div className='footer__card'>
						<h3 className='footer__logo'>
							RSC
							<br />
							<span>CONSTRUCTION</span>
						</h3>

						<h4 className='footer__card-title'>{t('footer.request')}</h4>
						<p className='footer__card-desc'>{t('footer.requestDesc')}</p>

						<label className='footer__label'>
							{t('footer.phonePlaceholder')}
						</label>

						<input type='tel' />
						<button className='footer__btn'>{t('footer.send')}</button>
					</div>
				</div>

				{/* RIGHT */}
				<div className='footer__right'>

					{/* ✅ NAVIGATION FIXED */}
					<nav className='footer__nav'>
						<NavLink to='/'>{t('nav.home')}</NavLink>
						<NavLink to='/projects'>{t('nav.project')}</NavLink>
						<NavLink to='/about'>{t('nav.about')}</NavLink>
						<NavLink to='/contact'>{t('nav.contact')}</NavLink>
					</nav>

					<div className='footer__info'>
						<div className='footer__item'>
							<h4>{t('footer.contact')}</h4>

							<a href='tel:+998939009959'>
								+998 93 900 99 59
							</a>

							<a href='mailto:info@webera.uz'>
								info@webera.uz
							</a>
						</div>

						<div className='footer__line' />

						<div className='footer__item'>
							<h4>{t('footer.address')}</h4>
							<p>{t('footer.addressValue')}</p>
						</div>

						<div className='footer__line' />

						<div className='footer__item'>
							<h4>{t('footer.worktime')}</h4>
							<p>{t('footer.worktimeValue')}</p>
						</div>
					</div>

					<div className='footer__bottom'>
						<div className='footer__socials'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-instagram'></i>
							</a>

							<a href='#' target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-telegram-plane'></i>
							</a>

						</div>

						<p>
							Copyright © {currentYear} RSC Construction. {t('footer.rights')}
						</p>
					</div>

				</div>
			</div>
		</footer>
	)
}

export default Footer
