import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Banner = () => {
	const slidesData = [
		'https://img.29cm.co.kr/item/202308/11ee3f20aeff15a0acc50f775e2207a1.jpg?width=500',
		'https://img.29cm.co.kr/item/202308/11ee3fd36e1da5c58a69d3ea4792e9e0.jpg?width=500',
		'https://img.29cm.co.kr/item/202308/11ee3f20aeff15a0acc50f775e2207a1.jpg?width=500',
		'https://img.29cm.co.kr/item/202308/11ee3fd36e1da5c58a69d3ea4792e9e0.jpg?width=500',
		'https://img.29cm.co.kr/item/202308/11ee3f20aeff15a0acc50f775e2207a1.jpg?width=500',
	];
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			{slidesData.map((slide, index) => (
				<SwiperSlide key={index}>
					<img src={`${slide}`} alt={`slide-${index}`} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Banner;
