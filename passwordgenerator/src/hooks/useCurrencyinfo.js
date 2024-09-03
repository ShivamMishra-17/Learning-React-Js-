import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currency) {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
          setData(res[currency]);
        })
        .catch((err) => {
          console.error("Failed to fetch currency info:", err);
          setError(err);
        });
    }
  }, [currency]);

  console.log("Currency data:", data); // Ensure this logs correctly
  return { data, error }; // Return both data and error for handling
}

export default useCurrencyInfo;
