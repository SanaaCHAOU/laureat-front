import React, { Component, useState } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import "../style.css";


export default function LaureatForm(props) {
    // let [enabled, setEnabled] = useState(false);
    // setEnabled(true);
    let [laureatFormEnabled, setLaureatFormEnabled] = useState(props.laureatFormEnabled | false);
    let [laureat, setLaureat] = useState(props.laureat | false);
    let [laureats, setLaureats] = useState([
      {
        "url":"http://localhost:8000/laureats/1/?format=json",
        "cne":"15245251",
        "nom":"chaou",
        "prenom":"sanaa",
        "email":"chaou.sanaa.cs@gmail.com",
        "telephone":"0636376542",
        "pdp":null,
        "situation_familiale":"mariée",
        "nationalite":"marocaine",
        "date_naissance":"1995-09-19",
        "date_inscription":"2019-07-21",
        "sexe":"F",
        "promotion": {
          "url" : "",
          "annee_scolaire": 2017
        },
        "adresse": {
          "ville": "Tanger",
          "pays": "Maroc",
          "zip_code": 90060,
          "adresse": "123 rue de liberté" 
        },
        "filiere": {
          libelle: "BISD"
        }
      }
    ])

    let formMode = (laureat)? 'edit' : 'create';

    let thArray = [
      "Nom", "Prénom", "Promotion", "Filière"
    ];
    
    let onAddClicked = (event) => {
        setLaureatFormEnabled(!laureatFormEnabled);
    }
    function getOnEditClickedHandler(target) {
      return (event) => {
        console.log("Clicked");
        console.log(target);
        setLaureat(target);
        setLaureatFormEnabled(true);
      }
    }

    function getOnChangeHandler(propertyName) {
      let onChangeHandler = (event) => {
          let newLaureat = (laureat)? {...laureat} : {};
          newLaureat[propertyName] = event.target.value;
          setLaureat(newLaureat);
          console.log(laureat);
      }

      return onChangeHandler;
    }

    let onSubmitHandler = (event) => {
      event.preventDefault();
      let newLaureatsList = laureats.concat([laureat]);
      setLaureats(newLaureatsList);
      setLaureatFormEnabled(false);
      // TODO: call django api to insert the new laureat, adresse, promotion, filiere to the database
    }

    return <>
    <Row>
    <button className="btn btn-success" onClick={onAddClicked}>Add</button>
    <Col md={12} hidden={!laureatFormEnabled}>
      <Card title="Ajouter un lauréat"
        content={
          <form onSubmit={onSubmitHandler}>
            <FormInputs  
              ncols={["col-md-4", "col-md-4", "col-md-4"]}
              properties={[
                {
                  label: "CNE",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.cne : "",
                  disabled: false,
                  onChange: getOnChangeHandler('cne')
                },
                {
                  label: "Nom",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.nom : "",
                  onChange: getOnChangeHandler('nom')
                },
                {
                  label: "Prénom",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.prenom : "",
                  onChange: getOnChangeHandler('prenom')
                }
               
              ]}
            />
            <FormInputs
              ncols={["col-md-4", "col-md-4", "col-md-4"]}
              properties={[
                {
                  label: "Adresse Email",
                  type: "email",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.email : "",
                  onChange: getOnChangeHandler('email')
                },
                {
                  label: "Téléphone",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.telephone : "",
                  onChange: getOnChangeHandler('telephone')
                },
                {
                  label: "Date de naissance",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.date_naissance : "",
                  onChange: getOnChangeHandler('date_naissance')
                }
              ]}
              />
                <FormInputs
                ncols={["col-md-4", "col-md-4", "col-md-4"]}
                properties={[
                {
                  label: "Situation familiale",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.situation_familiale : "",
                  onChange: getOnChangeHandler('situation_familiale')
                },
                { 
                  label: "Nationalité",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.nationalite : "",
                  onChange: getOnChangeHandler('nationalite')
                },
                {
                  label: "Genre",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.sexe : "",
                  onChange: getOnChangeHandler('sexe')
                }
              ]}
              />
               <FormInputs
                ncols={["col-md-4", "col-md-4", "col-md-4"]}
                properties={[

                {
                  label: "Date d'inscription",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: laureat? laureat.date_inscription : "",
                  onChange: getOnChangeHandler('date_inscription')
                },
                {
                  label: "Promotion",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.promotion)? laureat.promotion : "",
                  onChange: getOnChangeHandler('promotion')
                },
                {
                  label: "Filière",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.filiere)? laureat.filiere : "",
                  onChange: getOnChangeHandler('filiere')
                }
              ]}
            />
            <FormInputs
              ncols={["col-md-12"]}
              properties={[
                {
                  label: "Adresse",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.adresse)? laureat.adresse.adresse : "",
                  onChange: getOnChangeHandler('adresse.adresse')
                }
              ]}
            />
            <FormInputs
              ncols={["col-md-4", "col-md-4","col-md-4"]}
              properties={[
                {
                  label: "Pays",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.adresse)? laureat.adresse.pays : "",
                  onChange: getOnChangeHandler('adresse.pays')
                },
                {
                  label: "Ville",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.adresse)? laureat.adresse.ville : "",
                  onChange: getOnChangeHandler('adresse.ville')
                },
                {
                  label: "Code postale",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: (laureat && laureat.adresse)? laureat.adresse.zip_code : "",
                  onChange: getOnChangeHandler('adresse.code_postale')
                }
              ]}
            />
            <Button bsStyle="info" pullRight fill type="submit">
              Save
            </Button>
            <div className="clearfix" />
          </form>
        }
      />
    </Col>
  </Row>
  <Row>
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
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {laureats.map((prop, index) => {
                        let displayedObj = {
                          nom: prop.nom,
                          prenom: prop.prenom,
                          promotion: (prop.promotion)? prop.promotion.annee_scolaire : "",
                          filiere:(prop.filiere)? prop.filiere.libelle : ""
                        };

                        return (
                          <tr key={prop.cne}>
                            {Object.values(displayedObj).map((objProp, key) => {
                              return <td key={key}>{objProp}</td>;
                            })}
                            <td>
                              <a 
                              href="#" 
                              role="button" 
                              style={{marginRight: "10px", fontSize: "25px", fontWeight: "bold"}}
                              onClick={getOnEditClickedHandler(prop)}
                              >
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

            
          </Row>
  </>
} 