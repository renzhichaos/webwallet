package com.etz.etzwallet.model;

import java.security.MessageDigest;

public class ShaMd5 {

    private static final String KEY_SHA = "SHA";
    private static final String KEY_MD5 = "MD5";

    public static byte[] encryptSHA(byte[] data) throws Exception {

        MessageDigest sha = MessageDigest.getInstance(KEY_SHA);
        sha.update(data);

        return sha.digest();

    }

    public static byte[] encryptMD5(byte[] data) throws Exception {

        MessageDigest md5 = MessageDigest.getInstance(KEY_MD5);
        md5.update(data);

        return md5.digest();

    }
}
