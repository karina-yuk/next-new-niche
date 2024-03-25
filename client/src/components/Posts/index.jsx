import React from "react";
import "./Posts.css";
import Slider from "react-slick";

const Posts = () => {
  const post = [
    {
      id: 1,
      user: "Post Title One",
      title: "The Art of Decanting: Enhancing Your Wine Experience",
      src: "https:7&_nc_sid=5f2048&_nc_ohc=wtr-gZqRzuEAX-LMPV-&_nc_ht=scontent-ord5-2.xx&oh=00_AfDA4hjGEuos6Ef_59guLEqm0wFnyNnuxESTp4dCkZo-KA&oe=65F9A939",
      content:
        "Decanting is a simple yet effective technique used to enhance the flavors and aromas of wine. By gently pouring wine into a decanter, the liquid is exposed to oxygen, allowing it to breathe and soften over time. This process is particularly beneficial for young, tannic red wines, as it helps to open up the wine and release its full potential. Additionally, decanting can help to separate sediment that may have formed in older bottles, ensuring a smoother drinking experience. While not all wines require decanting, it can significantly improve the enjoyment of certain varieties, allowing you to fully appreciate their complexity and depth of flavor.",
    },
    {
      id: 2,
      user: "Anna Antropova",
      title: "Exploring Rosé: More Than Just a Summertime Sipper",
      src: "https://&_nc_sid=5f2048&_nc_ohc=k99UOD_ESmAAX_xNtkj&_nc_ht=scontent-ord5-1.xx&oh=00_AfBaVdet41CTbCDpXARhcODYsSZoveqHUko6lTQM9Smnfw&oe=65FA02A3",
      content:
        "Rosé isn't just a warm-weather drink—it's versatile and enjoyable year-round. From pale pinks to vibrant hues, rosé wines offer a wide range of flavors, from crisp and dry to fruity and sweet. Their refreshing acidity makes them an ideal companion to a variety of foods, including salads, seafood, and even barbecue. Whether you're sipping on a Provence rosé or a Spanish Garnacha rosado, explore the diversity of rosé wines and discover your new favorite pour.",
    },
    {
      id: 3,
      user: "Christina MacIntyre ",
      title: "The Rise of Natural Wines: Embracing Minimal Intervention",
      src: "https:/hoto-shrink_200_200/0/1705968358833?e=1715817600&v=beta&t=ohR16-2zzd1XO2uWYtIwF-6cyaN7gUUi-aOgIFVwWuc",
      content:
        "Natural wines, made with minimal intervention and additives, have gained popularity among wine enthusiasts seeking authentic expressions of terroir and craftsmanship. Unlike conventionally produced wines, which may rely on additives and technological interventions to achieve a consistent flavor profile, natural wines embrace the unique characteristics of each vintage and vineyard. These wines are often fermented with native yeasts, undergo minimal filtration, and contain little to no added sulfites. Advocates of natural wine appreciate its raw, unadulterated qualities, which reflect the true essence of the grape and its growing conditions. While natural wines may exhibit more variation from bottle to bottle, they offer a captivating journey into the world of artisanal winemaking.",
    },
    {
      id: 4,
      user: "Valeriia Kolimbet",
      title: "Exploring the Wonders of Niagara Falls Wine Country",
      src: "https://sco1_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icF_iYRwSoUAX_bA02-&_nc_ht=scontent-ord5-1.xx&oh=00_AfB8XNTb7_Em-mlemcd8IWD0bc7AbHZnmhZbn-lODJA1gA&oe=661D903C",
      content:
        "Niagara Falls isn't just about breathtaking natural beauty—it's also home to a thriving wine scene. With its cool climate and fertile soil, the region produces exceptional wines, particularly renowned for its ice wines. From the elegant Rieslings to the robust Cabernet Francs, Niagara's wineries offer a diverse range of varietals to suit every palate. Don't miss the chance to sip and savor amidst stunning vineyard landscapes, making your visit to Niagara Falls an unforgettable wine experience.",
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
      <div className={"container "}>
        <div className="position-relative d-flex text-center mb-5 ">
          <h2 className={"text-24  fw-600 w-100 mb-0 "}>Uncorked Insights</h2>
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
                    <img
                      src={post.src}
                      alt={post.user}
                      className="card-image"
                    />
                    <h3 className="card-title">{post.title}</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>{post.content}</p>
                    <a href="#" className="read-more">
                      Read More
                    </a>{" "}
                    {/* Placeholder, ensure it links to the right destination */}
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
