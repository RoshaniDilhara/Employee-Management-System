package com.roshani.employeemsbackend.controller;

import com.roshani.employeemsbackend.exception.ResourceNotFoundException;
import com.roshani.employeemsbackend.model.Employee;
import com.roshani.employeemsbackend.model.Skill;
import com.roshani.employeemsbackend.repository.EmployeeRepository;
import com.roshani.employeemsbackend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")

public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    SkillRepository skillRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //get an employee specified by the id - view details of that employee
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for the id :: " + id));
        return ResponseEntity.ok().body(employee);
    }

    //create a new employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        Employee addNewEmpl = new Employee();
        addNewEmpl.setName(employee.getName());
        addNewEmpl.setDob(employee.getDob());
        addNewEmpl.setEmail(employee.getEmail());
        List<Skill> skillListAll = skillRepository.findAll(); //list of all skills
        List<Skill> skillListEmployee = employee.getSkills();
        List<Skill> temp = new ArrayList<>();

        for(Skill skillEmp : skillListEmployee){
           for(Skill skillAll: skillListAll){
              if(skillAll.getSkill_name().equals(skillEmp.getSkill_name())){
                 temp.add(skillAll);
              }
           }
        }
        addNewEmpl.setSkills(temp);
        return employeeRepository.save(addNewEmpl);
    }

    //update employee by id
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long id,
                                                   @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for the id : " + id));

        employee.setName(employeeDetails.getName());
        employee.setDob(employeeDetails.getDob());
        employee.setEmail(employeeDetails.getEmail());

        List<Skill> skillListAll = skillRepository.findAll(); //list of all skills
        List<Skill> skillListEmployee = employeeDetails.getSkills();
        List<Skill> temp = new ArrayList<>();

        for(Skill s : skillListEmployee){
            for(Skill skillFromAll: skillListAll){
                if(s.getSkill_name().equals(skillFromAll.getSkill_name())){
                    temp.add(skillFromAll);
                }
            }
        }
        employee.setSkills(temp);
        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

     //add a skill to a specific employee
//    @PutMapping("/employees/{id}/skills/{skillId}")
//    public ResponseEntity<Employee> enrollSkillToEmployee(@PathVariable(value = "id") Long id,
//                                                          @PathVariable(value = "skillId") Long skillId) throws ResourceNotFoundException {
//        Employee employee = employeeRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for the id : " + id));
//        Skill skill = skillRepository.findById(skillId)
//                .orElseThrow(() -> new ResourceNotFoundException("Skill not found for the id : " + skillId));
//
//        employee.enrollSkillToEmployee(skill);
//        final Employee updatedEmployee = employeeRepository.save(employee);
//        return ResponseEntity.ok(updatedEmployee);
//    }

    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
