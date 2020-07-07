import { useEffect, useState, useCallback } from "react"
import useLocalStorage from "./useLocalStorage"

const cacheTimeout = 1000 * 60 * 60 * 24
const maxRetries = 10

export const useAPICache = (key, initialValue, apiCall = Promise.resolve) => {

  const [ cache, setCache ] = useLocalStorage(key, { timeout: Date.now(), data: initialValue })
  const [ retryCounter, setRetryCounter ] = useState(0)

  // call API and update cache
  const callApiThenUpdate = useCallback(() => {
    apiCall()
      .then(({ data, status }) => setCache(({
        ...cache,
        timeout: Date.now() + cacheTimeout,
        data,
        status,
        isInvalid: false,
      })))
      .catch(({ response }) => setCache(({
        ...cache,
        timeout: Date.now,
        status: response?.status ?? 404,
        isInvalid: true,
      })))
  }, [apiCall, cache, setCache])

  useEffect(() => {
    // if cache is old
    if (!cache?.timeout || cache.timeout <= Date.now()) {
      callApiThenUpdate()
    // if cache is invalid
    } else if (cache.isInvalid && retryCounter > maxRetries) {
      callApiThenUpdate()
      setRetryCounter(retryCounter+1)
    }
  }, [ cache, callApiThenUpdate, setRetryCounter, retryCounter ])

  const { data, status } = cache
  return { data, status }
}