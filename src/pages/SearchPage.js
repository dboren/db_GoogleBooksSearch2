import React, { useState, useEffect}  from "react";

import Navbar from "../components/Navbar";

function SearchPage() {

    const [SearchPage, setSearchPage] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };




};

export default SearchPage;