package HoangHuy.example.Book.Service;

import HoangHuy.example.Book.Entity.Book;
import HoangHuy.example.Book.Repository.BookRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void deleteById(Integer id) {
        bookRepository.deleteById(id);
    }

    public List<Book> filterBooks(String title, Integer authorId, BigDecimal price, LocalDate publishedDate) {
        if (title != null) {
            return bookRepository.findByTitleContainingIgnoreCase(title);
        } else if (authorId != null) {
            return bookRepository.findByAuthorId(authorId);
        } else if (price != null) {
            return bookRepository.findByPriceGreaterThan(price);
        } else if (publishedDate != null) {
            return bookRepository.findByPublishedDateAfter(publishedDate);
        }
        return bookRepository.findAll();
    }
}
