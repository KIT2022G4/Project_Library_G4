package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.BookEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookEntryRepository extends JpaRepository<BookEntry, Integer> {
}
