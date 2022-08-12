package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.BranchBook;
import com.projectcapstone.library.model.IdBranchBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchBookRepository extends JpaRepository<BranchBook, IdBranchBook> {
}
