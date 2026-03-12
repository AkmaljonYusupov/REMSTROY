import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom"

import projectImg0100 from '../assets/images/projectImg010.png'
import projectImg0110 from '../assets/images/projectImg0110.jpg'
import projectImg0120 from '../assets/images/projectImg0120.jpg'
import projectImg0130 from '../assets/images/projectImg0130.png'
import projectImg0140 from '../assets/images/projectImg0140.jpg'
import projectImg0150 from '../assets/images/projectImg0150.jpg'
import projectImg02 from '../assets/images/projectImg02.png'
import projectImg03 from '../assets/images/projectImg03.png'
import projectImg04 from '../assets/images/projectImg04.png'
import projectImg05 from '../assets/images/projectImg05.png'
import projectImg06 from '../assets/images/projectImg06.png'
import projectImg07 from '../assets/images/projectImg07.png'
import projectImg08 from '../assets/images/projectImg08.png'
import projectImg09 from '../assets/images/projectImg09.png'
import projectImg110 from '../assets/images/projectImg110.jpg'
import projectImg012 from '../assets/images/split_image_006.png'
import projectImg013 from '../assets/images/split_image_007.png'
import projectImg010 from '../assets/images/split_image_06.png'
import projectImg011 from '../assets/images/split_image_07.png'

import projectImg000011 from '../assets/images/Screenshot_1.png'
import projectImg00001100 from '../assets/images/split_image_00015.png'
import projectImg0000110 from '../assets/images/split_image_0015.png'
import projectImg1 from '../assets/images/split_image_1.png'
import projectImg11 from '../assets/images/split_image_11.png'
import projectImg120 from '../assets/images/split_image_110.png'
import projectImg0000011 from '../assets/images/split_image_15.png'
import projectImg2 from '../assets/images/split_image_2.png'
import projectImg000010 from '../assets/images/split_image_20.jpg'
import projectImg000012 from '../assets/images/split_image_21.jpg'
import projectImg3 from '../assets/images/split_image_3.png'
import projectImg4 from '../assets/images/split_image_4.png'
import projectImg5 from '../assets/images/split_image_5.png'
import projectImg6 from '../assets/images/split_image_6.png'
import projectImg01200 from '../assets/images/split_image_9.png'
import './Projects.scss'

function Projects() {
  const { t, i18n } = useTranslation()

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
  const navigate = useNavigate();
  const projectsData = [
    {
      id: 1,
      key: 'project1',
      images: [projectImg1, projectImg02, projectImg03],
      cost: "$1.725 mln",
      year: "2024"
    },
    {
      id: 2,
      key: 'project2',
      images: [projectImg2, projectImg04, projectImg05],
      cost: "$1.725 mln",
      year: "2024"
    },
    {
      id: 3,
      key: 'project3',
      images: [projectImg3, projectImg06, projectImg07],
      cost: "$700.000",
      year: "2014"
    },
    {
      id: 4,
      key: 'project4',
      images: [projectImg4, projectImg08, projectImg09],
      cost: "$1.725 mln",
      year: "2024"
    },
    {
      id: 5,
      key: 'project5',
      images: [projectImg010, projectImg5, projectImg011],
      cost: "$12 mln",
      year: "2020"
    },
    {
      id: 6,
      key: 'project6',
      images: [projectImg012, projectImg6, projectImg013],
      cost: "$8 mln",
      year: "2019"
    },
    {
      id: 7,
      key: 'project7',
      images: [projectImg0100, projectImg0110, projectImg0120],
      cost: "$3.5 mln",
      year: "2019"
    },
    {
      id: 8,
      key: 'project8',
      images: [projectImg0130, projectImg0140, projectImg0150],
      cost: "$4.5 mln",
      year: "2020"
    },
    {
      id: 9,
      key: 'project9',
      images: [projectImg11, projectImg110, projectImg120],
      cost: "$15.6 mln",
      year: "2020"
    },
     {
      id: 10,
      key: 'project10',
      images: [projectImg000010, projectImg000012, projectImg000011],
      cost: "$37 mln",
      year: "2020"
    },
     {
      id: 11,
      key: 'project11',
      images: [projectImg0000011, projectImg0000110, projectImg00001100],
      cost: "$30 mln",
      year: "2020"
    },
     {
      id: 12,
      key: 'project12',
      images: [projectImg01200, projectImg0000110, projectImg0000011],
      cost: "$3.7 mln",
      year: "2020"
    }

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

  // KEYBOARD NAVIGATION
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

  // SWIPE HANDLERS
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
            <span className="breadcrumb-link" onClick={() => (window.location.href = '/')}>
              {t('contact.home')}
            </span>
            <span className="arrow">→</span>
            <span className="breadcrumb-link active">{t('projects.projectsjoyiy')}</span>
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
                  <img
                    src={project.images[0]}
                    alt={t(`projects.${project.key}.title`)}
                    className="project-image"
                  />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{t(`projects.${project.key}.title`)}</h3>
                  <p className="project-desc-short">{t(`projects.${project.key}.descShort`)}</p>

                  <div className="project-icons-short">
                    <span className="icon-client">{t(`projects.${project.key}.client`)} {t(`projects.${project.key}.clientName`)}</span>
                    <span className="icon-cost">{t(`projects.${project.key}.projectCost`)} 💲 {project.cost}</span>
                    <span className="icon-year">{t(`projects.${project.key}.projectYear`)} 📅 {project.year}</span>
                  </div>

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
                  alt={t(`projects.${selectedProject.key}.title`)}
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

              <p className="project-full-desc">{t(`projects.${selectedProject.key}.descFull`)}</p>

              <div className="project-icons-full">
                <span className="icon-client">{t(`projects.${selectedProject.key}.client`)} {t(`projects.${selectedProject.key}.clientName`)}</span>
                <span className="icon-cost">{t(`projects.${selectedProject.key}.projectCost`)} 💲 {selectedProject.cost}</span>
                <span className="icon-year">{t(`projects.${selectedProject.key}.projectYear`)} 📅 {selectedProject.year}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* CTA SECTION */}
      <div className="cta-section">
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

        <div className="container">
          <div className="cta-header">
            <span className="cta-subtitle">{t('about.cta.small')}</span>
            <h2 className="cta-title">{t('about.cta.title')}</h2>
            <p className="cta-text">{t('about.cta.text')}</p>

            <button
              className="cta-button"
              onClick={() => navigate("/contact")}
            >
              {t('about.cta.button')}
            </button>

          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="about-map">
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.001242271041!2d69.22358488575746!3d41.28707742825704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5ab20d00ef%3A0xdaf9592f91854135!2sChilanzar%20Street%204%2C%20100115%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1772885584954!5m2!1sen!2s"
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