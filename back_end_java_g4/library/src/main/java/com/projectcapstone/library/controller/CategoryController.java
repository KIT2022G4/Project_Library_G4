package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Branch;
import com.projectcapstone.library.model.Category;
import com.projectcapstone.library.repository.BranchRepository;
import com.projectcapstone.library.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping("/category")
    public Category createCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

}
