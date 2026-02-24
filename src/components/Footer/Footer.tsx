import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import './Footer.scss'

function Footer() {
	const { t, i18n } = useTranslation()
	const location = useLocation()
	const currentYear = new Date().getFullYear()

	const [phone, setPhone] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')
	const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	// Xabarni 5 soniyadan keyin o'chirish
	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage('')
				setMessageType('')
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [message])

	const sendToTelegram = async () => {
		if (!phone.trim()) {
			setMessage(t('footer.error'))
			setMessageType('error')
			return
		}

		setLoading(true)
		setMessage('')
		setMessageType('')

		try {
			const BOT_API_TOKEN = "7539744657:AAGDnXeMk5Ylu8GNTU8vd9-68Zqv7kxSOHE"
			const CHAT_ID = "630353326"

			const text = `
📞 New Request (footer section)
🌐 Language: ${i18n.language.toUpperCase()}
📱 Phone: ${phone}
🕒 Time: ${new Date().toLocaleString()}
`

			const response = await fetch(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text,
				}),
			})

			if (!response.ok) throw new Error('Telegram API error')

			setMessage(t('footer.success'))
			setMessageType('success')
			setPhone('')
		} catch (error) {
			console.error(error)
			setMessage(t('footer.error') || 'Xatolik yuz berdi. Qayta urinib ko‘ring.')
			setMessageType('error')
		} finally {
			setLoading(false)
		}
	}

	return (
		<footer className='footer'>
			<div className='container footer__wrapper'>

				{/* LEFT CARD */}
				<div className='footer__left'>
					<div className='footer__card'>
						<h3 className='footer__logo'>
							RSC<br /><span>CONSTRUCTION</span>
						</h3>

						<h4 className='footer__card-title'>{t('footer.request')}</h4>
						<p className='footer__card-desc'>{t('footer.requestDesc')}</p>

						<label className='footer__label'>{t('footer.phonePlaceholder')}</label>

						<input
							type='tel'
							className='footer__input'
							placeholder='+998 90 123 45 67'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>

						<button
							className='footer__btn'
							onClick={sendToTelegram}
							disabled={loading}
						>
							{loading ? <span className='btn-loader'></span> : t('footer.send')}
						</button>

						{/* Xabar turi bo'yicha icon qo'shish */}
						{message && (
							<p className={`footer__message ${messageType}`}>
								{messageType === 'success' ? '✅' : '❌'} {message}
							</p>
						)}
					</div>
				</div>

				{/* RIGHT */}
				<div className='footer__right'>
					<nav className='footer__nav'>
						<NavLink to='/'>{t('nav.home')}</NavLink>
						<NavLink to='/projects'>{t('nav.project')}</NavLink>
						<NavLink to='/about'>{t('nav.about')}</NavLink>
						<NavLink to='/contact'>{t('nav.contact')}</NavLink>
					</nav>

					<div className='footer__info'>
						<div className='footer__item'>
							<h4>{t('footer.contact')}</h4>
							<a href='tel:+998939009959'>+998 93 900 99 59</a>
							<a href='mailto:info@webera.uz'>info@webera.uz</a>
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
							<a href='#' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a>
							<a href='#' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
							<a href='#' target='_blank' rel='noopener noreferrer'><i className='fab fa-telegram-plane'></i></a>
						</div>
						<p>Copyright © {currentYear} RSC Construction. {t('footer.rights')}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer