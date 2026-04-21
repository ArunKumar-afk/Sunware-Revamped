import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionCTA from '../components/SectionCTA/SectionCTA';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Blogger API Fetcher
    const fetchPosts = async () => {
      try {
        // Using window.jQuery for the JSONP request as in original code
        window.jQuery.getJSON("https://sunwaretechnologies.blogspot.com/feeds/posts/default?alt=json-in-script&callback=?", (data) => {
          const entry = data.feed.entry;
          if (entry) {
            const formattedPosts = entry.map(post => {
              const title = post.title.$t;
              const date = new Date(post.published.$t).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              const alternateLink = post.link.find(l => l.rel === 'alternate').href;
              const postId = post.id.$t.split('post-')[1];
              const content = post.content ? post.content.$t : post.summary.$t;
              
              // Get image
              let imgUrl = "/assets/img/blog/placeholder.jpg";
              if(post.media$thumbnail) imgUrl = post.media$thumbnail.url.replace('s72-c', 's1600');
              else {
                const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                if(imgMatch) imgUrl = imgMatch[1];
              }

              const cleanExcerpt = content.replace(/<[^>]*>/g, '').substring(0, 120) + '...';

              return { id: postId, title, date, imgUrl, excerpt: cleanExcerpt, link: alternateLink };
            });
            setPosts(formattedPosts);
          }
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section className="blog-hero" style={{ padding: '160px 0 100px', background: '#fcfdfe', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="row jc-center text-center">
            <div className="col-xl-8">
              <h1 className="wow fadeInUp" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
                Insights & <span style={{ color: '#EF7F1A' }}>Innovation</span>
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Exploring the intersection of data engineering, cloud architecture, and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-area" style={{ padding: '100px 0' }}>
        <div className="container">
          {loading ? (
            <div className="row" id="blog-loader">
              <div className="col-12 text-center">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div>
            </div>
          ) : (
            <div className="row" id="blogger-posts">
              {posts.map((post) => (
                <div key={post.id} className="col-xl-4 col-md-6 mb-40 wow fadeInUp">
                  <div className="blog-card" style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #eee', transition: '0.4s', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="blog-card-img" style={{ backgroundImage: `url('${post.imgUrl}')`, width: '100%', height: '240px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="blog-card-content" style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <div className="blog-card-date" style={{ fontSize: '13px', color: '#EF7F1A', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '15px' }}>{post.date}</div>
                      <h4 className="blog-card-title" style={{ fontSize: '22px', fontWeight: 800, color: '#0a0f1e', lineHeight: 1.4, marginBottom: '15px' }}>{post.title}</h4>
                      <p className="blog-card-excerpt" style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="blog-card-link" style={{ fontWeight: 700, color: '#0a0f1e', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginTop: 'auto' }}>
                        Read Contribution <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SectionCTA title="Build Your Ideal World — We’re Ready!" />
    </>
  );
};

export default Blog;
