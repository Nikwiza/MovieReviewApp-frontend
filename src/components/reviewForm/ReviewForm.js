import React from "react";
import {Form, Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText,labelText,defaultvalue}) => {
    return(
        <Form>
            <Form.Group className="mb-3" controlId = "exampleForm.ControlTextarea1">
                <Form.Label>

                </Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultvalue}></Form.Control>
            </Form.Group>
            <Button  variant='outline-info' onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default ReviewForm;