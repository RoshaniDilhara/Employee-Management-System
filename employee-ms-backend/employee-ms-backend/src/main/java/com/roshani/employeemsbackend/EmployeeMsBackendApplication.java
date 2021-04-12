package com.roshani.employeemsbackend;

import com.roshani.employeemsbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//public class EmployeeMsBackendApplication implements CommandLineRunner {
public class EmployeeMsBackendApplication {

	@Autowired
	private EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(EmployeeMsBackendApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        java.util.Date yourDate = sdf.parse("1995-11-21");
//		Employee e1 = new Employee("Roshani",yourDate,"rosh@gmail.com");
//		Employee e2 = new Employee("Prasad",yourDate,"prasad@gmail.com");
//		Employee e3 = new Employee("Tharu",yourDate,"tharu@gmail.com");
//		List<Employee> employees = Arrays.asList(e1,e2,e3);
//
//		Skill s1 = new Skill("skill1");
//		Skill s2 = new Skill("skill2");
//		List<Skill> skills = Arrays.asList(s1,s2);
//
////		skillRepository.saveAll(skills);
//		//add skills to employees
//		e1.getSkills().add(s1);
//		e2.getSkills().add(s2);
//		e3.getSkills().add(s2);
//
//		//add employees to skills
//		s1.getEmployees().add(e1);
//		s2.getEmployees().add(e2);
//		s2.getEmployees().add(e3);
//
//		this.employeeRepository.saveAll(employees); //no need of skillrepository saveAll(). Due to cascade it will happen automatically
//
//	}

}
