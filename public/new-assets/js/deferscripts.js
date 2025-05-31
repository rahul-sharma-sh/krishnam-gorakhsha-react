//google tag manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-P8G95S");


//one signal
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "80e408c6-8f3b-4971-b806-435479d3b39b",
  });
});

//given by marphics
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMKLQ9KN');


// geta
// (function (w, d, s) {
//   var f = d.getElementsByTagName(s)[0],
//     j = d.createElement(s);
//   j.async = true;
//   j.onload = function () {
//     var geta = window.GetA(
//       "ZEpUNm9xM2F4VFVlTHZzWjo3NmFiYjgwZDJjYWFiOTI3OWQyYTc3NGUzZTU2ODczYWI1Zjg4YmZiMzdkNjA1NDAyNmVkODc3YTA0MDQ3ODgwY2ZhODBjMzg2NWQ4MGQ1YjI5ZGRkNTU5NzIyMjExMWNlNzA2ZmZhNmFkZGI0ZTU2MDhjOTc4NWE5NzRiZDE5MTdmZjQ1YjNkN2ExYjNiMjdmNWZhNjJkN2EyOTM3MjYz",
//       false,
//       "5b74547c-8f7b-4d40-a3b5-ddb8bd6d8f32"
//     );
//   };
//   j.src = "https://bot-frame.geta.ai/output.js";
//   f.parentNode.insertBefore(j, f);
// })(window, document, "script");

 
function add_custom() {
    $("#session_rowID_custom").trigger("onchange");
}


$("#cls_mothly_inr_popup").click(function() {
    $('#own_wish_wait').hide();
    $("#newpaymentmodal").modal("hide");
    //$(".paymentpopup").addClass("d-none");
    $('#showpreview2').show();
})

var cowTotalPrice = $("#Other_services_cart_items").val();

                    function updateCowTotalPrice(newPrice) {
                        cowTotalPrice = newPrice;
                    }

                    function handleMinusClick(valueId, previewId) {
                        var minValue = 3;
                        const valueSpan = document.getElementById(valueId);
                        let currentValue = parseInt(valueSpan.textContent);
                        if (currentValue > minValue) {
                            valueSpan.textContent = currentValue - 1;
                            updatePreview(previewId, currentValue - 1);
                        }
                        if ($("#currency_name").val() != 'INR') {
                            convertCurrencyAmount();
                        }
                    }

                    function handlePlusClick(valueId, previewId) {
                        const valueSpan = document.getElementById(valueId);
                        let currentValue = parseInt(valueSpan.textContent);
                        valueSpan.textContent = currentValue + 1;
                        updatePreview(previewId, currentValue + 1);
                        if ($("#currency_name").val() != 'INR') {
                            convertCurrencyAmount();
                        }
                    }

                    function setupRadioToggle(monthlyId, oneTimeId, plusMinusId, previewId) {
                        const cowMonthly = document.getElementById(monthlyId);
                        const cowOneTime = document.getElementById(oneTimeId);
                        const newPlusMinus = document.getElementById(plusMinusId);
                        var minValue = 3;
                        if (parseInt($("#gwala_cowvalue").text(), 10) > minValue) {
                            minValue = parseInt($("#gwala_cowvalue").text(), 10);
                        }
                        if (cowMonthly.checked) {
                            let gwalaCowCost = cowTotalPrice;
                            document.getElementById(previewId).innerHTML = "₹ " + gwalaCowCost + "/-";
                            newPlusMinus.style.display = 'none';
                            $("#showpreview_footerTotal_reload .monthly_label").html('Monthly');
                        }

                        if (cowOneTime.checked) {
                            let gwalaCowCost = cowTotalPrice * minValue;
                            document.getElementById(previewId).innerHTML = "₹ " + gwalaCowCost + "/-";
                            newPlusMinus.style.display = 'flex';
                            $("#showpreview_footerTotal_reload .monthly_label").html('One Time');
                        }
                        if ($("#currency_name").val() != 'INR') {
                            convertCurrencyAmount();
                        }
                    }

                    function updatePreview(previewId, value) {
                        let gwalaCowCost = cowTotalPrice * value;
                        // document.getElementById(previewId).innerHTML = "₹ " + gwalaCowCost + "/-";
                        document.getElementById(previewId).innerHTML = "₹ " + gwalaCowCost + "/-";
                    }

                    function add_custom() {
                      $("#session_rowID_custom").trigger("onchange");
                  }
            
                  
                  $("#cls_mothly_inr_popup").click(function() {
                      $('#own_wish_wait').hide();
                      $("#newpaymentmodal").modal("hide");
                      //$(".paymentpopup").addClass("d-none");
                      $('#showpreview2').show();
                  })


                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                      
                      
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})


                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                        
                        
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})


                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                      
                        
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})


                        function add_custom() {
                          $("#session_rowID_custom").trigger("onchange");
}
                    
                    
                        $("#cls_mothly_inr_popup").click(function() {
                          $('#own_wish_wait').hide();
                        $("#newpaymentmodal").modal("hide");
                        //$(".paymentpopup").addClass("d-none");
                        $('#showpreview2').show();
})

                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                        
                        
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})

                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                        
                      
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})


	function sidebarSubscribeUser(){
		var user_email = $("#sidebar-user_email").val();
    
    $.ajax({
						type:'POST',
						dataType: "json",
						url:'https://www.krishnayangauraksha.org/subscribe-user',
						data:{'user_email':user_email}, 
						beforeSend: function(){
							$("#sidebar-subscribe-btn").html('Please wait...').attr("disabled", true);
						},               
						success:function(data){ 
								$("#sidebar-subscribe-btn").html('Join Us').attr("disabled", false);
								$("#sidebar-subscribe-message").html(data.msg);
								if(data.status == "1"){
									$("#sidebar-user_email").val('');
								}
						}
        });
	}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


                          function add_custom() {
                            $("#session_rowID_custom").trigger("onchange");
}
                    
                      
                          $("#cls_mothly_inr_popup").click(function() {
                            $('#own_wish_wait').hide();
                          $("#newpaymentmodal").modal("hide");
                          //$(".paymentpopup").addClass("d-none");
                          $('#showpreview2').show();
})
                    
	
                        
                        
                  
                      
                    
                        
