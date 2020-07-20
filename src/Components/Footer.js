import React, { Component } from 'react';

class Footer extends Component {
  render() {

    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i></i></a></li>
    //   })
    // }

    return (
      <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     <div className="row">
        <div className="twelve columns">
          <div class="icon-bar">
            {/* <a href="https://www.facebook.com/kddoubleot" className="facebook"><i class="fa fa-facebook"></i></a> */}
            <a href="https://github.com/echen5878" className="github"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/eric-chen-3a5921139/" className="linkedin"><i class="fa fa-linkedin"></i></a>
            {/* <a href="https://www.instagram.com/ericrocks619/" className="instagram"><i class="fa fa-instagram"></i></a> */}
          </div>

           <ul className="copyright">
              {/* <li>&copy; Copyright 2017 Tim Baker</li> */}
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
