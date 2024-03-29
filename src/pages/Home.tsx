import mangoLogo from '../assets/images/mango.png'
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <meta name="description" content="MCA Tech Test" />
            </Helmet>

            <main
                className={`flex h-[80dvh] flex-col items-center justify-center `}
            >
                <h2 className="mb-5 font-light text-lg">Look for the exercises at their respective options in the navbar</h2>
                <img alt="Mango Logo" src={mangoLogo} width={250} height={50} className="invert" />
            </main>
        </>
    );
}

export default Home;