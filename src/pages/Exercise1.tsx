
import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";

export default function Exercise1() {
    const range = { min: 0, max: 100 }
    const title = range ? `1. Continuos Range: ${range.min} - ${range.max} $` : 'Range missing'
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Exercise 1 - Continuos Range</title>
                <meta name="description" content="Component that provides a input range with customizable min and max values." />
            </Helmet>

            <main className={`flex h-[80dvh] flex-col items-center px-24`}>
                <RangeContainer title={title}>
                    <Range range={range} steps={[]} />
                </RangeContainer>
            </main>
        </>
    );
}
//anotar te