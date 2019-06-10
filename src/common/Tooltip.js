import React from 'react';

const Tooltip = props => {
  return (
    <div>

    {/* Provides styling for the component */}
    <style jsx>{`
      .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
      }
      
      .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
      }

      .tooltip:hover .tooltiptext {
        visibility: visible;
      }
    `}</style>
    </div>
  )
}

export default Tooltip;
