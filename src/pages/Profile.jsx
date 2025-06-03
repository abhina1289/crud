import React from "react";

function Profile({ data }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "skyblue" }}
    >
      <div
        className="card shadow border-0"
        style={{
          width: "340px",
          borderRadius: "2rem",
          overflow: "hidden",
          backgroundColor: "#fff",
          position: "relative",
          textAlign: "center",
        }}
      >
        
        <div
          style={{
            height: "130px",
            background: "linear-gradient(to bottom, #e52e71, #ff6a00)",
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
          }}
        ></div>

        
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "5px solid white",
            overflow: "hidden",
          }}
        >
          <img
            src={data.imgUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

      
        <div style={{ padding: "90px 20px 20px" }}>
          <h4 style={{ fontWeight: "700" }}>{data.name}</h4>
          <h6 className="text-muted mb-3" style={{ fontWeight: "600" }}>
            {data.course}
          </h6>

          <hr
            style={{
              width: "80px",
              margin: "auto",
              borderTop: "3px solid #e52e71",
              marginBottom: "15px",
            }}
          />

          <p className="text-secondary mb-4" style={{ fontSize: "14px" }}>
            I choose the {data.course} track because I love solving problems and also to build new web applications .
          </p>

        
          <div className="text-start px-2" style={{ fontSize: "13px" }}>
            <p><strong>Duration:</strong> {data.courseduration}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>State:</strong> {data.state}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phonenumber}</p>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Profile;
