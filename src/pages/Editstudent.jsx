import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { updateProfile } from '../services/AllApi';

function Editstudent({ add, onSave }) {
  const [formData, setFormData] = useState({ ...add });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData.id, formData);
      onSave(formData); // pass updated data to parent
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile!");
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <h2>Edit Profile</h2>
      <div className='border border-3 p-5 shadow-sm'>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Image-Url</Form.Label>
              <Form.Control name="imgUrl" value={formData.imgUrl} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" value={formData.address} onChange={handleChange} />
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Course</Form.Label>
              <Form.Select name="course" value={formData.course} onChange={handleChange}>
                <option>Choose...</option>
                <option>Data Science</option>
                <option>Full-Stack-Web Development</option>
                <option>UI/UX Design</option>
                <option>Cyber Security</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Course Duration</Form.Label>
              <Form.Select name="courseduration" value={formData.courseduration} onChange={handleChange}>
                <option>Choose...</option>
                <option>1year</option>
                <option>6months</option>
                <option>9months</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Editstudent;
