import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalFourteenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><FormattedMessage
            description="Portfolio.item8"
            id="Portfolio.item10"
            defaultMessage="TESTynamo"
          /></h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-12 mb-2">
              <a
                href="https://github.com/nandineebhatt/TESTynamo"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-external-link pr-2"></i>
                <span className="project-label"><FormattedMessage
                  description="ModalFourteenItem1"
                  id="ModalFourteen.item1"
                  defaultMessage="GitHub Link"
                /> </span>
                {/* <span className="ft-wt-600 uppercase">

              
            </span> */}
            </a>
          </div>

          <div className="col-12 col-sm-12 col-xs-12 mb-2" style={{ textAlign: 'center' }}>
            <a className="button" href="https://assets.appstasy.in/nandinee/projects/testynamo/TESTynamo.pdf" download="TESTynamo.pdf">
              <span className="project-label"><FormattedMessage
                description="modalFourteenItem1"
                id="ModalFourteen.Item1"
                defaultMessage="TESTynamo.pdf"
              /></span>{" "}
              <span className="button-icon fa fa-download"></span>
            </a>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </figcaption>
      {/* Project Details Ends */}

      {/*  Main Project Content Starts */}
      <img src="img/projects/TESTynamo.jpeg" alt="Portolio" />
      {/* Main Project Content Ends */}
    </figure>
    </div >
    //  End .slideshow
  );
};

export default ModalFourteenContent;
