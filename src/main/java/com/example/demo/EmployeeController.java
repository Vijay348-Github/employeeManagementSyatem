package com.example.demo;

import java.util.List;
import java.util.Map;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepo empRepo;
	
	@GetMapping(path = "/employees")
	public List<Employee> getAllEmployee(){
		return empRepo.findAll();
	}
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee emp){
		return empRepo.save(emp);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmp(@PathVariable long id) {
		Employee emp1 = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee with the Id : "+id));
		return ResponseEntity.ok(emp1);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id , @RequestBody Employee empInfo){
		
		Employee emp1 = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee found with the ID : "+id));
		emp1.setFirstName(empInfo.getFirstName());
		emp1.setLastName(empInfo.getLastName());
		emp1.setEmailId(empInfo.getEmailId());
		
		Employee modifiedEmployee = empRepo.save(emp1);
		return ResponseEntity.ok(modifiedEmployee);
	}
	
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id) {
	    Employee emp = empRepo.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("No Employee found with the ID : " + id));

	    empRepo.delete(emp);

	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", true);

	    return ResponseEntity.ok(response);
	}

	


	
}
