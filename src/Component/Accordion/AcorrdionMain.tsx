import React from 'react';
import Accordion from './Acorrdion';

const App = () => {
    const accordionData = [
        {   id:1,
            title: '01. What is stake?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.`
        },

        {   id:2,
            title: '02. What is Liquidity Provided?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {   id:3,
            title: '03. What is Matching Reward?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {   id:4,
            title: '04. What is Founder?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {   id:5,
            title: '05. What is Donation Wallet?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {   id:6,
            title: '06. What is System Fund?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {   id:7,
            title: '07. What is Burn?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },

        {
            id:8,
            title: '08. What is Community?',
            content: `Answer : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        }

    ];

    return (
        <div>
            <div className="accordion">
                {accordionData.map(({ title, content, id}) => (
                    <Accordion title={title} content={content} key={id} />
                ))}
            </div>
        </div>
    );
};

export default App;