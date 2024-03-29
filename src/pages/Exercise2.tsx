import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";

export default function Exercise2() {
    const min = 1.99
    const max = 70.99
    const steps = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99]
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Exercise 2 - Fixed Range</title>
                <meta name="description" content="Component that provides a input range with customizable min and max values." />
            </Helmet>

            <main
                className={`flex h-[80dvh] flex-col items-center px-24`}
            >
                <RangeContainer title={`2. Fixed Range: ${min} - ${max} $`}>
                    <Range range={{ min, max }} steps={steps} isFixed />
                </RangeContainer>
            </main>
        </>
    );
}