import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("useEffect Called");
  }, []);

  return (
    <div>
      {console.log("fun render")}
      <h1>{"Count:" + count}</h1>
      <button onClick={() => setCount((prevcount) => prevcount + 1)}>
        Increase Count
      </button>
      <h1>{"Count1:" + count1}</h1>
      <button
        onClick={() => {
          setCount1((prevcount) => prevcount + 1);
        }}
      >
        Increase Count1
      </button>
    </div>
  );
};

export default User;
