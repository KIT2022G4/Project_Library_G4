package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Category;
import com.projectcapstone.library.model.DetailBook;
import com.projectcapstone.library.repository.CategoryRepository;
import com.projectcapstone.library.repository.DetailBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class DetailBookController {
    @Autowired
    private DetailBookRepository detailBookRepository;

    @GetMapping("/detailBook")
    public List<DetailBook> getAllDetailBooks() {
        return detailBookRepository.findAll();
    }

    @PostMapping("/detailBook")
    public DetailBook createDetailBook(@RequestBody DetailBook detailBook) {
        return detailBookRepository.save(detailBook);
    }
    @GetMapping("/detailBook/")
    public List<DetailBook> getDetailBook(@RequestParam Long idBook, @RequestParam Long idBranch) {
        return detailBookRepository.detailBook(idBook,idBranch);
    }
}
