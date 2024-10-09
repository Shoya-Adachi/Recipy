import "../components_style.scss"

type InputProps = {
    type: string;
    placeholder: string
    class: string
}

const Input = (props:InputProps) => {
    return(
        <input className={props.class} type={props.type} placeholder={props.placeholder}></input>
    )
}

export default Input