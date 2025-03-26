import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(){
    const [contents, setContents] = useState([]);

    function refreshFeed(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        }).then((res)=>{
            setContents(res.data.fetchedContent)
            // console.log(`res.data.content : ${res.data.content}`)
            // console.log(`res : ${JSON.stringify(res, null, 2)}`) //it is null
            // console.log(`res.data.fetchedContent: ${res.data.fetchedContent}`) //it is null
        })
    }

    useEffect(()=>{
        refreshFeed();

        let interval = setInterval(()=>{
            refreshFeed();
            console.log('feed refreshed')
        }, 10* 1000)


        //cleanup
        return () =>{   
            clearInterval(interval);
        }
    },[])

    return {contents, refreshFeed};
}
