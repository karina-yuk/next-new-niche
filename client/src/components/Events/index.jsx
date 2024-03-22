import React from 'react';
import './Events.css';

const Events = ({ Header, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2005 - 2010",
      title: "Computer Science",
      place: "Technical University of Moldova",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2014 - 2018",
      title: "Advanced Diploma",
      place: "George Brown College",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2023 - 2024",
      title: "Certification",
      place: "University of Toronto",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  const experienceDetails = [
    {
      yearRange: "2016 - 2018",
      title: "Jr. Architectural Tech",
      place: "NORR",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2018 - 2020",
      title: "Architectural Tech",
      place: "Hariri Pontarini Architects",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2020 - 2023",
      title: "Architectural Tech",
      place: "One York Construction Management",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  return (
    <section id="events" className={`section ${darkTheme ? "bg-dark-1" : ""}`}>
      <div className={`container ${Header ? "" : "px-lg-5"}`}>
        <div className="position-relative d-flex text-center mb-5">
          <h2 className={`text-24 fw-600 w-100 mb-0 ${darkTheme ? "text-muted opacity-1" : "text-light opacity-4"}`}>
            Grape Gatherings
          </h2>
          <p className={`text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 ${darkTheme ? "text-white" : "text-dark"}`}>
            WINE EVENTS
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Americas
            </h2>
            {educationDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Europe
            </h2>
            {experienceDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;



