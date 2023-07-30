import Form from 'react-bootstrap/Form'
import { FaRetweet } from 'react-icons/fa'

export default function Select() {
    return (
      <Form>
        <Form.Group>
  
  
          <Form.Select size="lg">
            <option>Select Currency</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </Form.Select>
          <div>
            <FaRetweet className="swap-icon" size={56} />
          </div>
          <Form.Select size="lg">
            <option>Select Currency</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  }