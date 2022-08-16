package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.BranchBook;
import com.projectcapstone.library.repository.BranchBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BranchBookController {
    @Autowired
    private BranchBookRepository branchBookRepository;

    @GetMapping("/branchBook")
    public List<BranchBook> getAllBranchBooks() {
        return branchBookRepository.findAll();
    }

    @PostMapping("/branchBook")
    public BranchBook createBranchBook(@RequestBody BranchBook branchBook) {
        return branchBookRepository.save(branchBook);
    }

    @GetMapping("/branchBookByCodeBook")
    public List<BranchBook> getAllBranchBookByCodeBook(@RequestParam String codeBook) {
        return branchBookRepository.branchBookByCodeBook(codeBook);
    }

}
