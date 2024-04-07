import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";
import { Loader } from "../components/Loader";
import { useGetRange } from "../hooks/useGetRange";
import { RangeLimit } from "../types";
import { useState } from "react";

export default function Exercise1() {
    const { range, loader } = useGetRange('exercise1')
    const [input, setInput] = useState<RangeLimit>(range)
    const title = range ? `1. Continuos Range: ${input.min} - ${input.max} $` : 'Range missing'

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
            <main className={`flex h-[80dvh] flex-col items-center px-4 md:px-24`}>
                <RangeContainer
                    title={title}
                >
                    <Range range={range} setInput={setInput} />
                </RangeContainer>
            </main>
        </>
    );
}
//anotar te
