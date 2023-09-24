import { useDispatch } from "react-redux";
import { getFilter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <input type="text"
            name='filter'
            onChange={ event => dispatch(getFilter(event.target.value))}
        />
    )
};