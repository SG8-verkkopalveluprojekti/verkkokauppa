import React from 'react'
import { Link, useNavigate } from "react-router-dom";
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
