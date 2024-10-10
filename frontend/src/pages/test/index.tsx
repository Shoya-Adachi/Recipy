import { useRouter } from 'next/router'

const TestPage = () => {
    const router = useRouter()

    const clickHandler = () => {
        router.push("/login")
    }

    return(
        <>
        <p>TestPe</p>
        <button onClick={clickHandler}>戻る</button>
        </>
        
    )
}

export default TestPage;