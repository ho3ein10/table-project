import React from 'react'
import { Spinner } from 'react-bootstrap'
import classes from "./loder.module.css"

const Loader = () => {
  return (
    <div className={classes.loading} >
    <Spinner animation='border' role='status'  variant="primary">
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader
