import React, { useEffect, useState } from 'react';

const TableOfContents = () => {
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        // Find all the <h4> elements on the page
        const headerElements = Array.from(document.querySelectorAll('h4'));

        // Prepare data for each header
        const headersData = headerElements.map((header) => ({
            id: header.id || header.innerText.toLowerCase().replace(/\s+/g, '-'),
            text: header.innerText,
        }));

        // Add an id to each <h4> if it doesn't already have one
        headerElements.forEach((header, index) => {
            if (!header.id) {
                header.id = headersData[index].id;
            }
        });

        setHeaders(headersData);
    }, []);

    return (
        <div className="toc">
            <c>
                {headers.map((header, index) => (
                    <li key={index}>
                        <a href={`#${header.id}`}>{header.text}</a>
                    </li>
                ))}
            </c>
        </div>
    );
};

export default TableOfContents;
