import React from 'react';
import Card from 'react-bootstrap/Card';

const CustomCard = props => {
  return (
    <React.Fragment>
      <Card style={props.styles} />

      {/* Provides styling for the custom card component */}
      <style jsx>{``}</style>
    </React.Fragment>
  );
};

export default CustomCard;
