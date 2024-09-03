import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ShivamMishra-17")
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <h1 className="text-center m-4 bg-grey-600 text-black p-4 text-3xl flex flex-direction-row gap-10 align-content-center">
      <img src={data.avatar_url} width={100}/>
      Github Followers : {data.followers}
    </h1>
  );
}
