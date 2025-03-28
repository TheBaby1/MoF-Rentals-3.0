import { useEffect, useState } from 'react';
function Test(){

    const [ models, setModels ] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/models")
            .then((res) => res.json())
            .then((data) => setModels(data[0]))
            .catch((error) => console.error("Error fetching models: ", error));
    }, []);

    

    return (
        <>
            <h2>Name: {models.firstName}</h2>
        </>
    );
}

export default Test;