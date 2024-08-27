package com.ureka.yongdon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ureka.yongdon.dto.YongdonDto;
import com.ureka.yongdon.repository.YongdonRepository;

@Service
public class YongdonService {
	@Autowired
	private YongdonRepository yongdonRepository;

	public List<YongdonDto> listYongdon() {
		return yongdonRepository.findAll();
	}

	public YongdonDto addYongdon(YongdonDto dto) {
		//PK가 없으면 새로 추가
		return yongdonRepository.save(dto);
	}

	public YongdonDto findYongdon(int seq) {
		Optional<YongdonDto> yd = yongdonRepository.findById(seq);
		return yd.get();
	}

	public void updateYongdon(YongdonDto dto) {
		//PK가 있으면 수정
		yongdonRepository.save(dto);
	}

	public void deleteYongdon(Integer seq) {
		yongdonRepository.deleteById(seq);
	}
}