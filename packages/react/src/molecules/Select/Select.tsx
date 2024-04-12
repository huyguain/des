import React, { useState, useRef, useEffect } from 'react'
import Text from '@ds.e/react/src/atoms/Text'

interface SelectOption {
    label: string,
    value: string,
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void
    options?: SelectOption[]
    label?: string
}

const Select: React.FunctionComponent<SelectProps> = ({ options = [], label = 'Please selet an option...', onOptionSelected: handler }) => {
    const [isOpen, setIsOpen] = useState < Boolean > (false)
    const [selectedIndex, setSelectedIndex] = useState < null | number > (null)
    const labelRef = useRef < HTMLButtonElement > (null)
    const [overlayTop, setOverlayTop] = useState < number > (0)

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        if (handler) {
            handler(option, optionIndex)
        }
        setSelectedIndex(optionIndex)
        setIsOpen(false)
    }

    useEffect(() => {
        setOverlayTop((
            labelRef.current?.offsetHeight || 0
        ) + 10)
    }, [labelRef.current?.offsetHeight])

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }

    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex]
    }

    return <div className='dse-select'>
        <button ref={labelRef} className='dse-select__label' onClick={() => onLabelClick()}>
            <Text>{selectedOption === null ? label : selectedOption.label}</Text>
            <svg width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
        </button>

        {
            isOpen ? (
                <ul style={{ top: overlayTop }} className='dse-select__overlay'>
                    {
                        options.map((option, optionIndex) => {
                            const isSelected = selectedIndex === optionIndex
                            return <li className={`dse-select__option 
                                ${isSelected ? 'dse-select__option--selected' : ''}
                                `}
                                onClick={() => onOptionSelected(option, optionIndex)} key={option.value}
                            >
                                <Text>
                                    {option.label}
                                </Text>
                                {isSelected ? (
                                <svg width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                                ) : null}
                            </li>
                        })
                    }
                </ul>
            ) : null
        }
    </div>
}

export default Select