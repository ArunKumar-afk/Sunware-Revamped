import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Mobile App Development - Sunware Technologies",
  description: "Native and cross-platform mobile app development services from Sunware Technologies. iOS, Android and hybrid solutions.",
  alternates: { canonical: "https://sunwaretechnologies.com/mobile-app-development" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
<source src="waves_1.mp4" type="video/mp4">
</video>

<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
<div class="container jc-center text-center">
                                <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                        <a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid var(--primary-color-1); color: var(--primary-color-1);"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                                </div>
<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Mobile Application Development</h1>
<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Innovation meets mobility with cutting-edge, user-centric mobile solutions.</p>
</div>
</div>
</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Powerful Mobility</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware excels in mobile application development, offering bespoke mobile solutions across iOS, Android, and cross-platform applications. We integrate the latest technology, UI/UX designs, and security to develop applications that meet your business needs and satisfy customers.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="mobile_app_development_zigzag_1774880000010_1774877468327.png" alt="Mobile App Development">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4 jc-center">
        <div class="col-lg-3"><div class="solution-card"><h4>User-Centric</h4><p>Designed for maximum engagement and intuitive use.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Scalable</h4><p>Built on robust architectures that grow with your user base.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Performance</h4><p>Optimized for speed and smooth interactions.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Security</h4><p>Bank-grade protection for sensitive user data.</p></div></div>
    </div></div></section>

	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Bring Your App Vision to Life</h2>
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
	</div>
					</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}