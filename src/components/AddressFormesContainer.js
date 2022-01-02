import React from "react";


function AddressFormesContainer({provided, innerRef,children}) {

  const divStyle ={
    flexGrow: 1,
    position: 'relative',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  if(provided){
    return (
      <div style={divStyle} 
        {...provided.droppableProps}
        ref={innerRef}
        >
        {children}
      </div>
    );
  }

  return (
    <div style={divStyle} >
        {children}
    </div>
  )

}

export default AddressFormesContainer;