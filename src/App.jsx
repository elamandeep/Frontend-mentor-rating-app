import { RatingComponent } from "./component/RatingComponent";
import { SuccessComponent } from "./component/SuccessComponent";
import { useGlobalContext } from './Context';

function App() {

  const{submit}=useGlobalContext()
  return (
  <>
   <div className="card">
      {submit?<SuccessComponent/> : <RatingComponent/>}
   </div>
  </>
  )
}

export default App
