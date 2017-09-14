import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { connect } from 'react-redux';
import { mainTableData } from '../actions/adminActions';

class AdminViewTable extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    document.title = "bench805.com | Amin. View Table";

    this.props.mainTableData().then(
      res => {
        this.setState({
          tableData: res.data.tabledata
        });

      }
    )
  }

  render() {

    let tableData = this.state.tableData.map((row, i) => {
      return (

        <div key={i}>
          <div className="tr_user_name" >{i+1}</div>
          <div className="tabs_box">
            <div className="tab_3" style={{width: '100%'}}>
              <div style={{width: '1.90697674%'}}>{row.col1}</div>
              <div style={{width: '1.90697674%'}}>{row.col2}</div>
              <div style={{width: '1.90697674%'}}>{row.col3}</div>
              <div style={{width: '1.90697674%'}}>{row.col4}</div>
              <div style={{width: '1.90697674%'}}>{row.col5}</div>
              <div style={{width: '1.90697674%'}}>{row.col6}</div>
              <div style={{width: '1.90697674%'}}>{row.col7}</div>
              <div style={{width: '10%'}}>{row.col8}</div>
              <div style={{width: '1.90697674%'}}>{row.col9}</div>
              <div style={{width: '1.90697674%'}}>{row.col10}</div>
              <div style={{width: '1.90697674%'}}>{row.col11}</div>
              <div style={{width: '1.90697674%'}}>{row.col12}</div>
              <div style={{width: '1.90697674%'}}>{row.col13}</div>
              <div style={{width: '1.90697674%'}}>{row.col14}</div>
              <div style={{width: '1.90697674%'}}>{row.col15}</div>
              <div style={{width: '1.90697674%'}}>{row.col16}</div>
              <div style={{width: '1.90697674%'}}>{row.col17}</div>
              <div style={{width: '1.90697674%'}}>{row.col18}</div>
              <div style={{width: '1.90697674%'}}>{row.col19}</div>
              <div style={{width: '1.90697674%'}}>{row.col20}</div>
              <div style={{width: '1.90697674%'}}>{row.col21}</div>
              <div style={{width: '1.90697674%'}}>{row.col22}</div>
              <div style={{width: '1.90697674%'}}>{row.col23}</div>
              <div style={{width: '1.90697674%'}}>{row.col24}</div>
              <div style={{width: '1.90697674%'}}>{row.col25}</div>
              <div style={{width: '1.90697674%'}}>{row.col26}</div>
              <div style={{width: '1.90697674%'}}>{row.col27}</div>
              <div style={{width: '1.90697674%'}}>{row.col28}</div>
              <div style={{width: '1.90697674%'}}>{row.col29}</div>
              <div style={{width: '1.90697674%'}}>{row.col30}</div>
              <div style={{width: '1.90697674%'}}>{row.col31}</div>
              <div style={{width: '1.90697674%'}}>{row.col32}</div>
              <div style={{width: '1.90697674%'}}>{row.col33}</div>
              <div style={{width: '1.90697674%'}}>{row.col34}</div>
              <div style={{width: '1.90697674%'}}>{row.col35}</div>
              <div style={{width: '1.90697674%'}}>{row.col36}</div>
              <div style={{width: '1.90697674%'}}>{row.col37}</div>
              <div style={{width: '1.90697674%'}}>{row.col38}</div>
              <div style={{width: '1.90697674%'}}>{row.col39}</div>
              <div style={{width: '1.90697674%'}}>{row.col41}</div>
              <div style={{width: '1.90697674%'}}>{row.col42}</div>
              <div style={{width: '8%'}}>{row.col43}</div>
              <div style={{width: '1.90697674%'}}>{row.col44}</div>
              <div style={{width: '1.90697674%'}}>{row.col45}</div>
            </div>
          </div>
        </div>

      );
    })

    return (

      <div id="main_container">
        <Header />
        <Footer />

          <div className="page_body padding_top_header">
            <section className="result_table_section">
              <div className="padding_lr stretch clrfx">
                <div style={{minHeight: 338, overflow: 'auto'}} className="users_responsive_table tabs mobile_table">
                  <div style={{minWidth: 6000}} className="tabs_content">

                    {tableData}

                  </div>
                </div>
              </div>
            </section>
          </div>

      </div>

    );

  }

}

AdminViewTable.propTypes = {

  mainTableData: PropTypes.func.isRequired

}

export default connect(null, { mainTableData })(AdminViewTable);
