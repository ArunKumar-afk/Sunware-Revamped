import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Careers - Sunware Technologies | Join Our Team",
  description: "Explore career opportunities at Sunware Technologies. Join a global team building AI, cloud and data engineering solutions across USA, UAE, UK and India.",
  alternates: { canonical: "https://sunwaretechnologies.com/careers" },
};

const content = `<!-- Careers Hero Start -->
        <div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
                <video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
                        <source src="waves_2.mp4" type="video/mp4">
                </video>
                <div class="container" style="position: relative; z-index: 5; padding: 120px 0;">
                        <div class="row al-center">
                                <div class="col-lg-6">
                                        <span class="subtitle wow fadeInLeft">Careers at Sunware</span>
                                        <h1 class="wow fadeInUp" style="color: var(--primary-color-1); font-size: 64px; font-weight: 900; line-height: 1.2; margin-bottom: 20px;"><span style="color:#0070D2">Where You Can</span> <br><span style="color:#EF7F1A">Make a Difference</span></h1>
                                        <h3 class="wow fadeInUp" data-wow-delay=".2s" style="font-weight:700; font-size: 24px; margin-bottom: 25px; color: #333;">Embrace Flexibility &amp; Thrive</h3>
                                        <p class="wow fadeInUp" data-wow-delay=".4s" style="font-size: 18px; line-height: 1.8; color: rgba(0,0,0,0.75); margin-bottom: 35px;">Sunware Technologies is your digital transformation partner, fueling growth and success through cutting-edge software solutions. We craft impeccable customer experiences with meticulously designed platforms, boosting efficiency, scalability, and bottom lines.</p>
                                        <div class="wow fadeInUp" data-wow-delay=".6s" style="display: flex; gap: 20px; flex-wrap: wrap;">
                                                <a class="default_button" href="#open-positions">View Open Roles <i class="flaticon-right-up"></i></a>
                                                <a class="default_button" href="#" onclick="openEnquireModal(event)" style="background: rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.15); color: var(--primary-color-1);">Get in Touch <i class="flaticon-right-up"></i></a>
                                        </div>
                                </div>
                                <div class="col-lg-6">
                                        <div class="wow fadeInRight" data-wow-delay=".4s" style="background: rgba(255,255,255,0.85); padding: 40px; border-radius: 32px; border: 1px solid rgba(0,0,0,0.08); backdrop-filter: blur(10px);">
                                                <div style="font-size: 36px; color: #EF7F1A; margin-bottom: 16px; line-height: 1;"><i class="fas fa-quote-left"></i></div>
                                                <p style="font-size: 18px; line-height: 1.8; color: #444; margin: 0; font-style: italic;">At Sunware, we understand that a happy and healthy team is a productive team. We foster a dynamic work environment that empowers you to excel, both personally and professionally. Our flexible work model allows you to choose the setting that best suits your needs, providing all the tools and resources you need to succeed.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <!-- Careers Hero End -->

    <!-- Open Positions Iframe -->
    <section class="section-padding" id="open-positions">
        <div class="container">
            <div class="section-title t-center mb-60">
                <span class="subtitle">Join Our Team</span>
                <h2 style="font-weight:800; margin-bottom: 20px;">Open Positions</h2>
                <p style="max-width: 800px; margin: 0 auto; color: #666; font-size: 18px;">Build Your Career While Building the Future: We are looking for passionate individuals to join our team and grow alongside us. Help us create the platform that empowers the next wave of online success stories!</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <iframe id="careers-portal-iframe" src="https://sunwin.sunwaretechnologies.com/portal/sunware" class="careers-iframe"></iframe>
                </div>
            </div>
        </div>
    </section>

    <script>
    var portalIframe = document.getElementById('careers-portal-iframe');
    var PADDING = 60;
    var MIN_HEIGHT = 500;
    var MAX_HEIGHT = 4000;
    var resizeTimer = null;
    var lastSetH = 0;

    window.addEventListener('message', function(e) {
        if (!portalIframe) return;
        if (!e.data || e.data.type !== 'portal-resize') return;
        var h = parseInt(e.data.height, 10);
        if (isNaN(h) || h <= 0) return;
        var finalH = Math.min(Math.max(h + PADDING, MIN_HEIGHT), MAX_HEIGHT);
        if (Math.abs(finalH - lastSetH) > 20) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                lastSetH = finalH;
                portalIframe.style.height = finalH + 'px';
            }, 100);
        }
    });
    </script>

    <!-- Humans First & Culture -->
    <section class="section-padding" style="background: #f8faff;">
        <div class="container">
            <div class="row al-center mb-80">
                <div class="col-lg-6">
                    <span class="subtitle">Our Culture</span>
                    <h2 style="color:var(--primary-color-1); font-weight:800; font-size: 42px;">Humans First. <br>Technology Second.</h2>
                </div>
                <div class="col-lg-6">
                    <p style="color: #555; font-size: 18px; border-left: 3px solid #EF7F1A; padding-left: 25px;">At Sunware, technology serves a noble purpose: empowering people. We believe the journey should be just as rewarding as the destination, fostering happier clients, partners, and employees.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-40">
                    <div class="culture-card" style="background: #fff; border: 1px solid #edf0f3;">
                        <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Balancing Priorities</h4>
                        <p style="color: #666;">Your needs are our North Star. We value collaboration and trust above all else. We see ourselves as an extension of your team, driving success together.</p>
                    </div>
                </div>
                <div class="col-lg-4 mb-40">
                    <div class="culture-card" style="background: #fff; border: 1px solid #edf0f3;">
                        <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Global Reach</h4>
                        <p style="color: #666;">We help businesses in Banking, Healthcare, and Manufacturing leapfrog into the future using agile methodologies and a global delivery network.</p>
                    </div>
                </div>
                <div class="col-lg-4 mb-40">
                    <div class="culture-card" style="background: #fff; border: 1px solid #edf0f3;">
                        <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Happy People</h4>
                        <p style="color: #666;">Our team works for a purpose. They flourish in a culture that fosters personal growth, celebrates learning, and makes the office feel like home.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Career Value Props -->
    <section class="section-padding" style="background:#fff;">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-rocket"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">Launch Your Impact</h4>
                        <p style="color:#666;">Work on cutting-edge projects that shape the future of technology and build a meaningful career with real-world impact.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">We Invest in You</h4>
                        <p style="color:#666;">Our greatest asset is our team. That is why we prioritize your well-being and professional development. Your success is our success.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-user-friends"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">Mentorship Matters</h4>
                        <p style="color:#666;">Sunware fosters a culture of mentorship. Learn from seasoned professionals and share your own skills as you grow alongside a supportive team.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-leaf"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">Sustainable Growth</h4>
                        <p style="color:#666;">We are committed to a sustainable future, both for the environment and our people. Experience a culture of continuous improvement.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-graduation-cap"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">Your Development</h4>
                        <p style="color:#666;">There's always room to learn and grow. We provide the resources and guidance you need to reach your full potential on your chosen path.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="culture-card">
                        <div style="font-size: 30px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-globe"></i></div>
                        <h4 style="font-weight:800; margin-bottom:15px;">Global Network</h4>
                        <p style="color:#666;">Join our international community of passionate individuals at the forefront of technology. Collaborate with experts and push boundaries together.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Ready to Make an Impact? Join Our Team</h2>
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