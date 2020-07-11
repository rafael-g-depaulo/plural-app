import { lazy } from "react";

export const MinWaitLazy = (minDelay, importFunc) => lazy(() => Promise
  .all([
    importFunc(),
    new Promise(resolve => setTimeout(resolve, minDelay))
  ])
  .then(([moduleExports]) => moduleExports)
)

export default MinWaitLazy