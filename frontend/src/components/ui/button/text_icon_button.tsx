import Image, { StaticImageData } from 'next/image'
import "@/components/ui/components_style.scss"

type TextIconButtonProps = {
    imagePath: StaticImageData
    imageAlt: string
    buttonText: string
    onClick: () => void
}

const TextIconButton = (props:TextIconButtonProps) => {
    return(
        <div className="TextIconButton">
            <Image
                src={props.imagePath}
                width={24}
                height={24}
                alt={props.imageAlt}
            />
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}

export default TextIconButton