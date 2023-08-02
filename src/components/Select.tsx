import Form from 'react-bootstrap/Form'
import { FaRetweet } from 'react-icons/fa'
import currencies from '/src/utils/currencies.js'


export default function Select() {
    return (
      <Form>
        <Form.Group>
  
          <Form.Select size="lg">
            <option>Select Currency</option>
            {currencies.map((curr)=> {
              <option value={curr.currency}>{curr.currency}</option>
            })}
          </Form.Select>
          <div>
            <FaRetweet className="swap-icon" size={56} />
          </div>
          <Form.Select size="lg" >
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