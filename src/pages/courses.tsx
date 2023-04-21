import React from 'react';
import {CoursePageComponent} from "@/page-component";
import {withLayout} from "@/layouts/layout";

function Courses() {
    return (
        <CoursePageComponent />
    );
}

export default withLayout(Courses);