"use client";

export default function FooterCTA({ heading = "Build Your Ideal World - We're Ready!", buttonText = "Start Today", buttonHref = "#", onClickEnquire = false }: { heading?: string; buttonText?: string; buttonHref?: string; onClickEnquire?: boolean }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="footer__cta-area mb-60">
            <div className="row al-center">
              <div className="col-xl-6 col-lg-7 lg-mb-40">
                <div className="footer__cta-area-left lg-t-center">
                  <h2>{heading}</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
                  {onClickEnquire ? (
                    <a className="default_button" href="#" onClick={(e) => { e.preventDefault(); (window as any).openEnquireModal?.(e); }}>{buttonText}<i className="flaticon-right-up"></i></a>
                  ) : (
                    <a className="default_button" href={buttonHref}>{buttonText}<i className="flaticon-right-up"></i></a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
