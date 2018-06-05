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
                    $('#my-login').html("钱包地址："+wallet.address);
                    $("#eth").html(etherString+" ETH");
                    console.log("walletbalance:"+etherString);
                });
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


    var infuraProvider;

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
                            infuraProvider = new ethers.providers.InfuraProvider(ethers.providers.networks.ropsten);
                            wallet.provider = infuraProvider;
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
