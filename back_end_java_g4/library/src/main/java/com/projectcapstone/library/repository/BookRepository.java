package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
}
