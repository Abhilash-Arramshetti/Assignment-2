import React from "react";
import "./styles.css";
import { Button } from "antd";

const Edit = ({ users, index, toggle, setToggle }) => {
  return (
    <div className="form">
      <form>
        <div>
          <label>Name : </label>
          <input value={users.name} />
        </div>
        <div>
          <label>Email : </label>
          <input value={users.username} />
        </div>
        <div>
          <label>Phone : </label>
          <input value={users.name} />
        </div>
        <div>
          <label>Website : </label>
          <input value={users.name} />
        </div>
      </form>
      <Button
        type="primary"
        ghost
        onClick={() => {
          setToggle(!toggle);
        }}>
        Primary Button
      </Button>
    </div>
  );
};

export default Edit;
