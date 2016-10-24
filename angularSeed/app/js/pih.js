(function ($) {
    if(!$.pih)$.pih={
	  clearToken : function(){
		  sessionStorage.removeItem('token');
		  localStorage.removeItem('token');
	  },
	  getToken : function(){
		  var t = sessionStorage.getItem('token');
		  if(t == null)t = localStorage.getItem('token');
		  if(t == null)window.location.href = "login.html";
		  else return t;
	  },
	  setToken : function(t, rememberMe, next){
		  $.pih.clearToken();
		  if(rememberMe)
		    localStorage.setItem('token', t);
		  else
		    sessionStorage.setItem('token', t);
		  window.location.href = next;
	  },
	  handleError : function(res, listener){
		    if (res.status == 500) {
				var apiErr = $.parseJSON(res.text);
				if (apiErr.errCode == 'CONSTRAINT_VIOLATION') {
					var cvs = $.parseJSON(apiErr.errMsg);
					for (var i in cvs) {
						var cv = cvs[i];
						listener(cv.msgTemplate, cv.field);
					}
				} else if(apiErr.errCode == 'TOKEN_INVALID'){
					window.location.href = "login.html";
				}else{
					listener(apiErr.errCode);
				}
			}
			console.log(res);
	  },
	  
	  loadLang : function(){
		if(!$.pih.i18n)$.i18n.properties({
			name:'', 
			path:'js/lang/', 
			mode:'map',
			checkAvailableLanguages: true,
			async: true,
			callback: function() {
				$.pih.i18n = $.i18n;
			}
		});
	  },
	  getField : function(doc, name){
		if(doc.fields)for(var i = 0;i < doc.fields.length;i++){
			var f = doc.fields[i];
			if(f.field == name){
				return f;
			}
		}
		return null;
      },
	  getFieldValue : function(doc, name){
		var v = doc[name.toLowerCase()];
		var f = $.pih.getField(doc, name);
		if(f && f.lines){
			var l = "";
			for(var linenum in f.lines){
				l = l+f.lines[linenum];
			}
			return l;
		}
		return v;
      },
	  createSuccess : function(text){
		var e = $("<div>", {
			class: "alert alert-success"
		});
		$("<a>", {
			href: "#",
			class: "close",
			"data-dismiss": "alert",
			"aria-label": "close",
			html: "&times;"
		}).appendTo(e);
		$("<span>", {
			html: text
		}).appendTo(e);
		return e;
      },
      createAlert : function(text){
		var e = $("<div>", {
			class: "alert alert-danger"
		});
		$("<a>", {
			href: "#",
			class: "close",
			"data-dismiss": "alert",
			"aria-label": "close",
			html: "&times;"
		}).appendTo(e);
		$("<span>", {
			html: text
		}).appendTo(e);
		return e;
      }
    };
})(jQuery);