import React, { Component } from 'react';

class Landing extends Component {

  render() {

    return (
      <div className="page_body">

        <section className="greeting_section">
          <div className="resolution align_c">
            <div className="main_greeting color_w">
              <div style={{visibility: 'visible', animationName: 'fadeInDown'}} className="hn1 wow fadeInDown option-2">
                <h1>Purchase Price Allocations</h1>
              </div>
              <div style={{visibility: 'visible', animationName: 'fadeInUp'}} className="hn2 wow fadeInUp option-3">
                <h2>Visualized Through Benchmarking</h2>
              </div>
              <br/>
              <div style={{visibility: 'visible', animationName: 'fadeInUp'}} className="btn_color_fill wow fadeInUp option-4"><a href="/users/signup">Get Started for Free</a></div>
            </div>
          </div>
          <div className="arrow_down slowjump"></div>
          <div className="video_container">
            <video id="video_bg" poster=" " autoPlay loop muted tabIndex="0">
              <source src="video/bg_video.mp4" type="video/mp4"/>
            </video>

          </div>
        </section>

        <section className="padding_top_bottom main_wi_section">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c">
              <h2>What is bench805.com?</h2>
            </div><br/><br/>
            <div className="columns_3_container clrfx">
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInLeft">
                <div>
                  <div className="img_icn icon-icon_main_01"><img src="images/svg/icon_main_01.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>VALUATION</h3>
                  </div>
                  <div>Quickly estimate valuations of intangible assets, tangible assets and goodwill.</div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInUp">
                <div>
                  <div className="img_icn icon-icon_main_02"><img src="images/svg/icon_main_02.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>GUIDANCE</h3>
                  </div>
                  <div>
                    <p>Benchmark your own analysis against comparable purchase price allocations.</p><br/>
                    <p>Develop guiding assumptions for intangible asset amortization and  impairment.</p>
                  </div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInRight">
                <div>
                  <div className="img_icn icon-icon_main_03"><img src="images/svg/icon_main_03.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>REVIEW</h3>
                  </div>
                  <div>Scrutinize purchase price allocations developed by valuation firms, management.</div>
                </div>
              </div>
            </div><br/><br/>
          </div>
        </section>

        <section className="padding_top_bottom main_factlist">
          <div className="resolution padding_lr color_w">
            <div className="hn2 ta_c">
              <h2>Bench805.com by the numbers</h2>
            </div><br/><br/>
            <div className="columns_3_container clrfx">
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInUp option-2">
                <div>
                  <div className="img_icn icon-icon_main_04"><img src="images/svg/icon_main_04.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>OVER</h3>
                  </div>
                  <div>1,500 transactions<br/>                                in the database</div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInUp option-1">
                <div>
                  <div className="img_icn icon-icon_main_05"><img src="images/svg/icon_main_05.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>INDUSTRIES</h3>
                  </div>
                  <div>
                    <p>50+ narrowly defined<br/>                                    industry categories</p>
                  </div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeInUp option-3">
                <div>
                  <div className="img_icn icon-icon_main_06"><img src="images/svg/icon_main_06.svg" width="140" height="140" alt=""/></div>
                </div>
                <div>
                  <div className="hn3">
                    <h3>YEARS</h3>
                  </div>
                  <div>2015<br/>                                2016</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding_top_bottom">
          <div className="resolution padding_lr mwidth_840">
            <div className="hn2 ta_c">
              <h2>Purchase Price Allocation in Different Industries</h2>
            </div><br/><br/>
            <div className="hiw_gallery clrfx">
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-1">
                <div className="imgfit"><img src="/images/img_purchase_01.jpg" alt="Bench805.com | Technology"/></div>
                <div className="hn3">
                  <h3>Technology</h3>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-2">
                <div className="imgfit"><img src="/images/img_purchase_02.jpg" alt="Bench805.com | Healthcare	"/></div>
                <div className="hn3">
                  <h3>Healthcare&#x9;</h3>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-3">
                <div className="imgfit"><img src="/images/img_purchase_03.jpg" alt="Bench805.com | Consumer Products"/></div>
                <div className="hn3">
                  <h3>Consumer Products</h3>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-4">
                <div className="imgfit"><img src="/images/img_purchase_04.jpg" alt="Bench805.com | Financial Services"/></div>
                <div className="hn3">
                  <h3>Financial Services</h3>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-5">
                <div className="imgfit"><img src="/images/img_purchase_05.jpg" alt="Bench805.com | Telecommunications"/></div>
                <div className="hn3">
                  <h3>Telecommunications</h3>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="wow fadeIn option-6">
                <div className="imgfit"><img src="/images/img_purchase_06.jpg" alt="Bench805.com | Industrials"/></div>
                <div className="hn3">
                  <h3>Industrials</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding_top_bottom howitwork_section">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c color_w">
              <h2>How It Works</h2>
            </div><br/><br/><br/>
            <div className="main_steps clrfx">
              <div style={{visibility: 'hidden', animationName: 'none'}} className="clrfx wow fadeInLeft option-1">
                <div><span>Step 1</span><span>1</span></div>
                <div>
                  <div className="btn_color_fill"><a href="/users/signup">Sign Up</a></div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="clrfx wow fadeInRight option-2">
                <div><span>Step 2</span><span>2</span></div>
                <div>
                  <div>Select your filters such as:<br/><span>industry, intangible asset inclusion/exclusion, keywords</span></div>
                </div>
              </div>
              <div style={{visibility: 'hidden', animationName: 'none'}} className="clrfx wow fadeInLeft option-3">
                <div><span>Step 3</span><span>3</span></div>
                <div>
                  <div>Observe summary data such as:<br/><span>valuation percent allocations, useful lives, and number of available observations</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding_top_bottom">
          <div className="resolution padding_lr mwidth_840">
            <div style={{visibility: 'hidden', animationName: 'none'}} className="hn2 ta_c wow fadeInDown option-1">
              <h2>Access exclusive data to guide your next purchase price allocation (ASC 805 or IFRS 3)</h2>
            </div><br/><br/>
            <div style={{visibility: 'hidden', animationName: 'none'}} className="btn_color_fill wow fadeInUp option-4"><a href="/users/signup">Get Started for Free</a></div>
          </div>
        </section>
      </div>

    );

  }

}

export default Landing;
