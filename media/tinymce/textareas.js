/*
 // Very simple configuration. 
 tinyMCE.init({
	mode : "textareas",
	theme : "advanced",
	//content_css : "/appmedia/blog/style.css",
	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	theme_advanced_buttons1 : "fullscreen,separator,bold,italic,underline,strikethrough,separator,bullist,numlist,outdent,indent,separator,link,unlink,separator,image,cleanup,help,separator,code",	
	theme_advanced_buttons2 : "styleselect,formatselect,fontselect,fontsizeselect",	
	theme_advanced_buttons2 : "",
	theme_advanced_buttons3 : "",
	auto_cleanup_word : true,
	plugins : "table,save,advhr,advimage,advlink,emotions,iespell,insertdatetime,preview,searchreplace,print,contextmenu,fullscreen",
	plugin_insertdate_dateFormat : "%m/%d/%Y",
	plugin_insertdate_timeFormat : "%H:%M:%S",
	extended_valid_elements : "a[name|href|target=_self|title|onclick],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name],hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style]",
	fullscreen_settings : {
		theme_advanced_path_location : "top",
		theme_advanced_buttons1 : "fullscreen,separator,preview,separator,cut,copy,paste,separator,undo,redo,separator,search,replace,separator,code,separator,cleanup,separator,bold,italic,underline,strikethrough,separator,forecolor,backcolor,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,help",
		theme_advanced_buttons2 : "removeformat,styleselect,formatselect,fontselect,fontsizeselect,separator,bullist,numlist,outdent,indent,separator,link,unlink,anchor",
		theme_advanced_buttons3 : "sub,sup,separator,image,insertdate,inserttime,separator,tablecontrols,separator,hr,advhr,visualaid,separator,charmap,emotions,iespell,flash,separator,print"
	}
});
*/

tinyMCE.init({
	// General options
	mode : "textareas",
	theme : "advanced",
	skin : "o2k7",
	skin_variant : "silver",
	// plugins : "safari,style,layer,table,advhr,advimage,advlink,emotions,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,imagemanager,filemanager",	
	plugins : "safari,style,layer,table",
	theme_advanced_buttons1 : "bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,fontselect,fontsizeselect",
	theme_advanced_buttons2 : "bullist,numlist,|,outdent,indent,blockquote,|,link,unlink,image,code",
	//theme_advanced_buttons3 : "|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
	theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,",
	//theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	// theme_advanced_statusbar_location : "bottom",
	theme_advanced_resizing : true,
	content_css : "/media/tinymce/standard.css",
	plugin_insertdate_dateFormat : "%m/%d/%Y",	
	plugin_insertdate_timeFormat : "%H:%M:%S",
	extended_valid_elements : "a[name|href|target=_blank|title|onclick],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name],hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style]",
	valid_elements: "*[*]",
	extended_valid_elements : "*[*]",
	// Drop lists for link/image/media/template dialogs
	template_external_list_url : "js/template_list.js",
	external_link_list_url : "js/link_list.js",
	external_image_list_url : "js/image_list.js",
	media_external_list_url : "js/media_list.js",
	template_replace_values : {
		username : "Some User",
		staffid : "991234"
	},
	width : "800",
    height : "400",
});
