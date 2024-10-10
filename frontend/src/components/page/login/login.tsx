import "./login_style.scss"
import "../../page/common_page_style.scss"
import Button from "@/components/ui/button/button"
import Input from "@/components/ui/form/form"
import { useState } from "react" 
import { useRouter } from 'next/router'
import axios from "axios"

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [view, setView] = useState(false)
    const router = useRouter()

    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/login", {
                name: name,
                password: password
            })
            if (response.status === 200) {
                router.push('/home')
            } 
        } catch (error) {
            console.log("失敗しました", error)
            setView(true)
        }
    }

    return(
        <div className="page_whole">
            <div className="title_section">
                <h1>Recipy</h1>
            </div>
            <div className="login_section">
                <div>
                    <h1>ログイン</h1>
                    { view ? <p>IDまたはパスワードが異なっています</p>: <></>}
                    <div className="form">
                        <Input class="login_form" placeholder="ID" type="text" state={name} setState={setName}/>
                        <Input class="login_form" placeholder="PASSWORD" type="password" state={password} setState={setPassword}/>
                        <Button class="login_button" label="Login" type="submit" onClick={handleClick}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;