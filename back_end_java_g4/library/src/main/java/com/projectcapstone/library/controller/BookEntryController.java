package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.BookEntry;
import com.projectcapstone.library.model.Branch;
import com.projectcapstone.library.repository.BookEntryRepository;
import com.projectcapstone.library.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class BookEntryController {
    @Autowired
    private BookEntryRepository bookEntryRepository;

    @GetMapping("/bookEntry")
    public List<BookEntry> getAllBookEntrys() {
        return bookEntryRepository.findAll();
    }

    @PostMapping("/bookEntry")
    public BookEntry createBookEntry(@RequestBody BookEntry bookEntry) {
        return bookEntryRepository.save(bookEntry);
    }

}
