import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Cards = ({ header, setTasks, Tasks }) => {
  const openTextModal = (type) => {
    const text = window.prompt("Type Your Task");
    const data = { id: Math.random().toString(16).slice(2), text, type };
    text && setTasks([...Tasks, data]);
  };

  const filterData = Tasks.filter((task) => task.type === header);

  const updateType = (index, type) => {
    console.log(index, type)
    const newArr = [...Tasks]
    const newObj = newArr.find((item) => item.id === index)
    newObj.type = type
    setTasks(newArr);
  };

  return (
    <Col>
      <Card className="text-center">
        <Card.Header
          className={
            header === "Brad"
              ? "bg-warning text-white"
              : header === "Winnie"
                ? "bg-success text-white"
                : header === "Bob"
                  ? "bg-primary text-white"
                  : header === "Thomas"
                    ? "bg-danger text-white"
                    : ""
          }
        >
          {header}
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {filterData.map((task) => (
              <ListGroup.Item
                className="d-flex justify-content-between"
                key={task.id}
              >
                <MdKeyboardArrowLeft style={{ cursor: "pointer" }}
                  onClick={() =>
                    updateType(task.id, task.type === 'Thomas' ? 'Bob'
                      : task.type === 'Bob' ? 'Brad'
                        : task.type === 'Brad' ? 'Winnie'
                          : task.type === 'Winnie' ? 'Thomas'
                            : null)
                  }
                />
                {task.text}
                <MdKeyboardArrowRight
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    updateType(task.id, task.type === 'Winnie' ? 'Brad'
                      : task.type === 'Brad' ? 'Bob'
                        : task.type === 'Bob' ? 'Thomas'
                          : task.type === 'Thomas' ? 'Winnie'
                            : null)
                  }
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            onClick={() => openTextModal(header)}
            className="mt-4"
            variant="light"
          >
            Add a Task
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
