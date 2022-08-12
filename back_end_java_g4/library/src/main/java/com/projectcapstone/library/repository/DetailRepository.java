package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.DetailBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailRepository extends JpaRepository<DetailBook, String> {
}
