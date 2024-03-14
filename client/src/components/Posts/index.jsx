import React from 'react';
import './Posts.css';

const post = [
  {
    id: 1,
    name: "Gabriel Kraskovskyi",
    title: "Arch Tech from USA",
    quote: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anna Antropova",
    title: "Arch from UK",
    quote: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  
];

const Post = () => {
  return (
    <section id="post" className="post-section">
      <div className="container">
        <h2 className="section-title">Colleagues Speak</h2>
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <div className="post-content">
                <p>{post.quote}</p>
                <div className="post-rating">
                  {'★'.repeat(post.rating)}
                </div>
                <h5 className="post-name">{post.name}</h5>
                <h6 className="post-title">{post.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
