import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default function ShowAllEmps() {
  const [emps, setEmps] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/emp/all").then((res) => {
      console.log(res.data);
      setEmps(res.data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ORGName</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {emps.map(emp=> (
            <tr>
              <td>{emp.name}</td>
              <td>{emp.org}</td>
              <td>{emp.salary}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
