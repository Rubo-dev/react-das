import React,{useState} from 'react';

const Home = (props) =>{
    const [number,setNumber] = useState(props.data.counter)    
    return(
        <div>
            <h4>{number}</h4>
            <button onClick = {() => setNumber(number +1)}>Click</button>
        </div>
    )
}
export default Home;