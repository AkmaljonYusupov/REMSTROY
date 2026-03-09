import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./Gallery.scss"

import heroImage from "../assets/images/sub-banner-img.jpg"

import img5 from "../assets/images/projectImg02.png"
import img4 from "../assets/images/projectImg03.png"
import img3 from "../assets/images/projectImg04.png"
import img2 from "../assets/images/projectImg05.png"
import img1 from "../assets/images/projectImg06.png"

type ImageType = {
  id: number
  src: string
  title: string
}

export default function Gallery() {
  const { t } = useTranslation()

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null)

  const images: ImageType[] = [
    { id: 1, src: img1, title: "Bitumen Mastika" },
    { id: 2, src: img2, title: "Polimer Mastika" },
    { id: 3, src: img3, title: "Gidroizolyatsiya" },
    { id: 4, src: img4, title: "Bitum Primer" },
    { id: 5, src: img5, title: "Ishlab chiqarish" },
  ]

  return (
    <section className="galleryPage">

      {/* HERO */}
      <div
        className="galleryBanner"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="galleryBannerOverlay">

          <div className="container">

            <div className="galleryBannerContent">

              <h1 className="galleryBannerTitle">
                {t("nav.gallery")}
              </h1>

              <div className="galleryBreadcrumb">

                <span
                  className="galleryBreadcrumbLink"
                  onClick={() => (window.location.href = "/")}
                >
                  {t("nav.home")}
                </span>

                <span className="galleryBreadcrumbDivider">→</span>

                <span className="galleryBreadcrumbActive">
                  {t("nav.gallery")}
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="container">

        <div className="galleryGrid">
          {images.map((image) => (
            <div
              key={image.id}
              className="galleryCard"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} />

              <div className="galleryCardOverlay">
                <span>{image.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="galleryModal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="galleryModalBox"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="galleryModalClose"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />

            <h3>{selectedImage.title}</h3>

          </div>
        </div>
      )}

    </section>
  )
}