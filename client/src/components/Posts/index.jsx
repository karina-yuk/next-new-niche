import React from 'react';
import './Posts.css';
import Slider from "react-slick";


const Posts = () => {
  const reviews = [

  {
    id: 1,
    user: "Gabriel Kraskovskyi",
    title: "Arch Tech from USA",
    src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347436958_1917420595290690_4501166707948439754_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wtr-gZqRzuEAX-LMPV-&_nc_ht=scontent-ord5-2.xx&oh=00_AfDA4hjGEuos6Ef_59guLEqm0wFnyNnuxESTp4dCkZo-KA&oe=65F9A939",
    content: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 2,
    user: "Anna Antropova",
    title: "Arch from UK",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-1/361112109_10161048926611007_5778823206661691662_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k99UOD_ESmAAX_xNtkj&_nc_ht=scontent-ord5-1.xx&oh=00_AfBaVdet41CTbCDpXARhcODYsSZoveqHUko6lTQM9Smnfw&oe=65FA02A3",
    content: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 3,
    user: "Christina MacIntyre ",
    title: "Project Manager from Toronto",
    src: "https://media.licdn.com/dms/image/D5603AQEihJlxsuBEjA/profile-displayphoto-shrink_200_200/0/1705968358833?e=1715817600&v=beta&t=ohR16-2zzd1XO2uWYtIwF-6cyaN7gUUi-aOgIFVwWuc",
    content: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 4,
    user: "Valeriia Kolimbet",
    title: "QA Analyst from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/55849361_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icF_iYRwSoUAX_bA02-&_nc_ht=scontent-ord5-1.xx&oh=00_AfB8XNTb7_Em-mlemcd8IWD0bc7AbHZnmhZbn-lODJA1gA&oe=661D903C",
    content: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
];

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

  return (
    
    <section id="testimonial" className="testimonial">
      <div className={"container " }>
      <div className="position-relative d-flex text-center mb-5 ">
          <h2
            className={"text-24  fw-600 w-100 mb-0 " 
            }
          >
            Uncorked Insights
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            BLOG POST
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>


        <Slider {...settings}>
          
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-item">
              <img src={review.src} alt={review.name} className="testimonial-photo" />
              <div className="testimonial-content">
                <p>{review.content}</p>
                <div className="testimonial-rating">
                  {'★'.repeat(review.rating)}
                </div>
                <h5 className="testimonial-name">{review.name}</h5>
                <h6 className="testimonial-title">{review.title}</h6>
              </div>
            </div>
          ))}
        </Slider>
        </div> 
        
    </section>
  );
};


export default Posts;
