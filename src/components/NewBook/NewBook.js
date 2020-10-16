import React from "react";
import { message, Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 12 },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
};

const NewBook = ({ addBook }) => {
  const history = useHistory();

  const onSubmit = ({ book }) => {
    addBook(book);
    message.success(`New book with ISBN ${book.isbn} is added!`);
    history.push("/");
  };

  return (
    <>
      <h1 style={{ marginBottom: 20 }}>Add new book</h1>
      <Form {...layout} onFinish={onSubmit} validateMessages={validateMessages}>
        <Form.Item
          name={["book", "title"]}
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "genre"]}
          label="Genre"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "isbn"]}
          label="ISBN"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "summary"]}
          label="Summary"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
          <Button type="primary" htmlType="submit">
            Add book
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewBook;
