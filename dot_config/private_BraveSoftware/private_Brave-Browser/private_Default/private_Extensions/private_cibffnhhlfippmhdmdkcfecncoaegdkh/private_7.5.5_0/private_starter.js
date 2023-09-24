"use strict";

// Close
if (document.body.classList.contains('yp-yellow-pencil')) {
	var url = new URL(window.location);
	url.searchParams.delete("wyp");
	window.location.replace(url);

// Open
}else{
var editorBody = `
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
	<meta name="robots" content="noindex">
	<meta name="google" value="notranslate">
	<meta http-equiv="Pragma" content="no-cache">
	<title>YellowPencil</title>
	<style>
		body,html{overflow:hidden}.wyp-iframe-loader{display:block;width:100%;height:100%;top:0;left:0;position:fixed;background-color:#fff;z-index:2147483646}#loader{background-color:#ccc;height:2px;width:200px;position:fixed;top:50%;left:50%;margin-left:-100px;margin-top:18px;border-radius:8px}#loader i{background-color:#1592e6;width:10%;position:absolute;height:4px;margin-top:-1px;-webkit-transition:width .1s;transition:width .1s;border-radius:8px}.loading-files{width:130px;height:24px;top:50%;color:#6a6a6a;text-align:center;font-size:12px;left:50%;position:fixed;margin-left:-65px;margin-top:-12px;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Arial,sans-serif!important;font-weight:600}
	</style>
	</head><body class="yp-yellow-pencil wyp-met-dis wyp-flexible-inspector-active">

	<div class="wyp-iframe-loader">
		<div id="loader"><i></i></div>
		<div class="loading-files">Loading Editor</div>
	</div>

		<iframe id="iframe" class="yellow_pencil_iframe" tabindex="-1"></iframe>


	<div id="ed-elt-tr"><ul></ul></div>

	<div id="vsl-css-vi">
		<div class="css-view-top">
			<span class="yicon icon-filter"></span>
			<input id="visual-rule-filter" placeholder="Filter.." type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
			<div class="visual-manager-close"></div>
		</div>
		<div id="vsl-css-co"></div>
	</div>

	<span class='yicon icon-admin-collapse wyp-panel-show'></span>


	

	<div class="responsive-right-handle"></div>
	<div class="responsive-left-handle"></div>
	<span class="responsive-add-breakpoint"><span class="yicon icon-plus"></span></span>
	<div class="responsive-size-text"><span class='device-size'></span>px and <span class='media-control' data-code='max-width'>smaller</span> screens</div>

	<div class='ed-pnl wyp-disable-cancel'>
        <div class='ed-pnl-top'>

            <a class='wf-close-btn-link' tabindex='-1'><span data-toggle='tooltip' data-placement='left' title='Close Editor' class='wyp-close-btn'></span></a>

            <a class='wyp-button wyp-save-btn wyp-disabled'>Export</a>

            <a data-toggle='tooltipTopBottom' data-placement='bottom' title='Review Changes <span class="wyp-s-shortcut">(C)</span>' class='wyp-button-manage'></a>


            <div class='wyp-clear'></div>

        </div><div id='property-responsive-menu'></div><div class='ed-pnl-inner'><div class='wyp-csng-sec'>
                <div class='wyp-customizing-inner'>
                <div id='customizing-mode' data-this-type='global' class='wyp-type-menu-link'><span class='type-heading'>Global</span> <span class='yicon icon-arrow-down'></span></div><div id='c-t-list'><ul><li data-value='single' class=''><i class='manage-this-type'></i><i class='reset-this-type'></i><h6><span><span class='current-type'></span>"Home" page</span><small class='type-byte'><span>empty</span><i>changed</i></small></h6><p>apply style just to the current page.</p></li><li data-value="template" class="type-disabled"><i class="manage-this-type"></i><i class="reset-this-type"></i><h6><span><span class="current-type"></span>"Page" template</span><small class="type-byte"><span>empty</span><i>changed</i></small></h6><p>apply style to all pages of the current post type.</p></li><li data-value="global" class="active-customizing-list"><i class="manage-this-type"></i><i class="reset-this-type"></i><h6><span><span class="current-type"></span>Global</span><small class="type-byte"><span>empty</span><i>changed</i></small></h6><p>apply style to the entire website.</p></li><li id="wyp-current-page"><h6>Customize another page</h6></li></ul></div>
                <div class='wyp-clear'></div>
                <div id='wyp-crnt-el'>No element selected</div>
                </div>
        </div><form autocomplete='off' spellcheck='false' autocorrect='off' autocapitalize='off'><ul class='ed-pnl-list list-active'>

		<li class='text-option'>
			<h3>Text</h3>
			<div class='wyp-t-cont'>

				<div id='font-family-group' class='op-g se-o' data-css='font-family'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set a font family.'>Font Family</span><i class='mo-i'></i><label id="include-webfont-label"><input type="checkbox" checked="checked"><span class="include-webfont-input"></span></label></span><textarea tabindex='-1' disabled='disabled'>`+chrome.runtime.getURL('editor/')+`json/google-fonts.json</textarea><div class='ac-p-d'><input id='wyp-font-family' type='text' class='in-ac' value='' /><div id='ac-pl-font-family' class='ac-d'></div></div></div></div>

				<div class='option-group-class option-group-vn-p'>
				<div id='color-group' class='op-g co-o' data-css='color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the text color.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

				<div id='font-weight-group' class='op-g se-o' data-css='font-weight'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets how thick or thin characters in text should be displayed.'>Weight</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"300","label":"Light 300", "category":""},{"value":"400","label":"normal 400", "category":""},{"value":"500","label":"Semi-Bold 500", "category":""},{"value":"600","label":"Bold 600", "category":""},{"value":"700","label":"Extra-Bold 700", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-font-weight' type='text' class='in-ac' value='' /><div id='ac-pl-font-weight' class='ac-d'></div></div></div></div>
				</div>

				<div id='font-size-group' class='op-g sl-o' data-css='font-size' data-decimals='1' data-px='8,100' data-pc='0,100' data-em='1,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the size of a font.'>Font Size</span><i class='mo-i'></i></span><div id='wyp-font-size' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='font-size-value' class='css-va' /><input type='text' id='font-size-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='line-height-group' class='op-g sl-o' data-css='line-height' data-decimals='0.1' data-px='0,100' data-pc='0,100' data-em='1,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the leading.'>Line Height</span><i class='mo-i'></i></span><div id='wyp-line-height' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='line-height-value' class='css-va' /><input type='text' id='line-height-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div class='option-group-class option-group-less'>
				<div id='font-style-group' class='op-g ra-o' data-css='font-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the font style for a text.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-font-style'><div class="ra"><input type="radio" name="font-style" value="normal"><label id="font-style-normal">normal</label></div><div class="ra"><input type="radio" name="font-style" value="italic"><label id="font-style-italic">italic</label></div></div></div></div>

				<div id='text-transform-group' class='op-g ra-o' data-css='text-transform'><div class='op-c'><span class='op-l'><span class='di-btn' title='Controls the capitalization of text.'>Transform</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-text-transform'><div class="ra"><input type="radio" name="text-transform" value="none"><label id="text-transform-none">no</label></div><div class="ra"><input type="radio" name="text-transform" value="capitalize"><label id="text-transform-capitalize">Aa</label></div><div class="ra"><input type="radio" name="text-transform" value="uppercase"><label id="text-transform-uppercase">AA</label></div><div class="ra"><input type="radio" name="text-transform" value="lowercase"><label id="text-transform-lowercase">aa</label></div></div></div></div>
				</div>

				<div class='option-group-class option-group-less'>
				<div id='text-decoration-group' class='op-g ra-o' data-css='text-decoration'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the decoration added to the text.'>Decoration</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-text-decoration'><div class="ra"><input type="radio" name="text-decoration" value="none"><label id="text-decoration-none">A</label></div><div class="ra"><input type="radio" name="text-decoration" value="overline"><label id="text-decoration-overline">A</label></div><div class="ra"><input type="radio" name="text-decoration" value="line-through"><label id="text-decoration-line-through">A</label></div><div class="ra"><input type="radio" name="text-decoration" value="underline"><label id="text-decoration-underline">A</label></div></div></div></div>

				<div id='text-align-group' class='op-g ra-o' data-css='text-align'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the horizontal alignment of text in an element.'>Align</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-text-align'><div class="ra"><input type="radio" name="text-align" value="left"><label id="text-align-left"><span class="yicon icon-editor-alignleft"></span></label></div><div class="ra"><input type="radio" name="text-align" value="center"><label id="text-align-center"><span class="yicon icon-editor-aligncenter"></span></label></div><div class="ra"><input type="radio" name="text-align" value="right"><label id="text-align-right"><span class="yicon icon-editor-alignright"></span></label></div><div class="ra"><input type="radio" name="text-align" value="justify"><label id="text-align-justify"><span class="yicon icon-editor-justify"></span></label></div></div></div></div>
				</div>

				<div class='option-group-class option-group-less'>
				<div id='text-shadow-group' class='op-g se-o' data-css='text-shadow'><div class='op-c'><span class='op-l'><span class='di-btn' title='Adds shadow to text.'>Text Shadow</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"none","label":"none", "category":""},{"value":"rgba(0, 0, 0, 0.3) 0px 1px 1px","label":"Basic Shadow", "category":""},{"value":"rgb(255, 255, 255) 1px 1px 0px, rgb(170, 170, 170) 2px 2px 0px","label":"Shadow Multiple", "category":""},{"value":"rgb(255, 0, 0) -1px 0px 0px, rgb(0, 255, 255) 1px 0px 0px","label":"Anaglyph", "category":""},{"value":"rgb(255, 255, 255) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px","label":"Emboss", "category":""},{"value":"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 255, 255) 0px 0px 6px, rgb(255, 119, 255) 0px 0px 8px, rgb(255, 0, 255) 0px 0px 12px, rgb(255, 0, 255) 0px 0px 16px, rgb(255, 0, 255) 0px 0px 20px, rgb(255, 0, 255) 0px 0px 24px","label":"Neon", "category":""},{"value":"rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) -1px 0px 1px","label":"Outline", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-text-shadow' type='text' class='in-ac' value='' /><div id='ac-pl-text-shadow' class='ac-d'></div></div></div></div>

				<div id='white-space-group' class='op-g se-o' data-css='white-space'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies how white-space inside an element is handled.'>Breaking</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"Normal", "category":""},{"value":"nowrap","label":"No Wrap", "category":""},{"value":"pre","label":"Pre", "category":""},{"value":"pre-line","label":"Pre Line", "category":""},{"value":"pre-wrap","label":"Pre Wrap", "category":""},{"value":"break-spaces","label":"Break Spaces", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-white-space' type='text' class='in-ac' value='' /><div id='ac-pl-white-space' class='ac-d'></div></div></div></div>
				</div>

				<div id='letter-spacing-group' class='op-g sl-o' data-default='normal' data-css='letter-spacing' data-decimals='0.1' data-px='-5,10' data-pc='0,100' data-em='-1,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Increases or decreases the space between characters in a text.'>Letter Spacing</span><i class='mo-i'></i></span><div id='wyp-letter-spacing' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='letter-spacing-value' class='css-va' /><input type='text' id='letter-spacing-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='word-spacing-group' class='op-g sl-o' data-default='normal' data-css='word-spacing' data-decimals='0.1' data-px='-5,20' data-pc='0,100' data-em='-1,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Increases or decreases the white space between words.'>Word Spacing</span><i class='mo-i'></i></span><div id='wyp-word-spacing' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='word-spacing-value' class='css-va' /><input type='text' id='word-spacing-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div class='option-group-class option-group-less cl-direction'>
					<div id='column-count-group' class='op-g sl-o' data-css='column-count' data-decimals='1' data-px='1,12' data-pc='1,12' data-em='1,12'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the number of columns an element should be divided into.'>Columns</span><i class='mo-i'></i></span><div id='wyp-column-count' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='column-count-value' class='css-va' /><input type='text' id='column-count-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='direction-group' class='op-g ra-o' data-css='direction'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the text direction/writing direction within a block-level element.'>Direction</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-direction'><div class="ra"><input type="radio" name="direction" value="ltr"><label id="direction-ltr">left</label></div><div class="ra"><input type="radio" name="direction" value="rtl"><label id="direction-rtl">right</label></div></div></div></div>
				</div>

			</div>
		</li><li class='background-option'>
			<h3>Background</h3>
			<div class='wyp-t-cont'><div id='background-type-group' class='op-g ra-o' data-css='background-type'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Background Type</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-background-type'><div class="ra"><input type="radio" name="background-type" value="background"><label id="background-type-background">background</label></div><div class="ra"><input type="radio" name="background-type" value="filter"><label id="background-type-filter">backdrop filters</label></div></div></div></div><div class='wyp-background-background-section'>
				<div id='background-color-group' class='op-g co-o' data-css='background-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the background color of an element.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-background-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

				<div id='background-image-group' class='op-g in-o' data-css='background-image'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets background image for an element.'>Image</span><i class='mo-i'></i> </span><div class='in-wr'><input placeholder='none' id='wyp-background-image' type='text' class='wyp-input' value='' /><span class='wyp-upload-btn wyp-gallery-btn'></span><span class='wyp-clear-btn yicon icon-no-alt'></span></div><div style='clear:both;'></div><a class='wyp-unsplash-btn'>Stock Images</a><a data-json='`+chrome.runtime.getURL('editor/')+`json/gradients.json' class='wyp-gradient-btn'>Gradients</a><div style='clear:both;'></div><div class="wyp-gradient-section"><div class="gradient-editor"><div class="wyp-gradient-bar-background"><div class="wyp-gradient-bar"></div><div class="wyp-gradient-pointer-area"></div></div><input id="iris-gradient-color" type="text" /><div class="wyp-gradient-space"></div><div class="wyp-gradient-orientation" data-degree="90"><b>Orientation</b><i></i></div></div><div class="wyp-gradient-list"></div><div class="uigradient-api">by <a target="_blank" href="https://uigradients.com">uiGradients</a></div></div><div class='wyp-unsplash-section'><div class='wyp-unsplash-inner'><input id='unsplash-search' type='text' value='' placeholder='Search an image' /><div class='wyp-unsplash-list'></div></div><div class="unsplash-api">by <a target="_blank" href="https://unsplash.com">Unsplash</a></div></div></div></div>

				<div id='background-size-group' class='op-g ra-o' data-css='background-size'><div class='op-c'><span class='op-l'><span class='di-btn' title='The size of the background image.'>Size</span><i class='mo-i'></i>  </span><div class='ra-gr-3 ra-c' id='wyp-background-size'><div class="ra"><input type="radio" name="background-size" value="auto"><label id="background-size-auto">custom</label></div><div class="ra"><input type="radio" name="background-size" value="cover"><label id="background-size-cover">cover</label></div><div class="ra"><input type="radio" name="background-size" value="contain"><label id="background-size-contain">contain</label></div></div></div><div class='background-size-custom-group wyp-after'><div class='background-size-x-group'><input type='text' id='background-size-x-value' class='wyp-bgs-css-val' /><input type='text' id='background-size-x-custom' class='wyp-bgs-prefix' /><span class='property-title'>Width</span><div class='un-s'></div></div><div class='background-size-y-group'><input type='text' id='background-size-y-value' class='wyp-bgs-css-val' /><input type='text' id='background-size-y-custom' class='wyp-bgs-prefix' /><span class='property-title'>Height</span><div class='un-s'></div></div></div></div>

				<div class='option-group-class background-cgn'>
				<div id='background-blend-mode-group' class='op-g se-o' data-css='background-blend-mode'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the blending mode of background color and image.'>Blend Mode</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"normal", "category":""},{"value":"multiply","label":"multiply", "category":""},{"value":"screen","label":"screen", "category":""},{"value":"overlay","label":"overlay", "category":""},{"value":"darken","label":"darken", "category":""},{"value":"lighten","label":"lighten", "category":""},{"value":"color-dodge","label":"color-dodge", "category":""},{"value":"saturation","label":"saturation", "category":""},{"value":"color","label":"color", "category":""},{"value":"luminosity","label":"luminosity", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-background-blend-mode' type='text' class='in-ac' value='' /><div id='ac-pl-background-blend-mode' class='ac-d'></div></div></div></div>

				<div id='background-attachment-group' class='op-g ra-o' data-css='background-attachment'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets whether a background image is fixed or scrolls with the rest of the page.'>Fixed</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-background-attachment'><div class="ra"><input type="radio" name="background-attachment" value="fixed"><label id="background-attachment-fixed">fixed</label></div><div class="ra"><input type="radio" name="background-attachment" value="scroll"><label id="background-attachment-scroll">scroll</label></div></div></div></div>

				</div>

				<div id='background-position-x-group' class='op-g sl-o' data-css='background-position-x' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the horizontal starting position of a background image.'>Horizontal Position</span><i class='mo-i'></i></span><div id='wyp-background-position-x' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='background-position-x-value' class='css-va' /><input type='text' id='background-position-x-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='background-position-y-group' class='op-g sl-o' data-css='background-position-y' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the vertical starting position of a background image.'>Vertical Position</span><i class='mo-i'></i></span><div id='wyp-background-position-y' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='background-position-y-value' class='css-va' /><input type='text' id='background-position-y-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='background-repeat-group' class='op-g ra-o' data-css='background-repeat'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets if the background image will be repeated.'>Tile</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-background-repeat'><div class="ra"><input type="radio" name="background-repeat" value="repeat"><label id="background-repeat-repeat"><svg focusable="false" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M1 1h4v4H1zm5 0h4v4H6zm5 0h4v4h-4zM1 6h4v4H1zm5 0h4v4H6zm5 0h4v4h-4zM1 11h4v4H1zm5 0h4v4H6zm5 0h4v4h-4z"></path></svg></label></div><div class="ra"><input type="radio" name="background-repeat" value="repeat-x"><label id="background-repeat-repeat-x"><svg focusable="false" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M1 6h4v4H1zm5 0h4v4H6zm5 0h4v4h-4z"></path></svg></label></div><div class="ra"><input type="radio" name="background-repeat" value="repeat-y"><label id="background-repeat-repeat-y"><svg focusable="false" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 1h4v4H6zm0 5h4v4H6zm0 5h4v4H6z"></path></svg></label></div><div class="ra"><input type="radio" name="background-repeat" value="no-repeat"><label id="background-repeat-no-repeat"><span class="yicon icon-no-alt"></span></label></div></div></div></div>

				<div id='background-clip-group' class='op-g ra-o' data-css='background-clip'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines how far the background should extend within the element.'>Clip</span><i class='mo-i'></i>  </span><div class='ra-gr-3 ra-c' id='wyp-background-clip'><div class="ra"><input type="radio" name="background-clip" value="text"><label id="background-clip-text">text</label></div><div class="ra"><input type="radio" name="background-clip" value="border-box"><label id="background-clip-border-box">border</label></div><div class="ra"><input type="radio" name="background-clip" value="padding-box"><label id="background-clip-padding-box">padding</label></div></div></div></div>
				</div><div class='wyp-background-filter-section'>

					<div id='blur-backdrop-filter-group' class='op-g sl-o' data-css='blur-backdrop-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Blur</span><i class='mo-i'></i></span><div id='wyp-blur-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='blur-backdrop-filter-value' class='css-va' /><input type='text' id='blur-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='grayscale-backdrop-filter-group' class='op-g sl-o' data-css='grayscale-backdrop-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Grayscale</span><i class='mo-i'></i></span><div id='wyp-grayscale-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='grayscale-backdrop-filter-value' class='css-va' /><input type='text' id='grayscale-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='invert-backdrop-filter-group' class='op-g sl-o' data-css='invert-backdrop-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Invert</span><i class='mo-i'></i></span><div id='wyp-invert-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='invert-backdrop-filter-value' class='css-va' /><input type='text' id='invert-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='sepia-backdrop-filter-group' class='op-g sl-o' data-css='sepia-backdrop-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Sepia</span><i class='mo-i'></i></span><div id='wyp-sepia-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='sepia-backdrop-filter-value' class='css-va' /><input type='text' id='sepia-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='brightness-backdrop-filter-group' class='op-g sl-o' data-css='brightness-backdrop-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Brightness</span><i class='mo-i'></i></span><div id='wyp-brightness-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='brightness-backdrop-filter-value' class='css-va' /><input type='text' id='brightness-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='contrast-backdrop-filter-group' class='op-g sl-o' data-css='contrast-backdrop-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Contrast</span><i class='mo-i'></i></span><div id='wyp-contrast-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='contrast-backdrop-filter-value' class='css-va' /><input type='text' id='contrast-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='hue-rotate-backdrop-filter-group' class='op-g sl-o' data-css='hue-rotate-backdrop-filter' data-decimals='1' data-px='0,360' data-pc='0,360' data-em='0,360'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Hue Rotate</span><i class='mo-i'></i></span><div id='wyp-hue-rotate-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='hue-rotate-backdrop-filter-value' class='css-va' /><input type='text' id='hue-rotate-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='saturate-backdrop-filter-group' class='op-g sl-o' data-css='saturate-backdrop-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Saturate</span><i class='mo-i'></i></span><div id='wyp-saturate-backdrop-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='saturate-backdrop-filter-value' class='css-va' /><input type='text' id='saturate-backdrop-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div></div>
		</li>

		<li class='spacing-option'>
			<h3>Spacings</h3>
			<div class='wyp-t-cont'>

				<div id='spacing-type-group' class='op-g ra-o' data-css='spacing-type'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Spacing Type</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-spacing-type'><div class="ra"><input type="radio" name="spacing-type" value="padding"><label id="spacing-type-padding">padding</label></div><div class="ra"><input type="radio" name="spacing-type" value="margin"><label id="spacing-type-margin">margin</label></div></div></div></div>

				<div class='wyp-spacing-padding-section'>
					<div id='padding-left-group' class='op-g sl-o' data-css='padding-left' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the left padding (space) of an element.'>Padding Left</span><i class='mo-i'></i></span><div id='wyp-padding-left' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='padding-left-value' class='css-va' /><input type='text' id='padding-left-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='padding-right-group' class='op-g sl-o' data-css='padding-right' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the right padding (space) of an element.'>Padding Right</span><i class='mo-i'></i></span><div id='wyp-padding-right' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='padding-right-value' class='css-va' /><input type='text' id='padding-right-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='padding-top-group' class='op-g sl-o' data-css='padding-top' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the top padding (space) of an element.'>Padding Top</span><i class='mo-i'></i></span><div id='wyp-padding-top' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='padding-top-value' class='css-va' /><input type='text' id='padding-top-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='padding-bottom-group' class='op-g sl-o' data-css='padding-bottom' data-decimals='1' data-px='0,200' data-pc='0,100' data-em='0,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the bottom padding (space) of an element.'>Padding Bottom</span><i class='mo-i'></i></span><div id='wyp-padding-bottom' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='padding-bottom-value' class='css-va' /><input type='text' id='padding-bottom-after' class='css-un' /></div></div><div class='un-s'></div></div>
				</div>

				<div class='wyp-spacing-margin-section'>
					<div id='margin-left-group' class='op-g sl-o' data-default='auto' data-css='margin-left' data-decimals='1' data-px='-50,200' data-pc='-100,100' data-em='-6,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the left margin of an element.'>Margin Left</span><i class='mo-i'></i></span><div id='wyp-margin-left' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='margin-left-value' class='css-va' /><input type='text' id='margin-left-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='margin-right-group' class='op-g sl-o' data-default='auto' data-css='margin-right' data-decimals='1' data-px='-50,200' data-pc='-100,100' data-em='-6,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the right margin of an element.'>Margin Right</span><i class='mo-i'></i></span><div id='wyp-margin-right' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='margin-right-value' class='css-va' /><input type='text' id='margin-right-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='margin-top-group' class='op-g sl-o' data-css='margin-top' data-decimals='1' data-px='-50,200' data-pc='-100,100' data-em='-6,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the top margin of an element.'>Margin Top</span><i class='mo-i'></i></span><div id='wyp-margin-top' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='margin-top-value' class='css-va' /><input type='text' id='margin-top-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='margin-bottom-group' class='op-g sl-o' data-css='margin-bottom' data-decimals='1' data-px='-50,200' data-pc='-100,100' data-em='-6,26'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the bottom margin of an element.'>Margin Bottom</span><i class='mo-i'></i></span><div id='wyp-margin-bottom' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='margin-bottom-value' class='css-va' /><input type='text' id='margin-bottom-after' class='css-un' /></div></div><div class='un-s'></div></div>
				</div>

			</div>
		</li>

		<li class='border-option'>
			<h3>Borders</h3>
			<div class='wyp-t-cont'>

				<div id='border-type-group' class='op-g ra-o' data-css='border-type'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Border Type</span><i class='mo-i'></i>  </span><div class='ra-gr-5 ra-c' id='wyp-border-type'><div class="ra"><input type="radio" name="border-type" value="all"><label id="border-type-all">all</label></div><div class="ra"><input type="radio" name="border-type" value="top"><label id="border-type-top">top</label></div><div class="ra"><input type="radio" name="border-type" value="right"><label id="border-type-right">right</label></div><div class="ra"><input type="radio" name="border-type" value="bottom"><label id="border-type-bottom">bottom</label></div><div class="ra"><input type="radio" name="border-type" value="left"><label id="border-type-left">left</label></div></div></div></div>

				<div class='wyp-border-all-section'>

					<div class='option-group-class'>
					<div id='border-color-group' class='op-g co-o' data-css='border-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the color of an element&#39;s four borders.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-border-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

					<div id='border-style-group' class='op-g ra-o' data-css='border-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the style of an element&#39;s four borders.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-border-style'><div class="ra"><input type="radio" name="border-style" value="none"><label id="border-style-none"><span class="yicon icon-no-alt"></span></label></div><div class="ra"><input type="radio" name="border-style" value="solid"><label id="border-style-solid"></label></div><div class="ra"><input type="radio" name="border-style" value="dotted"><label id="border-style-dotted"></label></div><div class="ra"><input type="radio" name="border-style" value="dashed"><label id="border-style-dashed"></label></div></div></div></div>
					</div>

					<div id='border-width-group' class='op-g sl-o' data-css='border-width' data-decimals='1' data-px='0,20' data-pc='0,100' data-em='0,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element&#39;s four borders.'>Width</span><i class='mo-i'></i></span><div id='wyp-border-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-width-value' class='css-va' /><input type='text' id='border-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>

				<div class='wyp-border-top-section'>

					<div class='option-group-class'>
					<div id='border-top-color-group' class='op-g co-o' data-css='border-top-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the color of an element&#39;s top border.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-border-top-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

					<div id='border-top-style-group' class='op-g ra-o' data-css='border-top-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the style of an element&#39;s top border.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-border-top-style'><div class="ra"><input type="radio" name="border-top-style" value="none"><label id="border-top-style-none"><span class="yicon icon-no-alt"></span></label></div><div class="ra"><input type="radio" name="border-top-style" value="solid"><label id="border-top-style-solid"></label></div><div class="ra"><input type="radio" name="border-top-style" value="dotted"><label id="border-top-style-dotted"></label></div><div class="ra"><input type="radio" name="border-top-style" value="dashed"><label id="border-top-style-dashed"></label></div></div></div></div>
					</div>

					<div id='border-top-width-group' class='op-g sl-o' data-css='border-top-width' data-decimals='1' data-px='0,20' data-pc='0,100' data-em='0,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element&#39;s top border.'>Width</span><i class='mo-i'></i></span><div id='wyp-border-top-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-top-width-value' class='css-va' /><input type='text' id='border-top-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>

				<div class='wyp-border-right-section'>

					<div class='option-group-class'>
					<div id='border-right-color-group' class='op-g co-o' data-css='border-right-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the color of an element&#39;s right border.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-border-right-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

					<div id='border-right-style-group' class='op-g ra-o' data-css='border-right-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the style of an element&#39;s right border.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-border-right-style'><div class="ra"><input type="radio" name="border-right-style" value="none"><label id="border-right-style-none"><span class="yicon icon-no-alt"></span></label></div><div class="ra"><input type="radio" name="border-right-style" value="solid"><label id="border-right-style-solid"></label></div><div class="ra"><input type="radio" name="border-right-style" value="dotted"><label id="border-right-style-dotted"></label></div><div class="ra"><input type="radio" name="border-right-style" value="dashed"><label id="border-right-style-dashed"></label></div></div></div></div>
					</div>

					<div id='border-right-width-group' class='op-g sl-o' data-css='border-right-width' data-decimals='1' data-px='0,20' data-pc='0,100' data-em='0,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element&#39;s right border.'>Width</span><i class='mo-i'></i></span><div id='wyp-border-right-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-right-width-value' class='css-va' /><input type='text' id='border-right-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>


				<div class='wyp-border-bottom-section'>

					<div class='option-group-class'>
					<div id='border-bottom-color-group' class='op-g co-o' data-css='border-bottom-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the color of an element&#39;s bottom border.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-border-bottom-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

					<div id='border-bottom-style-group' class='op-g ra-o' data-css='border-bottom-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the style of an element&#39;s bottom border.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-border-bottom-style'><div class="ra"><input type="radio" name="border-bottom-style" value="none"><label id="border-bottom-style-none"><span class="yicon icon-no-alt"></span></label></div><div class="ra"><input type="radio" name="border-bottom-style" value="solid"><label id="border-bottom-style-solid"></label></div><div class="ra"><input type="radio" name="border-bottom-style" value="dotted"><label id="border-bottom-style-dotted"></label></div><div class="ra"><input type="radio" name="border-bottom-style" value="dashed"><label id="border-bottom-style-dashed"></label></div></div></div></div>
					</div>

					<div id='border-bottom-width-group' class='op-g sl-o' data-css='border-bottom-width' data-decimals='1' data-px='0,20' data-pc='0,100' data-em='0,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element&#39;s bottom border.'>Width</span><i class='mo-i'></i></span><div id='wyp-border-bottom-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-bottom-width-value' class='css-va' /><input type='text' id='border-bottom-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>


				<div class='wyp-border-left-section'>

					<div class='option-group-class'>
					<div id='border-left-color-group' class='op-g co-o' data-css='border-left-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the color of an element&#39;s left border.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-border-left-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

					<div id='border-left-style-group' class='op-g ra-o' data-css='border-left-style'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the style of an element&#39;s left border.'>Style</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-border-left-style'><div class="ra"><input type="radio" name="border-left-style" value="none"><label id="border-left-style-none"><span class="yicon icon-no-alt"></span></label></div><div class="ra"><input type="radio" name="border-left-style" value="solid"><label id="border-left-style-solid"></label></div><div class="ra"><input type="radio" name="border-left-style" value="dotted"><label id="border-left-style-dotted"></label></div><div class="ra"><input type="radio" name="border-left-style" value="dashed"><label id="border-left-style-dashed"></label></div></div></div></div>
					</div>

					<div id='border-left-width-group' class='op-g sl-o' data-css='border-left-width' data-decimals='1' data-px='0,20' data-pc='0,100' data-em='0,3'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element&#39;s left border.'>Width</span><i class='mo-i'></i></span><div id='wyp-border-left-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-left-width-value' class='css-va' /><input type='text' id='border-left-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>

			</div>
		</li>

		<li class='border-radius-option'>
			<h3>Border Radius</h3>
			<div class='wyp-t-cont'>

				<div id='border-top-left-radius-group' class='op-g sl-o' data-css='border-top-left-radius' data-decimals='1' data-px='0,50' data-pc='0,50' data-em='0,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the radius of the top-left corner.'>Radius Top Left</span><i class='mo-i'></i></span><div id='wyp-border-top-left-radius' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-top-left-radius-value' class='css-va' /><input type='text' id='border-top-left-radius-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='border-top-right-radius-group' class='op-g sl-o' data-css='border-top-right-radius' data-decimals='1' data-px='0,50' data-pc='0,50' data-em='0,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the radius of the top-right corner.'>Radius Top Right</span><i class='mo-i'></i></span><div id='wyp-border-top-right-radius' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-top-right-radius-value' class='css-va' /><input type='text' id='border-top-right-radius-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='border-bottom-left-radius-group' class='op-g sl-o' data-css='border-bottom-left-radius' data-decimals='1' data-px='0,50' data-pc='0,50' data-em='0,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the radius of the bottom-left corner.'>Radius Bottom Left</span><i class='mo-i'></i></span><div id='wyp-border-bottom-left-radius' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-bottom-left-radius-value' class='css-va' /><input type='text' id='border-bottom-left-radius-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='border-bottom-right-radius-group' class='op-g sl-o' data-css='border-bottom-right-radius' data-decimals='1' data-px='0,50' data-pc='0,50' data-em='0,6'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the radius of the bottom-right corner.'>Radius Bottom Right</span><i class='mo-i'></i></span><div id='wyp-border-bottom-right-radius' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='border-bottom-right-radius-value' class='css-va' /><input type='text' id='border-bottom-right-radius-after' class='css-un' /></div></div><div class='un-s'></div></div>

			</div>
		</li>

		<li class='position-option'>
			<h3>Positioning</h3>
			<div class='wyp-t-cont'>

				<div id='z-index-group' class='op-g sl-o' data-default='auto' data-css='z-index' data-decimals='1' data-px='-10,1000' data-pc='-10,1000' data-em='-10,1000'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the stack order of an element. Z index only works on positioned elements (absolute, relative, or fixed).'>Z Index</span><i class='mo-i'></i></span><div id='wyp-z-index' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='z-index-value' class='css-va' /><input type='text' id='z-index-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='position-group' class='op-g ra-o' data-css='position'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the type of positioning method used for an element.'>Position</span><i class='mo-i'></i>  </span><div class='ra-gr-5 ra-c' id='wyp-position'><div class="ra"><input type="radio" name="position" value="static"><label id="position-static">static</label></div><div class="ra"><input type="radio" name="position" value="relative"><label id="position-relative">relative</label></div><div class="ra"><input type="radio" name="position" value="absolute"><label id="position-absolute">absolute</label></div><div class="ra"><input type="radio" name="position" value="fixed"><label id="position-fixed">fixed</label></div><div class="ra"><input type="radio" name="position" value="sticky"><label id="position-sticky">sticky</label></div></div></div></div>

				<div id='top-group' class='op-g sl-o' data-default='auto' data-css='top' data-decimals='1' data-px='-200,400' data-pc='0,100' data-em='-12,12'><div class='op-c'><span class='op-l'><span class='di-btn' title='For absolutely: positioned elements, the top property sets the top edge of an element to a unit above/below the top edge of its containing element.<br><br>For relatively: positioned elements, the top property sets the top edge of an element to a unit above/below its normal position.'>Top</span><i class='mo-i'></i></span><div id='wyp-top' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='top-value' class='css-va' /><input type='text' id='top-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='left-group' class='op-g sl-o' data-default='auto' data-css='left' data-decimals='1' data-px='-200,400' data-pc='0,100' data-em='-12,12'><div class='op-c'><span class='op-l'><span class='di-btn' title='For absolutely: positioned elements, the left property sets the left edge of an element to a unit to the left/right of the left edge of its containing element.<br><br>For relatively: positioned elements, the left property sets the left edge of an element to a unit to the left/right to its normal position.'>Left</span><i class='mo-i'></i></span><div id='wyp-left' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='left-value' class='css-va' /><input type='text' id='left-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='bottom-group' class='op-g sl-o' data-default='auto' data-css='bottom' data-decimals='1' data-px='-200,400' data-pc='0,100' data-em='-12,12'><div class='op-c'><span class='op-l'><span class='di-btn' title='For absolutely: positioned elements, the bottom property sets the bottom edge of an element to a unit above/below the bottom edge of its containing element.<br><br>For relatively: positioned elements, the bottom property sets the bottom edge of an element to a unit above/below its normal position.'>Bottom</span><i class='mo-i'></i></span><div id='wyp-bottom' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='bottom-value' class='css-va' /><input type='text' id='bottom-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='right-group' class='op-g sl-o' data-default='auto' data-css='right' data-decimals='1' data-px='-200,400' data-pc='0,100' data-em='-12,12'><div class='op-c'><span class='op-l'><span class='di-btn' title='For absolutely: positioned elements, the right property sets the right edge of an element to a unit to the left/right of the right edge of its containing element.<br><br>For relatively: positioned elements, the right property sets the right edge of an element to a unit to the left/right to its normal position.'>Right</span><i class='mo-i'></i></span><div id='wyp-right' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='right-value' class='css-va' /><input type='text' id='right-after' class='css-un' /></div></div><div class='un-s'></div></div>

			</div>
		</li>

		<li class='size-option'>
			<h3>Measures</h3>
			<div class='wyp-t-cont'>

				<div id='width-group' class='op-g sl-o' data-default='auto' data-css='width' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the width of an element.'>Width</span><i class='mo-i'></i></span><div id='wyp-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='width-value' class='css-va' /><input type='text' id='width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='height-group' class='op-g sl-o' data-default='auto' data-css='height' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the height of an element'>Height</span><i class='mo-i'></i></span><div id='wyp-height' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='height-value' class='css-va' /><input type='text' id='height-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='overflow-group' class='op-g ra-o' data-css='overflow'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies what should happen if content overflows an element's box.'>Overflow</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-overflow'><div class="ra"><input type="radio" name="overflow" value="visible"><label id="overflow-visible">visible</label></div><div class="ra"><input type="radio" name="overflow" value="hidden"><label id="overflow-hidden">hidden</label></div><div class="ra"><input type="radio" name="overflow" value="scroll"><label id="overflow-scroll">scroll</label></div><div class="ra"><input type="radio" name="overflow" value="auto"><label id="overflow-auto">auto</label></div></div></div></div>

				<div id='min-width-group' class='op-g sl-o' data-default='initial' data-css='min-width' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the minimum width of an element.'>Min Width</span><i class='mo-i'></i></span><div id='wyp-min-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='min-width-value' class='css-va' /><input type='text' id='min-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='max-width-group' class='op-g sl-o' data-default='none' data-css='max-width' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the maximum width of an element.'>Max Width</span><i class='mo-i'></i></span><div id='wyp-max-width' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='max-width-value' class='css-va' /><input type='text' id='max-width-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='min-height-group' class='op-g sl-o' data-default='initial' data-css='min-height' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the minimum height of an element.'>Min Height</span><i class='mo-i'></i></span><div id='wyp-min-height' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='min-height-value' class='css-va' /><input type='text' id='min-height-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='max-height-group' class='op-g sl-o' data-default='none' data-css='max-height' data-decimals='1' data-px='0,500' data-pc='0,100' data-em='0,52'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set the maximum height of an element.'>Max Height</span><i class='mo-i'></i></span><div id='wyp-max-height' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='max-height-value' class='css-va' /><input type='text' id='max-height-after' class='css-un' /></div></div><div class='un-s'></div></div>


			</div>
		</li>

		<li class='lists-option'>
			<h3>Lists</h3>
			<div class='wyp-t-cont'>

				<div id='list-style-type-group' class='op-g se-o' data-css='list-style-type'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the type of list-item marker in a list.'>List Type</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"none","label":"none", "category":""},{"value":"disc","label":"disc", "category":""},{"value":"circle","label":"circle", "category":""},{"value":"decimal","label":"decimal", "category":""},{"value":"lower-alpha","label":"lower alpha", "category":""},{"value":"upper-alpha","label":"upper alpha", "category":""},{"value":"upper-roman","label":"upper roman", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-list-style-type' type='text' class='in-ac' value='' /><div id='ac-pl-list-style-type' class='ac-d'></div></div></div></div>

				<div id='list-style-image-group' class='op-g in-o' data-css='list-style-image'><div class='op-c'><span class='op-l'><span class='di-btn' title='Replaces the list-item marker with an image.'>List Image</span><i class='mo-i'></i> </span><div class='in-wr'><input placeholder='none' id='wyp-list-style-image' type='text' class='wyp-input' value='' /><span class='wyp-upload-btn wyp-gallery-btn'></span><span class='wyp-clear-btn yicon icon-no-alt'></span></div></div></div>

				<div id='list-style-position-group' class='op-g ra-o' data-css='list-style-position'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies if the list-item markers should appear inside or outside the content flow.'>List Position</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-list-style-position'><div class="ra"><input type="radio" name="list-style-position" value="inside"><label id="list-style-position-inside">inside</label></div><div class="ra"><input type="radio" name="list-style-position" value="outside"><label id="list-style-position-outside">outside</label></div></div></div></div>

			</div>
		</li><li class='transform-option'>
				<h3>Transforms</h3>
				<div class='wyp-t-cont'>

					<div id='transform-type-group' class='op-g ra-o' data-css='transform-type'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Transform Type</span><i class='mo-i'></i>  </span><div class='ra-gr-4 ra-c' id='wyp-transform-type'><div class="ra"><input type="radio" name="transform-type" value="move"><label id="transform-type-move">move</label></div><div class="ra"><input type="radio" name="transform-type" value="rotate"><label id="transform-type-rotate">rotate</label></div><div class="ra"><input type="radio" name="transform-type" value="skew"><label id="transform-type-skew">skew</label></div><div class="ra"><input type="radio" name="transform-type" value="extra"><label id="transform-type-extra">extra</label></div></div></div></div>


					<div class='wyp-transform-move-section'>

						<div id='translate-x-transform-group' class='op-g sl-o' data-css='translate-x-transform' data-decimals='1' data-px='-256,256' data-pc='-256,256' data-em='-256,256'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Move Horizontal</span><i class='mo-i'></i></span><div id='wyp-translate-x-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='translate-x-transform-value' class='css-va' /><input type='text' id='translate-x-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='translate-y-transform-group' class='op-g sl-o' data-css='translate-y-transform' data-decimals='1' data-px='-256,256' data-pc='-256,256' data-em='-256,256'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Move Vertical</span><i class='mo-i'></i></span><div id='wyp-translate-y-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='translate-y-transform-value' class='css-va' /><input type='text' id='translate-y-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

					<div class='wyp-transform-rotate-section'>

						<div id='rotatex-transform-group' class='op-g sl-o' data-css='rotatex-transform' data-decimals='1' data-px='-180,180' data-pc='-180,180' data-em='-180,180'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Rotate X</span><i class='mo-i'></i></span><div id='wyp-rotatex-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='rotatex-transform-value' class='css-va' /><input type='text' id='rotatex-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='rotatey-transform-group' class='op-g sl-o' data-css='rotatey-transform' data-decimals='1' data-px='-180,180' data-pc='-180,180' data-em='-180,180'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Rotate Y</span><i class='mo-i'></i></span><div id='wyp-rotatey-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='rotatey-transform-value' class='css-va' /><input type='text' id='rotatey-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='rotatez-transform-group' class='op-g sl-o' data-css='rotatez-transform' data-decimals='1' data-px='-180,180' data-pc='-180,180' data-em='-180,180'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Rotate Z</span><i class='mo-i'></i></span><div id='wyp-rotatez-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='rotatez-transform-value' class='css-va' /><input type='text' id='rotatez-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

					<div class='wyp-transform-skew-section'>

						<div id='skew-x-transform-group' class='op-g sl-o' data-css='skew-x-transform' data-decimals='1' data-px='-180,180' data-pc='-180,180' data-em='-180,180'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Skew X</span><i class='mo-i'></i></span><div id='wyp-skew-x-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='skew-x-transform-value' class='css-va' /><input type='text' id='skew-x-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='skew-y-transform-group' class='op-g sl-o' data-css='skew-y-transform' data-decimals='1' data-px='-180,180' data-pc='-180,180' data-em='-180,180'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>skew Y</span><i class='mo-i'></i></span><div id='wyp-skew-y-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='skew-y-transform-value' class='css-va' /><input type='text' id='skew-y-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

					<div class='wyp-transform-extra-section'>

						<div id='scale-transform-group' class='op-g sl-o' data-css='scale-transform' data-decimals='0.01' data-px='0,5' data-pc='0,5' data-em='0,5'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Scale</span><i class='mo-i'></i></span><div id='wyp-scale-transform' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='scale-transform-value' class='css-va' /><input type='text' id='scale-transform-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='perspective-group' class='op-g sl-o' data-css='perspective' data-decimals='1' data-px='0,1000' data-pc='0,100' data-em='0,62'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Perspective</span><i class='mo-i'></i></span><div id='wyp-perspective' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='perspective-value' class='css-va' /><input type='text' id='perspective-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

			</div></li><li class='box-shadow-option'>
			<h3>Shadow</h3>
			<div class='wyp-t-cont'>

				<div id='box-shadow-inset-group' class='op-g ra-o' data-css='box-shadow-inset'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines whether the shadow is inside or outside.'>Position</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-box-shadow-inset'><div class="ra"><input type="radio" name="box-shadow-inset" value="no"><label id="box-shadow-inset-no">outside</label></div><div class="ra"><input type="radio" name="box-shadow-inset" value="inset"><label id="box-shadow-inset-inset">inside</label></div></div></div></div>

				<div id='box-shadow-color-group' class='op-g co-o' data-css='box-shadow-color'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets color of the shadow.'>Color</span><i class='mo-i'></i> </span><div class='co-in-bo'><input id='wyp-box-shadow-color' type='text' maxlength='22' size='22' class='co-p' value='' /><span class='wyp-color-background'><span class='co-sw-co'></span></span></div></div></div>

				<div id='box-shadow-blur-radius-group' class='op-g sl-o' data-css='box-shadow-blur-radius' data-decimals='1' data-px='0,50' data-pc='0,50' data-em='0,50'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets blur radius of the shadow.'>Blur Radius</span><i class='mo-i'></i></span><div id='wyp-box-shadow-blur-radius' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='box-shadow-blur-radius-value' class='css-va' /><input type='text' id='box-shadow-blur-radius-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='box-shadow-spread-group' class='op-g sl-o' data-css='box-shadow-spread' data-decimals='1' data-px='-50,100' data-pc='-50,100' data-em='-50,100'><div class='op-c'><span class='op-l'><span class='di-btn' title='Set size of the shadow.'>Spread</span><i class='mo-i'></i></span><div id='wyp-box-shadow-spread' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='box-shadow-spread-value' class='css-va' /><input type='text' id='box-shadow-spread-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='box-shadow-horizontal-group' class='op-g sl-o' data-css='box-shadow-horizontal' data-decimals='1' data-px='-50,50' data-pc='-50,50' data-em='-50,50'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets horizontal length of the shadow.'>Horizontal Length</span><i class='mo-i'></i></span><div id='wyp-box-shadow-horizontal' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='box-shadow-horizontal-value' class='css-va' /><input type='text' id='box-shadow-horizontal-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div id='box-shadow-vertical-group' class='op-g sl-o' data-css='box-shadow-vertical' data-decimals='1' data-px='-50,50' data-pc='-50,50' data-em='-50,50'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets vertical length of the shadow.'>Vertical Length</span><i class='mo-i'></i></span><div id='wyp-box-shadow-vertical' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='box-shadow-vertical-value' class='css-va' /><input type='text' id='box-shadow-vertical-after' class='css-un' /></div></div><div class='un-s'></div></div>

			</div>
		</li><li class='filter-option'>
				<h3>Filters</h3>
				<div class='wyp-t-cont'>

					<div id='filter-type-group' class='op-g ra-o' data-css='filter-type'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Filter Type</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-filter-type'><div class="ra"><input type="radio" name="filter-type" value="color-effects"><label id="filter-type-color-effects">effects</label></div><div class="ra"><input type="radio" name="filter-type" value="color-adjustment"><label id="filter-type-color-adjustment">adjustments</label></div></div></div></div>


					<div class='wyp-filter-color-adjustment-section'>

						<div id='brightness-filter-group' class='op-g sl-o' data-css='brightness-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Brightness</span><i class='mo-i'></i></span><div id='wyp-brightness-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='brightness-filter-value' class='css-va' /><input type='text' id='brightness-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='contrast-filter-group' class='op-g sl-o' data-css='contrast-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Contrast</span><i class='mo-i'></i></span><div id='wyp-contrast-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='contrast-filter-value' class='css-va' /><input type='text' id='contrast-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='hue-rotate-filter-group' class='op-g sl-o' data-css='hue-rotate-filter' data-decimals='1' data-px='0,360' data-pc='0,360' data-em='0,360'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Hue Rotate</span><i class='mo-i'></i></span><div id='wyp-hue-rotate-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='hue-rotate-filter-value' class='css-va' /><input type='text' id='hue-rotate-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='saturate-filter-group' class='op-g sl-o' data-css='saturate-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Saturate</span><i class='mo-i'></i></span><div id='wyp-saturate-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='saturate-filter-value' class='css-va' /><input type='text' id='saturate-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

					<div class='wyp-filter-color-effects-section'>

						<div id='blur-filter-group' class='op-g sl-o' data-css='blur-filter' data-decimals='0.01' data-px='0,10' data-pc='0,10' data-em='0,10'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Blur</span><i class='mo-i'></i></span><div id='wyp-blur-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='blur-filter-value' class='css-va' /><input type='text' id='blur-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='grayscale-filter-group' class='op-g sl-o' data-css='grayscale-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Grayscale</span><i class='mo-i'></i></span><div id='wyp-grayscale-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='grayscale-filter-value' class='css-va' /><input type='text' id='grayscale-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='invert-filter-group' class='op-g sl-o' data-css='invert-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Invert</span><i class='mo-i'></i></span><div id='wyp-invert-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='invert-filter-value' class='css-va' /><input type='text' id='invert-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

						<div id='sepia-filter-group' class='op-g sl-o' data-css='sepia-filter' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title=''>Sepia</span><i class='mo-i'></i></span><div id='wyp-sepia-filter' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='sepia-filter-value' class='css-va' /><input type='text' id='sepia-filter-after' class='css-un' /></div></div><div class='un-s'></div></div>

					</div>

			</div></li>

		<li class='extra-option'>
			<h3>Extra</h3>
			<div class='wyp-t-cont'>

					<div id='display-group' class='op-g se-o' data-css='display'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the type of box used for an element.'>Display</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"block","label":"block", "category":""},{"value":"flex","label":"flex", "category":""},{"value":"grid","label":"grid", "category":""},{"value":"inline","label":"inline", "category":""},{"value":"inline-block","label":"inline-block", "category":""},{"value":"inline-flex","label":"inline-flex", "category":""},{"value":"inline-grid","label":"inline-grid", "category":""},{"value":"table-cell","label":"table-cell", "category":""},{"value":"none","label":"none", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-display' type='text' class='in-ac' value='' /><div id='ac-pl-display' class='ac-d'></div></div></div></div>

					<div class='flex-container-section'>
					<div id='flex-direction-group' class='op-g ra-o' data-css='flex-direction'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the direction of the flexible items.'>Direction</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-flex-direction'><div class="ra"><input type="radio" name="flex-direction" value="row"><label id="flex-direction-row">horizontal</label></div><div class="ra"><input type="radio" name="flex-direction" value="column"><label id="flex-direction-column">vertical</label></div></div></div></div>

					<div class='option-group-class'>
					<div id='justify-content-group' class='op-g se-o' data-css='justify-content'><div class='op-c'><span class='op-l'><span class='di-btn' title='Aligns the flexible container&#39;s items when the items do not use all available space on the main-axis (horizontally).'>Justify Content</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"normal", "category":""},{"value":"flex-start","label":"flex-start", "category":""},{"value":"flex-end","label":"flex-end", "category":""},{"value":"center","label":"center", "category":""},{"value":"space-between","label":"space-between", "category":""},{"value":"space-around","label":"space-around", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-justify-content' type='text' class='in-ac' value='' /><div id='ac-pl-justify-content' class='ac-d'></div></div></div></div>

					<div id='align-items-group' class='op-g se-o' data-css='align-items'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the default alignment for items inside the flexible container.'>Align Items</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"normal", "category":""},{"value":"stretch","label":"stretch", "category":""},{"value":"center","label":"center", "category":""},{"value":"flex-start","label":"flex-start", "category":""},{"value":"flex-end","label":"flex-end", "category":""},{"value":"baseline","label":"baseline", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-align-items' type='text' class='in-ac' value='' /><div id='ac-pl-align-items' class='ac-d'></div></div></div></div>
					</div>

					<div id='flex-wrap-group' class='op-g ra-o' data-css='flex-wrap'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies whether the flexible items should wrap or not.'>Children</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-flex-wrap'><div class="ra"><input type="radio" name="flex-wrap" value="nowrap"><label id="flex-wrap-nowrap">no wrap</label></div><div class="ra"><input type="radio" name="flex-wrap" value="wrap"><label id="flex-wrap-wrap">wrap</label></div></div></div></div>
					</div>

					<div class='flex-child-section'>
					<div id='flex-group' class='op-g ra-o' data-css='flex'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the flexible length on flexible items.'>Sizing</span><i class='mo-i'></i>  </span><div class='ra-gr-3 ra-c' id='wyp-flex'><div class="ra"><input type="radio" name="flex" value="0 1 auto"><label id="flex-0-1-auto">Shrink</label></div><div class="ra"><input type="radio" name="flex" value="1 1 0%"><label id="flex-1-1-0%">Grow</label></div><div class="ra"><input type="radio" name="flex" value="0 0 auto"><label id="flex-0-0-auto">No Grow & Shrink</label></div></div></div></div>

					<div id='align-self-group' class='op-g se-o' data-css='align-self'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the alignment for the selected item inside the flexible container.'>Align</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"auto","label":"auto", "category":""},{"value":"stretch","label":"stretch", "category":""},{"value":"center","label":"center", "category":""},{"value":"flex-start","label":"flex-start", "category":""},{"value":"flex-end","label":"flex-end", "category":""},{"value":"baseline","label":"baseline", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-align-self' type='text' class='in-ac' value='' /><div id='ac-pl-align-self' class='ac-d'></div></div></div></div>

				</div>

				<div class='grid-section'>

					<div id='grid-template-columns-group' class='op-g gr-o' data-css='grid-template-columns'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the number (and the widths) of columns in a grid layout.'>Columns</span><i class='mo-i'></i></span><input id='wyp-grid-template-columns' class='gr-bu-in' type='text' value='' /><div class='gr-bu-ar'></div></div></div>

					<div id='grid-template-rows-group' class='op-g gr-o' data-css='grid-template-rows'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the number (and the heights) of the rows in a grid layout.'>Rows</span><i class='mo-i'></i></span><input id='wyp-grid-template-rows' class='gr-bu-in' type='text' value='' /><div class='gr-bu-ar'></div></div></div>

					<div class='option-group-class'>
					<div id='align-content-group' class='op-g se-o' data-css='align-content'><div class='op-c'><span class='op-l'><span class='di-btn' title='Modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.'>Align</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"normal", "category":""},{"value":"stretch","label":"stretch", "category":""},{"value":"center","label":"center", "category":""},{"value":"flex-start","label":"flex-start", "category":""},{"value":"flex-end","label":"flex-end", "category":""},{"value":"space-between","label":"space-between", "category":""},{"value":"space-around","label":"space-around", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-align-content' type='text' class='in-ac' value='' /><div id='ac-pl-align-content' class='ac-d'></div></div></div></div>

					<div id='justify-content1-group' class='op-g se-o' data-css='justify-content1'><div class='op-c'><span class='op-l'><span class='di-btn' title='Aligns the flexible container&#39;s items when the items do not use all available space on the main-axis (horizontally).'>Justify</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"normal","label":"normal", "category":""},{"value":"flex-start","label":"flex-start", "category":""},{"value":"flex-end","label":"flex-end", "category":""},{"value":"center","label":"center", "category":""},{"value":"space-between","label":"space-between", "category":""},{"value":"space-around","label":"space-around", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-justify-content1' type='text' class='in-ac' value='' /><div id='ac-pl-justify-content1' class='ac-d'></div></div></div></div>
					</div>

					<div id='column-gap-group' class='op-g sl-o' data-default='normal' data-css='column-gap' data-decimals='1' data-px='0,100' data-pc='0,100' data-em='0,100'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the size of the gap between the columns in a grid layout.'>Column Gap</span><i class='mo-i'></i></span><div id='wyp-column-gap' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='column-gap-value' class='css-va' /><input type='text' id='column-gap-after' class='css-un' /></div></div><div class='un-s'></div></div>

					<div id='row-gap-group' class='op-g sl-o' data-default='normal' data-css='row-gap' data-decimals='1' data-px='0,100' data-pc='0,100' data-em='0,100'><div class='op-c'><span class='op-l'><span class='di-btn' title='Defines the size of the gap between the rows in a grid layout.'>Row Gap</span><i class='mo-i'></i></span><div id='wyp-row-gap' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='row-gap-value' class='css-va' /><input type='text' id='row-gap-after' class='css-un' /></div></div><div class='un-s'></div></div>

				</div>

				<div class='option-group-class'>
				<div id='float-group' class='op-g ra-o' data-css='float'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies how an element should float.'>Float</span><i class='mo-i'></i>  </span><div class='ra-gr-3 ra-c' id='wyp-float'><div class="ra"><input type="radio" name="float" value="none"><label id="float-none">none</label></div><div class="ra"><input type="radio" name="float" value="left"><label id="float-left">left</label></div><div class="ra"><input type="radio" name="float" value="right"><label id="float-right">right</label></div></div></div></div>

				<div id='clear-group' class='op-g ra-o' data-css='clear'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies what elements can float beside the cleared element and on which side.'>Clear</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-clear'><div class="ra"><input type="radio" name="clear" value="none"><label id="clear-none">none</label></div><div class="ra"><input type="radio" name="clear" value="both"><label id="clear-both">both</label></div></div></div></div>
				</div>

				<div id='visibility-group' class='op-g ra-o' data-css='visibility'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies whether or not an element is visible.'>Visibility</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-visibility'><div class="ra"><input type="radio" name="visibility" value="visible"><label id="visibility-visible"><span class="yicon icon-visibility"></span></label></div><div class="ra"><input type="radio" name="visibility" value="hidden"><label id="visibility-hidden"><span class="yicon icon-hidden"></span></label></div></div></div></div>

				<div id='opacity-group' class='op-g sl-o' data-css='opacity' data-decimals='0.01' data-px='0,1' data-pc='0,1' data-em='0,1'><div class='op-c'><span class='op-l'><span class='di-btn' title='Sets the opacity level for an element.'>Opacity</span><i class='mo-i'></i></span><div id='wyp-opacity' class='sl-d'><div class='sl-cu'></div></div><div class='wyp-after'><input type='text' id='opacity-value' class='css-va' /><input type='text' id='opacity-after' class='css-un' /></div></div><div class='un-s'></div></div>

				<div class='option-group-class'>
				<div id='cursor-group' class='op-g se-o' data-css='cursor'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies the type of cursor to be displayed when pointing on an element.'>Cursor</span><i class='mo-i'></i></span><textarea tabindex='-1' disabled='disabled'>[{"value":"auto","label":"auto", "category":""},{"value":"alias","label":"alias", "category":""},{"value":"all-scroll","label":"All Scroll", "category":""},{"value":"copy","label":"Copy", "category":""},{"value":"crosshair","label":"CrossHair", "category":""},{"value":"grab","label":"Grab", "category":""},{"value":"grabbing","label":"Grabbing", "category":""},{"value":"help","label":"Help", "category":""},{"value":"not-allowed","label":"Not Allowed", "category":""},{"value":"pointer","label":"Pointer", "category":""},{"value":"progress","label":"Progress", "category":""},{"value":"text","label":"Text", "category":""},{"value":"wait","label":"Wait", "category":""},{"value":"zoom-in","label":"Zoom In", "category":""},{"value":"zoom-out","label":"Zoom Out", "category":""}]</textarea><div class='ac-p-d'><input id='wyp-cursor' type='text' class='in-ac' value='' /><div id='ac-pl-cursor' class='ac-d'></div></div></div></div>

				<div id='pointer-events-group' class='op-g ra-o' data-css='pointer-events'><div class='op-c'><span class='op-l'><span class='di-btn' title='Specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.'>Pointer Events</span><i class='mo-i'></i>  </span><div class='ra-gr-2 ra-c' id='wyp-pointer-events'><div class="ra"><input type="radio" name="pointer-events" value="auto"><label id="pointer-events-auto">auto</label></div><div class="ra"><input type="radio" name="pointer-events" value="none"><label id="pointer-events-none">none</label></div></div></div></div>
				</div>

			</div>

		</li>

	</ul></form><div class='wyp-panel-no-selection'><div class='starter-notice'><div class='wyp-hand'></div><div class='wyp-hand-after'></div>Select any element on the page to start making changes.</div></div><div class='ed-pnl-footer'>
            <h3><a tabindex='-1' target='_blank' href='https://yellowpencil.waspthemes.com/documentation/'>Docs</a> / <a tabindex='-1' target='_blank' href='https://yellowpencil.waspthemes.com/changelog/'>V 7.5.4</a></h3>
            <span class='yicon icon-admin-collapse wyp-panel-hide' data-toggle='tooltip' data-placement='left' title='Hide Panels <span class="wyp-shortcut-char">(H)</span>'></span>
        </div></div></div>
	<div class="editor-leftbar">
		<div data-toggle='tooltip-bar' data-placement='right' title='Element Inspector <span class="wyp-s-shortcut">(V)</span>' class="leftbar-button cursor-main-btn wyp-selector-mode active"><span class="no-aiming-icon"></span><span class="aiming-icon"></span><span class="sharp-selector-icon"></span></div>
		<div data-toggle='tooltip-bar' data-placement='right' title='Navigator <span class="wyp-s-shortcut">(N)</span><span class="wyp-tooltip-shortcut">Find elements easily.</span>' class="leftbar-button wyp-navigation-btn"><span class="navigation-icon"></span></div>
				<div data-toggle='tooltip-bar' data-placement='right' title='CSS Editor <span class="wyp-s-shortcut">(E)</span><span class="wyp-tooltip-shortcut">Edit style codes.</span>' class="leftbar-button css-editor-btn"><span class="css-editor-icon"></span></div>
				<div data-toggle='tooltip-bar' data-placement='right' title='Responsive Mode <span class="wyp-s-shortcut">(R)</span><span class="wyp-tooltip-shortcut">Edit for specific screen sizes.</span>' class="leftbar-button wyp-responsive-btn active"><span class="responsive-icon"></span></div>
		<div data-toggle='tooltip-bar' data-placement='right' title='Measuring Tool <span class="wyp-s-shortcut">(M)</span><span class="wyp-tooltip-shortcut">Measure elements.</span>' class="leftbar-button wyp-ruler-btn"><span class="ruler-icon"></span></div>
		<div data-toggle='tooltip-bar' data-placement='right' title='Wireframe <span class="wyp-s-shortcut">(W)</span><span class="wyp-tooltip-shortcut">Work on the layout easily.</span>' class="leftbar-button wyp-wireframe-btn"><span class="wireframe-icon"></span></div>
		<div data-toggle='tooltip-bar' data-placement='right' title='Design Information <span class="wyp-s-shortcut">(D)</span><span class="wyp-tooltip-shortcut">Typography information.</span>' class="leftbar-button info-btn"><span class="design-information-icon"></span></div>

				<div data-toggle='tooltip-bar' data-placement='right' title='Animation Manager <span class="wyp-s-shortcut">(A)</span><span class="wyp-tooltip-shortcut">Manage animations visually.</span>' class="leftbar-button animation-manager-btn"><span class="animation-manager-icon"></span></div>
		
		<div data-toggle='tooltip-bar' data-placement='right' title='Undo <span class="wyp-tooltip-shortcut">CMD + Z</span>' class="leftbar-button top-area-center undo-btn"><span class="undo-icon"></span></div>
		<div data-toggle='tooltip-bar' data-placement='right' title='Redo <span class="wyp-tooltip-shortcut">CMD + Y</span>' class="leftbar-button redo-btn"><span class="redo-icon"></span></div>

				<div class="leftbar-button left-menu-btn"><span class="setting-icon"></span></div>
		
		<div class="left-menu-sublist inspector-sublist">
		<ul>
			<li class="inspector-sublist-cursor" data-cursor-action="cursor">Cursor <i>(navigate)</i></li>
			<li class="inspector-sublist-default active" data-cursor-action="default">Flexible Inspector</li>
			<li class="inspector-sublist-single" data-cursor-action="single">Single Inspector</li>
		</ul>
		</div>

				<div class="left-menu-sublist interface-settings">
		<ul>

			<li class="fixed_left_bar_checkbox">Pin The Left Bar <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="fixed_right_panel_checkbox">Pin The Right Panel <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="hide_premium_options_checkbox wyp-lite" data-toggle='tooltip-bar' data-placement='right' title='<span class="wyp-tooltip-shortcut2">Hides all premium features on the free version.</span>'>Hide Premium Features <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="show_css_selector_checkbox" data-toggle='tooltip-bar' data-placement='right' title='<span class="wyp-tooltip-shortcut2">Always shows the selector of the selected element.</span>'>Always Show The Element Selector <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="left-sublist-border"></li>

			<li class="smart_responsive_technology_checkbox" data-toggle='tooltip-bar' data-placement='right' title='<span class="wyp-tooltip-shortcut2">This feature automatically detects the styles that can harm the responsive layout and limits them with special screen sizes.</span>'>Auto Responsive <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="append_auto_comments_checkbox" data-toggle='tooltip-bar' data-placement='right' title='<span class="wyp-tooltip-shortcut2">Generates CSS comments for each selector to make the CSS code readable.</span>'>Auto CSS Comments <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="smart_important_tag_checkbox" data-toggle='tooltip-bar' data-placement='right' title='<span class="wyp-tooltip-shortcut2">Adds the important tag to CSS rules if required.</span>'>Auto Important Tag <label class="interface-settings-switch"><input type="checkbox"><span class="interface-settings-slider"></span></label></li>

			<li class="basic hide-panel-hint"><strong>Hint</strong>: Hide editor panels with the H key.</li>

		</ul>
		</div>
		
		<div class="advanced-info-box">
			<div class="advanced-info-box-menu">
				<span class="advance-info-btns element-btn">Element</span> <span class="advance-info-btns design-btn">Page</span>
			</div>
			<div class="advanced-info-box-inner">

				<div class="typography-content advanced-info-box-content">

					<h3>Color Scheme</h3>
					<div class="info-color-scheme-list">
					</div>

					<h3 class="no-top">Typography</h3>
					<ul class="info-basic-typography-list">
					</ul>

					<h3>Font Families</h3>
					<ul class="info-font-family-list">
					</ul>

					<h3 class="page-assets-h3">Page Assets</h3>
					<div class="info-image-list">
					</div>

					<h3 id="animations-heading">Animations</h3>
					<ul class="info-animation-list">
					</ul>

				</div>

				<div class="element-content advanced-info-box-content">

					<div class="info-element-selected-section">

						<div class="info-element-selector-section">
							<h3 class="no-top">CSS Selector</h3>
							<ul class="info-element-selector-list">
							</ul>
						</div>

						<h3>General</h3>
						<ul class="info-element-general">
						</ul>

						<div class="info-element-classes-section">
							<h3>Classes</h3>
							<ul class="info-element-class-list">
							</ul>
						</div>

						<div class="info-element-accessibility-section">
							<h3>Accessibility</h3>
							<ul class="info-element-accessibility">
							</ul>
						</div>

						<h3>DOM Code</h3>
						<textarea disabled="disabled" class="info-element-dom"></textarea>

					</div>

					<p class="info-no-element-selected">Please select an element to show information.</p>

				</div>

			</div>
		</div>

		<div id="leftAreaEditor">
			<div id="cssData"></div>
			<div id="cssEditorBar">
				<span class="yicon wyp-css-close-btn icon-no-alt" title='Hide (ESC)'></span>
				<span class="editor-tabs single-tab" data-type-value="single">Single<i></i></span>
				<span class="editor-tabs template-tab" data-type-value="template">Template<i></i></span>
				<span class="editor-tabs global-tab" data-type-value="global">Global<i></i></span>
				<div class="editor-tab-border"></div>
				<span class="wyp-css-editor-detach yicon icon-external"></span>
			</div>
			<div class="unvalid-css-error">Error: <span></span></div>
		</div>


		<div id="layer-tree">
			<div id='layer-tree-title'>Navigator <span id="search-css-selector"></span></div>
		</div>

	</div>

	<div class="wyp-right-panel-placeholder"></div>
	<div class="breakpoint-bar"></div>

	<div class="metric-left-border"></div>
	<div class="metric-top-border"></div>
	<div class="metric-top-tooltip"></div>
	<div class="metric-left-tooltip"></div>

	<div class="unvalid-css-cover"></div>


	<div id="selector-editor-box">
		<p class="selector-editor-notice">Enter select, ESC cancel.</p>
		<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type='text' class='wyp-selector-editor' placeholder='Search by class, ID or HTML tag.' id='wyp-selector-editor' />
		<ul id="autocomplate-selector-list"><li>a</li></ul>
	</div>
	<div id="selector-editor-background"></div>
	
	<div id="yellow-pencil-iframe-data"><!-- <style class="wyp-inline-data" id="wyp-styles-area" data-source-mode="global"></style><style class="wyp-inline-data" data-source-mode="template"></style><style class="wyp-inline-data" data-source-mode="single"></style><div id="wyp-animate-data"><style></div> --></div>
</body>
</html>
`;

document.open();
document.write(editorBody);
document.close();



// Vars
window.bMode = true;



// Update loading notes.
var oldP = 0;
function wyp_load_note(text, p){
	if(window.loadStatus == false && oldP < p){
		if(text){
			document.querySelector('.loading-files').innerHTML = text;
		}
		document.querySelector('#loader i').style.width = p + "%";
		oldP = p;
	}
}

// Reload the page after browser undo & undo
if (!!window.performance && window.performance.navigation.type === 2) {
	wyp_load_note("Reloading Editor", "0");
	window.location.reload();
}

// Variable
window.loadStatus = false;

// Document Load Note:
wyp_load_note("Loading Editor", "20");

setTimeout(function(){
	wyp_load_note(null, "23");
}, 300);

setTimeout(function(){
	wyp_load_note(null, "26");
}, 600);

setTimeout(function(){
	wyp_load_note(null, "29");
}, 900);

// Document ready.
(function() {

	var iframeNode = document.getElementById('iframe');

	// Load iframe.
	if(window.bMode){
		iframeNode.contentWindow.location.replace(window.location.href);
	}else{
	iframeNode.contentWindow.location.replace(iframeNode.getAttribute("data-href"));
	}

  // 33%
  wyp_load_note("Loading Page", "33");

	setTimeout(function(){
		wyp_load_note(null, "33");
	}, 600);

	setTimeout(function(){
		wyp_load_note(null, "36");
	}, 900);

  // Frame ready
		var iframeReady = false;
		iframeNode.addEventListener("load", function() {

			// check if iframe URL is not valid.
			try {
				var iframeURL = document.getElementById("iframe").contentWindow.location.href;
			} catch(e) {
				alert("This page does not allow to use of the editor.");
				if(window.bMode){window.location.reload();}
				return false;
			}

			// b mode
			if(iframeReady && window.bMode){
				alert("This page cannot be edited as it is redirected. Please open the redirected page directly in the editor.");
				window.location.href = iframeURL;
			}

			// if iframe redirect : follow
			if(window.bMode !== true){
				if(iframeReady || iframeURL.indexOf("yellow_pencil_frame") == -1){

					// show loading
					document.querySelector(".wyp-iframe-loader").style.display = "block";
					document.querySelector(".loading-files").innerHTML = "Page was redirected!";
					window.wyp_redirect_on = true;

				  // Get parent url
				  var parentURL = window.location;

				  // delete after href.
				  parentURL = parentURL.toString().split("href=")[0] + "href=";

				  // Clean url
				  iframeURL = new URL(iframeURL);
				  iframeURL.searchParams.delete("yellow_pencil_frame");
				  iframeURL.searchParams.delete("wyp_page_id");
				  iframeURL.searchParams.delete("wyp_page_type");
				  iframeURL.searchParams.delete("wyp_mode");
				  iframeURL.searchParams.delete("wyp_load_popup");
				  iframeURL.searchParams.delete("wyp_rand");
				  iframeURL.searchParams.delete("wyp_out");

					var xhr = new XMLHttpRequest();
					xhr.open("POST", iframeURL, true);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

					xhr.onreadystatechange = function () {
						if (this.readyState != 4) return;

						if (this.status == 200) {

									// Find page details
									var data = document.createElement("div");
									data.insertAdjacentHTML('beforeend', this.responseText);
									data = data.querySelector('#wyp_page_details').innerHTML;

									// same like fail
									if(data === undefined || data === null){
										alert("Page information cannot be retrieved.");
										return false;
									}

									// find all
									var pageID = data.split("|")[0];
									var pageTYPE = data.split("|")[1];
									var pageMODE = data.split("|")[2];

									// Update result URL
									iframeURL = iframeURL.toString().replace(/.*?:\/\//g, ""); // delete protocol
									iframeURL = encodeURIComponent(iframeURL); // encode url
									parentURL = parentURL + iframeURL + "&wyp_page_id="+pageID+"&wyp_page_type="+pageTYPE+"&wyp_mode=" + pageMODE; // update parent URL

									// GO
									window.location = parentURL;


						}else{
								alert("Page information cannot be retrieved.");
							}

					};

					xhr.send("wyp_get_details=true");

				  return false;

				}
			}

			iframeReady = true;

			// Variables
			var iframe = (iframeNode.contentWindow.document || iframeNode.contentDocument);
			var iframeHead = iframe.head;
			var iframeBody = iframe.body;


			// Moving styles to iframe
			var editorData = document.querySelector("#yellow-pencil-iframe-data");
			if(editorData !== null){
				iframeHead.insertAdjacentHTML('beforeend', editorData.innerHTML.replace(/(^\<\!\-\-|\-\-\>$)/g, ""));
				document.body.removeChild(editorData);
				iframeBody.insertAdjacentHTML('beforeend', '<div id="wyp-animate-data">'+iframeHead.querySelector("#wyp-animate-data").innerHTML+'</div>');
				iframeHead.removeChild(iframeHead.querySelector("#wyp-animate-data"));
			}

			// CSS Loader
			function wyp_load_style(link, i, length){

				var style = document.createElement('link');
				style.rel = "stylesheet";
				style.href = link;
				style.async = false;
				document.head.appendChild(style);

				style.onload = function(){
					wyp_load_note("Loading Styles", 39 + parseInt(21*i/(length - 1)));
				};

			}

			// Loading The Styles
			var styles = [
				"//fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap",
				chrome.runtime.getURL('editor/') + "css/yellow-pencil.css?wypver=7.5.4"
			];

			// Load styles in iframe
			iframeHead.insertAdjacentHTML('beforeend', "<link rel='stylesheet' id='yellow-pencil-frame'  href='"+chrome.runtime.getURL('editor/')+"css/frame.css?wypver=7.5.4' type='text/css' media='all' />");

			// Loading.
			for(var i = 0; i < styles.length; i++){
				wyp_load_style(styles[i], i, styles.length);
			}

			var scripts = [
				chrome.runtime.getURL('editor/') + "js/ace/editor.js?wypver=7.5.4",
				chrome.runtime.getURL('editor/') + "js/interface.js?wypver=7.5.4",
				chrome.runtime.getURL('editor/') + "js/ace/ace.js?wypver=7.5.4",
				chrome.runtime.getURL('editor/') + "js/ace/ext-language_tools.js?wypver=7.5.4",
				chrome.runtime.getURL('editor/') + "js/addons.js?wypver=7.5.4",
				chrome.runtime.getURL('editor/') + "js/yellow-pencil.js?wypver=7.5.4"
			];

			// Stop load and call editor function.
			function wyp_start_editor(){

				// Ready!:
				wyp_load_note("Ready!", "100");

				// Set true.
				window.loadStatus = true;

				if(window.bMode){
					document.querySelector("#customizing-mode .type-heading").innerHTML = window.location.hostname;
				}

				setTimeout(function(){
					var addClasses = ["yp-yellow-pencil", "yellow-pencil-ready"];

					if(window.bMode){
						addClasses.push("wyp-b-mode");
					}

					for(var i = 0; i < addClasses.length; i++){
						document.body.classList.add(addClasses[i]);
						iframeBody.classList.add(addClasses[i]);
					}

					document.querySelector(".wyp-iframe-loader").style.display = 'none';

					document.querySelector("#iframe").focus();

				}, 350);

			}

			// JS loader
			function wyp_load_script(src, i, length) {
				var script = document.createElement('script');
				script.src = src;
				script.async = false;
				document.head.appendChild(script);

				script.onload = function(){
					wyp_load_note("Loading Scripts", 60+parseInt(38*i/(length - 1)));
					if(i === (length - 1)){
						wyp_start_editor();
					}
				};
			}

			// Load scripts
			for(var i = 0; i < scripts.length; i++){
				wyp_load_script(scripts[i], i, scripts.length);
			}

		}); // iframe ready

		// Javascript hook for call in editor
		window.yp_js_hook = function() {
							};

})();


} // End of if
