package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;

import java.util.List;

@Data
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idcategory;

    @Column(nullable = false, unique = true)
        private String categoryname;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Book> books;
}

