import React from "react";
import '../App.css';


function AddressFormesContainer({provided, innerRef,children}) {

  if(provided){
    return (
      <div className="address-form-container"
        {...provided.droppableProps}
        ref={innerRef}
        >
        {children}
        {provided.placeholder}
      </div>
    );
  }

  return (
    <div className="address-form-container" >
        {children}
    </div>
  )

}

export default AddressFormesContainer;