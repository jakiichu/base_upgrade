import TextField from "@app/components/textfield";
import {useRef} from "react";

const App = () => {
    // const [count, setCount] = useState(0)
    const ref = useRef(null)
    return (
        <div>
            <TextField ref={ref}/>
        </div>
    )
}

export default App
