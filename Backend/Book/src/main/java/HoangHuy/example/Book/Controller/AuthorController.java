package HoangHuy.example.Book.Controller;

import HoangHuy.example.Book.Entity.Author;
import HoangHuy.example.Book.Service.AuthorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors() {
        List<Author> authors = authorService.findAll();
        return new ResponseEntity<>(authors, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable Integer id) {
        Optional<Author> author = authorService.findAll().stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();

        return author.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        Author savedAuthor = authorService.save(author);
        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable Integer id, @RequestBody Author author) {
        Optional<Author> existingAuthor = authorService.findAll().stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();

        if (existingAuthor.isPresent()) {
            author.setId(id);
            Author updatedAuthor = authorService.save(author);
            return new ResponseEntity<>(updatedAuthor, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable Integer id) {
        Optional<Author> existingAuthor = authorService.findAll().stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();

        if (existingAuthor.isPresent()) {
            authorService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}