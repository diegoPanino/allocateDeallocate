import React , {useState} from 'react';
import './style.css'

interface MyInputProps{
    onSubmitHandler:(input:string) => void
}

const MyInput :React.FunctionComponent<MyInputProps> = ({onSubmitHandler})  => {
    const [input,setInput] = useState<string>('')

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const onClickHandler = () =>{
        onSubmitHandler(input)
    }

    return(
        <div className='App-input-box'>    
            <input className='App-input' type ='text' value = {input} onChange = {onChangeHandler} />
            <button className='App-btn' onClick = {onClickHandler}>Allocate Resource</button>
        </div>
    )
}

export default MyInput