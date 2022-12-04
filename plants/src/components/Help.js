import React from "react"
import { useGlobalState } from "../context/GlobalState";

const Help = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div>
      <h1>This is the help page</h1>
    </div>
  )
}

export default Help