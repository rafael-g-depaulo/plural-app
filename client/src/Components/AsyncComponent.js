import React, { Suspense } from "react"
import Loading from "Pages/Loading"

function AsyncComponent({
    component,
    children,
    ...props
}){

    return(
        <Suspense fallback={<Loading />}{...props}>
            {component ?? children}
        </Suspense>
    )
}


export default AsyncComponent;