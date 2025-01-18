package HoangHuy.example.Book.Repository;
import HoangHuy.example.Book.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByAuthorId(Integer authorId);
    List<Book> findByTitleContainingIgnoreCase(String title);
    List<Book> findByPriceGreaterThan(BigDecimal price);
    List<Book> findByPublishedDateAfter(LocalDate publishedDate);
}