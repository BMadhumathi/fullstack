package com.agroinnovate.madhumathi.service;

import java.util.List;

import com.agroinnovate.madhumathi.model.User;

public interface UserService {

    public User getUserByEmail(String email);

    List<User> getUser();

    boolean updateProfile(String name, String phone,String email);

    public boolean deleteProfile(String email);

}