import TextIconButton from "@/components/ui/button/text_icon_button"
import "./header_style.scss"
import logoutImage from "../../../public/logout.png"
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/login")
    }

    return(
        <div className="header">
            <div></div>
            <div className="title">Recipy</div>
            <TextIconButton imagePath={logoutImage} imageAlt="logout icon" buttonText="ログアウト" onClick={clickHandler}/>
        </div>
    )
}

export default Header