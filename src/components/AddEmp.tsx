import React, { FormEvent, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEmp() {
  const [name, setName] = useState("enter Emp Name");
  const [org, setOrg] = useState("Enter Org Name");
  const [salary, setSalary] = useState("enter salary");

  const myNav = useNavigate();

  const saveEmp = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitt pressed...");
    console.log("name--->" + name);
    console.log("org--->" + org);
    console.log("salary--->" + salary);

    const emp = { "name":name, "org":org, "salary":salary };
    axios
      .post("http://127.0.0.1:4000/emp/add", emp)
      .then((res) => console.log(res));

    myNav("/all");
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form onSubmit={saveEmp}>
                <h3 className="text-center text-info">Add EMP</h3>

                <div className="form-group">
                  <label className="text-info">Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">ORG Name:</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => {
                      setOrg(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Salary:</label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info"></label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
