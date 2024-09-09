import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { Form, Button} from "react-bootstrap";



import Swal from "sweetalert2";
function Contact() {

  const navigate = useNavigate();
  const [Formcontact, setFormcontact] = useState();

  const handleChange = (e) => {
    setFormcontact({
      ...Formcontact,
      [e.target.name]: e.target.value,
    });
    console.log(Formcontact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Formcontact),
        method: "POST",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.Status === true) {
        Swal.fire({
          icon: "success",
          title: ` Message Sent Successfully.`,
          text: `Sent by ${Formcontact.name}.`,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
        setFormcontact({});
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not connect to the server.",
      });
    }
  };
  return (
    <div>
      <div className="row justify-content-center auth__form">
        <div className="col-lg-12">
          <div className=" rounded wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="display-5  text-center"><strong>Contact Form</strong></h3>

          <Form onSubmit={handleSubmit}>
            


              <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          tabIndex="1"
          id="name"
          placeholder="Full name"

          onChange={handleChange}
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="2"
          id="email"
          placeholder="Enter email"
 onChange={handleChange}
        />
      </Form.Group>



      <Form.Group className="mb-3" controlId="mobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="mobile"
          name="mobile"
          tabIndex="2"
          id="mobile"
          placeholder="Enter mobile"
onChange={handleChange}
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="message">
  <Form.Label>Message</Form.Label>
  <Form.Control
    as="textarea"     
    name="message"
    id="message"
    placeholder="Enter Your Message"
    rows={5}          
    required            
    onChange={handleChange}
  
  />
</Form.Group>
   
      <Button
        tabIndex="6"
        variant="success"
        type="submit"
        className="mb-3">
    Send
      </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
