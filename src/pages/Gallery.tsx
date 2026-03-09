import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Gallery.scss"

import img5 from "../assets/images/projectImg02.png"
import img4 from "../assets/images/projectImg03.png"
import img3 from "../assets/images/projectImg04.png"
import img2 from "../assets/images/projectImg05.png"
import img1 from "../assets/images/projectImg06.png"
import heroImage from "../assets/images/sub-banner-img.jpg"

type ImageType = {
  id: number;
  src: string;
};

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Rasm massivlari
  const images: ImageType[] = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
  ];

  const imageTitles = t("gallery.images", { returnObjects: true }) as string[];

  // ================= NAVIGATION =================
  const handlePrev = () => {
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex + 1) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  // ================= TOUCH SWIPE =================
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  return (
    <section className="galleryPage">
      {/* HERO */}
      <div className="galleryBanner" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="galleryBannerOverlay">
          <div className="container">
            <div className="galleryBannerContent">
              <h1 className="galleryBannerTitle">{t("nav.gallery")}</h1>
              <div className="galleryBreadcrumb">
                <span className="galleryBreadcrumbLink" onClick={() => (window.location.href = "/")}>
                  {t("nav.home")}
                </span>
                <span className="galleryBreadcrumbDivider">→</span>
                <span className="galleryBreadcrumbActive">{t("nav.gallery")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="container">
        <div className="galleryGrid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="galleryCard"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={image.src} alt={imageTitles[index]} />
              <div className="galleryCardOverlay">
                <span>{imageTitles[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          className="galleryModal"
          ref={modalRef}
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="galleryModalBox" onClick={(e) => e.stopPropagation()}>
            <button className="galleryModalClose" onClick={() => setSelectedIndex(null)}>×</button>
            <button className="galleryModalPrev" onClick={handlePrev}>‹</button>
            <img
              src={images[selectedIndex].src}
              alt={imageTitles[selectedIndex]}
              className="modalImage"
            />
            <button className="galleryModalNext" onClick={handleNext}>›</button>
            <h3>{imageTitles[selectedIndex]}</h3>
          </div>
        </div>
      )}
    </section>
  );
}