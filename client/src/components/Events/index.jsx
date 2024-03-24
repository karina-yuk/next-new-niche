import React, { useState, useEffect, useRef } from 'react';
import './Events.css';

const Events = ({ Header, darkTheme }) => {
  const [activeItem, setActiveItem] = useState(null);
  const wrapperRef = useRef(null); // Reference to the wrapper for detecting outside
  const events = [
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      // imageUrl: "https://example.com/path/to/your/image.jpg",
      url: "https://www.google.com",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
    },
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
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
      imageUrl: "https://e22u.short.gy/KTU286",
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
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
    },
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
    },
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
    },
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
    },
    {
      imageUrl: "https://e22u.short.gy/KTU286",
      url: "https://e22u.short.gy/KTU286",
      title: "Event Title 1",
      description: "This is a small description for Event 1. It should not exceed 30 words, but should be informative enough to give context."
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



