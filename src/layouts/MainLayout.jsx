import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header"
import { Footer } from "../components/Footer/footer";

export const MainLayout = () => {
    return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
         <Footer /> 
    </>
    );
}