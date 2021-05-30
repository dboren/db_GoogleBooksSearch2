import React, { useState, useEffect}  from "react";
import { Container, Col, Row } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

import Navbar from "../components/Navbar";

function SearchPage() {

    const [SearchPage, setSearchPage] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function searchGoogleBooks(event) {

    }

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