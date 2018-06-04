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
    //var myWallet = web3.eth.accounts.wallet;
    var myWallet;

    if (typeof(Storage) !== "undefined") {
        // 针对 localStorage/sessionStorage 的代码
        if(sessionStorage.getItem("login_wallet") && localStorage.getItem("ethersjs_wallet")){
            $(".my-loginpass").fadeOut();
            $("#login").fadeOut();
            $('#my-login-conment').fadeIn();
            $('#my-login').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>登录钱包中...");
            var userpass = sessionStorage.getItem("login_wallet");
            var json = localStorage.getItem("ethersjs_wallet");
            ethers.Wallet.fromEncryptedWallet(json, userpass).then(function(wallet) {
                infuraProvider = new ethers.providers.InfuraProvider(ethers.providers.networks.ropsten);
                wallet.provider = infuraProvider;
                myWallet = wallet;
                console.log("Address: " + wallet.address);
                var balancePromise = myWallet.getBalance();

                balancePromise.then(function(balance) {
                    var etherString = ethers.utils.formatEther(balance);
                    $('#my-login').html("钱包：");
                    $("#eth").html(etherString+" ETH");
                    console.log("walletbalance:"+etherString);
                });
            });
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

    /*var bip39 = require('bip39');
    var hdkey = require('ethereumjs-wallet/hdkey');
    var util = require('ethereumjs-util');*/

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


    var infuraProvider;

    $("#create").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            $("#password").val("");
            $('#my-conment').fadeIn();
            $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>创建中...");
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

            });


            /*var secretSeed = lightwallet.keystore.generateRandomSeed();
            console.log("secretSeed:"+secretSeed);
            lightwallet.keystore.createVault(
                {
                    password: password,
                    seedPhrase: secretSeed,
                    hdPathString: "m/44'/60'/0'/0/0"
                }, function (err, ks) {
                    global_keystore = ks;
                    console.log("keystore:");
                    console.log(ks);
                    ks.keyFromPassword(password, function (err2, pwDerivedKey) {
                        console.log("pwkey:"+pwDerivedKey);
                        ks.generateNewAddress(pwDerivedKey);
                        console.log(ks);
                        console.log("addresses:");
                        console.log(ks.getAddresses());
                        console.log("privatekey:");
                        console.log(ks.exportPrivateKey(ks.getAddresses()[0], pwDerivedKey));
                        global_keystore = ks.serialize();
                        console.log("keystore2:"+global_keystore);
                    });
                }

            );*/

            /*var mnemonic = bip39.generateMnemonic();
            console.log(mnemonic);
            var seed = bip39.mnemonicToSeed(mnemonic);
            console.log(seed);
            var hdWallet = hdkey.fromMasterSeed(seed);
            console.log(hdWallet);
            var key1 = hdWallet.derivePath("m/44'/60'/0'/0/0");
            var address1 = util.pubToAddress(key1._hdkey._publicKey, true);
            console.log(address1);
            address1 = util.toChecksumAddress(address1.toString('hex'));
            console.log(address1);*/

            // myWallet.create(1);
            // console.log(myWallet);
            // var myWalleten = myWallet.encrypt(password);
            // console.log(myWalleten);
            // var save = myWallet.save(password);
            // console.log(save);
            // var encryptwallet = web3.eth.accounts.wallet.encrypt(password);
            // console.log(encryptwallet);
        }else{
            $('#my-valid').fadeIn();
        }
    });

    $("#import").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            $("#password").val("");
            $('#my-conment').fadeIn();
            $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>导入中...");
            var wallet = ethers.Wallet(password);

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

            });
        }else{
            $('#my-valid').fadeIn();
        }
    });

    $("#export").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            $("#password").val("");
            $('#my-conment').fadeIn();
            $('#my-save').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>导出中...");
            if (typeof(Storage) !== "undefined") {
                // 针对 localStorage/sessionStorage 的代码
                var json = localStorage.getItem("ethersjs_wallet");
                ethers.Wallet.fromEncryptedWallet(json, password).then(function(wallet) {
                    console.log("Address: " + wallet.address);
                    $('#my-save').html(syntaxHighlight(wallet));
                });
            } else {
                // 抱歉！不支持 Web Storage ..
                $("#my-storage").fadeIn();
            }
            // var wallet = ethers.Wallet.fromMnemonic(password);

            /*var kss = lightwallet.keystore.deserialize(global_keystore);
            kss.keyFromPassword(password, function (err, pwDerivedKey) {
                console.log("pwkey:"+pwDerivedKey);
                console.log("addresses:"+kss.getAddresses());
                var privatekey = kss.exportPrivateKey(kss.getAddresses()[0], pwDerivedKey);
                var aa = web3.eth.accounts.privateKeyToAccount(privatekey);
                console.log(aa);
                console.log("seed:"+kss.getSeed(pwDerivedKey));
            })*/
            /*myWallet.load(password);
            console.log(myWallet);*/

        }else{
            $('#my-valid').fadeIn();
        }
    });

    $("#login").click(function () {
        var userpass = $("#userpass").val();
        if(userpass.length>=9){
            $("#userpass").val("");
            $(".my-loginpass").fadeOut();
            $("#login").fadeOut();
            $('#my-login-conment').fadeIn();
            $('#my-login').html("<i class=\"am-icon-spinner am-icon-pulse\"></i>登录钱包中...");
            if (typeof(Storage) !== "undefined") {
                // 针对 localStorage/sessionStorage 的代码
                var json = localStorage.getItem("ethersjs_wallet");
                ethers.Wallet.fromEncryptedWallet(json, userpass).then(function(wallet) {
                    infuraProvider = new ethers.providers.InfuraProvider(ethers.providers.networks.ropsten);
                    wallet.provider = infuraProvider;
                    myWallet = wallet;
                    sessionStorage.setItem("login_wallet", userpass);
                    console.log("Address: " + wallet.address);
                    var balancePromise = myWallet.getBalance();

                    balancePromise.then(function(balance) {
                        var etherString = ethers.utils.formatEther(balance);
                        $('#my-login').html("钱包：");
                        $("#eth").html(etherString+" ETH");
                        console.log("walletbalance:"+etherString);
                    });
                });
            } else {
                // 抱歉！不支持 Web Storage ..
                $("#my-storage").fadeIn();
            }
        }else{
            $('#my-login-valid').fadeIn();
        }
    });

    $("#eth").click(function () {
        var balancePromise = myWallet.getBalance();

        balancePromise.then(function(balance) {
            var etherString = ethers.utils.formatEther(balance);
            $("#eth").html(etherString+" ETH");
            console.log("walletbalance:"+ethers.utils.formatEther(balance));
        });
    });

});
})(jQuery);
