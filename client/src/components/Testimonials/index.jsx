import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";

const Testimonial = () => {
  const reviews = [
  {
    id: 1,
    name: "Gabriel Kraskovskyi",
    title: "UX Designer from Miami",
    src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347436958_1917420595290690_4501166707948439754_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wtr-gZqRzuEAX-LMPV-&_nc_ht=scontent-ord5-2.xx&oh=00_AfDA4hjGEuos6Ef_59guLEqm0wFnyNnuxESTp4dCkZo-KA&oe=65F9A939",
    quote: "Forget what you know about wine festivals; Charleston's turning the table with a paintbrush in one hand and a wine glass in the other! It's where you sip your Merlot to the rhythm of a live canvas and chew to the beat of local bands. It’s not just a festival; it's a renaissance fair for the senses, celebrating the art of flavor in the heart of South Carolina. Who knew culinary arts and fine arts made such a delicious pair?",
   
  },
  {
    id: 2,
    name: "Anna Antropova",
    title: "Designer from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-1/361112109_10161048926611007_5778823206661691662_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k99UOD_ESmAAX_xNtkj&_nc_ht=scontent-ord5-1.xx&oh=00_AfBaVdet41CTbCDpXARhcODYsSZoveqHUko6lTQM9Smnfw&oe=65FA02A3",
    quote: "Pairing semi-hard cheeses with the right wine is like finding the perfect date for prom - it has to be just right. Imagine the creaminess of a mature Cheddar waltzing with a bold Merlot, or a slice of Gouda shyly flirting with a smooth Malbec. It's a dance of flavors so harmonious, you'd swear they've been practicing for years. Here's to the matchmakers of the culinary world, making every bite a love story!",
    
  },
  {
    id: 3,
    name: "Christina MacIntyre ",
    title: "Web Dev from Toronto",
    src: "https://media.licdn.com/dms/image/D5603AQEihJlxsuBEjA/profile-displayphoto-shrink_200_200/0/1705968358833?e=1715817600&v=beta&t=ohR16-2zzd1XO2uWYtIwF-6cyaN7gUUi-aOgIFVwWuc",
    quote: "California Cabernet and Bordeaux walking into a steakhouse is the ultimate ‘meat cute’. It's like setting up your best friend with the love of their life - you know it’s going to be a perfect match. The tannins and protein shake hands like old friends, creating a taste so divine, it's basically a culinary hug. Here's to the perfect blend of sip, bite, and bliss, proving true love does exist in every glass and plate.",
    
  },
  {
    id: 4,
    name: "Valeriia Kolimbet",
    title: "QA Analyst from Vancouver",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/55849361_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icF_iYRwSoUAX_bA02-&_nc_ht=scontent-ord5-1.xx&oh=00_AfB8XNTb7_Em-mlemcd8IWD0bc7AbHZnmhZbn-lODJA1gA&oe=661D903C",
    quote: "Ever imagined a wine barrel race through the heart of Tuscany? It's like the Olympics, but everyone's a bit tipsy and the athletes are barrels. The Bravìo delle Botti isn’t just an event; it’s a Herculean challenge with a Tuscan twist, proving once and for all that wine is worth the uphill battle. Cheers to the athletic pushers turning Tuscany's historic streets into a racetrack for the ages. It’s not just a race; it’s a barrel of laughs and cheers!",
    
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
            Coleagues Speak
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            TESTIMONIALS
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>


        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-item">
              <img src={review.src} alt={review.name} className="testimonial-photo" />
              <div className="testimonial-content">
                <p>{review.quote}</p>
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


export default Testimonial;
