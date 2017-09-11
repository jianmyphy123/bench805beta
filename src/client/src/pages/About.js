import React, { Component } from 'react';
import { Header, Footer } from '../components';

class About extends Component {

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />


        <div className="page_body padding_top_header">
          <section className="privacy_policy_section mwidth_680">
            <div className="resolution padding_lr">
              <div className="hn2 ta_c">
                <h1>About</h1>
              </div><br/>
              <div className="text_box ta_j">
                <div className="hn3">
                  <h3>Overview</h3>
                </div>
                <p>Whether under US GAAP or IFRS, an acquirer has to identify, value and record all relevant assets and liabilities of an acquired entity.  Bench805.com helps visualize valuations of intangible assets, goodwill, tangible assets and earn-outs in purchase accounting following corporate acquisitions.</p>
                <p>The Financial Accounting Standards Board (FASB), the Public Company Accounting Oversight Board (PCAOB) and the Securities and Exchange Commission (SEC) have all consistently emphasized the importance of accurate business combination accounting.</p>
                <p>Fair values of acquired assets and liabilities, acquired or created in a transaction, are highly subjective and remain the key point of scrutiny for regulators and auditors.  Charged with overseeing the quality of financial audits, PCAOB often sights deficiencies related to audit procedures around fair value measurements including those in purchase accounting.</p>
                <p>Intangibles assets are of a particular interests. Those valuations are developed based on highly speculative financial forecasts, unintuitive definitions of intangible assets, and complex methodologies based on many hard-to-support assumptions.</p>
                <p>Bench805.com aims to provide data to benchmark, predict or guide valuations of identifiable intangible, and some tangible, assets.  We are using purchase price allocation (“PPA”) data reported to SEC by publicly traded companies.</p>
                <div className="hn3">
                  <h3>Why Benchmarking</h3>
                </div>
                <p>Benchmarking PPAs is a common concern.  It is addressed through manual search of SEC filings or references to published summary reports, most of which don’t provide sufficient details to benchmark a particular unique situation.</p>
                <p>Bench805.com is designed to identify the most relevant of transactions, which can be filtered based on:
                  <ul className="list_v5 padding_list">
                    <li>narrowly defined industry categories</li>
                    <li>relevance of specific intangible asset categories</li>
                    <li>keywords describing acquired targets.</li>
                  </ul>
                </p>
                <p>Our goal is to allow practitioners, auditors and observers quickly create sets of relevant PPAs for accurate analysis of a subject transaction.</p>
                <div className="hn3">
                  <h3>Data Captured</h3>
                </div>
                <p>For each transaction we attempt to collect as much information as available in the SEC filings.  We are looking for the following information:</p>
                <p>General transaction detail such as names and business descriptions of acquirers and acquired entities.</p>
                <p>Values of acquired entities defined as:
                  <ul className="list_v1 padding_list">
                    <li>Total purchase consideration (or Total Assets)</li>
                    <li>Purchase price (total assets netted against operating liabilities, also referred to Net Assets)</li>
                    <li>Net Assets, Net of Cash (Net Assets less Cash)</li>
                  </ul>
                </p>
                <p>Fair Values of:
                  <ul className="list_v1 padding_list">
                    <li>Intangible assets</li>
                    <li>Goodwill</li>
                    <li>Contingent considerations (earn-outs)</li>
                    <li>Inventory</li>
                    <li>Property, Plant and Equipment</li>
                  </ul>
                </p>
                <p>Intangible asset useful lives.</p>
                <div className="hn3">
                  <div className="sign_up_btn"><a href="/users/signup">Take a look&nbsp;<span className="icon-icon_arrow_01"></span></a></div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

    );

  }

}

export default About;
