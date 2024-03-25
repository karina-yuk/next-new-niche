import React, { useState, useEffect, useRef } from 'react';
import './Events.css';

const Events = ({ Header, darkTheme }) => {
  const [activeItem, setActiveItem] = useState(null);
  const wrapperRef = useRef(null); // Reference to the wrapper for detecting outside
  const events = [
    {
      imageUrl: "https://i.pinimg.com/564x/45/6e/10/456e100b6448a5b773a0363d1b2c8d55.jpg",
      
      url: "https://www.google.com",
      title: "",
      description: ""
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/-huSeQKd_-p8/W5DrHdvLOBI/AAAAAAABYQA/RP1o15IgfdsF67agyFnqrRBOYt_A_WaSwCHMYCw/cricova-winery-913?imgmax=1600",
      url: "https://e22u.short.gy/KTU286",
      title: "",
      description: ""
    },
    {
      imageUrl: "https://facts.net/wp-content/uploads/2023/07/15-facts-about-charleston-wine-food-festival-1690069801.jpg",
      url: "https://charlestonwineandfood.com/",
      title: "Charleston Wine & Food Festival",
      description: "The Charleston Wine & Food Festival is certainly not your typical food and wine festival. You can expect the best food and wine pairings that you would imagine are served in other venues. The Charleston Wine & Food festival however is organized by a collective of artists, including but not limited to chefs, painters, musicians, writers and much more. This festival is not only a celebration of fine wine and food pairings or good cuisine and winemaking, it is also an occasion to celebrate and support art and artistic expression in the multicultural and exciting environment of the city of Charleston, in South Carolina."
    },
    {
      imageUrl: "https://orlandoflconnections.com/wp-content/uploads/2014/09/fwc-1.jpg",
      url: "https://swandolphinfoodandwineclassic.com/",
      title: "The Food & Wine Classic",
      description: "The food and wine classic which is a two days festival, offering food and wine tasting and many more fun activities returns in 2023! The event will be held in Walt Disney World Swan and Dolphin, which is located in the heart of Walt Disney World Resort. This resort offers a wide range of dining experiences, from quick service to fine dining, and an extensive list of wines and beers that are available by the glass or bottle. Guests can enjoy these beverages and food at any time throughout the festival. The event also has a variety of options for guests who are looking for something more than just food and drink. The resort offers a number of recreational activities including swimming pools, spas, golf courses, moreover if you stay overnight. And of course, live music and other performances will take place during the entire festival."
    },
    {
      imageUrl: "https://i.pinimg.com/564x/6f/e0/99/6fe0994de4b59b7e0bcec893f211aaa9.jpg",
      url: "https://www.carnifest.com/its-beaujolais-nouveau-time-festival-2024/",
      title: "Beaujolais Nouveau Time Festival",
      description: "The Beaujolais Nouveau Time Festival is a celebration of the release of new Beaujolais wine. It takes place every year on the third Wednesday in November in this region of south Burgundy. The guests are supposed to taste and compare 12 varieties of Beaujolais wine. Beaujolais Nouveau is a type of red wine made in the Burgundy region of France around the town of Beaujeu and released every autumn in November. The festival typically lasts a few days and includes various activities such as concerts, street markets, fireworks displays, walks, games, film screenings, etc."
    },
    {
      imageUrl: "https://cdn1.discovertuscany.com/img/montepulciano/bravio-delle-botti/bravio-delle-botti23.jpg?auto=compress,enhance,format&h=750",
      url: "https://www.discovertuscany.com/montepulciano/bravio-delle-botti.html",
      title: "Barrel race at Montepulciano",
      description: "One of the most interesting events among Tuscany wine festivals, he Bravìo delle Botti is the challenging barrel race between eight districts: Cagnano, Collazzi, Le Coste, Gracciano, Poggiolo, San Donato, Talosa and Voltaia, all located along the historic city center. They compete for a painted cloth by rolling barrels of about 80 kg each, along an uphill path of over a kilometer. The barrels are pushed by two athletic pushers, while the route of the race winds through the picturesque streets of the historic center of the city of Poliziana until the arrival, located in the churchyard of the Duomo in Piazza Grande. It’s one of the most spectacular wine events in Tuscany."
    },
    {
      imageUrl: "https://moldovatovisit.eu/wp-content/uploads/2018/04/moldova-wineries-tour-4-1024x658.jpg",
      url: "https://moldova.travel/en/rutele-vietii/ziua-nationala-a-vinului/",
      title: "Moldova's Wine Festival",
      description: "Being an annual tradition and appreciated by the amateurs of good wines, both in the country and abroad, the Celebration of the Wine of Moldova is held every year on the first weekend of October in the Square of the Great"
    },
    {
      imageUrl: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/420046892_768184115346173_77036514565723437_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K7UvmG8bUaUAX_ix0mK&_nc_ht=scontent-ord5-2.xx&oh=00_AfDqE2Dy_tMfBtMQl0bhZKxjgZvp-ZzgJLgoMlkG871c9w&oe=66066589",
      url: "https://niagarawinefestival.com/",
      title: "SPRING SPARKLES FESTIVAL",
      description: "Let’s add a bit of sparkle to the early days of spring! Wake up from winter and kick off spring with fizz and fun. The Spring Sparkles Festival celebrates all 100% Ontario VQA Sparkling wines – traditional or charmat method, of any varietal or style. Integrate this wine into your everyday life and add some sparkle to your day, even in the humdrum of a long, Canadian winter."
    },
    {
      imageUrl: "https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/rioja-la/fiesta-vendimia-la-rioja.jpg",
      url: "https://www.spain.info/en/discover-spain/fiestas-grape-harvest-rioja/",
      title: "The San Mateo Festival ",
      description: "The San Mateo Festival is an event that happens every year in the Rioja wine region in Spain. It is a celebration of the grape harvest, and it attracts people from all over the world to come and enjoy a week of festivities. This festival has been happening since 1956 first known as Fiestas de la Vendimia (Harvest Parties or Festivals). Nowadays, it's one of the most popular events of its kind which includes many activities such as grape harvesting, massive wine and food tasting, dancing, etc. Also, one of the emphasis of the event is squeezing the must out of the grapes in the conventional way by pressing the grapes with the people feet. Therefore, with the help of a local wine producer, one can get an idea of what goes into the process. The Rioja Wine Harvest Festivity is one of the most important events in the calendar for wine producers and their families, as well as for all those who love wine and are interested in knowing more about it."
    },
    {
      imageUrl: "https://i.pinimg.com/564x/3c/77/da/3c77da9a3e11cf13a0f82d77ac00d9d0.jpg",
      url: "",
      title: "",
      description: ""
    },
    {
      imageUrl: "https://i.pinimg.com/564x/02/51/5d/02515dcf6a7122f956db8c82bc19babf.jpg",
      url: "",
      title: "",
      description: ""
    },
  ];

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index); // Toggle active state or set new
  };

  useEffect(() => {
    // Function to check if click is outside the items and reset activeItem
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveItem(null); // Deactivate all items
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
 
  return (
    <section id="events" className={`section ${darkTheme ? "bg-dark-1" : ""}`}>
      <div className={`container ${Header ? "" : "px-lg-5"}`}>
        <div className="position-relative d-flex text-center mb-5">
          <h2 className={`text-24 fw-600 w-100 mb-0 ${darkTheme ? "text-muted opacity-1" : "text-light opacity-4"}`}>
            Grape Gatherings
          </h2>
          <p className={`text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 ${darkTheme ? "text-white" : "text-dark"}`}>
            WINE EVENTS
            <span className="heading-separator-line d-block mx-auto"></span>
          </p>
        </div>

        <div className="wrapper" ref={wrapperRef}>
          <div className="items">
            {events.map((event, index) => (
              <div key={index} className="item" tabIndex="0" onClick={() => handleClick(index)} style={{ backgroundImage: `url(${event.imageUrl})`  }}>
                {/* Conditionally render item-content based on activeItem */}
                {activeItem === index && (
                  <div className="item-content">
                    <a href={event.url} className="event-title" target="_blank" rel="noopener noreferrer">{event.title}</a>
                    <p className="event-description">{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Events;



