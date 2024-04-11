import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color, Text } from '@ds.e/react'
import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Button.css'
import '@ds.e/scss/lib/Text.css'

ReactDOM.render(
    // <Button label='Example Button' />,
    // <Color hexCode='#000' width='lg' height='lg' />,
    <Text size='xs'>this is some text</Text>,
    document.querySelector('#root')
)
