import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from '../components';
import { upload } from '../actions/uploadActions';

import FlashMessages from '../components/FlashMessages';

class Admin extends Component {

  constructor(props){
  	super(props);

    this.state = {
      serverErrors: []
    }
  }

  componentDidMount() {
    document.title = "bench805.com | Admin";
  }

  onSubmit(e) {
    e.preventDefault();

    let form = document.getElementById('adminUploadFileForm');
    this.props.upload(form).then(
      res => {
        console.log(res.data);
      },
      err => {
        this.setState({serverErrors: err.response.data.errors});
        setTimeout(() => { this.setState({serverErrors: []}) }, 10000);
      }
    )
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />



          <div className="page_body padding_top_header">
            <section className="mwidth_680">
              <div className="resolution padding_lr">
                <form className="form_login" id="adminUploadFileForm" encType="multipart/form-data">
                  <div className="fileuploadbox">

                    <FlashMessages messages={this.state.serverErrors} />

                    <input type="file" name="file" id="file" className="inputfile inputfile-6"/>
                    <label htmlFor="file"><strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                        </svg>Choose a file&hellip;</strong><span></span></label>
                  </div><br/>
                  <div style={{textAlign: 'center'}}>
                    <input type="submit" value="Upload" className="btn-submit" onClick={this.onSubmit.bind(this)}/>
                    <br/><br/>
                    <Link to="/admin/viewtable" className="btn-submit">View Table</Link>
                  </div>
                </form>
              </div>
            </section>
          </div>



      </div>

    );

  }

}

Admin.propTypes = {
  upload: PropTypes.func.isRequired
}

export default connect(null, { upload })(Admin);
