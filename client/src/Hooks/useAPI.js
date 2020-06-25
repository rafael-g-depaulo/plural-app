import { useEffect, useState } from "react"

export const useAPI = (apiCall = Promise.resolve) => {
  const [ response, setResponse ] = useState({ data: null, status: null, isFetching: true })

  useEffect(() => {
    apiCall()
      .then(({ data, status }) => setResponse({ data, status, isFetching: false }))
      .catch(({ response }) => setResponse({ data: null, status: response.status, isFetching: false }))
  }, [ apiCall ])

  return response
}

export default useAPI