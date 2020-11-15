import React from 'react'
import ReactDOM from 'react-dom'
import ListCurrencies from './ListCurrencies'

describe('testing ListCurrencies component', () => {
    it('must to render the component without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ListCurrencies />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})