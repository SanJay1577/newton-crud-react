import "./App.css";
import Base from "./Components/Base.js";
//import { Charachters } from "./Components/Chachter.js";
import { Students } from "./Components/Students";

function App() {
  return (

    <Base
    title="Student Details"
    description="All Student details"

  >
  <Students/>
  </Base>
  
  );
}

export default App;


{/* <Base
title="Marvel Studios"
description="All charachters are available here"
property={"all properrties"}
>
<Charachters/>
</Base> */}