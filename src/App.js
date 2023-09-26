// import Man from "./header";
// import Person from "./Person";
// import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [data,setData] = useState([]);

// useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>setData(res.data))
  .catch((error)=>{
        console.log(error);
  })
// })
  return (
    <>
    <div>
    <table className="border-solid">
          <thead>
          <tr>
            <th>UserId</th>
            <th>It</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          </thead>
      {data.map((post)=>{
      return(
        <>
        
          <tbody>
            <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          </tbody>
        
        </>

      )
    })}
    </table>
    </div>
    </>
  );
}

export default App;
