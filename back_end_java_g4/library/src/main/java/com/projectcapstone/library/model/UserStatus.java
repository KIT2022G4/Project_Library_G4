package com.projectcapstone.library.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "userstatus")
public class UserStatus implements Serializable {
    @Id
    @Column(name = "iduser")
    private Long iduser;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @PrimaryKeyJoinColumn(name = "iduser", referencedColumnName = "iduser")
    private User user;

    private Integer remainingbook;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    private Integer crime;

    @Column(columnDefinition = "DATE")
    private Date timeupdate;
}
