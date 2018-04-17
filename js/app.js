$(document).ready(function(){
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/noapikey"));
    }
    var network;
    web3.version.getNetwork(function(err, netId) {
        switch (netId) {
        case "1":
            network = "mainnet";
            console.log('This is mainnet');
            break;
        case "2":
            network = "deprecated Morden";
            console.log('This is the deprecated Morden test network.');
            break;
        case "3":
            network = "ropsten";
            console.log('This is the ropsten test network.');
            break;
        case "4":
            network = "Rinkeby";
            console.log('This is the Rinkeby test network.');
            break;
        case "42":
            network = "Kovan";
            console.log('This is the Kovan test network.');
            break;
        default:
            network = "test";
            console.log('This is an unknown network.');
        }
        $(".network").text(network);
    });
    var version = web3.version.api;
    $(".version").text(version);
    var node;
    web3.version.getNode(function(err, result){
        node = result;
        $(".node").text(node);
    });
    var ethereum;
    web3.version.getEthereum(function(err, result){
        ethereum = result;
        $(".ethereum").text(ethereum);
    });
    var coinbase = web3.eth.coinbase;
    var gasPrice;
    web3.eth.getGasPrice(function(err, result){
        gasPrice = web3.fromWei(result).toFixed();
        $(".gasPrice").text(gasPrice);
    });

    var tokenAddress = "0x13Ad69C133015347a5D4F4333E5F99327fCA5881";
    var abi = [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"giveEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_value","type":"bool"}],"name":"setMonthClose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_exchangeStart","type":"uint256"},{"name":"_exchangeEnd","type":"uint256"},{"name":"_sellPrice","type":"uint256"},{"name":"_buyPrice","type":"uint256"}],"name":"setExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"monthPower","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeMyFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellToContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lock","type":"bool"}],"name":"setLock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powers","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeUserFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_balance","type":"uint256"}],"name":"takeEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minimumEtherInFinney","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_open","type":"bool"}],"name":"setDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"}],"name":"getMonth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"minToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_lockEnd","type":"uint256"}],"name":"lockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_users","type":"uint256"},{"name":"_powers","type":"uint8"},{"name":"_minToken","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"setMonthOpen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minEtherForAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sellToContract","type":"bool"}],"name":"setSellToContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monthOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dropStart","type":"uint256"},{"name":"_dropEnd","type":"uint256"},{"name":"_airDrop","type":"uint256"},{"name":"_totalDrop","type":"uint256"}],"name":"setAirDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"centralMinter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"},{"indexed":false,"name":"fronzeEnd","type":"uint256"}],"name":"FrozenMyFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
    $(".tokenAddress").text(tokenAddress);
    var mytokenContract = web3.eth.contract(abi);
    var mytoken = mytokenContract.at(tokenAddress);
    var tokenETH;
    web3.eth.getBalance(tokenAddress, function(err, result){
        tokenETH = Number(result)/Math.pow(10,18);
        $(".tokenETH").text(tokenETH);
    });
    var accounts = web3.eth.accounts;
    web3.eth.defaultAccount = accounts[0];
    console.log(accounts);
    var name;
    mytoken.name.call(function(err, result){
        name = result;
        $(".name").text(name);
    });//名字
    var symbol;
    mytoken.symbol.call(function(err, result){
        symbol = result;
        $(".symbol").text(symbol);
    });//代号
    var decimals;
    mytoken.decimals.call(function(err, result){
        decimals = result;
    });//小数点后位数
    var totalSupply;
    mytoken.totalSupply.call(function(err, result){
        totalSupply = Number(result)/Math.pow(10,decimals);//总发行量;
        $(".totalSupply").text(totalSupply);
    })

    var exchangeStart;
    mytoken.exchangeStart.call(function(err, result){
        exchangeStart = result;
        if(exchangeStart > 0){
            $(".exchangeStart").text(new Date(exchangeStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#exchangeStart").val(new Date(exchangeStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".exchangeStart").text("无限制");
        }
    });//兑换ether开始时间(秒)
    var exchangeEnd;
    mytoken.exchangeEnd.call(function(err, result){
        exchangeEnd = result;
        if(exchangeEnd > 0){
            $(".exchangeEnd").text(new Date(exchangeEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#exchangeEnd").val(new Date(exchangeEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".exchangeEnd").text("无限制");
        }
    });//兑换ether结束时间(秒)
    var sellPrice;
    mytoken.sellPrice.call(function(err, result){
        sellPrice = Number(result)/Math.pow(10,16);
        $(".sellPrice").text(sellPrice);
        $("#sellPrice").val(sellPrice);
    });//卖出给合约的价格
    var buyPrice;
    mytoken.buyPrice.call(function(err, result){
        buyPrice = Number(result)/Math.pow(10,16);
        $(".buyPrice").text(buyPrice);
        $("#buyPrice").val(buyPrice);
    });//买入价格

    var drop;
	mytoken.drop.call(function(err, result){
        drop = result;
        if(drop){
            $(".drop").attr("class", "drop badge badge-success").text("开启");
            $("#setdrop").attr("class", "btn btn-success closeDrop").text("关闭空投");
        }else{
            $(".drop").attr("class", "drop badge badge-danger").text("关闭");
            $("#setdrop").attr("class", "btn btn-outline-danger openDrop").text("开启空投");
        }
    });//开启/关闭空投
    var airDrop
    mytoken.airDrop.call(function(err, result){
        airDrop = Number(result)/Math.pow(10,decimals);
        $(".airDrop").text(airDrop);
        $("#airDrop").val(airDrop);
    });//单账户空投数量
    var currentDrop;
    mytoken.currentDrop.call(function(err, result){
        currentDrop = Number(result)/Math.pow(10,decimals);
        $(".currentDrop").text(currentDrop);
    });//当前空投量
    var totalDrop;
    mytoken.totalDrop.call(function(err, result){
        totalDrop = Number(result)/Math.pow(10,decimals);
        $(".totalDrop").text(totalDrop);
        $("#totalDrop").val(totalDrop);
    });//空投总量
    var dropStart;
	mytoken.dropStart.call(function(err, result){
        dropStart = result;
        if(dropStart > 0){
            $(".dropStart").text(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#dropStart").val(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".dropStart").text("无限制");
        }
    });//空投开始时间(秒)
    var dropEnd;
	mytoken.dropEnd.call(function(err, result){
        dropEnd = result;
        if(dropEnd > 0){
            $(".dropEnd").text(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#dropEnd").val(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".dropEnd").text("无限制")
        }
    });//空投结束时间(秒)

    var minEtherForAccounts;
    mytoken.minEtherForAccounts.call(function(err, result){
        minEtherForAccounts = Number(result)/Math.pow(10,18);
        $(".minEtherForAccounts").text(minEtherForAccounts);
    });//交易时最少持有以太币量
    var powers;
	mytoken.powers.call(function(err, result){
        powers = result;
        $(".powers").text(powers);
        $("#powers").val(powers);
    });//每月持币激励百分比
    var users;
	mytoken.users.call(function(err, result){
        users = result;
        $(".users").text(users);
        $("#users").val(users);
    });//持币的人数(即每月激励中加权平均的基数)
    var minToken;
    mytoken.minToken.call(function(err, result){
        minToken = Number(result)/Math.pow(10,decimals);
        $(".minToken").text(minToken);
        $("#minToken").val(minToken);
    });//领取每月激励的账户最少持有代币量
    var count;
	mytoken.count.call(function(err, result){
        count = result;
        $(".count").text(count);
        $("#count").val(count);
    });//可以领取激励的人数

    var lock;
	mytoken.lock.call(function(err, result){
        lock = result;
        if(lock){
            $(".lock").attr("class", "lock badge badge-danger").text("关闭");
            $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
            $(".withlock").attr("disabled","disabled");
        }else{
            $(".lock").attr("class", "lock badge badge-success").text("开启");
            $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
        }
    });//锁定(true)/解锁(false)交易
    var sellToContract;
	mytoken.sellToContract.call(function(err, result){
        sellToContract = result;
        if(sellToContract){
            $(".sellToContract").attr("class", "sellToContract badge badge-success").text("开启");
            $("#setsellToContract").attr("class", "btn btn-success closesellToContract").text("关闭兑换ETH");
        }else{
            $(".sellToContract").attr("class", "sellToContract badge badge-danger").text("关闭");
            $("#setsellToContract").attr("class", "btn btn-outline-danger opensellToContract").text("开启兑换ETH");
            $(".withsell").attr("disabled","disabled");
        }
    });//允许卖代币给这个合约以换取ether
    var myaddress = web3.eth.defaultAccount;
    var owner;
	mytoken.owner.call(function(err, result){
        owner = result;
        console.log(owner);
    });
    var initialized;
	mytoken.initialized.call(myaddress, function(err, result){
        initialized = result;
    });
    var balances;
	mytoken.balances.call(myaddress, function(err, result){
        balances = result/Math.pow(10,decimals);
    });
    var frozens;
	mytoken.frozens.call(myaddress, function(err, result){
        frozens = result;
    });
    var frozenNum;
	mytoken.frozenNum.call(myaddress, function(err, result){
        frozenNum = result/Math.pow(10,decimals);
    });
    var frozenEnd;
	mytoken.frozenEnd.call(myaddress, function(err, result){
        frozenEnd = result;
    });

    for (var i = 0, len = accounts.length; i < len; i++){
        var account = accounts[i];
        var _accountether;
        web3.eth.getBalance(account, function(err, result){
            _accountether = Number(result)/Math.pow(10,18);
            var _balanceOf;
            mytoken.balances.call(account, function(err2, result2){
                _balanceOf = (Number(result2)/Math.pow(10,decimals)).toFixed(2);
                $("#accountId").append('<option id="'+account+'" value="'+account+'">'+account+'('+_accountether+' ETH)('+_balanceOf+' '+symbol+')</option>');
            });
        });
        isowner(account);
    }
/**
    $("#" + myaddress).attr("selected", "selected");
    $(".initialized").text(initialized?"已经空投":"没有空投");
    $(".balances").text(balances+" "+symbol);
    $(".frozens").text(frozens==0?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
    $(".frozenNum").text(frozenNum==0?"没有锁仓":"锁仓"+frozenNum+" "+symbol+"至"+new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));

    if(myaddress==owner){
        $("#transfer").removeAttr("disabled");
        $(".notowner").attr("disabled","disabled");
        $(".owner").show();
    }else{
        $(".notowner").removeAttr("disabled");
        $(".owner").hide();
    }

    $("#accountId").change(function() {
        web3.eth.defaultAccount = $("#accountId").val();
        myaddress = web3.eth.defaultAccount;
        initialized = mytoken.initialized.call(myaddress);
        balances = mytoken.balances.call(myaddress)/Math.pow(10,decimals);
        frozens = mytoken.frozens.call(myaddress);
        frozenNum = mytoken.frozenNum.call(myaddress)/Math.pow(10,decimals);
        frozenEnd = mytoken.frozenEnd.call(myaddress);
        $(".initialized").text(initialized?"已经空投":"没有空投");
        $(".balances").text(balances+" "+symbol);
        $(".frozens").text(frozens==0?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        $(".frozenNum").text(frozenNum==0?"没有锁仓":"锁仓"+frozenNum+" "+symbol+"至"+new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        if(myaddress==owner){
            $("#transfer").removeAttr("disabled");
            $(".notowner").attr("disabled","disabled");
            $(".owner").show();
        }else{
            $(".notowner").removeAttr("disabled");
            $(".owner").hide();
        }
        if(lock){
            $(".withlock").attr("disabled","disabled");
        }else{
            $(".withlock").removeAttr("disabled");
        }
        if(sellToContract){
            $(".withsell").removeAttr("disabled");
        }else{
            $(".withsell").attr("disabled","disabled");
        }
    });

    /*var filter = web3.eth.filter(tokenAddress);
    filter.watch(function(error, result){
        if (!error) {
            console.log(result);
            tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
            $(".tokenETH").text(tokenETH);
        }
    });*/
/**
    function sleep(d){
        for(var t = Date.now();Date.now() - t <= d;){}
    }

    $("#giveEther").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 给合约地址发ETH中...").attr("disabled","disabled");
        var ethamount = $("#ethamount").val();
        var amount = Number($("#ethamount").val()) * Math.pow(10,18);
        if (ethamount>0 && amount <= Number(web3.eth.getBalance(myaddress))){
            var _estimateGas = mytoken.giveEther.estimateGas({value: amount}) * 2;
            console.log("estimateGas:" + _estimateGas / 2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.giveEther.sendTransaction({value: amount, gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#ethamountresult").html(function (i, oldresult) {
                            return "成功给合约地址发ETH:" + ethamount + " ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
                        $(".tokenETH").text(tokenETH);
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                    } else
                        $("#ethamountresult").html(function (i, oldresult) {
                            return "未能给合约地址发ETH!<br>" + error + "<br>" + oldresult;
                        });
                })
            }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                $("#ethamountresult").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        }else if(ethamount<=0 || amount > Number(web3.eth.getBalance(myaddress))){
            $("#ethamountresult").html(function(i, oldresult){
                return "ETH量不正确!<br>"+ oldresult;
            });
        }else {
            $("#ethamountresult").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("给合约地址发ETH");
    });

    $("#freezeMyFunds").click(function () {
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 锁仓中...").attr("disabled", "disabled");
        var _userfreezenum = $("#userfreezenum").val();
        var userfreezenum = Number($("#userfreezenum").val()) * Math.pow(10,decimals);
        var _userfreezeend = new Date($("#userfreezeend").val()).getTime() / 1000;
        if (userfreezenum >= 0 && _userfreezeend >= 0) {
            var _estimateGas = mytoken.freezeMyFunds.estimateGas(userfreezenum, _userfreezeend) * 2;
            console.log("estimateGas:"+_estimateGas/2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.freezeMyFunds.sendTransaction(userfreezenum, _userfreezeend, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#userfreezeresult").html(function (i, oldresult) {
                            return "成功锁仓"+myaddress+": "+ _userfreezenum + " "+symbol+".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        frozenNum = mytoken.frozenNum.call(myaddress)/Math.pow(10,decimals);
                        frozenEnd = mytoken.frozenEnd.call(myaddress);
                        $(".frozenNum").text(frozenNum==0?"没有锁仓":"锁仓"+frozenNum+" "+symbol+"至"+new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                    } else
                        $("#userfreezeresult").html(function (i, oldresult) {
                            return "未能锁仓" + userfreezenum + ".<br>" + error + "<br>" + oldresult;
                        });
                });
            }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                $("#userfreezeresult").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        } else {
            $("#userfreezeresult").html(function (i, oldresult) {
                return "锁仓参数不正确!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("锁仓");
    });

    $("#transfer").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 发送"+symbol+"中...").attr("disabled","disabled");
        var toAddress = $("#toAddress").val();
        var isAddress = web3.isAddress(toAddress);
        var toAmount = $("#toAmount").val();
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);

        var _balances = Number(mytoken.balances.call(myaddress));
        if (Math.round(new Date().getTime()/1000) <= frozenEnd) {
            _balances = _balances - mytoken.frozenNum.call(myaddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && Math.round(new Date().getTime()/1000) > mytoken.frozens.call(toAddress) && isAddress && myaddress != toAddress && (myaddress == owner || !lock) && toAmount >= 0.01 && amount <= _balances){
            var _estimateGas = mytoken.transfer.estimateGas(toAddress, amount) * 2;
            console.log("estimateGas:"+_estimateGas/2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.transfer.sendTransaction(toAddress, amount, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#result").html(function (i, oldresult) {
                            return "成功发送" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        var toether = Number(mytoken.getEther.call(toAddress)) / Math.pow(10, 18);
                        var tobalance = (Number(mytoken.balances.call(toAddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        $("#" + toAddress).text(toAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                    } else
                        $("#result").html(function (i, oldresult) {
                            return "未能发送" + symbol + "<br>" + error + "<br>" + oldresult;
                        });
                });
            } else if (_estimateGas > Number(web3.eth.getBalance(myaddress))) {
                $("#result").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        } else if (!isAddress || myaddress == toAddress) {
            $("#result").html(function (i, oldresult) {
                return "发送地址不正确!<br>" + oldresult;
            });
        } else if (toAmount <= 0 || amount > _balances) {
            $("#result").html(function (i, oldresult) {
                return "发送数量不正确!(锁仓:"+mytoken.frozenNum.call(myaddress)+" "+symbol+")<br>" + oldresult;
            });
        } else if (myaddress != owner && lock) {
            $("#result").html(function (i, oldresult) {
                return "交易功能未开启!<br>" + oldresult;
            });
        }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress) || Math.round(new Date().getTime()/1000) < mytoken.frozens.call(toAddress)){
            $("#result").html(function(i, oldresult){
                return "账号已被锁定!<br>"+ oldresult;
            });
        }else {
            $("#result").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("发送");
    });

    $("#transferFrom").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 发送授权的"+symbol+"中...").attr("disabled","disabled");
        var fromAddress = $("#fromAddress").val();
        var fromtoAddress = $("#fromtoAddress").val();
        var isAddress = (web3.isAddress(fromAddress) && web3.isAddress(fromtoAddress));
        var fromtoAmount = $("#fromtoAmount").val();
        var amount = Number($("#fromtoAmount").val()) * Math.pow(10,decimals);

        var _balances = Number(mytoken.balances.call(fromAddress));
        if (Math.round(new Date().getTime()/1000) <= mytoken.frozenEnd.call(fromAddress)) {
            _balances = _balances - mytoken.frozenNum.call(fromAddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && isAddress && myaddress != fromtoAddress && (myaddress == owner || !lock) && fromtoAmount >= 0.01 && amount <= _balances && amount <= mytoken.allowance.call(fromAddress, myaddress)) {
            var _estimateGas = mytoken.transferFrom.estimateGas(fromAddress, fromtoAddress, amount) * 2;
            console.log("estimateGas:" + _estimateGas / 2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.transferFrom.sendTransaction(toAddress, amount, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#transferFromresult").html(function (i, oldresult) {
                            return "成功发送" + fromAddress + "授权的"+fromtoAmount+" "+ symbol + "给" + fromtoAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        var fromether = Number(mytoken.getEther.call(fromAddress)) / Math.pow(10, 18);
                        var frombalance = (Number(mytoken.balances.call(fromAddress)) / Math.pow(10, decimals)).toFixed(2);
                        var toether = Number(mytoken.getEther.call(fromtoAddress)) / Math.pow(10, 18);
                        var tobalance = (Number(mytoken.balances.call(fromtoAddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        $("#" + fromAddress).text(fromAddress + '(' + fromether + ' ETH)(' + frombalance + ' ' + symbol + ')');
                        $("#" + fromtoAddress).text(fromtoAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                    } else
                        $("#transferFromresult").html(function (i, oldresult) {
                            return "未能发送授权的" + symbol + "<br>" + error + "<br>" + oldresult;
                        });
                });
            } else if (_estimateGas > Number(web3.eth.getBalance(myaddress))) {
                $("#transferFromresult").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        } else if (!isAddress || myaddress == toAddress) {
            $("#transferFromresult").html(function (i, oldresult) {
                return "发送地址不正确!<br>" + oldresult;
            });
        } else if (toAmount <= 0 || amount > _balances) {
            $("#transferFromresult").html(function (i, oldresult) {
                return "发送数量不正确!(锁仓:" + mytoken.frozenNum.call(fromAddress) + " " + symbol + ")<br>" + oldresult;
            });
        } else if (myaddress != owner && lock) {
            $("#transferFromresult").html(function (i, oldresult) {
                return "交易功能未开启!<br>" + oldresult;
            });
        }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress)){
            $("#result").html(function(i, oldresult){
                return "账号已被锁定!<br>"+ oldresult;
            });
        }else {
            $("#result").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
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

        var _balances = Number(mytoken.balances.call(myaddress));
        if (Math.round(new Date().getTime()/1000) <= frozenEnd) {
            _balances = _balances - mytoken.frozenNum.call(myaddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && isAddress && !lock && myaddress!=toAddress && toAmount>=0.01 && amount<=_balances){
            var _estimateGas = mytoken.approve.estimateGas(toAddress, amount) * 2;
            console.log("estimateGas:"+_estimateGas/2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.approve.sendTransaction(toAddress, amount, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#result").html(function (i, oldresult) {
                            return "成功授权" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        var toether = Number(mytoken.getEther.call(toAddress)) / Math.pow(10, 18);
                        var tobalance = (Number(mytoken.balances.call(toAddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        $("#" + toAddress).text(toAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                    } else
                        $("#result").html(function (i, oldresult) {
                            return "未能授权" + symbol + "<br>" + error + "<br>" + oldresult;
                        });
                });
            }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                $("#result").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        }else if(!isAddress || myaddress==toAddress){
            $("#result").html(function(i, oldresult){
                return "授权地址不正确!<br>"+ oldresult;
            });
        }else if(toAmount<=0 || amount>_balances){
            $("#result").html(function(i, oldresult){
                return "授权数量不正确!(锁仓:"+mytoken.frozenNum.call(myaddress)+" "+symbol+")<br>"+ oldresult;
            });
        }else if(lock){
            $("#result").html(function(i, oldresult){
                return "交易功能未开启!<br>"+ oldresult;
            });
        }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress)){
            $("#result").html(function(i, oldresult){
                return "账号已被锁定!<br>"+ oldresult;
            });
        }else {
            $("#result").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("授权");
    });

    $("#burn").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 销毁"+symbol+"中...").attr("disabled","disabled");
        var useramount = $("#useramount").val();
        var amount = Number($("#useramount").val()) * Math.pow(10,decimals);

        var _balances = Number(mytoken.balances.call(myaddress));
        if (Math.round(new Date().getTime()/1000) <= frozenEnd) {
            _balances = _balances - mytoken.frozenNum.call(myaddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && !lock && useramount>=0.01 && amount<=_balances){
            var _estimateGas = mytoken.burn.estimateGas(amount) * 2;
            console.log("estimateGas:"+_estimateGas/2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.burn.sendTransaction(amount, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        totalSupply = Number(mytoken.totalSupply.call()) / Math.pow(10, decimals);
                        $(".totalSupply").text(totalSupply);
                        $("#userresult").html(function (i, oldresult) {
                            return "成功销毁" + useramount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                    } else
                        $("#userresult").html(function (i, oldresult) {
                            return "未能销毁" + symbol + "<br>" + error + "<br>" + oldresult;
                        });
                });
            }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                $("#userresult").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        }else if(useramount<=0 || amount>_balances){
            $("#userresult").html(function(i, oldresult){
                return "销毁数量不正确!(锁仓:"+mytoken.frozenNum.call(myaddress)+" "+symbol+")<br>"+ oldresult;
            });
        }else if(lock){
            $("#userresult").html(function(i, oldresult){
                return "交易功能未开启!<br>"+ oldresult;
            });
        }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress)){
            $("#userresult").html(function(i, oldresult){
                return "账号已被锁定!<br>"+ oldresult;
            });
        }else {
            $("#userresult").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("销毁" + symbol);
    });

    $("#burnFrom").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 销毁授权的"+symbol+"中...").attr("disabled","disabled");
        var toAddress = $("#toAddress").val();
        var isAddress = web3.isAddress(toAddress);
        var toAmount = $("#toAmount").val();
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);

        var _balances = Number(mytoken.balances.call(toAddress));
        if (Math.round(new Date().getTime()/1000) <= mytoken.frozenEnd.call(toAddress)) {
            _balances = _balances - mytoken.frozenNum.call(toAddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && Math.round(new Date().getTime()/1000) > mytoken.frozens.call(toAddress) && isAddress && !lock && myaddress!=toAddress && toAmount>=0.01 && amount<=_balances && amount <= mytoken.allowance.call(toAddress, myaddress)){
            var _estimateGas = mytoken.burnFrom.estimateGas(toAddress, amount) * 2;
            console.log("estimateGas:"+_estimateGas/2);
            if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                mytoken.burnFrom.sendTransaction(toAddress, amount, {gas: _estimateGas}, function (error, result) {
                    if (!error) {
                        $("#result").html(function (i, oldresult) {
                            return "成功销毁" + toAddress + "授权的" + toAmount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                        });
                        var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                        var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                        var toether = Number(mytoken.getEther.call(toAddress)) / Math.pow(10, 18);
                        var tobalance = (Number(mytoken.balances.call(toAddress)) / Math.pow(10, decimals)).toFixed(2);
                        $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        $("#" + toAddress).text(toAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                    } else
                        $("#result").html(function (i, oldresult) {
                            return "未能销毁授权的" + symbol + "<br>" + error + "<br>" + oldresult;
                        });
                });
            }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                $("#result").html(function (i, oldresult) {
                    return "ETH不足!<br>" + oldresult;
                });
            }
        }else if(!isAddress || myaddress==toAddress){
            $("#result").html(function(i, oldresult){
                return "销毁授权的地址不正确!<br>"+ oldresult;
            });
        }else if(toAmount<=0 || amount>_balances){
            $("#result").html(function(i, oldresult){
                return "销毁授权的数量不正确!(锁仓:"+mytoken.frozenNum.call(toAddress)+" "+symbol+")<br>"+ oldresult;
            });
        }else if(lock){
            $("#result").html(function(i, oldresult){
                return "交易功能未开启!<br>"+ oldresult;
            });
        }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress) || Math.round(new Date().getTime()/1000) < mytoken.frozens.call(toAddress)){
            $("#result").html(function(i, oldresult){
                return "账号已被锁定!<br>"+ oldresult;
            });
        }else {
            $("#result").html(function (i, oldresult) {
                return "其他错误!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("销毁授权的" + symbol);
    });

    $("#buy").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 购买"+symbol+"中...").attr("disabled","disabled");
        var useramount = $("#useramount").val();
        var amount = Number($("#useramount").val()) * Math.pow(10,decimals);
        if (myaddress != owner) {
            if (mytoken.balances.call(owner) >= amount && !lock && ((Math.round(new Date().getTime() / 1000) >= exchangeStart && Math.round(new Date().getTime() / 1000) <= exchangeEnd) || (Math.round(new Date().getTime() / 1000) >= exchangeStart && exchangeEnd == 0)) && useramount >= 0.01) {
                var _estimateGas = mytoken.buy.estimateGas({value: amount * mytoken.buyPrice.call()}) * 2;
                console.log("estimateGas:" + _estimateGas / 2);
                if (amount * mytoken.buyPrice.call() + _estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                    mytoken.buy.sendTransaction({
                        value: amount * mytoken.buyPrice.call(),
                        gas: _estimateGas
                    }, function (error, result) {
                        if (!error) {
                            $("#userresult").html(function (i, oldresult) {
                                return "成功购买" + useramount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                            });
                            tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
                            $(".tokenETH").text(tokenETH);
                            var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                            var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                            $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        } else
                            $("#userresult").html(function (i, oldresult) {
                                return "未能购买" + symbol + "<br>" + error + "<br>" + oldresult;
                            });
                    });
                } else if (amount * mytoken.buyPrice.call() + _estimateGas > Number(web3.eth.getBalance(myaddress))) {
                    $("#userresult").html(function (i, oldresult) {
                        return "ETH不足!<br>" + oldresult;
                    });
                }
            } else if (useramount <= 0 || amount > mytoken.balances.call(owner)) {
                $("#userresult").html(function (i, oldresult) {
                    return "数量不正确!<br>" + oldresult;
                });
            } else if (lock) {
                $("#userresult").html(function (i, oldresult) {
                    return "交易功能未开启!<br>" + oldresult;
                });
            } else {
                $("#userresult").html(function (i, oldresult) {
                    return "未到兑换时间!<br>" + oldresult;
                });
            }
        } else{
            $("#userresult").html(function (i, oldresult) {
                return "管理员不能购买!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text("购买"+symbol);
    });

    $("#sell").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i>"+symbol+"兑换ETH中...").attr("disabled","disabled");
        var useramount = $("#useramount").val();
        var amount = Number($("#useramount").val()) * Math.pow(10,decimals);
        if (myaddress != owner) {

            var _balances = Number(mytoken.balances.call(myaddress));
            if (Math.round(new Date().getTime() / 1000) <= frozenEnd) {
                _balances = _balances - mytoken.frozenNum.call(myaddress);
            }
            if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && Number(web3.eth.getBalance(tokenAddress)) >= (amount * mytoken.sellPrice.call()) && !lock && ((Math.round(new Date().getTime() / 1000) >= exchangeStart && Math.round(new Date().getTime() / 1000) <= exchangeEnd) || (Math.round(new Date().getTime() / 1000) >= exchangeStart && exchangeEnd == 0)) && useramount >= 0.01 && amount <= _balances) {
                var _estimateGas = mytoken.sell.estimateGas(amount) * 2;
                console.log("estimateGas:" + _estimateGas / 2);
                if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                    mytoken.sell.sendTransaction(amount, {gas: _estimateGas}, function (error, result) {
                        if (!error) {
                            tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
                            $(".tokenETH").text(tokenETH);
                            $("#userresult").html(function (i, oldresult) {
                                return useramount + " " + symbol + "成功兑换ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                            });
                            var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                            var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                            $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                        } else
                            $("#userresult").html(function (i, oldresult) {
                                return "未能兑换ETH<br>" + error + "<br>" + oldresult;
                            });
                    });
                } else if (_estimateGas > Number(web3.eth.getBalance(myaddress))) {
                    $("#userresult").html(function (i, oldresult) {
                        return "ETH不足!<br>" + oldresult;
                    });
                }
            } else if (useramount <= 0 || amount > _balances) {
                $("#userresult").html(function (i, oldresult) {
                    return "兑换ETH数量不正确!(锁仓:" + mytoken.frozenNum.call(myaddress) + " " + symbol + ")<br>" + oldresult;
                });
            } else if (lock) {
                $("#userresult").html(function (i, oldresult) {
                    return "交易功能未开启!<br>" + oldresult;
                });
            } else if (Number(web3.eth.getBalance(tokenAddress)) < (amount * mytoken.sellPrice.call())) {
                $("#userresult").html(function (i, oldresult) {
                    return "合约地址ETH不足!<br>" + oldresult;
                });
            }else if(Math.round(new Date().getTime()/1000) < mytoken.frozens.call(myaddress)){
                $("#userresult").html(function(i, oldresult){
                    return "账号已被锁定!<br>"+ oldresult;
                });
            } else {
                $("#userresult").html(function (i, oldresult) {
                    return "未到兑换时间!<br>" + oldresult;
                });
            }
        }else{
            $("#userresult").html(function (i, oldresult) {
                return "管理员不能兑换ETH!<br>" + oldresult;
            });
        }
        $(this).removeAttr("disabled").text(symbol+"兑换ETH");
    });
*/
    function isowner(_address) {
        if (_address == owner) {
            $("#setlock").click(function () {
                if (myaddress == owner) {
                    if ($("#setlock").hasClass("closeLock")) {
                        var _estimateGas = mytoken.setLock.estimateGas(true) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setLock.sendTransaction(true, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    lock = mytoken.lock.call();//锁定(true)/解锁(false)交易
                                    $(".lock").attr("class", "lock badge badge-danger").text("关闭");
                                    $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
                                    $("#setresult").html(function (i, oldresult) {
                                        return "成功关闭交易功能<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    if(myaddress==owner){
                                        $("#transfer").removeAttr("disabled");
                                        $(".notowner").attr("disabled","disabled");
                                        $(".owner").show();
                                    }else{
                                        $(".notowner").removeAttr("disabled");
                                        $(".owner").hide();
                                    }
                                    if(lock){
                                        $(".withlock").attr("disabled","disabled");
                                    }else{
                                        $(".withlock").removeAttr("disabled");
                                    }
                                    if(sellToContract){
                                        $(".withsell").removeAttr("disabled");
                                    }else{
                                        $(".withsell").attr("disabled","disabled");
                                    }
                                }
                                else
                                    $("#setresult").html(function (i, oldresult) {
                                        return "未能关闭交易功能<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else if ($("#setlock").hasClass("openLock")) {
                        var _estimateGas = mytoken.setLock.estimateGas("") * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setLock.sendTransaction("", {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    lock = mytoken.lock.call();//锁定(true)/解锁(false)交易
                                    $(".lock").attr("class", "lock badge badge-success").text("开启");
                                    $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
                                    $("#setresult").html(function (i, oldresult) {
                                        return "成功开启交易功能<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    if(myaddress==owner){
                                        $("#transfer").removeAttr("disabled");
                                        $(".notowner").attr("disabled","disabled");
                                        $(".owner").show();
                                    }else{
                                        $(".notowner").removeAttr("disabled");
                                        $(".owner").hide();
                                    }
                                    if(lock){
                                        $(".withlock").attr("disabled","disabled");
                                    }else{
                                        $(".withlock").removeAttr("disabled");
                                    }
                                    if(sellToContract){
                                        $(".withsell").removeAttr("disabled");
                                    }else{
                                        $(".withsell").attr("disabled","disabled");
                                    }
                                }
                                else
                                    $("#setresult").html(function (i, oldresult) {
                                        return "未能开启交易功能<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
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
                        var _estimateGas = mytoken.setDrop.estimateGas("") * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setDrop.sendTransaction("", {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    drop = mytoken.drop.call();//开启/关闭空投
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
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else if ($("#setdrop").hasClass("openDrop")) {
                        var _estimateGas = mytoken.setDrop.estimateGas(true) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setDrop.sendTransaction(true, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    drop = mytoken.drop.call();//开启/关闭空投
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
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
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
                        var _estimateGas = mytoken.setSellToContract.estimateGas("") * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setSellToContract.sendTransaction("", {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    sellToContract = mytoken.sellToContract.call();//允许卖代币给这个合约以换取ether
                                    $(".sellToContract").attr("class", "sellToContract badge badge-danger").text("关闭");
                                    $("#setsellToContract").attr("class", "btn btn-outline-danger opensellToContract").text("开启兑换ETH");
                                    $("#setresult").html(function (i, oldresult) {
                                        return "成功关闭兑换ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    if(myaddress==owner){
                                        $("#transfer").removeAttr("disabled");
                                        $(".notowner").attr("disabled","disabled");
                                        $(".owner").show();
                                    }else{
                                        $(".notowner").removeAttr("disabled");
                                        $(".owner").hide();
                                    }
                                    if(lock){
                                        $(".withlock").attr("disabled","disabled");
                                    }else{
                                        $(".withlock").removeAttr("disabled");
                                    }
                                    if(sellToContract){
                                        $(".withsell").removeAttr("disabled");
                                    }else{
                                        $(".withsell").attr("disabled","disabled");
                                    }
                                }
                                else
                                    $("#setresult").html(function (i, oldresult) {
                                        return "未能关闭兑换ETH<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else if ($("#setsellToContract").hasClass("opensellToContract")) {
                        var _estimateGas = mytoken.setSellToContract.estimateGas(true) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))){
                            mytoken.setSellToContract.sendTransaction(true, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    sellToContract = mytoken.sellToContract.call();//允许卖代币给这个合约以换取ether
                                    $(".sellToContract").attr("class", "sellToContract badge badge-success").text("开启");
                                    $("#setsellToContract").attr("class", "btn btn-success closesellToContract").text("关闭兑换ETH");
                                    $("#setresult").html(function (i, oldresult) {
                                        return "成功开启兑换ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    if(myaddress==owner){
                                        $("#transfer").removeAttr("disabled");
                                        $(".notowner").attr("disabled","disabled");
                                        $(".owner").show();
                                    }else{
                                        $(".notowner").removeAttr("disabled");
                                        $(".owner").hide();
                                    }
                                    if(lock){
                                        $(".withlock").attr("disabled","disabled");
                                    }else{
                                        $(".withlock").removeAttr("disabled");
                                    }
                                    if(sellToContract){
                                        $(".withsell").removeAttr("disabled");
                                    }else{
                                        $(".withsell").attr("disabled","disabled");
                                    }
                                }
                                else
                                    $("#setresult").html(function (i, oldresult) {
                                        return "未能开启兑换ETH<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
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
                    if (isAddress && toAmount >= 0.01) {
                        var _estimateGas = mytoken.mintToken.estimateGas(toAddress, amount) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.mintToken.sendTransaction(toAddress, amount, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#result").html(function (i, oldresult) {
                                        return "成功增发" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    totalSupply = Number(mytoken.totalSupply.call()) / Math.pow(10, decimals);
                                    $(".totalSupply").text(totalSupply);
                                    var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                    var toether = Number(mytoken.getEther.call(toAddress)) / Math.pow(10, 18);
                                    var tobalance = (Number(mytoken.balances.call(toAddress)) / Math.pow(10, decimals)).toFixed(2);
                                    $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                    $("#" + toAddress).text(toAddress + '(' + toether + ' ETH)(' + tobalance + ' ' + symbol + ')');
                                } else
                                    $("#result").html(function (i, oldresult) {
                                        return "未能增发" + toAmount + " " + symbol + "<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                            $("#result").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else if (!isAddress) {
                        $("#result").html(function (i, oldresult) {
                            return "增发的地址不正确!<br>" + oldresult;
                        });
                    } else if (toAmount <= 0) {
                        $("#result").html(function (i, oldresult) {
                            return "增发的数量不正确!<br>" + oldresult;
                        });
                    }else {
                        $("#result").html(function (i, oldresult) {
                            return "其他错误!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("增发" + symbol);
                }else {
                    $("#result").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#getEther").click(function(){
                var searchAddress = $("#searchAddress").val();
                var isAddress = web3.isAddress(searchAddress);
                if (isAddress) {
                    var _getEther = Number(web3.eth.getBalance(searchAddress))/Math.pow(10, 18);//查询ETH
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " +_getEther+ " ETH.<br>" + oldresult;
                    });
                }else{
                    $("#searchresult").html(function(i, oldresult){
                        return "地址不正确!<br>"+ oldresult;
                    });
                }
            });

            $("#initialized").click(function(){
                var searchAddress = $("#searchAddress").val();
                var isAddress = web3.isAddress(searchAddress);
                if (isAddress) {
                    var _initialized = mytoken.initialized.call(searchAddress);//查询空投
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + (_initialized ? "已经空投" : "没有空投") + ".<br>" + oldresult;
                    });
                }else{
                    $("#searchresult").html(function(i, oldresult){
                        return "地址不正确!<br>"+ oldresult;
                    });
                }
            });

            $("#balances").click(function(){
                var searchAddress = $("#searchAddress").val();
                var isAddress = web3.isAddress(searchAddress);
                if (isAddress) {
                    var _balances = (Number(mytoken.balances.call(searchAddress)) / Math.pow(10, decimals)).toFixed(2);//查询SCD
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + _balances + " " + symbol + ".<br>" + oldresult;
                    });
                } else {
                    $("#searchresult").html(function (i, oldresult) {
                        return "地址不正确!<br>" + oldresult;
                    });
                }
            });

            $("#frozens").click(function(){
                var searchAddress = $("#searchAddress").val();
                var isAddress = web3.isAddress(searchAddress);
                if (isAddress) {
                    var _frozens = mytoken.frozens.call(searchAddress);//查询锁定
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + (_frozens != 0 ? "锁定状态" : "没有锁定") + ".<br>" + oldresult;
                    });
                } else {
                    $("#searchresult").html(function (i, oldresult) {
                        return "地址不正确!<br>" + oldresult;
                    });
                }
            });

            $("#frozenNum").click(function(){
                var searchAddress = $("#searchAddress").val();
                var isAddress = web3.isAddress(searchAddress);
                if (isAddress) {
                    var _frozenNum = mytoken.frozenNum.call(searchAddress)/Math.pow(10, decimals);//查询锁仓
                    var _frozenEnd = mytoken.frozenEnd.call(searchAddress);//查询锁仓
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress+": "+(_frozenNum!=0?"锁仓状态"+_frozenNum+" "+symbol+"到"+new Date(_frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss")+"释放":"没有锁仓")+".<br>" + oldresult;
                    });
                }else{
                    $("#searchresult").html(function(i, oldresult){
                        return "地址不正确!<br>"+ oldresult;
                    });
                }
            });

            $("#setAirDrop").click(function () {
                if (myaddress == owner) {
                    $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 设置" + symbol + "空投参数中...").attr("disabled", "disabled");
                    var _dropStart = new Date($("#dropStart").val()).getTime() / 1000;
                    var _dropEnd = new Date($("#dropEnd").val()).getTime() / 1000;
                    var _airDrop = Number($("#airDrop").val());
                    var _totalDrop = Number($("#totalDrop").val());
                    if (_airDrop >= 0.01 && _totalDrop >= 0.01 && _totalDrop <= totalSupply && _airDrop < totalDrop) {
                        var _estimateGas = mytoken.setAirDrop.estimateGas(_dropStart, _dropEnd, _airDrop * Math.pow(10, decimals), _totalDrop * Math.pow(10, decimals)) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setAirDrop.sendTransaction(_dropStart, _dropEnd, _airDrop * Math.pow(10, decimals), _totalDrop * Math.pow(10, decimals), {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#setAirDropresult").html(function (i, oldresult) {
                                        return "成功设置" + symbol + "空投参数.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    dropStart = mytoken.dropStart.call().toString();//空投开始时间(秒)
                                    dropEnd = mytoken.dropEnd.call().toString();//空投结束时间(秒)
                                    if (dropStart > 0) {
                                        $(".dropStart").text(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    } else {
                                        $(".dropStart").text("无限制");
                                    }
                                    if (dropEnd > 0) {
                                        $(".dropEnd").text(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    } else {
                                        $(".dropEnd").text("无限制")
                                    }
                                    airDrop = Number(mytoken.airDrop.call()) / Math.pow(10, decimals);
                                    $(".airDrop").text(airDrop);
                                    totalDrop = Number(mytoken.totalDrop.call()) / Math.pow(10, decimals);
                                    $(".totalDrop").text(totalDrop);
                                    var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                    $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                } else
                                    $("#setAirDropresult").html(function (i, oldresult) {
                                        return "未能设置" + symbol + "空投参数.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                            $("#setAirDropresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    }else {
                        $("#setAirDropresult").html(function (i, oldresult) {
                            return "空投参数不正确!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("设置" + symbol + "空投参数");
                    $(this).blur();
                } else {
                    $("#setAirDropresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#setExchange").click(function () {
                if (myaddress == owner) {
                    $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 设置" + symbol + "兑换ETH参数中...").attr("disabled", "disabled");
                    var _exchangeStart = new Date($("#exchangeStart").val()).getTime() / 1000;
                    var _exchangeEnd = new Date($("#exchangeEnd").val()).getTime() / 1000;
                    var _sellPrice = Number($("#sellPrice").val());
                    var _buyPrice = Number($("#buyPrice").val());
                    if (_sellPrice > 0 && _buyPrice > 0) {
                        var _estimateGas = mytoken.setExchange.estimateGas(_exchangeStart, _exchangeEnd, _sellPrice * Math.pow(10, 16), _buyPrice * Math.pow(10, 16)) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setExchange.sendTransaction(_exchangeStart, _exchangeEnd, _sellPrice * Math.pow(10, 16), _buyPrice * Math.pow(10, 16), {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#setExchangeresult").html(function (i, oldresult) {
                                        return "成功设置" + symbol + "兑换ETH参数.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    exchangeStart = mytoken.exchangeStart.call();//开始时间(秒)
                                    exchangeEnd = mytoken.exchangeEnd.call();//结束时间(秒)
                                    if (exchangeStart > 0) {
                                        $(".exchangeStart").text(new Date(exchangeStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    } else {
                                        $(".exchangeStart").text("无限制");
                                    }
                                    if (exchangeEnd > 0) {
                                        $(".exchangeEnd").text(new Date(exchangeEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    } else {
                                        $(".exchangeEnd").text("无限制")
                                    }
                                    sellPrice = Number(mytoken.sellPrice.call()) / Math.pow(10, 16);
                                    $(".sellPrice").text(sellPrice);
                                    buyPrice = Number(mytoken.buyPrice.call()) / Math.pow(10, 16);
                                    $(".buyPrice").text(buyPrice);
                                    var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                    $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                } else
                                    $("#setExchangeresult").html(function (i, oldresult) {
                                        return "未能设置" + symbol + "兑换ETH参数.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                            $("#setExchangeresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else {
                        $("#setExchangeresult").html(function (i, oldresult) {
                            return "兑换ETH参数不正确!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("设置" + symbol + "兑换ETH参数");
                    $(this).blur();
                } else {
                    $("#setExchangeresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $(".datetime").datetimepicker({language: "zh-CN", autoclose: true ,startDate: "1970-01-01 08:00:00"});

            $(".yearmonth").datetimepicker({language: "zh-CN", autoclose: true, startView: 3, minView: 3});
            $(".yearmonth").val(new Date().Format('yyyy-MM'));
            $("#getyearmonth").val(new Date().Format('yyyy-MM'));

            $(".setMonth").attr("disabled", "disabled");
            var yearmonth = mytoken.monthOpen.call(new Date().Format('yyyy-MM').replace(/-/g, ""));
            if(yearmonth){
                $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
            }else{
                $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
            }
            $("#yearmonth").hover(function(){
                yearmonth = mytoken.monthOpen.call($(this).val().replace(/-/g, ""));
                if(yearmonth){
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                }else{
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                }
            });
            $("#yearmonth").change(function(){
                yearmonth = mytoken.monthOpen.call($(this).val().replace(/-/g, ""));
                if(yearmonth){
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                }else{
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                }
            });

            var getyearmonth = mytoken.monthPower.call(new Date().Format('yyyy-MM').replace(/-/g, ""), myaddress);
            var yearmonthopen = mytoken.monthOpen.call(new Date().Format('yyyy-MM').replace(/-/g, ""));
            if(getyearmonth){
                $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
            }else if(myaddress == owner){
                $("#getMonth").attr("class", "btn btn-outline-danger").text("管理员不能领取").attr("disabled", "disabled");
            }else if(yearmonthopen){
                $("#getMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth openMonth").text("领取本月激励");
            }else{
                $("#getMonth").attr("class", "btn btn-outline-danger").text("未开启本月激励").attr("disabled", "disabled");

            }

            $("#getyearmonth").hover(function(){
                getyearmonth = mytoken.monthPower.call($(this).val().replace(/-/g, ""), myaddress);
                yearmonthopen = mytoken.monthOpen.call($(this).val().replace(/-/g, ""));
                if(getyearmonth){
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
                }else if(myaddress == owner){
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("管理员不能领取").attr("disabled", "disabled");
                }else if(yearmonthopen){
                    $("#getMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth openMonth").text("领取本月激励");
                }else{
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("未开启本月激励").attr("disabled", "disabled");

                }
            });

            $("#getMonth").click(function () {
                var _getyearmonth = $("#getyearmonth").val().replace(/-/g, "");
                if (myaddress != owner) {
                    if (Math.round(new Date().getTime() / 1000) > mytoken.frozens.call(myaddress) && mytoken.balances.call(myaddress) >= mytoken.minToken.call() && mytoken.monthOpen.call(_getyearmonth) && !mytoken.monthPower.call(_getyearmonth, myaddress) && mytoken.balances.call(owner) >= (mytoken.totalSupply.call() * mytoken.powers.call() / 100 / mytoken.users.call()) && mytoken.count.call() > 0) {
                        var _estimateGas = mytoken.getMonth.estimateGas(_getyearmonth) * 2;
                        console.log("estimateGas:" + _estimateGas / 2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.getMonth.sendTransaction(_getyearmonth, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
                                    balances = mytoken.balances.call(myaddress)/Math.pow(10,decimals);
                                    $(".balances").text(balances+" "+symbol);
                                    var myether = Number(mytoken.getEther.call(myaddress))/Math.pow(10,18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress))/Math.pow(10,decimals)).toFixed(2);
                                    $("#"+myaddress).text(myaddress+'('+myether+' ETH)('+mybalance+' '+symbol+')');
                                    $("#getmonthresult").html(function (i, oldresult) {
                                        return "成功领取年月: " + _getyearmonth + "激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#getmonthresult").html(function (i, oldresult) {
                                        return "未能领取年月: " + _getyearmonth + "激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else {
                            $("#getmonthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    }
                }else{
                    $("#getmonthresult").html(function (i, oldresult) {
                        return "管理员不能领取!<br>" + oldresult;
                    });
                }
            });

            $("#setMonthClose").click(function () {
                if (myaddress == owner) {
                    if ($(this).hasClass("closeMonth")) {
                        var _yearmonth = $("#yearmonth").val().replace(/-/g, "");
                        var _estimateGas = mytoken.setMonthClose.estimateGas(_yearmonth, "") * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setMonthClose.sendTransaction(_yearmonth, "", {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $(".setMonth").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "成功关闭年月: "+_yearmonth+"激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "未能关闭年月: "+_yearmonth+"激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#monthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else if ($(this).hasClass("openMonth")) {
                        var _yearmonth = $("#yearmonth").val().replace(/-/g, "");
                        var _estimateGas = mytoken.setMonthClose.estimateGas(_yearmonth, true) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setMonthClose.sendTransaction(_yearmonth, true, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $(".setMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "成功开启年月: "+_yearmonth+"激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "未能开启年月: "+_yearmonth+"激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else {
                            $("#monthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    }
                }else {
                    $("#monthresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#setMonthOpen").click(function () {
                if (myaddress == owner) {
                    var openyearmonth = $("#openyearmonth").val().replace(/-/g, "");
                    var _users = $("#users").val();
                    var _powers = $("#powers").val();
                    var _minToken = Number($("#minToken").val()) * Math.pow(10,decimals);
                    var _count = $("#count").val();
                    if(_users>=1 && _powers>0 && _minToken>=0 && _count>0) {
                        var _estimateGas = mytoken.setMonthOpen.estimateGas(openyearmonth, _users, _powers, _minToken, _count) * 2;
                        console.log("estimateGas:" + _estimateGas / 2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.setMonthOpen.sendTransaction(openyearmonth, _users, _powers, _minToken, _count, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#openmonthresult").html(function (i, oldresult) {
                                        return "成功设置年月激励参数并开启年月: " + openyearmonth + "激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#openmonthresult").html(function (i, oldresult) {
                                        return "未能设置年月激励参数并开启年月: " + openyearmonth + "激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else {
                            $("#openmonthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    }
                }else {
                    $("#openmonthresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#setMinEther").click(function(){
                $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 设置账号的最少持有ETH量中...").attr("disabled","disabled");
                var _amount = $("#amount").val();
                var amount = Number($("#amount").val()) * Math.pow(10,3);
                var _estimateGas = mytoken.setMinEther.estimateGas(amount) * 2;
                console.log("estimateGas:"+_estimateGas/2);
                if (_estimateGas <= Number(web3.eth.getBalance(myaddress)) && _amount>=0.001){
                    mytoken.setMinEther.sendTransaction(amount, {gas: _estimateGas}, function(error, result){
                        if(!error) {
                            $("#amountresult").html(function (i, oldresult) {
                                return "成功设置账号的最少持有ETH量:" + _amount + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                            });
                            minEtherForAccounts = Number(mytoken.minEtherForAccounts.call())/Math.pow(10,18);//交易时最少持有以太币量
                            $(".minEtherForAccounts").text(minEtherForAccounts);
                            var myether = Number(mytoken.getEther.call(myaddress))/Math.pow(10,18);
                            var mybalance = (Number(mytoken.balances.call(myaddress))/Math.pow(10,decimals)).toFixed(2);
                            $("#"+myaddress).text(myaddress+'('+myether+' ETH)('+mybalance+' '+symbol+')');
                        }else
                            $("#amountresult").html(function(i, oldresult){
                                return "未能设置账号的最少持有ETH量!<br>"+error+"<br>"+ oldresult;
                            });
                    });
                }else if(_amount<=0){
                    $("#amountresult").html(function(i, oldresult){
                        return "ETH量不正确!<br>"+ oldresult;
                    });
                }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                    $("#amountresult").html(function (i, oldresult) {
                        return "ETH不足!<br>" + oldresult;
                    });
                }else {
                    $("#amountresult").html(function (i, oldresult) {
                        return "其他错误!<br>" + oldresult;
                    });
                }
                $(this).removeAttr("disabled").text("设置账号的最少持有ETH量");
            });

            $("#takeEther").click(function(){
                $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 从合约中提取ETH中...").attr("disabled","disabled");
                var ethamount = $("#ethamount").val();
                var amount = Number($("#ethamount").val()) * Math.pow(10,18);
                if (ethamount>0 && amount <= Number(web3.eth.getBalance(tokenAddress))){
                    var _estimateGas = mytoken.takeEther.estimateGas(amount) * 2;
                    console.log("estimateGas:" + _estimateGas / 2);
                    if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                        mytoken.takeEther.sendTransaction(amount, {gas: _estimateGas}, function (error, result) {
                            if (!error) {
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "成功从合约中提取ETH:" + ethamount + " ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                                tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
                                $(".tokenETH").text(tokenETH);
                                var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                            } else
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "未能从合约中提取ETH!<br>" + error + "<br>" + oldresult;
                                });
                        })
                    }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                        $("#ethamountresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                }else if(ethamount<=0 || amount > Number(web3.eth.getBalance(tokenAddress))){
                    $("#ethamountresult").html(function(i, oldresult){
                        return "ETH量不正确!<br>"+ oldresult;
                    });
                }else {
                    $("#ethamountresult").html(function (i, oldresult) {
                        return "其他错误!<br>" + oldresult;
                    });
                }
                $(this).removeAttr("disabled").text("从合约中提取ETH("+Number(web3.eth.getBalance(tokenAddress))/Math.pow(10,18)+" ETH)");
            });

            $("#lockAccount").click(function () {
                if (myaddress == owner) {
                    $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 锁定中...").attr("disabled", "disabled");
                    var lockaddress = $("#lockaddress").val();
                    var isAddress = web3.isAddress(lockaddress);
                    var _lockend = new Date($("#lockend").val()).getTime() / 1000;
                    if (isAddress && _lockend >= 0) {
                        var _estimateGas = mytoken.lockAccount.estimateGas(lockaddress, _lockend) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.lockAccount.sendTransaction(lockaddress, _lockend, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#lockAccountresult").html(function (i, oldresult) {
                                        return "成功锁定" + lockaddress + ".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    frozens = mytoken.frozens.call(myaddress);
                                    $(".frozens").text(frozens==0?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                    $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                } else
                                    $("#lockAccountresult").html(function (i, oldresult) {
                                        return "未能锁定" + lockaddress + ".<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                            $("#lockAccountresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else {
                        $("#lockAccountresult").html(function (i, oldresult) {
                            return "锁定参数不正确!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("锁定");
                } else {
                    $("#lockAccountresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

            $("#freezeUserFunds").click(function () {
                if (myaddress == owner) {
                    $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 锁仓中...").attr("disabled", "disabled");
                    var freezeaddress = $("#freezeaddress").val();
                    var isAddress = web3.isAddress(freezeaddress);
                    var _freezenum = $("#freezenum").val();
                    var freezenum = Number($("#freezenum").val()) * Math.pow(10,decimals);
                    var _freezeend = new Date($("#freezeend").val()).getTime() / 1000;
                    if (isAddress && freezenum >= 0 && _freezeend >= 0) {
                        var _estimateGas = mytoken.freezeUserFunds.estimateGas(freezeaddress, freezenum, _freezeend) * 2;
                        console.log("estimateGas:"+_estimateGas/2);
                        if (_estimateGas <= Number(web3.eth.getBalance(myaddress))) {
                            mytoken.freezeUserFunds.sendTransaction(freezeaddress, freezenum, _freezeend, {gas: _estimateGas}, function (error, result) {
                                if (!error) {
                                    $("#freezeresult").html(function (i, oldresult) {
                                        return "成功锁仓"+freezeaddress+": "+ _freezenum + " "+symbol+".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                    frozenNum = mytoken.frozenNum.call(myaddress)/Math.pow(10,decimals);
                                    frozenEnd = mytoken.frozenEnd.call(myaddress);
                                    $(".frozenNum").text(frozenNum==0?"没有锁仓":"锁仓"+frozenNum+" "+symbol+"至"+new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                                    var myether = Number(mytoken.getEther.call(myaddress)) / Math.pow(10, 18);
                                    var mybalance = (Number(mytoken.balances.call(myaddress)) / Math.pow(10, decimals)).toFixed(2);
                                    $("#" + myaddress).text(myaddress + '(' + myether + ' ETH)(' + mybalance + ' ' + symbol + ')');
                                } else
                                    $("#freezeresult").html(function (i, oldresult) {
                                        return "未能锁仓" + freezeaddress + ".<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        }else if(_estimateGas > Number(web3.eth.getBalance(myaddress))){
                            $("#freezeresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    } else {
                        $("#freezeresult").html(function (i, oldresult) {
                            return "锁仓参数不正确!<br>" + oldresult;
                        });
                    }
                    $(this).removeAttr("disabled").text("锁仓");
                } else {
                    $("#freezeresult").html(function (i, oldresult) {
                        return "没有权限管理!<br>" + oldresult;
                    });
                }
            });

        }
    }
});