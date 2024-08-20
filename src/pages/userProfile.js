import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { getUserProfile, updateUserProfile, updateUserPassword } from '../API/userApi'; // You need to implement these API calls

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch user profile when the component mounts
    getUserProfile()
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfile(user)
      .then(() => alert('Profile updated successfully!'))
      .catch((err) => console.error(err));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    updateUserPassword(password)
      .then(() => {
        alert('Password updated successfully!');
        setShowModal(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Profile</Card.Title>
              <Form onSubmit={handleUpdateProfile}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={user.email}
                    disabled
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </Form>

              <Button variant="link" className="mt-3" onClick={() => setShowModal(true)}>
                Change Password
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Password Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePasswordChange}>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UserProfile;
