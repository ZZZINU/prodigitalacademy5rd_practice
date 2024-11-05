import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postSignup } from '../../lib/apis/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  console.log(navigate);

  const onClickBtn = () => {
    const postData = { email, password };

    postSignup(postData).then((data) => {
      if (data._id) {
        navigate('/');
      }
    });
  };

  return (
    <div style={{ padding: '60px' }}>
      <h1>회원가입</h1>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          as="div"
          variant="primary"
          type="submit"
          onClick={() => {
            onClickBtn();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
