import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ResponsiveTable from './responsiveTable';

interface chatDetails {
    query: string | undefined
    result: string | undefined;
}

const ChatResults: React.FC<chatDetails> = ({ query, result }) => {
    //const result_data: [] = result;
    const data = [
        { ID: 1, 'Query': query, 'Result': result }
    ];
    const columns: string[] = ['ID', 'Query', 'Result'];
    return (
        <Container>
            <Row>
                <ResponsiveTable columns={columns} data={data as unknown as []} />
            </Row>
        </Container>
    );
};

export default ChatResults;