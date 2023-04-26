import React from 'react';
import {BooksPageComponent} from "@/page-component";
import {withLayout} from "@/layouts/layout";

function Books() {
    return (
        <BooksPageComponent />
    );
}

export default withLayout(Books);