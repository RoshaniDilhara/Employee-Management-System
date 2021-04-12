package com.roshani.employeemsbackend.controller;

import com.roshani.employeemsbackend.exception.ResourceNotFoundException;
import com.roshani.employeemsbackend.model.Skill;
import com.roshani.employeemsbackend.repository.EmployeeRepository;
import com.roshani.employeemsbackend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class SkillController {

    @Autowired
    SkillRepository skillRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    //get all skills - give list of all skills
    @GetMapping("/skills")
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    //get a skill specified by the id
    @GetMapping("/skills/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found for the id :: " + id));
        return ResponseEntity.ok().body(skill);
    }

    //create a new skill
    @PostMapping("/skills")
    public Skill createSkill(@Valid @RequestBody Skill skill) {
        return skillRepository.save(skill);
    }

    @DeleteMapping("/skills/{id}")
    public Map<String, Boolean> deleteSkill(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Skill skillToDelete = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));

        skillRepository.delete(skillToDelete);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
