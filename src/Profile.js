import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartTwoTone,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import Edit from "./Edit";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const getUser = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users";
      const result = await fetch(url);
      setUsers(await result.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = (id) => {
    const updated = users.filter((curr) => {
      return curr.id !== id;
    });
    setUsers(updated);
  };
  const mark = (index) => {
    index && setOpen(!open);
  };
  const edit = (index) => {
    setToggle(true);
    <Edit index={index} />;
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {toggle ? (
        <Edit users={users} toggle={toggle} setToggle={setToggle} />
      ) : (
        <>
          {loading ? (
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          ) : (
            users.map((e, id) => {
              return (
                <div key={id} className="card">
                  <div className="box">
                    <img
                      style={{ width: "200px" }}
                      src={`https://avatars.dicebear.com/v2/avataaars/${e.username}.svg?options[mood][]=happy`}
                      alt={e.name}
                    />
                    <div className="items">
                      <div>
                        <h3>{e.name}</h3>
                        <p>
                          <MailOutlined /> {e.email}
                        </p>
                        <p>
                          <PhoneOutlined /> {e.phone}
                        </p>
                        <p>
                          <GlobalOutlined /> {e.website}
                        </p>
                        <div className="icon">
                          <button
                            onClick={() => {
                              mark(e.id);
                            }}>
                            <HeartTwoTone twoToneColor={open && "#eb2f96"} />
                          </button>
                          <button
                            onClick={() => {
                              edit(e.id);
                            }}>
                            <EditOutlined />
                          </button>
                          <button
                            onClick={() => {
                              deleteItem(e.id);
                            }}>
                            <DeleteOutlined />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </>
      )}
    </>
  );
};

export default Profile;
