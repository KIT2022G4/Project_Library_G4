package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Book;
import com.projectcapstone.library.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("select b from Book b where b.category.idcategory = ?1 ")
    List<Book> bookByCategory(Long idCategory);

    @Query("select count(b) from Book b where b.category.idcategory = ?1 ")
    Integer numberBookByCategory(Long idCategory);
}
