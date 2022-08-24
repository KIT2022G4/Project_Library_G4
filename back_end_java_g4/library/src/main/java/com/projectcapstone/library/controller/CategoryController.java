package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Book;
import com.projectcapstone.library.model.Branch;
import com.projectcapstone.library.model.Category;
import com.projectcapstone.library.repository.BranchRepository;
import com.projectcapstone.library.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="*")
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

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Map< String, Boolean >> deleteCategory(@PathVariable Long id) {
        Category category = categoryRepository.findById(id).orElseThrow();

        categoryRepository.delete(category);
        Map <String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
