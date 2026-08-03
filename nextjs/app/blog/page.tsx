import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Blog - Sunware Technologies | Tech Insights & Articles",
  description: "Read the latest insights on AI, data engineering, cloud solutions and digital transformation from the Sunware Technologies team.",
  alternates: { canonical: "https://sunwaretechnologies.com/blog" },
};

const content = `<section class="blog-hero">
			<div class="container">
				<div class="row jc-center text-center">
					<div class="col-xl-8">
						<h1 class="wow fadeInUp" style="color: var(--primary-color-1); font-size: 64px; font-weight: 900; line-height: 1.2; margin-bottom: 20px;">Insights & <span style="color:#EF7F1A;">Innovation</span></h1>
						<p class="wow fadeInUp" data-wow-delay=".2s" style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto;">Exploring the intersection of data engineering, cloud architecture, and artificial intelligence.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="blog-grid-area" style="padding: 100px 0;">
			<div class="container">
                <div class="row" id="blogger-posts">
                    <!-- Dynamic Content -->
                    <div class="col-12 text-center" id="blog-loader">
                        <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                    </div>
                </div>
			</div>
		</section>

		<!-- Footer CTA -->
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="footer__cta-area mb-60">
						<div class="row al-center">
							<div class="col-xl-6 col-lg-7 lg-mb-40">
								<div class="footer__cta-area-left lg-t-center">
									<h2>Stay Ahead of the Curve - Let's Connect</h2>
								</div>
							</div>
							<div class="col-xl-6 col-lg-5">
								<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
									<a class="default_button" href="#" onclick="openEnquireModal(event)">Start Today<i class="flaticon-right-up"></i></a>
                                                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}