package com.projectcapstone.library.service.Book;

import com.projectcapstone.library.model.Book;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    List<Book> getAllBooksByCategory(Integer idcategory);
    List<Book> getAllBooksByName(String name);
    List<Book> getAllBooksByAuthor(String author);
    Book getBookById(Integer id);
    void saveBook(Book book);
    void deleteBookById(Integer id);
    Page<Book> findPaginated(int pageNo, int pageSize);

}
