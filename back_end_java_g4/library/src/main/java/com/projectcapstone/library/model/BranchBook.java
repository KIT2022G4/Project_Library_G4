package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "branchbook")
public class BranchBook {
    @EmbeddedId
    IdBranchBook IdBranchBook;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("codebranch")
    @JoinColumn(name = "codebranch", nullable = false, referencedColumnName="codebranch")
    private Branch branch;


    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("codebook")
    @JoinColumn(name = "codebook", nullable = false , referencedColumnName="codebook")
    private Book book;

    @Column(columnDefinition = "int default 0" )
    private Integer count;

}