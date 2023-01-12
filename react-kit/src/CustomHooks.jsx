import { useEffect } from 'react';

const useClick = (elementId, clickHandler) => {
    useEffect(() => {
        const element = document.querySelector(elementId);
        if (!element) return;
        element.addEventListener("click", clickHandler);

        return () => {
            element.removeEventListener("click", clickHandler);
        };
    }, [elementId, clickHandler]);
};



export { useClick };