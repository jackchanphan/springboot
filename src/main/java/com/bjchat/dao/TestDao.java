package com.bjchat.dao;

import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bjchat.beans.Animal;

@Repository  
@Table(name="t_animal")  
@Qualifier("testDao")  
public interface TestDao extends CrudRepository<Animal,Long>{  
	@Query("select t from Animal t where t.id=:id")  
    public Animal findOne(@Param("id") Long id);  
  
    @Query("select t from Animal t where t.name=:name")  
    public Animal findUserByName(@Param("name") String name);  
}  
