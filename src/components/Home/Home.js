import React, { useState } from "react";
import { message, Card, Col, Row, Table } from "antd";
import { EyeOutlined, DeleteFilled } from "@ant-design/icons";
import Modal from "../Modal/Modal";

const Home = ({ books, deleteBook, visible, showModal, onClose }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ marginRight: 16, color: "#1890ff", cursor: "pointer" }}
            onClick={() => viewMore(record)}
          >
            View more
          </div>
          <div
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={() => deleteSelectedBook(record.isbn)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  const [selectedBook, setSelectedBook] = useState("");

  const viewMore = (book) => {
    setSelectedBook(book);
    showModal();
  };

  const deleteSelectedBook = (bookIsbn) => {
    deleteBook(bookIsbn);
    message.success(`Book with ISBN ${bookIsbn} is deleted!`);
  };

  const booksDataSource = books.map((book, index) => ({
    ...book,
    key: book.isbn,
  }));

  const booksTableContent = (
    <Table columns={columns} dataSource={booksDataSource} />
  );

  const booksCardContent =
    books.length > 0 ? (
      <Row gutter={[40, 40]}>
        {books.map((book) => (
          <Col key={book.isbn} span={8}>
            <Card
              title={book.title}
              actions={[
                <EyeOutlined key="view-more" onClick={() => viewMore(book)} />,
                <DeleteFilled
                  key="delete"
                  onClick={() => deleteSelectedBook(book.isbn)}
                />,
              ]}
            >
              <p>Genre: {book.genre}</p>
              <p>ISBN: {book.isbn}</p>
            </Card>
          </Col>
        ))}
      </Row>
    ) : (
      <div>No books found</div>
    );

  return (
    <div>
      <h1>Table View</h1>
      {booksTableContent}
      <h1 style={{ marginTop: 10 }}>Card View</h1>
      {booksCardContent}
      <Modal visible={visible} onClose={onClose} book={selectedBook} />
    </div>
  );
};

export default Home;
