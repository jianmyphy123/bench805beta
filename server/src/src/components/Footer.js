import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (

      <footer className="main_footer">
        <div className="footer_top">
          <div className="resolution">
            <div className="footer_menu align_c">
              <nav><a href="/dashboard" title="bench805.com | Benchmarking">Benchmarking</a><a href="/about" title="bench805.com | About">About</a><a href="mailto:info@bench805.com?subject=Feedback" title="bench805.com | Get in Touch" target="_blank">Get in Touch</a><a href="/terms_of_service" title="bench805.com | Terms of Service">Terms of Service</a><a href="/privacy_policy" title="bench805.com | Privacy Policy">Privacy Policy</a><a href="http://sorbusadvisors.com/" title="bench805.com | Sorbus Valuation" target="_blank">Sorbus Valuation</a></nav>
            </div>
            <div className="footer_soc_icns"><a aria-hidden="true" target="_blank" href="https://www.linkedin.com/company-beta/1169022" className="fa fa-linkedin-square"></a><a aria-hidden="true" target="_blank" href="https://twitter.com/SorbusValuation" className="fa fa-twitter"></a></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="resolution align_c">
            <div className="footer_bottom_content">
              <div className="footer_copy"><span>&copy; 2017  bench805.com. All rights reserved</span></div>
            </div>
            <div className="btn_scrollup"><a href="/#">UP</a></div>
          </div>
        </div>
      </footer>

    );

  }

}

export default Footer;
