import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);
const booksData = [
    {
      name: "Free",
      price: 15.99,
      category: "",
      image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      title: "The Great Gatsby",
    },
    {
      name: "To Kill a Mockingbird",
      price: 12.50,
      category: "Free",
      image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      title: "To Kill a Mockingbird",
    },
    {
      name: "1984",
      price: 10.99,
      category: "Free",
      image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      title: "1984",
    },
    // Add more books as needed
  ];
  
Book.create(booksData).then((res)=>console.log(res))
export default Book;