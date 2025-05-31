function goBack() {
    window.history.back();
}

$(document).ready(function() {

});

window.onload = function() {
var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.includes('mobile') || userAgent.includes('android')) {
    document.getElementById('li_Astrology').style.display = 'block';
}
};

window.setTimeout(function() {
var selectElement = document.querySelector(".goog-te-combo");
selectElement.addEventListener("change", function() {
    var selectedValue = selectElement.value;
    if (selectedValue != '' || selectedValue != null) {
        $.ajax({
            type: 'POST',
            url: "https://www.krishnayangauraksha.org/Contact_Us/lang_session",
            data: {
                "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
                language: selectedValue
            },
            success: function(response) {}
        });
    }
});
}, 2000);

function googleTranslateElementInit(selectedLang = '') {

    if ($("#addtheir_input").val() == 'English') {
    var convt_lang = "en";
} else {
    var convt_lang = $("#addtheir_input").val();
}
if (selectedLang != '') {
    var convt_lang = selectedLang;
    $.ajax({
        type: 'POST',
        url: "https://www.krishnayangauraksha.org/Contact_Us/lang_session",
        data: {
            "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
            language: convt_lang
        },
        success: function(response) {}
    });
}
setCookie('googtrans', '/en/' + convt_lang, 100);
var lang_name = $("#GL_" + convt_lang).text();
$("#addtheir_input").val(convt_lang);
$(".addtheir").text(lang_name);

new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,hi,hmn,hu,is,ig,id,ga,it,ja,jv,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ny,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tl,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu',
    defaultLanguage: 'en'

}, 'google_translate_element');
if (selectedLang != '') {
    location.href = '';
}
}

function setCookie(key, value, expiry) {
var expires = new Date();
expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

googleTranslateElementInit();

$(window).on('load', function() {
if (window.location.hash == "#online-gaushala-visit") {
    $("#online-gaushala-visit").modal("show");
} else {
}
});

$('.marquee').marquee({
duration: 15000,
gap: 50,
delayBeforeStart: 0,
direction: 'left',
startVisible: true,
loop: true,
duplicated: true
});

var intervalId = setInterval(function() {
var timoutId = setTimeout(function() {

    if ($(".borderImage2").hasClass("borderImage2")) {
        $(".borderImage2").removeClass('borderImage2').addClass('borderImagerep')
    } else {
        $(".borderImagerep").removeClass('borderImagerep').addClass('borderImage2')
    }
}, 1000);
}, 1000);

function checkValidate_live() {
var phone_number = document.getElementById('phone');
var email = document.getElementById('live_email');

form = $("#live_request_form").serialize();
$.ajax({
    type: "POST",
    url: "https://www.krishnayangauraksha.org/Contact_Us/liveVisit",
    dataType: "json",
    data: form,
    beforeSend: function() {
        $('#livesubmit').prop('disabled', true);
        $('#livesubmit').text('wait...');
    },
    success: function(response) {
        $('#livesubmit').prop('disabled', false);
        $('#livesubmit').text('Submit');
        if (response.error) {
            var count = 0;
            $.each(response, function(key, value) {
                if (key != 'error') {
                    $("." + key).html(value);
                    if (count == 0 && value != "") {
                        $("." + key).parent().find('input').focus()
                        count++;
                    }
                }
            });
        } else {
            if (response < 2) {
                document.getElementById("live_request_form").reset();
                $(".text-danger2").html('');
                $('#live_status').html(
                    '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Thank You for registering.</strong> We will inform you by Email / SMS / Whatsapp on the next Live Session.<button type="button" class="btn-close" data-bs-dismiss="alert" ></button></div>'
                )
            } else {
                $('#live_status').html(
                    '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Error!</strong> Fill All mandatory fields.<button type="button" class="btn-close" data-bs-dismiss="alert" ></button></div>'
                );
            }
        }
    }
});
event.preventDefault();
return false;
}

function subscribeUser() {
var user_email = $("#user_email").val();

$.ajax({
    type: 'POST',
    dataType: "json",
    url: 'https://www.krishnayangauraksha.org/subscribe-user',
    data: {
        "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
        'user_email': user_email
    },
    beforeSend: function() {
        $("#footer-subscribe-btn").html('Please wait...').attr("disabled", true);
    },
    success: function(data) {
        $("#footer-subscribe-btn").html('Submit').attr("disabled", false);
        $("#subscribe-message").html(data.msg);
        if (data.status == 1) {
            $("#user_email").val('');
        }
    }
});
}

window.onload = function() {
google.accounts.id.initialize({
    client_id: '967563326921-t5sjvp722cf1nd9cvm726114rhbq40lh.apps.googleusercontent.com',
    callback: handleCredentialResponse
});

google.accounts.id.prompt();
$("div#handle-preloader").css('display', 'none');
};

function handleCredentialResponse(response) {
if (response.credential) {
    const csrfTokenName = 'csrf_test_name';
    const csrfTokenHash = '96917cf30c3d5beadb703c907b579053';
    var formData = new FormData();
    formData.append('credential', response.credential);
    formData.append(csrfTokenName, csrfTokenHash);

    fetch('/google_login', {
            method: 'POST',
            body: formData
        })
        .then(window.location.reload())
        .then(data => {
        })
        .catch(error => {
            console.error('Error processing credential', error);
        });
}
}

$(document).ready(function() {
});

function login_page_sesssion() {
$.ajax({
    type: 'POST',
    url: 'https://www.krishnayangauraksha.org/loginPage.html',
    data: {
        "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
        'current_url': "https://www.krishnayangauraksha.org/"
    },
    success: function(data) {
        if (data != '') {
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&amp;access_type=online&amp;client_id=936841096520-qjcj3i13u3205qc5631ipej73pc7tpvs.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.krishnayangauraksha.org%2Fdonation-form.html&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto';
        }
    },
    error: function(xhr, ajaxOptions, thrownError) {
        alert('error');
        return false;
    }
});
}

function getBrowserDetails() {
    var browserDetails = {};

    browserDetails.userAgent = navigator.userAgent;

    var userAgent = navigator.userAgent.toLowerCase();
    var navigatorvendor = navigator.vendor.toLowerCase();
    var browser;
    var version;
    if (/chrome/.test(userAgent) && /google inc/.test(navigatorvendor)) {
        browser = "Chrome";
        version = userAgent.match(/chrome\/([\d.]+)/)[1];
    } else if (/safari/.test(userAgent) && /apple computer/.test(navigatorvendor)) {
        browser = "Safari";
        version = userAgent.match(/version\/([\d.]+)/)[1];
    } else if (/firefox/.test(userAgent)) {
        browser = "Firefox";
        version = userAgent.match(/firefox\/([\d.]+)/)[1];
    } else if (/msie/.test(userAgent) || /trident/.test(userAgent)) {
        browser = "Internet Explorer";
        version = userAgent.match(/(msie\s|rv:)([\d.]+)/)[2];
    } else if (/edg/.test(userAgent)) {
        browser = "Edge";
        version = userAgent.match(/edg\/([\d.]+)/)[1];
    } else {
        browser = "Unknown";
        version = "Unknown";
    }
    browserDetails.browserName = browser;
    browserDetails.browserVersion = version;

    var platform_name = "Unknown OS";
    var platform_version = "";
    if (navigator.platform.indexOf("Win") != -1) {
        platform_name = "Windows";
        var windowsVersion = userAgent.match(/windows nt ([\d.]+)/);
        if (windowsVersion) {
            platform_version = windowsVersion[1];
        }
    } else if (navigator.platform.indexOf("Mac") != -1) {
        platform_name = "Macintosh";
        var macVersion = userAgent.match(/mac os x ([\d._]+)/);
        if (macVersion) {
            platform_version = macVersion[1].replace(/_/g, ".");
        }
    } else if (navigator.platform.indexOf("Linux") != -1) {
        platform_name = "Linux";
        var linuxVersion = userAgent.match(/linux ([\d._]+)/);
        if (linuxVersion) {
            platform_version = linuxVersion[1].replace(/_/g, ".");
        }
    } else if (navigator.platform.indexOf("Android") != -1) {
        platform_name = "Android";
        var androidVersion = userAgent.match(/android ([\d.]+)/);
        if (androidVersion) {
            platform_version = androidVersion[1];
        }
    } else if (navigator.platform.indexOf("like Mac") != -1) {
        platform_name = "iOS";
        var iosVersion = userAgent.match(/version\/([\d._]+).*mobile.*safari/);
        if (iosVersion) {
            platform_version = iosVersion[1].replace(/_/g, ".");
        }
    }
    browserDetails.platform = platform_name;
    browserDetails.platformVersion = platform_version;

    browserDetails.language = navigator.language;

    browserDetails.cookiesEnabled = navigator.cookieEnabled;

    browserDetails.screenResolution = screen.width + "x" + screen.height;

    var browserdata = browserDetails;
    $.getJSON("https://api.ipify.org/?format=json", function (e) {
        browserdata.ipAddress = e.ip;
        
        setTimeout(function ()
        {
            if (browserdata != "") {
            var dataBrowser =
                {
                    platform: browserdata.platform,
                    browserName: browserdata.browserName,
                    browserVersion: browserdata.browserVersion,
                    screenResolution: browserdata.screenResolution,
                    ipaddress: browserdata.ipAddress,
                    application_name: 'Krishnayan Website',
                    platform_version: browserdata.platformVersion,
                    mac_no: "",
                    model: "",
                }
                $.ajax({
                    url: "https://www.krishnayangauraksha.org/getbrowserdetails",
                    type: 'POST',
                    data: {
                        "csrf_test_name":'96917cf30c3d5beadb703c907b579053', 
                        browserDetails: JSON.stringify(dataBrowser) 
                    },
                    success: function(response) {
                    },
                    error: function(xhr, status, error) {
                    }
                });
            }
        }, 500);
    });
}

$(document).ready(function() {
});

$(".read-more").click(function(e) {
e.preventDefault();
var containerp = $(this).parent().parent();
var containerd = $(this).parent().find('.paragraph-text');
var container = $(this).parent().find(".paragraph-text");
container.toggleClass("maxh-none");
var buttonText = $(this).text();
$(this).text(buttonText === "Read Less" ? "Read More" : "Read Less");
});

class VideoPlayer {
constructor() {
    this.modal = document.getElementById("videoModal");
    this.videoContainer = document.getElementById("videoContainer");
    this.videoFrame = document.getElementById("videoFrame");
    this.closeButton = document.querySelector(".close");
    this.videoButtons = document.querySelectorAll(".videoButton");

    this.videoButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const videoId = button.getAttribute("data-video-id");
            this.openModal(videoId);
        });
    });

    this.closeButton.addEventListener("click", () => {
        this.closeModal();
    });

    window.addEventListener("click", (event) => {
        if (event.target === this.modal) {
            this.closeModal();
        }
    });
}

openModal(videoId) {
    this.videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
    this.modal.style.display = "flex";
    this.playVideo();
}

closeModal() {
    this.modal.style.display = "none";
    this.videoFrame.src = "";
}

playVideo() {
    this.videoFrame.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
    );
}
}

const videoPlayer = new VideoPlayer();

function loginfunction() {

var loginmobileno = document.getElementById("loginmobileno").value;
var password = document.getElementById("password").value;
if (loginmobileno == "" && password == "") {
        }
if (loginmobileno == "") {
    alert("Please Enter Mobile Number.");
    document.getElementById('loginmobileno').focus();
    return false;
}
if (password == "") {
    alert("Please Enter Password.");
    document.getElementById('password').focus();
    return false;
}
$.ajax({
    url: "https://www.krishnayangauraksha.org/gwala_login_withMob.html",
    type: 'POST',
    dataType: 'json',
    data: {
        "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
        "mobileno": loginmobileno,
        "password": password
    },
    beforeSend: function() {
        $("#simple_login").val("Please Wait...").prop("disabled", true);
    },
    success: function(json) {
        console.log(json);
        $("#simple_login").val("Submit").prop("disabled", false);

        if (json != '' && json[0]['status'] != '0') {
            $('#usersList').empty();
            $.each(json, function(i) {
                var aa = '"';
                var bb = '"';
                $("#usersList").append("<p class='list_design'><b>Name:</b> " + json[i][
                        'firstname'
                    ] + ' ' + json[i]['lastname'] + "<br/> <b>Contact:</b> " + json[i][
                        'mobileno'
                    ] + "<br/> <b>Email:</b> " + json[i]['email'] + " <br/> <b>ID:</b> " +
                    json[i]['userid'] + " <a onclick='proceedFunction(" + aa + json[i][
                        'userid'
                    ] + bb +
                    ");' class='btn btn-success' style='float: right'>Proceed</a></p>");
            });
            $("#listpopup").modal('show');
            $("#loginpopup").modal('hide');
        } else {
            document.getElementById('invalid_user').innerHTML =
                "Invalid Mobile Number/Email OR Password";
            return false;
        }
    },
    error: function(json) {
        document.getElementById('invalid_user').innerHTML =
            "Something went wrong! Please try again later";
        $("#simple_login").val("Submit").prop("disabled", false);
        return false;
    }
});
}
var login_state_field = '';

function proceedFunction(userID) {
$.ajax({
    url: "https://www.krishnayangauraksha.org/Login_List_Proceed",
    type: 'POST',
    dataType: 'json',
    data: {
        "csrf_test_name":'96917cf30c3d5beadb703c907b579053',
        "userID": userID
    },
    success: function(json) {
        console.log(json);
        if (json == 2) {
            $("#listpopup").modal('hide');
            alert('Something went wrong! Please fill form.');
        } else {
            location.reload();
            $('#Pincode_s').trigger('input');
            $("#listpopup").modal('hide');
        }
    }
});
}

function switch_account_list() {
$('#usersList').empty();
    $("#usersList").append("<p class='list_design'>No Data</p>");
    $("#listpopup").modal('show');
}
