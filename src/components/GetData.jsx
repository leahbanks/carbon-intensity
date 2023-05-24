import { useEffect, useState } from "react";
import { DisplayData } from "./DisplayData";


export function GetData ({location}) {
    const [carbonData, setCarbonData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://api.carbonintensity.org.uk/regional/postcode/${location}`)
         .then((response)=> {return (response.json())})
         .then((body)=> {
            setCarbonData(body)
            setIsLoading(false)
        })
    }, [location])
    if (isLoading){
        return (<p>Loading...</p>)
    }
    else
    return (
        <section>
            <h2>Results</h2>
            <DisplayData carbonData={carbonData}/>
        </section>
    )
}