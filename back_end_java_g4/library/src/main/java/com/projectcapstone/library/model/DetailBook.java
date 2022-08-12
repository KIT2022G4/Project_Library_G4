package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "detailbook")
public class DetailBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer iddetailbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebook", referencedColumnName="codebook", nullable = false)
    private Book book;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebranch", referencedColumnName="codebranch", nullable = false)
    private Branch branch;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    @OneToMany(mappedBy = "detailbook", cascade = CascadeType.ALL)
    private List<OrderBook> orderBookList;

    @Column(nullable = false, unique = true)
    private String codedetailbook;
}
