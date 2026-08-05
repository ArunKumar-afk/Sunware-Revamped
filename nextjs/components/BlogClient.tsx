"use client";
import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  link: string;
  thumb: string;
  content: string;
  date: string;
}

export default function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there's a ?post= param
    const params = new URLSearchParams(window.location.search);
    const postUrl = params.get("post");

    // Fetch posts via JSONP
    const callbackName = "blogCallback_" + Date.now();
    (window as any)[callbackName] = function (data: any) {
      const entries = data.feed.entry || [];
      const parsed: BlogPost[] = entries.map((entry: any) => {
        const title = entry.title.$t;
        const link = entry.link.find((l: any) => l.rel === "alternate")?.href || "#";
        let thumb = "";
        if (entry.content && entry.content.$t.includes("<img")) {
          const match = entry.content.$t.match(/<img[^>]+src="([^">]+)"/);
          if (match) thumb = match[1];
        } else if (entry.media$thumbnail) {
          thumb = entry.media$thumbnail.url;
        }
        thumb = thumb.replace(/\/s[0-9]+.*?\/|\/w[0-9]+.*?\//, "/s1600/");
        const content = entry.content?.$t || "";
        const date = new Date(entry.published.$t).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        return { title, link, thumb, content, date };
      });
      setPosts(parsed);
      setLoading(false);

      // If there's a post URL, find and show it
      if (postUrl) {
        const found = parsed.find((p) => p.link === decodeURIComponent(postUrl));
        if (found) setSelectedPost(found);
      }

      delete (window as any)[callbackName];
    };

    const script = document.createElement("script");
    script.src = "https://sunwaretechnologies.blogspot.com/feeds/posts/default?alt=json-in-script&callback=" + callbackName + "&max-results=50";
    document.body.appendChild(script);
  }, []);

  // Single post view
  if (selectedPost) {
    // Remove ALL images from content to avoid duplicates (we show featured image separately)
    let cleanContent = selectedPost.content;
    cleanContent = cleanContent.replace(/<a[^>]*>\s*<img[^>]*>\s*<\/a>/gi, '');
    cleanContent = cleanContent.replace(/<img[^>]*>/gi, '');

    return (
      <>
        <section style={{ padding: "60px 0 40px" }}>
          <div className="container">
            <a href="/blog" className="default_button" style={{ marginBottom: "30px", display: "inline-flex", background: "rgba(0,0,0,0.05)", color: "var(--primary-color-1)", border: "1px solid #eee" }}>
              <i className="fal fa-arrow-left" style={{ marginRight: "8px" }}></i> Back to Blog
            </a>
            <h1 style={{ color: "var(--primary-color-1)", fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, lineHeight: 1.3, marginBottom: "16px" }}>{selectedPost.title}</h1>
            <p style={{ color: "#888", fontSize: "14px", marginBottom: "30px" }}>{selectedPost.date}</p>
            {selectedPost.thumb && (
              <div style={{ marginBottom: "40px", borderRadius: "16px", overflow: "hidden" }}>
                <img src={selectedPost.thumb} alt={selectedPost.title} style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover" }} />
              </div>
            )}
            <div className="blog-content" style={{ fontSize: "17px", lineHeight: 1.9, color: "#444", maxWidth: "800px" }} dangerouslySetInnerHTML={{ __html: cleanContent }} />
          </div>
        </section>
      </>
    );
  }

  // Blog listing view
  return (
    <>
      <section style={{ padding: "60px 0 30px", textAlign: "center" }}>
        <div className="container">
          <h1 className="wow fadeInUp" style={{ color: "var(--primary-color-1)", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.2, marginBottom: "20px" }}>Insights &amp; <span style={{ color: "#EF7F1A" }}>Innovation</span></h1>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>Exploring the intersection of data engineering, cloud architecture, and artificial intelligence.</p>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
            </div>
          ) : (
            <div className="row">
              {posts.map((post, i) => (
                <div className="col-lg-4 col-md-6 mb-40" key={i}>
                  <div className="blog__one-item" style={{ height: "100%" }}>
                    <div className="blog__one-item-image" style={{ marginBottom: "20px" }}>
                      <a href={`/blog?post=${encodeURIComponent(post.link)}`}>
                        <img src={post.thumb || "/assets/img/blog/blog-1.jpg"} alt={post.title} style={{ height: "220px", width: "100%", objectFit: "cover", borderRadius: "16px" }} loading="lazy" />
                      </a>
                    </div>
                    <div className="blog__one-item-content">
                      <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>{post.date}</p>
                      <h5 style={{ marginBottom: "12px" }}><a href={`/blog?post=${encodeURIComponent(post.link)}`} style={{ color: "#0a0f1e", textDecoration: "none" }}>{post.title}</a></h5>
                      <a className="more_btn" href={`/blog?post=${encodeURIComponent(post.link)}`}>Read More<i className="flaticon flaticon-right-up"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
