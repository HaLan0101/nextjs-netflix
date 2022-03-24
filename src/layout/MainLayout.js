import Footer from "../components/Footer";
const MainLayout = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default MainLayout;
