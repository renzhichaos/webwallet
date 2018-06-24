package com.etz.etzwallet.mapper;

import com.etz.etzwallet.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {
    @Insert("insert into wallet_user(username,userpass,email,phone,address,etz,lxt,cardid,cardname) values(#{username}, #{userpass}, #{email}, #{phone}, #{address}, #{etz}, #{lxt}, #{cardid}, #{cardname})")
    int insert(User user);

    @Select("select * from wallet_user where phone = #{phone}")
    User getUserByPhone(String phone);

    @Update("update wallet_user set username=#{username},email=#{email},address=#{address},etz=#{etz},lxt=#{lxt},cardid=#{cardid},cardname=#{cardname} where phone=#{phone}")
    int update(User user);

    @Update("update wallet_user set userpass=#{userpass} where phone=#{phone}")
    int updatePass(User user);
}
