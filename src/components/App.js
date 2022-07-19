// create your App component here
import React,{useState,useEffect} from "react";

function App(){
    const [images,setImage] = useState({
        message: "",
        status: "",
    });
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((data)=>{
            setImage(data);
            setIsLoaded(true);
        })
    },[]);
    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <img src={images.message} alt="A Random Dog"></img>
    )


}

export default App;