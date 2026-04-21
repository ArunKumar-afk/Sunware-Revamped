import React from 'react';

const SectionCTA = ({ title = "Ready to Transform Your Organization?" }) => {
  const openModal = (e) => {
    e.preventDefault();
    document.getElementById('enquire-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="container" style={{ padding: '80px 15px' }}>
      <div className="row">
        <div className="col-xl-12">
          <div className="footer__cta-area mb-60">
            <div className="row al-center">
              <div className="col-xl-6 col-lg-7 lg-mb-40">
                <div className="footer__cta-area-left lg-t-center">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
                  <a className="default_button" href="#" onClick={openModal}>
                    Contact Us Today<i className="flaticon-right-up"></i>
                  </a>
                  <div className="footer__cta-area-right-tel">
                    <div className="footer__cta-area-right-tel-icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="footer__cta-area-right-tel-info">
                      <span>Call Us Now</span>
                      <h6>
                        <a href="tel:(415)755-7890">(415) 755-7890</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCTA;
