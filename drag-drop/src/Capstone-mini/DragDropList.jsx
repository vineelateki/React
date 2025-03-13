import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import headphonesImg from "../assets/headphones.jpg";
import "./DragDropStyles.css"; 

const DragDropList = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Laptop",  img: laptopImg },
    { id: "2", name: "Phone",  img: phoneImg },
    { id: "3", name: "Headphones", img: headphonesImg },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <div className="drag-drop-container">
      <h2>Drag and Drop Products</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps} className="list">
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list-item"
                    >
                      <img src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                      <span>{item.price}</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDropList;
