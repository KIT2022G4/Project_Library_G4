package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.DetailBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailBookRepository extends JpaRepository<DetailBook, Long> {
}
