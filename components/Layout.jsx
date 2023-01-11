import NavBar from "./Navbar";
import Footer from "./Footer"

const Layout = ({children}) => {

    return(
        <div id="layout" >
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;