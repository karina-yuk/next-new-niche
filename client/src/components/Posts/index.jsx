import React from 'react';
import './Posts.css';
import Slider from "react-slick";


const Posts = () => {
  const post = [

  {
    id: 1,
    user: "Post Title One",
    title: "Post Title One",
    src: "https:7&_nc_sid=5f2048&_nc_ohc=wtr-gZqRzuEAX-LMPV-&_nc_ht=scontent-ord5-2.xx&oh=00_AfDA4hjGEuos6Ef_59guLEqm0wFnyNnuxESTp4dCkZo-KA&oe=65F9A939",
    content: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
  },
  {
    id: 2,
    user: "Anna Antropova",
    title: "Post Title Two",
    src: "https://&_nc_sid=5f2048&_nc_ohc=k99UOD_ESmAAX_xNtkj&_nc_ht=scontent-ord5-1.xx&oh=00_AfBaVdet41CTbCDpXARhcODYsSZoveqHUko6lTQM9Smnfw&oe=65FA02A3",
    content: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   
  },
  {
    id: 3,
    user: "Christina MacIntyre ",
    title: "Post Title Three",
    src: "https:/hoto-shrink_200_200/0/1705968358833?e=1715817600&v=beta&t=ohR16-2zzd1XO2uWYtIwF-6cyaN7gUUi-aOgIFVwWuc",
    content: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
  },
  {
    id: 4,
    user: "Valeriia Kolimbet",
    title: "Post Title Four",
    src: "https://sco1_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icF_iYRwSoUAX_bA02-&_nc_ht=scontent-ord5-1.xx&oh=00_AfB8XNTb7_Em-mlemcd8IWD0bc7AbHZnmhZbn-lODJA1gA&oe=661D903C",
    content: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   
  },
];

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
    
    <section id="post" className="post">
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
{post.map((post) => (
  <div key={post.id} className="card-container"> 
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={post.src} alt={post.user} className="card-image" />
          <h3 className="card-title">{post.title}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{post.content}</p>
          <a href="#" className="read-more">Read More</a> {/* Placeholder, ensure it links to the right destination */}
        </div>
      </div>
    </div>
  </div>
))}
</Slider>

        </div> 
        
    </section>
  );
};


export default Posts;

