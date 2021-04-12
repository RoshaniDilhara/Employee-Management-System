package com.roshani.employeemsbackend.controller;

import com.roshani.employeemsbackend.model.Employee;
import com.roshani.employeemsbackend.model.Skill;
import com.roshani.employeemsbackend.repository.EmployeeRepository;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@RunWith(SpringRunner.class)
@DataJpaTest
class EmployeeControllerTest {

    Employee employee = null;

    @Mock
    @Autowired
    private EmployeeRepository employeeRepository;

    @Before
    public void setUp() {
    }

    @Test
    void getAllEmployees() throws ParseException {
        assertNotNull(employeeRepository.findAll());
    }

    @Test
    void getEmployeeById() throws ParseException {
    }

    @Test
    void createEmployee() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date yourDate = sdf.parse("1965-05-26");

        Skill s1 = new Skill("skillTest3");
        Skill s2 = new Skill("skillTest4");
        List<Skill> skills = Arrays.asList(s1,s2);

        Employee employee = new Employee("UserTest2",yourDate,"usertest2@gmail.com",skills);
        Employee createdEmployee = employeeRepository.save(employee);
//        Employee createdEmployee = employeeController.createEmployee(employee);

        assertNotNull(createdEmployee);

        Employee employee2 = employeeRepository.findByName("UserTest2");
        assertEquals(employee2.getName(), employee.getName());
    }

    @Test
    void updateEmployee() {
    }

    @Test
    void deleteEmployee() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date yourDate = sdf.parse("1990-10-09");

        Skill s1 = new Skill("skillTest1");
		Skill s2 = new Skill("skillTest2");
		List<Skill> skills = Arrays.asList(s1,s2);
        Employee employee = new Employee("UserTest",yourDate,"usertest@gmail.com",skills);
        Employee emp = employeeRepository.save(employee);
        employeeRepository.deleteById(emp.getId());
    }

    @Test
    void deleteAllEmployees() {
    }
}