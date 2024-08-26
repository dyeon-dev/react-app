package com.ureka.react.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@GetMapping("/hello")
	@CrossOrigin(origins = "*") // 모든 주소 접속 허용
	public HashMap<String, Object> hello() {
		HashMap<String, Object> result = new HashMap<>();
		result.put("code", "ok");
		result.put("message", "Hello STS");
		return result;
	}
//	public String hello() {
//		return "Hello STS";
//	}
}
