import { useSelector, useDispatch } from "react-redux";
import { removeService, fixService, changeService, searchService } from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const searchChange = (evt) => {
    // const { value } = evt.target;
    // dispatch(searchChange(value));

    // const target = evt.target.value;
    // dispatch(searchChange(target));

    const target = evt.target.value;
    dispatch(searchChange('value', target));
  }

  const handleFix = (id) => {
    console.log(items)
    console.log(id);
    const item = items.find(el => el.id === id);
    dispatch(changeService('name', item.name));
    dispatch(changeService('price', item.price));
    dispatch(fixService(id));
  }

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <>
      <input onChange={searchChange} placeholder="search..."></input>
      <ul>
        {items.map((o) => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleFix(o.id)}>fix</button>{" "}
            <button onClick={() => handleRemove(o.id)}>✕</button>{" "}
          </li>
        ))}
      </ul>
    </>
    
  );
}
  