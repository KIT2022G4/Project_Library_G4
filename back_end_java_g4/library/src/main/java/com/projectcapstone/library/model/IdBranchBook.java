package com.projectcapstone.library.model;



import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class IdBranchBook implements Serializable {
    @Column(name = "codebook")
    String codebook;

    @Column(name = "codebranch")
    String codebranch;
}
