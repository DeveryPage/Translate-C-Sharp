using System;
using System.Collections.Generic;




namespace lightning
{
    class Program
    {
        class Book
        {
            public string Name { get; set; }
            public string Author { get; set; }
            public bool IsCheckedOut { get; set; }
        }
        public Book(string name, string author)
        {
            Name = name;
            Author = author;
        }
        static void Main(string[] args)
        {
            Book newBook = new Book("Da Book", "Jorgan")
            {
                book.Author = "Jorgan",
                book.Name = "Da Book",
                IsCheckoutOut = true
            };
            return Console.WriteLine($"My favourite book is {book.Name} by {book.Author}");
        }
    }
}







