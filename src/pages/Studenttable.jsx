import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getprofile, deleteprofileApi } from "../services/AllApi";

function Studenttable({ setstudentData }) {
  // console.log(setstudentData)
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []); // <- add dependency array!

  const getData = async () => {
    const result = await getprofile();
    // console.log(result.data)
    if (result.status == 200) {
      setData(result.data);
    }
  };
  const handleDelete = async (id) => {
    const result = await deleteprofileApi(id);
    if (result.status == 200) {
      getData();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between my-3">
          <h2>Student Records</h2>
          <Link to={"./create"} className="btn btn-info">
            Add Student
          </Link>
        </div>
        {data.length > 0 ? (
          <table className="table custom-table table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>COURSE</th>
                <th>NUMBER</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="border-bottom border border-light">
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.phonenumber}</td>
                  <td className="text-warning">
                    <Link to={"/edit"}>
                      <i
                        className="fa-regular fa-pen-to-square"
                        style={{ color: "#FFD43B" }}
                        onClick={() => setstudentData(item)}
                      ></i>
                    </Link>
                  </td>
                  <td className="text-danger">
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDelete(item.id)}
                    ></i>
                  </td>
                  <td className="text-info">
                    <Link to={"/prof"}>
                      <i
                        className="fa-regular fa-address-card"
                        style={{ color: "#74C0FC" }}
                        onClick={() => setstudentData(item)}
                      ></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>NO data FOUND</h3>
        )}
      </div>
    </>
  );
}

export default Studenttable;
