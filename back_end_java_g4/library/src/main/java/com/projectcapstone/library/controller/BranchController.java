package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Branch;
import com.projectcapstone.library.model.Rating;
import com.projectcapstone.library.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BranchController {
    @Autowired
    private BranchRepository branchRepository;

    @GetMapping("/branch")
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    @PostMapping("/branch")
    public Branch createBranch(@RequestBody Branch branch) {
        return branchRepository.save(branch);
    }

}
