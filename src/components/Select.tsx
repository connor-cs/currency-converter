import Form from 'react-bootstrap/Form'
import { FaRetweet } from 'react-icons/fa'
// import { currencies } from './src/utils/currencies.js'

export default function Select() {

  const currencies = [
    { code: "AU AUD - Australian Dollar" },
    { code: "🇧🇬 BGN - Bulgarian Lev" },
    { code: "🇧🇷 BRL - Brazilian Real" },
    { code: "🇨🇦 CAD - Canadian Dollar" },
    { code: "🇨🇭 CHF - Swiss Franc" },
    { code: "🇨🇳 CNY - Chinese Yuan Renminbi" },
    { code: "🇨🇿 CZK - Czech Koruna" },
    { code: "🇩🇰 DKK - Danish Krone" },
    { code: "🇪🇺 EUR - Euro" },
    { code: "🇬🇧 GBP - Great British Pound" },
    { code: "🇭🇰 HKD - Hong Kong Dollar" },
    { code: "🇭🇷 HRK - Croatian Kuna" },
    { code: "🇭🇺 HUF - Hungarian Forint" },
    { code: "🇮🇩 IDR - Indonesian Rupiah" },
    { code: "🇮🇱 ILS - Israeli Shekel" },
    { code: "🇮🇳 INR - Indian Rupee" },
    { code: "🇮🇸 ISK - Icelandic Krona" },
    { code: "🇯🇵 JPY - Japanese Yen" },
    { code: "🇰🇷 KRW - South Korean Won" },
    { code: "🇲🇽 MXN - Mexican Peso" },
    { code: "🇲🇾 MYR - Malaysian Ringgit" },
    { code: "🇳🇴 NOK - Norwegian Krone" },
    { code: "🇳🇿 NZD - New Zealand Dollar" },
    { code: "🇵🇭 PHP - Philippine Peso" },
    { code: "🇵🇱 PLN - Polish Zloty" },
    { code: "🇷🇴 RON - Romanian Leu" },
    { code: "🇷🇺 RUB - Russian Ruble" },
    { code: "🇸🇪 SEK - Swedish Krona" },
    { code: "🇸🇬 SGD - Singapore Dollar" },
    { code: "🇹🇭 THB - Thai Baht" },
    { code: "🇹🇷 TRY - Turkish Lira" },
    { code: "🇺🇸 USD - United States Dollar" },
    { code: "🇿🇦 ZAR - South African Rand" },
  
  ]
  
  return (
    <Form>
      <Form.Group>

        <Form.Select size="lg">
          <option>Select Currency</option>
          {currencies.map((curr) => {
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