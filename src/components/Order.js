import React from 'react'
import { Button } from 'react-bootstrap'

const makeOrder = () => {

}

export const Order = () => {
  return (
    <div>
        <Button
        className="btn btn-primary btn-md"
        style={{ width: "100%" }}
        variant="primary"
        onClick={makeOrder}
      >Tilaa tästä</Button>
    </div>
  )
}
