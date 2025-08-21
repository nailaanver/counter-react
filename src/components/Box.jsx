import { useState } from "react"
const Box = () =>{
    let count = 0
    const [countState,setCountState] = useState(0)
    const [activeColor,setColor] = useState('black');

    const increase = () => {
        setCountState(a=> a+1)
        if (countState >0) {
            setColor('green')
        }
        
    }
    const reset = () => {
        setCountState(0)
        setColor('black')
    }
    const decrease = () => {
        setCountState(a=>a-1)
        setColor('red ')
    }

    const handleInputChange = (e) => {
        setCountState(e.target.value++)
    }
    return(
        <>
        <div class="box">
            <input type="text" id="count" value={countState} onChange={handleInputChange} style={{ color : activeColor}} />
    
        </div>
        <div className="btn">
            <button onClick={decrease}>-</button>
            <button onClick={reset}>↻</button>
            <button onClick={increase}>+</button>
        </div>
        </>
    )
}
export default Box