import { useEffect, useRef, useState ,useMemo , memo } from 'react';
import './App.css';

const obj1 = {
    // "namae" : "zaid "
}
function App1() {
    // const [dummyValue, dummy] = useState(true)
    const [count, setCount] = useState(0)
    // const countRef = useRef(null)




    // useMemo is empty depency array
    // const memoizedCount  = useMemo(()=>{
    //     count
    // } , [count])


    function updateCount(){
        setCount((x)=>x+1 )

    }

    console.log("Memoizd Count"  , memoizedCount);

    const CounterPresentor = memo((props)  =>{
        const {count}  = props ;

        useEffect(()=>{
            console.log("Counterpresentor Rendered");
        })


        return(
            <div>
                {count}
            </div>
        )

        
    } , (prev , next)=>{
        if (next ===10){
            return true
        }
        return false
    })

    


    // useEffect(() => {
    //     console.log("hello with dependency");

    // }, [])

    // //renders ater every child --renderng and can take lot of memory as it has no dependency
    // useEffect(() => {
    //     console.log("UseRef without dependecny");

    // })

    // //state get change or ref get changes
    // useEffect(() => {
    //     console.log("hello 11  with change in count with one dependecncy")

    // }, [count])

    // //
    // useEffect(() => {
    //     console.log("UseRef is called with def dependdency!!");

    // }, [countRef.current])

    // function aa() {
    //     countRef.current = obj1
    //     // console.log(countRef.current)

        
    // }



    return (
        <div className="App">
{/* 
            <button onClick={() => dummy((x) => (!x))}> Click Me!!</button>
            <button onClick={() => setCount((x) => x + 1)}> Update Count!!</button>
            <button onClick={aa}> UPdate ref COunt</button>
            <p>Dummy State  -  {dummyValue} CountSatte - {count}</p> */}
            <button onClick={updateCount}>Update Count</button>
            <CounterPresentor count={count} />

        </div>
    )


   

}


export default App1;
