import React from 'react';
import { GoPlus, GoDash } from "react-icons/go";


import { useState } from 'react';

const Accordion = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const [isActive, setIsActive] = useState(false);


    return (

        <div className=' FNQ_wrapper '>
            <div className="accordion-item  QnA_wrapper">
                <div className="accordion-title " onClick={() => setIsActive(!isActive)}>
                    <div className='flex question justify-between'>
                        <div className='mb-[10px]'>{props.title}</div>
                        <div>{isActive ? <GoDash /> : <GoPlus />}</div>
                    </div>
                </div>
                    <div className='answer_wrapper pb-[10px]'>
                        {isActive && <div className="accordion-content answer">{props.content}</div>}
                    </div>
            </div>

        </div>
    );
};

export default Accordion;