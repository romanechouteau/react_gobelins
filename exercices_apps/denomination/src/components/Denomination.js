import {Component, Fragment} from 'react'
import { flatMap } from 'lodash'

class Denomination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: '',
      tokens: [],
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value } = event.target
    const { denominations } = this.props

    let total = parseFloat(value)

    if (/[^\d,.]/.test(value)) {
      this.setState({
        amount: value,
        error: 'Veuillez entrer un nombre.',
        tokens: []
      })
    } else if (total < 1) {
      this.setState({
        amount: value,
        error: 'Attention dans le nombre ne peut pas être inférieur à 1.',
        tokens: []
      })
    } else if (/\d+[,.]0*[1-9]/.test(value)) {
      this.setState({
        amount: value,
        error: 'Attention dans la partie décimale n\'est pas nulle.',
        tokens: []
      })
    } else {
      this.setState({
        amount: value,
        tokens: flatMap([...denominations].sort((a, b) => b-a), (token) => {
          if (token <= total) {
            const number = Math.trunc(total / token)
            total = total - (token * number)
            return [{ value: token, number }]
          } else {
            return []
          }
        }),
        error: ''
      })
    }
  }

  render() {
    const { amount, tokens, error } = this.state
    const { denominations } = this.props

    return (
      <Fragment>
        <div>
          <p>Les tokens : {denominations.join(', ')}</p>
        </div>
        <div>
            <div>{error}</div>
            <label>Saisir le montant :</label>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
        </div>
        <div>
          <p>Vous avez demandé la monnaie sur {amount} : </p>
          <ul>
            {tokens.map((token, i) => <li key={i} >Token {token.value} : {token.number}</li>)}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Denomination
