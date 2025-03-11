import { Outlet } from "react-router-dom";
import BrowseBook from "./components/BrowseBook";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import AddBook from "./components/AddBook";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

function App(){
  return (
    <>

    <Provider store={appStore}>
    <NavigationBar/>
    <Outlet/>
    </Provider>
   
    </>
  )
}

export default App;