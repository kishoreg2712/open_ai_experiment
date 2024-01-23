import React from "react";
import { Table, Container } from "react-bootstrap";

interface tableDetails {
    columns: string[],
    data: []
}

const ResponsiveTable:React.FC<tableDetails> = ({ columns, data }) => {
    return (
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  };
  

export default ResponsiveTable;