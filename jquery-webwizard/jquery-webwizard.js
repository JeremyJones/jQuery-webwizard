//
// jquery webwizard
//

function getCode (s, fC, myOpt) {
    return function () {
	
	var options = {
	    'title'             : 'Web Wizard',
	    'next'              : document.location.href,
	    'cancel'            : '/',
	    'form_action'       : document.location.href,
	    'form_enctype'      : 'application/x-www-form-urlencoded',
	    'form_method'       : 'POST',
	    'form_onsubmit'     : 'return true;',
	    'hide_buttons'      : 0,
	    'back_onclick'      : 'return true;',
	    'cancel_onclick'    : 'return true;',
	    'title_bgcolor'     : '#00007E',
	    'title_fontcolor'   : '#FFFFFF',
	    'wizard_align'      : 'center',
	    'body_onload'       : 'return true',
	    'gif_back'          : 'http://jquery-webwizard.googlecode.com/hg/wizard-back.gif',
	    'gif_next'          : 'http://jquery-webwizard.googlecode.com/hg/wizard-next.gif',
	    'gif_cancel'        : 'http://jquery-webwizard.googlecode.com/hg/wizard-cancel.gif'
	};

	jQuery.extend(options, myOpt);

	var myhtml = '<table border=2 cellpadding=5 cellspacing=0 valign="middle">' +
	    '<tr><td class="wizardTD"  width=450 bgcolor="' + options.title_bgcolor + '">' +
	    '<font color="' + options.title_fontcolor + '" face="Arial, Helvetica, sans-serif"><b>' + options.title + '</b></font>' +
	    '</td></tr>' +
	    '<tr><td class="wizardTD"  width=450 bgcolor="#BEBEBE"><form id="webwizardForm" method="' + options.form_method + '" enctype="' + options.form_enctype + '" ' +
	    ' onsubmit="' + options.form_onsubmit + '" action="' + options.form_action + '">' +
	    fC + '<p><hr />' + // form content
	    '<table border=0 cellspacing=0 cellpadding=3 align="right"><tr><td class="wizardTD" ><a href="javascript:history.back()"><img border=0 width=75 height=23 ' +
	    ' src="' + options.gif_back + '" title="" alt="back"></a>' +
	    '<input id="wizardSubmitButton" type="image" border="0" width=75 height=23 src="' + options.gif_next + '" alt="next" title="">&nbsp;' +
	    '<a href="' + options.cancel + '" onclick="' + options.cancel_onclick + '"><img border=0 width=75 height=23 alt="cancel" title="" ' +
	    ' src="' + options.gif_cancel + '" ></a></td></tr></table>' +
	    '</form></td></tr></table>';

	$(s).html(myhtml);
	};
}

$(document).ready(function () {
		      jQuery.fn.webwizard = function (formContents, myOptions) {
			  return this.each(getCode(this, formContents, myOptions));
			  };
		      });

true;

//
