$(document).ready(function(){
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
        window.web3 = new Web3(web3.currentProvider);
        if(web3.eth.coinbase==null){
            console.log("node not login!");
            window.location.href = "./index.html";
        }else{
            console.log("node login!"+web3.eth.coinbase);
        }
    } else {
        console.log('No Web3 Detected... using HTTP Provider');
        window.location.href = "./index.html";
    }
    var connected = web3.isConnected();
    if(!connected){
        console.log("node not connected!");
        window.location.href = "./index.html";
    }else{
        console.log("node connected");
    }
    var url = window.location.href;
    var token = url.split("?");
    var tokenAddress = token[token.length-1];
    console.log(tokenAddress);
    var abi = [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"giveEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"currentDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_value","type":"bool"}],"name":"setMonthClose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_powers","type":"uint8"},{"name":"_minToken","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"setMonthOpen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"monthPower","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeMyFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lock","type":"bool"}],"name":"setLock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_buyPrice","type":"uint256"}],"name":"setExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powers","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeUserFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_balance","type":"uint256"}],"name":"takeEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_open","type":"bool"}],"name":"setDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"}],"name":"getMonth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_lockEnd","type":"uint256"}],"name":"lockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monthOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"existing","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dropStart","type":"uint256"},{"name":"_dropEnd","type":"uint256"},{"name":"_airDrop","type":"uint256"},{"name":"_totalDrop","type":"uint256"}],"name":"setAirDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"centralMinter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"},{"indexed":false,"name":"fronzeEnd","type":"uint256"}],"name":"FrozenMyFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];

    var links = {
        'Mainnet': 'https://www.etherscan.io/',
        'Rinkeby': 'https://rinkeby.etherscan.io/',
        'Ropsten': 'https://ropsten.etherscan.io/',
        'Kovan': 'https://kovan.etherscan.io/'
    };
    var txlinks = {
        'Mainnet': 'https://www.etherscan.io/tx/',
        'Rinkeby': 'https://rinkeby.etherscan.io/tx/',
        'Ropsten': 'https://ropsten.etherscan.io/tx/',
        'Kovan': 'https://kovan.etherscan.io/tx/'
    };
    var netId = web3.version.network;
    var network;
    switch (netId) {
        case "1":
            network = "Mainnet";
            console.log('This is mainnet');
            break;
        case "2":
            network = "Deprecated Morden";
            console.log('This is the deprecated Morden test network.');
            break;
        case "3":
            network = "Ropsten";
            console.log('This is the Ropsten test network.');
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
            network = "Test";
            console.log('This is an unknown network.');
    }
    $(".network").html("<a class='badge badge-success' target='_blank' href='"+links[network]+"address/"+tokenAddress+"'>"+network+"</a>");

    var txurl = txlinks[network];

    var version = web3.version.api;
    $(".version").text(version);
    var node = new Promise(function (resolve, reject){web3.version.getNode(function(err, result){
        if(!err) {
            node = result;
            resolve(node);
        }else{
            console.error(err);
        }
    });});
    var ethereum = new Promise(function (resolve, reject){web3.version.getEthereum(function(err, result){
        if(!err){
            ethereum = result;
            resolve(ethereum);
        }else{
            console.error(err);
        }
    });});

    var gasPrice = new Promise(function (resolve, reject){web3.eth.getGasPrice(function(err, result){
        if(!err){
            gasPrice = web3.fromWei(result).toFixed();
            resolve(gasPrice);
        }else{
            console.error(err);
        }
    });});

    $(".tokenAddress").text(tokenAddress);
    var mytokenContract = web3.eth.contract(abi);
    var mytoken = mytokenContract.at(tokenAddress);

    function getEth(_address) {
        var geteth = new Promise(function (resolve, reject){web3.eth.getBalance(_address, function(err, result){
            if(!err){
                geteth = result;
                resolve(geteth);
            }else{
                console.error(err);
            }
        });});
        return geteth;
    }

    var tokenETH = getEth(tokenAddress).then(function(data){
        tokenETH = Number(data)/Math.pow(10,18);
        return tokenETH;
    });

    var name = new Promise(function (resolve, reject){mytoken.name.call(function(err, result){
        if(!err){
            name = result;
            resolve(name);
        }else{
            console.error(err);
        }
    });});//名字
    var symbol = new Promise(function (resolve, reject){mytoken.symbol.call(function(err, result){
        if(!err){
            symbol = result;
            resolve(symbol);
        }else{
            console.error(err);
        }
    });});//代号
    var decimals = new Promise(function (resolve, reject){mytoken.decimals.call(function(err, result){
        if(!err){
            decimals = result;
            resolve(decimals);
        }else{
            console.error(err);
        }
    });});//小数点后位数
    var totalSupply = new Promise(function (resolve, reject){mytoken.totalSupply.call(function(err, result){
        if(!err){
            totalSupply = Number(result)/Math.pow(10,decimals);//总发行量;
            resolve(totalSupply);
        }else{
            console.error(err);
        }
    });});

    var buyPrice = new Promise(function (resolve, reject){mytoken.buyPrice.call(function(err, result){
        if(!err){
            buyPrice = Number(result) * Math.pow(10,decimals)/Math.pow(10,18);
            resolve(buyPrice);
        }else{
            console.error(err);
        }
    });});//买入价格

    var drop = new Promise(function (resolve, reject){mytoken.drop.call(function(err, result){
        if(!err){
            drop = result;
            resolve(drop);
        }else{
            console.error(err);
        }
    });});//开启/关闭空投
    var airDrop = new Promise(function (resolve, reject){mytoken.airDrop.call(function(err, result){
        if(!err){
            airDrop = Number(result)/Math.pow(10,decimals);
            resolve(airDrop);
        }else{
            console.error(err);
        }
    });});//单账户空投数量
    var currentDrop = new Promise(function (resolve, reject){mytoken.currentDrop.call(function(err, result){
        if(!err){
            currentDrop = Number(result)/Math.pow(10,decimals);
            resolve(currentDrop);
        }else{
            console.error(err);
        }
    });});//当前空投量
    var totalDrop = new Promise(function (resolve, reject){mytoken.totalDrop.call(function(err, result){
        if(!err){
            totalDrop = Number(result)/Math.pow(10,decimals);
            resolve(totalDrop);
        }else{
            console.error(err);
        }
    });});//空投总量
    var dropStart = new Promise(function (resolve, reject){mytoken.dropStart.call(function(err, result){
        if(!err){
            dropStart = result;
            resolve(dropStart);
        }else{
            console.error(err);
        }
    });});//空投开始时间(秒)
    var dropEnd = new Promise(function (resolve, reject){mytoken.dropEnd.call(function(err, result){
        if(!err){
            dropEnd = result;
            resolve(dropEnd);
        }else{
            console.error(err);
        }
    });});//空投结束时间(秒)

    var powers = new Promise(function (resolve, reject){mytoken.powers.call(function(err, result){
        if(!err){
            powers = result;
            resolve(powers);
        }else{
            console.error(err);
        }
    });});//每月持币激励百分比
    var users = new Promise(function (resolve, reject){mytoken.users.call(function(err, result){
        if(!err){
            users = result;
            resolve(users);
        }else{
            console.error(err);
        }
    });});//持币的人数(即每月激励中加权平均的基数)
    var minToken = new Promise(function (resolve, reject){mytoken.minToken.call(function(err, result){
        if(!err){
            minToken = Number(result)/Math.pow(10,decimals);
            resolve(minToken);
        }else{
            console.error(err);
        }
    });});//领取每月激励的账户最少持有代币量
    var count = new Promise(function (resolve, reject){mytoken.count.call(function(err, result){
        if(!err){
            count = result;
            resolve(count);
        }else{
            console.error(err);
        }
    });});//可以领取激励的人数

    var lock = new Promise(function (resolve, reject){mytoken.lock.call(function(err, result){
        if(!err){
            lock = result;
            resolve(lock);
        }else{
            console.error(err);
        }
    });});//锁定(true)/解锁(false)交易

    web3.eth.defaultAccount = web3.eth.coinbase;
    var myaddress = web3.eth.defaultAccount;
    console.log("myaddress:"+myaddress);

    function getInitialized(_address) {
        var initialize = new Promise(function (resolve, reject){mytoken.initialized.call(_address, function(err, result){
            if(!err){
                initialize = result;
                resolve(initialize);
            }else{
                console.error(err);
            }
        });});
        return initialize;
    }

    var initialized = getInitialized(myaddress).then(function(data){
        initialized = data;
        return initialized;
    });

    function getBalances(_address) {
        var getbalances = new Promise(function (resolve, reject){mytoken.balanceOf.call(_address, function(err, result){
            if(!err){
                getbalances = result;
                resolve(getbalances);
            }else{
                console.error(err);
            }
        });});
        return getbalances;
    }

    var balances = getBalances(myaddress).then(function(data){
        balances = data/Math.pow(10,decimals);
        return balances;
    });

    function getFrozens(_address) {
        var getfrozens = new Promise(function (resolve, reject) {mytoken.frozens.call(_address, function (err, result) {
            if (!err) {
                getfrozens = result;
                resolve(getfrozens);
            } else {
                console.error(err);
            }
        });
        });
        return getfrozens;
    }

    var frozens = getFrozens(myaddress).then(function(data){
        frozens = data;
        return frozens;
    });

    function getFrozenEnd(_address) {
        var getfrozenEnd = new Promise(function (resolve, reject) {
            mytoken.frozenEnd.call(_address, function (err, result) {
                if (!err) {
                    getfrozenEnd = result;
                    resolve(getfrozenEnd);
                } else {
                    console.error(err);
                }
            });
        });
        return getfrozenEnd;
    }

    var frozenEnd = getFrozenEnd(myaddress).then(function(data){
        frozenEnd = data;
        return frozenEnd;
    });

    function getFrozenNum(_address) {
        var getfrozenNum = new Promise(function (resolve, reject) {
            mytoken.frozenNum.call(_address, function (err, result) {
                if (!err) {
                    getfrozenNum = result;
                    resolve(getfrozenNum);
                } else {
                    console.error(err);
                }
            });
        });
        return getfrozenNum;
    }

    var frozenNum = getFrozenNum(myaddress).then(function(data){
        frozenNum = data/ Math.pow(10, decimals);
        return frozenNum;
    });

    var owner = new Promise(function (resolve, reject){
        mytoken.owner.call(function(err, result){
            if(!err){
                owner = result;
                console.log("owner:"+owner);
                resolve(owner);
            }else{
                console.error(err);
            }
        });});

    var myeth = getEth(myaddress).then(function(data){
        myeth = Number(data)/Math.pow(10, 18);
        return myeth;
    });


    Promise.all([node, ethereum, gasPrice, tokenETH, name, symbol, decimals, totalSupply, buyPrice, drop, airDrop, currentDrop, totalDrop, dropStart, dropEnd, powers, users, minToken, count, lock, initialized, balances, frozens, frozenEnd, frozenNum, owner, myeth]).then(function(values){
        console.log(JSON.stringify(values));

        $(".node").text(node);
        $(".ethereum").text(ethereum);
        $(".gasPrice").text(gasPrice);
        $(".tokenETH").text(tokenETH);
        $(".name").html("<a target='_blank' href='"+links[network]+"address/"+tokenAddress+"'>"+name+"("+symbol+")</a>");
        $(".symbol").text(symbol);
        $(".totalSupply").text(totalSupply);

         $(".buyPrice").text(buyPrice);
        $("#buyPrice").val(buyPrice);
        if(drop){
            $(".drop").attr("class", "drop badge badge-success").text("开启");
            $("#setdrop").attr("class", "btn btn-success closeDrop").text("关闭空投");
        }else{
            $(".drop").attr("class", "drop badge badge-danger").text("关闭");
            $("#setdrop").attr("class", "btn btn-outline-danger openDrop").text("开启空投");
        }
        $(".airDrop").text(airDrop);
        $("#airDrop").val(airDrop);
        $(".currentDrop").text(currentDrop);
        $(".totalDrop").text(totalDrop);
        $("#totalDrop").val(totalDrop);
        if(dropStart > 0){
            $(".dropStart").text(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#dropStart").val(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".dropStart").text("无限制");
        }
        if(dropEnd > 0){
            $(".dropEnd").text(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            $("#dropEnd").val(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        }else{
            $(".dropEnd").text("无限制")
        }
        $(".powers").text(powers);
        $("#powers").val(powers);
        $(".users").text(users);
        $("#users").val(users);
        $(".minToken").text(minToken);
        $("#minToken").val(minToken);
        $(".count").text(count);
        $("#count").val(count);

        $(".initialized").text(initialized?"已经空投":"没有空投");
        $(".balances").text(balances+" "+symbol);
        var nowsecond = Math.round(new Date().getTime()/1000);
        $(".frozens").text(nowsecond > frozens ? "没有锁定" : "锁定至" + new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        $(".frozenNum").text(frozenNum == 0 ? "没有锁仓" : "锁仓" + frozenNum + " " + symbol + "至" + new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
        if(myaddress==owner){
            $("#transfer").removeAttr("disabled");
            $(".notowner").attr("disabled","disabled");
            $(".owner").show();
        }else{
            $(".notowner").removeAttr("disabled");
            $(".owner").hide();
        }

        if(lock){
            $(".lock").attr("class", "lock badge badge-danger").text("关闭");
            $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
            $(".withlock").attr("disabled","disabled");
        }else{
            $(".lock").attr("class", "lock badge badge-success").text("开启");
            $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
        }


        $(".eth").text(myeth+" ETH");

        var accounts = web3.eth.accounts;
        console.log(accounts);

        for (var i = 0, len = accounts.length; i < len; i++){
            var account = accounts[i];
            var _accountether = getEth(account).then(function(data){
                _accountether = Number(data)/Math.pow(10,18);
                var _balanceOf = getBalances(account).then(function(data2){
                    _balanceOf = (Number(data2)/Math.pow(10,decimals)).toFixed(decimals);
                    $("#accountId").append('<option id="'+account+'" value="'+account+'">'+account+'('+_accountether+' ETH)('+_balanceOf+' '+symbol+')</option>');
                });
            });
        }

        $("#" + myaddress).attr("selected", "selected");
        $(".monthtoken").text((totalSupply * powers / 100 / users).toFixed(decimals));

        var accountInterval = setInterval(function() {
            if (web3.eth.accounts[0] !== accounts[0]) {
                window.location.reload();
                /*web3.eth.defaultAccount = web3.eth.coinbase;
                accounts = web3.eth.accounts;
                $("#accountId").children().remove();
                for (var i = 0, len = accounts.length; i < len; i++){
                    var account = accounts[i];
                    var _accountether = getEth(account).then(function(data){
                        _accountether = Number(data)/Math.pow(10,18);
                        var _balanceOf = getBalances(account).then(function(data2){
                            _balanceOf = (Number(data2)/Math.pow(10,decimals)).toFixed(2);
                            $("#accountId").append('<option id="'+account+'" value="'+account+'">'+account+'('+_accountether+' ETH)('+_balanceOf+' '+symbol+')</option>');
                        });
                    });
                }

                myaddress = web3.eth.defaultAccount;

                myeth = getEth(myaddress).then(function(data){
                    myeth = Number(data)/Math.pow(10, 18);
                    return myeth;
                });

                initialized = getInitialized(myaddress).then(function(data){
                    initialized = data;
                    return initialized;
                });

                balances = getBalances(myaddress).then(function(data){
                    balances = data/Math.pow(10,decimals);
                    return balances;
                });

                frozens = getFrozens(myaddress).then(function(data){
                    frozens = data;
                    return frozens;
                });

                frozenEnd = getFrozenEnd(myaddress).then(function(data){
                    frozenEnd = data;
                    return frozenEnd;
                });

                frozenNum = getFrozenNum(myaddress).then(function(data){
                    frozenNum = data/ Math.pow(10, decimals);
                    return frozenNum;
                });

                Promise.all([myeth, initialized, balances, frozens, frozenEnd, frozenNum]).then(function (values) {
                    console.log(JSON.stringify(values));
                    $(".eth").text(myeth+" ETH");
                    $(".initialized").text(initialized?"已经空投":"没有空投");
                    $(".balances").text(balances+" "+symbol);
                    var nowsecond = Math.round(new Date().getTime()/1000);
                    $(".frozens").text(nowsecond > frozens?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
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
                });*/

            }
        }, 5000);

        $("#accountId").change(function() {
            web3.eth.defaultAccount = $("#accountId").val();
            myaddress = web3.eth.defaultAccount;

            myeth = getEth(myaddress).then(function(data){
                myeth = Number(data)/Math.pow(10, 18);
                return myeth;
            });

            initialized = getInitialized(myaddress).then(function(data){
                initialized = data;
                return initialized;
            });

            balances = getBalances(myaddress).then(function(data){
                balances = data/Math.pow(10,decimals);
                return balances;
            });

            frozens = getFrozens(myaddress).then(function(data){
                frozens = data;
                return frozens;
            });

            frozenEnd = getFrozenEnd(myaddress).then(function(data){
                frozenEnd = data;
                return frozenEnd;
            });

            frozenNum = getFrozenNum(myaddress).then(function(data){
                frozenNum = data/ Math.pow(10, decimals);
                return frozenNum;
            });

            Promise.all([myeth, initialized, balances, frozens, frozenEnd, frozenNum]).then(function (values) {
                console.log(JSON.stringify(values));
                $(".eth").text(myeth+" ETH");
                $(".initialized").text(initialized?"已经空投":"没有空投");
                $(".balances").text(balances+" "+symbol);
                var nowsecond = Math.round(new Date().getTime()/1000);
                $(".frozens").text(nowsecond > frozens?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
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
            });
        });

        /*
        var filter = web3.eth.filter(transactionHash);
        filter.watch(function(error, result){
            if (!error) {
                console.log(result);
            }
        });
        var myResults = filter.get(function(error, logs){
            if (!error) {
                if(logs.transactionIndex);
            }
        });

        function sleep(d){
            for(var t = Date.now();Date.now() - t <= d;){}
        }*/

        $("#giveOwner").click(function(){
            $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 转移管理权限中...").attr("disabled","disabled");
            var searchAddress = $("#searchAddress").val();
            var isAddress = web3.isAddress(searchAddress);
            if (isAddress){
                var _estimateGas = new Promise(function (resolve, reject){
                    mytoken.transferOwnership.estimateGas(searchAddress, function(err, result){
                        if(!err) {
                            _estimateGas = result;
                            resolve(_estimateGas);
                            console.log("estimateGas:" + _estimateGas);
                        }else{
                            console.error(err);
                        }
                    });
                });
                Promise.all([_estimateGas]).then(function(value){
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.transferOwnership.sendTransaction(searchAddress, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
                            if (!error) {
                                $("#searchresult").html(function (i, oldresult) {
                                    return "成功转移管理权限.<br>订单号:" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            } else
                                $("#searchresult").html(function (i, oldresult) {
                                    return "未能转移管理权限!<br>" + error + "<br>" + oldresult;
                                });
                        })
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
                        $("#searchresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                });
            }else if(!isAddress){
                $("#searchresult").html(function(i, oldresult){
                    return "地址不正确!<br>"+ oldresult;
                });
            }else {
                $("#searchresult").html(function (i, oldresult) {
                    return "其他错误!<br>" + oldresult;
                });
            }
            $(this).removeAttr("disabled").text("转移管理权限");
        });

        $("#giveEther").click(function(){
            $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 给合约地址发ETH中...").attr("disabled","disabled");
            var ethamount = $("#ethamount").val();
            var amount = Number($("#ethamount").val()) * Math.pow(10,18);
            if (ethamount>=0 && amount <= (myeth * Math.pow(10, 18))){
                var _estimateGas = new Promise(function (resolve, reject){
                    mytoken.giveEther.estimateGas({value: amount}, function(err, result){
                        if(!err) {
                            _estimateGas = result;
                            resolve(_estimateGas);
                            console.log("estimateGas:" + _estimateGas);
                        }else{
                            console.error(err);
                        }
                    });
                });
                Promise.all([_estimateGas]).then(function(value){
                    if ((_estimateGas + amount) <= myeth * Math.pow(10, 18)) {
                        mytoken.giveEther.sendTransaction({value: amount, gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
                            if (!error) {
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "成功给合约地址发ETH:" + ethamount + " ETH<br>订单号:" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                                /*var filter = web3.eth.filter(result);
                                // filter.watch(function(error, result){
                                //     if (!error) {
                                //         console.log("1start");
                                //         console.log(result);
                                //         console.log("1end");
                                //     }
                                // });
                                filter.get(function(error, result){
                                    if (!error) {
                                        console.log("2start");
                                        console.log(result);
                                        console.log("2end");
                                    }
                                });*/

                            } else
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "未能给合约地址发ETH!<br>" + error + "<br>" + oldresult;
                                });
                        })
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
                        $("#ethamountresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                });
            }else if(ethamount<=0 || amount > (myeth * Math.pow(10, 18))){
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
                var _estimateGas = new Promise(function (resolve, reject){mytoken.freezeMyFunds.estimateGas(userfreezenum, _userfreezeend, function(err, result){
                    if(!err) {
                        _estimateGas = result;
                        resolve(_estimateGas);
                        console.log("estimateGas:" + _estimateGas);
                    }else{
                        console.error(err);
                    }
                })});
                Promise.all([_estimateGas]).then(function(value) {
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.freezeMyFunds.sendTransaction(userfreezenum, _userfreezeend, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
                            if (!error) {
                                $("#userfreezeresult").html(function (i, oldresult) {
                                    return "成功锁仓" + myaddress + ": " + _userfreezenum + " " + symbol + ".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            } else
                                $("#userfreezeresult").html(function (i, oldresult) {
                                    return "未能锁仓" + userfreezenum + ".<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                        $("#userfreezeresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                });
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
            var amount = Number($("#toAmount").val()) * Math.pow(10, decimals);

            var _balances = balances * Math.pow(10, decimals);
            var nowsecond = Math.round(new Date().getTime()/1000);
            if (nowsecond <= frozenEnd) {
                _balances = _balances - (frozenNum * Math.pow(10, decimals));
            }

            var frozenstoAddress = getFrozens(toAddress).then(function(data){
                frozenstoAddress = data;
                return frozenstoAddress;
            });

            Promise.all([frozenstoAddress]).then(function(value) {
                if (nowsecond > frozens && nowsecond > frozenstoAddress && isAddress && myaddress != toAddress && (myaddress == owner || !lock) && toAmount > 0 && amount <= _balances) {
                    var _estimateGas = new Promise(function (resolve, reject){mytoken.transfer.estimateGas(toAddress, amount, function(err, result){
                        if(!err) {
                            _estimateGas = result;
                            resolve(_estimateGas);
                            console.log("estimateGas:" + _estimateGas);
                        }else{
                            console.error(err);
                        }
                    })});
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.transfer.sendTransaction(toAddress, amount, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#result").html(function (i, oldresult) {
                                        return "成功发送" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#result").html(function (i, oldresult) {
                                        return "未能发送" + symbol + "<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#result").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
                } else if (!isAddress || myaddress == toAddress) {
                    $("#result").html(function (i, oldresult) {
                        return "发送地址不正确!<br>" + oldresult;
                    });
                } else if (toAmount <= 0 || amount > _balances) {
                    $("#result").html(function (i, oldresult) {
                        return "发送数量不正确!(锁仓:" + frozenNum + " " + symbol + ")<br>" + oldresult;
                    });
                } else if (myaddress != owner && lock) {
                    $("#result").html(function (i, oldresult) {
                        return "交易功能未开启!<br>" + oldresult;
                    });
                } else if (nowsecond < frozens || nowsecond < frozenstoAddress) {
                    $("#result").html(function (i, oldresult) {
                        return "账号已被锁定!<br>" + oldresult;
                    });
                } else {
                    $("#result").html(function (i, oldresult) {
                        return "其他错误!<br>" + oldresult;
                    });
                }
            });
            $(this).removeAttr("disabled").text("发送");
        });

        $("#burn").click(function(){
            $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 销毁"+symbol+"中...").attr("disabled","disabled");
            var useramount = $("#useramount").val();
            var amount = Number($("#useramount").val()) * Math.pow(10,decimals);

            var _balances = balances * Math.pow(10, decimals);
            if (nowsecond <= frozenEnd) {
                _balances = _balances - (frozenNum * Math.pow(10, decimals));
            }
            if (nowsecond > frozens && !lock && useramount> 0 && amount<=_balances){
                var _estimateGas = new Promise(function (resolve, reject){
                    mytoken.burn.estimateGas(amount, function(err, result){
                        if(!err) {
                            _estimateGas = result;
                            resolve(_estimateGas);
                            console.log("estimateGas:" + _estimateGas);
                        }else{
                            console.error(err);
                        }
                    });
                });
                Promise.all([_estimateGas]).then(function(value) {
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.burn.sendTransaction(amount, {
                            gasPrice: web3.toWei(gasPrice),
                            gas: _estimateGas
                        }, function (error, result) {
                            if (!error) {
                                $("#userresult").html(function (i, oldresult) {
                                    return "成功销毁" + useramount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                            } else
                                $("#userresult").html(function (i, oldresult) {
                                    return "未能销毁" + symbol + "<br>" + error + "<br>" + oldresult;
                                });
                        });
                    } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                        $("#userresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                });
            }else if(useramount<=0 || amount>_balances){
                $("#userresult").html(function(i, oldresult){
                    return "销毁数量不正确!(锁仓:"+frozenNum+" "+symbol+")<br>"+ oldresult;
                });
            }else if(lock){
                $("#userresult").html(function(i, oldresult){
                    return "交易功能未开启!<br>"+ oldresult;
                });
            }else if(nowsecond < frozens){
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

        $("#buy").click(function(){
            $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 购买"+symbol+"(购买 0 "+symbol+"是领取空投奖励)中...").attr("disabled","disabled");
            var useramount = $("#useramount").val();
            var amount = Number($("#useramount").val()) * Math.pow(10,decimals);
            var nowsecond = Math.round(new Date().getTime()/1000);
            if (myaddress != owner) {
                var _balances = getBalances(owner).then(function (data) {
                    _balances = data;
                    return _balances;
                });
                var _initialized = getInitialized(myaddress).then(function(data){
                    _initialized = data;
                    return _initialized;
                });//查询空投
                Promise.all([_balances, _initialized]).then(function(value) {
                    if (_balances >= amount && !lock && useramount >= 0 && ((!_initialized && useramount == 0 && (totalDrop - currentDrop) >= airDrop)|| useramount != 0)) {
                        var _estimateGas = new Promise(function (resolve, reject){
                            web3.eth.estimateGas({to: tokenAddress, value: amount * buyPrice * Math.pow(10,18)/Math.pow(10,decimals)}, function(err, result){
                                if(!err) {
                                    _estimateGas = result;
                                    resolve(_estimateGas);
                                    console.log("estimateGas:" + _estimateGas);
                                }else{
                                    console.error(err);
                                }
                            });
                        });
                        Promise.all([_estimateGas]).then(function(value) {
                            if (amount * buyPrice * Math.pow(10,18)/Math.pow(10,decimals) + _estimateGas <= myeth * Math.pow(10, 18)) {
                                web3.eth.sendTransaction({
                                    to: tokenAddress,
                                    value: amount * buyPrice * Math.pow(10,18)/Math.pow(10,decimals),
                                    gasPrice: web3.toWei(gasPrice),
                                    gas: _estimateGas
                                }, function (error, result) {
                                    if (!error) {
                                        $("#userresult").html(function (i, oldresult) {
                                            return "成功购买" + useramount + " " + symbol + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                        });
                                    } else
                                        $("#userresult").html(function (i, oldresult) {
                                            return "未能购买" + symbol + "<br>" + error + "<br>" + oldresult;
                                        });
                                });
                            } else if (amount * buyPrice * Math.pow(10,18)/Math.pow(10,decimals) + _estimateGas > myeth * Math.pow(10, 18)) {
                                $("#userresult").html(function (i, oldresult) {
                                    return "ETH不足!<br>" + oldresult;
                                });
                            }
                        });
                    } else if (useramount < 0 || amount > _balances) {
                        $("#userresult").html(function (i, oldresult) {
                            return "数量不正确!<br>" + oldresult;
                        });
                    } else if (lock) {
                        $("#userresult").html(function (i, oldresult) {
                            return "交易功能未开启!<br>" + oldresult;
                        });
                    } else if (_initialized && useramount == 0) {
                        $("#userresult").html(function (i, oldresult) {
                            return "已经领取过空投奖励!<br>" + oldresult;
                        });
                    } else if (!_initialized && useramount == 0 && (totalDrop - currentDrop) < airDrop) {
                        $("#userresult").html(function (i, oldresult) {
                            return "来晚了,空投奖励已经发完了!<br>" + oldresult;
                        });
                    } else {
                        $("#userresult").html(function (i, oldresult) {
                            return "其他错误!<br>" + oldresult;
                        });
                    }
                });
            } else{
                $("#userresult").html(function (i, oldresult) {
                    return "管理员不能购买!<br>" + oldresult;
                });
            }
            $(this).removeAttr("disabled").text("购买"+symbol+"(购买 0 "+symbol+"是领取空投奖励)");
        });


        $("#setlock").click(function () {
            if (myaddress == owner) {
                if ($("#setlock").hasClass("closeLock")) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setLock.estimateGas(true, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setLock.sendTransaction(true, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
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
                        } else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
                } else if ($("#setlock").hasClass("openLock")) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setLock.estimateGas("", function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setLock.sendTransaction("", {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
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
                        } else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
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
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setDrop.estimateGas("", function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setDrop.sendTransaction("", {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
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
                        } else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
                } else if ($("#setdrop").hasClass("openDrop")) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setDrop.estimateGas(true, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setDrop.sendTransaction(true, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
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
                        } else {
                            $("#setresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
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
                if (isAddress && toAmount > 0) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.mintToken.estimateGas(toAddress, amount, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.mintToken.sendTransaction(toAddress, amount, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#result").html(function (i, oldresult) {
                                        return "成功增发" + toAmount + " " + symbol + "给" + toAddress + "<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#result").html(function (i, oldresult) {
                                        return "未能增发" + toAmount + " " + symbol + "<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#result").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
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
                var _getEther = getEth(searchAddress).then(function(data){
                    _getEther = Number(data)/Math.pow(10,18);
                    return _getEther;
                });//查询ETH
                Promise.all([_getEther]).then(function(value) {
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + _getEther + " ETH.<br>" + oldresult;
                    });
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
                var _initialized = getInitialized(searchAddress).then(function(data){
                    _initialized = data;
                    return _initialized;
                });//查询空投
                Promise.all([_initialized]).then(function(value) {
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + (_initialized ? "已经空投" : "没有空投") + ".<br>" + oldresult;
                    });
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
                var _balances = getBalances(searchAddress).then(function(data){
                    _balances = (data/Math.pow(10,decimals)).toFixed(decimals);
                    return _balances;
                });//查询SCD
                Promise.all([_balances]).then(function(value) {
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + _balances + " " + symbol + ".<br>" + oldresult;
                    });
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
                var _frozens = getFrozens(searchAddress).then(function(data){
                    _frozens = data;
                    return _frozens;
                });//查询锁定
                Promise.all([_frozens]).then(function(value) {
                    $("#searchresult").html(function (i, oldresult) {
                        var nowsecond = Math.round(new Date().getTime()/1000);
                        return searchAddress + ": " + (nowsecond > _frozens ? "没有锁定" : "锁定至" + new Date(_frozens * 1000).Format("yyyy-MM-dd hh:mm:ss")) + ".<br>" + oldresult;
                    });
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
                var _frozenEnd = getFrozenEnd(searchAddress).then(function(data){
                    _frozenEnd = data;
                    return _frozenEnd;
                });//查询锁仓
                var _frozenNum = getFrozenNum(searchAddress).then(function(data){
                    _frozenNum = data/ Math.pow(10, decimals);
                    return _frozenNum;
                });//查询锁仓
                Promise.all([_frozenEnd, _frozenNum]).then(function(value) {
                    $("#searchresult").html(function (i, oldresult) {
                        return searchAddress + ": " + (_frozenNum != 0 ? "锁仓状态" + _frozenNum + " " + symbol + "到" + new Date(_frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss") + "释放" : "没有锁仓") + ".<br>" + oldresult;
                    });
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
                if (_airDrop > 0 && _totalDrop > 0 && _totalDrop <= totalSupply && _airDrop < totalDrop) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setAirDrop.estimateGas(_dropStart, _dropEnd, _airDrop * Math.pow(10, decimals), _totalDrop * Math.pow(10, decimals), function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setAirDrop.sendTransaction(_dropStart, _dropEnd, _airDrop * Math.pow(10, decimals), _totalDrop * Math.pow(10, decimals), {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#setAirDropresult").html(function (i, oldresult) {
                                        return "成功设置" + symbol + "空投参数.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#setAirDropresult").html(function (i, oldresult) {
                                        return "未能设置" + symbol + "空投参数.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#setAirDropresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
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
                $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 设置" + symbol + "购买(直投)价格中...").attr("disabled", "disabled");
                var _buyPrice = Number($("#buyPrice").val());
                if (_buyPrice > 0) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setExchange.estimateGas(_buyPrice * Math.pow(10, 18)/Math.pow(10, decimals), function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setExchange.sendTransaction(_buyPrice * Math.pow(10, 18)/Math.pow(10, decimals), {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#setExchangeresult").html(function (i, oldresult) {
                                        return "成功设置" + symbol + "购买(直投)价格.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#setExchangeresult").html(function (i, oldresult) {
                                        return "未能设置" + symbol + "购买(直投)价格.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#setExchangeresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
                } else {
                    $("#setExchangeresult").html(function (i, oldresult) {
                        return "购买(直投)价格不正确!<br>" + oldresult;
                    });
                }
                $(this).removeAttr("disabled").text("设置" + symbol + "购买(直投)价格");
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

        function getMonthOpen(_date) {
            var getmonthOpen = new Promise(function (resolve, reject){
                mytoken.monthOpen.call(_date, function(err, result){
                    if(!err){
                        getmonthOpen = result;
                        resolve(getmonthOpen);
                    }else{
                        console.error(err);
                    }
                });
            });
            return getmonthOpen;
        }

        var yearmonth = getMonthOpen(new Date().Format('yyyy-MM').replace(/-/g, "")).then(function(data){
            yearmonth = data;
            return yearmonth;
        });
        Promise.all([yearmonth]).then(function(value) {
            if (yearmonth) {
                $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
            } else {
                $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
            }
        });
        $("#yearmonth").hover(function () {
            var _yearmonth = getMonthOpen($(this).val().replace(/-/g, "")).then(function(data){
                _yearmonth = data;
                return _yearmonth;
            });
            Promise.all([_yearmonth]).then(function(value) {
                if (_yearmonth) {
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                } else {
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                }
            });
        });
        $("#yearmonth").change(function () {
            var _yearmonth = getMonthOpen($(this).val().replace(/-/g, "")).then(function(data){
                _yearmonth = data;
                return _yearmonth;
            });
            Promise.all([_yearmonth]).then(function(value) {
                if (_yearmonth) {
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                } else {
                    $("#setMonthClose").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                }
            });
        });

        function getMonthPower(_date, _address) {
            var getmonthPower = new Promise(function (resolve, reject){
                mytoken.monthPower.call(_date, _address, function(err, result){
                    if(!err){
                        getmonthPower = result;
                        resolve(getmonthPower);
                    }else{
                        console.error(err);
                    }
                });
            });
            return getmonthPower;
        }

        var getyearmonth = getMonthPower(new Date().Format('yyyy-MM').replace(/-/g, ""), myaddress).then(function(data){
            getyearmonth = data;
            return getyearmonth;
        });
        var yearmonthopen = getMonthOpen(new Date().Format('yyyy-MM').replace(/-/g, "")).then(function(data){
            yearmonthopen = data;
            return yearmonthopen;
        });
        Promise.all([getyearmonth, yearmonthopen]).then(function(value) {
            if (getyearmonth) {
                $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
            } else if (myaddress == owner) {
                $("#getMonth").attr("class", "btn btn-outline-danger").text("管理员不能领取").attr("disabled", "disabled");
            } else if (yearmonthopen) {
                $("#getMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth openMonth").text("领取本月激励");
            } else {
                $("#getMonth").attr("class", "btn btn-outline-danger").text("未开启本月激励").attr("disabled", "disabled");
            }
        });

        $("#getyearmonth").hover(function(){
            var getyearmonth = getMonthPower($(this).val().replace(/-/g, ""), myaddress).then(function(data){
                getyearmonth = data;
                return getyearmonth;
            });
            var yearmonthopen = getMonthOpen($(this).val().replace(/-/g, "")).then(function(data){
                yearmonthopen = data;
                return yearmonthopen;
            });
            Promise.all([getyearmonth, yearmonthopen]).then(function(value) {
                if (getyearmonth) {
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
                } else if (myaddress == owner) {
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("管理员不能领取").attr("disabled", "disabled");
                } else if (yearmonthopen) {
                    $("#getMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth openMonth").text("领取本月激励");
                } else {
                    $("#getMonth").attr("class", "btn btn-outline-danger").text("未开启本月激励").attr("disabled", "disabled");
                }
            });
        });

        $("#getMonth").click(function () {
            var _getyearmonth = $("#getyearmonth").val().replace(/-/g, "");
            var nowsecond = Math.round(new Date().getTime()/1000);
            if (myaddress != owner) {
                var _getmonthPower = getMonthPower(_getyearmonth, myaddress).then(function(data){
                    _getmonthPower = data;
                    return _getmonthPower;
                });
                var _yearmonthopen = getMonthOpen(_getyearmonth).then(function(data){
                    _yearmonthopen = data;
                    return _yearmonthopen;
                });
                var _balances = getBalances(owner).then(function (data) {
                    _balances = data;
                    return _balances;
                });
                Promise.all([_getmonthPower, _yearmonthopen, _balances]).then(function(value) {
                    if (nowsecond > frozens && balances >= minToken && _yearmonthopen && !_getmonthPower && _balances >= (totalSupply * Math.pow(10,decimals) * powers / 100 / users) && count > 0) {
                        var _estimateGas = new Promise(function (resolve, reject){
                            mytoken.getMonth.estimateGas(_getyearmonth, function(err, result){
                                if(!err) {
                                    _estimateGas = result;
                                    resolve(_estimateGas);
                                    console.log("estimateGas:" + _estimateGas);
                                }else{
                                    console.error(err);
                                }
                            });
                        });
                        Promise.all([_estimateGas]).then(function(value) {
                            if (_estimateGas <= myeth * Math.pow(10, 18)) {
                                mytoken.getMonth.sendTransaction(_getyearmonth, {
                                    gasPrice: web3.toWei(gasPrice),
                                    gas: _estimateGas
                                }, function (error, result) {
                                    if (!error) {
                                        $("#getMonth").attr("class", "btn btn-outline-danger").text("已经领取本月激励").attr("disabled", "disabled");
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
                        });
                    }else if(nowsecond < frozens){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "账号已被锁定!<br>" + oldresult;
                        });
                    }else if(balances < minToken){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "不满足领取激励的最少持有"+symbol+"量!<br>" + oldresult;
                        });
                    }else if(_getmonthPower){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "已领取过本月激励!<br>" + oldresult;
                        });
                    }else if(!_yearmonthopen){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "未开启本月激励!<br>" + oldresult;
                        });
                    }else if(_balances < (totalSupply * Math.pow(10,decimals) * powers / 100 / users)){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "激励已发放完毕!<br>" + oldresult;
                        });
                    }else if(count <= 0){
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "激励人数已到上限!<br>" + oldresult;
                        });
                    }else{
                        $("#getmonthresult").html(function (i, oldresult) {
                            return "条件不足!<br>" + oldresult;
                        });
                    }
                });
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
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setMonthClose.estimateGas(_yearmonth, "", function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setMonthClose.sendTransaction(_yearmonth, "", {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $(".setMonth").removeAttr("disabled").attr("class", "btn btn-outline-danger setMonth openMonth").text("开启年月激励");
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "成功关闭年月: " + _yearmonth + "激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "未能关闭年月: " + _yearmonth + "激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else {
                            $("#monthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
                } else if ($(this).hasClass("openMonth")) {
                    var _yearmonth = $("#yearmonth").val().replace(/-/g, "");
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setMonthClose.estimateGas(_yearmonth, true, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setMonthClose.sendTransaction(_yearmonth, true, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $(".setMonth").removeAttr("disabled").attr("class", "btn btn-success setMonth closeMonth").text("关闭年月激励");
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "成功开启年月: " + _yearmonth + "激励.<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                }
                                else
                                    $("#monthresult").html(function (i, oldresult) {
                                        return "未能开启年月: " + _yearmonth + "激励.<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else {
                            $("#monthresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
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
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.setMonthOpen.estimateGas(openyearmonth, _users, _powers, _minToken, _count, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.setMonthOpen.sendTransaction(openyearmonth, _users, _powers, _minToken, _count, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
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
                    });
                }else {
                    $("#openmonthresult").html(function (i, oldresult) {
                        return "参数不正确!<br>" + oldresult;
                    });
                }
            }else {
                $("#openmonthresult").html(function (i, oldresult) {
                    return "没有权限管理!<br>" + oldresult;
                });
            }
        });


        $("#takeEther").click(function(){
            $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 从合约中提取ETH中...").attr("disabled","disabled");
            var ethamount = $("#ethamount").val();
            var amount = Number($("#ethamount").val()) * Math.pow(10,18);
            if (ethamount>0 && amount <= tokenETH * Math.pow(10,18)){
                var _estimateGas = new Promise(function (resolve, reject){
                    mytoken.takeEther.estimateGas(amount, function(err, result){
                        if(!err) {
                            _estimateGas = result;
                            resolve(_estimateGas);
                            console.log("estimateGas:" + _estimateGas);
                        }else{
                            console.error(err);
                        }
                    });
                });
                Promise.all([_estimateGas]).then(function(value) {
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.takeEther.sendTransaction(amount, {
                            gasPrice: web3.toWei(gasPrice),
                            gas: _estimateGas
                        }, function (error, result) {
                            if (!error) {
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "成功从合约中提取ETH:" + ethamount + " ETH<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                });
                                $(".tokenETH").text(tokenETH-ethamount);
                            } else
                                $("#ethamountresult").html(function (i, oldresult) {
                                    return "未能从合约中提取ETH!<br>" + error + "<br>" + oldresult;
                                });
                        })
                    } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                        $("#ethamountresult").html(function (i, oldresult) {
                            return "ETH不足!<br>" + oldresult;
                        });
                    }
                });
            }else if(ethamount<=0 || amount > tokenETH * Math.pow(10,18)){
                $("#ethamountresult").html(function(i, oldresult){
                    return "ETH量不正确!<br>"+ oldresult;
                });
            }else {
                $("#ethamountresult").html(function (i, oldresult) {
                    return "其他错误!<br>" + oldresult;
                });
            }
            $(this).removeAttr("disabled").text("从合约中提取ETH");
        });

        $("#lockAccount").click(function () {
            if (myaddress == owner) {
                $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 锁定中...").attr("disabled", "disabled");
                var lockaddress = $("#lockaddress").val();
                var isAddress = web3.isAddress(lockaddress);
                var _lockend = new Date($("#lockend").val()).getTime() / 1000;
                if (isAddress && _lockend >= 0) {
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.lockAccount.estimateGas(lockaddress, _lockend, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.lockAccount.sendTransaction(lockaddress, _lockend, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#lockAccountresult").html(function (i, oldresult) {
                                        return "成功锁定" + lockaddress + ".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#lockAccountresult").html(function (i, oldresult) {
                                        return "未能锁定" + lockaddress + ".<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#lockAccountresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
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
                    var _estimateGas = new Promise(function (resolve, reject){
                        mytoken.freezeUserFunds.estimateGas(freezeaddress, freezenum, _freezeend, function(err, result){
                            if(!err) {
                                _estimateGas = result;
                                resolve(_estimateGas);
                                console.log("estimateGas:" + _estimateGas);
                            }else{
                                console.error(err);
                            }
                        });
                    });
                    Promise.all([_estimateGas]).then(function(value) {
                        if (_estimateGas <= myeth * Math.pow(10, 18)) {
                            mytoken.freezeUserFunds.sendTransaction(freezeaddress, freezenum, _freezeend, {
                                gasPrice: web3.toWei(gasPrice),
                                gas: _estimateGas
                            }, function (error, result) {
                                if (!error) {
                                    $("#freezeresult").html(function (i, oldresult) {
                                        return "成功锁仓" + freezeaddress + ": " + _freezenum + " " + symbol + ".<br>" + JSON.stringify(result) + "<br>" + oldresult;
                                    });
                                } else
                                    $("#freezeresult").html(function (i, oldresult) {
                                        return "未能锁仓" + freezeaddress + ".<br>" + error + "<br>" + oldresult;
                                    });
                            });
                        } else if (_estimateGas > myeth * Math.pow(10, 18)) {
                            $("#freezeresult").html(function (i, oldresult) {
                                return "ETH不足!<br>" + oldresult;
                            });
                        }
                    });
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

    });
});