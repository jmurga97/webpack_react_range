import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Helmet } from "react-helmet";
import { Loader } from "../components/Loader";
import { useGetRange } from "../hooks/useGetRange";
import { useEffect, useState } from "react";
import { RangeLimit } from "../types";
import { Error } from "../components/Error";

export default function Exercise2() {
  const { range, steps, loader, error } = useGetRange("exercise2");
  const [input, setInput] = useState<RangeLimit>(range);
  useEffect(() => {setInput(range)},[range])
  const title = `2. Fixed Range: ${input.min} - ${input.max} $`;

  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <main className={`flex h-[80dvh] flex-col items-center px-4 md:px-24`}>
      <RangeContainer title={title}>
        <Range range={range} steps={steps} isFixed setInput={setInput} />
      </RangeContainer>
    </main>
  );
}
