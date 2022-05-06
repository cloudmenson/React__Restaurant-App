import React, { useState } from "react";
import useWaiterList from "../../hooks/useWaiterList";

export default function WaiterEditForm({ editName, edit, setEdit }) {
  const { updateWaiter } = useWaiterList();

  function onChangeHandler(e) {
    setEdit(e.target.value);
    console.log(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    updateWaiter(editName.id, edit);
  }
  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        name
        <input onChange={onChangeHandler} value={edit} type="text"></input>
        <button type="submit">edit</button>
      </form>
    </div>
  );
}
