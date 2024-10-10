import "../components_style.scss"

type InputProps = {
    type: string;
    placeholder: string
    class: string
    state?: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Input = (props:InputProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setState(e.target.value)
    }
    return(
        <input className={props.class} type={props.type} value={props.state} placeholder={props.placeholder} onChange={handleInputChange}/>
    )
}

export default Input