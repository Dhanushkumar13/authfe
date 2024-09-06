import { useState } from "react";
import styles from "./styles.module.css";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "William Stokes",
    location: "Unknown, Vietnam",
    latitude: "21.0245",
    longitude: "105.841171",
    email: "william.stokes@example.com",
    phone: "+1234567890",
    gender: "Male"
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully");
  };

  return (
    <Container className={styles.page_container}>
      <nav className={styles.navbar}>
        <h1>Dashboard</h1>
        <Button className={styles.logout_btn} onClick={handleLogout}>
          Logout
        </Button>
      </nav>

      <div className={styles.profile_container} style={{display: "flex"}}>
        <Form className={styles.profile_form}>
          <div className={styles.profile_header}>
            <Button variant="outline-primary" onClick={handleEditToggle}>
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className={styles.profile_card}>
            <Row>
              <Col md={4} className={styles.profile_image_section}>
                <img
                  src="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
                  alt="Profile"
                  className={styles.profile_image}
                />
              </Col>
              <Col md={8} className={styles.profile_info_section}>
                <Form.Group as={Row} controlId="formPlaintextName">
                  <Form.Label column sm="3" >Name</Form.Label>
                  <Col sm="9">
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                      />
                    ) : (
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={profile.name}
                        className={styles.profile_text}
                      />
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextLocation">
                  <Form.Label column sm="3">Location</Form.Label>
                  <Col sm="9">
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        name="location"
                        value={profile.location}
                        onChange={handleChange}
                      />
                    ) : (
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={profile.location}
                        className={styles.profile_text}
                      />
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="3">Email</Form.Label>
                  <Col sm="9">
                    {isEditing ? (
                      <Form.Control
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={profile.email}
                        className={styles.profile_text}
                      />
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPhone">
                  <Form.Label column sm="3">Phone</Form.Label>
                  <Col sm="9">
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={profile.phone}
                        className={styles.profile_text}
                      />
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextGender">
                  <Form.Label column sm="3">Gender</Form.Label>
                  <Col sm="9">
                    {isEditing ? (
                      <Form.Control
                        as="select"
                        name="gender"
                        value={profile.gender}
                        onChange={handleChange}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Control>
                    ) : (
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={profile.gender}
                        className={styles.profile_text}
                      />
                    )}
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            {isEditing && (
              <Button variant="success" onClick={handleSave} className={styles.save_btn}>
                Save Profile
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ProfilePage;
