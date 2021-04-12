package com.roshani.employeemsbackend.controller;

import com.roshani.employeemsbackend.model.Skill;
import com.roshani.employeemsbackend.repository.SkillRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@RunWith(SpringRunner.class)
@DataJpaTest
class SkillControllerTest {


    @Mock
    @Autowired
    private SkillRepository skillRepository;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getAllSkills() {
        assertNotNull(skillRepository.findAll());
    }

    @Test
    void getSkillById() {
    }

    @Test
    void createSkill() {
        Skill s1 = new Skill("skillTest1");
        Skill createdSkill = skillRepository.save(s1);

        assertNotNull(createdSkill);


    }

    @Test
    void deleteSkill() {
    }
}