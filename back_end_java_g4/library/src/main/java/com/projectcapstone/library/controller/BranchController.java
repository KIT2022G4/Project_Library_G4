package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Branch;
import com.projectcapstone.library.repository.BranchRepository;
import com.projectcapstone.library.repository.DetailBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class BranchController {
    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private DetailBookRepository detailBookRepository;
    @GetMapping("/branch")
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    @PostMapping("/branch")
    public Branch createBranch(@RequestBody Branch branch) {
        return branchRepository.save(branch);
    }

    @GetMapping("/branchLeft/{codeBook}")
    public List<Branch> getBranch(@PathVariable String codeBook) {
        List<String> codeBranch = detailBookRepository.listCodeBranch(codeBook);
        List<Branch> branchList = new ArrayList<>();
        for(String i: codeBranch) {
            Branch branch = branchRepository.branchByCodeBranch(i);
            branchList.add(branch);
        }
        return branchList;
    }
}
