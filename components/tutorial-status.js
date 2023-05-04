import {useEffect, useState} from "react";

function TutorialStatus(props){
    const [published,setpublished] = useState(props.status);
    const [count,setCount] = useState(0);
    var cnt=count;
    const changepublished =()=>{
        cnt = cnt+1;
        setCount(cnt);

        if(!published)
        setpublished("true");

    };
    useEffect(() => {
        

    });
    return(
        <div>
            <p>TutorialStatus is {published}</p>
            <p>Edit Count:{count}</p>
            <button onClick={changepublished}>click me</button>
            
        </div>
    );
}
export default TutorialStatus;