import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import CurrencyConverter from './CurrencyConverter'
import '@testing-library/jest-dom/extend-expect'

describe('CurrencyConverter', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CurrencyConverter />, div);
        unmountComponentAtNode(div)
    });
})
