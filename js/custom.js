$(document).ready(function(){
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var d=new Date();
		var utcM =d.getUTCMinutes();if (utcM.toString().length == 1) {utcM = "0" + utcM;}
		var mM =d.getMinutes();if (mM.toString().length == 1) {mM = "0" + mM;}
		var xMonth = d.getMonth()+6;
		document.getElementById("curDate").innerHTML=d.getDate()+' '+ months[d.getMonth()] + ' ' + d.getFullYear();
		document.getElementById("confDate").innerHTML=d.getDate()+' '+ months[d.getMonth()] + ' ' + d.getFullYear();
		document.getElementById("sumDate").innerHTML=d.getDate()+' '+ months[d.getMonth()] + ' ' + d.getFullYear();
		document.getElementById("locTime").innerHTML=d.getHours()+':'+ mM;
		document.getElementById("utcTime").innerHTML=d.getUTCHours()+':'+ utcM;
		document.getElementById("sumDateN").innerHTML=d.getDate()+' '+ months[xMonth] + ' ' + d.getFullYear();

	$("#aDfct>button").on("click", function(){$("#nDfct").show("fast");return false;});
	$("#stButt").on("click",function(){
		$("#vOper,#vMaint,#vSumm").hide("fast");
		$("#vStart").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-nameplate")
		$("ol.breadcrumb li:nth-child(2)").html("Startup");
		return false;
		});
	$("#mButt").on("click",function(){
		$("#vOper,#vStart,#vSumm").hide("fast");
		$("#vMaint").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-settings")
		$("ol.breadcrumb li:nth-child(2)").html("Maintenance");
		return false;
		});
	$("#oButt").on("click",function(){
		$("#vStart,#vMaint,#vSumm").hide("fast");
		$("#vOper").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-airplane")
		$("ol.breadcrumb li:nth-child(2)").html("Operational");
		return false;
		});
	$("#suButt").on("click",function(){
		$("#vOper,#vMaint,#vStart").hide("fast");
		$("#vSumm").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-notes");
		$("ol.breadcrumb li:nth-child(2)").html("Summary");
		return false;
		});
	
/*StartupScript*/
	$("#fConf .cfm").on("click",function(){$(this).attr("class","cfmD").html("CONFIRMED");$("#fConf .cirStatW").attr("class","cirStat").html("OK");$("#fConf input, #fConf select").attr("disabled","disabled");return false;});
	
	$("#fConf .edBtn").on("click",function(){$("#fConf .cfmD").attr("class","cfm").html("CONFIRM");$("#fConf .cirStat").attr("class","cirStatW");$("#fConf input, #fConf select").removeAttr("disabled");return false});
	
	$("#fCrew .cfm").on("click",function(){$(this).attr("class","cfmD").html("CONFIRMED");$("#fCrew .cirStatW").attr("class","cirStat").html("OK");$("#fCrew input, #fCrew select").attr("disabled","disabled");return false;});
	
	$("#fCrew .edBtn").on("click",function(){$("#fCrew .cfmD").attr("class","cfm").html("CONFIRM");$("#fCrew .cirStat").attr("class","cirStatW");$("#fCrew input, #fCrew select").removeAttr("disabled");return false;});		
			
	$("#fAirStat .cfm").on("click",function(){$(this).attr("class","cfmD").html("CONFIRMED");$("#fAirStat .cirStatW").attr("class","cirStat").html("OK");$("#fAirStat input, #fAirStat select").attr("disabled","disabled");return false;});
	
	$("#fAirStat .edBtn").on("click",function(){$("#fAirStat .cfmD").attr("class","cfm").html("CONFIRM");$("#fAirStat .cirStat").attr("class","cirStatW");$("#fAirStat input, #fAirStat select").removeAttr("disabled");return false;});		
			
	$("#fMulti .cfm").on("click",function(){$(this).attr("class","cfmD").html("CONFIRMED");$("#fMulti .cirStatW").attr("class","cirStat").html("OK");$("#fMulti input, #fMulti select").attr("disabled","disabled");return false;});
	
	$("#fMulti .edBtn").on("click",function(){$("#fMulti .cfmD").attr("class","cfm").html("CONFIRM");$("#fMulti .cirStat").attr("class","cirStatW");$("#fMulti input, #fMulti select").removeAttr("disabled");return false;});
	});




/*OperationalScript*/