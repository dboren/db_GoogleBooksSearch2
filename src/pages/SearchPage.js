import React, { useState, useEffect}  from "react";
import { Container, Col, Row } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

import Navbar from "../components/Navbar";

function SearchPage() {

    const [SearchPage, setSearchPage] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    //need to refactor
    function searchGoogleBooks(event) {
        event.preventDefault();
        API.findBook(formObject.title)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    return (
        <Container fluid>
            <Row>
                <h4>Book search</h4>
                <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title"
                    value={formObject.title}></Input>
                <FormBtn
                    disabled={!formObject.title}
                    onClick={searchGoogleBooks}
                    >
                    Search
                </FormBtn>
            </Row>
        </Container>
    )


};

export default SearchPage;