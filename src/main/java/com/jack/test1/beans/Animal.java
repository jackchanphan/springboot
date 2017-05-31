package com.jack.test1.beans;

import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="t_animal") 
public class Animal {
	private Long id;
	private String name;
	private LocalDateTime  birth;
	
	@Id  
    @GeneratedValue(strategy=GenerationType.AUTO)  
    @Column(name="id")  
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="birth")
	public LocalDateTime  getBirth() {
		//return birth.getYear()+"-"+birth.getMonthValue()+"-"+birth.getDayOfMonth();
		return birth;
	}

	public void setBirth(LocalDateTime  date) {
		this.birth = date;
	}
	@Column(name="name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
