package com.jack.test1.beans;

import org.springframework.context.annotation.Bean;

public class Animal {
	private String name;
	private String birth;

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
