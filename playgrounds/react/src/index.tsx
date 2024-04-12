import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color, Text, Margin, Select } from '@ds.e/react'
import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Button.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black',
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green',
}, {
    label: 'Sweet Pink',
    value: 'pink',
}]

ReactDOM.render(
    // <Button label='Example Button' />,
    // <Color hexCode='#000' width='lg' height='lg' />,
    // <Text size='xs'>this is some text</Text>,
    <div>
        {/* <Margin>
            <Text size='xs'>this is some text</Text>
        </Margin> */}
        <Select options={options} />
        <p>This is some text</p>
    </div>,
    document.querySelector('#root')
)
