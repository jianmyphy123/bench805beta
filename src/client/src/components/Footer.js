import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {

    return (

      <footer className="main_footer">
        <div className="footer_top">
          <div className="resolution">
            <div className="footer_menu align_c">
              <nav>
                <Link to="/dashboard" title="bench805.com | Benchmarking">Benchmarking</Link>
                <Link to="/about" title="bench805.com | About">About</Link>
                <a href="mailto:info@bench805.com?subject=Feedback" title="bench805.com | Get in Touch" target="_blank" rel="noopener noreferrer">Get in Touch</a>
                <Link to="/termsofservice" title="bench805.com | Terms of Service">Terms of Service</Link>
                <Link to="/privacypolicy" title="bench805.com | Privacy Policy">Privacy Policy</Link>
                <a href="http://sorbusadvisors.com/" title="bench805.com | Sorbus Valuation" target="_blank"rel="noopener noreferrer">Sorbus Valuation</a>

              </nav>
            </div>
            <div className="footer_soc_icns">
              <a aria-hidden="true" target="_blank" href="https://www.linkedin.com/company-beta/1169022" className="fa fa-linkedin-square" rel="noopener noreferrer"> </a>
              <a aria-hidden="true" target="_blank" href="https://twitter.com/SorbusValuation" className="fa fa-twitter" rel="noopener noreferrer"> </a>
            </div>
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
