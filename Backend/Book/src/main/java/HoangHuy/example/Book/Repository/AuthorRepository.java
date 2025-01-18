package HoangHuy.example.Book.Repository;

import HoangHuy.example.Book.Entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Integer> {
}
