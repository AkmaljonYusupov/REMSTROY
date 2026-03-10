import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Gallery.scss"

import img68 from "../assets/images/Galreya020.jpg"
import img48 from "../assets/images/Galreya1.jpg"
import img57 from "../assets/images/Galreya10.jpg"
import img58 from "../assets/images/Galreya11.jpg"
import img59 from "../assets/images/Galreya12.jpg"
import img60 from "../assets/images/Galreya13.jpg"
import img61 from "../assets/images/Galreya14.jpg"
import img62 from "../assets/images/Galreya15.jpg"
import img63 from "../assets/images/Galreya16.jpg"
import img64 from "../assets/images/Galreya17.jpg"
import img65 from "../assets/images/Galreya18.jpg"
import img66 from "../assets/images/Galreya19.jpg"
import img49 from "../assets/images/Galreya2.jpg"
import img67 from "../assets/images/Galreya20.jpg"
import img69 from "../assets/images/Galreya21.jpg"
import img70 from "../assets/images/Galreya22.jpg"
import img71 from "../assets/images/Galreya23.jpg"
import img72 from "../assets/images/Galreya24.jpg"
import img73 from "../assets/images/Galreya25.jpg"
import img74 from "../assets/images/Galreya26.jpg"
import img75 from "../assets/images/Galreya27.jpg"
import img76 from "../assets/images/Galreya28.jpg"
import img77 from "../assets/images/Galreya29.jpg"
import img50 from "../assets/images/Galreya3.jpg"
import img78 from "../assets/images/Galreya30.jpg"
import img79 from "../assets/images/Galreya31.jpg"
import img80 from "../assets/images/Galreya32.jpeg"
import img51 from "../assets/images/Galreya4.jpg"
import img52 from "../assets/images/Galreya5.jpg"
import img53 from "../assets/images/Galreya6.jpg"
import img54 from "../assets/images/Galreya7.jpg"
import img55 from "../assets/images/Galreya8.jpg"
import img56 from "../assets/images/Galreya9.jpg"
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
import img47 from "../assets/images/split_image_006.png"
import img44 from "../assets/images/split_image_007.png"
import img46 from "../assets/images/split_image_06.png"
import img45 from "../assets/images/split_image_07.png"
import img12 from "../assets/images/split_image_1.png"
import img24 from "../assets/images/split_image_10.png"
import img25 from "../assets/images/split_image_11.png"
import img43 from "../assets/images/split_image_110.png"
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
		{ id: 43, src: img43 },
		{ id: 44, src: img44 },
		{ id: 45, src: img45 },
		{ id: 46, src: img46 },
		{ id: 47, src: img47 },
		{ id: 48, src: img48 },
		{ id: 49, src: img49 },
		{ id: 50, src: img50 },
		{ id: 51, src: img51 },
		{ id: 52, src: img52 },
		{ id: 53, src: img53 },
		{ id: 54, src: img54 },
		{ id: 55, src: img55 },
		{ id: 56, src: img56 },
		{ id: 57, src: img57 },
		{ id: 58, src: img58 },
		{ id: 59, src: img59 },
		{ id: 60, src: img60 },
		{ id: 61, src: img61 },
		{ id: 62, src: img62 },
		{ id: 63, src: img63 },
		{ id: 64, src: img64 },
		{ id: 65, src: img65 },
		{ id: 66, src: img66 },
		{ id: 67, src: img67 },
		{ id: 68, src: img68 },
		{ id: 69, src: img69 },
		{ id: 70, src: img70 },
		{ id: 71, src: img71 },
		{ id: 72, src: img72 },
		{ id: 73, src: img73 },
		{ id: 74, src: img74 },
		{ id: 75, src: img75 },
		{ id: 76, src: img76 },
		{ id: 77, src: img77 },
		{ id: 78, src: img78 },
		{ id: 79, src: img79 },
		{ id: 80, src: img80 },


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