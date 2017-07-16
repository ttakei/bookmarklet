javascript:(
function(){
  var script=document.createElement('script');
  script.innerHTML='window.addEventListener(
      \'paste\',
      function(e){
        e.preventDefault();
        var data_transfer = (e.clipboardData)||(window.clipboardData);
        var str = data_transfer.getData(\'text\');
        var data = str.split(\'@\');
        var name = data[0];
        var postalCode = data[1];
        var address = data[2];
        var address_arr = address.split(\' \');
        var state = address_arr[0];
        var address1 = "";
        for (var i=1; i<address_arr.length; i++) {
          address1 = address1 + address_arr[i];
        }
        var phoneNumber = data[3];
        document.getElementById(\'postalCode\').value=postalCode;
        document.getElementsByName(\'state\')[6].value=state;
        document.getElementsByName(\'line1\')[1].value=address1;
        document.getElementsByName(\'phoneNumber\')[0].value=phoneNumber;
        document.getElementById(\'displayableOrderComment\').value=\'‚²’•¶’¸‚«‚ ‚è‚ª‚Æ‚¤‚²‚´‚¢‚Ü‚·B\';
      }
  );';
  document.body.appendChild(script)
})();
