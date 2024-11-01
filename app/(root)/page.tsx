import React  from "react"
import HeaderBox from '@/components/ui/HeaderBox.tsx'
import TotalBalancebox from "@/components/ui/TotalBalanceBox.tsx"
import RightSidebar from "@/components/ui/RightSidebar"
const Home = () => {
    const loggedIn = {firstName: 'ilyas', lastName:'ouerdi', email:'ilyasouerdi2@gmail.com'}
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

                recent transactions
            </div>
            <RightSidebar
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 123.50 },{}]}
            />
        </section>
    )
}
export default Home
