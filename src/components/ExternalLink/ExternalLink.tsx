import React, { PropsWithChildren } from "react";
import { A } from "lemon-reset";

// Reusable <a> wrapper to avoid having the set `target` and `rel` everywhere.
const ExternalLink = ({
    href,
    children
}: PropsWithChildren<{
    href: string;
}>) => (
    <A target="_blank" rel="noopener noreferrer" href={href}>
        {children}
    </A>
);

export default ExternalLink;
