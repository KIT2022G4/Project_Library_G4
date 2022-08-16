package com.projectcapstone.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Data
@Entity
@Table(name = "detailbook")
public class DetailBook implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long iddetailbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebook", referencedColumnName="codebook", nullable = false)
    private Book book;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebranch", referencedColumnName="codebranch", nullable = false)
    private Branch branch;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    @OneToMany(mappedBy = "detailbook", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<OrderBook> orderBookList;

    @Column(nullable = false, unique = true)
    private String codedetailbook;
}
