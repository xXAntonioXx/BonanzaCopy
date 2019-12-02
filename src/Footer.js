/*

import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './Footer.css';

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <div className="columnas">
      <h5 className="title">Bonanza</h5>
      <p className= "ubicacion"> Edificio Parian planta baja, Hermosillo, México </p>
      <p>Created by APEL</p>
      </div>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="http://www.apel.com"> APEL </a>
    </Container>
  </div>
</Footer>
);
}
}



  <a style={{display: "table-cell"}} href="https://goo.gl/maps/N3nUcGqvw5C2" target="_blank">Ubicación</a>



  export default FooterPage;

*/


import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './Footer.css';

class FooterPagePro extends React.Component {
  render() {
    return (
      <Footer className="font-small pt-0">
        <Container>
          

          <Row className="pt-6 mb-3 text-center d-flex justify-content-center">
            
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
              <i class="fas fa-stroopwafel">
              <a style={{display: "table-cell"}} 
              href="https://goo.gl/maps/N3nUcGqvw5C2" 
              target="_blank"  rel="noopener noreferrer"  >
              Ubicación
              </a>
              </i>
              </h6>
            </Col>



            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
              
              <a style={{display: "table-cell"}} href="https://www.facebook.com/TelasBonanzaHermosillo/" target="_blank"  rel="noopener noreferrer" >Facebook</a>

              </h6>
            </Col>
          </Row>
   
          <hr className="rgba-whit-light"   style={{ margin: "0 15%"}} />
          <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <Col md="40" sm="12" className="mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
              Telas bonanza es una empreza dedicada al surtido de materiales 
              para la creacion de diseños originales y con elegancia 
              para las mejores costuras/prendas.
              </p>
            </Col>
          </Row>
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
         

        </Container>
        <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="http://www.apel.com"> APEL </a>
    </Container>
  </div>
      </Footer>
    );
  }
}

export default FooterPagePro;