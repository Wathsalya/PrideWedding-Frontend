import React from "react";

export default function Datatable({data}){
    const columns = data[0] && Object.keys(data[0])
    return(
        
    <table id="dtHorizontalVerticalExample" class="atable table table-striped table-bordered table-sm " cellspacing="0"
    width="100%">
        <thead class="thead-dark">
        <tr>{data[0] && columns.map((heading)=> <th  scope="col">{heading}</th>)} </tr>
        </thead>

        <tbody  id="dtHorizontalVerticalExample" class="atbody table  table-striped table-bordered table-sm " cellspacing="0"
    width="100%">
           {data.map((row) => (
           <tr>
             {
               columns.map((column) => (
               <td>{row[column]}</td>))
           }
           </tr>
           ))}
        </tbody>
    </table>
    );
}