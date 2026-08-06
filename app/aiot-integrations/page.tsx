import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "AIoT Integrations - Sunware Technologies",
  description: "AI and IoT integration solutions from Sunware Technologies. Intelligent edge computing and autonomous decision systems.",
  alternates: { canonical: "https://sunwaretechnologies.com/aiot-integrations" },
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
<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">AIoT Integrations</h1>
<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Unlocking new levels of intelligence by combining AI and IoT.</p>
</div>
</div>
</div>
		<div class="container section-padding">
			<div class="story-row al-center">
				<div class="story-content wow fadeInLeft">
					<h2 style="font-size:42px;font-weight:700;margin-bottom:25px;">The Intelligence of Things</h2>
					<p style="font-size:18px;line-height:1.8;color:#555;">Sunware integrates AI with IoT to create the Artificial Intelligence of Things (AIoT), enhancing device intelligence and automation capabilities. AIoT solutions leverage machine learning and data analytics to provide predictive maintenance and responsive systems.</p>
					<p class="mt-20" style="font-size:18px;line-height:1.8;color:#555;">These integrations allow for smarter, more responsive IoT ecosystems that drive business efficiency and ground-breaking innovation.</p>
				</div>
				<div class="story-image wow fadeInRight"><img src="aiot_integrations_zigzag_1774880000009_1774877448503.png" alt="AIoT"></div>
			</div>
		</div>
		<section class="tailored-grid"><div class="container"><div class="row g-4">
			<div class="col-lg-3"><div class="solution-card"><h4>Intelligence</h4><p>Smart device logic.</p></div></div>
			<div class="col-lg-3"><div class="solution-card"><h4>Automation</h4><p>Hands-free control.</p></div></div>
			<div class="col-lg-3"><div class="solution-card"><h4>Predictive</h4><p>Anticipatory systems.</p></div></div>
			<div class="col-lg-3"><div class="solution-card"><h4>Innovation</h4><p>Leading-edge AIoT.</p></div></div>
		</div></div></section>
		<div class="container"><div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Merge Intelligence with Connectivity</h2>
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
			</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}