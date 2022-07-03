import React from "react";
import "./List.css";

const List = ({
  id,
  item,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  complete,
}) => {
  
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };
  const handleItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "blue",
          outline: "none",
          backgroundColor: "transparent",
          color: "navy",
          fontSize: "20px",
        }}
        className={complete ? "complete" : ""}
      />
      <img
        style={{ cursor: "pointer" }}
        src="https://img.icons8.com/emoji/36/000000/pencil-emoji.png"
        onClick={() => {
            handleItem(id);
        }}
        alt="edit item"
      />
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {

            remove(id);
        }}
        src="https://img.icons8.com/color/48/000000/trash.png"
      />
    </div>
  );
};
export default List;