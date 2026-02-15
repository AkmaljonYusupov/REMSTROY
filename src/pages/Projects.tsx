import { useTranslation } from 'react-i18next'


import './Projects.scss'

function Projects() {
	const { t } = useTranslation()

	return (
		<section className="about-page">
			{/* HERO */}
			<div className="about-hero">
				<div className="container">
					<h1 className="about-title">{t('projects.projectsjoyiy')}</h1>
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
							{t('projects.projectsjoyiy')}
						</span>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Projects