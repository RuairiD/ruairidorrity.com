import React from 'react';

// Reusable <a> wrapper to avoid having the set `target` and `rel` everywhere.
const ExternalLink = ({
    href,
    children
}) => (
    <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
    </a>
);

export default ExternalLink;
