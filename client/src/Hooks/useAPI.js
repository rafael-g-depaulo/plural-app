import { useEffect, useState } from "react"

export const useAPI = (defaultValue, apiCall = Promise.resolve) => {
  const [ response, setResponse ] = useState({ data: defaultValue, status: null, isFetching: true })

  useEffect(() => {
    apiCall()
      .then(({ data, status }) => setResponse({ data, status, isFetching: false }))
      .catch(err => {
        console.log("2222",{err})
        setResponse(r => ({ ...r, status: err.response.status, isFetching: false }))
      })
  }, [ apiCall ])

  return response
}