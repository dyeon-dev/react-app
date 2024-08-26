package com.ureka.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ureka.react.dto.MyMember;
import com.ureka.react.service.MemberService;

@RestController
public class MemberController {
	@Autowired
	private MemberService memService;
	
// CRUD 순서로 구현
	//Create
	@PostMapping("/members")
	@CrossOrigin(origins = "*")
	public MyMember createMember(@RequestBody MyMember mem) {
		System.out.println("create : "+mem);
		memService.addMember(mem);
		return mem;
	}
	
	@GetMapping("/members")
	@CrossOrigin(origins = "*")
	public List<MyMember> listMember() {
		return memService.listMember();
	}
	
}
