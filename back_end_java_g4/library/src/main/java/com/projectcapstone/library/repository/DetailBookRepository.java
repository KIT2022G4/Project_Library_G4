package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.DetailBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailBookRepository extends JpaRepository<DetailBook, Integer> {
}
