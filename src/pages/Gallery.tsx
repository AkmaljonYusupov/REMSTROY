import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Gallery.scss"

import img6 from "../assets/images/projectImg01.jpg"
import img10 from "../assets/images/projectImg010.png"
import img13 from "../assets/images/projectImg0110.jpg"
import img11 from "../assets/images/projectImg0110.png"
import img15 from "../assets/images/projectImg0120.jpg"
import img5 from "../assets/images/projectImg02.png"
import img4 from "../assets/images/projectImg03.png"
import img3 from "../assets/images/projectImg04.png"
import img2 from "../assets/images/projectImg05.png"
import img1 from "../assets/images/projectImg06.png"
import img7 from "../assets/images/projectImg07.png"
import img8 from "../assets/images/projectImg08.png"
import img9 from "../assets/images/projectImg09.png"
import img14 from "../assets/images/projectImg110.jpg"
import img12 from "../assets/images/split_image_1.png"
import img24 from "../assets/images/split_image_10.png"
import img25 from "../assets/images/split_image_11.png"
import img26 from "../assets/images/split_image_12.png"
import img27 from "../assets/images/split_image_13.png"
import img28 from "../assets/images/split_image_14.png"
import img29 from "../assets/images/split_image_15.png"
import img30 from "../assets/images/split_image_16.png"
import img31 from "../assets/images/split_image_17.jpg"
import img32 from "../assets/images/split_image_18.jpg"
import img33 from "../assets/images/split_image_19.jpg"
import img16 from "../assets/images/split_image_2.png"
import img34 from "../assets/images/split_image_20.jpg"
import img35 from "../assets/images/split_image_21.jpg"
import img36 from "../assets/images/split_image_22.jpg"
import img37 from "../assets/images/split_image_23.jpg"
import img38 from "../assets/images/split_image_24.jpg"
import img39 from "../assets/images/split_image_25.jpg"
import img40 from "../assets/images/split_image_26.jpg"
import img41 from "../assets/images/split_image_27.jpg"
import img42 from "../assets/images/split_image_28.jpg"
import img17 from "../assets/images/split_image_3.png"
import img18 from "../assets/images/split_image_4.png"
import img19 from "../assets/images/split_image_5.png"
import img20 from "../assets/images/split_image_6.png"
import img21 from "../assets/images/split_image_7.png"
import img22 from "../assets/images/split_image_8.png"
import img23 from "../assets/images/split_image_9.png"
import heroImage from "../assets/images/sub-banner-img.jpg"

type ImageType = {
	id: number
	src: string
}

export default function Gallery() {
	const { t } = useTranslation()
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
	const modalRef = useRef<HTMLDivElement>(null)

	// Rasm massivlari
	const images: ImageType[] = [
		{ id: 1, src: img1 },
		{ id: 2, src: img2 },
		{ id: 3, src: img3 },
		{ id: 4, src: img4 },
		{ id: 5, src: img5 },
		{ id: 6, src: img6 },
		{ id: 7, src: img7 },
		{ id: 8, src: img8 },
		{ id: 9, src: img9 },
		{ id: 10, src: img10 },
		{ id: 11, src: img11 },
		{ id: 13, src: img13 },
		{ id: 14, src: img14 },
		{ id: 15, src: img15 },
		{ id: 16, src: img16 },
		{ id: 17, src: img17 },
		{ id: 18, src: img18 },
		{ id: 19, src: img19 },
		{ id: 20, src: img20 },
		{ id: 21, src: img21 },
		{ id: 22, src: img22 },
		{ id: 23, src: img23 },
		{ id: 24, src: img24 },
		{ id: 25, src: img25 },
		{ id: 26, src: img26 },
		{ id: 27, src: img27 },
		{ id: 28, src: img28 },
		{ id: 29, src: img29 },
		{ id: 30, src: img30 },
		{ id: 31, src: img31 },
		{ id: 32, src: img32 },
		{ id: 33, src: img33 },
		{ id: 34, src: img34 },
		{ id: 35, src: img35 },
		{ id: 36, src: img36 },
		{ id: 37, src: img37 },
		{ id: 38, src: img38 },
		{ id: 39, src: img39 },
		{ id: 40, src: img40 },
		{ id: 41, src: img41 },
		{ id: 42, src: img42 },
		{ id: 12, src: img12 }
	]

	const imageTitle = t("gallery.images")

	// ================= NAVIGATION =================
	const handlePrev = () => {
		if (selectedIndex !== null)
			setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
	}

	const handleNext = () => {
		if (selectedIndex !== null)
			setSelectedIndex((selectedIndex + 1) % images.length)
	}

	// Keyboard navigation
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (selectedIndex !== null) {
				if (e.key === "ArrowLeft") handlePrev()
				if (e.key === "ArrowRight") handleNext()
				if (e.key === "Escape") setSelectedIndex(null)
			}
		}
		window.addEventListener("keydown", handleKey)
		return () => window.removeEventListener("keydown", handleKey)
	}, [selectedIndex])

	// ================= TOUCH SWIPE =================
	const touchStartX = useRef<number>(0)
	const touchEndX = useRef<number>(0)

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX
	}
	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX
	}
	const handleTouchEnd = () => {
		const distance = touchStartX.current - touchEndX.current
		if (distance > 50) handleNext()
		if (distance < -50) handlePrev()
	}

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
							<img src={image.src} alt={imageTitle} />
							<div className="galleryCardOverlay">
								<span>{imageTitle}</span>
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
							alt={imageTitle}
							className="modalImage"
						/>
						<button className="galleryModalNext" onClick={handleNext}>›</button>
						<h3>{imageTitle}</h3>
					</div>
				</div>
			)}
		</section>
	)
}