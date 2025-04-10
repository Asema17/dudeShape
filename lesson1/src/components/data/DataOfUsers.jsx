import React from 'react'

const DataOfUsers = () => {

    const users = [
        {
          name: "Alex",
          id: Date.now(),
          userName: "666"
        },
        {
          name: "Bob",
          id: SetTimeout(Date.now(), 1000),
          userName: "Williams"
        },
        {name: "Gallaher",
         id: SetTimeout(Date.now(), 2000),
        userName: "Hz"
        }
      ];

  return (
    <div>
        <h1>Data of users</h1>
        {users.map((user) => (
            <div style ={{
                width: "500px",
                height: "250px",
                backgroundColor: "hotpink",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "15px",
            }}>
            <p>{user.name}</p>
            </div>
        ))}
    </div>
  );
};
 export default DataOfUsers;