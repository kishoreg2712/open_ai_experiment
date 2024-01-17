import React from 'react';
import { Row } from 'react-bootstrap';

interface chatDetails {
    query: string;
    result: string | undefined;
}

const ChartResults: React.FC<chatDetails> = ({ query, result }) => {
    return (
        <div>
            <Row>
                <div>
                    <p id='Query'>Your Query: {query}</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p id='Result'>Result: {result}</p>
                </div>
            </Row>
        </div>
    );
};

export default ChartResults;