/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import LaureatForm from "./LaureatForm";
import "../style.css";

class TableList extends Component {

  constructor() {
    super();
    this.state = {
      // laureatFormEnabled: false,
      // formLaureat: {},
      // laureats: 
    };

    // this.thArray = [
    //   "Nom",
    //   "Prénom",
    //   "Promotion",
    //   "filière"
    // ]
    // console.log(this.state);
    // let obj = this.state.laureats[0];
    // console.log(obj);
  }

  // filtercolumns(laureat) {
  //   return [
  //     laureat.nom,
  //     laureat.prenom,
  //     laureat.promotion,
  //     laureat.filiere
  //   ]
  // }

  // getOnEditClickedHandler(laureat) {
  //   return (event) => {
  //     console.log("Edit clicked");
  //     console.log(laureat);
  //     console.log(this);
  //     this.setState({
  //       ...this.state,
  //       formLaureat: laureat,
  //       laureatFormEnabled: true,
  //     })
  //     // this.state.formLaureat = laureat;
  //     // this.state.laureatFormEnabled = true;
  //   }
  // }

  render() {
    return (
      <div className="content">

        <Grid fluid>
          <LaureatForm laureatFormEnabled={this.state.laureatFormEnabled} laureat={this.state.formLaureat}/>
          {/* <Row>
            <Col md={12}>
              <Card
                title="Liste des lauréats"
                category="#"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {this.thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.laureats.map(this.filtercolumns).map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((objProp, key) => {
                              return <td key={key}>{objProp}</td>;
                            })}
                            <td>
                              <a 
                              href="#" 
                              role="button" 
                              style={{marginRight: "10px", fontSize: "25px", fontWeight: "bold"}}
                              onClick={this.getOnEditClickedHandler(prop)}>
                                <i className="pe-7s-pen"></i>
                              </a>
                              <a role="button" href="#" style={{marginRight: "10px", fontSize: "25px", fontWeight: "bold"}}>
                                <i className="pe-7s-trash"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default TableList;
