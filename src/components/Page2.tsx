import { useEffect, useState } from "react";

export const Page2 = () => {
    const [task, setTask] = useState(null);
    useEffect(() => {
        fetch("https://wordsapiv1.p.rapidapi.com/words/lovely/synonyms", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "2b74b698b7msh54cf0f18eeff0c2p1b1cf1jsn257225d28e8e",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);
    if (!task) return <div>Loading...</div>;

    return (
        <div>
            {task[1]}
        </div>
    )
}