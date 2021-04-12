package com.roshani.employeemsbackend.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "employees")

public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @Column(name = "dob")
    private Date dob;

    @NotNull
    @Column(name = "email", unique=true)
    private String email;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "employee_has",
            joinColumns = { @JoinColumn(name = "emp_id") },
            inverseJoinColumns = { @JoinColumn(name = "skill_id") })
    private List<Skill> skills = new ArrayList<>();

    public Employee() {

    }

    public Employee(String name, Date dob, String email) {
        this.name = name;
        this.dob = dob;
        this.email = email;
    }

    public Employee(String name, Date dob, String email, List<Skill> skills) {
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.skills = skills;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
//        if (skills == null || skills.isEmpty() || skills.equals("")){
//            this.skills = Collections.emptyList();
//        }
//        else {
            this.skills = skills;
//        }
    }

    public void addSkill(Skill skill){skills.add(skill);}

    public void enrollSkillToEmployee(Skill skill) {
        skills.add(skill);
    }

//    @Override
//    public String toString() {
//        return "Employee [id=" + id + ",name=" + name + ", dob=" + dob + ", email=" + email +  "]";
//    }

}
