package HoangHuy.example.Book.Controller;

import HoangHuy.example.Book.Entity.Book;
import HoangHuy.example.Book.Service.BookService;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @CrossOrigin
    @GetMapping
    public List<Book> getBooks(@RequestParam(required = false) String title,
                               @RequestParam(required = false) Integer authorId,
                               @RequestParam(required = false) BigDecimal price,
                               @RequestParam(required = false) LocalDate publishedDate) {
        return bookService.filterBooks(title, authorId, price, publishedDate);
    }

    @CrossOrigin
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book book) {
        book.setId(id);
        return bookService.save(book);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Integer id) {
        bookService.deleteById(id);
    }
}
