import React, { Suspense } from "react"
import Loading from "../Pages/Loading/index"

function AsyncComponent({
    component,
    ...props
}){

    return(
        <Suspense fallback={<Loading />}{...props}>
            {component}
        </Suspense>
    )
}


export default AsyncComponent;