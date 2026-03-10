import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import aboutpageImg from "../assets/images/aboutpage-image.jpg"

// CERTIFICATES
import cert1 from "../assets/images/certificate/certificate1.png"
import cert2 from "../assets/images/certificate/certificate2.png"
import cert3 from "../assets/images/certificate/certificate3.png"
import cert4 from "../assets/images/certificate/certificate4.png"

import cert51 from "../assets/images/certificate/certificate5.1.png"
import cert5 from "../assets/images/certificate/certificate5.png"

import cert61 from "../assets/images/certificate/certificate6.1.png"
import cert6 from "../assets/images/certificate/certificate6.png"

import cert7 from "../assets/images/certificate/certificate7.png"
import cert8 from "../assets/images/certificate/certificate8.png"

import cert91 from "../assets/images/certificate/certificate9.1.png"
import cert9 from "../assets/images/certificate/certificate9.png"

import "./About.scss"

function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const certificates = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert51,
    cert6,
    cert61,
    cert7,
    cert8,
    cert9,
    cert91,
  ];

  const statsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // MODAL STATE
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (img) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">{t("about.aboutjoyiy")}</h1>

          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigate("/")}>
              {t("about.home")}
            </span>

            <span className="arrow">→</span>

            <span className="breadcrumb-link active">
              {t("about.aboutjoyiy")}
            </span>
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="about-us-hero">
        <div className="container">
          <div className="us-grid">
            <div className="us-image-side">
              <img
                src={aboutpageImg}
                alt="Construction team"
                className="us-main-photo"
              />
            </div>

            <div className="us-text-side">
              <span className="us-small-label">{t("nav.about")}</span>

              <h2 className="us-main-title">
                {t("about.believe.title")}
              </h2>

              <p className="us-description">
                {t("about.believe.desc")}
              </p>

              <ul className="us-check-list">
                <li><span className="check-mark">✔</span>{t("about.believe.check1")}</li>
                <li><span className="check-mark">✔</span>{t("about.believe.check2")}</li>
                <li><span className="check-mark">✔</span>{t("about.believe.check3")}</li>
                <li><span className="check-mark">✔</span>{t("about.believe.check4")}</li>
                <li><span className="check-mark">✔</span>{t("about.believe.check5")}</li>
              </ul>

              <button className="read-more-btn">
                {t("about.believe.readMore")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div className="certificates-section">
        <div className="container">
          <div className="cert-header">
            <span className="cert-small">
              {t("about.certificate.small")}
            </span>

            <h2 className="cert-title">
              {t("about.certificate.title")}
            </h2>

            <p className="cert-text">
              {t("about.certificate.text")}
            </p>
          </div>

          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <div className="cert-card" key={index} onClick={() => openModal(cert)}>
                <img src={cert} alt={`certificate-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="certificate-large" />
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

      {/* CTA */}
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
            <span className="cta-subtitle">{t("about.cta.small")}</span>

            <h2 className="cta-title">
              {t("about.cta.title")}
            </h2>

            <p className="cta-text">
              {t("about.cta.text")}
            </p>

            <button
              className="cta-button"
              onClick={() => navigate("/contact")}
            >
              {t("about.cta.button")}
            </button>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="about-map">
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.001242271041!2d69.22358488575746!3d41.28707742825704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5ab20d00ef%3A0xdaf9592f91854135!2sChilanzar%20Street%204%2C%20100115%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1772885584954!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;