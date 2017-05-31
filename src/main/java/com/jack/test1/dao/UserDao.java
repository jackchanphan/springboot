package com.jack.test1.dao;

import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jack.test1.beans.User;


@Repository
@Table(name="t_user")
@Qualifier("userDao")
public interface UserDao extends CrudRepository<User, Long> {


}
