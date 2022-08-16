package com.projectcapstone.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Data
@Entity
@Table(name = "branch")
public class Branch implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idbranch;

    @Column(nullable = false)
    private String branchname;

    @OneToMany(mappedBy = "branch",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BranchBook> branchBookList;

    @Column(nullable = false, unique = true)
    private String codebranch;
}
