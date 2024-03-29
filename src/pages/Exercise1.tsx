import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";
import { Loader } from "../components/Loader";
import { useGetRange } from "../hooks/useGetRange";

export default function Exercise1() {
    const {range, loader} = useGetRange('exercise1')

    if (loader) {
        return <Loader />;
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Exercise 1 - Continuos Range</title>
                <meta
                    name="description"
                    content="Component that provides a input range with customizable min and max values."
                />
            </Helmet>
            <main className={`flex h-[80dvh] flex-col items-center px-24`}>
                <RangeContainer
                    title={`1. Continuos Range: ${range.min} - ${range.max} $`}
                >
                    <Range range={range} />
                </RangeContainer>
            </main>
        </>
    );
}
//anotar te
