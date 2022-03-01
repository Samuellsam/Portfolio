import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

const CustomSwiper: React.FunctionComponent<{
    images: string[]
}> = (props) => {
    const renderImage = () => {
        if(props.images && props.images.length > 0) {
            const imageElements = props.images.map((src, pos) => {
                return (
                    <SwiperSlide>
                        <div style={{height: '400px'}}>
                            <Image src={src} layout="fill" objectFit="contain"/>
                        </div>
                    </SwiperSlide>
                )
            });

            return imageElements;
        }

        return undefined;
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            className={'bg-white p-3 shadow-lg swiperStyle'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            style={{ zIndex: 0 }}
            >
            {renderImage()}
        </Swiper>
    )
}

export default CustomSwiper;