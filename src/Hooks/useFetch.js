import apiUrl from "../Constants/api";
import { useState, useEffect, useRef } from "react";

export default function useFetch(
  route,
  { method = "GET", params = {}, body = null, headers = {} } = {},
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null); // To cancel ongoing requests

  const sendRequest = async () => {
    setError(null);

    // Cancel previous request if any
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      // Build query string
      const queryString = new URLSearchParams(params).toString();
      const requestUrl = queryString
        ? `${apiUrl}${route}?${queryString}`
        : `${apiUrl}${route}`;

      // Build request options
      const fetchOptions = {
        method,
        headers: {
          "Content-Type": body ? "application/json" : undefined,
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
        signal,
      };

      const res = await fetch(requestUrl, fetchOptions);

      if (!res.ok) {
        throw new Error(`Request failed with ${res.status} status code.`);
      }

      const parsedData = await res.json();
      setData(parsedData);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    }
  };

  useEffect(() => {
    // in case the component unMounts, cancel the ongoing request
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return { data, error, sendRequest };
}
