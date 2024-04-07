import RangeContainer from "../layouts/RangeContainer";
import Range from "../components/Range";
import { Loader } from "../components/Loader";
import { useGetRange } from "../hooks/useGetRange";
import { RangeLimit } from "../types";
import { useEffect, useState } from "react";
import { Error } from "../components/Error";

export default function Exercise1() {
  const { range, loader, error } = useGetRange("exercise1");
  const [input, setInput] = useState<RangeLimit>(range);

  useEffect(() => {setInput(range)},[range])
  const title = `1. Continuos Range: ${input.min} - ${input.max} $`

  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <main className={`flex h-[80dvh] flex-col items-center px-4 md:px-24`}>
      <RangeContainer title={title}>
        <Range range={range} setInput={setInput} />
      </RangeContainer>
    </main>
  );
}