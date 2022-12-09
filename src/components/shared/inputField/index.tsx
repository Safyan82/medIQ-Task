import React from 'react';
import 'components/shared/inputField/index.css'

interface Props {
    handler: Function;
};

export const InputField: React.FC<Props> = ({handler}) => {
    return (
            <input 
                placeholder='Search by Order Id, Buyer, Customer ...'
                className='input'
                onChange={(e) => handler(e.target.value)}
            />
    );
}