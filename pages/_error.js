import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Page Not Found.</h1>
        <p><Link href="/"><a>Go back</a></Link>.</p>
    </div>
);

export default errorPage;