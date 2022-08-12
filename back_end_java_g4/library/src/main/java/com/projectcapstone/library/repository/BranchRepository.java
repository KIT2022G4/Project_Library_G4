package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchRepository extends JpaRepository<Branch, Integer> {
}
