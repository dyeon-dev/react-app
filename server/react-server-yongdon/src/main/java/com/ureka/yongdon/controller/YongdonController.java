package com.ureka.yongdon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ureka.yongdon.dto.YongdonDto;
import com.ureka.yongdon.service.YongdonService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class YongdonController {
	@Autowired
	private YongdonService yongdonService;
	
	public String hello() {
		return "Hello YongdonController";
	}
	//용돈정보목록                       
	@GetMapping("/yongdons")
	@CrossOrigin(origins = "*")
	public List<YongdonDto> listYongdon(){
		
		return yongdonService.listYongdon();
	}
	//용돈정보등록
	@PostMapping("/yongdons")
	@CrossOrigin(origins = "*")	
	public YongdonDto addYoungdon(
			@RequestBody YongdonDto dto) {
		return yongdonService.addYongdon( dto );
	}
	//용돈정보 1개만추출
	@GetMapping("/yongdons/{seq}")
	@CrossOrigin(origins = "*")	
	public YongdonDto getYongdon(@PathVariable("seq") Integer seq) {
		return yongdonService.findYongdon(seq);
	}
	@DeleteMapping("/yongdons/{seq}")
	@CrossOrigin(origins = "*")	
	public void deleteYongdon(@PathVariable("seq") Integer seq) {
		System.out.println("delete : "+seq);
		yongdonService.deleteYongdon(seq);
	}
	@PutMapping("/yongdons")
	@CrossOrigin(origins = "*")	
	public YongdonDto updateYoungdon(
			@RequestBody YongdonDto dto) {
		yongdonService.updateYongdon( dto );
		
		return dto;
	}	
}