import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

import projectImg1 from '../assets/images/split_image_1.png'
import projectImg2 from '../assets/images/split_image_2.png'
import projectImg3 from '../assets/images/split_image_3.png'
import projectImg4 from '../assets/images/split_image_4.png'
import projectImg5 from '../assets/images/split_image_5.png'
import projectImg6 from '../assets/images/split_image_6.png'

import './Projects.scss'

function Projects() {
  const { t } = useTranslation()

  // ================= COUNTER LOGIC =================
  const statsRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!visible) return
      let startTime = null
      let animationFrame

      const animate = (time) => {
        if (!startTime) startTime = time
        const progress = time - startTime
        const percent = Math.min(progress / duration, 1)
        setCount(Math.floor(end * percent))
        if (percent < 1) animationFrame = requestAnimationFrame(animate)
        else setCount(end)
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [visible, end, duration])

    return count
  }

  const projectsCount = useCountUp(5698)
  const team = useCountUp(864)
  const coffee = useCountUp(9654)
  const awards = useCountUp(578)

  // ================= PROJECT DATA =================
  const projectsData = [
    { id: 1, key: 'project1', images: [projectImg1, projectImg2, projectImg3] },
    { id: 2, key: 'project2', images: [projectImg4, projectImg5, projectImg6] },
    { id: 3, key: 'project3', images: [projectImg3, projectImg1, projectImg2] },
    { id: 4, key: 'project4', images: [projectImg1, projectImg2, projectImg3] },
    { id: 5, key: 'project5', images: [projectImg2, projectImg1, projectImg3] },
    { id: 6, key: 'project6', images: [projectImg3, projectImg2, projectImg1] },
  ]

  // ================= MODAL STATE =================
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
    setIsZoomed(false)
  }

  const nextSlide = () => {
    if (!selectedProject) return
    setCurrentSlide((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    if (!selectedProject) return
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  useEffect(() => setCurrentSlide(0), [selectedProject])

  // AUTO SLIDE
  useEffect(() => {
    if (!selectedProject) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [selectedProject, currentSlide])

  // KEYBOARD NAV
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedProject) return
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedProject])

  // SWIPE
  let touchStartX = 0
  const handleTouchStart = (e) => (touchStartX = e.changedTouches[0].screenX)
  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX
    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
  }

  return (
    <section className="about-page">

      {/* HERO + BREADCRUMB */}
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
            <span className="breadcrumb-link active">
              {t('projects.projectsjoyiy')}
            </span>
          </div>
        </div>
      </div>

      {/* LATEST PROJECTS */}
      <div className="latest-projects">
        <div className="container">
          <div className="projects-header">
            <span className="projects-small-label">{t('projects.workWeHaveDone')}</span>
            <h2 className="projects-main-title">{t('projects.ourLatestProjects')}</h2>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <div
                className="project-card"
                key={project.id}
                onClick={() => openModal(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image-wrapper">
                  <img src={project.images[0]} alt="Project" className="project-image" />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{t(`projects.${project.key}.title`)}</h3>
                  <p className="project-desc">{t(`projects.${project.key}.desc`)}</p>
                  <span className="read-more-btn">{t('projects.readMore')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal glass" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>

              <div
                className="modal-slider"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <button className="slider-btn left" onClick={prevSlide}>‹</button>

                <img
                  src={selectedProject.images[currentSlide]}
                  alt="Project Slide"
                  className={`modal-image ${isZoomed ? 'zoomed' : ''}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                <button className="slider-btn right" onClick={nextSlide}>›</button>

                <div className="slider-dots">
                  {selectedProject.images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>

              <h3>{t(`projects.${selectedProject.key}.title`)}</h3>
              <p>{t(`projects.${selectedProject.key}.fullDesc`)}</p>
            </div>
          </div>
        )}
      </div>

      {/* STATISTICS */}
      <div className='about-stats' ref={statsRef}>
        <div className='stats-overlay'>
          <div className='container'>
            <div className='stats-grid'>
              <div className='stat-card'>
                <h3>{projectsCount.toLocaleString()}+</h3>
                <p>{t('about.stats.projects')}</p>
              </div>
              <div className='stat-card'>
                <h3>{team.toLocaleString()}+</h3>
                <p>{t('about.stats.team')}</p>
              </div>
              <div className='stat-card'>
                <h3>{coffee.toLocaleString()}+</h3>
                <p>{t('about.stats.coffee')}</p>
              </div>
              <div className='stat-card'>
                <h3>{awards.toLocaleString()}+</h3>
                <p>{t('about.stats.awards')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='cta-section'>
        <div className="cta-decorations">
          <div className="cta-bg-left"></div>
          <div className="cta-bg-right"></div>
          <div className="cta-shape shape-1"></div>
          <div className="cta-shape shape-2"></div>
          <div className="cta-shape shape-3"></div>
          <div className="cta-shape shape-4"></div>
          <div className="cta-shape shape-5"></div>
          <div className="cta-shape shape-6"></div>
        </div>

        <div className='container'>
          <div className='cta-header'>
            <span className='cta-subtitle'>{t('about.cta.small')}</span>
            <h2 className='cta-title'>{t('about.cta.title')}</h2>
            <p className='cta-text'>{t('about.cta.text')}</p>
            <button className='cta-button'>{t('about.cta.button')}</button>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className='about-map'>
        <div className='map-frame'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.893932426892!2d69.33107757572047!3d41.31117100071977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50327e60f73%3A0x671d676293ffbc9!2z0YPQu9C40YbQsCDQn9Cw0YDQutC10L3RgtGB0LrQsNGPLCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1771122502240!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Melbourne Office Location"
          ></iframe>
        </div>
      </div>

    </section>
  )
}

export default Projects