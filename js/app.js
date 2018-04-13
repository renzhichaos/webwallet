if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log(JSON.stringify(web3));
var version = web3.version.api;
var node = web3.version.node;
var network = web3.version.network;
var ethereum = web3.version.ethereum;
var coinbase = web3.eth.coinbase;
var gasPrice = web3.fromWei(web3.eth.gasPrice).toFixed();
var tokenAddress = "0xcf7e700cd4cb795f1204f424710b7e1b0a6b819f";
var abi = [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"giveEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_value","type":"bool"}],"name":"setMonthClose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_exchangeStart","type":"uint256"},{"name":"_exchangeEnd","type":"uint256"},{"name":"_sellPrice","type":"uint256"},{"name":"_buyPrice","type":"uint256"}],"name":"setExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"monthPower","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeMyFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellToContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lock","type":"bool"}],"name":"setLock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powers","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeUserFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_balance","type":"uint256"}],"name":"takeEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minimumEtherInFinney","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_open","type":"bool"}],"name":"setDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"}],"name":"getMonth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"minToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_lockEnd","type":"uint256"}],"name":"lockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_users","type":"uint256"},{"name":"_powers","type":"uint8"},{"name":"_minToken","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"setMonthOpen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minEtherForAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sellToContract","type":"bool"}],"name":"setSellToContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monthOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dropStart","type":"uint256"},{"name":"_dropEnd","type":"uint256"},{"name":"_airDrop","type":"uint256"},{"name":"_totalDrop","type":"uint256"}],"name":"setAirDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"centralMinter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"},{"indexed":false,"name":"fronzeEnd","type":"uint256"}],"name":"FrozenMyFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
var mytokenContract = web3.eth.contract(abi);
var mytoken = mytokenContract.at(tokenAddress);
var accounts = web3.eth.accounts;
web3.eth.defaultAccount = accounts[0];
var name = mytoken.name.call().toString();//名字
var symbol = mytoken.symbol.call().toString();//代号
var decimals = mytoken.decimals.call().toString();//小数点后位数
var totalSupply = Number(mytoken.totalSupply.call())/Math.pow(10,decimals);//总发行量

var exchangeStart = mytoken.exchangeStart.call().toString();//兑换ether开始时间(秒)
var exchangeEnd = mytoken.exchangeEnd.call().toString();//兑换ether结束时间(秒)
var sellPrice =  Number(mytoken.sellPrice.call())/Math.pow(10,18);//卖出给合约的价格
var buyPrice = Number(mytoken.buyPrice.call())/Math.pow(10,18);//买入价格

var drop = mytoken.drop.call().toString();//开启/关闭空投
var airDrop = Number(mytoken.airDrop.call())/Math.pow(10,decimals);//单账户空投数量
var currentDrop = Number(mytoken.currentDrop.call())/Math.pow(10,decimals);//当前空投量
var totalDrop = Number(mytoken.totalDrop.call())/Math.pow(10,decimals);//空投总量
var dropStart = mytoken.dropStart.call().toString();//空投开始时间(秒)
var dropEnd = mytoken.dropEnd.call().toString();//空投结束时间(秒)

var minEtherForAccounts = Number(mytoken.minEtherForAccounts.call())/Math.pow(10,18);//交易时最少持有以太币量
var powers = mytoken.powers.call().toString();//每月持币激励百分比
var users = mytoken.users.call().toString();//持币的人数(即每月激励中加权平均的基数)
var minToken = Number(mytoken.minToken.call())/Math.pow(10,decimals);//领取每月激励的账户最少持有代币量
var count = mytoken.count.call().toString();//可以领取激励的人数

var lock = mytoken.lock.call().toString();//锁定(true)/解锁(false)交易
var sellToContract = mytoken.sellToContract.call().toString();//允许卖代币给这个合约以换取ether
var myaddress = web3.eth.defaultAccount;
var owner = mytoken.owner.call().toString();

$(document).ready(function(){
    $(".name").text(name);
    $(".symbol").text(symbol);
    $(".version").text(version);
    $(".node").text(node);
    $(".network").text(network);
    $(".ethereum").text(ethereum);
    $(".tokenAddress").text(tokenAddress);
    $(".totalSupply").text(totalSupply);
    if(lock=='true'){
        $(".lock").attr("class", "lock badge badge-danger").text("关闭");
        $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
    }else{
        $(".lock").attr("class", "lock badge badge-success").text("开启");
        $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
    }
    $(".minEtherForAccounts").text(minEtherForAccounts);
    if(drop=='true'){
        $(".drop").attr("class", "drop badge badge-success").text("开启");
        $("#setdrop").attr("class", "btn btn-success closeDrop").text("关闭空投");
    }else{
        $(".drop").attr("class", "drop badge badge-danger").text("关闭");
        $("#setdrop").attr("class", "btn btn-outline-danger openDrop").text("开启空投");
    }
    $(".airDrop").text(airDrop);
    $(".totalDrop").text(totalDrop);
    $(".currentDrop").text(currentDrop);
    if(dropStart > 0){$(".dropStart").text(new Date(dropStart * 1000).toLocaleString());}else{$(".dropStart").text("无限制");}
    if(dropEnd > 0){$(".dropEnd").text(new Date(dropEnd * 1000).toLocaleString());}else{$(".dropEnd").text("无限制")}
    $(".buyPrice").text(buyPrice);
    if(sellToContract=='true'){
        $(".sellToContract").attr("class", "sellToContract badge badge-success").text("开启");
        $("#setsellToContract").attr("class", "btn btn-success closesellToContract").text("关闭兑换ETH");
    }else{
        $(".sellToContract").attr("class", "sellToContract badge badge-danger").text("关闭");
        $("#setsellToContract").attr("class", "btn btn-outline-danger opensellToContract").text("开启兑换ETH");
    }
    $(".sellPrice").text(sellPrice);
    if(exchangeStart > 0){$(".exchangeStart").text(new Date(exchangeStart * 1000).toLocaleString());}else{$(".exchangeStart").text("无限制");}
    if(exchangeEnd > 0){$(".exchangeEnd").text(new Date(exchangeEnd * 1000).toLocaleString());}else{$(".exchangeEnd").text("无限制");}
    $(".powers").text(powers);
    $(".users").text(users);
    $(".minToken").text(minToken);
    $(".count").text(count);
    $(".gasPrice").text(gasPrice);

    for (var i = 0, len = accounts.length; i < len; i++){
        var accountether = Number(mytoken.getEther.call(accounts[i]))/Math.pow(10,18);
        var balanceOf = (Number(mytoken.balanceOf.call(accounts[i]))/Math.pow(10,decimals)).toFixed(2);
        $("#accountId").append('<option id="'+accounts[i]+'" value="'+accounts[i]+'">'+accounts[i]+'('+accountether+' ETH)('+balanceOf+' '+symbol+')</option>');
        isowner(accounts[i]);
    }

    if(myaddress==owner){
        $(".owner").show();
    }else{
        $(".owner").hide();
    }

    $("#accountId").change(function() {
        web3.eth.defaultAccount = $("#accountId").val();
        myaddress = web3.eth.defaultAccount;
        if(myaddress==owner){
            $(".owner").show();
        }else{
            $(".owner").hide();
        }
    });

    function sleep(d){
        for(var t = Date.now();Date.now() - t <= d;){
           var i=1;
        }
    }

    $("#transfer").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 发送"+symbol+"中...").attr("disabled","disabled");
        var toAddress = $("#toAddress").val();
        var isAddress = web3.isAddress(toAddress);
        var toAmount = $("#toAmount").val();
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);
        if(isAddress && myaddress!=toAddress && toAmount>0 && amount<=Number(mytoken.balanceOf.call(myaddress))){
            sleep(5000);
            mytoken.transfer.sendTransaction(toAddress, amount, {gas: 3000000}, function(error, result){
                if(!error) {
                    $("#result").html(function (i, oldresult) {
                        return "成功发送" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                    });
                    var myether = Number(mytoken.getEther.call(myaddress))/Math.pow(10,18);
                    var mybalance = (Number(mytoken.balanceOf.call(myaddress))/Math.pow(10,decimals)).toFixed(2);
                    var toether = Number(mytoken.getEther.call(toAddress))/Math.pow(10,18);
                    var tobalance = (Number(mytoken.balanceOf.call(toAddress))/Math.pow(10,decimals)).toFixed(2);
                    $("#"+myaddress).text(myaddress+'('+myether+' ETH)('+mybalance+' '+symbol+')');
                    $("#"+toAddress).text(toAddress+'('+toether+' ETH)('+tobalance+' '+symbol+')');
                }else
                    $("#result").html(function(i, oldresult){
                        return "未能发送"+symbol+"<br>"+error+"<br>"+ oldresult;
                    });
            });
        }else if(!isAddress || myaddress==toAddress){
            $("#result").html(function(i, oldresult){
                return "发送地址不正确!<br>"+ oldresult;
            });
        }else if(toAmount<=0 || amount>Number(mytoken.balanceOf.call(myaddress))){
            $("#result").html(function(i, oldresult){
                return "发送数量不正确!<br>"+ oldresult;
            });
        }
        $(this).removeAttr("disabled").text("发送");
    });

    $("#approve").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 授权"+symbol+"中...").attr("disabled","disabled");
        var toAddress = $("#toAddress").val();
        var isAddress = web3.isAddress(toAddress);
        var toAmount = $("#toAmount").val();
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);
        if(isAddress && myaddress!=toAddress && toAmount>0 && amount<=Number(mytoken.balanceOf.call(myaddress))){
            sleep(5000);
            mytoken.approve.sendTransaction(toAddress, amount, {gas: 3000000}, function(error, result){
                if(!error) {
                    $("#result").html(function (i, oldresult) {
                        return "成功授权" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                    });
                    var myether = Number(mytoken.getEther.call(myaddress))/Math.pow(10,18);
                    var mybalance = (Number(mytoken.balanceOf.call(myaddress))/Math.pow(10,decimals)).toFixed(2);
                    var toether = Number(mytoken.getEther.call(toAddress))/Math.pow(10,18);
                    var tobalance = (Number(mytoken.balanceOf.call(toAddress))/Math.pow(10,decimals)).toFixed(2);
                    $("#"+myaddress).text(myaddress+'('+myether+' ETH)('+mybalance+' '+symbol+')');
                    $("#"+toAddress).text(toAddress+'('+toether+' ETH)('+tobalance+' '+symbol+')');
                }else
                    $("#result").html(function(i, oldresult){
                        return "未能授权"+symbol+"<br>"+error+"<br>"+ oldresult;
                    });
            });
        }else if(!isAddress || myaddress==toAddress){
            $("#result").html(function(i, oldresult){
                return "授权地址不正确!<br>"+ oldresult;
            });
        }else if(toAmount<=0 || amount>Number(mytoken.balanceOf.call(myaddress))){
            $("#result").html(function(i, oldresult){
                return "授权数量不正确!<br>"+ oldresult;
            });
        }
        $(this).removeAttr("disabled").text("授权");
    });

    $("#burnFrom").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 销毁授权的"+symbol+"中...").attr("disabled","disabled");
        var toAddress = $("#toAddress").val();
        var isAddress = web3.isAddress(toAddress);
        var toAmount = $("#toAmount").val();
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);
        if(isAddress && myaddress!=toAddress && toAmount>0 && amount<=Number(mytoken.balanceOf.call(myaddress))){
            sleep(5000);
            mytoken.burnFrom.sendTransaction(toAddress, amount, {gas: 3000000}, function(error, result){
                if(!error) {
                    $("#result").html(function (i, oldresult) {
                        return "成功销毁" + toAddress + "授权的" + toAmount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                    });
                    var myether = Number(mytoken.getEther.call(myaddress))/Math.pow(10,18);
                    var mybalance = (Number(mytoken.balanceOf.call(myaddress))/Math.pow(10,decimals)).toFixed(2);
                    var toether = Number(mytoken.getEther.call(toAddress))/Math.pow(10,18);
                    var tobalance = (Number(mytoken.balanceOf.call(toAddress))/Math.pow(10,decimals)).toFixed(2);
                    $("#"+myaddress).text(myaddress+'('+myether+' ETH)('+mybalance+' '+symbol+')');
                    $("#"+toAddress).text(toAddress+'('+toether+' ETH)('+tobalance+' '+symbol+')');
                }else
                    $("#result").html(function(i, oldresult){
                        return "未能销毁授权的"+symbol+"<br>"+error+"<br>"+ oldresult;
                    });
            });
        }else if(!isAddress || myaddress==toAddress){
            $("#result").html(function(i, oldresult){
                return "销毁授权的地址不正确!<br>"+ oldresult;
            });
        }else if(toAmount<=0 || amount>Number(mytoken.balanceOf.call(myaddress))){
            $("#result").html(function(i, oldresult){
                return "销毁授权的数量不正确!<br>"+ oldresult;
            });
        }
        $(this).removeAttr("disabled").text("销毁授权的" + symbol);
    });

    function isowner(_address) {
        if (_address == owner) {
            $("#setlock").click(function () {
                if (myaddress == owner) {
                    if ($("#setlock").hasClass("closeLock")) {
                        mytoken.setLock.sendTransaction(true, {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".lock").attr("class", "lock badge badge-danger").text("关闭");
                                $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功关闭交易功能<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能关闭交易功能<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if ($("#setlock").hasClass("openLock")) {
                        mytoken.setLock.sendTransaction("", {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".lock").attr("class", "lock badge badge-success").text("开启");
                                $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功开启交易功能<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能开启交易功能<br>" + error + "<br>" + oldresult;
                                });
                        });
                    }
                }else {
                    $("#setresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#setdrop").click(function () {
                if (myaddress == owner) {
                    if ($("#setdrop").hasClass("closeDrop")) {
                        mytoken.setDrop.sendTransaction("", {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".drop").attr("class", "drop badge badge-danger").text("关闭");
                                $("#setdrop").attr("class", "btn btn-outline-danger openDrop").text("开启空投");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功关闭空投<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能关闭空投<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if ($("#setdrop").hasClass("openDrop")) {
                        mytoken.setDrop.sendTransaction(true, {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".drop").attr("class", "drop badge badge-success").text("开启");
                                $("#setdrop").attr("class", "btn btn-success closeDrop").text("关闭空投");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功开启空投<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能开启空投<br>" + error + "<br>" + oldresult;
                                });
                        });
                    }
                }else {
                    $("#setresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#setsellToContract").click(function () {
                if(myaddress == owner) {
                    if ($("#setsellToContract").hasClass("closesellToContract")) {
                        mytoken.setSellToContract.sendTransaction("", {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".sellToContract").attr("class", "sellToContract badge badge-danger").text("关闭");
                                $("#setsellToContract").attr("class", "btn btn-outline-danger opensellToContract").text("开启兑换ETH");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功关闭兑换ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能关闭兑换ETH<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if ($("#setsellToContract").hasClass("opensellToContract")) {
                        mytoken.setSellToContract.sendTransaction(true, {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $(".sellToContract").attr("class", "sellToContract badge badge-success").text("开启");
                                $("#setsellToContract").attr("class", "btn btn-success closesellToContract").text("关闭兑换ETH");
                                $("#setresult").html(function (i, oldresult) {
                                    return "成功开启兑换ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            }
                            else
                                $("#setresult").html(function (i, oldresult) {
                                    return "未能开启兑换ETH<br>" + error + "<br>" + oldresult;
                                });
                        });
                    }
                }else {
                    $("#setresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#mintToken").click(function () {
                if(myaddress == owner) {
                    $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 增发" + symbol + "中...").attr("disabled", "disabled");
                    var toAddress = $("#toAddress").val();
                    var isAddress = web3.isAddress(toAddress);
                    var toAmount = $("#toAmount").val();
                    var amount = Number($("#toAmount").val()) * Math.pow(10, decimals);
                    if (isAddress && myaddress != toAddress && toAmount > 0 && amount <= Number(mytoken.balanceOf.call(myaddress))) {
                        sleep(5000);
                        mytoken.mintToken.sendTransaction(toAddress, amount, {gas: 3000000}, function (error, result) {
                            if (!error) {
                                $("#result").html(function (i, oldresult) {
                                    return "成功增发" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                                var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                var mybalance = (Number(mytoken.balanceOf.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                var toether = Number(mytoken.getEther.call(toAddress)) / Math.pow(10, 18);
                                var tobalance = (Number(mytoken.balanceOf.call(toAddress)) / Math.pow(10, decimals)).toFixed(2);
                                $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                $("#" + toAddress).text(toAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                            } else
                                $("#result").html(function (i, oldresult) {
                                    return "未能增发" + toAmount + " " + symbol + "<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if (!isAddress || myaddress == toAddress) {
                        $("#result").html(function (i, oldresult) {
                            return "增发的地址不正确!<br>" + oldresult;
                        });
                    } else if (toAmount <= 0 || amount > Number(mytoken.balanceOf.call(myaddress))) {
                        $("#result").html(function (i, oldresult) {
                            return "增发的数量不正确!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("增发" + symbol);
                }else {
                    $("#result").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });
        }
    }

});