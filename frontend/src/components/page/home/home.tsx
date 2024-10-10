import "./home_style.scss"
import "../../page/common_page_style.scss"
import Header from "@/components/base/header/header"
import Image from 'next/image'
import stakeImage from "../../../public/ステーキ.png"

const Home = () => {
    return(
        <div className="home">
            <Header />
            <section className="main-menu">
                <h2>主食</h2>
                <div className="card">
                    <Image 
                        src={stakeImage}
                        width={295}
                        height={150}
                        alt="ステーキ"
                        />
                    <p>ステーキ</p>
                </div>
            </section>
            <section className="main-menu">
                <h2>スープ</h2>
                <div className="card">
                    <Image 
                        src={stakeImage}
                        width={295}
                        height={150}
                        alt="ステーキ"
                        />
                    <p>ステーキ</p>
                </div>
            </section>
            <section className="main-menu">
                <h2>デザート</h2>
                <div className="card">
                    <Image 
                        src={stakeImage}
                        width={295}
                        height={150}
                        alt="ステーキ"
                        />
                    <p>ステーキ</p>
                </div>
            </section>
            
        </div>
    )
}

export default Home