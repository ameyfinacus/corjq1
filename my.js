 


$(document).ready(function(){

 
 $("#dialog-confirm").hide();


  $("#exit_submit").click(function() {
      

		   
	var mytext = $('#myText').val();
	$('<div style="background-color:white" id="dialog">'+mytext+'</div>').appendTo('body');    	
	event.preventDefault();

  $( "#dialog-confirm" ).dialog({
      resizable: true,
      height:200,
      modal: true,
      buttons: {
        "Yes": function() {
		   alert('so this means goodbye....');
		      var newWindow = window.open('', '_self', '');  
				window.close("www.google.com");
          $( this ).dialog( "close" );
        },
        "No": function() {
          $( this ).dialog( "close" );
        }
      }
    });
		   	   
  });
  
  
    $("#login_submit").click(function() {
       // alert('Login in.');
		  document.location.href='appli.html';

  });
  
  
      $("#tb_back").click(function() {
	  var pathname =  $(location).attr('pathname'); 
     alert(pathname);
		  
		});
  
  
   $("#login_submit").click(function() {
		  document.location.href='appli.html';		  
		});
   
    $("#loginok_submit").click(function()
	{
			 var a=$("#firstname").val();
		     var b=$("#firstpass").val();
		if(a == 'a' && b==="a") {
			 document.location.href='account.html';
        } 
		else {

                  var NewDialog = $('<div style="background-color:white" id="MenuDialog">\
            <p>Your ID and password is wrong </p>\
        </div>');
        NewDialog.dialog({
            modal: true,
            title: "Information",
            show: 'clip',
            hide: 'clip',
            buttons: [
                
                {text: "OK", click: function() {$(this).dialog("close")}}
            ]
        });
        return false;
        }		  
	});
  
  
     $("#account_submit").click(function() {
		  document.location.href='menu.html';		  
		});
		
		
		
		    $("#menu_bal_submit").click(function() {
 
				
        var NewDialog = $('<div style="background-color:white" id="MenuDialog">\
            <p>Your balance is 12,000 INR </p>\
        </div>');
        NewDialog.dialog({
            modal: true,
            title: "Information",
            show: 'clip',
            hide: 'clip',
            buttons: [
                
                {text: "OK", click: function() {$(this).dialog("close")}}
            ]
        });
        return false;
  
		//alert('bal out ');
  
		});
		    $("#menu_mini_submit").click(function() {
			  var NewDialog = $('<div style="background-color:white" id="MenuDialog">\
            <p>Your statement for account 321581215 </p>\
			<p>13/9/13 +1200 INR</p>\
			<p>14/9/13 -200 INR</p>\
			<p>14/9/13 +250 INR </p>\
			<p>Total balance available:32,150.50 INR</p>\
        </div>');
        NewDialog.dialog({
            modal: true,
            title: "Information",
            show: 'clip',
            hide: 'clip',
            buttons: [
                
                {text: "OK", click: function() {$(this).dialog("close")}}
            ]
        });
        return false;
  
		   
		});
		    $("#menu_chkbk_submit").click(function() {
			
			var a=31230;
			  var NewDialog = $('<div style="background-color:white" id="MenuDialog">\
            <p>Your cheque book request has been confirmed.ID'+a+' </p>\
        </div>');
        NewDialog.dialog({
            modal: true,
            title: "Information",
            show: 'clip',
            hide: 'clip',
            buttons: [
                
                {text: "OK", click: function() {$(this).dialog("close")}}
            ]			
        });
        return false;
  
		   
		});
  
  
  
  
  
  
  
});

 function progress() {
				var val = progressbar.progressbar( "value" ) || 0;
 				progressbar.progressbar( "value", val + 1 );
 
					if ( val < 99 ) {
					setTimeout( progress, 100 );
      }
    }

 