// ScrollToHashElement.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHashElement() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                const yOffset = -100; // adjust for sticky header height
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });

            }
        }
    }, [hash]);

    return null;
}