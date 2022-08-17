package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.BranchBook;
import com.projectcapstone.library.model.IdBranchBook;
import com.projectcapstone.library.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BranchBookRepository extends JpaRepository<BranchBook, IdBranchBook> {
    @Query("select brb from BranchBook brb where brb.book.idbook = ?1")
    List<BranchBook> branchBookByCodeBook(Long codeBook);

    @Query("select brb from BranchBook brb where brb.branch.idbranch = ?1")
    List<BranchBook> branchBookByCodeBranch(Long codeBranch);
}
