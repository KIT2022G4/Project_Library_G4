package com.projectcapstone.library.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idrole;

    private String namerole;

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    private List<User> user;
}
