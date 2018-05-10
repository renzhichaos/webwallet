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
    var myWallet = web3.eth.accounts.wallet;

    $("#eye").click(function() {
        if($("#eye").children("i").hasClass("am-icon-eye")) {
            $("#password").attr("type", "text");
            $("#eye").children("i").removeClass("am-icon-eye").addClass("am-icon-eye-slash");
        }else{
            $("#password").attr("type", "password");
            $("#eye").children("i").removeClass("am-icon-eye-slash").addClass("am-icon-eye");
        }
    });

    $('#password').bind('input propertychange', function () {
        var password = $("#password").val();
        if (password.length < 9) {
            $('.am-alert').fadeIn();
        } else {
            $('.am-alert').fadeOut();
        }
    });

    $("#create").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            myWallet.create(1);
            console.log(myWallet);
            var myWalleten = myWallet.encrypt(password);
            console.log(myWalleten);
            var save = myWallet.save(password);
            console.log(save);
            // var encryptwallet = web3.eth.accounts.wallet.encrypt(password);
            // console.log(encryptwallet);
        }else{
            $('.am-alert').fadeIn();
        }
    });

    $("#open").click(function () {
        var password = $("#password").val();
        if(password.length>=9){
            myWallet.load(password);
            console.log(myWallet);
        }else{
            $('.am-alert').fadeIn();
        }
    });

});
})(jQuery);
