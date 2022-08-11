package com.projectcapstone.library.model;



import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class IdBranchBook implements Serializable {
    @Column(name = "idbook", nullable = false)
    Integer idbook;

    @Column(name = "idbranch", nullable = false)
    Integer idbranch;
}
