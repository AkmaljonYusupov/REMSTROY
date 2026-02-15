import { AlertCircle, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import contactImage from '../../src/assets/images/contact-laptop.jpg'
import aboutCartimg1 from '../assets/icons/contact-icon1.png'
import aboutCartimg2 from '../assets/icons/contact-icon2.png'
import aboutCartimg3 from '../assets/icons/contact-icon3.png'

import './Contact.scss'

function Contact() {
	const { t } = useTranslation()

	// Form holatlari
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
	})

	const [isLoading, setIsLoading] = useState(false)
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [message, setMessage] = useState('')

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isLoading) return

		setIsLoading(true)
		setStatus('idle')
		setMessage('')

		try {
			// Telegram Bot ma'lumotlari
			const botToken = '7539744657:AAGDnXeMk5Ylu8GNTU8vd9-68Zqv7kxSOHE'
			const chatId = '630353326'

			if (!botToken || !chatId) {
				throw new Error('Bot token yoki chat ID topilmadi')
			}

			const textMessage = `
📩 Yangi xabar (kontakt formasidan):

👤 Ism: ${formData.name || 'ko‘rsatilmagan'}
📱 Telefon: ${formData.phone || 'ko‘rsatilmagan'}
✉️ Email: ${formData.email || 'ko‘rsatilmagan'}

💬 Xabar:
${formData.message || 'bo‘sh'}

🕒 Vaqt: ${new Date().toLocaleString('uz-UZ')}
      `.trim()

			const url = `https://api.telegram.org/bot${botToken}/sendMessage`

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: textMessage,
					parse_mode: 'HTML',
				}),
			})

			const data = await response.json()

			if (!response.ok || !data.ok) {
				throw new Error(data.description || 'Telegramga yuborishda xato')
			}

			setStatus('success')
			setMessage(t('contact.form.successMessage') || 'Xabaringiz muvaffaqiyatli yuborildi!')

			// Formani tozalash
			setFormData({
				name: '',
				phone: '',
				email: '',
				message: '',
			})
		} catch (err) {
			console.error('Xato:', err)
			setStatus('error')
			setMessage(
				t('contact.form.errorMessage') ||
				'Xabar yuborishda xatolik yuz berdi. Iltimos qayta urinib ko‘ring.'
			)
		} finally {
			setIsLoading(false)
		}
	}

	// 5 soniyadan keyin status xabari o‘chishi
	useEffect(() => {
		let timer: NodeJS.Timeout | null = null

		if (status === 'success' || status === 'error') {
			timer = setTimeout(() => {
				setStatus('idle')
				setMessage('')
			}, 5000) // 5 sekund
		}

		// Cleanup
		return () => {
			if (timer) clearTimeout(timer)
		}
	}, [status])

	return (
		<section className="about-page">
			{/* HERO */}
			<div className="about-hero">
				<div className="container">
					<h1 className="about-title">{t('contact.contactjoyiy')}</h1>
					<div className="breadcrumb">
						<span
							className="breadcrumb-link"
							onClick={() => (window.location.href = '/')}
						>
							{t('contact.home')}
						</span>
						<span className="arrow">→</span>
						<span
							className={`breadcrumb-link ${window.location.pathname === '/contact' ? 'active' : ''
								}`}
							onClick={() => (window.location.href = '/contact')}
						>
							{t('contact.contactjoyiy')}
						</span>
					</div>
				</div>
			</div>

			{/* FEATURES (kartalar) */}
			<div className="about-features">
				<div className="container">
					<div className="features-grid">
						<div className="feature-card">
							<img
								src={aboutCartimg1}
								alt="Manzil"
								style={{ objectFit: 'contain' }}
							/>
							<h3>{t('contact.card1.title')}</h3>
							<a
								href="https://maps.app.goo.gl/YvHgNQ4uP8pkiefx5"
								className="contact-link"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: 'none',
									fontWeight: '600',
									fontSize: '18px',
								}}
							>
								{t('contact.card1.text')}
							</a>
						</div>

						<div className="feature-card">
							<img
								src={aboutCartimg2}
								alt="Telefon"
								style={{ objectFit: 'contain' }}
							/>
							<h3>{t('contact.card2.title')}</h3>
							<a
								href="tel:+998901234567"
								className="contact-link"
								style={{
									textDecoration: 'none',
									fontWeight: '600',
									fontSize: '18px',
								}}
							>
								{t('contact.card2.text')}
							</a>
						</div>

						<div className="feature-card">
							<img
								src={aboutCartimg3}
								alt="Email"
								style={{ objectFit: 'contain' }}
							/>
							<h3>{t('contact.card3.title')}</h3>
							<a
								href="mailto:info@yourcompany.com"
								className="contact-link"
								style={{
									textDecoration: 'none',
									fontWeight: '600',
									fontSize: '18px',
								}}
							>
								{t('contact.card3.text')}
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* CONTACT FORM SECTION */}
			<div className="contact-form-section">
				<div className="container">
					<div className="form-grid">
						{/* Chap taraf – rasm */}
						<div className="form-image-side">
							<div className="image-wrapper">
								<img
									src={contactImage}
									alt="Person typing on laptop"
									className="form-main-image"
								/>
								<div className="image-overlay">
									<span className="get-in-touch-label">
										{t('contact.getInTouch')}
									</span>
									<h2 className="form-main-title">{t('contact.sendMessage')}</h2>
								</div>
							</div>
						</div>

						{/* O‘ng taraf – forma */}
						<div className="form-text-side">
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">{t('contact.form.name')}</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder={t('contact.form.namePlaceholder')}
										required
										disabled={isLoading}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone">{t('contact.form.phone')}</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										placeholder={t('contact.form.phonePlaceholder')}
										disabled={isLoading}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">{t('contact.form.email')}</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder={t('contact.form.emailPlaceholder')}
										required
										disabled={isLoading}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="message">{t('contact.form.message')}</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={5}
										placeholder={t('contact.form.messagePlaceholder')}
										required
										disabled={isLoading}
									/>
								</div>

								{/* Status xabarlari – ikonka bilan */}
								{status === 'success' && (
									<div className="form-success">
										<CheckCircle size={20} /> {message}
									</div>
								)}
								{status === 'error' && (
									<div className="form-error">
										<AlertCircle size={20} /> {message}
									</div>
								)}

								<button
									type="submit"
									className="submit-btn"
									disabled={isLoading}
								>
									{isLoading ? (
										<>
											<span className="loading-spinner" />{' '}
											{t('contact.form.sending') || 'Yuborilmoqda...'}
										</>
									) : (
										t('contact.form.submit')
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* MAP SECTION */}
			<div className="about-map">
				<div className="map-frame">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.893932426892!2d69.33107757572047!3d41.31117100071977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50327e60f73%3A0x671d676293ffbc9!2z0YPQu9C40YbQsCDQn9Cw0YDQutC10L3RgtGB0LrQsNGPLCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1771122502240!5m2!1sru!2s"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Office Location"
					></iframe>
				</div>
			</div>
		</section>
	)
}

export default Contact