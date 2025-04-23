import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { Parsexml } from "../Steps";

export const StepsDisplay = () => {
    const [Steps, SetSteps] = useState([]);
    console.log(BACKEND_URL);
    useEffect(() => {
        axios.post(`${BACKEND_URL}/chat`, {
            prompt: "Create a portfolio website",
        }).then((res) => 
            let parsedRes = Parsexml(res);
            SetSteps(parsedRes)).catch(err => console.log(err));

    }, [Steps]);

    return (
        <div>
            <div>
                {Steps.length > 0 ? Steps.map((res) => <span className="text-white" key={res}>{res}</span>) : <span>Loading....</span>}
            </div>

        </div>
    )
}