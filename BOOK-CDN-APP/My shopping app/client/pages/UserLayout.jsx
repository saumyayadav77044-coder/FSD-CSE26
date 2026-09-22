import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Header from "../Components/Header";

const UserLayout = () => {
    return (
        <div className="user-layout">
            <Home />
        {/* <Header /> */}
        <Navbar />
        <Footer />

        </div>
    )
    };
export default UserLayout