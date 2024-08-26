package com.ureka.react.service;

import org.springframework.stereotype.Service;

import com.ureka.react.dto.MyMember;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemberService {
	private List<MyMember> memList = new ArrayList<>();	
	
	// 회원 추가 
	public MyMember addMember(MyMember mem) {
		memList.add(mem);
		return mem;
	}
	
	// 회원 목록
	public List<MyMember> listMember() {
		return memList;
	}
}
