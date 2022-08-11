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
    @MapsId("idbranch")
    @JoinColumn(name = "idbranch")
    private Branch branch;


    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("idbook")
    @JoinColumn(name = "idbook")
    private Book book;

    @Column(columnDefinition = "int default 0" )
    private Integer count;

}
