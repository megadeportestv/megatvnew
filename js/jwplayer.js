(function(){jwplayer("pplayer").setup({file:atob(getURL),title: "REPRODUCTOR",
	 description : "EN VIVO",drm:{
            clearkey:{"keyId": atob(getKEY),"key": atob(getKEY2)},width:"100%",height:"100%",aspectratio:"16:9",autostart:false,cast:{},sharing:{}});})();