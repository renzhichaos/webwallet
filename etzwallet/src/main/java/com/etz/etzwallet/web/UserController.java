package com.etz.etzwallet.web;

import com.etz.etzwallet.model.JsonResult;
import com.etz.etzwallet.model.User;
import com.etz.etzwallet.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/get/{phone}", method = RequestMethod.POST)
    public ResponseEntity<JsonResult> getUserByPhone (@PathVariable(value = "phone") String phone, @RequestBody User user){
        logger.info(user.toString());
        JsonResult result = new JsonResult();
        try {
            User userdata = userService.getUserByPhone(phone);
            if (userdata != null) {
                if (user.getUserpass().equals(userdata.getUserpass())) {
                    result.setStatus("ok");
                    result.setResult(userdata);
                } else {
                    result.setStatus("error");
                    result.setResult("not pass");
                }
            } else {
                result.setStatus("error");
                result.setResult("null");
            }
        }catch (Exception e){
            result.setStatus("error");
            result.setResult(e.getClass().getName()+":"+e.getMessage());
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

    @RequestMapping(value = "/reg", method = RequestMethod.POST)
    public ResponseEntity<JsonResult> insert(@RequestBody User user){
        logger.info(user.toString());
        JsonResult result = new JsonResult();
        try {
            User userdata = userService.getUserByPhone(user.getPhone());
            if (userdata != null){
                result.setStatus("error");
                result.setResult("registered");
            }else{
                int orderId = userService.insert(user);
                if(orderId < 0){
                    result.setStatus("fail");
                    result.setResult(orderId);
                }else {
                    result.setStatus("ok");
                    result.setResult(orderId);
                }
            }
        }catch (Exception e){
            result.setStatus("error");
            result.setResult(e.getClass().getName()+":"+e.getMessage());
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);

    }

    @RequestMapping(value = "/update/{phone}", method = RequestMethod.POST)
    public ResponseEntity<JsonResult> update(@PathVariable("phone") String phone, @RequestBody User user){
        logger.info(user.toString());
        JsonResult result = new JsonResult();
        try {
            User userdata = userService.getUserByPhone(phone);
            if (userdata != null) {
                if (user.getUserpass().equals(userdata.getUserpass())) {
                    int id = userService.update(user);
                    if (id < 0) {
                        result.setStatus("fail");
                        result.setResult(id);
                    } else {
                        result.setStatus("ok");
                        result.setResult(id);
                    }
                } else {
                    result.setStatus("error");
                    result.setResult("not pass");
                }
            } else {
                result.setStatus("error");
                result.setResult("null");
            }
        }catch (Exception e){
            result.setStatus("error");
            result.setResult(e.getClass().getName()+":"+e.getMessage());
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }


    @RequestMapping(value = "/pass/{phone}", method = RequestMethod.POST)
    public ResponseEntity<JsonResult> updatePass(@PathVariable("phone") String phone, @RequestBody User user){
        logger.info(user.toString());
        JsonResult result = new JsonResult();
        try {
            User userdata = userService.getUserByPhone(phone);
            if (userdata != null) {
                // and email=#{email} and cardid=#{cardid} and cardname=#{cardname} and address=#{address}
                if (user.getEmail().equals(userdata.getEmail()) && user.getCardid().equals(userdata.getCardid()) && user.getCardname().equals(userdata.getCardname()) && user.getAddress().equals(userdata.getAddress())) {
                    int id = userService.updatePass(user);
                    if (id < 0) {
                        result.setStatus("fail");
                        result.setResult(id);
                    } else {
                        result.setStatus("ok");
                        result.setResult(id);
                    }
                } else {
                    result.setStatus("error");
                    result.setResult("not pass");
                }
            } else {
                result.setStatus("error");
                result.setResult("null");
            }
        }catch (Exception e){
            result.setStatus("error");
            result.setResult(e.getClass().getName()+":"+e.getMessage());
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

}
