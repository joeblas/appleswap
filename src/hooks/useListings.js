import { useState, useEffect } from 'react';

export default function useListings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/appleswap.json?&limit=25&raw_json=1').then(
      (res) =>
        res.json().then((response) => {
          setData(response.data.children.filter(listing => {
            return (
              !listing.data.title.includes('[Price Check]') &&
              !listing.data.title.includes('[Confirmed Trade]')
            );
          } ))
        })
    );
  }, []);

  return { data }
}
