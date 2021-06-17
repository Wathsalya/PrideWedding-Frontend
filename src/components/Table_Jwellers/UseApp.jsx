import React, { useState,useEffect} from "react";
import Datatable from "./datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function UseApp() {
  const [data,setData] = useState([])
  const [q,setQ]  = useState("")
  const [searchColumns,setSearchColumns] = useState(["companyID","companyName"]);

  useEffect(()=>{
    fetch("https://prideweddingapi.azurewebsites.net/api/JwelVendors")
    .then(response=>response.json())
    .then((json) => setData(json))

  },[])

  function search(rows){
   
    return rows.filter((row)=>
    searchColumns.some(
      (column)=> 
       row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
       )
  
    );
  }

  const columns = data[0] && Object.keys(data[0])

  return(
  <>
  
  
  <div><input placeholder="Search"  class="btn-check" name="options-outlined" id="danger-outlined"  type="text" value={q}  onChange={(e) => setQ(e.target.value)}/>
     {
      columns && columns.map(column => <lable class="custom-control custom-checkbox">
        <input type="checkbox" checked={searchColumns.includes(column)}
         onChange={(e) =>{
           const checked =searchColumns.includes(column)
           setSearchColumns(prev=>checked
            ? prev.filter(sc => sc !== column)
            :[...prev,column]
            );
          }
        }
        />
        {column}
      </lable>)
    }

    </div>
    

    <div >
      
      <Datatable data={search(data)}/> 
    </div>


  </>
  
  );
}
