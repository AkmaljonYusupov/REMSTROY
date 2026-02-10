import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import './Header.scss'

import CloseIcon from '../../assets/icons/close.svg?react'
import EngFlag from '../../assets/icons/eng.svg?react'
import RuFlag from '../../assets/icons/ru.svg?react'
import UzFlag from '../../assets/icons/uz.svg?react'
import Logo from '../../assets/images/logo.png'

const Header = () => {
	const { i18n, t } = useTranslation()
	const [open, setOpen] = useState(false)
	const [lang, setLang] = useState<'uz' | 'ru'>('uz')
	const [langMenu, setLangMenu] = useState(false)
	const langRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const savedLang = localStorage.getItem('lang') as 'uz' | 'ru'
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

	const changeLang = (newLang: 'uz' | 'ru') => {
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
					{/* NAV + LOGO */}
					<nav className='nav'>
						<NavLink to='/' className='logo'>
							<img src={Logo} alt='Logo' />
						</NavLink>
						<NavLink to='/projects'>{t('nav.projects')}</NavLink>
						<NavLink to='/about'>{t('nav.about')}</NavLink>
						<NavLink to='/reviews'>{t('nav.reviews')}</NavLink>
						<NavLink to='/news'>{t('nav.news')}</NavLink>
					</nav>

					<div className='actions'>
						{/* LANGUAGE */}
						<div className='lang' ref={langRef}>
							<button
								className='current-lang'
								onClick={() => setLangMenu(!langMenu)}
							>
								{lang === 'uz' ? (
									<UzFlag width={24} height={16} />
								) : lang === 'ru' ? (
									<RuFlag width={24} height={16} />
								) : (
									<EngFlag width={24} height={16} />
								)}

								<span>{lang.toUpperCase()}</span>
							</button>
							<ul className={`lang-dropdown ${langMenu ? 'show' : ''}`}>
								<li onClick={() => changeLang('uz')}>
									<UzFlag width={24} height={16} /> O‘zbekcha
								</li>
								<li onClick={() => changeLang('ru')}>
									<RuFlag width={24} height={16} /> Русский
								</li>
								<li onClick={() => changeLang('eng')}>
									<EngFlag width={24} height={16} /> English
								</li>
							</ul>
						</div>

						{/* USER ICON */}
						{/* <div className='user'>
							<UserIcon width={24} height={24} />
						</div> */}

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

			<aside className={`offcanvas ${open ? 'open' : ''}`}>
				{/* Header */}
				<div className='offcanvas__header'>
					<span>Menu</span>
					<CloseIcon
						width={24}
						height={24}
						onClick={() => setOpen(false)}
						style={{ cursor: 'pointer' }}
					/>
				</div>

				{/* Nav Links */}
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

				{/* Language Buttons */}
				<div className='offcanvas__lang'>
					<button onClick={() => changeLang('uz')}>
						<UzFlag width={20} height={14} /> uzek
					</button>
					<button onClick={() => changeLang('ru')}>
						<RuFlag width={20} height={14} /> Russian
					</button>
					<button onClick={() => changeLang('eng')}>
						<EngFlag width={20} height={14} /> English
					</button>
				</div>
			</aside>
		</>
	)
}

export default Header
