import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import closeIcon from '/src/assets/icons/close.svg'
import ruFlag from '/src/assets/icons/ru.svg'
import userIcon from '/src/assets/icons/user.svg'
import uzFlag from '/src/assets/icons/uz.svg'

const Header = () => {
	const { i18n, t } = useTranslation()
	const [open, setOpen] = useState(false)
	const [lang, setLang] = useState<'uzb' | 'ru'>('uzb')
	const [langMenu, setLangMenu] = useState(false)
	const langRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const savedLang = localStorage.getItem('lang') as 'uzb' | 'ru'
		if (savedLang) {
			setLang(savedLang)
			i18n.changeLanguage(savedLang)
		}

		const handleClickOutside = (e: MouseEvent) => {
			if (langRef.current && !langRef.current.contains(e.target as Node)) {
				setLangMenu(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [i18n])

	const changeLang = (newLang: 'uzb' | 'ru') => {
		setLang(newLang)
		i18n.changeLanguage(newLang)
		localStorage.setItem('lang', newLang)
		setLangMenu(false)
		setOpen(false)
	}

	return (
		<>
			<header className='header'>
				<div className='header__inner'>
					{/* NAV – desktop only */}
					<nav className='nav'>
						<NavLink to='/projects'>{t('nav.projects')}</NavLink>
						<NavLink to='/about'>{t('nav.about')}</NavLink>
						<NavLink to='/reviews'>{t('nav.reviews')}</NavLink>
						<NavLink to='/news'>{t('nav.news')}</NavLink>
					</nav>

					<div className='actions'>
						{/* LANGUAGE – always visible */}
						<div className='lang' ref={langRef}>
							<button
								className='current-lang'
								onClick={() => setLangMenu(!langMenu)}
							>
								<img
									src={lang === 'uzb' ? uzFlag : ruFlag}
									alt={lang.toUpperCase()}
								/>
								<span>{lang.toUpperCase()}</span>
							</button>

							{/* Doim render qilinadi, faqat class bilan ko‘rinadi */}
							<ul className={`lang-dropdown ${langMenu ? 'show' : ''}`}>
								<li onClick={() => changeLang('uzb')}>
									<img src={uzFlag} alt='Uzbek' /> O‘zbekcha
								</li>
								<li onClick={() => changeLang('ru')}>
									<img src={ruFlag} alt='Russian' /> Русский
								</li>
							</ul>
						</div>
						{/* USER ICON */}
						<div className='user'>
							<img src={userIcon} alt='user' />
						</div>

						{/* BURGER */}
						<button className='burger' onClick={() => setOpen(true)}>
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>
			</header>

			{/* OVERLAY */}
			<div
				className={`overlay ${open ? 'show' : ''}`}
				onClick={() => setOpen(false)}
			/>

			{/* OFF-CANVAS */}
			<aside className={`offcanvas ${open ? 'open' : ''}`}>
				<div className='offcanvas__header'>
					<span>Menu</span>
					<img src={closeIcon} onClick={() => setOpen(false)} />
				</div>

				<nav className='offcanvas__nav'>
					<NavLink to='/projects' onClick={() => setOpen(false)}>
						{t('nav.projects')}
					</NavLink>
					<NavLink to='/about' onClick={() => setOpen(false)}>
						{t('nav.about')}
					</NavLink>
					<NavLink to='/reviews' onClick={() => setOpen(false)}>
						{t('nav.reviews')}
					</NavLink>
					<NavLink to='/news' onClick={() => setOpen(false)}>
						{t('nav.news')}
					</NavLink>
				</nav>

				<div className='offcanvas__lang'>
					<button onClick={() => changeLang('uzb')}>
						<img src={uzFlag} /> Uzbek
					</button>
					<button onClick={() => changeLang('ru')}>
						<img src={ruFlag} /> Russian
					</button>
				</div>
			</aside>
		</>
	)
}

export default Header
