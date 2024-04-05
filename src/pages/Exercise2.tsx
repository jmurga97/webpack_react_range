import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";
import { Loader } from "../components/Loader";
import { useGetRange } from "../hooks/useGetRange";

export default function Exercise2() {
    const {range, steps, loader} = useGetRange('exercise2')

    if (loader) {
        return <Loader />;
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Exercise 2 - Fixed Range</title>
                <meta
                    name="description"
                    content="Component that provides a input range with customizable min and max values."
                />
            </Helmet>

            <main className={`flex h-[80dvh] flex-col items-center px-4 md:px-24`}>
                <RangeContainer title={`2. Fixed Range: ${range.min} - ${range.max} $`}>
                    <Range range={range} steps={steps} isFixed />
                </RangeContainer>
            </main>
        </>
    );
}
