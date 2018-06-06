(function($) {
'use strict';

$(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
        $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
        $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });

    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
        window.web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        console.log('No Web3 Detected... using HTTP Provider');
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    console.log(web3);

    /*var version = web3.version.api;
    console.log(version);
    ////0x3Ee12EB76229A77fb71D8E8A94D4035E90F0d708
    $.getJSON('http://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359', function (data) {
        var contractABI = "";
        contractABI = JSON.parse(data.result);
        console.log(contractABI);
        if (contractABI != ''){
            var MyContract = new web3.eth.Contract(contractABI);
            MyContract.options.address = 0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359;
            var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
            console.log("result1 : " + result);
            var result = myContractInstance.members(1);
            console.log("result2 : " + result);
        } else {
            console.log("Error" );
        }
    });*/

    var myWallet;
    var network = ethers.providers.networks.homestead;//'homestead', 'ropsten', 'rinkeby', 'kovan'
    var etherscanProvider = new ethers.providers.EtherscanProvider(network, "3GC258M4JPH9E4AFZ65K1XFXFV6DKBCQES");
    var infuraProvider = new ethers.providers.InfuraProvider(network);
    var web3Provider = new ethers.providers.Web3Provider(web3.currentProvider, network);
    var fallbackProvider = new ethers.providers.FallbackProvider([
        etherscanProvider,
        infuraProvider,
        web3Provider
    ]);
    var myProvider = new ethers.providers.JsonRpcProvider(infuraProvider.url+"C1MIQHLneozsKWIZNMdR", network);
    //var myProvider = etherscanProvider;
    var provider = myProvider;

    console.log(provider);

    $("#my-network").on('change', function() {
        network = $(this).val();
        localStorage.setItem("ethersjs_network", network);
        window.location.reload();
    });

    var contractABI = [{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "balances","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_lock","type": "bool"}],"name": "setLock","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_address","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],"name": "transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "users","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "lock","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}],"name": "Transfer","type": "event"}];

    if (typeof(Storage) !== "undefined") {
        // 针对 localStorage/sessionStorage 的代码

        if(localStorage.getItem("ethersjs_network")){
            network = localStorage.getItem("ethersjs_network");
            $("#my-network").find("option[value='"+network+"']").attr('selected', true);
            $("#my-network").trigger('changed.selected.amui');
            etherscanProvider = new ethers.providers.EtherscanProvider(network, "3GC258M4JPH9E4AFZ65K1XFXFV6DKBCQES");
            infuraProvider = new ethers.providers.InfuraProvider(network);
            web3Provider = new ethers.providers.Web3Provider(web3.currentProvider, network);
            fallbackProvider = new ethers.providers.FallbackProvider([
                etherscanProvider,
                infuraProvider,
                web3Provider
            ]);
            myProvider = new ethers.providers.JsonRpcProvider(infuraProvider.url+"C1MIQHLneozsKWIZNMdR", network);
            //myProvider = etherscanProvider;
            provider = myProvider;
            console.log(provider);
        }

        if(sessionStorage.getItem("login_wallet") && localStorage.getItem("ethersjs_wallet")){
            $(".my-loginpass").fadeOut();
            $("#login").fadeOut();
            $('#my-login-conment').fadeIn();
            $('#my-login').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>登录钱包中...");
            var userpass = sessionStorage.getItem("login_wallet");
            var json = localStorage.getItem("ethersjs_wallet");
            ethers.Wallet.fromEncryptedWallet(json, userpass).then(function(wallet) {
                wallet.provider = provider;
                myWallet = wallet;
                console.log("Address: " + wallet.address);
                var balancePromise = myWallet.getBalance();
                var pricePromise = myWallet.getBalance();//etherscanProvider.getEtherPrice();
                var allPromise = Promise.all([balancePromise, pricePromise]);
                allPromise.then(function(values) {
                    console.log(values);
                    var balance = values[0];
                    var price = values[1];
                    var etherString = ethers.utils.formatEther(balance);
                    $('#my-login').html("钱包地址："+wallet.address);
                    $("#eth").html(price +" USD * "+etherString+" ETH");
                    $('#my-login-valid2').fadeOut();
                    console.log("walletbalance:"+etherString);
                    console.log("eth price:"+price);
                }, function (err) {
                    $('#my-login').html(err);
                });

                if(localStorage.getItem("ethersjs_token")) {
                    var tokens = JSON.parse(localStorage.getItem("ethersjs_token"));
                    for(var j = 0,len = tokens.length; j < len; j++){
                        var contractAddress = tokens[j];
                        console.log("token"+j+": "+tokens[j]);
                        //$.getJSON('http://api.etherscan.io/api?module=contract&action=getabi&address='+contractAddress, function (data) {
                        //  if (data.result !== "") {
                        //      contractABI = JSON.parse(data.result);
                        //  }
                            console.log(contractABI);
                            if (contractABI != '') {
                                var MyContract = new ethers.Contract(contractAddress, contractABI, wallet);
                                var balancesPromise = MyContract.balances(wallet.address);
                                var namePromise = MyContract.name();
                                var symbolPromise = MyContract.symbol();
                                var decimalsPromise = MyContract.decimals();
                                var lockPromise = MyContract.lock();
                                var allPromises = Promise.all([namePromise, symbolPromise, decimalsPromise, lockPromise, balancesPromise]);

                                allPromises.then(function (values) {
                                    var name = values[0];
                                    var symbol = values[1];
                                    var decimals = values[2];
                                    var lock = values[3];
                                    var balances = ethers.utils.formatUnits(values[4], decimals);

                                    $('#my-tokens').append('<li>\n' +
                                        '<i class="am-margin-left-sm fab fa-ethereum fa-2x"></i>\n' +
                                        '<span class="am-badge am-badge-danger am-round am-text-xl am-margin-right-sm" id="eth">'+balances+' '+symbol+'</span>\n' +
                                        '<span class="am-text-xl am-margin-left-sm">'+name+'('+symbol+'):</span>\n' +
                                        '</li>');
                                    console.log('Values:' + values);
                                }, function (err) {
                                    $('#my-login').html(err);
                                });
                            } else {
                                console.log("Error");
                            }
                        //});
                    }
                }
            });
        }else if(!localStorage.getItem("ethersjs_wallet")){
            $('#my-login-valid2').fadeIn();
        }
    } else {
        // 抱歉！不支持 Web Storage ..
        $("#my-storage").fadeIn();
    }

    function syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    $(".my-eye").click(function() {
        if($(this).children("i").hasClass("am-icon-eye")) {
            $(this).parent().prev().attr("type", "text");
            $(this).children("i").removeClass("am-icon-eye").addClass("am-icon-eye-slash");
        }else{
            $(this).parent().prev().attr("type", "password");
            $(this).children("i").removeClass("am-icon-eye-slash").addClass("am-icon-eye");
        }
    });

    $("[type='password']").bind('input propertychange', function () {
        var password = $(this).val();
        if (password.length < 9) {
            $(this).parent().siblings('.my-valid').fadeIn();
        } else {
            $(this).parent().siblings('.my-valid').fadeOut();
        }
    });

    $("#create").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            $("#password").val("");
            $('#my-conment').fadeIn();
            $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>创建中...");
            try{
                var wallet = ethers.Wallet.createRandom();

                // noinspection JSAnnotator
                function callback(percent) {
                    console.log("Encrypting: " + parseInt(percent * 100) + "% complete");
                }

                var encryptPromise = wallet.encrypt(password, callback);

                encryptPromise.then(function(json) {
                    console.log(json);
                    if (typeof(Storage) !== "undefined") {
                        // 针对 localStorage/sessionStorage 的代码
                        localStorage.setItem("ethersjs_wallet", json);
                    } else {
                        // 抱歉！不支持 Web Storage ..
                        $("#my-storage").fadeIn();
                    }
                    $('#my-save').html(syntaxHighlight(wallet));
                    $('#my-login-valid2').fadeOut();
                }, function (err) {
                    $('#my-save').html(err);
                });
            }
            catch(err)
            {
                $('#my-save').html(err);
            }
        }else{
            $('#my-valid').fadeIn();
        }
    });

    $("#import").click(function () {
        var importpass = $("#importpass").val();
        var importtype = $("#my-import-type").val();
        var importinput = $("#importinput").val();
        if(importpass.length>=9 && importinput != ""){
            $("#importinput").val("");
            $("#importpass").val("");
            $('#my-import-conment').fadeIn();
            $('#my-import-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>导入中...");
            if(importtype == "privatekey") {
                try
                {
                    var wallet = new ethers.Wallet(importinput);
                    console.log("Address: " + wallet.address);
                    // noinspection JSAnnotator
                    function callback(percent) {
                        console.log("Encrypting: " + parseInt(percent * 100) + "% complete");
                    }

                    var encryptPromise = wallet.encrypt(importpass, callback);

                    encryptPromise.then(function (json) {
                        console.log(json);
                        if (typeof(Storage) !== "undefined") {
                            // 针对 localStorage/sessionStorage 的代码
                            localStorage.setItem("ethersjs_wallet", json);
                        } else {
                            // 抱歉！不支持 Web Storage ..
                            $("#my-storage").fadeIn();
                        }
                        $('#my-import-save').html(syntaxHighlight(wallet));
                        $('#my-login-valid2').fadeOut();
                    }, function (err) {
                        $('#my-import-save').html(err);
                    });
                }
                catch(err)
                {
                    $('#my-import-save').html(err);
                }

            }else if(importtype == "mnemonic"){
                try
                {
                    var wallet = ethers.Wallet.fromMnemonic(importinput);
                    console.log("Address: " + wallet.address);
                    // noinspection JSAnnotator
                    function callback(percent) {
                        console.log("Encrypting: " + parseInt(percent * 100) + "% complete");
                    }

                    var encryptPromise = wallet.encrypt(importpass, callback);

                    encryptPromise.then(function (json) {
                        console.log(json);
                        if (typeof(Storage) !== "undefined") {
                            // 针对 localStorage/sessionStorage 的代码
                            localStorage.setItem("ethersjs_wallet", json);
                        } else {
                            // 抱歉！不支持 Web Storage ..
                            $("#my-storage").fadeIn();
                        }
                        $('#my-import-save').html(syntaxHighlight(wallet));
                        $('#my-login-valid2').fadeOut();
                    }, function (err) {
                        $('#my-import-save').html(err);
                    });
                }
                catch(err)
                {
                    $('#my-import-save').html(err);
                }
            }else if(importtype == "keystore"){
                try
                {
                    var json = JSON.stringify(importinput);
                    ethers.Wallet.fromEncryptedWallet(json, importpass).then(function(wallet) {
                        console.log("Address: " + wallet.address);
                        if (typeof(Storage) !== "undefined") {
                            // 针对 localStorage/sessionStorage 的代码
                            localStorage.setItem("ethersjs_wallet", json);
                        } else {
                            // 抱歉！不支持 Web Storage ..
                            $("#my-storage").fadeIn();
                        }
                        $('#my-import-save').html(syntaxHighlight(wallet));
                        $('#my-login-valid2').fadeOut();
                    }, function (err) {
                        $('#my-import-save').html(err);
                    });
                }
                catch(err)
                {
                    $('#my-import-save').html(err);
                }
            }
        }else{
            $('#my-import-valid').fadeIn();
        }
    });

    $("#export").click(function () {
        if(localStorage.getItem("ethersjs_wallet")) {
            var password = $("#password").val();
            if(password.length>=9){
                $("#password").val("");
                $('#my-conment').fadeIn();
                $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>导出中...");
                if (typeof(Storage) !== "undefined") {
                    // 针对 localStorage/sessionStorage 的代码
                    try{
                        var json = localStorage.getItem("ethersjs_wallet");
                        ethers.Wallet.fromEncryptedWallet(json, password).then(function(wallet) {
                            console.log("Address: " + wallet.address);
                            var exportjson = {"地址":wallet.address, "私钥":wallet.privateKey, "助记词":wallet.mnemonic};
                            $('#my-save').html(syntaxHighlight(exportjson)+"<br>Keystore:<br>"+syntaxHighlight(json));
                        }, function (err) {
                            $('#my-save').html(err);
                        });
                    }
                    catch(err)
                    {
                        $('#my-save').html(err);
                    }
                } else {
                    // 抱歉！不支持 Web Storage ..
                    $("#my-storage").fadeIn();
                }
            }else{
                $('#my-valid').fadeIn();
            }
        }else{
            $('#my-login-valid2').fadeIn();
        }
    });

    $("#login").click(function () {
        if(localStorage.getItem("ethersjs_wallet")) {
            var userpass = $("#userpass").val();
            if(userpass.length>=9){
                $("#userpass").val("");
                $('#my-login-conment').fadeIn();
                $('#my-login').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>登录钱包中...");
                if (typeof(Storage) !== "undefined") {
                    // 针对 localStorage/sessionStorage 的代码
                        var json = localStorage.getItem("ethersjs_wallet");
                        ethers.Wallet.fromEncryptedWallet(json, userpass).then(function (wallet) {
                            wallet.provider = provider;
                            myWallet = wallet;
                            sessionStorage.setItem("login_wallet", userpass);
                            console.log("Address: " + wallet.address);
                            var balancePromise = myWallet.getBalance();

                            balancePromise.then(function (balance) {
                                var etherString = ethers.utils.formatEther(balance);
                                $(".my-loginpass").fadeOut();
                                $("#login").fadeOut();
                                $('#my-login').html("钱包地址：" + wallet.address);
                                $("#eth").html(etherString + " ETH");
                                $('#my-login-valid2').fadeOut();
                                console.log("walletbalance:" + etherString);
                            });
                        }, function (err) {
                            $('#my-login').html(err);
                        });
                } else {
                    // 抱歉！不支持 Web Storage ..
                    $("#my-storage").fadeIn();
                }
            }else{
                $('#my-login-valid').fadeIn();
            }
        }else{
            $('#my-login-valid2').fadeIn();
        }
    });

    $("#eth").click(function () {
        try {
            var balancePromise = myWallet.getBalance();

            balancePromise.then(function (balance) {
                var etherString = ethers.utils.formatEther(balance);
                $("#eth").html(etherString + " ETH");
                console.log("walletbalance:" + ethers.utils.formatEther(balance));
            }, function (err) {
                $('#eth').html(err);
            });
        }
        catch(err)
        {
            $('#eth').html(err);
        }
    });

    $("#del").click(function () {
        if(localStorage.getItem("ethersjs_wallet")) {
            var password = $("#password").val();
            if(password.length>=9){
                $('#my-confirm').modal({
                    relatedTarget: this,
                    onConfirm: function(options) {
                        $("#password").val("");
                        $('#my-conment').fadeIn();
                        $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>删除中...");
                        if (typeof(Storage) !== "undefined") {
                            // 针对 localStorage/sessionStorage 的代码
                            try{
                                var json = localStorage.getItem("ethersjs_wallet");
                                ethers.Wallet.fromEncryptedWallet(json, password).then(function(wallet) {
                                    console.log("Address: " + wallet.address);
                                    localStorage.removeItem("ethersjs_wallet");
                                    $('#my-save').html("删除成功！");
                                    $('#my-login-valid2').fadeIn();
                                }, function (err) {
                                    $('#my-save').html(err);
                                });
                            }
                            catch(err)
                            {
                                $('#my-save').html(err);
                            }
                        } else {
                            // 抱歉！不支持 Web Storage ..
                            $("#my-storage").fadeIn();
                        }
                    },
                    // closeOnConfirm: false,
                    onCancel: function() {
                    }
                });
            }else{
                $('#my-valid').fadeIn();
            }
        }else{
            $('#my-valid2').fadeIn();
        }
    });

});
})(jQuery);
