import {useEffect} from "react";
import axios from "axios";
function Popular(){

    useEffect(()=>{
        getPopular();

    },[])


    const getPopular = async () =>{
        const api = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=1876a48de1484ac79fd64efff24bdaee')
        const data = await api.json;
        console.log(data)
    }
    return(
        <div>Popular</div>
    )
}

export default Popular