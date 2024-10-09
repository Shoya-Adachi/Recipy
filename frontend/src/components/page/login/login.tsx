import "./login_style.scss"
import Button from "@/components/ui/button/button"
import Input from "@/components/ui/form/form"
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter()

    const handleClick = () => {
        router.push('/test')
    }

    return(
        <div className="page_whole">
            <div className="title_section">
                <h1>Recipy</h1>
            </div>
            <div className="login_section">
                <div>
                    <h1>ログイン</h1>
                    <Input class="login_form" placeholder="" type="button"/>
                    <p>or</p>
                    <div className="form">
                        <Input class="login_form" placeholder="ID" type="text"/>
                        <Input class="login_form" placeholder="PASSWORD" type="password"/>
                        <Button class="login_button" label="Login" type="submit" onClick={handleClick}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;