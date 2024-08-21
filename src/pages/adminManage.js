import React from 'react'
import { Card, Button } from 'react-bootstrap';


const AdminManage = () => {

    
  return (

    <Card className="mb-3">
      <Card.Body>
        <Card.Title>USER </Card.Title>
        <Card.Text>
          <strong>Email:</strong> <br />
          <strong>Status:</strong> 
        </Card.Text>
      
          <Button >
            Unblock User
          </Button>
       
      </Card.Body>
    </Card>
  )
}

export default AdminManage