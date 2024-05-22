import { useEffect } from "react"
import { fetchUser } from "../Redux/User/userAction"
import { useDispatch, useSelector } from "react-redux";

function UserList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);
    console.log(state);
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
    <div>
      <h2>userList</h2> 
{state.loading ? (
<p>Loading...</p> 
) : state.error ?( 
<p>{state.error}</p>
):(
    <div>
        {state.data && 
        state.data.map((user)=> <li key={user.id}>{user.name}</li>)}
        </div>
)}
 </div> 
  );
}

export default UserList;