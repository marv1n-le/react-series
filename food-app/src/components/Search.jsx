import { useEffect } from "react";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState('piazz');
  //syntax of useEffect hook
  useEffect(() => {
    console.log('query changed', query);
  }, [query])
  return <div>
    <input 
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    type="text"/>
  </div>
}