import { useEffect, useRef } from "react"

export default function useOutsideClick(handler, listenCapturing) {
    const ref = useRef();
    useEffect(function () {
        function handleClick(e) {
            console.log(e.target, ref.current);

            if (ref.current && !ref.current.contains(e.target)) {
                handler()
            }
        }

        document.addEventListener('click', handleClick, listenCapturing);

        return () => document.removeEventListener('click', handleClick, listenCapturing)
    }, [listenCapturing, handler])

    return ref
}