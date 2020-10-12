import React, { useState } from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Backdrop from "../components/Backdrop/Backdrop";

const BookRepoRoute = ({ component: Component, ...otherProps }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [books, setBooks] = useState([
    {
      genre: "Non-fiction",
      isbn: "978-0-321-96551-6",
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web and Mobile Usability",
      summary:
        "Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.",
    },
    {
      genre: "Non-fiction",
      isbn: "978-0-321-76753-0",
      title: "100 Things Every Designer Needs to Know About People",
      summary:
        "We design to elicit responses from people. We want them to buy something, read more, or take action of some kind. Designing without understanding what makes people act the way they do is like exploring a new city without a map: results will be haphazard, confusing, and inefficient. This book combines real science and research with practical examples to deliver a guide every designer needs. With it you'll be able to design more intuitive and engaging work for print, websites, applications, and products that matches the way people think, work, and play. Learn to increase the effectiveness, conversion rates, and usability of your own design projects by finding the answers to questions such as: What grabs and holds attention on a page or screen? What makes memories stick? What is more important, peripheral or central vision? How can you predict the types of errors that people will make? What is the limit to someone's social circle? How do you motivate people to continue on to (the next step? What line length for text is best? Are some fonts better than others? These are just a few of the questions that the book answers in its deep-dive exploration of what makes people tick.",
    },
    {
      genre: "Non-fiction",
      isbn: "978-1-491-92156-2",
      title: "Articulating Design Decisions",
      summary:
        "Talking to people about your designs might seem like a basic skill, but it can be difficult to do efficiently and well. And, in many cases, how you communicate about your work with stakeholders, clients, and other non-designers is more critical than the designs themselves-simply because the most articulate person usually wins. This practical guide focuses on principles, tactics, and actionable methods for presenting your designs. Whether you design UX, websites, or products, you'll learn how to win over anyone who has influence over the project-with the goal of creating the best experience for the end user. Walk through the process of preparing for and presenting your designs Understand stakeholder perspectives, and learn how to empathize with them Cultivate both implicit and explicit listening skills Learn tactics and formulas for expressing the most effective response to feedback Discover why the way you follow through is just as crucial as the meeting itself Educate your stakeholders by sharing the chapter from this book on how to work with designers",
    },
  ]);

  const addBook = (book) => {
    let newBooks = [...books];
    newBooks.push(book);
    setBooks(newBooks);
  };

  const deleteBook = (bookIsbn) => {
    let newBooks = [...books];
    newBooks = newBooks.filter((book) => book.isbn !== bookIsbn);
    setBooks(newBooks);
  };

  return (
    <Layout style={{ minHeight: "100vh", position: "relative" }}>
      <NavBar />
      <div
        style={{
          margin: 50,
          width: "100vw",
        }}
      >
        <Route
          render={() => (
            <>
              <Component
                books={books}
                addBook={addBook}
                deleteBook={deleteBook}
                visible={visible}
                showModal={showModal}
                onClose={onClose}
                {...otherProps}
              />
            </>
          )}
        />
      </div>
      <Backdrop visible={visible} onClose={onClose} />
    </Layout>
  );
};

export default BookRepoRoute;
