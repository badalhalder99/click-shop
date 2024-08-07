// import React from "react";
// import Slider from "react-slick";
// import Link from "next/link";
// import "./slick.css";
// import "./slick-theme.css";

// const CategorySlider = ({ sliderDatas }) => {
//   const settings = {
//     className: "center",
//     infinite: true,
//     centerPadding: "30px",
//     slidesToShow: 4,
//     swipeToSlide: true,
//     dots: false,
//     speed: 1000,
//     autoplay: true,
//     arrows: false,
//     afterChange: (index) => {},
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 575,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {
//           sliderDatas.map((item) => (
//             <div>
//               <h2>item.title</h2>
//               <img src={item.imgUrl}/>
//             </div>
            
//           ))}
//       </Slider>
//     </div>
//   );
// };

// export default CategorySlider;

import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Link from "next/link";
import styles from './navbar.module.css'

function CategorySlider({ sliderDatas }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
    swipeToSlide: true,
    dots: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          sliderDatas.map((item) => (
            <div>
              <Link href='/'>
                <img src={item.imgUrl} className={`2xsmall:max-w-[100%] xsmall:max-w-[95%] 2xsmall:w-[96%] xsmall:w-[95%] md:h-[250px] xsmall:h-[200px] 2xsmall:h-[150px] bg-red-50 ${styles.imgWidth}`}/>
              </Link>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default CategorySlider;
