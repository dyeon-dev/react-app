package com.ureka.react.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NumberGuessController {

	// 1~100
	private int comNum = (int)(Math.random()*100+1); 
	
	@GetMapping("/guess/{userNum}")
	@CrossOrigin(origins = "*") // 모든 주소 접속 허용
	public HashMap<String, Object> guess(@PathVariable("userNum") int userNum ){
		HashMap<String, Object> result = new HashMap<>();
		result.put("code", "ok");
		
		String s = "";
		if( comNum == userNum ) {
			s = "정답";
			comNum = (int)(Math.random()*100+1);
		}
		else if( comNum < userNum ) s = "낮춰주세요";
		else s = "높여주세요";
		
		result.put("message", s);
		return result;
	}
	
}