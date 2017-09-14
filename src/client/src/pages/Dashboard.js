import React, { Component } from 'react';
import { Header, Footer } from '../components';

class Dashboard extends Component {


  componentDidMount() {
    document.title = "bench805.com | Result";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />



          <div className="page_body padding_top_header">

            <section className="result_table_section">
              <div className="padding_lr stretch clrfx">
                <div className="filters_box scrolly_box">
                  <form action="/dashboard" method="post" className="form_style_1">
                    <input id="checkedids" name="checkedids" type="hidden" value=""/>
                    <div>
                      <label htmlFor="" className="label_top">Select Industries</label>
                      <div id="threeselect" className="drop_down_box">
                        <div className="drop_down_head">
                          <div>
                            <label>Select Industries</label><span className="ch_numb">(0)</span>
                          </div>
                        </div>
                        <div className="drop_down_body">
                          <ul className="radio_checkbox_container">
                            <li>
                              <input id="id1" type="checkbox" name="industries[]" value="Biotechnology"/>
                              <label htmlFor="id1">Biotechnology</label>
                            </li>
                            <li>
                              <input id="id2" type="checkbox" name="industries[]" value="Medical Devices"/>
                              <label htmlFor="id2">Medical Devices</label>
                            </li>
                            <li>
                              <input id="id3" type="checkbox" name="industries[]" value="Medical Equipment and Supplies"/>
                              <label htmlFor="id3">Medical Equipment and Supplies</label>
                            </li>
                            <li>
                              <input id="id4" type="checkbox" name="industries[]" value="Medical Facilities"/>
                              <label htmlFor="id4">Medical Facilities</label>
                            </li>
                            <li>
                              <input id="id5" type="checkbox" name="industries[]" value="Medical Research Equipment, Other"/>
                              <label htmlFor="id5">Medical Research Equipment, Other</label>
                            </li>
                            <li>
                              <input id="id6" type="checkbox" name="industries[]" value="Medical Services and Distributors"/>
                              <label htmlFor="id6">Medical Services and Distributors</label>
                            </li>
                            <li>
                              <input id="id7" type="checkbox" name="industries[]" value="Pharmaceuticals"/>
                              <label htmlFor="id7">Pharmaceuticals</label>
                            </li>
                            <li>
                              <input id="id8" type="checkbox" name="industries[]" value="Communications Equipment"/>
                              <label htmlFor="id8">Communications Equipment</label>
                            </li>
                            <li>
                              <input id="id9" type="checkbox" name="industries[]" value="eCommerce"/>
                              <label htmlFor="id9">eCommerce</label>
                            </li>
                            <li>
                              <input id="id10" type="checkbox" name="industries[]" value="Electronic Equipment and Other"/>
                              <label htmlFor="id10">Electronic Equipment and Other</label>
                            </li>
                            <li>
                              <input id="id11" type="checkbox" name="industries[]" value="IT Consulting, Outsourcing, Other"/>
                              <label htmlFor="id11">IT Consulting, Outsourcing, Other</label>
                            </li>
                            <li>
                              <input id="id12" type="checkbox" name="industries[]" value="IT Hardware"/>
                              <label htmlFor="id12">IT Hardware</label>
                            </li>
                            <li>
                              <input id="id13" type="checkbox" name="industries[]" value="Semiconductors and Equipment"/>
                              <label htmlFor="id13">Semiconductors and Equipment</label>
                            </li>
                            <li>
                              <input id="id14" type="checkbox" name="industries[]" value="Software"/>
                              <label htmlFor="id14">Software</label>
                            </li>
                            <li>
                              <input id="id15" type="checkbox" name="industries[]" value="Technology Distribution"/>
                              <label htmlFor="id15">Technology Distribution</label>
                            </li>
                            <li>
                              <input id="id16" type="checkbox" name="industries[]" value="ALL"/>
                              <label htmlFor="id16">ALL</label>
                            </li>
                            <li>
                              <input id="id17" type="checkbox" name="industries[]" value="NA"/>
                              <label htmlFor="id17">NA</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="label_top">Keyword</label>
                      <div className="drop_down_box">
                        <div className="drop_down_head">
                          <div>
                            <label>Keyword</label>
                          </div>
                        </div>
                        <div className="drop_down_body">
                          <ul className="radio_checkbox_container">
                            <li>
                              <input id="id18" type="text" name="keyword[]"/>
                            </li>
                            <li>
                              <input id="id19" type="text" name="keyword[]"/>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="include" className="label_top">Intangibles to Include</label>
                      <div className="drop_down_box">
                        <div className="drop_down_head">
                          <div>
                            <label>Intangibles to Include</label><span className="ch_numb">(0)</span>
                          </div>
                        </div>
                        <div className="drop_down_body">
                          <ul className="radio_checkbox_container">
                            <li>
                              <input id="id20" type="checkbox" name="include[]" value="Developed Technology"/>
                              <label htmlFor="id20">Developed Technology</label>
                            </li>
                            <li>
                              <input id="id21" type="checkbox" name="include[]" value="In-Process R&amp;D"/>
                              <label htmlFor="id21">In-Process R&D</label>
                            </li>
                            <li>
                              <input id="id22" type="checkbox" name="include[]" value="Customer Relationships"/>
                              <label htmlFor="id22">Customer Relationships</label>
                            </li>
                            <li>
                              <input id="id23" type="checkbox" name="include[]" value="Trade Name"/>
                              <label htmlFor="id23">Trade Name</label>
                            </li>
                            <li>
                              <input id="id24" type="checkbox" name="include[]" value="Backlog"/>
                              <label htmlFor="id24">Backlog</label>
                            </li>
                            <li>
                              <input id="id25" type="checkbox" name="include[]" value="Non-Compete Agreement"/>
                              <label htmlFor="id25">Non-Compete Agreement</label>
                            </li>
                            <li>
                              <input id="id26" type="checkbox" name="include[]" value="NA"/>
                              <label htmlFor="id26">NA</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div id="singleselect" className="drop_down_box">
                        <div className="drop_down_head">
                          <div>
                            <label>Intangibles to Exclude</label><span className="ch_numb">(0)</span>
                          </div>
                        </div>
                        <div className="drop_down_body">
                          <ul className="radio_checkbox_container">
                            <li>
                              <input id="id27" type="checkbox" name="exclude[]" value="Developed Technology"/>
                              <label htmlFor="id27">Developed Technology</label>
                            </li>
                            <li>
                              <input id="id28" type="checkbox" name="exclude[]" value="In-Process R&amp;D"/>
                              <label htmlFor="id28">In-Process R&D</label>
                            </li>
                            <li>
                              <input id="id29" type="checkbox" name="exclude[]" value="Customer Relationships"/>
                              <label htmlFor="id29">Customer Relationships</label>
                            </li>
                            <li>
                              <input id="id30" type="checkbox" name="exclude[]" value="Trade Name"/>
                              <label htmlFor="id30">Trade Name</label>
                            </li>
                            <li>
                              <input id="id31" type="checkbox" name="exclude[]" value="Backlog"/>
                              <label htmlFor="id31">Backlog</label>
                            </li>
                            <li>
                              <input id="id32" type="checkbox" name="exclude[]" value="Non-Compete Agreement"/>
                              <label htmlFor="id32">Non-Compete Agreement</label>
                            </li>
                            <li>
                              <input id="id33" type="checkbox" name="exclude[]" value="NA"/>
                              <label htmlFor="id33">NA</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form_footer">

                      <div className="form_footer_btns">
                        <button id="tabe_filters_apply" type="submit">Go</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{minHeight: 338}} className="responsive_table tabs mobile_table">
                  <div className="tabs_list clrfx">
                    <div className="tab_btn_1 active">ALLOCATION</div>
                    <div className="tab_btn_3">USEFULL LIVES</div>
                    <div className="tab_btn_2">AVAILABLE DATAPOINTS</div>
                  </div>
                  <div className="tabs_content">
                    <div>
                      <div className="tr_name">Business Combinations</div>
                      <div className="tabs_box">
                        <div style={{width: '100%'}} className="tab_1 active">
                          <div style={{width: '33.3333%'}}>Purchase Consideration</div>
                          <div style={{width: '33.3333%'}}>Net Assets</div>
                          <div style={{width: '33.3333%'}}>Excess Consideration</div>
                        </div>
                        <div style={{width: '100%', display: 'none'}} className="tab_3">
                          <div style={{width: '25%'}}>Median</div>
                          <div style={{width: '25%'}}>Standard Deviation</div>
                          <div style={{width: '25%'}}>Datapoints (Finite Life)</div>
                          <div style={{width: '25%'}}>Datapoints (Indefinite Life)</div>
                        </div>
                        <div style={{width: '100%', display: 'none'}} className="tab_2">
                          <div style={{width: '25%'}}>Purchase Consideration</div>
                          <div style={{width: '25%'}}>Net Assets</div>
                          <div style={{width: '25%'}}>Excess Consideration</div>
                          <div style={{width: '25%'}}>Total In This Industry</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>



      </div>

    );

  }

}

export default Dashboard;
