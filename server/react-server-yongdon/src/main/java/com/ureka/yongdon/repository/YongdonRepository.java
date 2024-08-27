package com.ureka.yongdon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ureka.yongdon.dto.YongdonDto;

public interface YongdonRepository extends JpaRepository<YongdonDto, Integer> {

}