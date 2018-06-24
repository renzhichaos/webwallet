package com.etz.etzwallet.service;

import com.etz.etzwallet.model.User;

public interface UserService {

    User getUserByPhone(String phone);

    int insert(User user);

    int update(User user);

    int updatePass(User user);
}
