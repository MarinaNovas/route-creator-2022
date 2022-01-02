import React from "react";
import { useRef} from "react"
import Box from '@mui/material/Box';


function AddressFormesContainer({ handleJumbledAddress, addressesList, children }) {

  const containerRef = useRef();
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const getContainerMetricks=()=>{
    const width=containerRef.current.getBoundingClientRect().width;
    const height=containerRef.current.getBoundingClientRect().height;
    const top = containerRef.current.getBoundingClientRect().top;
    const bottom = containerRef.current.getBoundingClientRect().bottom;
    const scrollHeight = containerRef.current.scrollHeight;
    const scrollTop = containerRef.current.scrollTop;

    return {width, height, top, bottom,scrollHeight,scrollTop}
  }

  const handleDragStart = (index)=>(e)=>{
    draggingItem.current = index;
  }

  const handleDragEnter=(index)=>(e)=>{
    const container = getContainerMetricks();
    
    if(e.clientY<=container.top+100 && container.scrollTop>0){
      containerRef.current.scrollBy(0,-10);
    }
    if(e.clientY>=container.bottom-100 && container.scrollTop<container.scrollHeight-container.height){
      containerRef.current.scrollBy(0,10);
    }
    dragOverItem.current = index;
  }

  const handleDragEnd = (e)=>{
    const addresslistId = [...addressesList].map((item)=>item.id);

    const  draggingItemContent = addresslistId[draggingItem.current];

    addresslistId.splice(draggingItem.current, 1);
    addresslistId.splice(dragOverItem.current, 0, draggingItemContent);


    draggingItem.current=null;
    dragOverItem.current=null;

    handleJumbledAddress(addresslistId);
  }

  const childrenWithProps = React.Children.map(children, child=>(
    React.cloneElement(child,{
      ...child.props,
      handleDragStart:handleDragStart,
      handleDragEnter:handleDragEnter,
      handleDragEnd:handleDragEnd
    })
  ));
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'relative',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      ref={containerRef}
    >
      {childrenWithProps}
    </Box>
  );
}

export default AddressFormesContainer;