package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "branch")
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idbranch;

    @Column(nullable = false, unique = true)
    private String branchname;

    @OneToMany(mappedBy = "branch",cascade = CascadeType.ALL)
    private List<BranchBook> branchBookList;

}
