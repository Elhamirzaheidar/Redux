import {Provider} from "react-redux";
import store from "./Redux/store"
import CakeContainer from "./Components/CakeContainer";
import MilkContainer from "./Components/MilkContainer";
import UserList from "./Components/UserList";


function App() {

  return (
 <Provider store={store}>
   <div className="Container">
    <CakeContainer/>
    <MilkContainer/>
    <hr />
   <UserList />

    </div>
 </Provider>
      
  )
}

export default App
