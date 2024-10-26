import { useState, useEffect } from "react";

export function usePostTitle() {
  const [postData, setPostData] = useState({});

  async function getData() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const parsedData = await rawData.json();
    setPostData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return { postData };
}

export function useFetch(url) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  async function extractDetails() {
    setLoading(true);
    const rawData = await fetch(url);
    const parsedData = await rawData.json();
    setDetails(parsedData);
    setLoading(false);
  }

  useEffect(() => {
    extractDetails();
  }, [url]);

  useEffect(function () {
    const timer = setInterval(extractDetails, 10 * 1000);

    //cleanup
    return function () {
      clearInterval(timer);
    };
  }, []);

  return { details, loading };
}
