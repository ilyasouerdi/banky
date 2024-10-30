import React  from "react"
import HeaderBox from '@/components/ui/HeaderBox.tsx'
import TotalBalancebox from "@/components/ui/TotalBalanceBox.tsx"
const Home = () => {
    const loggedIn = {firstName: 'ilyas'}
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Manage your account and transactions."
                    />
                    <TotalBalancebox
                        accounts = {[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}


                    />
                </header>
            </div>
            
        </section>
    )
}
export default Home
