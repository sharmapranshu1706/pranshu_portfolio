"use client";

import { useEffect } from "react";

export default function ThemeColorMeta() {
    useEffect(() => {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "theme-color");
            document.head.appendChild(meta);
        }

        // Matches --background (#0f0f1b)
        meta.setAttribute("content", "#0f0f1b");
    }, []);

    return null;
}
