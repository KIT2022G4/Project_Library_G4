package com.projectcapstone.library.repository;


import com.projectcapstone.library.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {
    @Query("select b from Branch b where b.codebranch = ?1 ")
    Branch branchByCodeBranch(String codeBranch);
}
