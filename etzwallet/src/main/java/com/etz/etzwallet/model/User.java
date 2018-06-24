package com.etz.etzwallet.model;

import org.apache.tomcat.util.security.MD5Encoder;
import org.springframework.format.annotation.DateTimeFormat;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;

public class User {
    private int id;
    private String username;
    private String userpass;
    private String email;
    private String phone;
    private String address;
    private double etz;
    private double lxt;
    private String cardid;
    private String cardname;
    private Timestamp ctdate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpass() {
        return userpass;
    }

    public void setUserpass(String userpass) {
            this.userpass = userpass;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getEtz() {
        return etz;
    }

    public void setEtz(double etz) {
        this.etz = etz;
    }

    public double getLxt() {
        return lxt;
    }

    public void setLxt(double lxt) {
        this.lxt = lxt;
    }

    public String getCardid() {
        return cardid;
    }

    public void setCardid(String cardid) {
        this.cardid = cardid;
    }

    public String getCardname() {
        return cardname;
    }

    public void setCardname(String cardname) {
        this.cardname = cardname;
    }

    public Timestamp getCtdate() {
        return ctdate;
    }

    public void setCtdate(Timestamp ctdate) {
        this.ctdate = ctdate;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", userpass='" + userpass + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", etz=" + etz +
                ", lxt=" + lxt +
                ", cardid='" + cardid + '\'' +
                ", cardname='" + cardname + '\'' +
                ", ctdate=" + ctdate +
                '}';
    }
}
