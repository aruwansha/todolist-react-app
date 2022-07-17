import { useState } from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import EditItem from "./EditItem";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const [editIsShown, setEditIsShown] = useState(false);

  const onRemoveItem = () => {
    props.removeItem(props.id);
  };

  const showEdit = () => {
    setEditIsShown(true);
  };

  const hideEdit = () => {
    setEditIsShown(false);
  };
  return (
    <ul className={classes.ul}>
      <li>
        <div>{props.name}</div>
        <div className={classes.iconWrapper}>
          <div className={classes.iconEdit} onClick={showEdit}>
            <FiEdit3 />
          </div>
          {editIsShown && (
            <EditItem
              id={props.id}
              onClose={hideEdit}
              onSubmit={props.editItem}
            />
          )}
          <div className={classes.iconDelete} onClick={onRemoveItem}>
            <FiTrash2 />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ListItem;
