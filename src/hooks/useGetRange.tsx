import { useEffect, useState } from "react";
import axios from "axios";
import type { RangeLimit } from "../types";

export const useGetRange = (route: string) => {
    const [range, setRange] = useState<RangeLimit>({ min: 0, max: 100 });
    const [steps, setSteps] = useState([])
    const [loader, setLoader] = useState<boolean>(true);
    const [error, setError] = useState<string>('')
    useEffect(() => {
        setLoader(true);
        axios
            .get(`http://demo1866633.mockable.io/${route}`)
            .then((response) => {
                const { range } = response.data

                if (Array.isArray(range)) {
                    let orderedRange = range.slice().sort((a, b) => a - b);
                    const min = orderedRange[0];
                    const max = orderedRange[orderedRange.length - 1];
                    setRange({ min, max });
                    setSteps(orderedRange)
                } else if (typeof range === 'object') {
                    setRange(range)
                } else{
                    throw new Error('Wrong data type')
                }

            })
            .catch((e) => {
                console.error(e)
                setError('Oops, we could not find the range data :(')
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);
    return {
        range,
        steps,
        loader,
        error
    }
}