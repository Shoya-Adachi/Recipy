import "../components_style.scss"

type buttonProps = {
    label: string;
    type: "submit" | "reset" | "button" | undefined
    class: string;
    onClick: () => void;
}

const Button = (props:buttonProps) => {
    return(
        <button className={props.class} type={props.type} onClick={props.onClick}>{props.label}</button>
    )
}

export default Button