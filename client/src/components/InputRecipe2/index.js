import M from "materialize-css";
import { useHistory } from "react-router-dom";
//new stuff above
import React, { Component, useState, useEffect } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List/index";
import { Input, TextArea, FormBtn } from "../Form/index";
//add link to navbar

const InputRecipe2 = () => {

    //all the logic
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState(""); //added set ingredients
    const [instructions, setInstructions] = useState(""); //added set instructions
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    useEffect(() => {
      if (url) {
        fetch("/createpost", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({
            title,
            ingredients, //added ingredients
            instructions, //added instructions
            pic: url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              M.toast({ html: data.error, classes: "#c62828 red darken-3" });
            } else {
              M.toast({
                html: "Created post Successfully",
                classes: "#43a047 green darken-1",
              });
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [url]);
  
    const postDetails = () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "weat-project"); // added database preset
      data.append("cloud_name", "dgav9dwqa");
      //api cloudinary call
      fetch("https://api.cloudinary.com/v1_1/dgav9dwqa/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //all the logic
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div>
              <Input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
              />
              <Input
                type="text"
                placeholder="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                name="ingredients"
              />
              <TextArea
                type="text"
                placeholder="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                name="recipe"
              />
              <div className="file-field input-field">
                <div className="btn #64b5f6 darken-1" style={{background: '#f50057'}}>
                  <span>Upload Image</span>
                  <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
              <button
                className="btn waves-effect waves-light #64b5f6 darken-1"
                style={{background: '#f50057'}}
                onClick={() => postDetails()}
              >
                Submit post
              </button>
              {/* <FormBtn
                disabled={!(this.state.ingredients && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Recipe
              </FormBtn> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default InputRecipe2;
