import { useTranslation } from 'react-i18next'



import './About.scss'

function contact() {
	const { t } = useTranslation()



	return (
		<section >



			{/* MAP SECTION */}
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

export default contact