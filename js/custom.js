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

	$("#aDfct>button").on("click", function(){$("#nDfct").show("fast")});
	$("#stButt").on("click",function(){
		$("#vOper,#vMaint,#vSumm").hide("fast");
		$("#vStart").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-nameplate")
		$("ol.breadcrumb li:nth-child(2)").html("Startup");
		});
	$("#mButt").on("click",function(){
		$("#vOper,#vStart,#vSumm").hide("fast");
		$("#vMaint").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-settings")
		$("ol.breadcrumb li:nth-child(2)").html("Maintenance");
		});
	$("#oButt").on("click",function(){
		$("#vStart,#vMaint,#vSumm").hide("fast");
		$("#vOper").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-airplane")
		$("ol.breadcrumb li:nth-child(2)").html("Operational");
		});
	$("#suButt").on("click",function(){
		$("#vOper,#vMaint,#vStart").hide("fast");
		$("#vSumm").show("slow");
		$("ol.breadcrumb span").attr("class","glyphicons glyphicons-notes");
		$("ol.breadcrumb li:nth-child(2)").html("Summary");
		});
		$(".cfm").on("click",function(){
			$(this).attr("class","cfmD").html("CONFIRMED");
			});
	});