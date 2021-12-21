import {Fragment} from "react";
import Header from "./components/Layout/Headers";
import Meals from './components/Meals/Meals'
function App() {
  return (
   <Fragment>
       <Header />
       <main>
            <Meals/>
       </main>
   </Fragment>
  );
}

export default App;
