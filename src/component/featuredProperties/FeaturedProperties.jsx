import React from 'react';
import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function FeaturedProperties() {
  const { data, loading } = useFetch("https://hotel-booking-server-mu5x.onrender.com/api/hotels");

  return (
    <div className="fp">
      <h2 className="fpTitle">Homes guests love</h2>
      {loading ? (
        "Loading..."
      ) : (
        <Swiper
          navigation
          spaceBetween={20}
          slidesPerView={4} // Change this for responsiveness
          modules={[Navigation]}
          className="hotelSlider"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="fpItem">
                <img src={item.photos[0]} alt={item.name} className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default FeaturedProperties;
