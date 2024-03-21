import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import PostDetailsModal from "../PostDetailsModal";
import "./FeaturePosts.css";

const FeaturePosts = () => {
  const isotope = useRef();

  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    WEBDEV: "Food and Wine Pairing",
    ARCHTECH: "Cheese and Wine Pairing",
    ARCHDESIGN: "Random Articles",
  };

  const projectsData = [
    {
      id: 1,
      title: "Pinot Noir with earthy flavors",
      projectInfo:
        "Recipes made with earthy ingredients like mushrooms and lentils taste great with reds like Pinot Noir and Dolcetto, which are light-bodied but full of savory depth. Pinot is also often delicious alongside salmon, proving that red wine and fish can go together brilliantly.",
      client: "Admin",
      date: "May 06, 2019",
      thumbImage:
        "https://github.com/Olivia-the-G/next-new-niche/blob/main/client/src/img/01%20-%20Pinot%20Noir%20with%20earthy%20flavors.png?raw=true",
      sliderImages: [
        "../src/img/01 - Mushroom-Sauce-2.jpeg",
        "../src/img/01 - Mushroom-Sauce.jpeg",
      ],

      categories: ["*", filters.WEBDEV],
    },

    {
      id: 2,
      title: "Chardonnay with fatty fish or fish in a rich sauce",
      projectInfo:
        "Silky whites — like many Chardonnays from California, Chile, or Australia — are delicious with hearty fish like swordfish or any kind of seafood in a rich sauce.",
      client: "Admin",
      date: "August 19, 2019",

      thumbImage:
        "https://github.com/Olivia-the-G/next-new-niche/blob/main/client/src/img/02%20-%20Chardonnay%20with%20fatty%20fish%20or%20fish%20in%20a%20rich%20sauce.png?raw=true",
      sliderImages: [
        "../src/img/02 - fatty-fish-recipes.JPEG",
        "../src/img/02 - fish sashimi salad.JPEG",
      ],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 3,
      title: "Champagne with anything salty",
      projectInfo:
        "Many dry sparkling wines, such as brut Champagne and Spanish cava, actually have a faint touch of fruity sweetness. This makes them extra-refreshing when served with salty foods. They also cut through the richness and oil of fried dishes: Bubbly and a bowl of potato chips is terrific.",
      client: "Admin",
      date: "September 16, 2019",
      thumbImage: "../src/img/03 - Champagne 2.jpeg",
      sliderImages: [
        "../src/img/03 - Champagne 1.png",
        "../src/img/03 - Champagne 3.jpeg",
      ],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 4,
      title: "Cabernet Sauvignon with juicy red meat",
      projectInfo:
        "California Cabernet, Bordeaux, and Bordeaux-style blends are terrific with steaks and lamb dishes. The firm tannins in Cab cut through the fat and protein, which in turn smooth out the tannins. It's a perfect symbiotic relationship in each bite.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "October 02, 2019",

      thumbImage: "../src/img/04 - Cabernet Sauvignon with juicy red meat.png",
      sliderImages: [
        "../src/img/04 - Best+Sunday+Roast+Wines+roast+beef+thethreedrinkers.jpeg",
        "../src/img/04 - Wine_to_Pair_with_Steak.jpg",
      ],
      categories: ["*", filters.WEBDEV],
    },
    {
      id: 5,
      title: "Sauvignon Blanc with tart dressings and sauces",
      projectInfo:
        "Tangy foods — like scallops with a grapefruit-onion salad — won't overwhelm zippy wines like Sauvignon Blanc, Vinho Verde from Portugal, and Verdejo from Spain. Sauvignon Blanc also works well alongside vinaigrette, roasted or sautéed fish, and goat cheese.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "October 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage:
        "../src/img/05 - Sauvignon Blanc with tart dressings and sauces.jpg",
      sliderImages: ["../src/img/05 - 02.jpeg", "../src/img/05 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 6,
      title: "Dry Rosé with rich, cheesy dishes",
      projectInfo:
        "Some cheeses go better with white wine and some sing alongside red. Almost all, however, pair well with dry rosé, which has the acidity of white wine and the fruit character of red. Rosé also works well with grilled fish, fresh salad, and even a big plate of charcuterie.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "November 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/06 - Dry Rosé with rich, cheesy dishes.png",
      sliderImages: ["../src/img/06 - 02.jpeg", "../src/img/06 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 7,
      title: "Pinot Grigio with light fish dishes",
      projectInfo:
        "Light seafood dishes seem to take on more flavor when matched with equally delicate white wines, such as Pinot Grigio or Arneis from Italy, Chablis from France, and Vinho Verde from Portugal.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "November 19, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/07 - Pinot Grigio with light fish dishes.png",
      sliderImages: ["../src/img/07 - 02.jpeg", "../src/img/07 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 8,
      title: "Malbec with sweet-spicy barbecue sauces",
      projectInfo:
        "Malbec, Shiraz, and Côtes-du-Rhône are bold enough to drink alongside foods brushed with heavily spiced barbecue sauces — just be careful that the sauce isn't too sugary-sweet, which can throw off the wine's fruit.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage:
        "../src/img/08 - Malbec with sweet-spicy barbecue sauces .jpeg",
      sliderImages: ["../src/img/08 - 02.jpeg", "../src/img/08 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 9,
      title: "Moscato d'Asti with fruit desserts",
      projectInfo:
        "Sweet sparkling wines such as Moscato d'Asti and demi-sec Champagne help emphasize the fruit in the dessert, rather than the sugar. Try it with these Honeyed Fig Crostatas. It's also delicious alongside a simple summer fruit salad or even splashed into it.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "January 16, 2020",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/09 - Moscato d'Asti with fruit desserts.png",
      sliderImages: ["../src/img/09 - 02.jpeg", "../src/img/09 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 10,
      title: "Syrah with highly spiced dishes",
      projectInfo:
        "When a meat is heavily seasoned, look for a red wine with lots of spicy notes. Syrah from Washington or France's Rhône Valley, Cabernet Franc from the Loire, and Xinomavro from Greece are all good choices. Be careful with spice heat, however: For hot dishes like those, try to avoid high-alcohol wines, which will amplify the sizzle.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "January 31, 2020",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/10 - 01.png",
      sliderImages: ["../src/img/10 - 02.jpeg", "../src/img/10 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 11,
      title: "Grüner Veltliner with fresh herbs and vegetables",
      projectInfo:
        "Austrian Grüner Veltliner's citrus-and-clover scent is lovely when there are lots of fresh herbs in a dish. Other go-to grapes include Albariño from Spain and Vermentino from Italy.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "February 14, 2020",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/11 - 01.jpeg",
      sliderImages: ["../src/img/11 - 02.jpeg", "../src/img/11 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 12,
      title: "Zinfandel with pâtés, mousses, and terrines",
      projectInfo:
        "If you can apply the same adjectives to a wine and a dish, pairing them will often work. For instance, the words (rustic) (savory) or (rich) are often used to describe Zinfandel, Italy's Nero d'Avola, and Spain's Monastrell, as well as a creamy liver mousse. Spice- and fruit-driven Zinfandel also has a natural affinity for barbecued or sauce-slathered meats.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "February 28, 2020",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/12 - 01.png",
      sliderImages: ["../src/img/12 - 02.jpeg", "../src/img/12 - 03.jpeg"],
      categories: ["*", filters.WEBDEV],
    },

    {
      id: 18,
      title: "Do NOT Drink",
      projectInfo:
        "Do not drink when you are: Driving a car, snowmobile, boat or other motorized vehicle. Operating heavy machinery and tools. Taking medicine or other drugs that interact with alcohol. Doing any kind of physical activity. Living with mental or physical health problems. Living with alcohol dependence. Pregnant, planning to be pregnant, or about to breastfeed.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/Do Not Drink.jpeg",
      sliderImages: ["images/project-7.jpg", "images/project-8.JPG"],
      categories: ["*", filters.ARCHDESIGN],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    const handleResize = () => {
      isotope.current.layout();
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      isotope.current.destroy();
    };
  }, []);

  // handle images loaded and filter key change
  useEffect(() => {
    if (projectsData.length && imagesLoaded === projectsData.length) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <>
      <section id="portfolio" className="container px-lg-5 min-vh-100">
        <div className="container px-lg-5">
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 fw-600 w-100 mb-0 text-light opacity-4">
              Currated Corcks
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
              FEATURED POSTS
              <span className="heading-separator-line  d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}

          {/* Filter Menu */}
          <ul className="position-relative d-flex mb-5 justify-content-evenly">
            <li className="nav-link">
              <div
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
                style={{ cursor: "pointer" }}
              >
                All
              </div>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-link" key={i}>
                <div
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </div>
              </li>
            ))}
          </ul>

          {/* portfolio cards */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project) => {
                  if (project.categories.includes(filterKey)) {
                    return (
                      <div
                        className={
                          "col-sm-6 col-lg-4 filter-item " +
                          project.categories.join(" ")
                        }
                        key={project.id}
                      >
                        <div className="portfolio-box rounded">
                          <div className="portfolio-img rounded">
                            <img
                              onLoad={() => {
                                setimagesLoaded(imagesLoaded + 1);
                              }}
                              className="img-fluid d-block portfolio-image"
                              src={project.thumbImage}
                              alt=""
                            />
                            <div className="portfolio-overlay">
                              <a
                                className="popup-ajax stretched-link"
                                href=""
                                onClick={() => {
                                  setSelectedProjectDetails(project);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              />
                              <div className="portfolio-overlay-details">
                                <h5 className="text-white fw-400">
                                  {project.title}
                                </h5>
                                <span className="text-light">Category</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return "";
                  }
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <PostDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={false}
        ></PostDetailsModal>
      </div>
    </>
  );
};

export default FeaturePosts;
