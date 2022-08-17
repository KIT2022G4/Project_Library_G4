package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.BranchBook;
import com.projectcapstone.library.model.DetailBook;
import com.projectcapstone.library.repository.BranchBookRepository;
import com.projectcapstone.library.repository.DetailBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BranchBookController {
    @Autowired
    private BranchBookRepository branchBookRepository;
    @Autowired
    private DetailBookRepository detailBookRepository;

    @GetMapping("/branchBook")
    public List<BranchBook> getAllBranchBooks() {
        return branchBookRepository.findAll();
    }

    @PostMapping("/branchBook")
    public BranchBook createBranchBook(@RequestBody BranchBook branchBook) {
        BranchBook bb = branchBookRepository.save(branchBook);
        for(int i = 1; i<= branchBook.getCount();i++){
            DetailBook db = new DetailBook();
            db.setBook(branchBook.getBook());
            db.setBranch(branchBook.getBranch());
            db.setCodedetailbook(branchBook.getBook().getCodebook() + i);
            detailBookRepository.save(db);
        }
        return bb;
    }

    @GetMapping("/branchBookByIdBook/{id}")
    public List<BranchBook> getAllBranchBookByCodeBook(@PathVariable Long id) {
        return branchBookRepository.branchBookByCodeBook(id);
    }
    @GetMapping("/branchBookByIdBranch/{id}")
    public List<BranchBook> getAllBranchBookByCodeBranch(@PathVariable Long id) {
        return branchBookRepository.branchBookByCodeBranch(id);
    }
}
