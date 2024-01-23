import { Button } from 'react-bootstrap';
import React from 'react';

interface CustomButtonProps {
    label: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
    return (
      <Button variant="primary" id='Submit_Button' className="mb-0" onClick={onClick}>
        {label}
      </Button>
    );
  };

export default PrimaryButton;