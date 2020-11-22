import './App.css'
import Header from './components/Header'
import SeminarSection from './components/SeminarSection'
import SheduleTape from './components/SheduleTape'
import Dates from './components/Dates'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import VoteHeader from './components/VoteHeader'
import VoteBody from './components/VoteBody'

const App = () => {
    return (
        <>
            <Header />
            <SeminarSection />
            <SheduleTape />
            <Dates />
            <WhatsApp />
            <VoteHeader />
            <VoteBody />
            <Footer />
        </>
    )
}

export default App
