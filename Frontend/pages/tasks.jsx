import React from "react"
import { requiredUser } from "../helpers/requiredUser"

export default function Tasks() {
  return (
    <div className=''>
      tasks
    </div>
  )
}

export const getServerSideProps = requiredUser;
