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

    var web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

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
      console.log(password);
      if (password.length < 9) {
          $('.am-alert').fadeIn();
      } else {
          $('.am-alert').fadeOut();
      }
    });


    $("#create").click(function () {
        var password = $("#password").val();
        console.log(password);
        if(password.length>=9){
            var newwallet = web3.eth.accounts.wallet.create();
            console.log(newwallet);
            // var encryptwallet = web3.eth.accounts.wallet.encrypt(password);
            // console.log(encryptwallet);
        }else{
            $('#password').popover({
                theme: 'danger',
                content: '你的密码至少需要设置为9位!请确保密码足够强!'
            }).popover('open');
        }
    })

  });
})(jQuery);
