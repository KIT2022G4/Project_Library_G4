package com.projectcapstone.library.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "userstatus")
public class UserStatus implements Serializable {
    @Id
    @Column(name = "iduser")
    private Long iduser;

    @OneToOne
    @MapsId
    @JoinColumn(name = "iduser")
    private User user;

    private Integer remainingbook;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    private Integer crime;

}
