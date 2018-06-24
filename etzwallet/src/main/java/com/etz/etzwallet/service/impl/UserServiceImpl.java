package com.etz.etzwallet.service.impl;

import com.etz.etzwallet.mapper.UserMapper;
import com.etz.etzwallet.model.User;
import com.etz.etzwallet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User getUserByPhone(String phone) {
        return userMapper.getUserByPhone(phone);
    }

    @Override
    public int insert(User user) {
        return userMapper.insert(user);
    }

    @Override
    public int update(User user) {
        return userMapper.update(user);
    }

    @Override
    public int updatePass(User user) {
        return userMapper.updatePass(user);
    }
}
