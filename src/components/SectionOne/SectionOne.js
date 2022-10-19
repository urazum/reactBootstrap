import React from 'react';

const data = [
    {
        title: 'Section 1a',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        title: 'Section 1b',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
]

const SectionOne = () => {
    return (
        <section id="section1" className="container py-5">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                {
                    data.map(item => (
                        <div className="col">
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default SectionOne;