import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const onRemoveItem = () => {
    props.removeItem(props.id);
  };
  return (
    <ul className={classes.ul}>
      <li onClick={onRemoveItem}>{props.name}</li>
    </ul>
  );
};

export default ListItem;
