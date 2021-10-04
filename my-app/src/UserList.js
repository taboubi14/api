import React , {useState,useEffect}from 'react'
import axios from "axios"
import './user.css';
function UserList() {
    const [users, setUsers] = useState({ hits: [] });

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers({ hits: data });
      };
      fetchData();
    }, [setUsers]);
  
    return (
      <div className="user.css">
        <ul>
          {users.hits &&
            users.hits.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }

export default UserList