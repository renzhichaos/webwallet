$(document).ready(function(){
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/noapikey"));
    }

    var tokenAddress = "0x7C8c719a45C11d82e03c46E45E56b1681992cE5a";
    var abi = [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"giveEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_value","type":"bool"}],"name":"setMonthClose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_exchangeStart","type":"uint256"},{"name":"_exchangeEnd","type":"uint256"},{"name":"_sellPrice","type":"uint256"},{"name":"_buyPrice","type":"uint256"}],"name":"setExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"monthPower","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeMyFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellToContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lock","type":"bool"}],"name":"setLock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powers","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_freeze","type":"uint256"},{"name":"_freezeEnd","type":"uint256"}],"name":"freezeUserFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dropStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_balance","type":"uint256"}],"name":"takeEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minimumEtherInFinney","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_open","type":"bool"}],"name":"setDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"}],"name":"getMonth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"minToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_lockEnd","type":"uint256"}],"name":"lockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_month","type":"uint256"},{"name":"_users","type":"uint256"},{"name":"_powers","type":"uint8"},{"name":"_minToken","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"setMonthOpen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minEtherForAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sellToContract","type":"bool"}],"name":"setSellToContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monthOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dropStart","type":"uint256"},{"name":"_dropEnd","type":"uint256"},{"name":"_airDrop","type":"uint256"},{"name":"_totalDrop","type":"uint256"}],"name":"setAirDrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"centralMinter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"uint256"},{"indexed":false,"name":"fronzeEnd","type":"uint256"}],"name":"FrozenMyFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];

    var netId = web3.version.network;
    var network;
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

    var version = web3.version.api;
    $(".version").text(version);
    var node = new Promise(function (resolve, reject){web3.version.getNode(function(err, result){
        if(!err) {
            node = result;
            $(".node").text(node);
            resolve(node);
        }else{
            console.error(err);
        }
    });});
    var ethereum = new Promise(function (resolve, reject){web3.version.getEthereum(function(err, result){
		if(!err){
        	ethereum = result;
            $(".ethereum").text(ethereum);
			resolve(ethereum);
		}else{
            console.error(err);
        }
    });});

    var gasPrice = new Promise(function (resolve, reject){web3.eth.getGasPrice(function(err, result){
		if(!err){
        	gasPrice = web3.fromWei(result).toFixed();
            $(".gasPrice").text(gasPrice);
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
        $(".tokenETH").text(tokenETH);
    });

    var name = new Promise(function (resolve, reject){mytoken.name.call(function(err, result){
		if(!err){
            name = result;
            $(".name").text(name);
			resolve(name);
		}else{
			console.error(err);
		}
	});});//名字
    var symbol = new Promise(function (resolve, reject){mytoken.symbol.call(function(err, result){
		if(!err){
            symbol = result;
            $(".symbol").text(symbol);
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
            $(".totalSupply").text(totalSupply);
			resolve(totalSupply);
		}else{
			console.error(err);
		}
	});});

    var exchangeStart = new Promise(function (resolve, reject){mytoken.exchangeStart.call(function(err, result){
		if(!err){
            exchangeStart = result;
            if(exchangeStart > 0){
                $(".exchangeStart").text(new Date(exchangeStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                $("#exchangeStart").val(new Date(exchangeStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            }else{
                $(".exchangeStart").text("无限制");
            }
			resolve(exchangeStart);
		}else{
			console.error(err);
		}
	});});//兑换ether开始时间(秒)
    var exchangeEnd = new Promise(function (resolve, reject){mytoken.exchangeEnd.call(function(err, result){
		if(!err){
            exchangeEnd = result;
            if(exchangeEnd > 0){
                $(".exchangeEnd").text(new Date(exchangeEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                $("#exchangeEnd").val(new Date(exchangeEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            }else{
                $(".exchangeEnd").text("无限制");
            }
			resolve(exchangeEnd);
		}else{
			console.error(err);
		}
	});});//兑换ether结束时间(秒)
    var sellPrice = new Promise(function (resolve, reject){mytoken.sellPrice.call(function(err, result){
		if(!err){
            sellPrice = Number(result)/Math.pow(10,16);
            $(".sellPrice").text(sellPrice);
            $("#sellPrice").val(sellPrice);
			resolve(sellPrice);
		}else{
			console.error(err);
		}
	});});//卖出给合约的价格
    var buyPrice = new Promise(function (resolve, reject){mytoken.buyPrice.call(function(err, result){
		if(!err){
            buyPrice = Number(result)/Math.pow(10,16);
            $(".buyPrice").text(buyPrice);
            $("#buyPrice").val(buyPrice);
			resolve(buyPrice);
		}else{
			console.error(err);
		}
	});});//买入价格

    var drop = new Promise(function (resolve, reject){mytoken.drop.call(function(err, result){
		if(!err){
            drop = result;
            if(drop){
                $(".drop").attr("class", "drop badge badge-success").text("开启");
                $("#setdrop").attr("class", "btn btn-success closeDrop").text("关闭空投");
            }else{
                $(".drop").attr("class", "drop badge badge-danger").text("关闭");
                $("#setdrop").attr("class", "btn btn-outline-danger openDrop").text("开启空投");
            }
			resolve(drop);
		}else{
			console.error(err);
		}
	});});//开启/关闭空投
    var airDrop = new Promise(function (resolve, reject){mytoken.airDrop.call(function(err, result){
		if(!err){
            airDrop = Number(result)/Math.pow(10,decimals);
            $(".airDrop").text(airDrop);
            $("#airDrop").val(airDrop);
			resolve(airDrop);
		}else{
			console.error(err);
		}
	});});//单账户空投数量
    var currentDrop = new Promise(function (resolve, reject){mytoken.currentDrop.call(function(err, result){
		if(!err){
            currentDrop = Number(result)/Math.pow(10,decimals);
            $(".currentDrop").text(currentDrop);
			resolve(currentDrop);
		}else{
			console.error(err);
		}
	});});//当前空投量
    var totalDrop = new Promise(function (resolve, reject){mytoken.totalDrop.call(function(err, result){
		if(!err){
            totalDrop = Number(result)/Math.pow(10,decimals);
            $(".totalDrop").text(totalDrop);
            $("#totalDrop").val(totalDrop);
			resolve(totalDrop);
		}else{
			console.error(err);
		}
	});});//空投总量
    var dropStart = new Promise(function (resolve, reject){mytoken.dropStart.call(function(err, result){
		if(!err){
            dropStart = result;
            if(dropStart > 0){
                $(".dropStart").text(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                $("#dropStart").val(new Date(dropStart * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            }else{
                $(".dropStart").text("无限制");
            }
			resolve(dropStart);
		}else{
			console.error(err);
		}
	});});//空投开始时间(秒)
    var dropEnd = new Promise(function (resolve, reject){mytoken.dropEnd.call(function(err, result){
		if(!err){
            dropEnd = result;
            if(dropEnd > 0){
                $(".dropEnd").text(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                $("#dropEnd").val(new Date(dropEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
            }else{
                $(".dropEnd").text("无限制")
            }
			resolve(dropEnd);
		}else{
			console.error(err);
		}
	});});//空投结束时间(秒)

    var minEtherForAccounts = new Promise(function (resolve, reject){mytoken.minEtherForAccounts.call(function(err, result){
		if(!err){
            minEtherForAccounts = Number(result)/Math.pow(10,18);
            $(".minEtherForAccounts").text(minEtherForAccounts);
			resolve(minEtherForAccounts);
		}else{
			console.error(err);
		}
	});});//交易时最少持有以太币量
    var powers = new Promise(function (resolve, reject){mytoken.powers.call(function(err, result){
		if(!err){
            powers = result;
            $(".powers").text(powers);
            $("#powers").val(powers);
			resolve(powers);
		}else{
			console.error(err);
		}
	});});//每月持币激励百分比
    var users = new Promise(function (resolve, reject){mytoken.users.call(function(err, result){
		if(!err){
            users = result;
            $(".users").text(users);
            $("#users").val(users);
			resolve(users);
		}else{
			console.error(err);
		}
	});});//持币的人数(即每月激励中加权平均的基数)
    var minToken = new Promise(function (resolve, reject){mytoken.minToken.call(function(err, result){
		if(!err){
            minToken = Number(result)/Math.pow(10,decimals);
            $(".minToken").text(minToken);
            $("#minToken").val(minToken);
			resolve(minToken);
		}else{
			console.error(err);
		}
	});});//领取每月激励的账户最少持有代币量
    var count = new Promise(function (resolve, reject){mytoken.count.call(function(err, result){
		if(!err){
            count = result;
            $(".count").text(count);
            $("#count").val(count);
			resolve(count);
		}else{
			console.error(err);
		}
	});});//可以领取激励的人数

    var lock = new Promise(function (resolve, reject){mytoken.lock.call(function(err, result){
		if(!err){
            lock = result;
            if(lock){
                $(".lock").attr("class", "lock badge badge-danger").text("关闭");
                $("#setlock").attr("class", "btn btn-outline-danger openLock").text("开启交易功能");
                $(".withlock").attr("disabled","disabled");
            }else{
                $(".lock").attr("class", "lock badge badge-success").text("开启");
                $("#setlock").attr("class", "btn btn-success closeLock").text("关闭交易功能");
            }
			resolve(lock);
		}else{
			console.error(err);
		}
	});});//锁定(true)/解锁(false)交易
    var sellToContract = new Promise(function (resolve, reject){mytoken.sellToContract.call(function(err, result){
		if(!err){
            sellToContract = result;
            if(sellToContract){
                $(".sellToContract").attr("class", "sellToContract badge badge-success").text("开启");
                $("#setsellToContract").attr("class", "btn btn-success closesellToContract").text("关闭兑换ETH");
            }else{
                $(".sellToContract").attr("class", "sellToContract badge badge-danger").text("关闭");
                $("#setsellToContract").attr("class", "btn btn-outline-danger opensellToContract").text("开启兑换ETH");
                $(".withsell").attr("disabled","disabled");
            }
			resolve(sellToContract);
		}else{
			console.error(err);
		}
	});});//允许卖代币给这个合约以换取ether

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
        $(".initialized").text(initialized?"已经空投":"没有空投");
    });

    function getBalances(_address) {
        var getbalances = new Promise(function (resolve, reject){mytoken.balances.call(_address, function(err, result){
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
        $(".balances").text(balances+" "+symbol);
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
        $(".frozens").text(frozens == 0 ? "没有锁定" : "锁定至" + new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
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
        $(".frozenNum").text(frozenNum == 0 ? "没有锁仓" : "锁仓" + frozenNum + " " + symbol + "至" + new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
    });

    var owner = new Promise(function (resolve, reject){
        mytoken.owner.call(function(err, result){
            if(!err){
                owner = result;
                console.log("owner:"+owner);
                if(myaddress==owner){
                    $("#transfer").removeAttr("disabled");
                    $(".notowner").attr("disabled","disabled");
                    $(".owner").show();
                }else{
                    $(".notowner").removeAttr("disabled");
                    $(".owner").hide();
                }
                resolve(owner);
            }else{
                console.error(err);
            }
    });});

    var myeth = getEth(myaddress).then(function(data){
        myeth = Number(data)/Math.pow(10, 18);
        $(".eth").text(myeth+" ETH");
    });

    var datetime = new Promise(function (resolve, reject){
        mytoken.getTime.call(function(err, result){
            if(!err){
                datetime = result;
                console.log("datetime:"+datetime);
                resolve(datetime);
            }else{
                console.error(err);
            }
        });});

    Promise.all([node, ethereum, gasPrice, tokenETH, name, symbol, decimals, totalSupply, exchangeStart, exchangeEnd, sellPrice, buyPrice, drop, airDrop, currentDrop, totalDrop, dropStart, dropEnd, minEtherForAccounts, powers, users, minToken, count, lock, sellToContract, initialized, balances, frozens, frozenEnd, frozenNum, owner, myeth]).then(function(values){
    console.log(JSON.stringify(values));

    var accounts = web3.eth.accounts;
    console.log(accounts);

    for (var i = 0, len = accounts.length; i < len; i++){
        var account = accounts[i];
        var _accountether = getEth(account).then(function(data){
            _accountether = Number(data)/Math.pow(10,18);
            var _balanceOf = getBalances(account).then(function(data2){
                _balanceOf = (Number(data2)/Math.pow(10,decimals)).toFixed(2);
                $("#accountId").append('<option id="'+account+'" value="'+account+'">'+account+'('+_accountether+' ETH)('+_balanceOf+' '+symbol+')</option>');
                $("#accountId").append('<option id="'+account+'s" value="'+account+'">'+account+'('+_accountether+' ETH)('+_balanceOf+' '+symbol+')</option>');
            });
        });
    }

    $("#" + myaddress).attr("selected", "selected");

    var accountInterval = setInterval(function() {
        if (web3.eth.accounts[0] !== accounts[0]) {
            web3.eth.defaultAccount = web3.eth.coinbase;
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

        }
    }, 10000);
here
    $("#accountId").change(function() {
        web3.eth.defaultAccount = $("#accountId").val();
        myaddress = web3.eth.defaultAccount;

        initialized = new Promise(function (resolve, reject){mytoken.initialized.call(myaddress, function(err, result){
            if(!err){
                initialized = result;
                $(".initialized").text(initialized?"已经空投":"没有空投");
                resolve(initialized);
            }else{
                console.error(err);
            }
        });});
        balances = new Promise(function (resolve, reject){mytoken.balances.call(myaddress, function(err, result){
            if(!err){
                balances = result/Math.pow(10,decimals);
                $(".balances").text(balances+" "+symbol);
                resolve(balances);
            }else{
                console.error(err);
            }
        });});
        frozens = new Promise(function (resolve, reject){mytoken.frozens.call(myaddress, function(err, result){
            if(!err){
                frozens = result;
                $(".frozens").text(frozens==0?"没有锁定":"锁定至"+new Date(frozens * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                resolve(frozens);
            }else{
                console.error(err);
            }
        });});
        frozenEnd = new Promise(function (resolve, reject){mytoken.frozenEnd.call(myaddress, function(err, result){
            if(!err){
                frozenEnd = result;
                resolve(frozenEnd);
            }else{
                console.error(err);
            }
        });});
        frozenNum = new Promise(function (resolve, reject){mytoken.frozenNum.call(myaddress, function(err, result){
            if(!err){
                frozenNum = result/Math.pow(10,decimals);
                $(".frozenNum").text(frozenNum==0?"没有锁仓":"锁仓"+frozenNum+" "+symbol+"至"+new Date(frozenEnd * 1000).Format("yyyy-MM-dd hh:mm:ss"));
                resolve(frozenNum);
            }else{
                console.error(err);
            }
        });});

        Promise.all([initialized, balances, frozens, frozenEnd, frozenNum, owner]).then(function (values) {
            console.log(JSON.stringify(values));
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
        })
    });

    /*var filter = web3.eth.filter(tokenAddress);
    filter.watch(function(error, result){
        if (!error) {
            console.log(result);
            tokenETH = Number(web3.eth.getBalance(tokenAddress))/Math.pow(10, 18);
            $(".tokenETH").text(tokenETH);
        }
    });
     function sleep(d){
        for(var t = Date.now();Date.now() - t <= d;){}
    }*/

     $("#giveEther").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 给合约地址发ETH中...").attr("disabled","disabled");
        var ethamount = $("#ethamount").val();
        var amount = Number($("#ethamount").val()) * Math.pow(10,18);
        if (ethamount>0 && amount <= (myeth * Math.pow(10, 18))){
            var _estimateGas = new Promise(function (resolve, reject){mytoken.giveEther.estimateGas({value: amount}, function(err, result){
                if(!err) {
                    _estimateGas = result;
                    resolve(_estimateGas);
                    console.log("estimateGas:" + _estimateGas);
                }else{
                    console.error(err);
                }
            })});
            Promise.all([_estimateGas]).then(function(value){
                if ((_estimateGas + amount) <= myeth * Math.pow(10, 18)) {
                    mytoken.giveEther.sendTransaction({value: amount*100, gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
                        if (!error) {
                            $("#ethamountresult").html(function (i, oldresult) {
                                return "成功给合约地址发ETH:" + ethamount + " ETH<br>订单号:" + JSON.stringify(result) + "<br>" + oldresult;
                            });
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
        }else if(ethamount<=0 || amount > myeth){
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
        var amount = Number($("#toAmount").val()) * Math.pow(10,decimals);

        var _balances = balances * Math.pow(10, decimals);
        if (Math.round(new Date().getTime()/1000) <= frozenEnd) {
            _balances = _balances - frozenNum;
        }
        var nowsecond = Math.round(new Date().getTime()/1000);
        var frozenstoAddress = new Promise(function (resolve, reject){mytoken.frozens.call(toAddress, function(err, result){
            if(!err) {
                frozenstoAddress = result;
                resolve(frozenstoAddress);
            }else{
                console.error(err);
            }
        })});
         Promise.all([frozenstoAddress]).then(function(value) {
             if (nowsecond > frozens && nowsecond > frozenstoAddress && isAddress && myaddress != toAddress && (myaddress == owner || !lock) && toAmount >= 0.01 && amount <= _balances) {
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
                     return "发送数量不正确!(锁仓:" + mytoken.frozenNum.call(myaddress) + " " + symbol + ")<br>" + oldresult;
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

     $("#transferFrom").click(function(){
        $(this).html("<i class='fa fa-spinner' aria-hidden='true'></i> 发送授权的"+symbol+"中...").attr("disabled","disabled");
        var fromAddress = $("#fromAddress").val();
        var fromtoAddress = $("#fromtoAddress").val();
        var isAddress = (web3.isAddress(fromAddress) && web3.isAddress(fromtoAddress));
        var fromtoAmount = $("#fromtoAmount").val();
        var amount = Number($("#fromtoAmount").val()) * Math.pow(10,decimals);

        var _balances = new Promise(function (resolve, reject){mytoken.balances.call(fromAddress, function(err, result){
            if(!err){
                _balances = result;
                resolve(_balances);
            }else{
                console.error(err);
            }
        });});
         var nowsecond = Math.round(new Date().getTime()/1000);
        if (nowsecond <= mytoken.frozenEnd.call(fromAddress)) {
            _balances = _balances - mytoken.frozenNum.call(fromAddress);
        }
        if (Math.round(new Date().getTime()/1000) > mytoken.frozens.call(myaddress) && isAddress && myaddress != fromtoAddress && (myaddress == owner || !lock) && fromtoAmount >= 0.01 && amount <= _balances && amount <= mytoken.allowance.call(fromAddress, myaddress)) {
            var _estimateGas = mytoken.transferFrom.estimateGas(fromAddress, fromtoAddress, amount) * 2;
            console.log("estimateGas:" + _estimateGas / 2);
            if (_estimateGas <= myeth * Math.pow(10, 18)) {
                mytoken.transferFrom.sendTransaction(toAddress, amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
            } else if (_estimateGas > myeth * Math.pow(10, 18)) {
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
            if (_estimateGas <= myeth * Math.pow(10, 18)) {
                mytoken.approve.sendTransaction(toAddress, amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
            }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
            if (_estimateGas <= myeth * Math.pow(10, 18)) {
                mytoken.burn.sendTransaction(amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
            }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
            if (_estimateGas <= myeth * Math.pow(10, 18)) {
                mytoken.burnFrom.sendTransaction(toAddress, amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
            }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                if (amount * mytoken.buyPrice.call() + _estimateGas <= myeth * Math.pow(10, 18)) {
                    mytoken.buy.sendTransaction({
                        value: amount * mytoken.buyPrice.call(),
                        gasPrice: web3.toWei(gasPrice), gas: _estimateGas
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
                } else if (amount * mytoken.buyPrice.call() + _estimateGas > myeth * Math.pow(10, 18)) {
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
                if (_estimateGas <= myeth * Math.pow(10, 18)) {
                    mytoken.sell.sendTransaction(amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                } else if (_estimateGas > myeth * Math.pow(10, 18)) {
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


        $("#setlock").click(function () {
            if (myaddress == owner) {
                if ($("#setlock").hasClass("closeLock")) {
                    var _estimateGas = mytoken.setLock.estimateGas(true) * 2;
                    console.log("estimateGas:"+_estimateGas/2);
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setLock.sendTransaction(true, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setLock.sendTransaction("", {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setDrop.sendTransaction("", {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setDrop.sendTransaction(true, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setSellToContract.sendTransaction("", {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)){
                        mytoken.setSellToContract.sendTransaction(true, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.mintToken.sendTransaction(toAddress, amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setAirDrop.sendTransaction(_dropStart, _dropEnd, _airDrop * Math.pow(10, decimals), _totalDrop * Math.pow(10, decimals), {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setExchange.sendTransaction(_exchangeStart, _exchangeEnd, _sellPrice * Math.pow(10, 16), _buyPrice * Math.pow(10, 16), {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.getMonth.sendTransaction(_getyearmonth, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setMonthClose.sendTransaction(_yearmonth, "", {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setMonthClose.sendTransaction(_yearmonth, true, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.setMonthOpen.sendTransaction(openyearmonth, _users, _powers, _minToken, _count, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
            if (_estimateGas <= myeth * Math.pow(10, 18) && _amount>=0.001){
                mytoken.setMinEther.sendTransaction(amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function(error, result){
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
            }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                if (_estimateGas <= myeth * Math.pow(10, 18)) {
                    mytoken.takeEther.sendTransaction(amount, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.lockAccount.sendTransaction(lockaddress, _lockend, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
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
                    if (_estimateGas <= myeth * Math.pow(10, 18)) {
                        mytoken.freezeUserFunds.sendTransaction(freezeaddress, freezenum, _freezeend, {gasPrice: web3.toWei(gasPrice), gas: _estimateGas}, function (error, result) {
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
                    }else if(_estimateGas > myeth * Math.pow(10, 18)){
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

    });
});