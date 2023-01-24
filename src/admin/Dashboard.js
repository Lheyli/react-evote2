import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "../Components/Modals/Modal";
import DataTable from "../Components/Tables/DataTable";
import { CSVLink } from "react-csv";
import "./dash.css";
import User from "../user/User"



function App(props) {
  const [items, setItems] = useState([
    {
 
      name: "Sample",
      position: "President"
    }
  ]);

  const getItems = () => {
    fetch("http://localhost:3000/crud")
      .then((response) => response.json())
      .then((items) => setItems(items))
      .catch((err) => console.log(err));
  };

  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (


    <div>
   <form className="fl">
        <h1 className="voting">Voting Status</h1>
        </form>

    <form className="ffff">
    <Container className="App">
      <Row>
        <Col>
          <h1 className="candidates" style={{ margin: "20px 0" }}>Candidates</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CSVLink
            filename={"db.csv"}
            color="primary"
            style={{ float: "left", marginRight: "10px" }}
            className="btn btn-primary"
            data={items}
          >
            Download CSV
          </CSVLink>
          <ModalForm buttonLabel="Add Candidates" addItemToState={addItemToState} />
        </Col>
      </Row>
    </Container>
    </form>

    </div>
    

  );
}

export default App;
