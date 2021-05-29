import React, { useState, useEffect}  from "react";
import { Container, Col, Row } from "../components/Grid";
import { Input, TextArea } from "../components/Form";

import Navbar from "../components/Navbar";

function SearchPage() {

    const [SearchPage, setSearchPage] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    return (
        <Container fluid>
            <Row>
                <h4>Book search</h4>
                <Input></Input>
            </Row>
        </Container>
    )


};

export default SearchPage;