import Alert from "./Alert";
import './App.css';
import List from "./List";
import {useState} from "react";

function App() {
    const [Name,setName]=useState('')
    const [alert,setAlert]=useState({show:true,msg:"",type:""})
    const [Isediting ,setIsediting]=useState(false)
    const [editid,serEditid]=useState(null)
    let [List,setList]=useState([])


    function Handlesubmit(e)
    {
        e.preventDefault();
        if(!Name)
        {
            //
        }
        if(Name && Isediting)
        {
            //
        }
        else
        {
            const newitem = {id:new Date().getTime().toString(),title:Name};
            setList([...List,newitem]);
            setName('')
        }

    }
  return (
    <section className="list-it">
      <form className="grocery-form" onSubmit={Handlesubmit}>
          {alert.show && <Alert />}
        <input type="text" placeholder="this is for writing list" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
        <button className="form-btn" type="submit"> {Isediting?"edit":"submit"} </button>
      </form>
        <List items={List}/>
      <button className="clear-btn">clear button</button>
    </section>
  );
}

export default App;
