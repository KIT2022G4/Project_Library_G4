package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;


@Data
@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idbook;

    @Column(name = "bookname", nullable = false)
    private String bookname;

    private String author;

    private String publisher;

    @Column(columnDefinition = "TEXT")
    private String introduction;

    @Column(columnDefinition = "DATE")
    private Date dor;

    @Column(name = "bookimage", columnDefinition = "varchar(255) default 'https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png'")
    private String bookimage;

    @Column(nullable = false, unique = true)
    private String codebook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idcategory", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "book",cascade = CascadeType.ALL)
    private List<BranchBook> branchBookList;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<Rating> ratingList;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<DetailBook> detailBookList;

}
