package com.ureka.yongdon.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="yongdon")
public class YongdonDto {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int seq;
	private String gubun, dt, sayong, naeyong, sudan;
	private int gumeak;
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getGubun() {
		return gubun;
	}
	public void setGubun(String gubun) {
		this.gubun = gubun;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getSayong() {
		return sayong;
	}
	public void setSayong(String sayong) {
		this.sayong = sayong;
	}
	public String getNaeyong() {
		return naeyong;
	}
	public void setNaeyong(String naeyong) {
		this.naeyong = naeyong;
	}
	public String getSudan() {
		return sudan;
	}
	public void setSudan(String sudan) {
		this.sudan = sudan;
	}
	public int getGumeak() {
		return gumeak;
	}
	public void setGumeak(int gumeak) {
		this.gumeak = gumeak;
	}
	
}
