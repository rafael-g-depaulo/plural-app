import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const cacheTimeout = 1000 * 60 * 60 * 24

export const useAPICache = (key, initialValue, apiCall = Promise.resolve) => {

  const [ cache, setCache ] = useLocalStorage(key, { timeout: Date.now(), data: initialValue })

  useEffect(() => {
    if (cache.timeout <= Date.now() || cache.isInvalid) {
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
          status: response.status,
          isInvalid: true,
        })))
    }
  }, [ apiCall, cache, setCache ])

  const { data, status } = cache
  return { data, status }
}