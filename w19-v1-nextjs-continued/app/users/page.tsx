import axios from "axios";

export default async function User(){
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    
    const response = await axios.get('http://localhost:3000/api/v1/user/details');

    const data = response.data;

    // console.log(response);
    // console.log(response.data)
    console.log(response.data.id)
    console.log(response.data.title)

    return <div className="m-20">
        <div>{data.id}</div>
        <div>{data.title}</div>
    </div>
}