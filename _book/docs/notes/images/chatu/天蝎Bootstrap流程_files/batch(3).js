WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml("\u8f7d\u5165\u4e2d...") + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(m){this.$=m;var h=this.$;var B=999;var C=true;var k=false;var w={};var d={};var n=function(K,J,F,I,E){if(J==undefined||J==null){J=!b(K)}if(F==undefined||F==null){F=0}if(!l(K,J)){var H=h("#children"+K);if(z(H)){var G=h("#plusminus"+K);if(J==C){G.removeClass("icon-section-closed").addClass("icon-section-opened")}else{G.removeClass("icon-section-opened").addClass("icon-section-closed")}if(J==C){if(E==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(E==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(I){r(K)}}else{j(K,new Array(),F,"",I,E)}}if(I){r(K)}};var z=function(E){return E.children("ul[id]").length>0};var b=function(F){var E=h("#plusminus"+F);return(E.length>0)?(E.hasClass("icon-minus")||E.hasClass("icon-section-opened")):k};var l=function(F,E){return b(F)==E};var i=function(G,F,E){A(G,C,F,E)};var x=function(G,F,E){A(G,k,F,E)};var A=function(J,H,G,F){g(J);var I=h("#"+J);var E=I.find("div.plugin_pagetree_children_container");E.each(function(K){var L=v(this.id);n(L,H,B,K==E.length-1,F)});G.preventDefault();G.stopPropagation()};var v=function(E){if(!E||E==undefined){return null}if(E.indexOf("plusminus")!=-1){return E.substring("plusminus".length)}if(E.indexOf("children")!=-1){return E.substring("children".length)}return null};var c=function(E){if(!E||E==undefined){return null}return s(E)[1]};var s=function(E){if(!E||E==undefined){return null}return E.split("-")};var g=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").removeClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var r=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").addClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var f=function(L,F,I,H,K,E,G){var J=w[L];if(F=="Orphan"){J+="&hasRoot=false&spaceKey="+K}else{J+="&hasRoot=true&pageId="+F}J+="&treeId="+L+"&startDepth="+H+"&mobile="+G;h.each(I,function(){J+="&ancestors="+this});J+="&treePageId="+E;if(G==false){J=(AJS.params.serverUrl||"")+J}return J};var q=function(G){var F=G;var E=null;h("div.plugin_pagetree").each(function(H){if(H==F){E=h(this)}});return E};var p=function(E){var F=E.children("fieldset");var G=new Object();if(F.length>0){F.children("input").each(function(){G[this.name]=this.value})}return G};var o=function(E){var G=E.children("fieldset");var H=new Array();if(G.length>0){var F=G.children("fieldset");if(F.length>0){F.children("input").each(function(){H.push(this.value)})}}return H};var e=function(G,F){var E=h("a.plugin_pagetree_childtoggle",G);E.each(function(){var H=h(this);H.attr("href","#").bind("click",function(K){var I=H.parent().parent().children("div.plugin_pagetree_children_container");var J=I.attr("id");var L=J.substring(8);n(L,null,null,null,F);K.preventDefault();K.stopPropagation()})})};var u=function(E){var F=h(document.createElement("div"));F.html(E);return F.find("ul[id^='child_ul']").length};var j=function(N,G,S,Q,J,F,H){var R=N;var K=J;var E=s(N);var I=E[0];var M=E[1];var L=h("#children"+N);var P=p(q(M));var T=false;function O(){L.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small")}L.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());if(H){setTimeout(function(){if(!T){O()}},250)}else{O()}h.ajax({type:"GET",url:f(M,I,G,S,Q,P.treePageId,F),dataType:"text",success:function(U){if(u(U)){L.html(U);T=true;if(L.children().length&&L.hasClass("hidden")){L.removeClass("hidden")}e(L,F);h("#plusminus"+R).addClass("icon-section-opened").removeClass("icon-section-closed");h("#childrenspan"+d[parseInt(M)]+"-"+M).addClass("plugin_pagetree_current");if(K){r(R)}t(L);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(U){if(U.status=="403"){L.text(P["i18n-pagetree.error.permission"])}else{L.text(P["i18n-pagetree.error.general"])}}})};var t=function(E){h("div.plugin_pagetree_children_container:empty",E).addClass("hidden")};var y=function(E,J){var H=p(E);var K=H.noRoot=="true";var G=K?"Orphan-"+J:H.rootPageId+"-"+J;var F=H.mobile=="true";w[J]=H.treeRequestId;if(F==false){d[J]=AJS.params.pageId}else{d[J]=h("div.content-container").parent().attr("data-content-id")}E.children("fieldset").each(function(){var L=h(this);L.children("input[treeId]").attr("value",J);L.children("input[rootPage]").attr("value",G)});if(K){E.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+J);E.find("a.plugin_pagetree_expandall").click(function(L){i("childrenOrphan-"+J,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("childrenOrphan-"+J,L,F);return false})}else{E.find("div.plugin_pagetree_children").attr("id","children"+G);E.find("a.plugin_pagetree_expandall").click(function(L){i("children"+G,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("children"+G,L,F);return false})}var I=o(E);j(G,I,H.startDepth,H.spaceKey,"",F,true)};this.initPageTrees=function(){h("div.plugin_pagetree").each(function(E){y(h(this),E)});D()};var D=function(){var E=self.placeFocus;if(E){self.placeFocus=function(){var F=h("form[name='pagetreesearchform']");F.attr("name","inlinecommentform");E();F.attr("name","pagetreesearchform")}}};h(".open-flyout-to-search").bind("click",function(E){if(h(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}E.stopPropagation();E.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees()}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"\u63d2\u5165JIRA\u95ee\u9898/\u8fc7\u6ee4\u5668"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"\u63d0\u5230"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["exports","jquery","ajs"],function(a,c,b){b.toInit(function(){var e="confluence.footer.item.click";var d=b.Meta.get("page-id");var f=(0,c)("body").hasClass("dashboard");(0,c)("#footer").on("click","a",function(){b.trigger("analytics",{name:e,data:{pageId:d,isDashboard:f}})})})});require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__66741aa250e6a2e683f9b0a60bdbbfd2=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__2fd777cca7fe187ff4048afabed6a6b5),j=f(__7e0423727525720eec50a0fbce0cace2),k=f(__dd0dee18d8910035abf3563b0855343d),
b=f(__32c9c638c13fb3cc78ab29b878f9b179),l=f(__c0c7dd6b9ca4bd1d92ff026738d8a472),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("\u5173\u95ed") + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"\u8fde\u63a5\u5230\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:event', location = '/includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(a,d,e,g,f){return function(){var h=g(d("body"));a.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},function(b){d("body").on("click",b.selector,function(a){var c=WRM.require("wr!"+b.resource,function(){f.trigger(b.event)});h.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"\u88c5\u8f7d\u9875\u9762\u9650\u5236\u65f6\u51fa\u9519\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5\u3002");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);return isNaN(a)?void 0:Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-resources-main', location = 'js/DiagramlyBlueprintInit.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:ajs-amd', location = 'lib/amd/ajs-amd.js' */
define("ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:wrm-amd', location = 'lib/amd/wrm-amd.js' */
define("wrm",function(){if(WRM.data instanceof Function){WRM.data.claim=WRM.data}return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:backbone-amd', location = 'lib/amd/backbone-amd.js' */
define("backbone",function(){return Backbone});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:jquery-amd', location = 'lib/amd/jquery-amd.js' */
define("jquery",function(){return AJS.$});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:underscore-amd', location = 'lib/amd/underscore-amd.js' */
define("underscore",function(){return _});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/hipChatDiscovery.js' */
define("confluence/hipchat/integration/hipchat/discovery",["wrm"],function(a){var b="com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";var c=b+":discovery-javascript-data.link-active";var d=typeof a.data!="function"?a.data.claim(c):a.data(c);return{isLinked:function(){return d.linkActive===true},isConditionsMet:function(){return d.conditionsMet===true},isAdmin:function(){return d.admin===true},pluginKey:function(){return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/discoveryPopup.js' */
define("confluence/hipchat/integration/hipchat/discovery/popup",["jquery"],function(a){return{show:function(g){var c,b;var h=g.featureKey;if(g.shouldShow()&&Confluence.FeatureDiscovery){b=Confluence.FeatureDiscovery.forPlugin(g.pluginKey);c=b.shouldShow(g.featureKey,true)}else{c=false}if(c){AJS.trigger("analyticsEvent",{name:g.analytics+".view",data:{}});b&&b.addDiscoveryView(h);var d;var e=function(){b&&b.markDiscovered(h);d.hide();AJS.trigger("analyticsEvent",{name:g.analytics+".accept",data:{}});if(a.isFunction(g.onAccept)){g.onAccept()}};var f=function(i){return function(j){j.preventDefault();b&&b.markDiscovered(h);d.hide();i.parent().remove();AJS.trigger("analyticsEvent",{name:g.analytics+".dismiss",data:{}});if(a.isFunction(g.onDismiss)){g.onDismiss()}}};d=AJS.InlineDialog(g.target,g.name,function(k,i,l){k.html(g.template({}));l();var j=k.parent();j.addClass("hipchat-integration-discovery");if(g.fixed===true){j.addClass("hipchat-integration-discovery-fixed")}k.find("#hipchat-integration-discovery-open").click(e);k.find("#hipchat-integration-discovery-dismiss").click(f(k))},{noBind:true});d.show();if(g.fixed===true){a(window).resize(function(){d.refresh()})}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-resources', location = 'discovery/integrationDiscovery.soy' */
// This file was automatically generated from integrationDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.integrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Connect your Confluence site to HipChat") + '</h2><p>' + soy.$$escapeHtml("Set up and send notifications to HipChat rooms.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Integrate with HipChat") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.integrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.integrationDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatServerDiscovery', location = 'discovery/integrationDiscovery.js' */
require(["jquery","confluence/hipchat/integration/hipchat/discovery","confluence/hipchat/integration/hipchat/discovery/popup"],function(c,b,a){c(function(){var d=AJS.contextPath()+"/plugins/servlet/hipchat/configure";a.show({featureKey:"hipChatServerIntegration",pluginKey:b.pluginKey(),analytics:"notifications.hipchat.discovery",template:Confluence.Templates.Hipchat.Discovery.integrationDialog,name:"hipchat-integration-dialog",target:c("#admin-menu-link"),shouldShow:function(){return !b.isLinked()&&b.isConditionsMet()&&b.isAdmin()},onAccept:function(){window.location.assign(d)},onDismiss:function(){},fixed:false})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChat.Presence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_ignored) {
  return '<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-' + soy.$$escapeHtml(opt_data.statusCode) + '" data-status="' + soy.$$escapeHtml(opt_data.statusCode) + '" title="' + soy.$$escapeHtml(opt_data.statusMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.badge.soyTemplateName = 'Confluence.Templates.HipChat.Presence.badge';
}


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_ignored) {
  return '<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="' + soy.$$escapeHtml("Unable to start chat as this user is not known in HipChat.") + '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">' + soy.$$escapeHtml("Chat") + '</span></span></button><button class="aui-button hipchat-voice" title="' + soy.$$escapeHtml("Unable to start voice calls as this user is not known in HipChat.") + '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">' + soy.$$escapeHtml("Voice") + '</span></span></button><button class="aui-button hipchat-video" title="' + soy.$$escapeHtml("Unable to start video calls as this user is not known in HipChat.") + '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">' + soy.$$escapeHtml("Video") + '</span></span></button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.chatBar.soyTemplateName = 'Confluence.Templates.HipChat.Presence.chatBar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function(d){var f=AJS.DarkFeatures.isEnabled("hipchat.chatbar");var a={hipChatCall:function(g,h){if(!g){return}return"hipchat://hipchat.com/user/"+encodeURI(g)+(h?"?call="+encodeURI(h):"")}};var c=AJS.contextPath()+"/rest/hipchat/integration/1.0/users/";var b=function(g){return function(j){var i=d(this);var h=i.attr("data-user-id");var k=i.attr("data-caller-id");if(!k){return}var l=i.attr("data-call-type");if(!g&&l){return}window.location.replace(a.hipChatCall(k,l));AJS.trigger("analyticsEvent",{name:"hipchat.chatbar."+(l||"chat"),data:{userId:h}});j.preventDefault()}};var e=function(g){return function(i){if(!i||!i.presence){return}var j=i.userId;var h=i.hipChatUserId;var k;var m;var l=d(g).find(".hipchat-chatbar .aui-button");l.attr("data-user-id",j);l.attr("data-caller-id",h);l.click(b(i.presence.is_online));if(i.presence.is_online){if(i.presence.show==="xa"||i.presence.show==="away"){k="away";m="Away"}else{if(i.presence.show==="dnd"){k="dnd";m="Do not disturb"}else{k="available";m="Available"}}l.filter(".hipchat-chat").attr("title","Start chat with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Start a voice call with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-video").attr("title","Start a video call with this user in HipChat.").removeAttr("aria-disabled")}else{k="offline";m="Offline";l.filter(".hipchat-chat").attr("title","Start chat with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Unable to start voice calls as this user is not known in HipChat.");l.filter(".hipchat-video").attr("title","Unable to start video calls as this user is not known in HipChat.")}if(i.presence.status){m+=" ("+i.presence.status+")"}d("div.values",g).append(Confluence.Templates.HipChat.Presence.badge({statusCode:k,statusMessage:m}));AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.found",data:{userId:i.userId}})}};d(document).bind("ajaxComplete",function(i,g,h){if(/userinfopopup\.action/.test(h.url)){d.each(d(".vcard"),function(n,p){var m=d(p);var k=m.closest(".contents");var l=k.find(".profile-macro").first();var o=k.find(".actions").first();if(l.hasClass("hipchat-status-applied")||!o.length){return}l.addClass("hipchat-status-applied");if(f){o.addClass("hipchat-chatbar-support");o.append(Confluence.Templates.HipChat.Presence.chatBar());o.find(".ajs-menu-bar").addClass("aui-buttons");o.find(".ajs-button > a").addClass("aui-button");o.find(".user-popup-more").addClass("aui-button");o.find(".user-popup-more > span > span").addClass("aui-icon aui-icon-small aui-iconfont-more").text("")}var q=d(".userLogoLink",m).attr("data-username");var j=c+encodeURIComponent(q);d.getJSON(j,e(k)).fail(function(t){if(t.status===404){try{var r=JSON.parse(t.responseText);if(r.userId){AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.unknown",data:{userId:r.userId}})}}catch(s){}}})})}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscoveryData.js' */
define("confluence/hipchat/spacetoroom/hipchat/discovery",[],function(){var a="com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";return{isSpaceAdmin:function(){return AJS.Meta.get("is-space-admin")===true},hasSpaceConfiguration:function(){return AJS.Meta.get("has-space-config")===true},pluginKey:function(){return a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.js' */
require(["jquery","confluence/hipchat/integration/hipchat/discovery","confluence/hipchat/spacetoroom/hipchat/discovery","confluence/hipchat/integration/hipchat/discovery/popup"],function(c,d,b,a){c(function(){var f=AJS.contextPath()+"/spaces/hipchat2.action?key="+encodeURIComponent(AJS.Meta.get("space-key"));var e=c("#space-tools-menu-trigger");if(e.length){a.show({featureKey:"hipChatSpaceIntegration",pluginKey:b.pluginKey(),analytics:"notifications.hipchat.space.discovery",template:Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog,name:"hipchat-space-integration-dialog",target:e,shouldShow:function(){return d.isLinked()&&b.isSpaceAdmin()&&!b.hasSpaceConfiguration()},onAccept:function(){window.location.assign(f)},fixed:true});a.show({featureKey:"hipChatServerIntegration",pluginKey:b.pluginKey(),analytics:"notifications.hipchat.space.link",template:Confluence.Templates.Hipchat.Discovery.spaceLinkDialog,name:"hipchat-space-link-dialog",target:e,shouldShow:function(){return !d.isLinked()&&d.isConditionsMet()&&!d.isAdmin()&&b.isSpaceAdmin()},onAccept:function(){window.location.assign(f)},fixed:true})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.soy' */
// This file was automatically generated from spaceDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Send messages to a HipChat room") + '</h2><p>' + soy.$$escapeHtml("Send notifications for new pages, blog posts or space changes directly to a room in HipChat.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Add HipChat notifications") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog';
}


Confluence.Templates.Hipchat.Discovery.spaceLinkDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Connect your Confluence site to HipChat") + '</h2><p>' + soy.$$escapeHtml("Set up and send notifications to HipChat rooms.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Integrate with HipChat") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceLinkDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceLinkDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{showIndexPagePopup:function(b){var d=function(i){return function(l,j,k){l.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:i.toLowerCase()}));k()}};var a=AJS.$(AJS.$("li.blueprint."+b)[0]);var h=a.text();var g=AJS.$(".icon",a);var f="blueprintIndexSidebarPopup";var c=AJS.InlineDialog(g.is(":visible")?g:AJS.$(".acs-nav-sections .quick-links-section"),f,d(h),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(i){var j=f+".inline-dialog-check";AJS.$("body").unbind("click."+j)});c.show();var e=function(i){AJS.$(document).on("click","#dismiss-index-popup",function(){i.hide();return false})}(c);AJS.bind("quickedit.success",function(){c.hide()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/sidebar-index-page-popup.soy' */
// This file was automatically generated from sidebar-index-page-popup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml(AJS.format("\u5728\u8fd9\u91cc\u627e\u5230\u60a8\u7684 {0}",opt_data.indexPageTitle)) + '</h2><p>' + soy.$$escapeHtml(AJS.format("\u60a8\u521b\u5efa\u4e86\u4e00\u4e2a {0} \u9875\u9762\u3002\u5728\u60a8\u7684\u8fb9\u680f\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5feb\u6377\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u6b64\u7a7a\u95f4\u7684\u5176\u4ed6 {0}\u3002",opt_data.indexPageTitle)) + '</p><br/><form>' + aui.buttons.button({text: "\u4e0d\u518d\u63d0\u793a", id: 'dismiss-index-popup'}) + '</form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.sidebarIndexPagePopup.soyTemplateName = 'Confluence.Templates.Blueprints.sidebarIndexPagePopup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){var d=b(this);if(d.attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};d.tooltip(c)}else{d.click(function(){d.addClass("launching-dialog");Confluence.Blueprint.loadDialogAndOpenTemplate(d.data());return false})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.CreateFromTemplate.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_ignored) {
  return '<a class=\'aui-button create-from-template-button\'' + ((! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6ca1\u6709\u521b\u5efa\u5185\u5bb9\u7684\u6743\u9650\u3002\u8054\u7cfb\u7a7a\u95f4\u7ba1\u7406\u5458\u4ee5\u83b7\u53d6\u6743\u9650\u3002") + '"' : '') + 'data-space-key=\'' + soy.$$escapeHtml(opt_data.spaceKey) + '\' href=\'' + soy.$$escapeHtml(opt_data.createContentUrl) + '\'' + ((opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '') + ((opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '') + ((opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '') + '>' + soy.$$escapeHtml(opt_data.buttonLabel) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate.soyTemplateName = 'Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.contributors:contributors-web-resources', location = 'com/atlassian/confluence/contributors/scripts/contributors.js' */
require(["ajs","underscore"],function(a,b){a.toInit(function(c){c("div.contributors-macro-ajax-container").each(function(){var e=c(this);var d=c.parseJSON(b.unescape(e.find(".contributors-macro-parameters")[0].innerHTML));e.text("Generating contributors information...");c.ajax({dataType:"json",url:Confluence.getContextPath()+"/rest/com.atlassian.confluence.contributors/1.0/contributors",data:d,success:function(f){if(f.errorMessage){e.text(f.errorMessage)}else{e.html(Confluence.ContributorsMacro.renderContent(f));e.find(".show-hidden-contributors").click(function(){e.find(".hidden-contributor").removeClass("hidden");c(this).parent().remove();return false})}},error:function(h,f,g){e.text("Failed to retrieve contributors information"+": "+g)}})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.contributors:contributors-web-resources', location = 'com/atlassian/confluence/contributors/templates/contributors-macro.soy' */
// This file was automatically generated from contributors-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ContributorsMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ContributorsMacro == 'undefined') { Confluence.ContributorsMacro = {}; }


Confluence.ContributorsMacro.ajaxContainer = function(opt_data, opt_ignored) {
  return '<div class="contributors-macro-ajax-container"><div style="display; none;" class="contributors-macro-parameters">' + soy.$$escapeHtml(opt_data.macroParameters) + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.ajaxContainer.soyTemplateName = 'Confluence.ContributorsMacro.ajaxContainer';
}


Confluence.ContributorsMacro.renderContent = function(opt_data, opt_ignored) {
  return '<div class="plugin-contributors">' + ((opt_data.layoutStyle == 'FLAT') ? Confluence.ContributorsMacro.flatLayout(opt_data) : (opt_data.layoutStyle == 'LIST') ? Confluence.ContributorsMacro.listLayout(opt_data) : '<span>Unknown layout style</span>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.renderContent.soyTemplateName = 'Confluence.ContributorsMacro.renderContent';
}


Confluence.ContributorsMacro.flatLayout = function(opt_data, opt_ignored) {
  return '<div class="plugin-contributors"><span><span>' + Confluence.ContributorsMacro.flatContributorsList({contributors: opt_data.visibleContributors, showCount: opt_data.showCount, showTime: opt_data.showTime}) + ((opt_data.hiddenContributors.length > 0) ? ',' : '') + '</span>' + ((opt_data.hiddenContributors.length > 0) ? '<span class="hidden hidden-contributor">' + Confluence.ContributorsMacro.flatContributorsList({contributors: opt_data.hiddenContributors, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</span><span><a href="#" class="show-hidden-contributors" title="' + soy.$$escapeHtml(AJS.format("{0} \u66f4\u591a...",opt_data.hiddenContributors.length)) + '">...</a></span>' : '') + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.flatLayout.soyTemplateName = 'Confluence.ContributorsMacro.flatLayout';
}


Confluence.ContributorsMacro.listLayout = function(opt_data, opt_ignored) {
  var output = '<div class="plugin-contributors"><ul class="contributors-list">';
  var contributorList39 = opt_data.visibleContributors;
  var contributorListLen39 = contributorList39.length;
  for (var contributorIndex39 = 0; contributorIndex39 < contributorListLen39; contributorIndex39++) {
    var contributorData39 = contributorList39[contributorIndex39];
    output += '<li>' + Confluence.ContributorsMacro.contributor({contributor: contributorData39, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</li>';
  }
  if (opt_data.hiddenContributors.length > 0) {
    output += '<li><a href="#" class="show-hidden-contributors" title="' + soy.$$escapeHtml(AJS.format("{0} \u66f4\u591a...",opt_data.hiddenContributors.length)) + '">...</a></li>';
    var contributorList52 = opt_data.hiddenContributors;
    var contributorListLen52 = contributorList52.length;
    for (var contributorIndex52 = 0; contributorIndex52 < contributorListLen52; contributorIndex52++) {
      var contributorData52 = contributorList52[contributorIndex52];
      output += '<li class="hidden hidden-contributor">' + Confluence.ContributorsMacro.contributor({contributor: contributorData52, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</li>';
    }
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.listLayout.soyTemplateName = 'Confluence.ContributorsMacro.listLayout';
}


Confluence.ContributorsMacro.flatContributorsList = function(opt_data, opt_ignored) {
  var output = '';
  var contributorList62 = opt_data.contributors;
  var contributorListLen62 = contributorList62.length;
  for (var contributorIndex62 = 0; contributorIndex62 < contributorListLen62; contributorIndex62++) {
    var contributorData62 = contributorList62[contributorIndex62];
    output += ((! (contributorIndex62 == 0)) ? ',' : '') + Confluence.ContributorsMacro.contributor({contributor: contributorData62, showCount: opt_data.showCount, showTime: opt_data.showTime});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.flatContributorsList.soyTemplateName = 'Confluence.ContributorsMacro.flatContributorsList';
}


Confluence.ContributorsMacro.contributor = function(opt_data, opt_ignored) {
  return Confluence.Templates.User.usernameLink({username: opt_data.contributor.idString, fullName: opt_data.contributor.fullNameString, canView: false}) + ' ' + ((opt_data.showCount) ? soy.$$escapeHtml(opt_data.contributor.totalCount) : '') + ' ' + ((opt_data.showTime) ? '(' + soy.$$escapeHtml(opt_data.contributor.relativeLastActiveTimeStr) + ')' : '');
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.contributor.soyTemplateName = 'Confluence.ContributorsMacro.contributor';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
AJS.toInit(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var g="wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";var b="\u6b63\u88c5\u8f7d\u2026";var e=false;var j=d("div.jira-issues-created");if(j.length>0){if(window.history&&window.history.replaceState){var h=window.location.href;var i=h.substr(0,h.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,i)}var a=j.find("#jira-content-message-panel-error-warning");var f=j.find("#jira-content-message-panel-view-more-link");f.click(function(k){k.preventDefault();f.hide();a.show()});if(j.hasClass("success")){setTimeout(function(){j.hide()},10000)}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(c,{onClick:function(l){var k;if(!e){var m=function(o,n,p){o.html('<span class="aui-icon aui-icon-wait"></span> '+b);p();return false};k=d("<div>");Confluence.CreateJiraContent.Dialogs.appendDialogTarget(l.area.average,k);dialog=Confluence.ScrollingInlineDialog(k,"create-issue-loading-dialog",m,{});dialog.show();e=true}WRM.require(g).done(function(){if(Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(l)}else{Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(l)}if(typeof k!=="undefined"){k.remove()}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY});Confluence.CreateJiraContent={Dialogs:{}};Confluence.CreateJiraContent.Dialogs.appendDialogTarget=function(l,k){Confluence.DocThemeUtils.appendAbsolutePositionedElement(k);k.css({top:l.top,height:l.height,left:l.left,width:l.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.ia-fixed-sidebar {visibility: hidden;}</style>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.headerStyles.soyTemplateName = 'Confluence.Templates.Sidebar.headerStyles';
}


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_ignored) {
  return '<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="' + soy.$$escapeHtml("\u7f16\u8f91\u7a7a\u95f4\u7ec6\u8282") + '"><div class="avatar"><div class="space-logo" data-key="' + soy.$$escapeHtml(opt_data.space.key) + '" data-name="' + soy.$$escapeHtml(opt_data.space.name) + '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '"><img class="avatar-img" src="' + soy.$$escapeHtml(opt_data.space.logoUrl) + '" alt="' + soy.$$escapeHtml(opt_data.space.name) + '"></a></div></div></div></div><div class="space-information-container"><div class="name"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '">' + soy.$$escapeHtml(opt_data.space.name) + '</a></div><div class="flyout-handle icon"></div>' + ((opt_data.hasFavouriteSpacePermission) ? '<div class="favourite-space-icon">' + Confluence.Templates.Sidebar.renderFavouriteSpace(opt_data) + '</div>' : '') + '</div></div><div class="acs-side-bar-content"><div class="acs-nav-wrapper"><div class="acs-nav" data-has-create-permission="' + soy.$$escapeHtml(opt_data.hasCreatePermission) + '" data-quick-links-state="' + soy.$$escapeHtml(opt_data.quickLinksState) + '" data-page-tree-state="' + soy.$$escapeHtml(opt_data.pageTreeState) + '" data-nav-type="' + soy.$$escapeHtml(opt_data.navType) + '">' + Confluence.Templates.Sidebar.renderLinks(opt_data) + '</div></div>' + ((opt_data.contextualNav) ? Confluence.Templates.Sidebar.contextualNav(opt_data) : '') + '</div><div class="hidden"><a href="' + soy.$$escapeHtml(opt_data.space.browseSpaceUrl) + '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>' + soy.$$escapeHtml("\u7a7a\u95f4\u8be6\u60c5") + '</h2><div class="personal-space-logo-hint">' + soy.$$filterNoAutoescape(AJS.format("\u60a8\u7684\u4e2a\u4eba\u5934\u50cf\u88ab\u4f5c\u4e3a\u60a8\u7684\u4e2a\u4eba\u7a7a\u95f4\u7684logo\u4f7f\u7528\u3002\x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3e\u66f4\u6539\u60a8\u7684\u4e2a\u4eba\u5934\u50cf\x3c/a\x3e.","" + '/users/profile/editmyprofilepicture.action')) + '</div><\/script></div></div>' + Confluence.Templates.Sidebar.renderSpaceToolsSection({advancedLinks: opt_data.advancedLinks, hasConfigurePermission: opt_data.hasConfigurePermission, currentlyViewed: opt_data.collectorToHighlight == 'spacebar-advanced'});
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.sidebar.soyTemplateName = 'Confluence.Templates.Sidebar.sidebar';
}


Confluence.Templates.Sidebar.renderFavouriteSpace = function(opt_data, opt_ignored) {
  return '<button title="' + soy.$$escapeHtml("Add to my spaces") + '" id="space-favourite-add" class="space-favourite aui-icon aui-icon-small aui-iconfont-unstar"></button><button class="' + ((! opt_data.isFavouriteSpace) ? ' space-favourite-hidden ' : '') + ' space-favourite aui-icon aui-icon-small aui-iconfont-star" id="space-favourite-remove" title="' + soy.$$escapeHtml("Remove from my spaces") + '"></button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderFavouriteSpace.soyTemplateName = 'Confluence.Templates.Sidebar.renderFavouriteSpace';
}


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections">' + ((opt_data.mainLinks.length) ? Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}) : '') + ((opt_data.quickLinksState != 'hide') ? '<div class="quick-links-wrapper">' + ((opt_data.quickLinks.length) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml("\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5") + '</h5>' + Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}) : (opt_data.hasConfigurePermission) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml("\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5") + '</h5><p class="tip">' + soy.$$filterNoAutoescape(AJS.format("\u5728\u8fd9\u91cc\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u56e2\u961f\u6216\u9879\u76ee\u7684\u91cd\u8981\u5185\u5bb9\u589e\u52a0\u5feb\u6377\u94fe\u63a5\x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3e\u914d\u7f6e\u4fa7\u8fb9\u680f\x3c/a\x3e\u3002",'','configure-sidebar')) + '</p>' : '') + '</div>' : '') + ((opt_data.hasSidebarCustomisation) ? Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinks.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinks';
}


Confluence.Templates.Sidebar.renderCustomContent = function(opt_data, opt_ignored) {
  return '<div class="custom-sidebar"><div class="custom-sidebar-content"><div class="content">' + soy.$$filterNoAutoescape(opt_data.sidebarCustomisation) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderCustomContent.soyTemplateName = 'Confluence.Templates.Sidebar.renderCustomContent';
}


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.links.length) {
    output += '<div class="' + soy.$$escapeHtml(opt_data.sectionClass) + ' ' + ((opt_data.highlightSection) ? ' current-section' : '') + '"><ul class="acs-nav-list">';
    var linkList129 = opt_data.links;
    var linkListLen129 = linkList129.length;
    for (var linkIndex129 = 0; linkIndex129 < linkListLen129; linkIndex129++) {
      var linkData129 = linkList129[linkIndex129];
      output += '<li class="acs-nav-item ' + soy.$$escapeHtml(linkData129.styleClass) + ((opt_data.collectorToHighlight && linkData129.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '') + '"' + ((linkData129.collectorKey) ? 'data-collector-key="' + soy.$$escapeHtml(linkData129.collectorKey) + '"' : '') + '><a class="acs-nav-item-link tipsy-enabled" href="' + soy.$$escapeHtml(linkData129.url) + '" data-collapsed-tooltip="' + soy.$$escapeHtml(linkData129.tooltip) + '"><span class="icon"></span><span class="acs-nav-item-label">' + soy.$$escapeHtml(linkData129.title) + '</span></a></li>';
    }
    output += '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinksSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinksSection';
}


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-container tipsy-enabled" data-tree-type="' + ((opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : soy.$$escapeHtml(opt_data.navType)) + '">' + ((opt_data.pageTreeState != 'hide') ? (opt_data.forBlogs) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("\u535a\u6587") + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.forSettings) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">' + soy.$$escapeHtml("\u9ad8\u7ea7") + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.navType == 'page-tree') ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title page-tree"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("\u9875\u9762\u6811\u7ed3\u6784") + '</span></h5></div>' + ((opt_data.pageTreeEmpty) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format("\u901a\u8fc7\u589e\u52a0\u4e00\u4e9b\u9875\u9762\u5230\u6b64\u7a7a\u95f4\u4e2d\u6765\u5f00\u59cb\u3002\x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3e\u521b\u5efa\u9875\u9762\x3c/a\x3e\u3002","" + '/pages/createpage.action?spaceKey=' + opt_data.space.key,'page-tree-create-child-page-link')) + '</p>' : '<div class="ia-secondary-content">' + soy.$$filterNoAutoescape(opt_data.contextualNav) + '</div>') : Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav: opt_data.contextualNav, hasCreatePermission: opt_data.hasCreatePermission}) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.contextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.contextualNav';
}


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_ignored) {
  var output = '<ul class="' + ((opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree') + '">';
  var itemList205 = opt_data.pagetree;
  var itemListLen205 = itemList205.length;
  for (var itemIndex205 = 0; itemIndex205 < itemListLen205; itemIndex205++) {
    var itemData205 = itemList205[itemIndex205];
    output += Confluence.Templates.Sidebar.pagetreeItem(itemData205);
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeList.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeList';
}


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_ignored) {
  return '<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>' + soy.$$escapeHtml("\u6b63\u5728\u52a0\u8f7d...") + '</span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.throbber.soyTemplateName = 'Confluence.Templates.Sidebar.throbber';
}


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_ignored) {
  return '<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">' + soy.$$escapeHtml("\u6b63\u5728\u52a0\u8f7d...") + '</span></li></ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.treeThrobber.soyTemplateName = 'Confluence.Templates.Sidebar.treeThrobber';
}


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_ignored) {
  return '<li class="acs-tree-item' + ((opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf') + ((opt_data.groupType) ? ' grouping' : '') + ((opt_data.active) ? ' current-item' : '') + '"' + ((opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '') + ((opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '') + '>' + ((! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '') + '<span class="icon ' + ((opt_data.hasChildren) ? (opt_data.children.length) ? 'icon-section-opened' : 'icon-section-closed' : '') + '"></span><span class="node-title navigation-pseudo-link">' + soy.$$escapeHtml(opt_data.title) + '</span>' + ((! opt_data.groupType) ? '</a>' : '') + ((opt_data.children && opt_data.children.length > 0) ? Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}) : '') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeItem.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeItem';
}


Confluence.Templates.Sidebar.renderSpaceToolsSection = function(opt_data, opt_ignored) {
  var output = '<div class="space-tools-section"><div id="space-tools-menu-additional-items" class="hidden">';
  var linkList275 = opt_data.advancedLinks;
  var linkListLen275 = linkList275.length;
  for (var linkIndex275 = 0; linkIndex275 < linkListLen275; linkIndex275++) {
    var linkData275 = linkList275[linkIndex275];
    output += '<div data-label="' + soy.$$escapeHtml(linkData275.title) + '" data-class="' + soy.$$escapeHtml(linkData275.styleClass) + '" data-href="' + soy.$$escapeHtml(linkData275.url) + '">' + soy.$$escapeHtml(linkData275.title) + '</div>';
  }
  output += ((opt_data.hasConfigurePermission) ? '<div data-label="' + soy.$$escapeHtml("\u914d\u7f6e\u4fa7\u8fb9\u680f") + '" data-class="configure-sidebar" data-href="">' + soy.$$escapeHtml("\u914d\u7f6e\u4fa7\u8fb9\u680f") + '</div>' : '') + '</div>' + aui.dropdown2.trigger({menu: {id: 'space-tools-menu'}, id: 'space-tools-menu-trigger', tagName: 'button', extraClasses: 'aui-button aui-button-subtle tipsy-enabled' + ((opt_data.currentlyViewed) ? ' current-item' : ''), content: aui.icons.icon({useIconFont: true, icon: 'configure', accessibilityText: "Configure"}) + '<span class="aui-button-label">' + soy.$$escapeHtml("\u7a7a\u95f4\u7ba1\u7406") + '</span>'}) + aui.dropdown2.contents({id: 'space-tools-menu', extraClasses: 'aui-style-default space-tools-dropdown', extraAttributes: {'data-aui-alignment': 'top left'}}) + '<a class="expand-collapse-trigger"></a></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderSpaceToolsSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderSpaceToolsSection';
}


Confluence.Templates.Sidebar.spaceToolsMenu = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.isAuiFiveSeven) {
    output += '<div class="space-tools-menu"><div class="aui-dropdown2-section"><ul class="space-tools-navigation">';
    var linkList320 = opt_data.spaceToolLinks;
    var linkListLen320 = linkList320.length;
    for (var linkIndex320 = 0; linkIndex320 < linkListLen320; linkIndex320++) {
      var linkData320 = linkList320[linkIndex320];
      output += '<li><a href="' + soy.$$escapeHtml(linkData320.href) + '" title="' + soy.$$escapeHtml(linkData320.label) + '">' + soy.$$escapeHtml(linkData320.label) + '</a></li>';
    }
    output += '</ul></div>';
    if (opt_data.spaceLinks.length > 0) {
      output += '<div class="aui-dropdown2-section"><ul class="space-operations">';
      var linkList333 = opt_data.spaceLinks;
      var linkListLen333 = linkList333.length;
      for (var linkIndex333 = 0; linkIndex333 < linkListLen333; linkIndex333++) {
        var linkData333 = linkList333[linkIndex333];
        output += '<li><a class="' + soy.$$escapeHtml(linkData333.className) + '" href="' + soy.$$escapeHtml(linkData333.href) + '" title="' + soy.$$escapeHtml(linkData333.label) + '">' + soy.$$escapeHtml(linkData333.label) + '</a></li>';
      }
      output += '</ul></div>';
    }
    output += '</div>';
  } else {
    output += aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceToolLinks, extraClasses: 'space-tools-navigation'}) + ((opt_data.spaceLinks.length > 0) ? aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceLinks, extraClasses: 'space-operations'}) : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.spaceToolsMenu.soyTemplateName = 'Confluence.Templates.Sidebar.spaceToolsMenu';
}


Confluence.Templates.Sidebar.configure = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections"><table id="acs-nav-list-main" class="acs-nav-list"></table><div class="acs-nav-list-quick-section' + ((opt_data.quickLinksState == 'hide') ? ' hidden-section' : '') + '"><div class="quick-links-header"><h5>' + soy.$$escapeHtml("\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5") + '</h5><a href="#" class="aui-icon aui-icon-small toggle-link" data-tooltip="' + soy.$$escapeHtml("\u663e\u793a/\u9690\u85cf\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5") + '"/></div><table id="acs-nav-list-quick" class="acs-nav-list"></table><p class="tip">' + soy.$$escapeHtml("\u70b9\u51fb\u201c\u589e\u52a0\u94fe\u63a5\u201d\u6765\u5411\u4fa7\u8fb9\u680f\u4e2d\u589e\u52a0\u94fe\u63a5\u3002") + '</p><a class="acs-add-link" href="#"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("\u589e\u52a0\u94fe\u63a5") + '</span></a></div>' + ((opt_data.hasSidebarCustomisation) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format("You can continue editing your customized sidebar in the space admin. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eGo to space admin\x3c/a\x3e.",opt_data.customContentAdminLink,'custom-sidebar-tip')) + '</p>' + Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '<div class="acs-nav-list-page-tree-section' + ((opt_data.pageTreeState == 'hide') ? ' hidden-section' : '') + '"><div class="page-tree-header"><h5>' + soy.$$escapeHtml("\u5bfc\u822a\u663e\u793a\u9009\u9879") + '</h5><a href="#" class="aui-icon aui-icon-small toggle-link" data-tooltip="' + soy.$$escapeHtml("Hide/Show navigation display options") + '"/></div><form class="aui page-tree-options"><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="pages" id="nav-type-pages" ' + ((! opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-pages">' + soy.$$escapeHtml("\u5b50\u9875\u9762") + '</label></div><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="page-tree" id="nav-type-tree" ' + ((opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-tree">' + soy.$$escapeHtml("\u9875\u9762\u6811\u7ed3\u6784") + '</label></div></form></div><button class="aui-style aui-button acs-done-link">' + soy.$$escapeHtml("\u5b8c\u6210") + '</button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.configure.soyTemplateName = 'Confluence.Templates.Sidebar.configure';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar-pages.soy' */
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.Pages.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.renderPageContextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title pages"><span class="label">' + soy.$$escapeHtml("\u5b50\u9875\u9762") + '</span></h5></div><div class="ia-secondary-parent-content">' + Confluence.Templates.Sidebar.Pages.parentPage({parentPage: opt_data.pageContextualNav.parentPage}) + '</div><div class="ia-secondary-current-content">' + Confluence.Templates.Sidebar.Pages.currentPage({currentPage: opt_data.pageContextualNav.currentPage}) + '</div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.Pages.childPages({children: opt_data.pageContextualNav, createPermission: opt_data.hasCreatePermission}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderPageContextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderPageContextualNav';
}


Confluence.Templates.Sidebar.Pages.childPages = function(opt_data, opt_ignored) {
  return '<div class="contextual-nav-child-pages">' + ((opt_data.children.initialChildPages.length) ? '<ul class="children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialChildPages}) + '</ul>' + ((opt_data.children.remainingChildPages.length) ? '<ul class="more-children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingChildPages}) + '</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">' + soy.$$escapeHtml(AJS.format("{0}\u66f4\u591a\u5b50\u9875\u9762",opt_data.children.remainingChildPages.length)) + '</span></a>' : '') : '') + ((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("\u521b\u5efa\u5b50\u9875\u9762") + '</span></a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.childPages.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.childPages';
}


Confluence.Templates.Sidebar.Pages.currentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.currentPage) ? '<ul class="ia-secondary-currentPage-title wiki' + ((opt_data.currentPage.active) ? ' current-item' : '') + '"><li><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.currentPage.title) + '</span></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.currentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.currentPage';
}


Confluence.Templates.Sidebar.Pages.parentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.parentPage) ? '<ul class="parent ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><li class="parent-item"><a class="parent-item-link" href="' + soy.$$escapeHtml(opt_data.parentPage.url) + '" title="' + soy.$$escapeHtml(opt_data.parentPage.title) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></a></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.parentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.parentPage';
}


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_ignored) {
  var output = '';
  var childList65 = opt_data.children;
  var childListLen65 = childList65.length;
  for (var childIndex65 = 0; childIndex65 < childListLen65; childIndex65++) {
    var childData65 = childList65[childIndex65];
    output += '<li class="child-item" data-page-id="' + soy.$$escapeHtml(childData65.pageId) + '"><span class="icon"></span><a href="' + soy.$$escapeHtml(childData65.url) + '" title="' + soy.$$escapeHtml(childData65.title) + '"><span class="label">' + soy.$$escapeHtml(childData65.title) + '</span></a></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderChildren.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderChildren';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader","jquery confluence/legacy confluence/meta confluence/aui-overrides ajs wrm window".split(" "),function(d,j,h,l,e,m,n){var b,c={_listening:false,_queuedHandlers:[],_watchHandler:function(){j.Editor.UI.toggleWatchPage(false)},_unwatchHandler:function(){j.Editor.UI.toggleWatchPage(true)},_createQueueAdder:function(a){return function(){c._listening&&c._queuedHandlers.push(a)}},bind:function(){e.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));
e.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;){a();a=this._queuedHandlers.pop()}}};c.setListening(true);c.bind();var k=function(){var a=d("#editor-preload-container");a.length||(a=d('<div id="editor-preload-container" style="display: none;"></div>'));return a},f;return{getPreloadContainer:k,getEditorPreloadMarkup:function(){if(f)return f;var a=e.contextPath()+
"/plugins/editor-loader/editor.action";return f=d.get(a,{parentPageId:h.get("parent-page-id"),pageId:h.get("page-id"),spaceKey:h.get("space-key"),atl_after_login_redirect:n.location.pathname,timeout:e.Confluence.EditorLoader.loadingTimeout})},resourcesLoaded:function(){return b&&b.isResolved()},loadingTimeout:12E3,isEditorActive:function(){var a=d("#editor-preload-container");return a.length&&a.is(":visible")},load:function(a,c){var g;if(b){b.fail(function(){c?c.call(this,arguments):e.log("EditorLoader: loadGuard - previous load failed.")});
b.done(function(){a?b.done(function(){setTimeout(a,0)}):e.log("EditorLoader: loadGuard - editor is already loaded.")});g=true}else g=void 0;if(!g){b=new d.Deferred;a&&b.done(a);c&&b.fail(c);var f=k();d("body").append(f);var i=new d.Deferred;h.get("page-id")?this.getEditorPreloadMarkup().always(function(a,b,c){if(b==="success"||b==="notmodified"){f.append(a);a=e.renderTemplate("dynamic-editor-metadata");d("head").append(a);l.metaToParams();e.debug("EditorLoader: Finished loading the editor template.");
i.resolve()}else i.reject("Error loading the Editor template: "+c.status+" - "+c.statusText)}):i.resolve();g=m.require(["wrc!editor","wrc!macro-browser","wrc!fullpage-editor"]).fail(function(a){e.logError("Failed to load editor resources",a)});d.when(i,g).done(function(){e.debug("EditorLoader: Finished loading the editor.");b.resolve()}).fail(function(){b.reject(arguments)})}},getEditorForm:function(){if(this.isEditorActive()){var a=require("tinymce");return d(a.activeEditor.getContainer()).closest("form")}return null}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/linkbrowser-editor-adapter.js' */
AJS.$(function(){if(!$("body").hasClass("with-space-sidebar")){return}Confluence=Confluence||{};Confluence.Editor=Confluence.Editor||{};AJS.Rte=AJS.Rte||{};AJS.Rte.BookmarkManager=AJS.Rte.BookmarkManager||{};AJS.Rte.BookmarkManager.storeBookmark=AJS.$.noop;AJS.Rte.BookmarkManager.restoreBookmark=AJS.$.noop});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-ia.js' */
(function(a){Confluence.Sidebar={};AJS.toInit(function(C){var I=C(window);var o=C(document);var v=Math.min(285,I.width()/3);var z=285;var c=150;var n=55;var q=640;var E=AJS.storageManager("confluence","sidebar");var p="width";var l=AJS.contextPath();var G=AJS.Meta.get("space-key");var i=AJS.Meta.get("use-keyboard-shortcuts")?" "+"(\u2009[\u2009)":"";Confluence.Sidebar.collapseTooltip="\u6536\u8d77\u4fa7\u8fb9\u680f"+i;Confluence.Sidebar.expandTooltip="\u5c55\u5f00\u4fa7\u8fb9\u680f"+i;var H=C(".ia-splitter").children();var D=C(".ia-splitter-left");if(D.length<1){return}var h=C(".acs-side-bar");var d=D.find(".ia-fixed-sidebar");var b=C("<div>",{"class":"ia-splitter-handle tipsy-enabled","data-tooltip":Confluence.Sidebar.collapseTooltip}).appendTo(d);C("<div>",{"class":"ia-splitter-handle-highlight"}).appendTo(b);var u=C(".ia-secondary-container");var m=C("#footer, #studio-footer");Confluence.Sidebar.throbberDiv=e;u.length&&k(u.attr("data-tree-type"));I.scroll(y);I.resize(y);I.on("touchend",y);o.ready(y);AJS.bind("confluence.header-resized",y);C("#header-precursor img").load(y);Confluence.Sidebar.applyTooltip=r;t();AJS.bind("sidebar.exit-configure-mode",t);var g=E.getItem(p)||v;var A=g>c?g:n;x(A);K();d.css("visibility","visible");y();J();setTimeout(function(){Confluence.Sidebar.createFlyouts(h)},0);AJS.trigger("sidebar.finished-loading");I.one("pagetree-children-loaded",function(){var L=C(".plugin_pagetree_current");if(L.length){var M=L.offset();if(M.top>h.height()/2){h.scrollTop(M.top-h.height()/3)}if(M.left>h.width()/2){h.scrollLeft(M.left-h.width()/2)}}});AJS.bind("sidebar.enter-configure-mode",function(){s();w();d.addClass("configure-mode")});AJS.bind("sidebar.exit-configure-mode",function(){s();B();d.removeClass("configure-mode")});function s(){AJS.trigger("sidebar.hide-overlays")}function r(L,N){var M={live:true,gravity:"w",title:"data-tooltip",delayIn:500,delayOut:0,offset:5};C(L).tooltip(N?C.extend(M,N):M)}function t(){C(".acs-side-bar .quick-links-section").attr("data-collapsed-tooltip","\u7a7a\u95f4\u5feb\u6377\u94fe\u63a5");C("#space-tools-menu-trigger").attr("data-collapsed-tooltip","\u7a7a\u95f4\u7ba1\u7406");if(u.attr("data-tree-type")=="pages"){C(".acs-side-bar .ia-secondary-container").attr("data-collapsed-tooltip","\u5b50\u9875\u9762");r(".collapsed .ia-secondary-container.tipsy-enabled",{title:"data-collapsed-tooltip"})}r(".expand-collapse-trigger");r(".ia-splitter-handle.tipsy-enabled");r(".collapsed .quick-links-section.tipsy-enabled, .collapsed .acs-nav-item > a.tipsy-enabled, .collapsed #space-tools-menu-trigger.tipsy-enabled",{title:"data-collapsed-tooltip"});r(".configure-mode .acs-side-bar-space-info.tipsy-enabled",{title:"data-configure-tooltip"});h.on("mousedown click scroll",s);C(window).on("scroll resize",s);AJS.bind("sidebar.hide-overlays",M);AJS.bind("sidebar.disable-tooltip",N);AJS.bind("sidebar.enable-all-tooltips",L);function N(R,Q){var O=C(Q).closest(".tipsy-enabled");if(O.size()!=1){return}O.removeClass("tipsy-enabled").addClass("tipsy-disabled").attr("title","");var P=O.data("tipsy");if(P){P.hoverState="out"}M()}function L(){C(".tipsy-disabled").removeClass("tipsy-disabled").addClass("tipsy-enabled")}function M(){C(".tipsy").remove()}}function K(){o.on("mousewheel",".ia-scrollable-section",function(O,P){var N=C(this).scrollTop();var M=C(this).get(0).scrollHeight-C(this).innerHeight()-1;if((P>0&&N<=0)||(P<0&&N>=M)){O.preventDefault()}else{if(C.browser.msie){O.preventDefault();var L=30;C(this).scrollTop(N+(-1*P*L))}}O.stopPropagation()})}function e(){var M=C(Confluence.Templates.Sidebar.throbber()),N=M.find(".spinner"),L=Raphael.spinner(N[0],10,"#666");M.find(".throbber").bind("remove",function(){L()});return M}function k(L){if(L==="blogs"){j(h,f)}else{if(L==="pages"){Confluence.Sidebar.Pages.installHandlers(h)}}}function f(O,P){var N=O.attr("data-group-type");var L=O.attr("data-group-value");var M=l+"/rest/ia/1.0/pagetree/blog/subtree";C.get(M,{spaceKey:G,groupType:N,groupValue:L}).done(P)}function j(L,M){L.delegate(".acs-tree-item > .icon, .acs-tree-item > .node-title","click",function(){var R=C(this);var Q=R.parent();var N=Q.find("> .icon");if(Q.hasClass("opened")){Q.children("ul").hide();Q.removeClass("opened").addClass("closed");N.removeClass("icon-section-opened").addClass("icon-section-closed")}else{if(Q.hasClass("closed")){var O=Q.children("ul");if(O.length){O.show()}else{var P=C(Confluence.Templates.Sidebar.treeThrobber());Q.append(P);M(Q,function(T){var S=C(Confluence.Templates.Sidebar.pagetreeList({pagetree:T,isSubtree:true}));P.remove();S.appendTo(Q)})}Q.removeClass("closed").addClass("opened");N.removeClass("icon-section-closed").addClass("icon-section-opened")}}})}function y(){var L=D.offset().top,M=I.scrollTop(),N=I.scrollLeft();if(M<0){return}if(M>(o.height()-I.height())){return}if(N<0){return}if(N>(o.width()-I.width())){return}if(C("#header").css("position")!=="fixed"){d.css({top:Math.max(L-M,0)+"px",left:Math.min(N*-1,0)+"px"})}else{d.css({left:Math.min(N*-1,0)+"px"})}}function F(){m.css("margin-left",d.outerWidth()+"px")}function J(){var O=C("body");var M=false;var N=false;var P=function(Q){N=true;Q.preventDefault();H.one("selectstart",function(S){S.preventDefault()});var R=function(){if(d.width()<=c){x(n)}else{v=d.width()}N=false;O.off("mousemove.ia-splitter")};M=false;O.on("mousemove.ia-splitter",function(S){if(Confluence.Sidebar.Configure.mode&&S.pageX<z){return}x(S.pageX);M=true});O.one("mouseup mouseleave",R)};b.on("mousedown.ia-splitter",function(Q){P(Q);s()}).click(function(){if(!M){L()}else{M=false}});Confluence.Sidebar.toggle=L;function L(){if(Confluence.Sidebar.Configure.mode){return}var Q=d.width();if(Q>n){if(Q<=c){v=z;x(v)}else{v=Q;x(n)}}else{x(v)}}}function x(L){L=Math.max(L,n);L=Math.min(L,q);E.setItemQuietly(p,L);if(L<=c){d.addClass("collapsed");b.attr("data-tooltip",Confluence.Sidebar.expandTooltip);AJS.trigger("sidebar.collapsed")}else{if(d.hasClass("collapsed")){d.removeClass("collapsed");b.attr("data-tooltip",Confluence.Sidebar.collapseTooltip);AJS.trigger("sidebar.expanded")}}d.width(L);H.eq(1).css("margin-left",L+"px");F()}function w(){if(d.width()<z){Confluence.Sidebar.widthBeforeConfiguring=d.width();x(z)}}function B(){if(Confluence.Sidebar.widthBeforeConfiguring){x(Confluence.Sidebar.widthBeforeConfiguring);Confluence.Sidebar.widthBeforeConfiguring=undefined}}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/configurable-nav.js' */
(function(a){AJS.Confluence.ConfigurableNav=AJS.RestfulTable.extend({initialize:function(c){var b=this;b.options=a.extend(true,c,{model:AJS.RestfulTable.EntryModel,Collection:Backbone.Collection.extend({url:c.resources.self,model:AJS.RestfulTable.EntryModel}),columns:[{id:"title"}]});b._events=b._events||AJS.RestfulTable.Events;b._event=b._event||AJS.RestfulTable.Events;b.classNames=AJS.RestfulTable.ClassNames;b.dataKeys=AJS.RestfulTable.DataKeys;b.$table=c.$el.addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(b.classNames.LOADING);b.$table.prepend('<colgroup><col span="1" class="aui-restfultable-order"><col span="1"><col span="1" class="aui-restfultable-operations"></colgroup>');b.$tbody=a("<tbody/>");b._models=this._createCollection();b._rowClass=AJS.Confluence.ConfigurableNav.Row;b.editRows=[];b.enableReordering();b._models.bind("remove",function(d){a.each(b.getRows(),function(e,f){if(f.model===d){if(f.hasFocus()&&b._createRow){b._createRow.trigger(b._event.FOCUS)}b.removeRow(f)}})});a.get(b.options.resources.all,function(d){b.populate(d)});Confluence.Sidebar.applyTooltip(".hide-link, .show-link, .delete-link, .toggle-link",{gravity:"ne"})},enableReordering:function(){var b=this;this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(f,c){var d=c.clone(true).addClass(b.classNames.MOVEABLE);d.children().each(function(e){a(this).width(c.children().eq(e).width())});return d},start:function(c,d){var e=d.placeholder.find("td");d.item.addClass(b.classNames.MOVEABLE).children().each(function(f){a(this).width(e.eq(f).width())});d.placeholder.html('<td colspan="'+b.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");b.getRowFromElement(d.item[0]).trigger(b._event.MODAL)},stop:function(c,d){if(jQuery(d.item[0]).is(":visible")){d.item.removeClass(b.classNames.MOVEABLE).children().attr("style","");d.placeholder.removeClass(b.classNames.ROW);b.getRowFromElement(d.item[0]).trigger(b._event.MODELESS)}},update:function(e,g){var c,d,f={},h=b.getRowFromElement(g.item[0]);if(h){if(b.options.reverseOrder){d=g.item.next();if(!d.length){f.position="First"}else{c=b.getRowFromElement(d).model;f.after=c.url()}}else{d=g.item.prev();if(!d.length){f.position="First"}else{c=b.getRowFromElement(d).model;f.after=c.url()}}f.spaceKey=AJS.Meta.get("space-key");a.ajax({url:h.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(f),complete:function(){h.hideLoading()},success:function(i){AJS.triggerEvtForInst(b._event.REORDER_SUCCESS,b,[i])},error:function(j){var i=a.parseJSON(j.responseText||j.data);AJS.triggerEvtForInst(b._event.SERVER_ERROR,b,[i,j])}});h.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(c){return !a(c.target).is("."+b.classNames.DRAG_HANDLE)})}});AJS.Confluence.ConfigurableNav.ReadView=AJS.RestfulTable.CustomReadView.extend({render:function(b){return _.template('<span class="acs-nav-item-link" title="<%=title%>"><span class="icon"></span><span class="acs-nav-item-label"><%=title%></span></span>',{title:AJS.escapeHtml(b.title)})}});AJS.Confluence.ConfigurableNav.Row=AJS.RestfulTable.Row.extend({render:function(){var b=this,d=this.model.toJSON(),e=a("<td class='aui-restfultable-operations' />").append(this.renderOperations(d.canHide,d.hidden)),c=a('<td class="'+this.classNames.ORDER+'"/>').append(this.renderDragHandle());b._event=b._event||b._events;b.$el.attr("data-id",this.model.id);b.$el.append(c);a.each(b.columns,function(f,g){var h,k=a("<td />"),j=d[g.id];if(j){b.$el.attr("data-"+g.id,j)}h=new AJS.Confluence.ConfigurableNav.ReadView().render(d);k.append(h);b.$el.append(k)});b.$el.append(e);d.canHide&&d.hidden&&b.$el.addClass("hidden-link");b.$el.addClass(this.classNames.ROW+" "+b.classNames.READ_ONLY+" acs-nav-item "+d.styleClass);b.trigger(this._event.RENDER,this.$el,d);b.$el.trigger(this._event.CONTENT_REFRESHED,[b.$el]);return b},renderOperations:function(f,e){var c=this,b=a('<a href="#" class="aui-icon aui-icon-small"/>');if(f){function d(g){if(g.hasClass("hide-link")){g.attr("data-tooltip","\u9690\u85cf\u94fe\u63a5")}else{g.attr("data-tooltip","\u663e\u793a\u94fe\u63a5")}}b.addClass(e?"show-link":"hide-link").click(function(g){g.preventDefault();a.ajax({url:c.model.url()+(e?"/show":"/hide"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key")})}).done(function(){b.closest(".acs-nav-item").toggleClass("hidden-link");b.toggleClass("hide-link").toggleClass("show-link");d(b)})});d(b)}else{b.addClass("delete-link tipsy-enabled").click(function(g){g.preventDefault();if(a(".acs-nav").data("quick-links-state")!="hide"){AJS.trigger("sidebar.disable-tooltip",this);c.destroy()}}).attr("data-tooltip","\u5220\u9664\u94fe\u63a5")}return b},destroy:function(){this.model.destroy({data:{spaceKey:AJS.Meta.get("space-key")}})}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-pages.js' */
(function(b){var a=AJS.Meta.get("context-path");Confluence.Sidebar.Pages={installHandlers:function(d){d.find(".more-children-link").click(function(f){f.preventDefault();d.find("ul.more-children").show();b(this).hide()})},quickLinksContent:function(){return new b.Deferred().resolve(b(".acs-side-bar .quick-links-wrapper").html())},childPageCollapsedContent:function(){var e=b(".acs-side-bar .ia-secondary-header");var d=b(".acs-side-bar .ia-secondary-parent-content");var g=b(".acs-side-bar .ia-secondary-current-content");var f=b(".acs-side-bar .ia-secondary-content");return new b.Deferred().resolve(b("<div>").append(b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(e.clone()).append(d.clone()).append(g.clone()).append(f.clone())).html())},pageTreeCollapsedContent:function(){var d=b(".page-tree-flyout-content");if(d.length==0){return c().pipe(function(e){var f=b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav:e,hasCreatePermission:b(".acs-nav").data("has-create-permission")}));b("body").append(b("<div>").addClass("page-tree-flyout-content hidden").append(f.clone()));return f})}else{return new b.Deferred().resolve(d.html())}}};function c(){return b.ajax({url:a+"/rest/ia/1.0/space/childPagesContextualNav",data:{pageId:AJS.Meta.get("page-id")}})}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-links.js' */
AJS.$(function(){Confluence.Sidebar.Configure={mode:false};var d=AJS.$,n=AJS.Meta.get("context-path"),l=AJS.Meta.get("space-key"),j=d(".acs-side-bar"),r=j.find(".ia-secondary-container"),e,p,k,m,h=d(".acs-nav"),t=false;d.ajaxSetup({cache:false});d("body").on("click","#acs-configure-link, a.configure-sidebar",function(w){w.preventDefault();v()});d("#space-favourite-remove").on("click",function(){c("remove");d("#space-favourite-add").show();d("#space-favourite-remove").hide()});d("#space-favourite-add").on("click",function(){c("add");d("#space-favourite-remove").show();d("#space-favourite-add").hide()});function c(x){var y;var w;if(x==="add"){y="PUT";w="confluence.space-sidebar.favourite.click"}else{y="DELETE";w="confluence.space-sidebar.favourite-remove.click"}d.ajax({url:n+"/rest/experimental/relation/user/current/favourite/toSpace/"+l,type:y,dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:l})}).done(function(){if(x==="add"){d("#space-favourite-add").prop("data-favourited","true")}else{d("#space-favourite-add").prop("data-favourited","false")}});AJS.trigger("analyticsEvent",{name:w})}function v(){AJS.trigger("sidebar-before-enter-configure-mode");var w=d(".custom-sidebar-content");var z=w.length;var C;var B;if(z){B=n+"/spaces/custompagecontent.action?key="+l;C=w.children().html()}m=h.data("nav-type");Confluence.Sidebar.Configure.mode=true;k=d(".acs-nav-sections .acs-nav-item.current-item").data("collector-key");e=Confluence.Sidebar.throbberDiv();e.height(d(".acs-nav-sections").height());r.hide();d(".acs-nav-sections").replaceWith(e);var y=Confluence.Templates.Sidebar.configure({pageTree:m==="page-tree",quickLinksState:h.data("quick-links-state"),pageTreeState:h.data("page-tree-state"),hasSidebarCustomisation:z,customContentAdminLink:B,sidebarCustomisation:C});p=d(y).hide();e.after(p);i();g();s();var A={};var x=function(){e.replaceWith(p);p.show()};d("#acs-nav-list-main").one(AJS.RestfulTable.Events.INITIALIZED,function(){A.main=true;A.quick&&x()});d("#acs-nav-list-quick").one(AJS.RestfulTable.Events.INITIALIZED,function(){A.quick=true;A.main&&x()});d(".acs-nav-type").change(function(D){u("nav-type",d(this).val(),function(E){r.data("tree-type",E);h.data("nav-type",E)})});d(".acs-done-link").click(function(D){D.preventDefault();d(".acs-done-link").attr("aria-disabled",true).prop("disabled",true);o()});d(".quick-links-header a").click(function(E){E.preventDefault();var D=h.data("quick-links-state")=="hide"?"show":"hide";u("quick-links-state",D,a)});d(".page-tree-header a").click(function(F){F.preventDefault();var E=h.data("page-tree-state")=="hide"?"show":"hide";var D=d(".acs-nav-type");if(E==="show"){D.attr("disabled",false)}else{D.attr("disabled",true)}u("page-tree-state",E,b)});AJS.$(".acs-side-bar-space-info").on("click.configurelogo",q);AJS.trigger("sidebar.enter-configure-mode")}function q(y){var x=AJS.$(".acs-side-bar-space-info > .flyout-handle");x.addClass("loading").spin();var w=WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:avatar-picker",function(){AJS.trigger("deferred.spaceia.open.configure.space")});w.always(function(){x.removeClass("loading").spinStop()});y.preventDefault()}function u(w,x,y){d.ajax({url:n+"/rest/ia/1.0/space/option",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:l,option:w,value:x}),success:function(z){y(x)}})}function o(){if(m!==h.data("nav-type")||t===true){location.reload();t=false;return}var w=d(".custom-sidebar-content");var y=w.length;var A;if(y){A=w.children().html()}e=Confluence.Sidebar.throbberDiv();e.height(p.height());p.replaceWith(e);f();r.show().css("display","");var x=function(){var B=d(Confluence.Templates.Sidebar.renderLinks({mainLinks:z.main,quickLinks:z.quick.reverse(),advancedLinks:z.advanced,hasConfigurePermission:true,collectorToHighlight:k,quickLinksState:h.data("quick-links-state"),hasSidebarCustomisation:y,sidebarCustomisation:A}));e.replaceWith(B);Confluence.Sidebar.Configure.mode=false;AJS.trigger("sidebar.exit-configure-mode")};var z={};d.get(n+"/rest/ia/1.0/link/main",{spaceKey:l,includeHidden:false}).done(function(B){z.main=B;z.quick&&z.advanced&&x()});d.get(n+"/rest/ia/1.0/link/quick",{spaceKey:l}).done(function(B){z.quick=B;z.main&&z.advanced&&x()});d.get(n+"/rest/ia/1.0/link/advanced",{spaceKey:l}).done(function(B){z.advanced=B;z.main&&z.quick&&x()});Confluence.Sidebar.Configure.Logo&&Confluence.Sidebar.Configure.Logo.unbind()}function i(){WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog",function(){var w=new d.Deferred();d(".acs-add-link").click(function(x){w.done(function(){x.preventDefault();if(h.data("quick-links-state")!=="hide"){Confluence.Sidebar.LinkAdapter.hijackLinkBrowser();Confluence.Editor.LinkBrowser.open();d("#recentlyviewed-panel-id").click()}})}).addClass("acs-add-link-ready");if(AJS.Meta.get("space-key")){AJS.Confluence.EditorLoader.load(function(){w.resolve()},function(){AJS.log("Attempted to load editor for space ia side bar. Loading the editor failed.");w.reject()})}else{w.resolve()}})}function g(){var w=d("#acs-nav-list-quick");var y=d(".acs-nav-sections .tip").hide();var x=function(){if(Confluence.Sidebar.Configure.QuickLinks.isEmpty()){w.hide();y.show()}else{y.hide();w.show()}};AJS.bindEvt(AJS.RestfulTable.Events.INITIALIZED,x);AJS.bindEvt(AJS.RestfulTable.Events.ROW_ADDED,x);AJS.bindEvt(AJS.RestfulTable.Events.ROW_REMOVED,x)}function s(){Confluence.Sidebar.Configure.MainLinks=new AJS.Confluence.ConfigurableNav({$el:d("#acs-nav-list-main"),resources:{all:n+"/rest/ia/1.0/link/main?spaceKey="+l+"&includeHidden=true",self:n+"/rest/ia/1.0/link"}});Confluence.Sidebar.Configure.QuickLinks=new AJS.Confluence.ConfigurableNav({$el:d("#acs-nav-list-quick"),resources:{all:n+"/rest/ia/1.0/link/quick?spaceKey="+l,self:n+"/rest/ia/1.0/link"},reverseOrder:true})}function f(){Confluence.Sidebar.Configure.MainLinks.remove();Confluence.Sidebar.Configure.MainLinks.unbind();Confluence.Sidebar.Configure.QuickLinks.remove();Confluence.Sidebar.Configure.QuickLinks.unbind();d(AJS).unbind(AJS.RestfulTable.Events.INITIALIZED);d(AJS).unbind(AJS.RestfulTable.Events.ROW_ADDED);d(AJS).unbind(AJS.RestfulTable.Events.ROW_REMOVED)}function a(w){h.data("quick-links-state",w);if(w==="hide"){d(".acs-nav-list-quick-section").addClass("hidden-section")}else{d(".acs-nav-list-quick-section").removeClass("hidden-section")}}function b(w){h.data("page-tree-state",w);t=true;if(w==="hide"){d(".acs-nav-list-page-tree-section").addClass("hidden-section")}else{d(".acs-nav-list-page-tree-section").removeClass("hidden-section")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools.js' */
define("confluence-space-ia/sidebar-space-tools",["ajs","jquery","confluence/legacy"],function(b,c,d){function a(){var e=[];var h=[];var k=b.version.indexOf("5.7")===0;var i;var l;var f,j;if(!k){f=c("#space-tools-menu-trigger");j=c("#space-tools-menu")}var g;if(k){c("#space-tools-web-items").children("div").each(function(){e.push({label:c(this).data("label"),href:c(this).data("href")})})}else{b.warn("Remove legacy sidebar code when upgrade to AUI 5.8+");j.on({"aui-dropdown2-show":function(){b.trigger("sidebar.disable-tooltip",f)},"aui-dropdown2-hide":function(){b.trigger("sidebar.enable-all-tooltips")}});c("#space-tools-web-items").children("div").each(function(){e.push({text:c(this).data("label"),href:c(this).data("href")})})}if(k){c("#space-tools-menu-additional-items").children("div").each(function(){h.push({className:c(this).data("class"),label:c(this).data("label"),href:c(this).data("href")})})}else{c("#space-tools-menu-additional-items").children("div").each(function(){h.push({extraClasses:c(this).data("class"),text:c(this).data("label"),href:c(this).data("href")})})}if(k){l={hideDelay:null,width:170,displayShadow:false,calculatePositions:function(m,n){var o=n.target.offset();return{popupCss:{top:o.top-m.height(),left:o.left},arrowCss:{display:"none"}}},hideCallback:function(){b.trigger("sidebar.enable-all-tooltips")}};i=b.InlineDialog(c("#space-tools-menu-trigger"),"space-tools",function(n,m,o){n.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h,isAuiFiveSeven:k}));c(m).one("click",function(p){if(c("#inline-dialog-space-tools").is(":visible")){setTimeout(function(){i.hide()},0)}});b.trigger("sidebar.disable-tooltip",m);b.trigger("sidebar.spacetools-loaded");o();return false},l);i.addClass("aui-dropdown2 aui-style-default space-tools-dropdown");b.bind("sidebar.hide-overlays",i.hide)}else{j.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h}));if(b&&b.Confluence&&b.Confluence.Analytics&&b.Confluence.Analytics.setAnalyticsSource){b.Confluence.Analytics.setAnalyticsSource(j.find("a:not(.configure-sidebar)"),"spacetools")}b.bind("sidebar.hide-overlays",function(){if(j.filter('[aria-hidden="false"]').length){c("#space-tools-menu-trigger").trigger("aui-button-invoke")}})}g=c(".expand-collapse-trigger");g.click(function(m){m.preventDefault();d.Sidebar.toggle()});g.attr("data-tooltip",c(".ia-fixed-sidebar").hasClass("collapsed")?d.Sidebar.expandTooltip:d.Sidebar.collapseTooltip);b.bind("sidebar.collapsed",function(){g.attr("data-tooltip",d.Sidebar.expandTooltip)});b.bind("sidebar.expanded",function(){g.attr("data-tooltip",d.Sidebar.collapseTooltip)})}return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools-require.js' */
require(["confluence-space-ia/sidebar-space-tools"],function(a){AJS.toInit(function(){a()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-flyouts.js' */
(function(d){var b,c,a;Confluence.Sidebar.createFlyouts=function(g){b=f(d(".collapsed .quick-links-section"),Confluence.Sidebar.Pages.quickLinksContent,"sidebar-quick-links-flyout",{flyout:"quick-links"});var h=g.find(".ia-secondary-container");if(h.length&&h.attr("data-tree-type")=="pages"){c=f(d(".collapsed .ia-secondary-header-title.wiki"),Confluence.Sidebar.Pages.childPageCollapsedContent,"sidebar-children-flyout",{flyout:"children"})}if(h.length&&h.attr("data-tree-type")=="page-tree"){a=f(d(".collapsed .ia-secondary-header-title.page-tree"),Confluence.Sidebar.Pages.pageTreeCollapsedContent,"sidebar-page-tree-flyout",{flyout:"pagetree"})}};function f(g,j,i,l){var k=function(n,m,o){d(n).addClass("acs-side-bar-flyout ia-scrollable-section");d(n).empty().append(Confluence.Sidebar.throbberDiv());j().done(function(p){d(n).html(p)});AJS.trigger("sidebar.flyout-triggered",l);o();d(m).one("click",function(p){if(d("#inline-dialog-"+i).is(":visible")){setTimeout(function(){h.hide()},0)}});AJS.trigger("sidebar.disable-tooltip",m)};var h=AJS.InlineDialog(g,i,k,{gravity:"w",calculatePositions:e,useLiveEvents:true,hideDelay:null,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")}});AJS.bind("sidebar.hide-overlays",h.hide);return h}function e(h,k,p,g){var q=k.target.offset();var o=k.target.width();var l=k.target.height();var n={top:q.top+l/2-15,left:q.left+o+5,right:"auto"};var i=d(window);var m=20;n.maxHeight=i.height()+i.scrollTop()-n.top-m;if(d.browser.msie&&parseInt(d.browser.version,10)<=8){n.maxHeight-=40}var j={top:9};return{popupCss:n,arrowCss:j,gravity:"w"}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/external/jquery.mousewheel.min.js' */
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-logo.js' */
AJS.toInit(function(f){Confluence.Sidebar.Configure.Logo={};var b=f(".acs-side-bar-space-info div.name a");var h;var a;var e=function(i){f(".space-logo .avatar-img").attr("src",AJS.Meta.get("context-path")+i)};var d=function(i){b.attr("title",i).text(i)};var g=function(i){if(!h){h=new i({onCrop:function(k,j){f.ajax({type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key"),spaceName:j,logoDataURI:k}),url:AJS.Meta.get("context-path")+"/rest/ia/1.0/space/setLogo",success:function(l){e(l.logoDownloadPath);d(l.name);h.hide()},error:function(l){h.setMessage("\u66f4\u65b0\u7a7a\u95f4\u7ec6\u8282\u65f6\u51fa\u73b0\u9519\u8bef");h._removeSaveImageLoadingIcon()}})}})}h.show(f(".acs-side-bar-space-info div.name a").text());return false};var c=function(){var i=function(l,k,m){f(l).addClass("acs-side-bar-flyout");f(l).empty();l.html(AJS.template.load("logo-config-content"));l.unbind("mouseover mouseout");AJS.trigger("sidebar.disable-tooltip",k);m()};if(!a){a=AJS.InlineDialog(f(".acs-side-bar-space-info"),"space-logo-config",i,{gravity:"w",calculatePositions:j,useLiveEvents:true,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")},hideDelay:null,noBind:true,width:635})}function j(l,n,r,k){var s=n.target.offset();var q=n.target.width();var o=n.target.height();var p={top:s.top+o/2-15,left:s.left+q+5,right:"auto"};var m={top:9};return{popupCss:p,arrowCss:m,gravity:"w"}}a.show()};AJS.bind("sidebar-before-enter-configure-mode",function(){AJS.bind("deferred.spaceia.open.configure.space",function(i){if(AJS.Meta.get("space-key")=="~"+AJS.Meta.get("remote-user")){c()}else{require(["confluence-space-ia/avatar-picker/avatar-picker-dialog",],g)}i.preventDefault();return false})});Confluence.Sidebar.Configure.Logo.unbind=function(){f("#inline-dialog-space-logo-config .cancel").click();f(".acs-side-bar-space-info").off("click.configurelogo");AJS.unbind("deferred.spaceia.open.configure.space")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:utils', location = '/js/utils/dom.js' */
define("confluence/fh/utils/dom",["jquery","ajs","exports"],function(j,p,i){var q,d,a,n;function k(r){if(k.done&&!r){return}var s="#main .aui-page-panel-outer-content";d=j(s).length!==0?j(s):j("#main");a=j("#header");n=j("#main-header");k.done=true}function f(){var r=p.Meta.get("content-type");if(r==="page"||r==="blogpost"){j(tinymce.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit")}}function o(){k();n.css({width:d.outerWidth()-(parseInt(d.css("padding-left"))+parseInt(d.css("padding-right")))})}function c(){k();var r=parseInt(n.css("top"))+n.outerHeight();if(isNaN(r)||r===c.lastValue){return}c.lastValue=r;p.trigger("sticky-table-headers.change.options",{fixedOffset:r,cacheHeaderHeight:true})}function e(t,r,s){if(s){e[s]=e[s]||{};if(r===e[s].lastValue){return}e[s].lastValue=r}t.css({transform:"translateY("+r+"px)","-webkit-transform":"translateY("+r+"px)","-ms-transform":"translateY("+r+"px)"})}function m(u,r,s){var t={};s.forEach(function(v){t[v]=u.css(v)});r.css(t)}var l={mt:"margin-top",mr:"margin-right",ml:"margin-left",mb:"margin-bottom",pt:"padding-top",pr:"padding-right",pl:"padding-left",pb:"padding-bottom",ff:"font-family",fsi:"font-size",fst:"font-style",fw:"font-weight",td:"text-decoration",ls:"letter-spacing",ta:"text-align",c:"color"};l.margin=[l.mt,l.mr,l.ml,l.mb];l.padding=[l.pt,l.pr,l.pl,l.pb];l.font=[l.ff,l.fsi,l.fst,l.fw];function b(){k();if(q){return q}q=j('<div id="main-header-placeholder"></div>');var t=j("#title-text"),s=t.find("a"),r=t.clone().removeAttr("id"),u=r.find("a");m(n,q,l.margin.concat(l.padding));q.css({height:n.outerHeight()});m(t,r,l.font.concat(l.td,l.ls,l.ta,l.pr,l.pb,l.pl,l.mr,l.mb,l.ml));r.css({paddingTop:parseInt(t.css("padding-top"))+Math.round(t.offset().top-n.offset().top)});m(s,u,l.font.concat(l.margin,l.padding,l.font,l.c,l.td,l.ls,l.ta));q.append(r);return q}function g(){q&&q.remove()}function h(t){t=typeof(t)==="string"?t:j(this).attr("href");if(!t){return}k();var s=a.outerHeight();var r=j(t.replace(/(!|\"|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|\:|;|<|=|>|\?|@|\[|\\|\]|\^|`|\{|\||\}|~)/g,"\\$1"));if(r.length){window.scrollTo(0,r.offset().top-s);if(history&&"pushState" in history){history.pushState({},document.title,window.location.pathname+window.location.search+t);return false}}}i.forceInitialize=function(){k(true)};i.addClassToPage=f;i.adjustMainHeaderSize=o;i.updateTableStickyHeaderOption=c;i.translateVertical=e;i.createMainHeaderPlaceHolder=b;i.removeMainHeaderPlaceHolder=g;i.scrollIfAnchor=h});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:handlers', location = '/js/handlers/page-view-handler.js' */
define("confluence/fh/handlers/page-view-handler",["confluence/fh/utils/dom","jquery","ajs","exports"],function(z,i,m,G){var E,s,D,n,v,d,C,h,e,w,F,r=false,l=false,f=false,j=0,u=0,g=0,y=50,b=100,q="by-hover",t="by-scroll",B="by-other",a=B,o=false;function c(H){if(c.done&&!H){return}E=i("#header");s=i("#main .aui-page-panel-outer-content");s.length===0&&(s=i("#main"));D=i("#main-header");n=i("#action-menu-link");v=z.createMainHeaderPlaceHolder();d=i(".ia-splitter-left .ia-fixed-sidebar");C=D.prop("style");h=s.prop("style");e=Math.round(E.offset().top);w=E.height();F=Math.round(D.offset().top)-w-(parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")));c.done=true}var x=function(){c();var I=i(window).scrollTop();var K=I>e;if(K&&parseInt(d.css("top"))<w){d.css({top:w+"px"})}if(!r&&K){r=true;E.addClass("fixed-header");s.css({marginTop:w+"px"})}else{if(!K){E.removeClass("fixed-header");h.removeProperty("margin-top");r=false}}var O=I>F;if(!l&&O){l=true;D.find("#title-text").hide();D.css({position:"fixed",width:s.outerWidth()-(parseInt(s.css("padding-left"))+parseInt(s.css("padding-right"))),right:0,top:w+"px",marginTop:0,paddingTop:parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")),paddingBottom:parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")),paddingLeft:s.css("padding-left"),paddingRight:s.css("padding-right"),zIndex:b});D.before(z.createMainHeaderPlaceHolder())}else{if(!O){["position","width","right","top","margin-top","padding-top","padding-bottom","padding-left","padding-right","z-index"].forEach(function(P){C.removeProperty(P)});D.removeClass("overlay-header");D.find("#title-text").show();l=false;f=false;z.removeMainHeaderPlaceHolder()}}var M,L,J=D.outerHeight(),H=j-I,N=parseInt(D.css("top"))+H;if(I<=0){g=0;u=0;M=w}else{if(l&&H>0){if(N>w){g=w;u=0;M=w;L=b}else{g+=Math.abs(H);if(g>=y||I<=J){u-=Math.abs(H);M=N;L=b}}if(I>J+y&&!f){D.addClass("overlay-header");f=true}a=t}else{if(l&&H<0){if(N<w-J){g=0;u=J;M=w-J;L=0}else{u+=Math.abs(H);M=N}}}}if(L!==undefined&&M!==undefined){D.css({top:M+"px",zIndex:L})}else{if(M!==undefined){D.css({top:M+"px"})}}if(o){z.translateVertical(n,u,n.attr("id"))}z.updateTableStickyHeaderOption();j=I};function A(){if(!l||u===0){return}u=0;D.addClass("overlay-header");D.css({top:w+"px",zIndex:b});if(o){z.translateVertical(n,u,n.attr("id"))}z.updateTableStickyHeaderOption()}function p(){c();A();a=q}function k(){c();A();m.bind("quick-edit.viewport.saved",function(){E.removeAttr("style");z.removeMainHeaderPlaceHolder()});i(window).off("scroll",x).off("resize.confluence-fixed-headers-responsive");m.trigger("analyticsEvent",{name:"view.edit.transition.edit.button.clicked",data:{method:a}})}G.forceInitialize=function(){c(true)};G.onScrollHandler=x;G.onHoverActionMenuLinkHandler=p;G.onClickEditPageLinkHandler=k;G.isKeepDotDotDotButton=o;G.__getShowMainHeaderBy=function(){return a};G.__getFixedHeader=function(){return r};G.__getFixedMainHeader=function(){return l};G.__setFixedHeader=function(H){r=H};G.__setFixedMainHeader=function(H){l=H};G.__setMainHeaderOverlay=function(H){f=H};G.__setScrollPosition=function(H){j=H};G.__setMovingDistance=function(H){u=H}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:confluence-fixed-headers-view-content-resources', location = '/js/confluence-fixed-headers.js' */
require(["confluence/fh/utils/dom","confluence/fh/handlers/page-view-handler","ajs","jquery"],function(d,b,a,c){a.toInit(function(){if(!a.Meta.get("content-type")){return}if(c("#main-content").find("style").length>0){return}if(c("body").hasClass("theme-documentation")){return}var e=c("#header"),l=c("#main-header"),i=c("#main"),g=c("#content"),k=c("#editPageLink"),m=c("#action-menu-link");var n=["inline-dialog-notifications-miniview","inline-dialog-confluence-watch","inline-dialog-shareContentPopup","inline-dialog-ap-inline-dialog-content-confstats-connect-dev__confstats-live-watcher","inline-dialog-jira-metadata-dialog"];var j=function(){var p=c('.aui-dropdown2[aria-hidden="false"]');p.length&&c('.aui-dropdown2-trigger[aria-owns="'+p.attr("id")+'"]').trigger("aui-button-invoke");var o=c(".aui-inline-dialog:visible");if(o.length){o=o.filter(function(){var s=c(this);var r=s.attr("id");return s.hasClass("non-persistence-dialog")||n.indexOf(r)!==-1});o.css({display:"none"});var q=".aui-button.active, .aui-nav-imagelink.active";e.find(q).removeClass("active");l.find(q).removeClass("active");document.activeElement.blur()}};var h=new MutationObserver(function(o){d.adjustMainHeaderSize()});h.observe(i[0],{attributes:true,attributeFilter:["style"]});var f=new MutationObserver(function(o){g.css("padding-right")==="0px"&&g.css({paddingRight:"28px"})});f.observe(g[0],{attributes:true,attributeFilter:["style"]});c(window).on("resize.confluence-fixed-headers-responsive",a.debounce(d.adjustMainHeaderSize,100)).on("scroll",b.onScrollHandler).scroll(a.debounceImmediate(j,250));if(b.isKeepDotDotDotButton){i.addClass("floating-action-menu");m.on("hover",b.onHoverActionMenuLinkHandler)}k.click(function(){f&&f.disconnect();b.onClickEditPageLinkHandler()});setTimeout(function(){d.scrollIfAnchor(window.location.hash)});c("body").on("click",'a[href^="#"]',d.scrollIfAnchor)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
define("confluence-like/like-namespace",["confluence/legacy"],function(a){return a.Likes||{}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-namespace","Confluence.Likes");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
define("confluence-like/like",["ajs","confluence/legacy","jquery","confluence/meta"],function(e,h,c,g){function n(b){return e.contextPath()+"/rest/likes/1.0/content/"+b+"/likes"}function q(){return 0<(g.get("remote-user")||"").length&&!1!==g.get("remote-user-has-licensed-access")}function o(b,a,d){var c=g.get("remote-user")||"",a=h.Likes.LikeSummaryFactory.getLikeSummary(b.likes,a,c);if(!a.key&&i()&&("page"==b.content_type||"blogpost"==b.content_type))a.text="\u6210\u4e3a\u7b2c\u4e00\u4e2a\u8d5e\u540c\u8005";c=[];
c.push(a.text);c=c.concat(a.args);(a=e.format.apply(e,c))&&0<a.length?d.html(a):d.empty();a&&(d.find(".likes").click(m.showLikeUsers),h.Binder.userHover(),"comment"==b.content_type&&d.prepend("<span class='comment-action-separator'>\u2022</span><span class='aui-icon aui-icon-small aui-iconfont-like-small'></span>"))}function l(b,a,d){var r=g.get("remote-user")||"";if(void 0===b)throw Error("type is required");if(void 0===a)throw Error("contentId is required");if(void 0===d)throw Error("contentType is required");
return function(){if("object"!==typeof this||!this.nodeType||1!==this.nodeType||"A"!==this.nodeName)throw Error("this handler should be bound to a DOM anchor element");var f=c(this),h=arguments.callee,i=f.next(".like-summary");c.ajax({type:b===j?"POST":"DELETE",url:n(a),contentType:"application/json",data:{"atlassian-token":g.get("atlassian-token")},dataType:"json",timeout:5E3}).fail(function(){var a=i.siblings(".like-error"),d;d=b===j?"\u8d5e\u5931\u8d25":"\u8e29\u64cd\u4f5c\u5931\u8d25";
0===a.length?i.after('<span class="like-error" title="'+d+'"></span>'):a.attr("title",d)}).success(function(){i.attr("data-liked",b===j);i.parent().find(".like-error").remove()});f.unbind("click",h).bind("click",b===j?l(p,a,d):l(j,a,d)).find(".like-button-text").html(b===j?"\u8e29":"\u8d5e");k[a]=k[a]||{content_type:d,likes:[]};b===j?k[a].likes.push({user:{name:r}}):k[a].likes=c.grep(k[a].likes,function(a){return a.user.name!=r});b===j&&e.trigger("analytics",
{name:"confluence."+d+".like.create",data:{pageID:g.get("page-id")}});o(k[a],a,i);return!1}}var j=0,p=1,f,k={},i=q,s=c.Deferred(),m={getLikesCache:function(){return s.promise()},showLikeUsers:function(b){b&&b.preventDefault();var b=c(this),a=b.data("content-id");b.blur();f&&(f.remove(),f=void 0);f=new e.Dialog(400,365,"likes-dialog");f.addHeader("\u8d5e\u4e86\u5b83\u7684\u4eba");f.addPanel("Panel 1","<div class='spinner-container'></div>");f.addCancel("\u53d6\u6d88",function(a){a.remove();
f=void 0});f.getCurrentPanel().setPadding(0);f.show();c.ajax({type:"GET",url:n(a),data:{expand:"user",max:50},dataType:"json"}).done(function(a){if(f.popup.element.is(":visible")){a.showFollowActions=q();f.getCurrentPanel().html(h.Templates.Likes.likesDialog(a));c("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var a=c(this);c.ajax({type:"PUT",url:e.contextPath()+"/rest/likes/1.0/user/"+g.get("remote-user")+"/following?username="+a.data("username"),contentType:"application/json",
dataType:"json"}).done(function(){a.replaceWith("\u5173\u6ce8\u4e2d")})})}})},appendAction:function(b){var b=b.find(".comment-actions-primary"),a=b.find("li[class~='comment-date']"),d=c(h.Templates.Likes.commentLikeSection({showLikeButton:i()}));0===a.length?b.find("li:last-child").after(d):a.before(d)},reload:function(b){c.each(b,function(a,b){var e=c("#comment-"+a).find(".like-summary");o(b,a,e);k[a]=b});!i()&&c("#page-comments").find(".like-summary:empty").each(function(){c(this).closest(".comment-action-like").hide()});
c("#page-comments .comment").each(function(){m.updateComment(c(this),b)});s.resolve(k)},updateComment:function(b,a){var d=b.attr("id");if(!d)return!0;var f=(/^comment-(\d+)$/.exec(d)||[])[1];if(!f)throw Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+d);d=a[f]&&g.get("remote-user")&&0<c.grep(a[f].likes,function(a){return a.user.name==g.get("remote-user")}).length;b.find(".like-button").click(d?l(p,f,"comment"):l(j,f,"comment")).find(".like-button-text").html(d?"\u8e29":
"\u8d5e")},init:function(){var b=c(h.Templates.Likes.likeSection({showLikeButton:i()}));g.get("page-id")&&c.ajax({type:"GET",url:n(g.get("page-id")),data:{commentLikes:!0},dataType:"json"}).done(function(a){if(g.get("remote-user")){var d=0<c.grep(a.likes,function(a){return a.user.name==g.get("remote-user")}).length,f=a.content_type;b.find(".like-button").click(d?l(p,g.get("page-id"),f):l(j,g.get("page-id"),f)).find(".like-button-text").html(d?"\u8e29":"\u8d5e")}d=
b.find(".like-summary");o(a,a.content_id,d);""==d.html()&&!i()&&b.hide();c("<div id='likes-and-labels-container' />").insertBefore("#labels-section").append(b).append(c("#labels-section"));k[a.content_id]=a;m.reload(a.commentLikes)});m.appendAction(c("#page-comments"))}};return m});
require("confluence/module-exporter").safeRequire("confluence-like/like",function(e){var h=require("confluence/legacy"),c=require("ajs");h.Likes.getLikesCache=e.getLikesCache;c.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget||(c.toInit(e.init),h.Likes.showLikeUsers=e.showLikeUsers,h.Likes.appendAction=e.appendAction,h.Likes.reload=e.reload,h.Likes.updateComment=e.updateComment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
define("confluence-like/like-summary-factory",["ajs","confluence/templates","jquery"],function(a,g,h){var i={"likes.summary.you":"\u4f60\u8d5e\u4e86\u5b83","likes.summary.1.promoted":"{0}\u8d5e\u4e86\u5b83","likes.summary.2.promoted":"{0}\u548c{1}\u8d5e\u4e86\u5b83","likes.summary.3.promoted":"{0}\uff0c{1}\u548c{2}\u8d5e\u4e86\u5b83","likes.summary.1.non-promoted":"{0}\u8d5e\u4e86\u5b83","likes.summary.x.non-promoted":"\u003ca href=\u0022\u0022 {1}\u003e{0}\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83",
"likes.summary.you.1.promoted":"\u4f60\u548c{0}\u8d5e\u4e86\u5b83","likes.summary.you.2.promoted":"\u4f60\u3001{0}\u548c{1}\u8d5e\u4e86\u5b83","likes.summary.you.3.promoted":"\u4f60\u3001{0}\u3001{1}\u548c{2}\u8d5e\u4e86\u5b83","likes.summary.you.1.non-promoted":"\u4f60\u548c{0}\u8d5e\u4e86\u5b83","likes.summary.you.x.non-promoted":"\u4f60\u548c \u003ca href=\u0022\u0022 {1}\u003e{0}\u4e2a\u5176\u4ed6\u4eba\u003c/a\u003e \u8d5e\u4e86\u5b83","likes.summary.1.promoted.1.non-promoted":"{0}\u548c{1}\u8d5e\u4e86\u5b83",
"likes.summary.1.promoted.x.non-promoted":"{0}\u548c\u003ca href=\u0022\u0022 {2}\u003e\u5176\u4ed6{1}\u4e2a\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83","likes.summary.2.promoted.1.non-promoted":"{0}\uff0c{1} \u548c {2} \u8d5e\u4e86\u5b83","likes.summary.2.promoted.x.non-promoted":"{0}\uff0c{1} \u548c\u003ca href=\u0022\u0022 {3}\u003e\u5176\u4ed6{2}\u4e2a\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83","likes.summary.3.promoted.1.non-promoted":"{0}\uff0c{1}\uff0c{2}\u548c{3}\u8d5e\u4e86\u5b83","likes.summary.3.promoted.x.non-promoted":"{0}\uff0c{1}\uff0c{2}\u548c\u003ca href=\u0022\u0022 {4}\u003e\u5176\u4ed6{3}\u4e2a\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83","likes.summary.you.1.promoted.1.non-promoted":"\u4f60\u3001{0}\u548c{1}\u8d5e\u4e86\u5b83",
"likes.summary.you.1.promoted.x.non-promoted":"\u4f60\u3001{0}\u548c\u003ca href=\u0022\u0022 {2}\u003e\u5176\u4ed6{1}\u4e2a\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83","likes.summary.you.2.promoted.1.non-promoted":"\u4f60\u3001{0}\u3001{1}\u548c{2}\u8d5e\u4e86\u5b83","likes.summary.you.2.promoted.x.non-promoted":"\u4f60\u3001{0}\u3001{1}\u548c\u003ca href=\u0022\u0022 {3}\u003e\u5176\u4ed6{2}\u4e2a\u4eba\u003c/a\u003e\u8d5e\u4e86\u5b83","likes.summary.you.3.promoted.1.non-promoted":"\u4f60, {0}, {1}, {2} \u548c {3} \u8d5e\u4e86\u5b83","likes.summary.you.3.promoted.x.non-promoted":"\u4f60, {0}, {1}, {2} \u548c \u003ca href=\u0022\u0022 {4}\u003e{3}\u4e2a\u5176\u4ed6\u4eba\u003c/a\u003e \u8d5e\u4e86\u5b83"};
return{getLikeSummary:function(a,c,k){if(!a||0===a.length)return{key:"",text:""};if(!c)throw Error("contentId is required.");var j,e=[],f=[];h.each(a,function(a,b){b.user&&b.user.name==k?j=b:3>e.length&&b.user.followedByRemoteUser?e.push(b):f.push(b)});var a=["likes.summary"],d=[];null!=j&&a.push(".you");0<e.length&&(a.push("."),a.push(e.length),a.push(".promoted"),h.each(e,function(a,b){d.push(g.Likes.userLink(b))}));1===f.length?(a.push(".1.non-promoted"),d.push(g.Likes.userLink(f[0]))):1<f.length&&
(a.push(".x.non-promoted"),d.push(f.length),d.push('class="likes" data-content-id="'+c+'"'));c=a.join("");return{key:c,args:0===d.length?void 0:d,text:c in i?i[c]:""}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-summary-factory","Confluence.Likes.LikeSummaryFactory");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Likes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeButton = function(opt_data, opt_ignored) {
  return '<a href="" class="like-button">' + ((opt_data.useIcon) ? '<span class="aui-icon aui-icon-small aui-iconfont-like"></span>' : '') + '<span class="like-button-text">' + soy.$$escapeHtml("\u8d5e") + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeButton.soyTemplateName = 'Confluence.Templates.Likes.likeButton';
}


Confluence.Templates.Likes.likeSection = function(opt_data, opt_ignored) {
  return '<div id="likes-section">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: true}) : '') + '<span class="like-summary"></span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeSection.soyTemplateName = 'Confluence.Templates.Likes.likeSection';
}


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_ignored) {
  return '<li class="comment-action-like">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: false}) : '') + '<span class="like-summary"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.commentLikeSection.soyTemplateName = 'Confluence.Templates.Likes.commentLikeSection';
}


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_ignored) {
  var output = '<div id="likes-dialog-body"><ol>';
  var likeList26 = opt_data.likes;
  var likeListLen26 = likeList26.length;
  for (var likeIndex26 = 0; likeIndex26 < likeListLen26; likeIndex26++) {
    var likeData26 = likeList26[likeIndex26];
    output += '<li><div class="avatar-container"><a href="' + soy.$$escapeHtml(likeData26.user.url) + '"><img class="like-user-avatar" src="' + soy.$$escapeHtml(likeData26.user.avatarUrl) + '"></a></div><div class="like-user"><a class="like-user-link" href="' + soy.$$escapeHtml(likeData26.user.url) + '">' + soy.$$escapeHtml(likeData26.user.fullName) + '</a></div>' + ((opt_data.showFollowActions) ? '<div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">' + ((likeData26.user.followedByRemoteUser) ? soy.$$escapeHtml("\u5173\u6ce8\u4e2d") : '<button data-username="' + soy.$$escapeHtml(likeData26.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml("\u5173\u6ce8") + '</button>') + '</li></ul></div>' : '') + '</li>';
  }
  output += '</ol></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likesDialog.soyTemplateName = 'Confluence.Templates.Likes.likesDialog';
}


Confluence.Templates.Likes.userLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.user.url) + '" class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.userLink.soyTemplateName = 'Confluence.Templates.Likes.userLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.User.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml("") + '/display/~' + soy.$$escapeUri(opt_data.username);
};
if (goog.DEBUG) {
  Confluence.Templates.User.userLinkUrl.soyTemplateName = 'Confluence.Templates.User.userLinkUrl';
}


Confluence.Templates.User.logo = function(opt_data, opt_ignored) {
  return '' + ((opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) ? '<a ' + ((opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + ' href="' + soy.$$escapeHtml("") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf") + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/s/zh_CN/6441/3dfb154e647c41466ff19113f0197feded41ba10/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf") + '"></a>' : (opt_data.profilePictureInfo.anonymous) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/s/zh_CN/6441/3dfb154e647c41466ff19113f0197feded41ba10/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml("\u533f\u540d") + '" title="' + soy.$$escapeHtml("\u533f\u540d") + '">' : (opt_data.canView) ? '<a ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '" href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.profilePictureInfo.uriReference) + '" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '"></a>' : '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/s/zh_CN/6441/3dfb154e647c41466ff19113f0197feded41ba10/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '">');
};
if (goog.DEBUG) {
  Confluence.Templates.User.logo.soyTemplateName = 'Confluence.Templates.User.logo';
}


Confluence.Templates.User.usernameLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.username && opt_data.username != '') ? '<a href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"' + ((opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"') + '>' + ((opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username)) + '</a>' : soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameLink.soyTemplateName = 'Confluence.Templates.User.usernameLink';
}


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.fullNameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.fullNameOrAnonymous';
}


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.usernameOrAnonymous';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Icons.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("\u56de\u6eaf") + '">' + soy.$$escapeHtml("\u56de\u6eaf") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIcon.soyTemplateName = 'Confluence.Templates.Icons.contentIcon';
}


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("\u56de\u6eaf") + '">' + soy.$$escapeHtml("\u56de\u6eaf") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIconFont.soyTemplateName = 'Confluence.Templates.Icons.contentIconFont';
}


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<span class="icon' + ((opt_data.type) ? ' aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '') + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.iconSpan.soyTemplateName = 'Confluence.Templates.Icons.iconSpan';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Captcha.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_ignored) {
  var output = '<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">' + soy.$$escapeHtml("If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance.") + '</span></label>' + Confluence.Templates.Captcha.image(opt_data) + '<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="' + soy.$$escapeHtml("\u8f93\u5165\u4e0a\u9762\u7684\u6587\u5b57") + '">';
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      output += aui.message.warning({content: errorData13});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.form.soyTemplateName = 'Confluence.Templates.Captcha.form';
}


Confluence.Templates.Captcha.image = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml("") + '/jcaptcha?id=' + soy.$$escapeHtml(opt_data.captchaId) + '" class="captcha-image" alt="' + soy.$$escapeHtml("\u9a8c\u8bc1\u7801\u56fe\u7247") + '"><input type="hidden" name="captchaId" value="' + soy.$$escapeHtml(opt_data.captchaId) + '" placeholder="' + soy.$$escapeHtml("\u8f93\u5165\u4e0a\u9762\u7684\u6587\u5b57") + '">';
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.image.soyTemplateName = 'Confluence.Templates.Captcha.image';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Notifications.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message warning closeable">' + soy.$$filterNoAutoescape("\u4f60\u8fd8\u6ca1\u6709\u767b\u5f55\u3002\u4f60\u6240\u505a\u7684\u4efb\u4f55\u66f4\u6539\u4f1a\u5c06\u4f5c\u8005\u6807\u8bb0\u4e3a\x3cspan class\x3d\x22smalltext\x22\x3e\u533f\u540d\u7528\u6237\x3c/span\x3e\u3002") + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + soy.$$filterNoAutoescape(AJS.format("\u5982\u679c\u4f60\u5df2\u7ecf\u62e5\u6709\u5e10\u6237\uff0c\u8bf7\x3ca href\x3d\x22{0}\x22\x3e\u767b\u5f55\x3c/a\x3e\u3002",opt_data.loginURL)) : '') + '</div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.notLoggedIn.soyTemplateName = 'Confluence.Templates.Notifications.notLoggedIn';
}


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.actionErrors.length > 0) {
    output += '<div class="aui-message aui-message-error ' + ((opt_data.closeable) ? 'closeable' : '') + '"><p class="title">' + soy.$$escapeHtml("\u53d1\u751f\u5982\u4e0b\u9519\u8bef\uff1a") + '</p><span class="aui-icon icon-error"></span><ul>';
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output += '<li>' + soy.$$filterNoAutoescape(errorHtmlData24) + '</li>';
    }
    output += '</ul></div>';
  }
  output += '<div id="action-messages"></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.actionErrors.soyTemplateName = 'Confluence.Templates.Notifications.actionErrors';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:es6-promise', location = '/includes/js/third-party/es6-promise.js' */
(function(){function y(a){return"function"===typeof a}function j(){for(var a=0;a<k;a+=2)(0,r[a])(r[a+1]),r[a]=void 0,r[a+1]=void 0;k=0}function s(){}function t(a,b){if(a===b)e(a,new TypeError("You cannot resolve a promise with itself"));else if("function"===typeof b||"object"===typeof b&&null!==b)if(b.constructor===a.constructor)b._state===u?l(a,b._result):b._state===m?e(a,b._result):w(b,void 0,function(b){t(a,b)},function(b){e(a,b)});else{var c;try{c=b.then}catch(d){x.error=d,c=x}if(c===x)e(a,x.error);
else if(void 0===c)l(a,b);else if(y(c)){var h=c;n(function(a){var c=!1,d;a:{d=function(d){c||(c=!0,b!==d?t(a,d):l(a,d))};var g=function(b){c||(c=!0,e(a,b))};try{h.call(b,d,g)}catch(i){d=i;break a}d=void 0}!c&&d&&(c=!0,e(a,d))},a)}else l(a,b)}else l(a,b)}function M(a){a._onerror&&a._onerror(a._result);z(a)}function l(a,b){a._state===o&&(a._result=b,a._state=u,0!==a._subscribers.length&&n(z,a))}function e(a,b){a._state===o&&(a._state=m,a._result=b,n(M,a))}function w(a,b,c,d){var h=a._subscribers,f=
h.length;a._onerror=null;h[f]=b;h[f+u]=c;h[f+m]=d;0===f&&a._state&&n(z,a)}function z(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,h,f=a._result,e=0;e<b.length;e+=3)d=b[e],h=b[e+c],d?D(c,d,h,f):h(f);a._subscribers.length=0}}function E(){this.error=null}function D(a,b,c,d){var h=y(c),f,g,i,j;if(h){try{f=c(d)}catch(k){A.error=k,f=A}f===A?(j=!0,g=f.error,f=null):i=!0;if(b===f){e(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,i=!0;b._state===
o&&(h&&i?t(b,f):j?e(b,g):a===u?l(b,f):a===m&&e(b,f))}function i(a,b){this._instanceConstructor=a;this.promise=new a(s);this._validateInput(b)?(this._input=b,this._remaining=this.length=b.length,this._init(),0===this.length?l(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&l(this.promise,this._result))):e(this.promise,this._validationError())}function g(a){this._id=N++;this._result=this._state=void 0;this._subscribers=[];if(s!==a){if(!y(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
if(!(this instanceof g))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");var b=this;try{a(function(a){t(b,a)},function(a){e(b,a)})}catch(c){e(b,c)}}}var F=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},k=0,G,B,n=function(a,b){r[k]=a;r[k+1]=b;k+=2;2===k&&(B?B(j):p())},q="undefined"!==typeof window?window:void 0,v=q||{},v=v.MutationObserver||v.WebKitMutationObserver,
O="undefined"!==typeof process&&"[object process]"==={}.toString.call(process),P="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,r=Array(1E3),p;if(O)p=function(){process.nextTick(j)};else if(v){var H=0,q=new v(j),I=document.createTextNode("");q.observe(I,{characterData:!0});p=function(){I.data=H=++H%2}}else if(P){var J=new MessageChannel;J.port1.onmessage=j;p=function(){J.port2.postMessage(0)}}else if(void 0===q&&"function"===typeof require)try{var K=
require("vertx");G=K.runOnLoop||K.runOnContext;p=function(){G(j)}}catch(Q){p=function(){setTimeout(j,1)}}else p=function(){setTimeout(j,1)};var o=void 0,u=1,m=2,x=new E,A=new E;i.prototype._validateInput=function(a){return F(a)};i.prototype._validationError=function(){return Error("Array Methods must be provided an Array")};i.prototype._init=function(){this._result=Array(this.length)};i.prototype._enumerate=function(){for(var a=this.length,b=this.promise,c=this._input,d=0;b._state===o&&d<a;d++)this._eachEntry(c[d],
d)};i.prototype._eachEntry=function(a,b){var c=this._instanceConstructor;"object"===typeof a&&null!==a?a.constructor===c&&a._state!==o?(a._onerror=null,this._settledAt(a._state,b,a._result)):this._willSettleAt(c.resolve(a),b):(this._remaining--,this._result[b]=a)};i.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===o&&(this._remaining--,a===m?e(d,c):this._result[b]=c);0===this._remaining&&l(d,this._result)};i.prototype._willSettleAt=function(a,b){var c=this;w(a,void 0,function(a){c._settledAt(u,
b,a)},function(a){c._settledAt(m,b,a)})};var N=0,L=g;g.all=function(a){return(new i(this,a)).promise};g.race=function(a){function b(a){t(d,a)}function c(a){e(d,a)}var d=new this(s);if(!F(a))return e(d,new TypeError("You must pass an array to race.")),d;for(var h=a.length,f=0;d._state===o&&f<h;f++)w(this.resolve(a[f]),void 0,b,c);return d};g.resolve=function(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(s);t(b,a);return b};g.reject=function(a){var b=new this(s);e(b,a);
return b};g._setScheduler=function(a){B=a};g._setAsap=function(a){n=a};g._asap=n;g.prototype={constructor:g,then:function(a,b){var c=this._state;if(c===u&&!a||c===m&&!b)return this;var d=new this.constructor(s),e=this._result;if(c){var f=arguments[c-1];n(function(){D(c,d,f,e)})}else w(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}};var q=function(){var a;if("undefined"!==typeof global)a=global;else if("undefined"!==typeof self)a=self;else try{a=Function("return this")()}catch(b){throw Error("polyfill failed because global object is unavailable in this environment");
}var c=a.Promise;if(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)a.Promise=L},C={Promise:L,polyfill:q};"function"===typeof define&&define.amd?define(function(){return C}):"undefined"!==typeof module&&module.exports?module.exports=C:"undefined"!==typeof this&&(this.ES6Promise=C);q()}).call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'probe.js' */
!function(){var n,t,e,r,o,i,u,c,s,f,a,h,d,l,p,v;n=function(){return window}(),t=function(n){return!(!n.performance||!n.performance.now)}(n),e=[],r=function(n){return function(t){n.unshift({addReporter:t})}}(e),o=function(n){return function(t){for(;n.length;)t(n.splice(0,1)[0]);n.unshift=t,n.push=t}}(e),i=function(n,t){return function(e){n.push({end:{key:e.key,timestamp:t.performance.now()}})}}(e,n),u=function(n){var t=n.HTMLElement.prototype;return t.matches||t.msMatchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector}(n),c=function(){function n(){this._={},this.length=0}return n.prototype.add=function(n,t){this._.hasOwnProperty(n)||(this.length++,this._[n]=[]),this._[n].push(t)},n.prototype.remove=function(n,t){var e,r=!1;return this._.hasOwnProperty(n)&&(1===arguments.length?(delete this._[n],r=!0):(e=this._[n].indexOf(t),e>-1&&(this._[n].splice(e,1),0===this._[n].length&&delete this._[n],r=!0))),r},n.prototype.get=function(n){return this._.hasOwnProperty(n)?this._[n]:[]},n.prototype.forEach=function(n){var t=this._;Object.keys(t).forEach(function(e){n(t[e],e)})},n}(),s=function(n){return n.document}(n),f=function(n,t,e,r){function o(n,t){a||(c.observe(r,{attributes:!0,childList:!0,subtree:!0}),a=!0),s.add(n,t)}function i(n,t){s.remove.apply(s,arguments),0===s.length&&(c.disconnect(),a=!1)}function u(n){var t;n.forEach||(n=[n]);var e=new h(function(e,u){function c(){f.forEach(function(n){n()})}var s=[],f=[];n.forEach(function(n){var t,e;r.querySelector(n)||(t=new h(function(t){o(n,t),e=function(){i(n,t)}}),s.push(t),f.push(e))}),h.all(s).then(c).then(e,u),t=function(){c(),u()}});return e.dismiss=t,e}var c,s,f=e.MutationObserver,a=!1,h=e.Promise;return f&&h?(s=new t,c=new f(function(t){t.forEach(function(t){var e="childList"===t.type&&t.addedNodes&&t.addedNodes.length>0,r="attributes"===t.type;(e||r)&&s.forEach(function(e,r){(t.target.querySelector(r)||n.call(t.target,r))&&(e.forEach(function(n){n()}),i(r))})})}),u):void 0}(u,c,n,s),a=function(n,t,e,r){function o(n,t){a||(c.observe(r,{childList:!0,subtree:!0}),a=!0),s.add(n,t)}function i(n,t){s.remove.apply(s,arguments),0===s.length&&(c.disconnect(),a=!1)}function u(n){var t;n.forEach||(n=[n]);var e=new h(function(e,u){function c(){f.forEach(function(n){n()})}var s=[],f=[];n.forEach(function(n){var t,e;r.querySelector(n)&&(t=new h(function(t){o(n,t),e=function(){i(n,t)}}),s.push(t),f.push(e))}),h.all(s).then(c).then(e,u),t=function(){c(),u()}});return e.dismiss=t,e}var c,s,f=e.MutationObserver,a=!1,h=e.Promise;return f&&h?(s=new t,c=new f(function(t){t.forEach(function(t){var e="childList"===t.type&&t.removedNodes&&t.removedNodes.length>0;e&&s.forEach(function(e,r){for(var o,u=0;u<t.removedNodes.length;u++)if(o=t.removedNodes[u],o.querySelector&&(o.querySelector(r)||n.call(o,r))){for(var c=0;c<e.length;c++)e[c]();i(r)}})})}),u):void 0}(u,c,n,s),h=function(n,t){return!(!n||!t)}(f,a),d=function(n,t){function e(){return r}var r=!1;return n.addEventListener("DOMContentLoaded",function(){t.setTimeout(function(){r=!0})}),e}(s,n),l=function(n,t,e,r,o,i,u){function c(n,t){return Array.isArray(n)||(n=[n]),n.map(function(n){return"string"==typeof n?{selector:n,requireUpdate:t}:n})}function s(n){var t;return t=n.map(function(n){var t;return n.requireUpdate?(t=new o(n.selector),a.push(function(){t.dismiss()})):t=f.resolve(),t.then(function(){var t=new r(n.selector);return a.push(function(){t.dismiss()}),t})}),f.all(t)}var f=u.Promise,a=[];return function(r){var o,f="isInitial"in r?r.isInitial:i()===!1,h="threshold"in r?r.threshold:1e3;e.push({start:{key:r.key,isInitial:f,threshold:h,timestamp:f?0:u.performance.now()}}),a.forEach(function(n){n()}),a.splice(0,a.length),r.ready&&t&&(o=c(r.ready,!f),s(o).then(function(){n({key:r.key})}))}}(i,h,e,f,a,d,n),p=function(n){return function(t){n.push({subscribe:t})}}(e),v=function(n,t,e,r,o,i){var u=function(){};return{start:n?o:u,end:n?r:u,addReporter:n?t:u,delegateTo:n?e:u,subscribe:n?i:u}}(t,r,o,i,l,p),window["browser-metrics"]=v,window.define&&window.define("internal/browser-metrics",function(){return v})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'internal/browser-metrics-aa-beacon.js' */
define("internal/browser-metrics-aa-beacon",function(){var n={};return n=function(n){function e(n,e){Object.keys(e).forEach(function(r){n[r]=e[r]})}var r=[],t=[];return n.addUrlCleaner=function(n){t.push(n)},n.cleanUrl=function(n){return t.reduce(function(e,r){var t=r(n);return t.length>e.length?t:e},"")},n.addReportMarshaller=function(n){r.push(n)},n.beacon=function(n){var t={};r.forEach(function(r){var a=r(n);"object"==typeof a&&e(t,a)});var a={name:"browser.metrics.navigation",properties:t};AJS.EventQueue.push(a)},n}(n)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'loader.js' */
!function(){var n={},r={},i={};n=function(n){var r=window;return r}(n),r=function(n,r){var i=r.WRM;return i}(r,n),i=function(n,r,i){function t(){u===c&&o&&(o(),o=null)}var u=0,c=0,o=null,e={install:function(n){u+=1,n(function(){c+=1,t()})}};return r["browser-metrics-plugin"]=e,i.require(["wrc!browser-metrics-plugin.contrib"],function(){r.require(["internal/browser-metrics-plugin/collector"],function(n){o=function(){n.install()},t()})}),n}(i,n,r)}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:viewcontent', location = '/js/viewcontent.js' */
require(["confluence/api/event","internal/browser-metrics","ajs","jquery"],function(f,e,c,g){function b(i){if(!g(i.target).hasClass("full-load")){var h=i.data.type;if(c.Meta.getBoolean("shared-drafts")&&c.Meta.getBoolean("synchrony-dark-enabled")){var j="confluence."+h+".edit.collaborative.quick-view";e.start({key:j});c.bind("synchrony.connected",function(){e.end({key:j})})}else{if(!c.Meta.getBoolean("shared-drafts")){e.start({key:"confluence."+h+".edit.quick-view",ready:".active-richtext"})}}}}function a(){e.start({key:"confluence.file.preview.firstpage"});f.bind("confluence-previews.fileviewer.completed",function(){e.end({key:"confluence.file.preview.firstpage"})})}function d(){var h=c.Meta.get("content-type");if(h){e.start({key:"confluence."+h+".view",ready:".wiki-content",isInitial:true});g("#editPageLink").on("click",{type:h},b);g(".confluence-embedded-file-wrapper").on("click",a)}}c.toInit(d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/asyncLoader.js' */
define("confluence/code-macro/async-loader",["jquery","wrm","underscore"],function(c,a,b){return function(){b.defer(function(){var h=c(".codeHeader .collapse-source");d(h);var i=c("#content").find("pre.syntaxhighlighter-pre");if(i.length>0){var g="wr!com.atlassian.confluence.ext.newcode-macro-plugin:sh-theme-";var f=["wrc!code-macro"];i.each(function(){f.push(g+c(this).data("theme").toLowerCase())});a.require(f).done(function(){window.SyntaxHighlighter.highlight();e(h)})}});function d(f){f.hide();b.forEach(f,function(g){c(g).next(".collapse-spinner-wrapper").spin()})}function e(f){f.show();f.next(".collapse-spinner-wrapper").remove()}}});require("confluence/module-exporter").safeRequire("confluence/code-macro/async-loader",function(a){AJS.toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
AJS.toInit(function(e){d();AJS.bind("system-content-metadata.toggled-restrictions",function(i,k){var j=e("#content-metadata-page-restrictions");var g="";j.removeClass();var h=k.hasRestrictions&&!(k.hasExplicitRestrictions||k.hasInheritedRestrictions);if(k.hasExplicitRestrictions||h){j.addClass("aui-icon aui-icon-small aui-iconfont-locked restricted");g="\u6743\u9650\u9650\u5236"}else{if(k.hasInheritedRestrictions){j.addClass("aui-icon aui-icon-small aui-iconfont-unlocked restricted");g="\u6743\u9650\u9650\u5236"}else{j.addClass("aui-icon aui-icon-small aui-iconfont-unlocked");g=k.hasAnyExplicitRestrictions?"\u6743\u9650\u9650\u5236":"\u672a\u9650\u5236"}}j.attr("title",g);a(j);d()});AJS.bind("breadcrumbs.expanded",f);e("#page-metadata-banner").css("visibility","visible");b();e("#content-metadata-page-restrictions").click(function(g){g.preventDefault();AJS.trigger("system-content-metadata.open-restrictions-dialog")});function d(){if(e("#system-content-items").children(":not(.hidden)").length==0){e("#system-content-items").addClass("hidden")}else{e("#system-content-items").removeClass("hidden")}}function f(){e("#page-metadata-banner").hide()}function b(){var g=e("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(g);g.click(function(h){c(e(h.target).closest("a"))});e(window).on("click scroll resize",c)}function a(g){e(g).tooltip({live:true,gravity:e("#com-atlassian-confluence").hasClass("theme-documentation view-blog-post")?"nw":"n",title:"title",delayIn:500})}function c(g){e(".tipsy").remove();if(g){var h=e(g).data("tipsy");if(h){h.hoverState="out"}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_ignored) {
  var output = '<div id="page-metadata-banner"><ul class="banner">' + Confluence.Templates.PageBanner.renderSystemContentItems(opt_data);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += Confluence.Templates.PageBanner.renderPageBannerItem(itemData6);
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.banner.soyTemplateName = 'Confluence.Templates.PageBanner.banner';
}


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_ignored) {
  var output = '<li id="system-content-items" class="noprint">';
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    output += Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(itemData12, {isSystemContentItem: true}));
  }
  output += '</li>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderSystemContentItems.soyTemplateName = 'Confluence.Templates.PageBanner.renderSystemContentItems';
}


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_ignored) {
  return '<li class="page-metadata-item noprint ' + ((opt_data.isAuiButton) ? 'has-button' : '') + '" ' + ((opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '') + '>' + Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(opt_data, {isSystemContentItem: false})) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderPageBannerItem.soyTemplateName = 'Confluence.Templates.PageBanner.renderPageBannerItem';
}


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.tooltip) + '" ' + ((opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '') + ' ' + ((opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '') + '>' + Confluence.Templates.PageBanner.itemIcon(opt_data) + ((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemAnchor.soyTemplateName = 'Confluence.Templates.PageBanner.itemAnchor';
}


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemIcon.soyTemplateName = 'Confluence.Templates.PageBanner.itemIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
define("confluence/comments",["ajs","jquery","confluence/storage-manager"],function(b,g,h){function f(){return confirm("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u8bc4\u8bba\uff1f")?(this.href+="&confirm=yes",!0):!1}return{binder:{bindRemoveConfirmation:function(a){g("#comment-"+a+" .comment-action-remove a").click(f)}},initialiser:function(a){var d=h("confluence","comments");if(a("#comments-section").length){a("#comments-section .comment:odd").addClass("odd");a(".comment-action-remove a").click(f);var e=
a("#addcomment.comment-text"),c=a("#comments-text-editor textarea");c.focus(function(){e.addClass("active")}).blur(function(){a.trim(c.val()).length||e.removeClass("active")}).bind("reset.default-text",function(){e.removeClass("active")});a("form[name='textcommentform']").submit(function(){var d=c.val();return!a.trim(d)?(alert("\u8bc4\u8bba\u6587\u5b57\u4e3a\u7a7a\uff0c\u4e0d\u80fd\u6dfb\u52a0\u7a7a\u7684\u8bc4\u8bba\u3002"),!1):!0});a("#add-comment-rte").click(function(){c.hasClass("placeholded")||d.setItem("text-comment",a.trim(c.val()))});a("#addcomment #rte").length&&
b.bind("init.rte",function(a,b){var c=d.getItem("text-comment");c&&(b.editor.setContent(c),d.setItem("text-comment",""))})}}}});require("confluence/module-exporter").safeRequire("confluence/comments",function(b){require("confluence/legacy").Comments=b.binder;require("ajs").toInit(b.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,d){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&
a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var j={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},j,a),b,c=a,c=f.template('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);a=b;a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left");a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,j,k,l){function f(){var a=c("#"+g);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;h?b=c("#header").height()+d:(b=e.scrollTop(),b=b<=i-d?i-Math.max(b,0):d);a.css("top",b)}}var d=20,i=71,g="aui-flag-container",h=!1,e;return function(a){e=(h=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",f);l.addEventListener("aui-flag-show",f);j.bind("rte-ready",function(){"page"===
k.get("content-type")&&a("#"+g).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Comments.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads"><li class="comment-thread">' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, parentId: opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}) + '</li></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayReplyEditorLoadingContainer.soyTemplateName = 'Confluence.Templates.Comments.displayReplyEditorLoadingContainer';
}


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder.soyTemplateName = 'Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder';
}


Confluence.Templates.Comments.displayEditEditorContainer = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, id: opt_data.commentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'edit'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayEditEditorContainer.soyTemplateName = 'Confluence.Templates.Comments.displayEditEditorContainer';
}


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml(opt_data.message) + '</p><p><a href="' + soy.$$escapeHtml(opt_data.fallbackUrl) + '">' + soy.$$escapeHtml("\u91cd\u8bd5") + '</a></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.editorLoadErrorMessage.soyTemplateName = 'Confluence.Templates.Comments.editorLoadErrorMessage';
}


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_ignored) {
  var output = '<div class="quick-comment-container comment ' + soy.$$escapeHtml(opt_data.mode) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:' + ((opt_data.state == 'loading') ? 'block' : 'none') + ';"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:' + ((opt_data.state == 'loading') ? 'none' : 'block') + ';" class="quick-comment-form aui" method="post" ';
  switch (opt_data.mode) {
    case 'add':
      output += 'name="inlinecommentform" action="' + soy.$$escapeHtml("") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '"';
      break;
    case 'edit':
      output += 'name="editcommentform" action="' + soy.$$escapeHtml("") + '/pages/doeditcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&commentId=' + soy.$$escapeHtml(opt_data.comment.id) + '"';
      break;
    case 'reply':
      output += 'name="threadedcommentform"  action="' + soy.$$escapeHtml("") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&parentId=' + soy.$$escapeHtml(opt_data.comment.parentId) + '"';
      break;
  }
  output += ' >' + ((opt_data.mode == 'add') ? '<div title="' + soy.$$escapeHtml("\u6dfb\u52a0\u8bc4\u8bba") + '" class="quick-comment-prompt"><span>' + soy.$$escapeHtml("\u7f16\u5199\u8bc4\u8bba...") + '</span></div>' : '') + '</form></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentEditorCommon.soyTemplateName = 'Confluence.Templates.Comments.displayCommentEditorCommon';
}


Confluence.Templates.Comments.userLogo = function(opt_data, opt_ignored) {
  return '<p class="comment-user-logo">' + ((opt_data.userInfo.userName == null) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/s/zh_CN/6441/3dfb154e647c41466ff19113f0197feded41ba10/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml("\u533f\u540d") + '" title="' + soy.$$escapeHtml("\u533f\u540d") + '">' : (opt_data.userInfo.profilePicture.isDefault) ? '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + soy.$$escapeHtml("") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf") + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/s/zh_CN/6441/3dfb154e647c41466ff19113f0197feded41ba10/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf") + '"></a>' : '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.userInfo.profilePicture.path) + '" alt="' + soy.$$escapeHtml("\u7528\u6237\u56fe\u6807") + ': ' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" title="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '"></a>') + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.userLogo.soyTemplateName = 'Confluence.Templates.Comments.userLogo';
}


Confluence.Templates.Comments.displayComment = function(opt_data, opt_ignored) {
  return '' + ((opt_data.comment.parentId == 0 && opt_data.firstReply) ? '<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">' + soy.$$escapeHtml("\u8bc4\u8bba") + '</h2>' + Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}) + '</div></div>' : (opt_data.firstReply) ? Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}) : Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}));
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayComment.soyTemplateName = 'Confluence.Templates.Comments.displayComment';
}


Confluence.Templates.Comments.commentThread = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads' + ((opt_data.topLevel) ? ' top-level" id="page-comments' : '') + '">' + Confluence.Templates.Comments.commentThreadItem(opt_data) + '</ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThread.soyTemplateName = 'Confluence.Templates.Comments.commentThread';
}


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_ignored) {
  return '<li id="comment-thread-' + soy.$$escapeHtml(opt_data.comment.id) + '" class="comment-thread">' + Confluence.Templates.Comments.commentView(opt_data) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThreadItem.soyTemplateName = 'Confluence.Templates.Comments.commentThreadItem';
}


Confluence.Templates.Comments.commentView = function(opt_data, opt_ignored) {
  return '<div class="comment' + ((opt_data.highlight == true) ? ' focused' : '') + '" id="comment-' + soy.$$escapeHtml(opt_data.comment.id) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="comment-header"><h4 class="author">' + ((opt_data.commenter.userName == null) ? soy.$$escapeHtml("\u533f\u540d\u7528\u6237") : '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>') + '</h4></div><div class="comment-body"><div class="comment-content wiki-content">' + soy.$$filterNoAutoescape(opt_data.comment.html) + '</div><div class="comment-actions">' + Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}) + Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentView.soyTemplateName = 'Confluence.Templates.Comments.commentView';
}


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_ignored) {
  var output = '<ul class="comment-actions-' + soy.$$escapeHtml(opt_data.section) + '">';
  if (opt_data.actions != null) {
    var itemList211 = opt_data.actions;
    var itemListLen211 = itemList211.length;
    for (var itemIndex211 = 0; itemIndex211 < itemListLen211; itemIndex211++) {
      var itemData211 = itemList211[itemIndex211];
      output += '<li ' + ((itemData211.style != null) ? ' class="' + soy.$$escapeHtml(itemData211.style) + '"' : '') + '><a ' + ((itemData211.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData211.tooltip) + '"' : '') + ' href="' + soy.$$escapeHtml(itemData211.url) + '" ' + ((itemData211.id) ? ' id="' + soy.$$escapeHtml(itemData211.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '') + '><span>' + soy.$$escapeHtml(itemData211.label) + '</span></a></li>\n';
    }
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentActions.soyTemplateName = 'Confluence.Templates.Comments.displayCommentActions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
define("confluence-quick-edit/comment-display-manager",["ajs","confluence/legacy","confluence/templates","jquery"],function(g,j,h,c){var i={_updateCommentSectionTitle:function(){var a=c("#comments-section-title");if(0!==a.length){var b=this.commentCount();1===b?a.text("\u8bc4\u8bba"):a.text(g.format("{0} \u8bc4\u8bba",b))}},addComment:function(a,b,f,d){a={comment:b,commenter:a,highlight:f,context:{contextPath:g.Meta.get("context-path"),staticResourceUrlPrefix:g.Meta.get("static-resource-url-prefix")}};
if(this.hasComments()){if(0==b.parentId)a.firstReply=!1,f=c("#comments-section .comment-threads.top-level");else{var f=c("#comment-thread-"+b.parentId),e=f.children(".commentThreads");e.length?(a.firstReply=!1,f=e):a.firstReply=!0}d||this.clearFocus();d=c(h.Comments.displayComment(a));d.addClass("fadeInComment");f.append(d);this._updateCommentSectionTitle()}else a.firstReply=!0,d=c(h.Comments.displayComment(a)),d.addClass("fadeInComment"),c("#comments-section").prepend(d);j.Comments.bindRemoveConfirmation(b.id);
b=this.getCommentNode(b.id);b.scrollToElement();return b},addOrUpdateComment:function(a,b,c,d){var e=this.getCommentNode(b.id);return e?(e.find(".comment-content").html(b.html),d||this.clearFocus(),c&&e.addClass("focused"),e.addClass("fadeInComment"),e.scrollToElement(),e):this.addComment.apply(this,arguments)},isVisible:function(){return!c("#page-comments").hasClass("hidden")},hasComments:function(){return 0<this.commentCount()},commentCount:function(){return c("#comments-section .comment").not(".quick-comment-container").length},
clearFocus:function(){c(".comment").removeClass("focused")},getCommentNode:function(a){a=c("#comment-"+a);return a.length?a:null},getParentId:function(a){a=i.getCommentNode(a);return null!=a&&(a=a.closest("div.comment"),a.length)?(a=a.attr("id"),a=/\d+/.exec(a),parseInt(a)):0}};return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/comment-display-manager","Confluence.CommentDisplayManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
define("confluence-quick-edit/scroll-util",["window","document","jquery"],function(a,c,e){return{scrollToElement:function(){this.scrollWindowToElement()||this.scrollOverflowContainerToElement();return this},scrollWindowToElement:function(){function b(){return"pageYOffset"in a?a.pageYOffset:c.documentElement.scrollTop}var f=b(),d;if("number"===typeof a.innerWidth)d=a.innerHeight;else if(c.documentElement&&c.documentElement.clientWidth)d=c.documentElement.clientHeight;else return this[0].scrollIntoView(!1),
!0;var g=this.offset().top,h=this.height();return g+h+40>f+d?(this[0].scrollIntoView(!1),a.scrollBy(0,40),f!=b()):!0},scrollOverflowContainerToElement:function(){var b=null;this.parents().each(function(){var a=e(this).css("overflow");if("auto"==a||"scroll"==a)return b=e(this),!1});if(!b)return!1;var a=b.height(),d=this.offset().top,c=this.height(),a=a-(d+c+40);0>a&&(b[0].scrollTop-=a);return!0}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/scroll-util",function(a){require("jquery").fn.extend(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload.soy' */
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace QuickReload.Templates.
 */

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.pageEdit = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.pageEditors}) + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: "\u91cd\u65b0\u8f7d\u5165\u9875\u9762", type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.pageEditors}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageEdit.soyTemplateName = 'QuickReload.Templates.pageEdit';
}


QuickReload.Templates.pageComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.commentUsers}) + ((opt_data.commentUsers.length == 1) ? '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span>' : '') + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.commentUsers.length > 1) ? soy.$$escapeHtml("\u663e\u793a\u5168\u90e8") : soy.$$escapeHtml("\u663e\u793a")), type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.commentUsers}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageComment.soyTemplateName = 'QuickReload.Templates.pageComment';
}


QuickReload.Templates.inlineComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.user}) + '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span></div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.reloadRequired) ? soy.$$escapeHtml("\u91cd\u65b0\u8f7d\u5165\u9875\u9762") : soy.$$escapeHtml("\u663e\u793a")), type: 'text', extraClasses: 'qr-notice-show aui-button-text', extraAttributes: ['data-reload-required', opt_data.reloadRequired]}) + QuickReload.Templates.summaryText({users: opt_data.user}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.inlineComment.soyTemplateName = 'QuickReload.Templates.inlineComment';
}


QuickReload.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="qr-container">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  QuickReload.Templates.container.soyTemplateName = 'QuickReload.Templates.container';
}


QuickReload.Templates.noticeHeader = function(opt_data, opt_ignored) {
  var output = '';
  var userList68 = opt_data.users;
  var userListLen68 = userList68.length;
  for (var userIndex68 = 0; userIndex68 < userListLen68; userIndex68++) {
    var userData68 = userList68[userIndex68];
    output += (userIndex68 < 8) ? aui.avatar.avatar({size: 'small', avatarImageUrl: userData68.profilePicture.path, title: userData68.displayName != '' ? userData68.displayName : "\u533f\u540d\u7528\u6237", extraClasses: 'qr-author-avatar'}) : '';
  }
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.noticeHeader.soyTemplateName = 'QuickReload.Templates.noticeHeader';
}


QuickReload.Templates.summaryText = function(opt_data, opt_ignored) {
  var output = '';
  var lastModifier__soy78 = opt_data.users[0];
  var others__soy79 = opt_data.users.length - 1;
  output += '<span class="qr-notice-summary-text">' + soy.$$escapeHtml("\u7531") + ' ' + Confluence.Templates.User.usernameLink({canView: false, username: lastModifier__soy78.userName, fullName: lastModifier__soy78.displayName != '' ? lastModifier__soy78.displayName : "\u533f\u540d\u7528\u6237"}) + ((others__soy79 == 1) ? ' ' + soy.$$escapeHtml("and 1 other") : '') + ((others__soy79 > 1) ? ' ' + soy.$$escapeHtml(AJS.format("\u4ee5\u53ca {0} \u5176\u4ed6",others__soy79)) : '') + '</span>';
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.summaryText.soyTemplateName = 'QuickReload.Templates.summaryText';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-timer.js' */
define("confluence-quick-reload/utils/quick-reload-timer",["jquery","underscore"],function(c,d){function a(b,a){this.options=c.extend({min:3E4,max:36E5,inactivity:12E4},a);d.bindAll(this,"start","stop","_now","_timeSinceLastSeen","_setActive","_setActivityTrigger","_clamp","_intervalMultiplier");this.callback=b;this._timer=null;this._setActivityTrigger(this._setActive)}a.prototype.start=function(b){this.lastSeenTimestamp=this._now();this.stop();b&&this.callback();var a=function(){this.callback();
c.call(this)},c=function(){this.stop();this._timer=setTimeout(d.bind(a,this),this.options.min*this._intervalMultiplier())};c.call(this)};a.prototype.stop=function(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)};a.prototype._setActive=function(){if(null!==this._timer){var b=this._timeSinceLastSeen()>this.options.inactivity;this.lastSeenTimestamp=this._now();b&&this.start(!0)}};a.prototype._setActivityTrigger=function(b){document.addEventListener("visibilitychange",function(){document.hidden||
b()},!1);c(window).focus(b);c("body").click(b);c(window).scroll(b)};a.prototype._now=function(){return(new Date).getTime()};a.prototype._timeSinceLastSeen=function(){return this._now()+1-this.lastSeenTimestamp};a.prototype._clamp=function(b,a,c){a=Math.max(Math.min(a,c),b);return isNaN(a)?b:a};a.prototype._intervalMultiplier=function(){var a=(document.hidden?3:1)*Math.ceil(this._timeSinceLastSeen()/this.options.inactivity);return this._clamp(1,this.options.max/this.options.min,a)};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-count.js' */
define("confluence-quick-reload/utils/quick-reload-count",function(){function a(){this.count=0}var b=document.title;a.prototype.getCount=function(){return this.count};a.prototype.setCount=function(a){this.count=a;this._displayCount()};a.prototype._displayCount=function(){document.title=(0<this.count?"("+this.count+") ":"")+b};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-comments","ajs underscore jquery confluence/flag confluence-quick-reload/utils/quick-reload-count confluence/legacy".split(" "),function(i,c,e,k,g,d){function h(c){return c.comment.id}var a,f=[];return{results:[],property:"comments",ignoreOnce:function(c){f.push(c)},filterNewResults:function(d,a){if(a.length===0)return a;var b=c.map(d,h);return c.filter(a,function(a){if(a.comment.isInlineComment)return false;a=h(a);if(c.contains(b,a))return false;
a=e.inArray(a,f);if(a>=0){f.splice(a,1);return false}return true})},render:function(f){g.setCount(g.getCount()+f.length);var f={close:"manual",type:"info",extraClasses:"qr-flag",fifo:true,stack:"quickreload"},j=this.results.length>1?i.format("{0}\u6761\u65b0\u8bc4\u8bba",this.results.length):"\u65b0\u8bc4\u8bba",b;b=c.clone(this.results);b.reverse();b=c.uniq(b,function(a){return a.commenter.userName});b=c.map(b,function(a){return a.commenter});var l=e("<div>").html(this.results[this.results.length-
1].comment.html).text();b=QuickReload.Templates.pageComment({commentUsers:b,noticeText:l});if(a===void 0||a.getAttribute("aria-hidden")==="true"){a=new k(e.extend({},{body:b,title:j},f));e(a).on("click",".qr-notice-show",c.bind(function(){var b=this.results;if(d&&d.CommentDisplayManager){d.CommentDisplayManager.clearFocus();c.map(b,function(a){var b=d.CommentDisplayManager.getCommentNode(h(a))!==null,a=d.CommentDisplayManager.addOrUpdateComment(a.commenter,a.comment,true,true);if(d.Likes&&!b){d.Likes.appendAction(e(a));
d.Likes.updateComment(e(a),{})}});d.CommentDisplayManager._updateCommentSectionTitle()}a.close()},this));e(a).on("aui-flag-close",c.bind(function(){g.setCount(g.getCount()-this.results.length);this.results=[]},this))}else{e(a).find(".qr-container").replaceWith(b);e(a).find(".title").text(j)}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-inline-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-inline-comments",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(b,f,h,q,l){function o(a,d,b,e,c){a=QuickReload.Templates.inlineComment({user:[a.commenter],noticeText:a&&a.comment&&f("<div>").text(a.comment.html).text(),reloadRequired:d});c=1<c?"\u65b0\u5efa\u5185\u5d4c\u8bc4\u8bba":"\u65b0\u5efa\u5185\u5d4c\u8bc4\u8bba";c=new q(f.extend({},{title:c,body:a},{close:"manual",
type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"}));f(c).find(".qr-notice-show").click(b);d||f(c).find(".qr-notice-show").click(c.close);f(c).on("aui-flag-close",e)}function n(a){return 0===a.comment.parentId}function i(a){return n(a)?a.comment.id:a.comment.parentId}return{results:[],property:"comments",filterNewResults:function(a,d){d=b.clone(d);d=b.filter(d,function(a){return a.comment.isInlineComment&&a.commenter.userName!==h.Meta.get("remote-user")});if(0<d.length)var f=b.map(a,
i),e=b.filter(d,n),c=b.filter(d,function(a){return!n(a)}),g=b.map(e,i),j=b.map(c,i),k=b.difference(j,g),p=[],c=b.filter(c,function(a){return-1!==k.indexOf(a.comment.parentId)&&-1===p.indexOf(a.comment.parentId)?(p.push(a.comment.parentId),!0):!1}),e=e.concat(c),d=b.filter(e,function(a){return-1===f.indexOf(i(a))});return d},render:function(a){l.setCount(l.getCount()+a.length);b.each(a,function(a){var m=i(a),e=function(){h.trigger("qr:show-new-thread",m)},c=function(){var a=h.Meta.Links.canonical(),
b=-1===a.indexOf("?")?"?":"&";window.location=a+b+"focusedCommentId="+m+"#comment-"+m},g=function(){this.results=b.filter(this.results,function(a){return i(a)!==m});l.setCount(l.getCount()-1)},g=b.bind(g,this),j=this.results.length;if(n(a)){var k=new f.Deferred;k.fail(function(a){o(a,!0,c,g,j)});k.done(function(a){o(a,!1,e,g,j)});h.trigger("qr:add-new-highlight",[a,k])}else o(a,!1,e,g,j)},this)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-page.js' */
define("confluence-quick-reload/handlers/quick-reload-page",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(d,a,g,i,e){var c;return{results:[],property:"page",filterNewResults:function(c,a){return 0<a.length&&"string"!==typeof a[0]?a:[]},render:function(f){e.setCount(e.getCount()+f.length);var f={close:"manual",type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"},h=1<this.results.length?g.format("{0} \u4e2a\u65b0\u4fee\u6539\u9879",this.results.length):
"\u65b0\u9875\u9762\u7f16\u8f91",b;b=d.clone(this.results);b.reverse();b=d.uniq(b,function(a){return a.editor.userName});b=d.map(b,function(a){return a.editor});b=QuickReload.Templates.pageEdit({pageEditors:b});void 0===c||"true"===c.getAttribute("aria-hidden")?(c=new i(a.extend({},{body:b,title:h},f)),a(c).on("click",".qr-notice-show",function(){a(this).prop("disabled",!0).prepend('<span class="aui-icon aui-icon-wait"></span>&nbsp;');window.location.reload()}),a(c).on("aui-flag-close",d.bind(function(){e.setCount(e.getCount()-
this.results.length);this.results=[]},this))):(a(c).find(".qr-container").replaceWith(b),a(c).find(".title").text(h))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload-manager.js' */
define("confluence-quick-reload/main/quick-reload-manager",["underscore","jquery","ajs","confluence-quick-reload/utils/quick-reload-timer"],function(h,f,g,i){function a(){this._isEnabled=!1;this.handlers=[];this.lastFetchTime=f('meta[name="confluence-request-time"]').attr("content")||(new Date).getTime();this._timer=null;h.bindAll(this,"addHandler","removeHandler","update","enable","disable","_onUpdateSuccess","_onUpdateError")}a.prototype.addHandler=function(d){for(var a=!1,e=0;e<this.handlers.length;e++)this.handlers[e]===
d&&(a=!0);!0!==a&&this.handlers.push(d)};a.prototype.removeHandler=function(d){if(d)for(var a=0;a<this.handlers.length;a++)if(this.handlers[a]===d){this.handlers.splice(a,1);break}};a.prototype.update=function(){f("body").hasClass("contenteditor")?this.disable():f.ajax({type:"GET",url:g.contextPath()+"/rest/quickreload/latest/"+g.Meta.get("page-id")+"?since="+encodeURIComponent(this.lastFetchTime),dataType:"json"}).done(this._onUpdateSuccess).fail(this._onUpdateError)};a.prototype.enable=function(){null===
this._timer&&(this._timer=new i(this.update));this._timer.start();this._isEnabled=!0};a.prototype.disable=function(){null!==this._timer&&this._timer.stop();this._isEnabled=!1};a.prototype.isEnabled=function(){return this._isEnabled};a.prototype._onUpdateSuccess=function(a,f,e){204!==e.status&&(this.lastFetchTime=a.time,h.map(this.handlers,function(c){var b=a[c.property];Array.isArray(b)||(b=[b]);b=c.filterNewResults(c.results,b);0<b.length&&(c.results=c.results.concat(b),c.render(b))},this))};a.prototype._onUpdateError=
function(a){a=a||{};if(a={404:"not found - the plugin has been probably been removed or disabled from Confluence",500:"generic server error",503:"service unavailable",504:"gateway timeout"}[a.status])this.disable(),g.log('Quick comment reload plugin has been disabled in this page due to a server error: "'+a+'". Please refresh the page to get it back.')};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-bootstrap', location = 'main/quick-reload-main.js' */
require("ajs confluence-quick-reload/main/quick-reload-manager confluence-quick-reload/handlers/quick-reload-comments confluence-quick-reload/handlers/quick-reload-inline-comments confluence-quick-reload/handlers/quick-reload-page confluence/legacy".split(" "),function(b,a,c,d,e,f){b.toInit(function(){if(!(b.DarkFeatures.isEnabled("quickreload.disabled")||!f.CommentDisplayManager||b.Meta.get("page-id")===void 0)){a.addHandler(c);a.addHandler(d);a.addHandler(e);a.enable();b.bind("page.commentAddedOrUpdated",
function(b,a){c.ignoreOnce(a.commentId)})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Plugins.ContentReport.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_ignored) {
  var output = '';
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output += '<div class="blueprint-blank-experience ' + soy.$$escapeHtml(opt_data.blueprintKey) + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '') + '</div>';
  } else {
    output += '<table class="aui content-report-table-macro' + ((hasSocialColumn__soy3) ? ' with-extra-columns' : '') + '"' + ((opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '') + '><thead><tr><th>' + soy.$$escapeHtml("Title") + '</th><th>' + soy.$$escapeHtml("Creator") + '</th><th>' + soy.$$escapeHtml("Modified") + '</th></tr></thead><tbody>';
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output += '<tr><td class="title"><a href="' + soy.$$escapeHtml(resultData43.urlPath) + '">' + soy.$$escapeHtml(resultData43.title) + '</a></td><td class="creator">' + Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}) + '</td><td class="modified" data-sortable-date="' + soy.$$escapeHtml(resultData43.sortableDate) + '">' + soy.$$escapeHtml(resultData43.friendlyModificationDate) + '</td>' + ((hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '') + '</tr>';
      }
    } else {
      output += '<tr><td colspan="3">' + soy.$$escapeHtml("No content found.") + '</td></tr>';
    }
    output += '</tbody></table>' + ((opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Plugins.ContentReport.contentReportTable.soyTemplateName = 'Confluence.Templates.Plugins.ContentReport.contentReportTable';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-tablesorter', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.tablesorter.js' */
("undefined"===typeof window?global:window).__47c4166c48b8c662516d162bc8164e32=function(){var h=jQuery;h.extend({tablesorter:new function(){function e(){var a=arguments[0],b=1<arguments.length?Array.prototype.slice.call(arguments):a;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(a)?"error":/warn/i.test(a)?"warn":"log"](b);else alert(b)}function o(a,b){e(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function p(a){for(var b in a)return!1;return!0}function m(a,
b,c){if(!b)return"";var g,d=a.config,j=d.textExtraction||"",e="",e="basic"===j?h(b).attr(d.textAttribute)||b.textContent||b.innerText||h(b).text()||"":"function"===typeof j?j(b,a,c):"function"===typeof(g=f.getColumnData(a,j,c))?g(b,a,c):b.textContent||b.innerText||h(b).text()||"";return h.trim(e)}function t(a){var b,c,g=a.config,d=g.$tbodies=g.$table.children("tbody:not(."+g.cssInfoBlock+")"),j,u,i,l,k,h,r,n,q,p=0,B="",t=d.length;if(0===t)return g.debug?e("Warning: *Empty table!* Not building a parser cache"):
"";g.debug&&(q=new Date,e("Detecting parsers for each column"));b=[];for(c=[];p<t;){j=d[p].rows;if(j[p]){u=g.columns;for(i=0;i<u;i++){l=g.$headers.filter('[data-column="'+i+'"]:last');k=f.getColumnData(a,g.headers,i);n=f.getParserById(f.getData(l,k,"extractor"));r=f.getParserById(f.getData(l,k,"sorter"));h="false"===f.getData(l,k,"parser");g.empties[i]=f.getData(l,k,"empty")||g.emptyTo||(g.emptyToBottom?"bottom":"top");g.strings[i]=f.getData(l,k,"string")||g.stringTo||"max";h&&(r=f.getParserById("no-parser"));
n||(n=!1);if(!r)a:{l=a;k=j;h=-1;r=i;for(var s=void 0,F=f.parsers.length,C=!1,w="",s=!0;""===w&&s;)h++,k[h]?(C=k[h].cells[r],w=m(l,C,r),l.config.debug&&e("Checking if value was empty on row "+h+", column: "+r+': "'+w+'"')):s=!1;for(;0<=--F;)if((s=f.parsers[F])&&"text"!==s.id&&s.is&&s.is(w,l,C)){r=s;break a}r=f.getParserById("text")}g.debug&&(B+="column:"+i+"; extractor:"+n.id+"; parser:"+r.id+"; string:"+g.strings[i]+"; empty: "+g.empties[i]+"\n");c[i]=r;b[i]=n}}p+=c.length?t:1}g.debug&&(e(B?B:"No parsers detected"),
o("Completed detecting parsers",q));g.parsers=c;g.extractors=b}function s(a){var b,c,g,d,j,u,i,l,k,p,r,n=a.config,q=n.$table.children("tbody"),t=n.extractors,s=n.parsers;n.cache={};n.totalRows=0;if(!s)return n.debug?e("Warning: *Empty table!* Not building a cache"):"";n.debug&&(l=new Date);n.showProcessing&&f.isProcessing(a,!0);for(j=0;j<q.length;j++)if(r=[],b=n.cache[j]={normalized:[]},!q.eq(j).hasClass(n.cssInfoBlock)){k=q[j]&&q[j].rows.length||0;for(g=0;g<k;++g)if(p={child:[]},u=h(q[j].rows[g]),
i=[],u.hasClass(n.cssChildRow)&&0!==g)c=b.normalized.length-1,b.normalized[c][n.columns].$row=b.normalized[c][n.columns].$row.add(u),u.prev().hasClass(n.cssChildRow)||u.prev().addClass(f.css.cssHasChild),p.child[c]=h.trim(u[0].textContent||u[0].innerText||u.text()||"");else{p.$row=u;p.order=g;for(d=0;d<n.columns;++d)if("undefined"===typeof s[d])n.debug&&e("No parser found for cell:",u[0].cells[d],"does it have a header?");else if(c=m(a,u[0].cells[d],d),c="undefined"===typeof t[d].id?c:t[d].format(c,
a,u[0].cells[d],d),c="no-parser"===s[d].id?"":s[d].format(c,a,u[0].cells[d],d),i.push(n.ignoreCase&&"string"===typeof c?c.toLowerCase():c),"numeric"===(s[d].type||"").toLowerCase())r[d]=Math.max(Math.abs(c)||0,r[d]||0);i[n.columns]=p;b.normalized.push(i)}b.colMax=r;n.totalRows+=b.normalized.length}n.showProcessing&&f.isProcessing(a);n.debug&&o("Building cache for "+k+" rows",l)}function w(a,b){var c=a.config,g=c.widgetOptions,d=a.tBodies,j=[],e=c.cache,i,l,k,m,r,n;if(p(e))return c.appender?c.appender(a,
j):a.isUpdating?c.$table.trigger("updateComplete",a):"";c.debug&&(n=new Date);for(r=0;r<d.length;r++)if(i=h(d[r]),i.length&&!i.hasClass(c.cssInfoBlock)){k=f.processTbody(a,i,!0);i=e[r].normalized;l=i.length;for(m=0;m<l;m++)j.push(i[m][c.columns].$row),(!c.appender||c.pager&&(!c.pager.removeRows||!g.pager_removeRows)&&!c.pager.ajax)&&k.append(i[m][c.columns].$row);f.processTbody(a,k,!1)}c.appender&&c.appender(a,j);c.debug&&o("Rebuilt table",n);!b&&!c.appender&&f.applyWidget(a);a.isUpdating&&c.$table.trigger("updateComplete",
a)}function z(a){var b,c,g,d,j,u,i,l=a.config;l.headerList=[];l.headerContent=[];l.debug&&(i=new Date);l.columns=f.computeColumnIndex(l.$table.children("thead, tfoot").children("tr"));d=l.cssIcon?'<i class="'+(l.cssIcon===f.css.icon?f.css.icon:l.cssIcon+" "+f.css.icon)+'"></i>':"";l.$headers=h(a).find(l.selectorHeaders).each(function(i){c=h(this);b=f.getColumnData(a,l.headers,i,!0);l.headerContent[i]=h(this).html();j=l.headerTemplate.replace(/\{content\}/g,h(this).html()).replace(/\{icon\}/g,d);l.onRenderTemplate&&
(g=l.onRenderTemplate.apply(c,[i,j]))&&"string"===typeof g&&(j=g);h(this).html('<div class="'+f.css.headerIn+'">'+j+"</div>");l.onRenderHeader&&l.onRenderHeader.apply(c,[i]);this.column=parseInt(h(this).attr("data-column"),10);var e=f.getData(c,b,"sortInitialOrder")||l.sortInitialOrder;this.order=/^d/i.test(e)||1===e?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;u=f.getData(c,b,"lockedOrder")||!1;"undefined"!==typeof u&&!1!==u&&(this.order=this.lockedOrder=/^d/i.test(u)||1===u?[1,1,1]:[0,0,0]);
c.addClass(f.css.header+" "+l.cssHeader);l.headerList[i]=this;c.parent().addClass(f.css.headerRow+" "+l.cssHeaderRow).attr("role","row");l.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});A(a);l.debug&&(o("Built headers:",i),e(l.$headers))}function y(a,b,c){var g=a.config;g.$table.find(g.selectorRemove).remove();t(a);s(a);D(g.$table,b,c)}function A(a){var b,c,g,d=a.config;d.$headers.each(function(j,e){c=h(e);g=f.getColumnData(a,d.headers,j,!0);b="false"===f.getData(e,g,"sorter")||
"false"===f.getData(e,g,"parser");e.sortDisabled=b;c[b?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+b);a.id&&(b?c.removeAttr("aria-controls"):c.attr("aria-controls",a.id))})}function x(a){var b,c,g=a.config,d=g.sortList,j=d.length,e=f.css.sortNone+" "+g.cssNone,i=[f.css.sortAsc+" "+g.cssAsc,f.css.sortDesc+" "+g.cssDesc],l=["ascending","descending"],k=h(a).find("tfoot tr").children().add(g.$extraHeaders).removeClass(i.join(" "));g.$headers.removeClass(i.join(" ")).addClass(e).attr("aria-sort",
"none");for(b=0;b<j;b++)if(2!==d[b][1]&&(a=g.$headers.not(".sorter-false").filter('[data-column="'+d[b][0]+'"]'+(1===j?":last":"")),a.length)){for(c=0;c<a.length;c++)a[c].sortDisabled||a.eq(c).removeClass(e).addClass(i[d[b][1]]).attr("aria-sort",l[d[b][1]]);k.length&&k.filter('[data-column="'+d[b][0]+'"]').removeClass(e).addClass(i[d[b][1]])}g.$headers.not(".sorter-false").each(function(){var a=h(this),b=this.order[(this.count+1)%(g.sortReset?3:2)],b=a.text()+": "+f.language[a.hasClass(f.css.sortAsc)?
"sortAsc":a.hasClass(f.css.sortDesc)?"sortDesc":"sortNone"]+f.language[0===b?"nextAsc":1===b?"nextDesc":"nextNone"];a.attr("aria-label",b)})}function G(a,b,c){if(a.isUpdating)return setTimeout(function(){G(a,b,c)},50);var g,d,j,e,i=a.config,l=!c[i.sortMultiSortKey],k=i.$table;k.trigger("sortStart",a);b.count=c[i.sortResetKey]?2:(b.count+1)%(i.sortReset?3:2);i.sortRestart&&(d=b,i.$headers.each(function(){if(this!==d&&(l||!h(this).is("."+f.css.sortDesc+",."+f.css.sortAsc)))this.count=-1}));d=b.column;
if(l){i.sortList=[];if(null!==i.sortForce){g=i.sortForce;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}g=b.order[b.count];if(2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}else{if(i.sortAppend&&1<i.sortList.length)for(j=0;j<i.sortAppend.length;j++)e=f.isValueInArray(i.sortAppend[j][0],i.sortList),0<=e&&i.sortList.splice(e,1);if(0<=f.isValueInArray(d,i.sortList))for(j=0;j<i.sortList.length;j++)e=i.sortList[j],g=i.$headers.filter('[data-column="'+
e[0]+'"]:last')[0],e[0]===d&&(e[1]=g.order[b.count],2===e[1]&&(i.sortList.splice(j,1),g.count=-1));else if(g=b.order[b.count],2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}if(null!==i.sortAppend){g=i.sortAppend;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}k.trigger("sortBegin",a);setTimeout(function(){x(a);E(a);w(a);k.trigger("sortEnd",a)},1)}function E(a){var b,c,g,d,j,e,i,h,k,m,r,n=0,q=a.config,s=q.textSorter||"",t=q.sortList,v=t.length,
w=a.tBodies.length;if(!q.serverSideSorting&&!p(q.cache)){q.debug&&(j=new Date);for(c=0;c<w;c++)e=q.cache[c].colMax,i=q.cache[c].normalized,i.sort(function(c,j){for(b=0;b<v;b++){d=t[b][0];h=t[b][1];n=0===h;if(q.sortStable&&c[d]===j[d]&&1===v)break;(g=/n/i.test(q.parsers&&q.parsers[d]?q.parsers[d].type||"":""))&&q.strings[d]?(g="boolean"===typeof q.string[q.strings[d]]?(n?1:-1)*(q.string[q.strings[d]]?-1:1):q.strings[d]?q.string[q.strings[d]]||0:0,k=q.numberSorter?q.numberSorter(c[d],j[d],n,e[d],a):
f["sortNumeric"+(n?"Asc":"Desc")](c[d],j[d],g,e[d],d,a)):(m=n?c:j,r=n?j:c,k="function"===typeof s?s(m[d],r[d],n,d,a):"object"===typeof s&&s.hasOwnProperty(d)?s[d](m[d],r[d],n,d,a):f["sortNatural"+(n?"Asc":"Desc")](c[d],j[d],d,a,q));if(k)return k}return c[q.columns].order-j[q.columns].order});q.debug&&o("Sorting on "+t.toString()+" and dir "+h+" time",j)}}function H(a,b){a[0].isUpdating&&a.trigger("updateComplete");h.isFunction(b)&&b(a[0])}function D(a,b,c){var g=a[0].config.sortList;!1!==b&&!a[0].isProcessing&&
g.length?a.trigger("sorton",[g,function(){H(a,c)},!0]):(H(a,c),f.applyWidget(a[0],!1))}function I(a){var b=a.config,c=b.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave".split(" ").join(b.namespace+" ")).bind("sortReset"+b.namespace,function(g,d){g.stopPropagation();b.sortList=[];x(a);E(a);w(a);h.isFunction(d)&&d(a)}).bind("updateAll"+b.namespace,function(g,d,
c){g.stopPropagation();a.isUpdating=!0;f.refreshWidgets(a,!0,!0);f.restoreHeaders(a);z(a);f.bindEvents(a,b.$headers,!0);I(a);y(a,d,c)}).bind("update"+b.namespace+" updateRows"+b.namespace,function(b,d,c){b.stopPropagation();a.isUpdating=!0;A(a);y(a,d,c)}).bind("updateCell"+b.namespace,function(g,d,j,f){g.stopPropagation();a.isUpdating=!0;c.find(b.selectorRemove).remove();var e,l,k;l=c.find("tbody");k=h(d);g=l.index(h.fn.closest?k.closest("tbody"):k.parents("tbody").filter(":first"));e=h.fn.closest?
k.closest("tr"):k.parents("tr").filter(":first");d=k[0];if(l.length&&0<=g){l=l.eq(g).find("tr").index(e);k=k.index();b.cache[g].normalized[l][b.columns].$row=e;e="undefined"===typeof b.extractors[k].id?m(a,d,k):b.extractors[k].format(m(a,d,k),a,d,k);d="no-parser"===b.parsers[k].id?"":b.parsers[k].format(e,a,d,k);b.cache[g].normalized[l][k]=b.ignoreCase&&"string"===typeof d?d.toLowerCase():d;if("numeric"===(b.parsers[k].type||"").toLowerCase())b.cache[g].colMax[k]=Math.max(Math.abs(d)||0,b.cache[g].colMax[k]||
0);D(c,j,f)}}).bind("addRows"+b.namespace,function(g,d,j,e){g.stopPropagation();a.isUpdating=!0;if(p(b.cache))A(a),y(a,j,e);else{var d=h(d).attr("role","row"),f,l,k,o,r,n=d.filter("tr").length,q=c.find("tbody").index(d.parents("tbody").filter(":first"));(!b.parsers||!b.parsers.length)&&t(a);for(g=0;g<n;g++){l=d[g].cells.length;r=[];o={child:[],$row:d.eq(g),order:b.cache[q].normalized.length};for(f=0;f<l;f++)if(k="undefined"===typeof b.extractors[f].id?m(a,d[g].cells[f],f):b.extractors[f].format(m(a,
d[g].cells[f],f),a,d[g].cells[f],f),k="no-parser"===b.parsers[f].id?"":b.parsers[f].format(k,a,d[g].cells[f],f),r[f]=b.ignoreCase&&"string"===typeof k?k.toLowerCase():k,"numeric"===(b.parsers[f].type||"").toLowerCase())b.cache[q].colMax[f]=Math.max(Math.abs(r[f])||0,b.cache[q].colMax[f]||0);r.push(o);b.cache[q].normalized.push(r)}D(c,j,e)}}).bind("updateComplete"+b.namespace,function(){a.isUpdating=!1}).bind("sorton"+b.namespace,function(b,d,j,e){var i=a.config;b.stopPropagation();c.trigger("sortStart",
this);var l,k,o,m,n,q=a.config,b=d||q.sortList;q.sortList=[];h.each(b,function(a,b){m=parseInt(b[0],10);if(o=q.$headers.filter('[data-column="'+m+'"]:last')[0]){k=(k=(""+b[1]).match(/^(1|d|s|o|n)/))?k[0]:"";switch(k){case "1":case "d":k=1;break;case "s":k=n||0;break;case "o":l=o.order[(n||0)%(q.sortReset?3:2)];k=0===l?1:1===l?0:2;break;case "n":o.count+=1;k=o.order[o.count%(q.sortReset?3:2)];break;default:k=0}n=0===a?k:n;l=[m,parseInt(k,10)||0];q.sortList.push(l);k=h.inArray(l[1],o.order);o.count=
0<=k?k:l[1]%(q.sortReset?3:2)}});x(a);i.delayInit&&p(i.cache)&&s(a);c.trigger("sortBegin",this);E(a);w(a,e);c.trigger("sortEnd",this);f.applyWidget(a);h.isFunction(j)&&j(a)}).bind("appendCache"+b.namespace,function(b,d,c){b.stopPropagation();w(a,c);h.isFunction(d)&&d(a)}).bind("updateCache"+b.namespace,function(c,d){(!b.parsers||!b.parsers.length)&&t(a);s(a);h.isFunction(d)&&d(a)}).bind("applyWidgetId"+b.namespace,function(c,d){c.stopPropagation();f.getWidgetById(d).format(a,b,b.widgetOptions)}).bind("applyWidgets"+
b.namespace,function(b,d){b.stopPropagation();f.applyWidget(a,d)}).bind("refreshWidgets"+b.namespace,function(b,d,c){b.stopPropagation();f.refreshWidgets(a,d,c)}).bind("destroy"+b.namespace,function(b,d,c){b.stopPropagation();f.destroy(a,d,c)}).bind("resetToLoadState"+b.namespace,function(){f.refreshWidgets(a,!0,!0);b=h.extend(!0,f.defaults,b.originalSettings);a.hasInitialized=!1;f.setup(a,b)})}var f=this;f.version="2.17.7";f.parsers=[];f.widgets=[];f.defaults={theme:"default",widthFixed:!1,showProcessing:!1,
headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],
widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",
header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};f.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"};
f.log=e;f.benchmark=o;f.construct=function(a){return this.each(function(){var b=h.extend(!0,{},f.defaults,a);b.originalSettings=a;!this.hasInitialized&&f.buildTable&&"TABLE"!==this.tagName?f.buildTable(this,b):f.setup(this,b)})};f.setup=function(a,b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?e("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",g=h(a),d=h.metadata;a.hasInitialized=!1;a.isProcessing=!0;
a.config=b;h.data(a,"tablesorter",b);b.debug&&h.data(a,"startoveralltimer",new Date);var j;j=h.fn.jquery.split(".");j[0]=parseInt(j[0],10);j=1<j[0]||1===j[0]&&4<=parseInt(j[1],10);b.supportsDataObject=j;b.string={max:1,min:-1,emptyMin:1,emptyMax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(g.attr("class"))||(c=""!==b.theme?" tablesorter-"+b.theme:"");b.table=a;b.$table=g.addClass(f.css.table+" "+b.tableClass+c).attr("role","grid");b.$headers=g.find(b.selectorHeaders);b.namespace=
b.namespace?"."+b.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);b.$table.children().children("tr").attr("role","row");b.$tbodies=g.children("tbody:not(."+b.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});b.$table.find("caption").length&&b.$table.attr("aria-labelledby","theCaption");b.widgetInit={};b.textExtraction=b.$table.attr("data-text-extraction")||b.textExtraction||"basic";z(a);if(a.config.widthFixed&&0===h(a).find("colgroup").length){var u=
h("<colgroup>"),i=h(a).width();h(a.tBodies[0]).find("tr:first").children(":visible").each(function(){u.append(h("<col>").css("width",parseInt(1E3*(h(this).width()/i),10)/10+"%"))});h(a).prepend(u)}t(a);b.totalRows=0;b.delayInit||s(a);f.bindEvents(a,b.$headers,!0);I(a);b.supportsDataObject&&"undefined"!==typeof g.data().sortlist?b.sortList=g.data().sortlist:d&&(g.metadata()&&g.metadata().sortlist)&&(b.sortList=g.metadata().sortlist);f.applyWidget(a,!0);0<b.sortList.length?g.trigger("sorton",[b.sortList,
{},!b.initWidgets,!0]):(x(a),b.initWidgets&&f.applyWidget(a,!1));b.showProcessing&&g.unbind("sortBegin"+b.namespace+" sortEnd"+b.namespace).bind("sortBegin"+b.namespace+" sortEnd"+b.namespace,function(d){clearTimeout(b.processTimer);f.isProcessing(a);if(d.type==="sortBegin")b.processTimer=setTimeout(function(){f.isProcessing(a,true)},500)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&f.benchmark("Overall initialization time",h.data(a,"startoveralltimer"));g.trigger("tablesorter-initialized",a);
"function"===typeof b.initialized&&b.initialized(a)};f.getColumnData=function(a,b,c,g){if(!("undefined"===typeof b||null===b)){var a=h(a)[0],d,f=a.config;if(b[c])return g?b[c]:b[f.$headers.index(f.$headers.filter('[data-column="'+c+'"]:last'))];for(d in b)if("string"===typeof d&&(a=g?f.$headers.eq(c).filter(d):f.$headers.filter('[data-column="'+c+'"]:last').filter(d),a.length))return b[d]}};f.computeColumnIndex=function(a){var b=[],c=0,g,d,f,e,i,l,k,o,m,n;for(g=0;g<a.length;g++){i=a[g].cells;for(d=
0;d<i.length;d++){f=i[d];e=h(f);l=f.parentNode.rowIndex;e.index();k=f.rowSpan||1;o=f.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(f=0;f<b[l].length+1;f++)if("undefined"===typeof b[l][f]){m=f;break}c=Math.max(m,c);e.attr({"data-column":m});for(f=l;f<l+k;f++){"undefined"===typeof b[f]&&(b[f]=[]);n=b[f];for(e=m;e<m+o;e++)n[e]="x"}}}return c+1};f.isProcessing=function(a,b,c){var a=h(a),g=a[0].config,d=c||a.find("."+f.css.header);b?("undefined"!==typeof c&&0<g.sortList.length&&(d=d.filter(function(){return this.sortDisabled?
!1:0<=f.isValueInArray(parseFloat(h(this).attr("data-column")),g.sortList)})),a.add(d).addClass(f.css.processing+" "+g.cssProcessing)):a.add(d).removeClass(f.css.processing+" "+g.cssProcessing)};f.processTbody=function(a,b,c){a=h(a)[0];if(c)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),c=h.fn.detach?b.detach():b.remove();c=h(a).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove();a.isProcessing=!1};f.clearTableBody=function(a){h(a)[0].config.$tbodies.children().detach()};
f.bindEvents=function(a,b,c){var a=h(a)[0],g,d=a.config;!0!==c&&(d.$extraHeaders=d.$extraHeaders?d.$extraHeaders.add(b):b);b.find(d.selectorSort).add(b.filter(d.selectorSort)).unbind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" "),function(c,f){var e;e=c.type;if(!((c.which||c.button)!==1&&!/sort|keyup/.test(e)||e==="keyup"&&c.which!==13)&&!(e==="mouseup"&&f!==true&&(new Date).getTime()-g>250)){if(e==="mousedown"){g=(new Date).getTime();
return/(input|select|button|textarea)/i.test(c.target.tagName)?"":!d.cancelSelection}d.delayInit&&p(d.cache)&&s(a);e=h.fn.closest?h(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:h(this).parents("th, td")[0];e=d.$headers[b.index(e)];e.sortDisabled||G(a,e,c)}});d.cancelSelection&&b.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};f.restoreHeaders=function(a){var b=h(a)[0].config;b.$table.find(b.selectorHeaders).each(function(a){h(this).find("."+
f.css.headerIn).length&&h(this).html(b.headerContent[a])})};f.destroy=function(a,b,c){a=h(a)[0];if(a.hasInitialized){f.refreshWidgets(a,!0,!0);var g=h(a),d=a.config,e=g.find("thead:first"),o=e.find("tr."+f.css.headerRow).removeClass(f.css.headerRow+" "+d.cssHeaderRow),i=g.find("tfoot:first > tr").children("th, td");!1===b&&0<=h.inArray("uitheme",d.widgets)&&(g.trigger("applyWidgetId",["uitheme"]),g.trigger("applyWidgetId",["zebra"]));e.find("tr").not(o).remove();g.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState".split(" ").join(d.namespace+
" "));d.$headers.add(i).removeClass([f.css.header,d.cssHeader,d.cssAsc,d.cssDesc,f.css.sortAsc,f.css.sortDesc,f.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");o.find(d.selectorSort).unbind(["mousedown","mouseup","keypress"].join(d.namespace+" "));f.restoreHeaders(a);g.toggleClass(f.css.table+" "+d.tableClass+" tablesorter-"+d.theme,!1===b);a.hasInitialized=!1;delete a.config.cache;"function"===typeof c&&c(a)}};f.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};f.sortNatural=function(a,b){if(a===b)return 0;var c,g,d,e,h,i;g=f.regex;if(g.hex.test(b)){c=parseInt(a.match(g.hex),16);d=parseInt(b.match(g.hex),16);if(c<d)return-1;if(c>d)return 1}c=a.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");g=b.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");i=Math.max(c.length,g.length);for(h=0;h<i;h++){d=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;e=isNaN(g[h])?g[h]||0:parseFloat(g[h])||0;if(isNaN(d)!==
isNaN(e))return isNaN(d)?1:-1;typeof d!==typeof e&&(d+="",e+="");if(d<e)return-1;if(d>e)return 1}return 0};f.sortNaturalAsc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:c||1:f.sortNatural(a,b)};f.sortNaturalDesc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===b&&0!==c?"boolean"===typeof c?c?
1:-1:-c||-1:f.sortNatural(b,a)};f.sortText=function(a,b){return a>b?1:a<b?-1:0};f.getTextValue=function(a,b,c){if(c){for(var g=a?a.length:0,d=c+b,c=0;c<g;c++)d+=a.charCodeAt(c);return b*d}return 0};f.sortNumericAsc=function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return a-b};f.sortNumericDesc=
function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:d||1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:-d||-1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return b-a};f.sortNumeric=function(a,b){return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",
E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};f.replaceAccents=function(a){var b,c="[",g=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in g)"string"===typeof b&&(c+=g[b],f.characterRegexArray[b]=RegExp("["+g[b]+"]","g"));f.characterRegex=
RegExp(c+"]")}if(f.characterRegex.test(a))for(b in g)"string"===typeof b&&(a=a.replace(f.characterRegexArray[b],b));return a};f.isValueInArray=function(a,b){var c,g=b.length;for(c=0;c<g;c++)if(b[c][0]===a)return c;return-1};f.addParser=function(a){var b,c=f.parsers.length,g=!0;for(b=0;b<c;b++)f.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(g=!1);g&&f.parsers.push(a)};f.getParserById=function(a){if("false"==a)return!1;var b,c=f.parsers.length;for(b=0;b<c;b++)if(f.parsers[b].id.toLowerCase()===
a.toString().toLowerCase())return f.parsers[b];return!1};f.addWidget=function(a){f.widgets.push(a)};f.hasWidget=function(a,b){a=h(a);return a.length&&a[0].config&&a[0].config.widgetInit[b]||!1};f.getWidgetById=function(a){var b,c,g=f.widgets.length;for(b=0;b<g;b++)if((c=f.widgets[b])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===a.toLowerCase())return c};f.applyWidget=function(a,b){var a=h(a)[0],c=a.config,g=c.widgetOptions,d=[],e,m,i;if(!(!1!==b&&a.hasInitialized&&(a.isApplyingWidgets||a.isUpdating)))if(c.debug&&
(e=new Date),c.widgets.length&&(a.isApplyingWidgets=!0,c.widgets=h.grep(c.widgets,function(a,b){return h.inArray(a,c.widgets)===b}),h.each(c.widgets||[],function(a,b){if((i=f.getWidgetById(b))&&i.id)i.priority||(i.priority=10),d[a]=i}),d.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),h.each(d,function(d,e){if(e){if(b||!c.widgetInit[e.id])c.widgetInit[e.id]=!0,e.hasOwnProperty("options")&&(g=a.config.widgetOptions=h.extend(!0,{},e.options,g)),e.hasOwnProperty("init")&&
e.init(a,e,c,g);!b&&e.hasOwnProperty("format")&&e.format(a,c,g,!1)}})),setTimeout(function(){a.isApplyingWidgets=false},0),c.debug)m=c.widgets.length,o("Completed "+(!0===b?"initializing ":"applying ")+m+" widget"+(1!==m?"s":""),e)};f.refreshWidgets=function(a,b,c){var a=h(a)[0],g,d=a.config,j=d.widgets,o=f.widgets,i=o.length;for(g=0;g<i;g++)if(o[g]&&o[g].id&&(b||0>h.inArray(o[g].id,j)))d.debug&&e('Refeshing widgets: Removing "'+o[g].id+'"'),o[g].hasOwnProperty("remove")&&d.widgetInit[o[g].id]&&(o[g].remove(a,
d,d.widgetOptions),d.widgetInit[o[g].id]=!1);!0!==c&&f.applyWidget(a,b)};f.getData=function(a,b,c){var e="",a=h(a),d,f;if(!a.length)return"";d=h.metadata?a.metadata():!1;f=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?e+=a.data(c)||a.data(c.toLowerCase()):d&&"undefined"!==typeof d[c]?e+=d[c]:b&&"undefined"!==typeof b[c]?e+=b[c]:" "!==f&&f.match(" "+c+"-")&&(e=f.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return h.trim(e)};f.formatFloat=function(a,
b){if("string"!==typeof a||""===a)return a;var c,a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?h.trim(a):c};f.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}});var m=h.tablesorter;h.fn.extend({tablesorter:m.construct});m.addParser({id:"no-parser",is:function(){return!1},
format:function(){return""},type:"text"});m.addParser({id:"text",is:function(){return!0},format:function(e,o){var p=o.config;e&&(e=h.trim(p.ignoreCase?e.toLocaleLowerCase():e),e=p.sortLocaleCompare?m.replaceAccents(e):e);return e},type:"text"});m.addParser({id:"digit",is:function(e){return m.isDigit(e)},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"currency",
is:function(e){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((e||"").replace(/[+\-,. ]/g,""))},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"ipAddress",is:function(e){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)},format:function(e,h){var p,v=e?e.split("."):"",t="",s=v.length;
for(p=0;p<s;p++)t+=("00"+v[p]).slice(-3);return e?m.formatFloat(t,h):e},type:"numeric"});m.addParser({id:"url",is:function(e){return/^(https?|ftp|file):\/\//.test(e)},format:function(e){return e?h.trim(e.replace(/(https?|ftp|file):\/\//,"")):e},type:"text"});m.addParser({id:"isoDate",is:function(e){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(e)},format:function(e,h){return e?m.formatFloat(""!==e?(new Date(e.replace(/-/g,"/"))).getTime()||e:"",h):e},type:"numeric"});m.addParser({id:"percent",is:function(e){return/(\d\s*?%|%\s*?\d)/.test(e)&&
15>e.length},format:function(e,h){return e?m.formatFloat(e.replace(/%/g,""),h):e},type:"numeric"});m.addParser({id:"usLongDate",is:function(e){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date(e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"shortDate",is:function(e){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((e||
"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(e,h,p,v){if(e){var p=h.config,t=p.$headers.filter("[data-column="+v+"]:last"),v=t.length&&t[0].dateFormat||m.getData(t,m.getColumnData(h,p.headers,v),"dateFormat")||p.dateFormat,e=e.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===v&&(e=e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,
"$1/$2/$3"))}return e?m.formatFloat((new Date(e)).getTime()||e,h):e},type:"numeric"});m.addParser({id:"time",is:function(e){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date("2000/01/01 "+e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"metadata",is:function(){return!1},format:function(e,m,p){e=m.config;e=!e.parserMetadataName?"sortValue":e.parserMetadataName;return h(p).metadata()[e]},
type:"numeric"});m.addWidget({id:"zebra",priority:90,format:function(e,o,p){var v,t,s,w,z,y,A=RegExp(o.cssChildRow,"i"),x=o.$tbodies;o.debug&&(z=new Date);for(e=0;e<x.length;e++)v=x.eq(e),y=v.children("tr").length,1<y&&(s=0,v=v.children("tr:visible").not(o.selectorRemove),v.each(function(){t=h(this);A.test(this.className)||s++;w=0===s%2;t.removeClass(p.zebra[w?1:0]).addClass(p.zebra[w?0:1])}));o.debug&&m.benchmark("Applying Zebra widget",z)},remove:function(e,m,p){for(var v,m=m.$tbodies,t=(p.zebra||
["even","odd"]).join(" "),p=0;p<m.length;p++)v=h.tablesorter.processTbody(e,m.eq(p),!0),v.children().removeClass(t),h.tablesorter.processTbody(e,v,!1)}});!0;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tables-sortable', location = 'node_modules/@atlassian/aui/src/js/aui/tables-sortable.js' */
("undefined"===typeof window?global:window).__e53c69a9456096918821d2c4d35fe46a=function(){function h(e){var b=i;e.find("th").each(function(c,e){var a=(0,d.default)(e);b.headers[c]={};a.hasClass("aui-table-column-unsortable")?b.headers[c].sorter=!1:(a.attr("tabindex","0"),a.wrapInner("<span class='aui-table-header-content'/>"),a.hasClass("aui-table-column-issue-key")&&(b.headers[c].sorter="issue-key"))});e.tablesorter(b)}var f={};"use strict";Object.defineProperty(f,"__esModule",{value:!0});var a=
__2fd777cca7fe187ff4048afabed6a6b5,d=a&&a.__esModule?a:{"default":a};__47c4166c48b8c662516d162bc8164e32;var a=(a=__dd0dee18d8910035abf3563b0855343d)&&a.__esModule?a:{"default":a},i={sortMultiSortKey:"",headers:{},debug:!1,tabIndex:!1},g={setup:function(){d.default.tablesorter.addParser({id:"issue-key",is:function(){return!1},format:function(a){var b=a.split("-"),a=b[1],b=(b[0]+"..........").slice(0,10);return b+=("000000"+a).slice(-6)},type:"text"});d.default.tablesorter.addParser({id:"textSortAttributeParser",
is:function(a,b,c){return c.hasAttribute("data-sort-value")&&(!c.hasAttribute("data-sort-type")||"text"===c.getAttribute("data-sort-type"))},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"text"});d.default.tablesorter.addParser({id:"numericSortAttributeParser",is:function(a,b,c){return"numeric"===c.getAttribute("data-sort-type")&&c.hasAttribute("data-sort-value")},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"numeric"});(0,d.default)(".aui-table-sortable").each(function(){h((0,
d.default)(this))})},setTableSortable:function(a){h(a)}};(0,d.default)(g.setup);(0,a.default)("tablessortable",g);f.default=g;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
define("confluence-sortable-tables/sortable-tables",["jquery","ajs","document"],function(b,g,h){function i(){var a=g.Meta.get("date.format"),b;a&&0!==a.length&&(a=a.toLowerCase()[0],"m"===a?b="mmddyyyy":"d"===a?b="ddmmyyyy":"y"===a&&(b="yyyymmdd"));return b}var f;return{init:function(){f=b("table").filter(function(){var a=b(this),e=a.find("td, th"),d=this.rows.length&&b(this.rows[0].cells),c;if("false"===a.attr("data-sortable")||-1<this.className.indexOf("tablesorter"))return!1;c=b.Event("makeSortable.SortableTables");
a.trigger(c);if(c.isDefaultPrevented()||!d||0===d.length)return!1;c=0;for(var f=e.length;c<f;c++)if(a=e[c],1!=a.rowSpan||1!=a.colSpan)return!1;return b(this.rows[0]).find("table").length||d.filter("th").length!==d.length||d.hasClass("nohighlight")?!1:this.rows[1]})},enable:function(){f.each(function(){if(-1<this.className.indexOf("tablesorter")||b(this).find("> thead:first").is(":visible"))return!0;var a=this.removeChild(this.tBodies[0]),e=b(a.children),e=Array.prototype.shift.call(e),d=h.createDocumentFragment(),
c=h.createElement("thead");d.appendChild(c);c.appendChild(e);d.appendChild(a);this.appendChild(d)});f.tablesorter({cssHeader:"sortableHeader",delayInit:!0,textExtraction:function(a){return g.trim(b(a).text())},dateFormat:i()})},refresh:function(){this.init();this.enable()}}});require("confluence/module-exporter").safeRequire("confluence-sortable-tables/sortable-tables",function(b){require("ajs").toInit(function(){b.init();setTimeout(b.enable,100)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
Confluence.DocThemeUtils=Confluence.DocThemeUtils||(function(f){var e;function c(){return(a().length)?true:false}function a(){if(!e){e=f("#splitter-content")}return e}function g(i){var h=f(i);f(i).appendTo(c()?a():f("body"));return h}function b(){return c()?a().scrollTop():f(document).scrollTop()}function d(){return c()?a().scrollLeft():f(document).scrollLeft()}return{isDocTheme:c,appendAbsolutePositionedElement:g,getMainContentScrollTop:b,getMainContentScrollLeft:d,getDocThemeContentElement:a}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
Confluence.ScrollingInlineDialog=function(a,d,c,b){var g=Confluence.DocThemeUtils.getDocThemeContentElement();var e=Confluence.DocThemeUtils.isDocTheme();b=b||{};if(!b.container&&e){b.container=g}var f=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=e?g.width():AJS.$(window).width();var K=s.target.position();K.top+=e?g.scrollTop():0;K.left+=e?g.scrollLeft():0;var i=s.target.outerWidth();var m=K.left+i/2;var C=e?g.scrollTop()+AJS.$(window).height()-AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+AJS.$(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(e)?(K.top-g.scrollTop()):(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=e?g.scrollTop()+x+AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=e?g:AJS.$("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(AJS.$(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!b.calculatePositions){b.calculatePositions=f}return AJS.InlineDialog.call(this,a,d,c,b)};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
Confluence.HighlightAction=(function(f){var d={};var c;var b={MAINCONTENT_AND_COMMENT:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".wiki-content"),o)},MAINCONTENT_ONLY:function(o){c=c||f(".wiki-content").first();return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(c,o)},COMMENT_ONLY:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".comment-content"),o)}};function a(p,q){var o={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[p]=f.extend(o,q)}function l(o){var p=d[o];if(!p){p=function(){AJS.logError("The button with key "+o+" doesn't have a registered handler")}}return p}function e(p){var o=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return f.ajax({type:"POST",contentType:"application/json",url:o,data:JSON.stringify(p)})}function g(o){var p=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return f.ajax({type:"POST",contentType:"application/json",url:p,data:JSON.stringify(o)})}function k(q,p,r){var o=i(r);o.tableColumnIndex=p;o.cellModifications=q;return o}function h(o,q){var p=i(q);p.xmlModification=o[0].xmlInsertion;return p}function j(o,q){var p=i(q);p.xmlModification=o;return p}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}function i(p){var o={};o.pageId=p.pageId;o.selectedText=p.selectedText;o.index=p.index;o.numMatches=p.numMatches;o.lastFetchTime=n();return o}function n(){return f("meta[name='confluence-request-time']").attr("content")}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:e,insertContentsInTableColumnCells:g,createTableInsertionBean:k,createInsertionBean:h,createXMLModificationBean:j,clearTextSelection:m,WORKING_AREA:b}})(AJS.$);Confluence.HighlightAction.RangeHelper=(function(h){function j(p){return{area:c(p),text:k(p),html:n(p),containingElement:d(p),range:p}}function c(q){var r=Confluence.DocThemeUtils.getMainContentScrollTop();var s=Confluence.DocThemeUtils.getMainContentScrollLeft();var w=q.getClientRects();if(!w.length&&q.parentElement()){var x=h(q.parentElement());var p=x.offset();w=[{top:p.top-((Confluence.DocThemeUtils.isDocTheme())?0:r),left:p.left-((Confluence.DocThemeUtils.isDocTheme())?0:s),bottom:p.top+x.height(),right:p.left+x.width()}]}var z=g(q,w);var u=function(E,D){var C={};C.top=E.top;C.left=E.left+s;C.bottom=D.bottom;if(E.left>=D.right){C.right=E.right}else{C.right=D.right}C.right=C.right+s;C.top=C.top+r;C.bottom=C.bottom+r;C.width=C.right-C.left;C.height=C.bottom-C.top;return C};var t=function(D){var C={};C.width=D.right-D.left;C.height=D.bottom-D.top;C.left=D.left+s;C.right=D.right+s;C.top=D.top+r;C.bottom=D.bottom+r;return C};var B=function(C){if(Confluence.DocThemeUtils.isDocTheme()){var D=Confluence.DocThemeUtils.getDocThemeContentElement().offset();C.left=C.left-D.left;C.right=C.right-D.left;C.top=C.top-D.top;C.bottom=C.bottom-D.top}return C};var A=B(u(z.first,z.last));var v=B(t(z.first));if(Confluence.HighlightAction.debug){var y=h("<div>").attr("id","highlight-actions-debug-helper");Confluence.DocThemeUtils.appendAbsolutePositionedElement(y).css(h.extend({position:"absolute",outline:"1px solid red"},A))}return{first:v,average:A}}function k(q){var p=(q.text!=undefined)?q.text:q.toString();return i(p)}function n(p){return(p.cloneContents)?h("<div>").append(p.cloneContents()).html():p.htmlText}function d(q){if(q.commonAncestorContainer){var p=q.commonAncestorContainer;if(p.nodeType==3){return p.parentNode}return p}else{if(q.parentElement){return q.parentElement()}}}function g(r,q){var p={};p.first=q[0];p.last=q[q.length-1];if(r.endOffset!=="undefined"){if(r.endOffset==0&&q.length>1){p.last=q[q.length-2]}}return p}function e(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type=="None"||document.selection.createRange().htmlText=="")){return false}var s;if(window.getSelection){var p=window.getSelection();s=p.getRangeAt(p.rangeCount-1)}else{if(document.selection){s=document.selection.createRange()}}if(/^\s*$/.test(k(s))){var q=n(s);if(!q){return false}var r=q.toLowerCase().indexOf("<img ")!=-1;if(!r){return false}}if(!m(h(".wiki-content"),s)){return false}return s}function m(p,s){var q=d(s);var r=function(){var t=false;h.each(p,function(u,v){if(v===q||h.contains(v,q)){t=true;return false}});return t};return r()}function b(r,q){var p=k(o(r,q));var t=h.trim(k(q));var s=a(t,r);p=p.replace(/\s*$/,"");return{pageId:AJS.Meta.get("page-id"),selectedText:t,index:h.inArray(p.length-t.length,s),numMatches:s.length}}function f(p){if(document.createRange){return p.text()}else{range=document.body.createTextRange();range.moveToElementText(p.get(0));return range.text}}function o(r,q){var p;if(document.createRange){p=document.createRange();p.setStart(r.get(0),0);p.setEnd(q.endContainer,q.originalEndOffset)}else{p=document.body.createTextRange();p.moveToElementText(r.get(0));p.setEndPoint("EndToEnd",q)}return p}function a(u,s){var q=f(s);q=l(u,s.clone(),q);q=i(q);var t=0;var r=-1;var p=[];while((r=q.indexOf(u,t))>-1){p.push(r);t=r+1}return p}function l(u,t,r){var s=t.find('.user-mention, a[href^="/"]');t.find('.conf-macro[data-hasbody="false"]').each(function(){if(h(this).text().indexOf(u)>-1){s=s.add(this)}});if(s.length>0){var p=u.replace(/\S/g," ");var q=new RegExp(u.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");s.each(function(){var v=h(this).text();h(this).text(v.replace(q,p))});return f(t)}return r}function i(p){return p.replace(/\u00a0/g,"\u0020")}return{getRangeOption:j,getUserSelectionRange:e,getSelectionRects:c,getSelectionText:k,getSelectionHTML:n,getContainingElement:d,getFirstAndLastSelectionRect:g,isSelectionInsideContent:m,computeSearchTextObject:b}})(AJS.$);AJS.toInit(function(f){var i=f(".wiki-content").first();var g={ELEMENT_NODE:1,TEXT_NODE:3};var k={IMAGE:"IMG"};var a=f("<div>").attr("id","action-dialog-target");var d;var j="selection-action-panel";var b;var e;function o(){var r=Confluence.getContextPath()+"/rest/highlighting/1.0/panel-items";var q=AJS.Meta.get("page-id");if(q!=undefined){r=r+"?pageId="+q}var s=f.get(r,function(t){if(t.length){m(t)}});h(s)}function m(v){var y=c();var q=29;var z=false;var B=v.length*q;var A=Confluence.HighlightPanel.Templates.panelContent({webItems:v});var x=false;var s=function(D,C,E){if(!x){D.append(A);D.find(".aui-button").tooltip({gravity:"s"});l(D.parent());D.find("button").click(function(H){var F=f(this).attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);z=true;d.hide();var G=Confluence.HighlightAction.RangeHelper.getRangeOption(b);if(f.trim(G.text)!==""){G.searchText=Confluence.HighlightAction.RangeHelper.computeSearchTextObject(i,b)}I.onClick(G)})}E();x=true;return false};var w=function(C){var D=false;C.find("button").each(function(E){var G=f(this);var F=G.attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);var H=I.shouldDisplay(b);G.css("display",H?"inline-block":"none");D=D||H});if(!D){d.hide()}else{C.find(".contents").width("auto")}};var r=function(){Confluence.HighlightAction.Analytics.sendAnalyticsForOpeningHighlightOptionPanel();w(this.popup);y.bindHideEvents();a.show()};var u=function(){y.unbindHideEvents();a.hide()};var t={centerOnHighlight:true,onTop:true,fadeTime:0,width:B,persistent:true,initCallback:r,hideCallback:u};d=Confluence.ScrollingInlineDialog(a,j,s,t)}function l(q){q.children().attr("unselectable","on").on("selectstart",false)}function h(s){var q;var r=0;var t=1000;f(document).on("mouseup",function(u){s.done(function(w){if(!(w&&w.length>0)){return}var v=f(u.target);if(v.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(q);var x=t;if(f(d[0]).is(":visible")){x=r}q=setTimeout(function(){n()},x)},r)})});s.done(function(){AJS.bind("quickedit.success",function(){d.hide()})})}function n(){b=Confluence.HighlightAction.RangeHelper.getUserSelectionRange();var q=function(t){return f.trim(t.toString())!==""};b.originalEndOffset=b.endOffset;if(!b||!q(b)){d.hide();return}var s=Confluence.HighlightAction.RangeHelper.getSelectionRects(b);if(!s){return}var r=p(s);if(r||!f(d[0]).is(":visible")){f(d[0]).hide();d.show()}}function c(){var t=function(){v();s()};var w=function(){q();y()};var r=false;var x=j+".inline-dialog-check";var v=function(){if(!r){f("body").bind("click."+x,function(A){var z=f(A.target);if(z.closest("#inline-dialog-"+j+" .contents").length===0){if(!b){d.hide()}}});r=true}};var q=function(){if(r){f("body").unbind("click."+x)}r=false};var u=function(z){if(z.keyCode===27){d.hide()}};var s=function(){f(document).on("keydown",u)};var y=function(){f(document).off("keydown",u)};return{bindHideEvents:t,unbindHideEvents:w}}function p(r){Confluence.DocThemeUtils.appendAbsolutePositionedElement(a);var q=false;if(!e||r.first.top!=e.first.top||r.first.height!=e.first.height||r.first.left!=e.first.left||r.first.width!=e.first.width){a.css({top:r.first.top,height:r.first.height,left:r.first.left,width:r.first.width});e=r;q=true}return q}o()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
AJS.toInit(function(f){var a=true;var h=false;var d="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";function b(l){var k=l.getBody().createTextRange();k.moveToElementText(l.getBody());k.collapse(false);k.select()}function e(){var k=40;if(Confluence.DocThemeUtils.isDocTheme()){var l=Confluence.DocThemeUtils.getDocThemeContentElement();var m=l.scrollTop()-f("#header").height()+f("#rte-toolbar").offset().top;l.scrollTop(m-k)}else{var m=f("#rte-toolbar").offset().top;f(document).scrollTop(m-k)}}function j(l,m){var n="<p><br/></p>";if(f.browser.msie&&!h){b(l);n="<p></p>"}var k="<blockquote><p>"+m.html+"</p></blockquote>"+n;l.execCommand("mceInsertContent",false,k);h=false}function i(k){Confluence.HighlightAction.clearTextSelection();setTimeout(function(){var l=AJS&&AJS.Rte&&AJS.Rte.getEditor&&AJS.Rte.getEditor();if(l){Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment();e();j(l,k)}else{Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment(a);h=true;var m=function(){j(AJS.Rte.getEditor(),k);AJS.unbind("quickedit.visible",m)};AJS.bind("quickedit.visible",m);c(g(k.containingElement))}},0)}function g(k){var l=f(k).closest("div.comment");return l}function c(k){if(!k.length>0){f(".quick-comment-prompt").click()}else{k.find(".comment-actions .action-reply-comment").click()}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(d,{onClick:i,shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
Confluence.HighlightAction.Analytics=(function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){AJS.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.HighlightPanel.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_ignored) {
  var output = '';
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output += '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" title="' + soy.$$escapeHtml(webItemData3.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/></button>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.HighlightPanel.Templates.panelContent.soyTemplateName = 'Confluence.HighlightPanel.Templates.panelContent';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){var a=function(b){this.$=b;this.createToggleFunction=function(e){var d=this.$;return function c(i){if(typeof e!="undefined"&&!e(i)){return}var f=d(this),g=d(".expand-control-icon",f),h=d(".expand-content",f.closest(".expand-container")).first();var j;if(h.hasClass("expand-hidden")){h.css("display","block");h.animate({opacity:1});j="expand"}else{h.animate({opacity:0},{complete:function(){h.hide()}});j="collapse"}h.toggleClass("expand-hidden");g.toggleClass("expanded");AJS.trigger("analyticsEvent",{name:"confluence.expand-macro.expand-click",data:{userAction:j}})}};this.getExpandElements=function(c){return this.$(".expand-control",c)}};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.ExpandMacro={bind:function(b,c,g,f){var e=new a(b);var d=e.getExpandElements(c);d.length&&d.bind(g,e.createToggleFunction(f))}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function(a){Confluence.Plugins.ExpandMacro.bind(a,a("body"),"click keyup",function(b){return !(b.type=="keyup"&&b.keyCode!=13)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.SharelinksUrlMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_ignored) {
  return '<a class="aui-button sharelinks-urlmacro-button" href="' + Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data) + '"><span>' + soy.$$escapeHtml("\u5728Confluence\u4e0a\u5206\u4eab") + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink';
}


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_ignored) {
  return 'javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'' + soy.$$filterNoAutoescape(opt_data.bookmarkletActionURL) + '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("\u62d6\u52a8\u6b64\u94fe\u63a5\u5230\u60a8\u7684\u5de5\u5177\u680f");return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jsUri', location = '/includes/js/third-party/jsUri.js' */
(function(){function g(a){a=decodeURIComponent(a);return a=a.replace("+"," ")}function h(a){var c,b,f,e,d=[];if("undefined"===typeof a||null===a||""===a)return d;0===a.indexOf("?")&&(a=a.substring(1));c=a.toString().split(/[&;]/);for(a=0;a<c.length;a++)b=c[a],f=b.split("="),e=f[0],b=-1===b.indexOf("=")?null:null===f[1]?"":f[1],d.push([e,b]);return d}function d(a){var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a||
""),b={};"source protocol authority userInfo user password host port relative path directory file query anchor".split(" ").forEach(function(a,e){b[a]=c[e]||""});this.uriParts=b;this.queryPairs=h(this.uriParts.query);this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,c){for(var b=0,f=this.length;b<f;++b)a.call(c||this,this[b],b,this)});"protocol userInfo host port path anchor".split(" ").forEach(function(a){d.prototype[a]=function(c){typeof c!=="undefined"&&
(this.uriParts[a]=c);return this.uriParts[a]}});d.prototype.hasAuthorityPrefix=function(a){if(typeof a!=="undefined")this.hasAuthorityPrefixUserPref=a;return this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref};d.prototype.query=function(a){var c="",b;if(typeof a!=="undefined")this.queryPairs=h(a);for(a=0;a<this.queryPairs.length;a++){b=this.queryPairs[a];c.length>0&&(c=c+"&");c=b[1]===null?c+b[0]:c+b.join("=")}return c.length>0?"?"+c:c};
d.prototype.getQueryParamValue=function(a){var c,b;for(b=0;b<this.queryPairs.length;b++){c=this.queryPairs[b];if(g(a)===g(c[0]))return c[1]}};d.prototype.getQueryParamValues=function(a){var c=[],b,f;for(b=0;b<this.queryPairs.length;b++){f=this.queryPairs[b];g(a)===g(f[0])&&c.push(f[1])}return c};d.prototype.deleteQueryParam=function(a,c){var b=[],f,e,d,h;for(f=0;f<this.queryPairs.length;f++){e=this.queryPairs[f];d=g(e[0])===g(a);h=g(e[1])===g(c);(arguments.length===1&&!d||arguments.length===2&&!d&&
!h)&&b.push(e)}this.queryPairs=b;return this};d.prototype.addQueryParam=function(a,c,b){if(arguments.length===3&&b!==-1){b=Math.min(b,this.queryPairs.length);this.queryPairs.splice(b,0,[a,c])}else arguments.length>0&&this.queryPairs.push([a,c]);return this};d.prototype.replaceQueryParam=function(a,c,b){var d=-1,e,h;if(arguments.length===3){for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)&&decodeURIComponent(h[1])===g(b)){d=e;break}}this.deleteQueryParam(a,b).addQueryParam(a,
c,d)}else{for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)){d=e;break}}this.deleteQueryParam(a);this.addQueryParam(a,c,d)}return this};"protocol hasAuthorityPrefix userInfo host port path query anchor".split(" ").forEach(function(a){var c="set"+a.charAt(0).toUpperCase()+a.slice(1);d.prototype[c]=function(b){this[a](b);return this}});d.prototype.scheme=function(){var a="";if(this.protocol()){a=a+this.protocol();this.protocol().indexOf(":")!==this.protocol().length-1&&(a=
a+":");a=a+"//"}else this.hasAuthorityPrefix()&&this.host()&&(a=a+"//");return a};d.prototype.origin=function(){var a=this.scheme();if(this.userInfo()&&this.host()){a=a+this.userInfo();this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a=a+"@")}if(this.host()){a=a+this.host();this.port()&&(a=a+(":"+this.port()))}return a};d.prototype.toString=function(){var a=this.origin();if(this.path())a=a+this.path();else if(this.host()&&(this.query().toString()||this.anchor()))a=a+"/";if(this.query().toString()){this.query().toString().indexOf("?")!==
0&&(a=a+"?");a=a+this.query().toString()}if(this.anchor()){this.anchor().indexOf("#")!==0&&(a=a+"#");a=a+this.anchor()}return a};d.prototype.clone=function(){return new d(this.toString())};define("confluence/jsUri",function(){return d})})(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
(function(g){function f(n){var i,o;if(n.offsetX===undefined){var m=0,l=0,k=n.target,j;do{if(k.scrollTop!=0||k.scrollLeft!=0){j=k}m+=k.offsetLeft;l+=k.offsetTop;k=k.offsetParent}while(k&&k!=k.offsetParent);i=n.pageX+(j?j.scrollLeft:0)-m;o=n.pageY+(j?j.scrollTop:0)-l}else{i=n.offsetX;o=n.offsetY}return i>=3&&i<=14&&o>=3&&o<=14}function e(i){return i.currentTarget===i.target}function d(j){var i="page";if(j.closest("table.tasks-report").length){i="report"}else{if(j.closest("#task-container").length){i="mytasks"}else{if(j.closest("ul.inline-task-list").length){i="task"}}}return i}function h(l,j){var i=l.attr("data-inline-task-id");var k=l.find(j).first();if(k.closest("li").attr("data-inline-task-id")===i){return k}else{return g()}}function c(j){var k=""+j.getFullYear();var l=""+(j.getMonth()+1);var i=""+j.getDate();if(l.length<2){l="0"+l}if(i.length<2){i="0"+i}return[k,l,i].join("-")}var a=false;g(window).bind("beforeunload",function(){a=true});var b=[];g(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(n){if(e(n)&&f(n)){var l=g(n.target).toggleClass("checked"),i=l.hasClass("checked")?"CHECKED":"UNCHECKED",k=l.data("inline-task-id"),o=l.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId,j=AJS.contextPath()+"/rest/inlinetasks/1/task/"+o+"/"+k+"/";l.prop("disabled",true);var m=l.closest("tr");m.attr("aria-disabled",true);b.push(k);AJS.trigger("inline-tasks.status-update.start",{status:i,taskId:k,taskListQueue:b});g.ajax({type:"POST",url:j,data:{status:i,trigger:"VIEW_PAGE",atl_token:AJS.Meta.get("atl-token")},dataType:"text",timeout:30000,error:function(q,s,p){if(a||s==="timeout"){return}AJS.logError("Inline Task #"+k+" was not persisted to "+i+" because of "+p+" (status: "+s+")");l.toggleClass("checked");var r;if(q.status===403){r=new Confluence.InlineTasks.Notice({textMessage:"\u62b1\u6b49! \u4e0d\u80fd\u66f4\u65b0\u4efb\u52a1\uff0c\u56e0\u4e3a\u60a8\u6ca1\u6709\u7f16\u8f91\u4efb\u52a1\u6240\u5728\u9875\u9762\u7684\u6743\u9650\u3002",className:"forbidden-notice"})}else{r=new Confluence.InlineTasks.Notice()}r.show()},success:function(){var p={dueDate:h(l,"time").attr("datetime"),completionDate:c(new Date()),mode:"view",assigneeUsername:h(l,".user-mention").attr("data-username"),context:d(l)};if(i==="CHECKED"){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:p})}}}).always(function(){l.prop("disabled",false);var p=l.closest("tr");p.attr("aria-disabled",false);b.splice(AJS.indexOf(b,k),1);AJS.trigger("inline-tasks.status-update.complete",{status:i,taskId:k,taskListQueue:b})})}},mousemove:function(i){if(e(i)){if(f(i)){g(i.target).addClass("hover")}else{g(i.target).removeClass("hover")}}},mouseout:function(i){if(e(i)){g(i.target).removeClass("hover")}},mousedown:function(i){if(e(i)&&f(i)){g(i.target).addClass("task-active")}},mouseup:function(i){if(e(i)&&f(i)){g(i.target).removeClass("task-active")}}});g("ul.inline-task-list li:not(.checked) time.date-upcoming").tooltip({title:function(){return "\u6b64\u4efb\u52a1\u4e00\u5468\u5185\u5230\u671f"},live:true});g("ul.inline-task-list li:not(.checked) time.date-past").tooltip({title:function(){return "\u6b64\u4efb\u52a1\u5df2\u903e\u671f"},live:true});g("span.emptycompletedate").tooltip({title:function(){return "\u6b64\u4efb\u52a1\u6ca1\u6709\u8bb0\u5f55\u5b8c\u6210\u65e5\u671f"},live:true});g(document).on("click","time",function(){var j=g(this);var i={date:j.attr("datetime"),mode:"view",context:d(j)};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:i})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"\u554a\u54e6\uff01\u60a8\u7684\u4efb\u52a1\u53d8\u66f4\u65e0\u6cd5\u4fdd\u5b58\u3002\u003cbr/\u003e\u53ef\u80fd\u6709\u5f88\u591a\u539f\u56e0\u3002",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_ignored) {
  return '<div class="aui-message error' + ((opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '') + '" id="inline-tasks-notice">' + soy.$$filterNoAutoescape(opt_data.textMessage) + '&nbsp;&nbsp;<a href="#" class="notice-close">' + soy.$$escapeHtml("\u4e0d\u518d\u63d0\u793a") + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Templates.notice.soyTemplateName = 'Confluence.InlineTasks.Templates.notice';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-focus.js' */
AJS.$(document).ready(function(f){var d="focusedTaskId";var a=require("confluence/jsUri");var c=new a(window.location.href);var g=c.getQueryParamValue(d);if(g){var b=$("li[data-inline-task-id="+g+"]");if(b.length){b.addClass("focused");window.scrollTo(b.offset().left,(b.offset().top-($(window).height()/2)))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f);c.Binder.userHover()};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"\u73b0\u5728\u4e0d\u80fd\u5bf9\u4f60\u7684\u4efb\u52a1\u8fdb\u884c\u6b63\u786e\u6392\u5e8f\uff0c\u8bf7\u5237\u65b0\u6b64\u9875\u9762\u540e\u8fdb\u884c\u91cd\u8bd5\u3002",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/dark-features.js' */
define("confluence-ui-components/dark-features",["ajs"],function(a){return a.DarkFeatures});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false);Confluence.Binder.userHover()}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.Pagination.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_ignored) {
  var output = '<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-initial-page-index="' + soy.$$escapeHtml(opt_data.currentPage) + '"><li class="aui-nav-previous"><a ' + ((opt_data.currentPage == 0) ? 'aria-disabled="true"' : 'href="#"') + '>' + soy.$$escapeHtml("\u524d") + '</a></li>';
  var startIdx__soy16 = opt_data.startPage + 1;
  var currentIdx__soy17 = opt_data.currentPage + 1;
  var endIdx__soy18 = startIdx__soy16 + opt_data.itemsToRender;
  var totalRange__soy19 = opt_data.totalPages + 1;
  var indexInit20 = startIdx__soy16;
  var indexLimit20 = endIdx__soy18 < totalRange__soy19 ? endIdx__soy18 : totalRange__soy19;
  for (var index20 = indexInit20; index20 < indexLimit20; index20++) {
    output += (index20 == currentIdx__soy17) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index20 - 1) + '">' + soy.$$escapeHtml(index20) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index20 - 1) + '"><a href="#">' + soy.$$escapeHtml(index20) + '</a></li>';
  }
  output += '<li class="aui-nav-next"><a ' + ((currentIdx__soy17 == opt_data.totalPages) ? 'aria-disabled="true"' : 'href="' + soy.$$escapeHtml(opt_data.url) + '"') + '>' + soy.$$escapeHtml("\u4e0b\u4e00\u6b65") + '</a></li></ol>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.Pagination.Templates.paginationFooter.soyTemplateName = 'Confluence.UI.Components.Pagination.Templates.paginationFooter';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.BlankPlaceholderBox.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_ignored) {
  return '<div class="blank-placeholder-box ' + ((opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '') + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.customHtml) ? soy.$$filterNoAutoescape(opt_data.customHtml) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox.soyTemplateName = 'Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Report.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_ignored) {
  var output = '<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="' + soy.$$escapeHtml(opt_data.reportParameters) + '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="' + soy.$$escapeHtml(opt_data.totalPages) + '" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-adaptive="' + soy.$$escapeHtml(opt_data.adaptive) + '" data-page-limit="' + soy.$$escapeHtml(opt_data.pageLimit) + '"><thead><tr class="tablesorter-headerRow">';
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output += '<th class="header-' + soy.$$escapeHtml(headingData14) + ((headingData14 == 'description') ? ' aui-table-column-unsortable' : '') + '" data-column-name="' + soy.$$escapeHtml(headingData14) + '">' + soy.$$escapeHtml(opt_data.headingTexts[headingData14]) + '</th>';
  }
  output += '</tr></thead><tbody>';
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      output += Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings});
    }
  } else {
    output += '<tr><td colspan="' + soy.$$escapeHtml(opt_data.headings.length) + '">' + soy.$$escapeHtml("\u5728Confluence \u9875\u9762\u4e2d\u521b\u5efa\u4efb\u52a1\u5217\u8868\uff0c\u7528\u4e8e\u8ddf\u8e2a\u9700\u8981\u5173\u6ce8\u7684\u4e8b\u60c5\u3002") + '</td></tr>';
  }
  output += '</tbody></table></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReport.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReport';
}


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("\u563f\uff01\u4f60\u77e5\u9053......") + '</h2><p>' + soy.$$escapeHtml("\u80fd\u591f\u5728\u7528\u6237\u4fe1\u606f\u7684\u4efb\u52a1\u83dc\u5355\u680f\u4e2d\uff0c\u67e5\u770b\u81ea\u5df1\u521b\u5efa\u6216\u88ab\u5206\u6d3e\u7684\u4efb\u52a1\u3002") + '</p>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification';
}


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_ignored) {
  var output = '<tr data-task-id="' + soy.$$escapeHtml(opt_data.task.taskId) + '" aria-disabled="false">';
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '') + '</td>';
    } else if (columnData51 == 'description') {
      output += '<td>' + soy.$$filterNoAutoescape(opt_data.task.taskHtml) + '</td>';
    } else if (columnData51 == 'assignee') {
      output += '<td class=\'tasks-report-assignee\'>' + ((opt_data.task.assigneeUserName) ? Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}) : '') + '</td>';
    } else if (columnData51 == 'location') {
      output += '<td><a class=\'task-location\' href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.task.pageUrl) + '">' + soy.$$escapeHtml(opt_data.task.pageTitle) + '</a></td>';
    } else if (columnData51 == 'completedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '') + '</td>';
    } else if (columnData51 == 'labels') {
      output += '<td>';
      var labelList90 = opt_data.task.labels;
      var labelListLen90 = labelList90.length;
      for (var labelIndex90 = 0; labelIndex90 < labelListLen90; labelIndex90++) {
        var labelData90 = labelList90[labelIndex90];
        output += aui.labels.label({text: labelData90});
      }
      output += '</td>';
    }
  }
  output += '</tr>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReportLine.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReportLine';
}


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_ignored) {
  var param98 = '<p>' + soy.$$escapeHtml("\u65e0\u6cd5\u663e\u793a\u6b64\u4efb\u52a1\u62a5\u544a\u3002") + '</p>';
  var messageList102 = opt_data.messages;
  var messageListLen102 = messageList102.length;
  for (var messageIndex102 = 0; messageIndex102 < messageListLen102; messageIndex102++) {
    var messageData102 = messageList102[messageIndex102];
    param98 += '<p>' + soy.$$escapeHtml(messageData102) + '</p>';
  }
  var output = '' + aui.message.warning({content: param98});
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning';
}


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '<p>' + soy.$$escapeHtml("\u4e0d\u80fd\u663e\u793a\u4efb\u52a1\u62a5\u544a\uff0c\u7f16\u8f91\u9875\u9762\u89e3\u51b3\u95ee\u9898\u3002") + '</p>'});
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"\u4efb\u52a1\u62a5\u544a","blank.complete.desc":"\u52a0\u6cb9\uff0c\u8fd8\u6ca1\u6709\u5b8c\u6210\u4efb\u52a1\u3002","blank.incomplete.title":"\u4efb\u52a1\u62a5\u544a","blank.incomplete.desc":"\u5f88\u597d\uff0c\u6ca1\u6709\u672a\u5b8c\u6210\u4efb\u52a1\u3002"};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.Templates.HelpTip.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_ignored) {
  return ((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '') + '<div class="helptip-body">' + soy.$$filterNoAutoescape(opt_data.bodyHtml) + '</div>' + ((opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml("\u4e86\u89e3\u66f4\u591a") + '</a>' : '');
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipContent.soyTemplateName = 'AJS.Templates.HelpTip.tipContent';
}


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_ignored) {
  return '<button class="helptip-dismiss aui-button" type="button">' + soy.$$escapeHtml("\u4e0d\u518d\u63d0\u793a") + '</button>';
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipDismiss.soyTemplateName = 'AJS.Templates.HelpTip.tipDismiss';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-metadata";var b="inline-tasks-flag";function a(){if(!!AJS.HelpTip){var e={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:d("#user-menu-link")};var f=new AJS.HelpTip(e);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});f.show();Confluence.FeatureDiscovery.forPlugin(c).markDiscovered(b)}}d(function(){if(d("meta[name=show-task-feature-discovery-flag]").length>0&&Confluence.FeatureDiscovery.forPlugin(c).shouldShow(b)){a()}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.js' */
(function(){function x(){this.returnValue=!1}function y(){this.cancelBubble=!0}var z=0,p=[],u={},v={},t={},w={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},A=/[<>&\"\']/g,q=window.setTimeout,m={},h,j="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/java-archive,jar,application/java-archive,war,application/java-archive,ear,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/mp3,mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/xml,xml,text/javascript,js,text/css,css,text/rtf,rtf,text/x-java-source,java,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe".split(/,/),
k,n,o;for(k=0;k<j.length;k+=2){o=j[k+1].split(/ /);for(n=0;n<o.length;n++){v[o[n]]=j[k];var r=t[j[k]]||[];r.push(o[n]);t[j[k]]=r}}j=navigator;k=j.userAgent;o=j.vendor;r=(n=/WebKit/.test(k))&&-1!==o.indexOf("Apple");o=window.opera&&window.opera.buildNumber;var j={windows:-1!==navigator.platform.indexOf("Win"),ie:!n&&!o&&/MSIE/gi.test(k)&&/Explorer/gi.test(j.appName),webkit:n,gecko:!n&&/Gecko/.test(k),safari:r,opera:!!o},c={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,
GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:v,mineTypeToExtensionsMap:t,ua:j,extend:function(a){c.each(arguments,function(b,g){0<g&&c.each(b,function(b,c){a[c]=b})});return a},getElement:function(a){return a&&1===a.nodeType?a:document.getElementById(a)},cleanName:function(a){var b,c;c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,
"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);a=a.replace(/\s+/g,"_");return a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){b.name=a;p[a]=b;p.push(b);return b},guid:function(){var a=(new Date).getTime().toString(32),b;for(b=0;5>b;b++)a+=Math.floor(65535*Math.random()).toString(32);return(c.guidPrefix||
"p")+a+(z++).toString(32)},buildUrl:function(a,b){var g="";c.each(b,function(a,b){g+=(g?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(a)});g&&(a+=(0<a.indexOf("?")?"&":"?")+g);return a},each:function(a,b){var c,f;if(a)if(c=a.length,void 0===c)for(f in a){if(a.hasOwnProperty(f)&&!1===b(a[f],f))break}else for(f=0;f<c&&!1!==b(a[f],f);f++);},formatSize:function(a){return void 0===a||/\D/.test(a)?c.translate("N/A"):1073741824<a?Math.round(a/1073741824,1)+" GB":1048576<a?Math.round(a/1048576,1)+
" MB":1024<a?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,e=0;b=0;a&&(b=a.getBoundingClientRect(),a="CSS1Compat"===h.compatMode?h.documentElement:h.body,e=b.left+a.scrollLeft,b=b.top+a.scrollTop);return{x:e,y:b}}var f=0,d=0,e,h=document,b=b||h.body;if(a&&a.getBoundingClientRect&&0<navigator.userAgent.indexOf("MSIE")&&8!==h.documentMode)return f=c(a),d=c(b),{x:f.x-d.x,y:f.y-d.y};for(e=a;e&&e!=b&&e.nodeType;)f+=e.offsetLeft||0,d+=e.offsetTop||0,e=e.offsetParent;for(e=
a.parentNode;e&&e!=b&&e.nodeType;)f-=e.scrollLeft||0,d-=e.scrollTop||0,e=e.parentNode;return{x:f,y:d}},getSize:function(a){return{w:a.offsetWidth||a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024));return a},xmlEncode:function(a){return a?(""+a).replace(A,function(a){return w[a]?"&"+w[a]+";":a}):a},toArray:function(a){var b,
c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},addI18n:function(a){return c.extend(u,a)},translate:function(a){return u[a]||a},isEmptyObj:function(a){if(void 0===a)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){return""==a.className?!1:RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},addClass:function(a,b){c.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)"),
function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){if(a.currentStyle)return a.currentStyle[b];if(window.getComputedStyle)return window.getComputedStyle(a,null)[b]},addEvent:function(a,b,g,f){var d,b=b.toLowerCase();void 0===h&&(h="Plupload_"+c.guid());a.addEventListener?(d=g,a.addEventListener(b,d,!1)):a.attachEvent&&(d=function(){var a=window.event;a.target||(a.target=a.srcElement);a.preventDefault=x;a.stopPropagation=y;g(a)},a.attachEvent("on"+b,d));void 0===a[h]&&(a[h]=c.guid());
m.hasOwnProperty(a[h])||(m[a[h]]={});a=m[a[h]];a.hasOwnProperty(b)||(a[b]=[]);a[b].push({func:d,orig:g,key:f})},removeEvent:function(a,b,g){var f,d;"function"==typeof g?f=g:d=g;b=b.toLowerCase();if(a[h]&&m[a[h]]&&m[a[h]][b]){for(var g=m[a[h]][b],e=g.length-1;0<=e;e--)if(g[e].key===d||g[e].orig===f)if(a.detachEvent?a.detachEvent("on"+b,g[e].func):a.removeEventListener&&a.removeEventListener(b,g[e].func,!1),g[e].orig=null,g[e].func=null,g.splice(e,1),void 0!==f)break;g.length||delete m[a[h]][b];if(c.isEmptyObj(m[a[h]])){delete m[a[h]];
try{delete a[h]}catch(k){a[h]=void 0}}}},removeAllEvents:function(a,b){void 0!==a[h]&&a[h]&&c.each(m[a[h]],function(g,f){c.removeEvent(a,f,b)})},Uploader:function(a){function b(){var a,b=0,d;if(this.state==c.STARTED){for(d=0;d<e.length;d++)!a&&e[d].status==c.QUEUED?(a=e[d],a.status=c.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a)):b++;b==e.length&&(this.stop(),this.trigger("UploadComplete",e))}}function g(){var a,b;d.reset();for(a=0;a<e.length;a++)b=e[a],void 0!==b.size?(d.size+=
b.size,d.loaded+=b.loaded):d.size=void 0,b.status==c.DONE?d.uploaded++:b.status==c.FAILED?d.failed++:d.queued++;void 0===d.size?d.percent=0<e.length?Math.ceil(100*(d.uploaded/e.length)):0:(d.bytesPerSec=Math.ceil(d.loaded/((+new Date-h||1)/1E3)),d.percent=0<d.size?Math.ceil(100*(d.loaded/d.size)):0)}var f={},d,e=[],h;d=new c.QueueProgress;a=c.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a);c.extend(this,{state:c.STOPPED,runtime:"",features:{},files:e,settings:a,
total:d,id:c.guid(),init:function(){function f(){var a=s[k++],b,e,d;if(a){b=a.getFeatures();if(e=i.settings.required_features){e=e.split(",");for(d=0;d<e.length;d++)if(!b[e[d]]){f();return}}a.init(i,function(c){c&&c.success?(i.features=b,i.runtime=a.name,i.trigger("Init",{runtime:a.name}),i.trigger("PostInit"),i.refresh()):f()})}else i.trigger("Error",{code:c.INIT_ERROR,message:c.translate("Init error.")})}var i=this,l,s,k=0,j;"function"==typeof a.preinit?a.preinit(i):c.each(a.preinit,function(a,
b){i.bind(b,a)});a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");/^(\w+:\/\/|\/)/.test(a.url)||(a.url=a.page_url+a.url);a.chunk_size=c.parseSize(a.chunk_size);a.max_file_size=c.parseSize(a.max_file_size);i.bind("FilesAdded",function(b,d){b.trigger("Started",d);var f,g,l=0,h;if((f=a.filters)&&f.length){h=[];c.each(f,function(a){c.each(a.extensions.split(/,/),function(a){/^\s*\*\s*$/.test(a)?h.push("\\.*"):h.push("\\."+a.replace(RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,
"\\$&")+"]","g"),"\\$&"))})});h=RegExp(h.join("|")+"$","i")}for(f=0;f<d.length;f++){g=d[f];g.loaded=0;g.percent=0;g.status=c.QUEUED;if(h&&!h.test(g.name))b.trigger("Error",{code:c.FILE_EXTENSION_ERROR,message:c.translate("File extension error."),file:g});else if(g.size!==void 0&&g.size>a.max_file_size)b.trigger("Error",{code:c.FILE_SIZE_ERROR,message:c.translate("File size error."),file:g});else{e.push(g);l++}}if(l)q(function(){i.trigger("QueueChanged");i.refresh()},1);else return false});a.unique_names&&
i.bind("UploadFile",function(a,b){var c=b.name.match(/\.([^.]+)$/),d="tmp";c&&(d=c[1]);b.target_name=b.id+"."+d});i.bind("UploadProgress",function(a,b){b.percent=b.size>0?Math.ceil(b.loaded/b.size*100):100;g()});i.bind("StateChanged",function(a){if(a.state==c.STARTED)h=+new Date;else if(a.state==c.STOPPED)for(l=a.files.length-1;l>=0;l--)if(a.files[l].status==c.UPLOADING){a.files[l].status=c.QUEUED;g()}});i.bind("QueueChanged",g);i.bind("Error",function(a,e){if(e.file){e.file.status=c.FAILED;g();a.state==
c.STARTED&&(d.queued||q(function(){b.call(i)},1))}});i.bind("FileUploaded",function(a,d){d.status=c.DONE;d.loaded=d.size;a.trigger("UploadProgress",d);q(function(){b.call(i)},1)});if(a.runtimes){s=[];j=a.runtimes.split(/\s?,\s?/);for(l=0;l<j.length;l++)p[j[l]]&&s.push(p[j[l]])}else s=p;f();"function"==typeof a.init?a.init(i):c.each(a.init,function(a,b){i.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){this.state!=c.STARTED&&(this.state=c.STARTED,this.trigger("StateChanged"),
b.call(this))},stop:function(){this.state!=c.STOPPED&&(this.state=c.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},getFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a)return e[b]},removeFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){var f;f=e.splice(void 0===a?0:a,void 0===b?e.length:b);this.trigger("FilesRemoved",f);this.trigger("QueueChanged");f[0].status==c.UPLOADING&&this.state==c.STARTED&&
this.trigger("CancelUpload");if(!d.queued){var g=this;q(function(){g.trigger("UploadComplete")})}return f},trigger:function(a){var b=f[a.toLowerCase()],c,d;if(b){d=Array.prototype.slice.call(arguments);d[0]=this;for(c=0;c<b.length;c++)if(!1===b[c].func.apply(b[c].scope,d))return!1}return!0},hasEventListener:function(a){return!!f[a.toLowerCase()]},bind:function(a,b,c){var d,a=a.toLowerCase();d=f[a]||[];d.push({func:b,scope:c||this});f[a]=d},unbind:function(a,b){var a=a.toLowerCase(),c=f[a],d;if(c){if(void 0!==
b)for(d=c.length-1;0<=d;d--){if(c[d].func===b){c.splice(d,1);break}}else c=[];c.length||delete f[a]}},unbindAll:function(){var a=this;c.each(f,function(b,c){a.unbind(c)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})},File:function(a,b,c){this.id=a;this.name=b;this.size=c;this.status=this.percent=this.loaded=0},Runtime:function(){this.getFeatures=function(){};this.init=function(){}},QueueProgress:function(){var a=this;a.size=0;a.loaded=0;a.uploaded=0;a.failed=0;a.queued=0;a.percent=
0;a.bytesPerSec=0;a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},runtimes:{}};window.plupload=c})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.html5.js' */
(function(s,j,e,p){function G(e,f,k,g){var b,a,c,q,m=this;var d=y[e.id],r=function(d){b=j.createElement("canvas");b.style.display="none";j.body.appendChild(b);a=b.getContext("2d");c=new Image;c.onerror=c.onabort=function(){g({success:!1})};c.onload=function(){var r,t,j,o;f.width||(f.width=c.width);f.height||(f.height=c.height);q=Math.min(f.width/c.width,f.height/c.height);if(1>q||1===q&&"image/jpeg"===k){r=Math.round(c.width*q);t=Math.round(c.height*q);b.width=r;b.height=t;a.drawImage(c,0,0,r,t);
if("image/jpeg"===k){if(j=new w(atob(d.substring(d.indexOf("base64,")+7))),j.headers&&j.headers.length&&(o=new H,o.init(j.get("exif")[0])&&(o.setExif("PixelXDimension",r),o.setExif("PixelYDimension",t),j.set("exif",o.getBinary()),m.hasEventListener("ExifData")&&m.trigger("ExifData",e,o.EXIF()),m.hasEventListener("GpsData")&&m.trigger("GpsData",e,o.GPS()))),f.quality)try{d=b.toDataURL(k,f.quality/100)}catch(s){d=b.toDataURL(k)}}else d=b.toDataURL(k);d=d.substring(d.indexOf("base64,")+7);d=atob(d);
j&&(j.headers&&j.headers.length)&&(d=j.restore(d),j.purge());b.parentNode.removeChild(b);g({success:!0,data:d})}else g({success:!1})};c.src=d},t;"FileReader"in s?(t=new FileReader,t.readAsDataURL(d),t.onload=function(){r(t.result)}):r(d.getAsDataURL())}function C(){function e(b,a){var c=k?0:-8*(a-1),q=0,m;for(m=0;m<a;m++)q|=g.charCodeAt(b+m)<<Math.abs(c+8*m);return q}function f(b,a,c){c=3===arguments.length?c:g.length-a-1;g=g.substr(0,a)+b+g.substr(c+a)}var k=!1,g;return{II:function(b){if(b===p)return k;
k=b},init:function(b){k=!1;g=b},SEGMENT:function(b,a,c){switch(arguments.length){case 1:return g.substr(b,g.length-b-1);case 2:return g.substr(b,a);case 3:f(c,b,a);break;default:return g}},BYTE:function(b){return e(b,1)},SHORT:function(b){return e(b,2)},LONG:function(b,a){if(a===p)return e(b,4);var c="",q=k?0:-24,m;for(m=0;4>m;m++)c+=String.fromCharCode(a>>Math.abs(q+8*m)&255);f(c,b,4)},SLONG:function(b){b=e(b,4);return 2147483647<b?b-4294967296:b},STRING:function(b,a){for(var c="",a=a+b;b<a;b++)c+=
String.fromCharCode(e(b,1));return c}}}function w(e){var f={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},k=[],g,b,a=p,c=0;g=new C;g.init(e);if(65496===g.SHORT(0)){b=2;for(e=Math.min(1048576,e.length);b<=e;)if(a=g.SHORT(b),65488<=a&&65495>=a)b+=2;else{if(65498===a||65497===a)break;c=g.SHORT(b+2)+2;f[a]&&g.STRING(b+4,f[a].signature.length)===f[a].signature&&k.push({hex:a,app:f[a].app.toUpperCase(),
name:f[a].name.toUpperCase(),start:b,length:c,segment:g.SEGMENT(b,c)});b+=c}g.init(null);return{headers:k,restore:function(a){g.init(a);var c=new w(a);if(!c.headers)return!1;for(a=c.headers.length;0<a;a--){var d=c.headers[a-1];g.SEGMENT(d.start,d.length,"")}c.purge();b=65504==g.SHORT(2)?4+g.SHORT(4):2;a=0;for(c=k.length;a<c;a++)g.SEGMENT(b,0,k[a].segment),b+=k[a].length;return g.SEGMENT()},get:function(a){for(var c=[],d=0,b=k.length;d<b;d++)k[d].app===a.toUpperCase()&&c.push(k[d].segment);return c},
set:function(a,c){var d=[];"string"===typeof c?d.push(c):d=c;for(var b=ii=0,e=k.length;b<e&&!(k[b].app===a.toUpperCase()&&(k[b].segment=d[ii],k[b].length=d[ii].length,ii++),ii>=d.length);b++);},purge:function(){k=[];g.init(null)}}}}function H(){function e(a,c){var q=f.SHORT(a),m,d,k,h,l,j=[],n={};for(m=0;m<q;m++)if(l=a+12*m+2,k=c[f.SHORT(l)],k!==p){d=f.SHORT(l+=2);h=f.LONG(l+=2);l+=4;j=[];switch(d){case 1:case 7:4<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.BYTE(l+d);break;case 2:4<h&&(l=
f.LONG(l)+g.tiffHeader);n[k]=f.STRING(l,h-1);continue;case 3:2<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.SHORT(l+2*d);break;case 4:1<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.LONG(l+4*d);break;case 5:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.LONG(l+4*d)/f.LONG(l+4*d+4);break;case 9:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d);break;case 10:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d)/f.SLONG(l+4*d+4);break;default:continue}h=1==h?j[0]:j;
n[k]=b.hasOwnProperty(k)&&"object"!=typeof h?b[k][h]:h}return n}var f,k,g={},b;f=new C;k={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",
41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{"0":"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};b={ColorSpace:{1:"sRGB","0":"Uncalibrated"},MeteringMode:{"0":"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",
13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{"0":"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{"0":"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{"0":"Auto white balance",1:"Manual white balance"},SceneCaptureType:{"0":"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},
Contrast:{"0":"Normal",1:"Soft",2:"Hard"},Saturation:{"0":"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{"0":"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};return{init:function(a){g={tiffHeader:10};if(a===p||!a.length)return!1;f.init(a);return 65505===f.SHORT(0)&&"EXIF\x00"===f.STRING(4,5).toUpperCase()?(a=p,a=g.tiffHeader,f.II(18761==f.SHORT(a)),42!==f.SHORT(a+=2)?a=!1:(g.IFD0=g.tiffHeader+f.LONG(a+
2),a=e(g.IFD0,k.tiff),g.exifIFD="ExifIFDPointer"in a?g.tiffHeader+a.ExifIFDPointer:p,g.gpsIFD="GPSInfoIFDPointer"in a?g.tiffHeader+a.GPSInfoIFDPointer:p,a=!0),a):!1},EXIF:function(){var a;a=e(g.exifIFD,k.exif);a.ExifVersion&&(a.ExifVersion=String.fromCharCode(a.ExifVersion[0],a.ExifVersion[1],a.ExifVersion[2],a.ExifVersion[3]));return a},GPS:function(){var a;a=e(g.gpsIFD,k.gps);a.GPSVersionID&&(a.GPSVersionID=a.GPSVersionID.join("."));return a},setExif:function(a,c){if("PixelXDimension"!==a&&"PixelYDimension"!==
a)return!1;var b;b=a;var e,d,h,j=0;if("string"===typeof b)for(hex in e=k.exif,e)if(e[hex]===b){b=hex;break}e=g.exifIFD;d=f.SHORT(e);for(i=0;i<d;i++)if(h=e+12*i+2,f.SHORT(h)==b){j=h+8;break}j?(f.LONG(j,c),b=!0):b=!1;return b},getBinary:function(){return f.SEGMENT()}}}var y={},F;e.runtimes.Html5=e.addRuntime("html5",{getFeatures:function(){var h,f,k,g,b,a;f=k=b=a=!1;s.XMLHttpRequest&&(h=new XMLHttpRequest,k=!!h.upload,f=!(!h.sendAsBinary&&!h.upload));f&&(g=!!(h.sendAsBinary||s.Uint8Array&&s.ArrayBuffer),
b=!(!File||!File.prototype.getAsDataURL&&!s.FileReader||!g),a=!(!File||!File.prototype.mozSlice&&!File.prototype.webkitSlice&&!File.prototype.slice));F=e.ua.safari&&e.ua.windows&&navigator.userAgent&&0<navigator.userAgent.indexOf("Version/4");h=f;f=j.createElement("div");return{html5:h,dragdrop:"draggable"in f||"ondragstart"in f&&"ondrop"in f,jpgresize:b,pngresize:b,multipart:b||!!s.FileReader||!!s.FormData,canSendBinary:g,cantSendBlobInFormData:!(!e.ua.gecko||!s.FormData||!s.FileReader||FileReader.prototype.readAsArrayBuffer),
progress:k,chunks:a,multi_selection:!(e.ua.safari&&e.ua.windows),triggerDialog:e.ua.gecko&&s.FormData||e.ua.webkit||e.ua.windows}},init:function(h,f){function k(a){var c,b,g=[],d,f={};for(b=0;b<a.length;b++)c=a[b],f[c.name]||(f[c.name]=!0,d=e.guid(),y[d]=c,d=new e.File(d,c.fileName||c.name,c.fileSize||c.size),d.nativeFile=c,g.push(d));g.length&&h.trigger("FilesAdded",g)}var g,b;g=this.getFeatures();g.html5?(h.upload=function(a){k(a)},h.bind("Init",function(a){var c,b,g=[],d,f,t=a.settings.filters,
l,s;d=j.body;var n;c=j.createElement("div");c.id=a.id+"_html5_container";e.extend(c.style,{position:"absolute",background:h.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:h.settings.shim_bgcolor?"":0});c.className="plupload html5";h.settings.container&&(d=j.getElementById(h.settings.container),"static"===e.getStyle(d,"position")&&(d.style.position="relative"));d.appendChild(c);d=0;a:for(;d<t.length;d++){l=t[d].extensions.split(/,/);for(f=0;f<
l.length;f++){if("*"===l[f]){g=[];break a}(s=e.mimeTypes[l[f]])&&g.push(s)}}c.innerHTML='<input id="'+h.id+'_html5"  style="font-size:999px" type="file" accept="'+g.join(",")+'" '+(h.settings.multi_selection&&h.features.multi_selection?'multiple="multiple"':"")+" />";c.scrollTop=100;n=j.getElementById(h.id+"_html5");h.settings.inputFileClazz&&(n.className+=" "+h.settings.inputFileClazz);a.features.triggerDialog?e.extend(n.style,{position:"absolute",width:"100%",height:"100%"}):e.extend(n.style,{cssFloat:"right",
styleFloat:"right"});var p=function(){k(this.files);if(navigator.appVersion.indexOf("MSIE10")===-1){n=this.cloneNode(true);n.onchange=p;this.parentNode.replaceChild(n,this)}else this.value=""};n.onchange=p;if(b="string"===typeof a.settings.browse_button?j.getElementById(a.settings.browse_button):a.settings.browse_button){var o=a.settings.browse_button_hover,B=a.settings.browse_button_active;c=a.features.triggerDialog?b:c;o&&(e.addEvent(c,"mouseover",function(){e.addClass(b,o)},a.id),e.addEvent(c,
"mouseout",function(){e.removeClass(b,o)},a.id));B&&(e.addEvent(c,"mousedown",function(){e.addClass(b,B)},a.id),e.addEvent(j.body,"mouseup",function(){e.removeClass(b,B)},a.id));a.features.triggerDialog&&e.addEvent(b,"click",function(c){j.getElementById(a.id+"_html5").click();c.preventDefault()},a.id)}}),h.bind("PostInit",function(){var a=e.getElement(h.settings.drop_element),c,b=!1;a&&(F?(e.addEvent(a,"dragenter",function(){var c,d;c=j.getElementById(h.id+"_drop");c||(c=j.createElement("input"),
c.setAttribute("type","file"),c.setAttribute("id",h.id+"_drop"),c.setAttribute("multiple","multiple"),e.addEvent(c,"change",function(){k(this.files);e.removeEvent(c,"change",h.id);c.parentNode.removeChild(c)},h.id),a.appendChild(c),b=!0);e.getPos(a,j.getElementById(h.settings.container));d=e.getSize(a);"static"===e.getStyle(a,"position")&&e.extend(a.style,{position:"relative"});e.extend(c.style,{position:"absolute",display:"block",top:0,left:0,width:d.w+"px",height:d.h+"px",opacity:0})},h.id),e.addEvent(a,
"dragleave",function(){b||(c&&c.parentElement.removeChild(c),c=null);b=!1})):(e.addEvent(a,"dragover",function(a){a.preventDefault()},h.id),e.addEvent(a,"drop",function(a){if(!$(".disable-attachment-uploader").length){var b=a.dataTransfer;b&&b.files&&k(b.files)}c&&c.parentElement.removeChild(c);c=null;a.preventDefault();h.settings.stop_propagation&&(a.cancelBubble?a.cancelBubble=!0:a.stopPropagation())},h.id)))}),h.bind("Refresh",function(a){var c,b,f;if(c=j.getElementById(h.settings.browse_button))b=
e.getPos(c,j.getElementById(a.settings.container)),f=e.getSize(c),a=j.getElementById(h.id+"_html5_container"),e.extend(a.style,{top:b.y+"px",left:b.x+"px",width:f.w+"px",height:f.h+"px"}),h.features.triggerDialog&&("static"===e.getStyle(c,"position")&&e.extend(c.style,{position:"relative"}),b=parseInt(e.getStyle(c,"z-index"),10),isNaN(b)&&(b=0),e.extend(c.style,{zIndex:b}),e.extend(a.style,{zIndex:b-1}))}),h.bind("CancelUpload",function(){b&&b.abort&&b.abort()}),h.bind("UploadFile",function(a,c){function f(d){function k(){function f(d){var h=
0,m="----pluploadboundary"+e.guid(),n,r="";b=new XMLHttpRequest;b.upload&&(b.upload.onprogress=function(b){c.loaded=Math.min(c.size,q+b.loaded-h);a.trigger("UploadProgress",c)});b.onreadystatechange=function(){var f,g;if(b.readyState==4){try{f=b.status}catch(h){f=0}if(f>=400)a.trigger("Error",{code:e.HTTP_ERROR,message:e.translate("HTTP Error."),file:c,status:f,response:b.responseText||""});else{if(p){g={chunk:j,chunks:p,response:b.responseText,status:f};a.trigger("ChunkUploaded",c,g);q=q+z;if(g.cancelled){c.status=
e.FAILED;return}c.loaded=Math.min(c.size,(j+1)*u)}else c.loaded=c.size;a.trigger("UploadProgress",c);d=o=n=r=null;if(!p||++j>=p){c.status=e.DONE;a.trigger("FileUploaded",c,{response:b.responseText,status:f})}else k()}}};if(a.settings.multipart&&g.multipart){x.name=c.target_name||c.name;b.open("post",D,!0);e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});if("string"!==typeof d&&s.FormData){n=new FormData;e.each(e.extend(x,a.settings.multipart_params),function(a,b){n.append(b,a)});
n.append(a.settings.file_data_name,d);b.send(n);return}if("string"===typeof d){b.setRequestHeader("Content-Type","multipart/form-data; boundary="+m);e.each(e.extend(x,a.settings.multipart_params),function(a,b){r=r+("--"+m+'\r\nContent-Disposition: form-data; name="'+b+'"\r\n\r\n');r=r+(unescape(encodeURIComponent(a))+"\r\n")});y=e.mimeTypes[c.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";r+="--"+m+'\r\nContent-Disposition: form-data; name="'+a.settings.file_data_name+
'"; filename="'+unescape(encodeURIComponent(c.name))+'"\r\nContent-Type: '+y+"\r\n\r\n"+d+"\r\n--"+m+"--\r\n";h=r.length-d.length;d=r;if(b.sendAsBinary)b.sendAsBinary(d);else if(g.canSendBinary){for(var w=new Uint8Array(d.length),v=0;v<d.length;v++)w[v]=d.charCodeAt(v)&255;b.send(w.buffer)}return}}D=e.buildUrl(a.settings.url,e.extend(x,a.settings.multipart_params));b.open("post",D,!0);b.setRequestHeader("Content-Type","application/octet-stream");d.encoding&&b.setRequestHeader("Content-Encoding",d.encoding);
e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});b.send(d.getData?d.getData():d)}var o,p,x,u,z,y,D=a.settings.url;if(!(c.status==e.DONE||c.status==e.FAILED||a.state==e.STOPPED)){x={name:c.target_name||c.name};if(h.chunk_size&&c.size>h.chunk_size&&(g.chunks||"string"==typeof d)){u=h.chunk_size;p=Math.ceil(c.size/u);z=Math.min(u,c.size-j*u);if("string"==typeof d)o=d.substring(j*u,j*u+z);else{var v=d,A=j*u,E=j*u+z,w;if(File.prototype.slice)try{v.slice(),o=v.slice(A,E)}catch(C){o=v.slice(A,
E-A)}else o=(w=File.prototype.webkitSlice||File.prototype.mozSlice)?w.call(v,A,E):null}x.chunk=j;x.chunks=p}else z=c.size,o=d;"string"!==typeof o&&n&&g.cantSendBlobInFormData&&g.chunks&&a.settings.chunk_size?(n.onload=function(){f(n.result)},n.readAsBinaryString(o)):f(o)}}var j=0,q=0,n="FileReader"in s?new FileReader:null;k()}var h=a.settings,d;d=y[c.id];g.jpgresize&&a.settings.resize&&/\.(png|jpg|jpeg)$/i.test(c.name)?G.call(a,c,a.settings.resize,/\.png$/i.test(c.name)?"image/png":"image/jpeg",function(a){a.success?
(c.size=a.data.length,f(a.data)):f(d)}):f(d)}),h.bind("Destroy",function(a){var b,f,g=j.body,d={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(b in d)(f=j.getElementById(d[b]))&&e.removeAllEvents(f,a.id);e.removeAllEvents(j.body,a.id);a.settings.container&&(g=j.getElementById(a.settings.container));g.removeChild(j.getElementById(d.inputContainer))}),f({success:!0})):f({success:!1})}})})(window,document,plupload);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-position', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.position.js' */
(function(c){c.ui=c.ui||{};var k=/left|center|right/,l=/top|center|bottom/,n=c.fn.position,o=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return n.apply(this,arguments);var b=c.extend({},b),a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),f=b.offset?b.offset.split(" "):[0,0],h,j,e;9===d.nodeType?(h=a.width(),j=a.height(),e={top:0,left:0}):d.setTimeout?(h=a.width(),j=a.height(),e={top:a.scrollTop(),left:a.scrollLeft()}):d.preventDefault?(b.at="left top",h=j=0,e={top:b.of.pageY,left:b.of.pageX}):
(h=a.outerWidth(),j=a.outerHeight(),e=a.offset());c.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=k.test(a[0])?a.concat(["center"]):l.test(a[0])?["center"].concat(a):["center","center"]);a[0]=k.test(a[0])?a[0]:"center";a[1]=l.test(a[1])?a[1]:"center";b[this]=a});1===g.length&&(g[1]=g[0]);f[0]=parseInt(f[0],10)||0;1===f.length&&(f[1]=f[0]);f[1]=parseInt(f[1],10)||0;"right"===b.at[0]?e.left+=h:"center"===b.at[0]&&(e.left+=h/2);"bottom"===b.at[1]?e.top+=j:"center"===b.at[1]&&
(e.top+=j/2);e.left+=f[0];e.top+=f[1];return this.each(function(){var a=c(this),d=a.outerWidth(),m=a.outerHeight(),k=parseInt(c.curCSS(this,"marginLeft",true))||0,l=parseInt(c.curCSS(this,"marginTop",true))||0,n=d+k+(parseInt(c.curCSS(this,"marginRight",true))||0),o=m+l+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},e),p;if(b.my[0]==="right")i.left=i.left-d;else if(b.my[0]==="center")i.left=i.left-d/2;if(b.my[1]==="bottom")i.top=i.top-m;else if(b.my[1]==="center")i.top=i.top-m/2;
p={left:i.left-k,top:i.top-l};c.each(["left","top"],function(a,e){if(c.ui.position[g[a]])c.ui.position[g[a]][e](i,{targetWidth:h,targetHeight:j,elemWidth:d,elemHeight:m,collisionPosition:p,collisionWidth:n,collisionHeight:o,offset:f,my:b.my,at:b.at})});c.fn.bgiframe&&a.bgiframe();a.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window),d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=0<d?b.left-d:Math.max(b.left-a.collisionPosition.left,
b.left)},top:function(b,a){var d=c(window),d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=0<d?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if("center"!==a.at[0]){var d=c(window),d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft(),g="left"===a.my[0]?-a.elemWidth:"right"===a.my[0]?a.elemWidth:0,f="left"===a.at[0]?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=0>a.collisionPosition.left?g+f+h:0<d?g+f+h:0}},top:function(b,
a){if("center"!==a.at[1]){var d=c(window),d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop(),g="top"===a.my[1]?-a.elemHeight:"bottom"===a.my[1]?a.elemHeight:0,f="top"===a.at[1]?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=0>a.collisionPosition.top?g+f+h:0<d?g+f+h:0}}}};c.offset.setOffset||(c.offset.setOffset=function(b,a){/static/.test(c.curCSS(b,"position"))&&(b.style.position="relative");var d=c(b),g=d.offset(),f=parseInt(c.curCSS(b,"top",!0),10)||0,h=parseInt(c.curCSS(b,
"left",!0),10)||0,g={top:a.top-g.top+f,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)},c.fn.offset=function(b){var a=this[0];return!a||!a.ownerDocument?null:b?c.isFunction(b)?this.each(function(a){c(this).offset(b.call(this,a,c(this).offset()))}):this.each(function(){c.offset.setOffset(this,b)}):o.call(this)});c.curCSS||(c.curCSS=c.css)})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-progress-indicator', location = 'node_modules/@atlassian/aui/src/js/aui/progress-indicator.js' */
("undefined"===typeof window?global:window).__1c558839792cc96767a648eae1c96903=function(){function g(a,b,c){(0,h.recomputeStyle)(a);a.css("width",100*c+"%");b.attr("data-value",c)}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__2fd777cca7fe187ff4048afabed6a6b5,i=a&&a.__esModule?a:{"default":a},h=__e3af25d9bced0eef741f71bd383fd36d,a=(a=__dd0dee18d8910035abf3563b0855343d)&&a.__esModule?a:{"default":a},j={update:function(a,b){var c=(0,i.default)(a).first(),d=c.children(".aui-progress-indicator-value"),
e=c.attr("data-value"),f=parseFloat(e)||0;if(!(e&&f===b))return e||d.css("width",0),"number"===typeof b&&(1>=b&&0<=b)&&(c.trigger("aui-progress-indicator-before-update",[f,b]),e=(document.body||document.documentElement).style,"string"===typeof e.transition||"string"===typeof e.WebkitTransition?(d.one("transitionend webkitTransitionEnd",function(){c.trigger("aui-progress-indicator-after-update",[f,b])}),g(d,c,b)):(g(d,c,b),c.trigger("aui-progress-indicator-after-update",[f,b]))),c},setIndeterminate:function(a){var a=
(0,i.default)(a).first(),b=a.children(".aui-progress-indicator-value");a.removeAttr("data-value");(0,h.recomputeStyle)(a);b.css("width","100%")}};(0,a.default)("progressBars",j);d.default=j;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
define("confluence-drag-and-drop/drag-and-drop-utils",["jquery","window","ajs"],function(c,d,f){return{defaultMimeType:"application/octet-stream",base:/^\w+:\/\/[^\/?#]+/.exec(location.href),bindDragEnter:function(a,b){if(a.addEventListener)(b=this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(b):b)&&a.addEventListener("dragenter",b,!1);else if(a.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragenter",e);c(d).unload(function(){a.detachEvent("ondragenter",
e)})}},bindDragOver:function(a,b){if(a.addEventListener)this.isFireFox35OrLater()?b=this.firefox35DragEnterAndOverCallbackWrapper(b):c.browser.safari&&(b=this.safariDragOverCallbackWrapper(b)),b&&a.addEventListener("dragover",b,!1);else if(a.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragover",e);c(d).unload(function(){a.detachEvent("ondragover",e)})}},bindDragLeave:function(a,b){b&&(c.browser.safari||this.isFireFox35OrLater()||tinymce.isIE11?a.addEventListener("dragleave",
b,!1):c.browser.msie?(a.attachEvent("ondragleave",b),c(d).unload(function(){a.detachEvent("ondragleave",b)})):c.browser.mozilla&&a.addEventListener("dragexit",b,!1))},bindDrop:function(a,b){if(c.browser.mozilla){var e=this.isFireFox35OrLater()?"drop":"dragdrop";a.addEventListener(e,this.mozillaDropCallbackWrapper(b),!1)}else if(c.browser.msie){if(b){var g=function(a){b(a);f.DragAndDropUtils.stopPropagation(a)};a.attachEvent("ondrop",g);c(d).unload(function(){a.detachEvent("ondrop",g)})}}else c.browser.safari&&
b&&a.addEventListener("drop",function(a){b(a);f.DragAndDropUtils.stopPropagation(a)},!1)},niceSize:function(a){for(var b=" B; kB; MB; GB; TB; PB; EB; ZB; YB".split(";"),c=0,d=b.length;c<d;c++)if(a<Math.pow(2,10*(c+1)))return(!c?a:(a/Math.pow(2,10*c)).toFixed(2))+b[c];return(a/Math.pow(2,10*(c+1))).toFixed(2)+b[b.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(a){return function(b){if(b=b||d.event)a&&a(b),c.browser.msie&&(b.returnValue=!1)}},safariDragOverCallbackWrapper:function(a){return function(b){if((b=
b||d.event)&&"file"!==b.target.type)a&&a(b),-1!=c.inArray("public.file-url",b.dataTransfer.types)&&b.preventDefault()}},mozillaDropCallbackWrapper:function(a){return function(b){b&&(a&&a(b),b.preventDefault(),f.DragAndDropUtils.isFireFox35OrLater()?f.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.stopPropagation():b.stopPropagation())}},firefox35DragEnterAndOverCallbackWrapper:function(a){return function(b){b&&(a&&a(b),f.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.preventDefault())}},firefox35FileDataInEvent:function(a){return-1!=
c.inArray("application/x-moz-file",a.dataTransfer.types)},stopPropagation:function(a){if(a=a||d.event)a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){if(a=a||d.event)a.preventDefault?a.preventDefault():a.returnValue=!1},isFireFox35OrLater:function(){return!this.isFireFox30()&&-1!=c.browser.version.indexOf("1.9.")},isFireFox30:function(){return-1!=c.browser.version.indexOf("1.9.0")},enableDropZoneOn:function(a,b){if(!a)throw Error("Cannot enable drop zone on invalid container. Received: "+
a);b=b||f.DragAndDrop.defaultDropHandler;this.bindDragEnter(a);this.bindDragOver(a);this.bindDragLeave(a);this.bindDrop(a,b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/drag-and-drop-utils","AJS.DragAndDropUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
define("confluence-drag-and-drop/default-drop-handler","ajs document confluence/meta jquery confluence/legacy underscore plupload window".split(" "),function(a,h,j,f,k,p,l,q){var m={initialise:function(){function n(){var a=f(".aui-blanket:visible");return a.length&&a.css("visibility")!=="hidden"&&!f("#drag-and-drop-progress-dialog:visible").length}function m(){for(;e.files.length;)e.removeFile(e.files[0])}var d,i=h.getElementById("fileuploadShim");if(!i){i=h.createElement("div");i.setAttribute("id",
"fileuploadShim");h.body.appendChild(i)}var e=new l.Uploader({runtimes:"html5",dragdrop:true,drop_element:f("body")[0],browse_button:i.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+j.get("global-settings-attachment-max-size")}),o=function(){d=a.Editor&&a.Editor.isVisible()&&k.EditorUploadProgressDialog?k.EditorUploadProgressDialog:new a.DragAndDropProgressDialog};d=null;e.init();a.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,b){function r(a,b){!d&&o();
for(var c=0;c<b.length;c++){var g=b[c];g.status!==l.FAILED&&d.render({workId:g.id,status:g.status,file:g})}e.start()}if(n())m();else if(a.Editor&&a.Editor.isVisible()){var c=p.reject(b,function(a){return a.status===l.FAILED});k.Uploader&&k.Uploader.trigger("FilesAdded",c)}else a.UploadUtils.filterFiles(g,b,r)});e.bind("BeforeUpload",function(g,b){if(!a.Editor||!a.Editor.isVisible()){var e=a.DragAndDropUtils.base+a.contextPath()+"/plugins/drag-and-drop/upload.action",c=j.get("page-id"),c=c!=0?{pageId:c}:
{draftId:j.get("draft-id")},f=b.name.substr(b.name.lastIndexOf(".")+1);c.filename=b.name;c.size=b.size;c.mimeType=l.mimeTypes[f.toLowerCase()]||a.DragAndDropUtils.defaultMimeType;c.spaceKey=j.get("space-key");c.atl_token=j.get("atl-token");g.settings.url=l.buildUrl(e,c);d.cancelListeners.push(function(b,c){var e=g.getFile(c.workId);e&&g.removeFile(e);d.renderInfo(c.workId,"\u6587\u4ef6\u88ab\u624b\u52a8\u4ece\u961f\u5217\u79fb\u9664\u3002")});d.show()}});e.bind("UploadProgress",function(a,b){d.renderUpdateToBytesUploaded(b.id,
b.loaded,b.size);d.hideCloseButton()});e.bind("FileUploaded",function(e,b,f){f.status===0?d.renderError(b.id,"\u670d\u52a1\u5668\u65e0\u54cd\u5e94\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c\u3002"):d.renderComplete(b.id)});e.bind("Error",function(e,b){if(n())m();else if(a.Editor&&a.Editor.isVisible())k.Uploader&&k.Uploader.trigger("Error",b);else{var h,c;if(b.response){try{h=f.parseJSON(b.response);c=h.actionErrors[0]}catch(i){c=i.name==="SyntaxError"?"\u4ece\u670d\u52a1\u5668\u63a5\u6536\u5230\u65e0\u6548\u7684\u54cd\u5e94\u3002":b.message}d.renderError(b.file.id,
c);a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.server-unknown"})}else{c=b.message;if(b.code===l.FILE_SIZE_ERROR){c=a.format("\u4e0a\u4f20\u6587\u4ef6\u592a\u5927\u3002\u6587\u4ef6\u5fc5\u987b\u5c0f\u4e8e{0}.",a.DragAndDropUtils.niceSize(j.get("global-settings-attachment-max-size")));a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-size"})}else if(b.code===a.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR){c="might be a folder or an unsupported file type.";a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-type"})}!d&&
o();d.render({workId:b.file.id,status:b.file.status,file:b.file,errorMessage:c});if(!d.isVisible()){d.show();d.showCloseButton()}}}});e.bind("UploadComplete",function(){if(!e.total.queued&&d){d.showCloseButton();d.hasErrors()||setTimeout(function(){d.hide();d.clearRenderOutput();q.location.reload()},1E3)}})},bind:function(){function a(){f(h).unbind("dragenter",a);m.initialise()}f(h).bind("dragenter",a)}};return m});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
define("confluence-drag-and-drop/observable-array-list",["ajs","jquery"],function(g,f){var e=function(){this._data=[];this._pushObservers=[]};e.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(a,b){return this._remove.call(this._data,a,b)},_remove:function(a,b){var c=this.slice((b||a)+1||this.length);this.length=0>a?this.length+a:a;return this.push.apply(this,c)},shift:function(){return this._data.shift()},removeByPredicate:function(a){for(var b=
[],c=this._data.length,d=0;d<c;d++)a(this._data[d])||b.push(this._data[d]);this._data=b;return c-this._data.length},addPushObserver:function(a){if(f.isFunction(a))this._pushObservers.push(a);else throw Error("Attempting to add an observer that is not a function: "+a);},_notifyPushObservers:function(a){for(var b=0,c=this._pushObservers.length;b<c;b++)this._pushObservers[b](a)}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/observable-array-list","AJS.ObservableArrayList");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
define("confluence-drag-and-drop/upload-progress-dialog",["ajs","plupload","jquery","document"],function(b,g,c,i){var h=function(a){var d=this,e={header:"\u9644\u52a0\u6587\u4ef6",width:600,height:400};this._options=c.extend({},e,a);this.id="drag-and-drop-progress-dialog";this._dialog=new b.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",b.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("\u5b8c\u6210",
function(){d.hide();d.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=this.find(".all-file-uploads-complete");c(i).keydown(function(a){if(27===a.which)return d._$closeButton.prop("disabled")||(d.hide(),d.clearRenderOutput()),b.stopEvent(a)});this._$container=this.find("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=!0;this.hasErrorMessage=!1};h.prototype={show:function(){this._hidden&&
(this._dialog.show(),this._hidden=!1,c.each(this.onShowListeners,function(a,c){c()}));this.hideCloseButton()},hide:function(){this._hidden||(this._dialog.hide(),this._hidden=!0)},isVisible:function(){return!this._hidden},_getProgressElementId:function(a){return"file-"+a+"-progress"},render:function(a){this._workIdsOfFilesInProgress.push(a.workId);var d=this._getProgressElementId(a.workId);this._$container.append(b.DragAndDrop.Templates.fileStatus({filename:a.file.name,progressElementId:d,workId:a.workId,
showCancel:a.status==g.QUEUED}));b.progressBars.update("#"+d,0);a.status==g.QUEUED?c("#file-upload-cancel-"+a.workId).click(function(b){return function(d){c.each(b,function(c,b){b(d,a)})}}(this.cancelListeners)):this.renderError(a.workId,a.errorMessage)},renderError:function(a,d){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=c("#file-status-block-"+a),f=b.escapeEntities(e.attr("data-filename"));e.html(aui.message.warning({content:d,titleContent:f}));
this.hasErrorMessage=!0},renderInfo:function(a,d){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=c("#file-status-block-"+a),f=b.escapeEntities(e.attr("data-filename"));e.html(aui.message.info({content:d,titleContent:f}));this.hasErrorMessage=!0},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(a,d,e){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var f=
b.DragAndDropUtils.niceSize(d),g=c("#file-"+a+"-uploaded");g.length?g.text(f):c("#file-upload-progress-text-"+a).html(b.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:a,uploadedSizeNice:f,totalSizeNice:b.DragAndDropUtils.niceSize(e)}));b.progressBars.update("#"+this._getProgressElementId(a),d/e)},renderComplete:function(a){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);c("#cancel-or-success-placeholder-"+a).html(b.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},
renderCancelled:function(a){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);b.progressBars.setIndeterminate("#"+this._getProgressElementId(a));c("#file-upload-progress-text-"+a).html("\u5df2\u53d6\u6d88\u3002");c("#cancel-or-success-placeholder-"+a).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=!1},hideCloseButton:function(){this._$closeButton.hide()},
showCloseButton:function(){this._$closeButton.show()},find:function(a){return this._dialog.getCurPanel().page.body.parent().find(a)}};return h});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-progress-dialog","AJS.DragAndDropProgressDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.DragAndDrop.Templates.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_ignored) {
  return '<li id="file-status-block-' + soy.$$escapeHtml(opt_data.workId) + '" data-filename="' + soy.$$escapeHtml(opt_data.filename) + '"><div class="aui-group aui-group-split file-status-item"><div class="aui-item"><label>' + soy.$$escapeHtml(opt_data.filename) + '</label></div><div class="aui-item"><div id="file-upload-progress-text-' + soy.$$escapeHtml(opt_data.workId) + '" class="file-upload-progress-text">' + soy.$$escapeHtml("\u6b63\u7b49\u5f85...") + '</div></div></div><div class="file-upload-progress-block"><div class="aui-progress-indicator" id="' + soy.$$escapeHtml(opt_data.progressElementId) + '"><span class="aui-progress-indicator-value"></span></div>' + ((opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("\u53d6\u6d88\u4e0a\u4f20") + '">' + soy.$$escapeHtml("\u53d6\u6d88") + '</span></div>' : '') + '</div></li>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.fileStatus.soyTemplateName = 'AJS.DragAndDrop.Templates.fileStatus';
}


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_ignored) {
  return '<ul id="upload-statuses"></ul>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusContainer.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusContainer';
}


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon';
}


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_ignored) {
  return '<span id="file-' + soy.$$escapeHtml(opt_data.fileId) + '-uploaded">' + soy.$$escapeHtml(opt_data.uploadedSizeNice) + '</span> ' + soy.$$escapeHtml("/") + ' ' + soy.$$escapeHtml(opt_data.totalSizeNice);
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage';
}


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_ignored) {
  return '<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">' + soy.$$escapeHtml("\u5c06\u6587\u4ef6\u62d6\u653e\u5230\u8fd9\u91cc\u4e0a\u4f20") + '</div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dropZone.soyTemplateName = 'AJS.DragAndDrop.Templates.dropZone';
}


AJS.DragAndDrop.Templates.dragOverlay = function(opt_data, opt_ignored) {
  return '<div id="dragOverlay"><div class="overlay-blanket"></div><div class="overlay-center"><p>' + soy.$$escapeHtml("\u62d6\u62fd\u6587\u4ef6\u5230\u6b64\u9875\u9762\u4ee5\u63d2\u5165\u4ed6\u4eec") + '</p></div><span class="overlay-baseline"></span><div class="overlay-drop-zone"></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragOverlay.soyTemplateName = 'AJS.DragAndDrop.Templates.dragOverlay';
}


AJS.DragAndDrop.Templates.dragAndDropTip = function(opt_data, opt_ignored) {
  return '<div class="attach-tip-discovery"><span class="img"></span><div class="text"><strong>' + soy.$$escapeHtml("\u6280\u5de7\uff1a") + ' </strong><p>' + soy.$$escapeHtml("\u53ef\u76f4\u63a5\u62d6\u653e\u6587\u4ef6\u5230\u60a8\u7684\u9875\u9762\u4e2d\u3002") + '</p><div><a class="close-tip" href="#">' + soy.$$escapeHtml("Ok\uff0c\u77e5\u9053\u4e86\uff01") + '</a></div></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragAndDropTip.soyTemplateName = 'AJS.DragAndDrop.Templates.dragAndDropTip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-utils.js' */
define("confluence-drag-and-drop/upload-utils",["ajs"],function(h){return{ErrorCode:{FILE_IS_A_FOLDER_ERROR:-602},filterFiles:function(d,a,g){for(var e=[],b=0,c=0;c<a.length;c++)if(4096>=a[c].nativeFile.size){var f=new FileReader;f.onload=function(){b++;e.push(this.currentFile);b===a.length&&g(d,e)};f.onerror=function(){d.removeFile(this.currentFile);d.trigger("Error",{code:h.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR,message:"File is a folder",file:this.currentFile});b++;b===a.length&&g(d,e)};
f.currentFile=a[c];f.readAsText(a[c].nativeFile)}else b++,e.push(a[c]),b===a.length&&g(d,e)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-utils","AJS.UploadUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/utils.js' */
define("confluence/ic/util/utils",["jquery","underscore","ajs","backbone","exports"],function(w,R,u,x,F){var m={INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments"),RESOLVED_INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments-resolved"),RICH_TEXT_EDITOR:u.DarkFeatures.isEnabled("confluence-inline-comments-rich-editor"),DANGLING_COMMENT:u.DarkFeatures.isEnabled("confluence-inline-comments-dangling-comment")},t=["dateautocomplete","confluencemacrobrowser","propertypanel","jiraconnector","dfe"],n=["autoresize","confluenceleavecomment"],r=["code"];var a,C,q;function O(){return R.clone(m)}function N(){return R.clone(t)}function j(){return R.clone(n)}function d(U,T){var W;if(!U||!T){return}var S=w(U.containingElement);if(!S.is(".inline-comment-marker.valid")){S=w("<div/>").append(U.html).find(".inline-comment-marker.valid")}if(S.length>0&&f(S)){var V=S.first().data("ref");W=T.findWhere({markerRef:V});return W}}function f(S){return S.filter(function(){return w(this).text().length>0}).length>0}function h(S){return u.contextPath()+"/pages/viewpage.action?pageId="+u.Meta.get("latest-page-id")+"&focusedCommentId="+S+"#comment-"+S}function s(Y,X,S){var V=X.match(/(focusedCommentId|replyToComment)=(\d+)/);if(V==null){return}var U=V[1]==="replyToComment";var W=parseInt(V[2],10);var T=Y.findWhere({id:W});if(T!=null){o(Y,T,S,U)}else{w.ajax({url:u.contextPath()+"/rest/inlinecomments/1.0/comments/replies/"+W+"/commentId"}).done(function(Z){T=Y.findWhere({id:Z});o(Y,T,S,U)})}}function o(V,U,S,T){if(U!=null){if(U.isResolved()){new S({collection:V,focusCommentId:U.get("id")}).render()}else{if(!U.isDangling()){x.trigger("ic:view",U,"permalink",{isReplyComment:T})}}}}function K(){if(u.Meta.get("current-user-avatar-url")){return u.contextPath()+u.Meta.get("current-user-avatar-url")}return u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/anonymous.png"}function P(){return u.Meta.get("user-display-name")||u.Meta.get("current-user-fullname")}function b(U){if(typeof U.selectionStart==="number"){var S=U.value.length;U.selectionStart=S;U.selectionEnd=S}else{if(typeof U.createTextRange!=null){U.focus();var T=U.createTextRange();T.collapse(false);T.select()}}}function L(S){b(S);window.setTimeout(function(){b(S)},1)}function E(X,W){var U="webkitAnimationEnd oanimationend msAnimationEnd animationend";var T=X.$wikiContent;var S=w.Deferred();if(W){var Y=w(".inline-comment-marker.active");T.addClass("ic-fade-in-animation");T.one(U,function(){w(this).removeClass("ic-fade-in-animation")});X.$el.addClass("ic-slide-in");X.$el.one(U,function(){w(this).removeClass("ic-slide-in");Y.addClass("ic-highlight-pulse");Y.one(U,function(){Y.removeClass("ic-highlight-pulse")})});S.resolve()}else{T.bind(U,function(Z){if(Z.originalEvent.animationName=="ic-fade-out-animation"){X.$wikiContent.removeClass("ic-fade-out-animation");X.$wikiContent.css("opacity","0.5")}else{if(Z.originalEvent.animationName=="ic-fade-in-animation"){X.$wikiContent.css("opacity","1");X.$wikiContent.removeClass("ic-fade-in-animation");X.$wikiContent.unbind(U)}}});T.addClass("ic-fade-out-animation");X.$el.addClass("ic-slide-out");var V=function(){X.$el.removeClass("ic-slide-out");X._emptySidebar();y().css("padding-right","0");T.addClass("ic-fade-in-animation");T.css("position","static");S.resolve();X.$el.off(U,V)};X.$el.on(U,V)}return S.promise()}function k(S){var T=w(S).closest("a");if(!T.length){T=w(S).find("a")}return T}function A(S){S.each(function(){var T=k(this);T.length&&T.off("mousemove")})}function Q(){return document.body.style.animation!==undefined||document.body.style.webkitAnimation!==undefined}function c(T){var S=T.parents(".expand-content.expand-hidden");S.each(function(U){w(this).siblings(".expand-control").click()})}function v(T){var S=u.Rte&&u.Rte.getEditor();if(T===true){if(M()&&S&&S.isDirty()){return confirm("\u8bc4\u8bba\u5c06\u4e22\u5931\u3002")}}else{if(S&&S.isDirty()&&Confluence.Editor&&!Confluence.Editor.getContentType){return confirm("\u8bc4\u8bba\u5c06\u4e22\u5931\u3002")}}return true}function M(){return !!w(".ic-sidebar #wysiwygTextarea_ifr").length}function G(){return u.Meta.get("use-keyboard-shortcuts")&&Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled}function p(S){S.$("button.ic-action-hide").tooltip({gravity:"se"});S.$("#ic-nav-next").tooltip({gravity:"s"});S.$("#ic-nav-previous").tooltip({gravity:"s"})}function B(W){if(J()){W.css("padding-bottom","20px");return}var U=W.height();var V=W.offset().top;var T=V+U;var X=this.getPageContainer().offset().top;var S=T-X;this.getPageContainer().css({"min-height":S+"px"})}function z(W){W=W.closest(".ic-display-comment-view");var V=this;var T=w(".confluence-embedded-image, .confluence-embedded-file img",W);var U=T.length;var S=0;if(U>0){T.off("load").one("load",function(){if(++S===U){V.recalculateContentHeight(W)}}).each(function(){if(this.complete){w(this).load()}})}}function J(){if(q===undefined){q=!!D().length}return q}function y(){if(a===undefined){a=w("#content")}return a}function D(){if(C===undefined){C=w("#splitter-content")}return C}function g(S,T){if(T&&!T.is(":visible")){return}if(S){if(this.isDocTheme()){this.getSplitterContent().scrollTop(T.offset().top-S)}else{window.scrollTo(0,T.offset().top-S)}}}function e(T){var S=w.Deferred();w.ajax({url:u.contextPath()+"/rest/api/content/"+T+"?expand=body.editor",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8"}).then(function(U){var V=U.body.editor.value;S.resolve(V)}).fail(function(U,W,V){S.reject(U,W,V)});return S.promise()}function I(S){var T=S.closest(".conf-macro");return(T.data("hasbody")===false||S.find('.conf-macro[data-hasbody="false"]').length>0)||r.indexOf(T.data("macro-name"))!=-1}function i(S){return S.closest(".user-mention").length>0||S.find(".user-mention").length>0}function l(S){return S.closest("a[href^='/']:not('.user-mention')").length>0||S.find("a[href^='/']:not('.user-mention')").length>0}function H(){var S={isDefault:true,path:u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};if(u.Meta.get("current-user-avatar-url")!=="/images/icons/profilepics/default.png"){S={isDefault:false,path:u.contextPath()+u.Meta.get("current-user-avatar-url")}}var T=u.Meta.get("remote-user");return{userName:T==""?null:T,displayName:u.Meta.get("current-user-fullname"),profilePicture:S}}F.overlappedSelection=d;F.focusedCommentUrl=h;F.showFocusedComment=s;F.getAuthorAvatarUrl=K;F.moveCaretToEnd=L;F.animateSidebar=E;F.getDarkFeatures=O;F.getInlineLinks=k;F.removeInlineLinksDialog=A;F.isAnimationSupported=Q;F.showHighlightContent=c;F.getUnsupportedRtePlugins=N;F.getSupportedRtePlugins=j;F.confirmProcess=v;F.getAuthorDisplayName=P;F.isKeyboardShortcutsEnable=G;F.addSidebarHeadingTooltip=p;F.hasEditorInSidebar=M;F.recalculateContentHeight=B;F.resizeContentAfterLoadingImages=z;F.isDocTheme=J;F.getPageContainer=y;F.getSplitterContent=D;F.scrollToCommentAfterToggleSideBar=g;F.getEditorFormat=e;F.containUnsupportedMacro=I;F.containInternalLink=i;F.containUserMetion=l;F.getCurrentUserInfo=H});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/text-highlighter.js' */
define("confluence/ic/util/text-highlighter",["jquery"],function(c){var a="ic-current-selection";function b(){c.textHighlighter.createWrapper=function(d){return c("<span></span>").addClass(d.highlightedClass)};this.$el=c("#content .wiki-content").first();if(this.$el.length>0){this.$el.textHighlighter({highlightedClass:a})}}b.prototype.highlight=function(e){if(this.$el.length===0){return}var d=c(this.$el.getHighlighter().doHighlight(e));return this.$el.getHighlighter().serializeHighlights(d)};b.prototype.removeHighlight=function(){if(this.$el.length===0){return}this.$el.getHighlighter().removeHighlights();return this};b.prototype.deserializeHighlights=function(d,e){if(this.$el.length===0){return}var f='<span class="inline-comment-marker" data-ref="'+e+'"></span>';return this.$el.getHighlighter().deserializeHighlights(d,f)};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment.js' */
define("confluence/ic/model/comment",["jquery","underscore","backbone","ajs","confluence/ic/util/utils","confluence/ic/model/reply-collection"],function(d,b,g,a,c,f){var e=g.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:a.Meta.get("remote-user"),authorAvatarUrl:a.contextPath()+a.Meta.get("current-user-avatar-url"),body:"",originalSelection:"",containerId:a.Meta.get("latest-page-id"),parentCommentId:"0",lastFetchTime:d("meta[name=confluence-request-time]").attr("content"),hasDeletePermission:true,hasEditPermission:true,hasResolvePermission:true,resolveProperties:{resolved:false,resolvedTime:0},serializedHighlights:"",deleted:false},urlRoot:a.contextPath()+"/rest/inlinecomments/1.0/comments",initialize:function(h){h=h||{};this._setHighlights(h.markerRef);var i=this;this.replies=new f();this.replies.url=function(){return i.url()+"/replies"};if(c.getDarkFeatures().DANGLING_COMMENT&&a.Meta.get("page-id")===a.Meta.get("latest-page-id")){if(this.isDangling()&&!this.isResolved()){this.resolve(true,{wait:true,dangling:true,success:b.bind(function(){g.trigger("ic:open:dangled",this)},this),error:b.bind(function(){g.trigger("ic:resolve:dangled:failed",this)},this)})}}},validate:function(){if(!this.get("body")){return true}},resolve:function(h,i){i=i||{};this.save({},b.extend(i,{url:this.urlRoot+"/"+this.get("id")+"/resolve/"+h+"/dangling/"+(i.dangling===true)}))},isResolved:function(){return this.get("resolveProperties").resolved},isDangling:function(){return this.highlight===undefined},isDeleted:function(){return this.get("deleted")},_setHighlights:function(i){var h;if(i!==undefined){h=d("#content .wiki-content:first").find('.inline-comment-marker[data-ref="'+i+'"]')}else{h=d(".ic-current-selection")}if(h.length!==0){this.highlights=h;this.highlight=h.first()}else{this.highlights=undefined;this.highlight=undefined}},destroy:function(i){i=i?b.clone(i):{};var h=this;var k=i.success;var j=function(n,m){var l=m.error;m.error=function(o){if(l){l(n,o,m)}n.trigger("error",n,o,m)}};i.success=function(l){if(k){k(h,l,i)}};j(this,i);return this.sync("delete",this,i)}});return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment-collection.js' */
define("confluence/ic/model/comment-collection",["jquery","backbone","ajs","underscore","confluence/ic/model/comment"],function(d,f,a,b,e){var c=f.Collection.extend({model:e,initialize:function(){this.listenTo(this,"sort",this._removeCachedMarkers)},url:function(){var h=a.contextPath();var g=a.Meta.get("page-id");return h+"/rest/inlinecomments/1.0/comments?containerId="+g},getResolvedCount:function(){return this.getResolvedComments().length},getUnresolveCount:function(){return this.reject(function(g){return g.isResolved()===true&&g.isDeleted()===false}).length},getResolvedComments:function(){return this.filter(function(g){return g.isResolved()===true&&g.isDeleted()===false})},getResolvedCommentsDesc:function(){return b.sortBy(this.getResolvedComments(),function(g){return 0-g.get("resolveProperties").resolvedTime})},getNextCommentOnPage:function(){return this._getCommentAtRelativeOffset(1)},getPrevCommentOnPage:function(){return this._getCommentAtRelativeOffset(-1)},_getCommentAtRelativeOffset:function(j){var k=this.getCommentsOnPage();var g=this.findWhere({active:true});if(g===undefined||k.length<=1){return null}var i=b.pluck(k,"id");var h=b.indexOf(i,g.get("id"));return k[(h+j+k.length)%k.length]},getCommentsOnPage:function(){return this.filter(function(g){return((g.isResolved()===false)&&!g.isDangling()&&(g.isDeleted()===false))||g.get("active")===true})},getCommentsOnPageCount:function(){return this.getCommentsOnPage().length},getActiveIndexWithinPageComments:function(){var h=b.pluck(this.getCommentsOnPage(),"id");var g=this.findWhere({active:true});if(g===undefined){return null}var i=g.get("id");return b.indexOf(h,i)},comparator:function(h,g){if(this.markers===undefined){this.markers=d("#content .wiki-content:first").find(".inline-comment-marker")}if(h.highlight===undefined){return 1}if(g.highlight===undefined){return -1}return this.markers.index(h.highlight)-this.markers.index(g.highlight)},_removeCachedMarkers:function(){this.markers=undefined}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply.js' */
define("confluence/ic/model/reply",["jquery","backbone","ajs","confluence/ic/util/utils",],function(d,e,b,c){var a=e.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:b.Meta.get("remote-user"),authorAvatarUrl:b.contextPath()+b.Meta.get("current-user-avatar-url"),body:"",commentId:"0",hasDeletePermission:true,hasEditPermission:!!b.Meta.get("remote-user")},urlRoot:function(){return b.contextPath()+"/rest/inlinecomments/1.0/comments/"+this.get("commentId")+"/replies"},sync:function(h,g,f){f=f||{};if(h==="create"){f.url=this.urlRoot()+"?containerId="+b.Meta.get("latest-page-id")}return e.sync.call(this,h,g,f)},validate:function(){if(!this.get("body")){return true}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply-collection.js' */
define("confluence/ic/model/reply-collection",["backbone","confluence/ic/model/reply"],function(c,a){var b=c.Collection.extend({model:a});return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = 'analytics/ic-analytics.js' */
define("confluence/ic/analytics",["ajs","underscore","backbone"],function(b,c,d){var a={};c.extend(a,d.Events);a.start=function(){if(this.running===true){return}this.running=true;this.send=function(e,f){b.trigger("analytics",{name:e,data:f})};this.listenTo(d,"ic:highlight-panel-click",function(){this.send("confluence.highlight.actions.comment.inline")});this.listenTo(d,"ic:view",function(f,e){this.send("confluence.comment.inline.view");if(e==="nav"){this.send("confluence.comment.inline.view.nav")}if(e==="permalink"){this.send("confluence.comment.inline.view.permalink")}});this.listenTo(d,"ic:overlap",function(){this.send("confluence.comment.inline.overlap")});this.listenTo(d,"ic:edit",function(){this.send("confluence.comment.inline.edit")});this.listenTo(d,"ic:persist",function(){this.send("confluence.comment.inline.create")});this.listenTo(d,"ic:sidebar:close",function(){this.send("confluence.comment.inline.sidebar.close")});this.listenTo(d,"ic:reply:persist",function(){this.send("confluence.comment.inline.reply")});this.listenTo(d,"ic:delete ic:reply:delete",function(){this.send("confluence.comment.inline.delete")});this.listenTo(d,"ic:resolved",function(){this.send("confluence.comment.inline.resolved")});this.listenTo(d,"ic:unresolved",function(){this.send("confluence.comment.inline.unresolved")});this.listenTo(d,"ic:resolved:view",function(f){var e={total:f};this.send("confluence.comment.inline.resolved.view",e)});this.listenTo(d,"ic:resolved:dismiss:recovery",function(){this.send("confluence.comment.inline.resolved.dismiss")});this.listenTo(d,"ic:resolved:show:recovery",function(){this.send("confluence.comment.inline.resolved.discovery")});this.listenTo(d,"ic:open:dangled",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.open.dangled",e)});this.listenTo(d,"ic:editor:load:fail",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.editor.load.fail",e)});this.listenTo(d,"ic:resolve:dangled:failed",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.resolved.dangled.failed",e)})};a.stop=function(){this.running=false;this.stopListening()};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = '/app/app.js' */
define("confluence/ic/app/app",["jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/comment-collection","confluence/ic/analytics","exports"],function(e,h,c,f,d,b,a){function g(){b.start();var n=true;var i=new d();function l(){q().done(function(s){s.afterSyncCommentCollection();s.displayPermalinkedComment(i)})}e("body").on("click","#view-resolved-comments",function(s){s.preventDefault();q().done(function(t){t.createResolvedCommentListView()})});i.fetch({cache:false}).done(function(){if(i.getCommentsOnPageCount()>0){l()}if(i.getResolvedCount()>0){q().done(function(s){s.updateResolvedCommentCountInToolsMenu()})}});var k=window.location.search;if(k.indexOf("focusedCommentId")!==-1){l()}h.listenTo(h,"ic:resolved",function(){l()});var o=e("#view-resolved-comments>span");o.text("\u5df2\u89e3\u51b3\u8bc4\u8bba"+c.format(" ({0})",i.getResolvedCount()));var p=function(u,t){var v=i.get(t);var s=false;if(v===undefined){v=new f({id:t});s=true}v.fetch({success:function(w){w._setHighlights(w.get("markerRef"));if(s){i.add(w)}else{v.replies.isFetched=false}h.trigger("ic:view",v,"quickreload")}})};c.bind("qr:show-new-thread",function(t,s){q().done(function(){p(t,s)})});c.bind("qr:add-new-highlight",function(u,t,s){q().done(function(){c.trigger("qr:add-new-highlight-text",[t,s])})});var j;var r;function q(){if(n){n=false;if(j){return j.promise()}j=e.Deferred();WRM.require("wrc!inline-comments-load-sidebar").then(function(){var s=require("confluence/ic/app/loader");s.init(i);j.resolve(s)})}r=false;return j.promise()}var m="com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment";if(Confluence&&Confluence.HighlightAction){Confluence.HighlightAction.registerButtonHandler(m,{onClick:function(s){q().done(function(t){if(r==false){r=true;t.loadSidebarOnClick(s)}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}a.init=g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:bootstrap', location = '/app/bootstrap.js' */
require(["jquery","ajs","confluence/ic/app/app"],function(c,a,b){if(a.Meta.get("page-id")&&(a.Meta.get("page-id")===a.Meta.get("latest-page-id"))){c(b.init)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"\u6587\u6863","excel spreadsheet":"\u7535\u5b50\u8868\u683c","powerpoint presentation":"\u6f14\u793a","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
define("confluence-editor/utils/file-types-utils",[],function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;return{getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/file-types-utils","AJS.Confluence.FileTypesUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-nice-type="' + soy.$$escapeHtml(opt_data.niceType) + '" data-file-src="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-linked-resource-id="' + soy.$$escapeHtml(opt_data.attachmentId) + '" data-linked-resource-type="attachment" data-linked-resource-container-id="' + soy.$$escapeHtml(opt_data.containerId) + '" data-linked-resource-default-alias="' + soy.$$escapeHtml(opt_data.fileName) + '" data-mime-type="' + soy.$$escapeHtml(opt_data.mimeType) + '" data-has-thumbnail="' + ((opt_data.hasThumbnail) ? 'true' : 'false') + '" data-linked-resource-version="' + soy.$$escapeHtml(opt_data.attachmentVersion) + '"' + ((opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '') + '><img src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" height="' + soy.$$escapeHtml(opt_data.height) + '" />' + ((! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedFile';
}


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" /></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedUnknownFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedUnknownFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_ignored) {
  return '<span class="overlay"></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_ignored) {
  return '<span class="comment-count-overlay"><span class="content">' + soy.$$escapeHtml(opt_data.commentCountRep) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_ignored) {
  return '<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.iconClass) + '"></i><span class="content"> ' + soy.$$escapeHtml(opt_data.fileType) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","vfm/components/embedded-file-view"],function(c,a,b){c(document).on("click",".confluence-embedded-file.unknown-attachment",function(d){d.preventDefault()});a.toInit(function(){c(".confluence-embedded-file-wrapper").each(function(){b.render({el:this})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-core-resources', location = 'loader/profiles.js' */
define("confluence-editor/profiles",["jquery","ajs"],function(d,c){return{createProfileForCommentEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavecomment confluencewatch autoresize".split(" ")}},createProfileForPageEditor:function(a){var b="searchreplace confluencedrafts confluenceimagedialog autocompletemacro confluencemacrobrowser flextofullsize referrer".split(" ");c.Meta.getBoolean("shared-drafts")&&c.DarkFeatures.isEnabled("unpublished-changes-lozenge")&&
b.push("unpublishedchanges");a&&a.versionComment&&b.push("confluenceversioncomment");a&&a.notifyWatchers&&b.push("confluencenotifywatchers");return{plugins:b}},createProfileForTemplateEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavetemplate flextofullsize confluencetemplateeditor".split(" ")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/profiles","AJS.Confluence.Editor._Profiles");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-util', location = 'jscripts/util.js' */
define("confluence-quick-edit/util",["window","ajs"],function(c,d){return{generateUUID:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},getBaseUrl:function(){var a=c.location.protocol.replace(/:$/,"")+"://"+c.location.host+"/"+c.location.pathname.replace(/^\//,""),b=c.location.search.replace(/^\?/,""),b=b.replace(/\&?focusedCommentId=\d+/,""),b=b.replace(/^\&/,"");return{url:a,search:b,addQueryParam:function(a,
b){this.search=this.search?this.search+"&"+a+"="+b:a+"="+b},toString:function(){return this.url+"?"+this.search}}},timeoutDeferred:function(a,b,c){"function"!==typeof b.reject&&d.log("WARNING: invalid, not rejectable object passed to AJS.Confluence.QuickEdit.Util.timeoutDeferred. You should use a Deferred object");setTimeout(function(){"pending"===b.state()&&(d.logError("Timeout: "+a),b.reject("timeout"))},c);return b}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/util","AJS.Confluence.QuickEdit.Util");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-message', location = 'editor/page-editor-message.js' */
define("confluence-editor/editor/page-editor-message",["jquery","ajs","aui/flag","document","underscore"],function(f,i,g,h,d){var b=Object.create(null),e=Object.create(null);h.addEventListener("aui-flag-close",function(a){a&&a.target&&(b=d.filter(Object.keys(b),function(c){return!f(a.target).find("span").hasClass(c)}))});return{handleMessage:function(a,c,d){b[a]||(e[a]?delete e[a]:c&&(b[a]=g({title:c.title?c.title:"",type:c.type,close:c.close?c.close:"manual",persistent:!1,body:"<span class='"+a+
"'>"+c.message+"</span>"}),d&&d()))},closeMessages:function(a){d.each(a,function(a){b[a]&&(b[a].close(),delete b[a])})},isDisplayed:function(a){return a in b},displayedErrors:function(){return Object.keys(b)},suppressMessage:function(a){e[a]={}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/quick-edit.js' */
define("confluence-quick-edit/quick-edit","ajs confluence/legacy jquery window document confluence-quick-edit/util wrm".split(" "),function(b,e,c,n,o,p,q){function r(){var a=new c.Deferred;b.Confluence.EditorLoader.load(function(){setTimeout(function(){a.resolve()},0)},function(){a.reject()});return a}var i={enableShortcut:function(){c("#editPageLink").addClass("full-load")},disableShortcut:function(){c("#editPageLink").removeClass("full-load")}},h=[],l={loadingContentTimeout:4E3,register:function(a){h.push(a)},
disableHandlers:function(){c.each(h,function(a,b){return b.disable()})},enableHandlers:function(){c.each(h,function(a,b){return b.enable()})},SaveBarBinder:{bind:function(a,b){a&&e.Editor.addSaveHandler(a);b&&e.Editor.addCancelHandler(b)}},activateEditor:function(a){function e(){function f(a){var b=new c.Deferred;q.require(a).done(function(a){b.resolve(a)}).fail(function(a){b.reject(a)});return b}var h,j=new c.Deferred;if(b.Rte&&b.Rte.getEditor()){b.debug("there is already an editor open");return j.reject("there is already an editor open")}if(!a.$container||
!a.$form){b.logError("activateEditor could not be initialsed: bad arguments",a);return j.reject("bad parameters")}h=b.Confluence.BlockAndBuffer.block(c(o));a.preActivate&&a.preActivate();i.disableShortcut();var m=a.timeoutResources||b.Confluence.EditorLoader.loadingTimeout,g=l.loadingContentTimeout,k=p.timeoutDeferred;c.when(k("resources",r(),m),k("fetch content",a.fetchContent||c.Deferred().resolve(),g),k("additional resources",a.additionalResources?f(a.additionalResources):c.Deferred().resolve(),
m)).done(function(e,f){var d={$container:a.$container,content:f,$form:a.$form,replayBufferedKeys:h};a.preInitialise&&a.preInitialise(d);c(".quick-comment-prompt",d.$container).hide();c(".quick-comment-body",d.$container).addClass("comment-body");var g=b.Confluence.EditorLoader.getPreloadContainer();if(d.content&&d.content.title){var k=d.content.title;g.find("#content-title").val(k)}d.$form.append(g.children());g.show();c("#editor-precursor").hide();c("#rte-savebar").find(".toolbar-split-left").hide();
var i=function(){d.editor=b.Rte.getEditor();d.$container.find(".quick-comment-loading-container").hide();d.$form.show();d.$form.addClass("fadeIn");var e=d.editor,f=d.content?d.content.editorContent:"",g=d.replayBufferedKeys;if(f){e.setContent(f);e.startContent=e.getContent({format:"raw",no_events:1});e.undoManager.clear()}g();e.undoManager.add();b.trigger("quickedit.success");b.trigger("quickedit.visible");b.trigger("add-bindings.keyboardshortcuts");b.trigger("active.dynamic.rte");c("div.aui-message.closeable").each(function(){var a=
c(this),d;if(!a.find(".icon-close").length){d=c('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){a.closeMessage()}).keypress(function(c){if(c.which===b.keyCode.ENTER||c.which===b.keyCode.SPACE){a.closeMessage();c.preventDefault()}});a.append(d)}});a.postInitialise&&a.postInitialise(d);l.SaveBarBinder.bind(a.saveHandler,a.cancelHandler);b.trigger("rte-quick-edit-ready");b.unbind("rte-ready",i);j.resolve()};b.bind("rte-ready",i);b.bind("rte-destroyed",a.postDeactivate||
function(){});b.Rte.BootstrapManager.initialise({plugins:a.plugins,toolbar:a.toolbar,excludePlugins:a.excludePlugins,isQuickEdit:true,onInitialise:a.onInitialise})}).fail(function(c,e){j.reject(c,e);b.logError("Error loading page quick edit. Falling back to normal edit URL...");b.trigger("analytics",{name:"rte.quick-edit.activate-editor.failed"});if(a.fallbackUrl){b.log("This parameter is deprecated. To be removed in the next major version (5.8 or 6.0). Please use the promise returned to bind custom action if the editor fails to load instead.");
n.location=a.fallbackUrl}});return j.promise()}if(a.closeAnyExistingEditor&&b.Rte&&b.Rte.getEditor()){var f=new c.Deferred;this.deactivateEditor().done(function(){e().done(function(){f.resolve()}).fail(function(a){f.reject(a)})}).fail(function(){b.debug("Could not deactivate current editor.");f.reject("Could not deactivate current editor.")});return f}return e()},deactivateEditor:function(){require("tinymce").execCommand("mceRemoveControl",true,"wysiwygTextarea");e.Editor.UI.toggleSavebarBusy(false);
var a=b.Confluence.EditorLoader.getPreloadContainer().empty();c(".editor-container").remove();c("#editor-precursor").remove();c("#anonymous-warning").remove();c(".quick-comment-prompt").show();c(".bottom-comment-panels").show();c("#editor-notification-container").empty();c(".action-reply-comment").removeAttr("reply-disabled");i.enableShortcut();e.Editor.removeAllSaveHandlers();e.Editor.removeAllCancelHandlers();return b.Confluence.EditorLoader.getEditorPreloadMarkup().done(function(c){a.append(c);
a.hide();(new b.Confluence.QuickEditCaptchaManager(a)).refreshCaptcha();b.trigger("rte-destroyed");b.unbind("rte-destroyed")})}};return l});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/quick-edit","AJS.Confluence.QuickEdit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/view.js' */
define("confluence-quick-edit/handlers/view",["jquery","ajs","window"],function(c,d,e){return function(){var a;sessionStorage.viewPort&&(a=JSON.parse(sessionStorage.viewPort));if(a&&a.pageId==d.params.pageId){var b;b=c("#main-content");var f=c("#header");b=-1!==a.blockIndex?b.children().first().children().eq(a.blockIndex).find(".innerCell").eq(a.columnIndex).children().eq(a.index):b.children().eq(a.index);e.scrollTo(0,b.offset().top+a.offset-f.outerHeight())}delete sessionStorage.viewPort}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/handlers/view",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/captcha-manager.js' */
define("confluence-quick-edit/captcha-manager",["jquery","ajs"],function(d,e){return function(f){function a(a){return d(f||"body").find(a)}return{refreshCaptcha:function(){var b=a("img.captcha-image");if(0<b.length){var c=Math.random();b.attr("src",e.contextPath()+"/jcaptcha?id="+c);a('input[name="captchaId"]').val(c);a('input[name="captchaResponse"]').val("")}},getCaptchaData:function(){return{id:a('input[name="captchaId"]').val(),response:a('input[name="captchaResponse"]').val()}}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/captcha-manager","AJS.Confluence.QuickEditCaptchaManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/shortcut.js' */
define("confluence-quick-edit/handlers/shortcut",["ajs"],function(a){var d=!1;a.bind("initialize.keyboardshortcuts add-bindings.keyboardshortcuts",function(){d=!0});a.bind("remove-bindings.keyboardshortcuts",function(){d=!1});return{createShortcut:function(f,g){function b(){c=c||a.whenIType(f).moveToAndClick(g)}function e(){c&&c.unbind();c=null}var c;return{bind:function(){d&&b();a.bind("initialize.keyboardshortcuts",b);a.bind("add-bindings.keyboardshortcuts",b);a.bind("remove-bindings.keyboardshortcuts",
e)},unbind:function(){e();a.unbind("initialize.keyboardshortcuts",b);a.unbind("add-bindings.keyboardshortcuts",b);a.unbind("remove-bindings.keyboardshortcuts",e)}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/shortcut","AJS.Confluence.QuickEdit.KeyboardShortcuts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/page.js' */
define("confluence-quick-edit/handlers/page","jquery ajs confluence/legacy confluence-quick-edit/handlers/shortcut confluence/aui-overrides window".split(" "),function(c,b,j,o,p,k){function n(a,b,e){var d={pageId:e,blockIndex:-1,columnIndex:-1,index:-1,offset:0,hasBlock:function(){return this.blockIndex!==-1}},h=false,l=function(a,c){var e=a.offset();if(g(a)){d.index=c;d.offset=b-e.top;h=true}},g=function(a){var c=a.offset();return c.top-8<=b&&c.top+a.height()>=b};if(a.children().length===1&&a.children().first().hasClass("contentLayout2")){a.children().first().children().each(function(a){if(!d.hasBlock()&&
g(c(this)))d.blockIndex=a});if(d.hasBlock()){a=a.children().first().children().eq(d.blockIndex).find(".innerCell");a.each(function(a){if(d.columnIndex===-1){var b=c(this).children().length;if(b>0)if(b<2){if(c(this).children().first().height()>25)d.columnIndex=a}else d.columnIndex=a}});a.eq(d.columnIndex).children().each(function(a){h||l(c(this),a)})}}else a.children().each(function(a){h||l(c(this),a)});return h?d:null}function q(a){var f=require("tinymce");g.disable();p.metaToParams();if(b.DarkFeatures.isEnabled("confluence.view.edit.transition")){var e=
c("#main-content"),d=c("#header"),h=c("#main-header"),d=k.pageYOffset+d.outerHeight()+h.outerHeight();i=n(e,d,b.params.pageId);b.trigger("quick-edit.viewport.saved");var l=function(){c(f.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit");c("#content").css({paddingRight:0});b.unbind("quickedit.visible",l)};b.bind("quickedit.visible",l)}e=a.$form;d=b.Meta.get("content-type")==="page"?"doeditpage":"doeditblogpost";d=b.contextPath()+"/pages/"+d+".action?pageId="+j.getContentId();
c(".ia-splitter-left").remove();try{c("#main").unwrap()}catch(m){}c("#rte").removeClass("editor-default").addClass("editor-fullheight");a.$container.children().remove();c(".editor-container").children().eq(0).unwrap();e.attr({"class":"editor aui",action:d,name:"editpageform",id:"editpageform",style:""});a.$container.append(e);a.$container.removeClass("view").addClass("edit");c("body").addClass("contenteditor edit")}function r(a){require("tinymce");c("#editor-precursor").show();c("#rte-savebar").find(".toolbar-split-left").show();
if(k.history.pushState){var f=c("#editPageLink").attr("href");if(f!=k.location.pathname+k.location.search){history.pushState({quickEdit:true},"",f);b.trigger("rte-quick-edit-push-state",f)}}else{k.location.hash="editor";b.trigger("rte-quick-edit-push-hash")}f=a.content;if(f.permissions)for(var e in f.permissions)c("#"+e).attr("value",f.permissions[e]);c("#originalVersion").val(a.content.pageVersion);b.Meta.set("page-version",a.content.pageVersion);b.Meta.set("page-title",a.content.title);c('meta[name="page-version"]').attr("content",
a.content.pageVersion);c('meta[name="ajs-page-version"]').attr("content",a.content.pageVersion);c("#syncRev").val(a.content.syncRev);b.Meta.set("conf-revision",a.content.confRev);c('meta[name="ajs-conf-revision"]').attr("content",a.content.confRev);b.Meta.set("shared-drafts",a.content.sharedDrafts);c('meta[name="ajs-shared-drafts"]').attr("content",a.content.sharedDrafts);if(b.Meta.getBoolean("fallback-mode")!=="undefined"&&b.Meta.getBoolean("fallback-mode")!==a.content.fallbackMode){e=a.content.fallbackMode?
"Collaborative editing is offline right now. Refresh the page to continue editing.":"Collaborative editing was switched off, but it\u0027s back in business. Refresh the page to keep editing.";b.trigger("editor.error.message",{messageKey:"fallback-mode-transition",message:e,disablePublish:true})}b.Meta.set("fallback-mode",a.content.fallbackMode);c('meta[name="ajs-fallback-mode"]').attr("content",a.content.fallbackMode);e=a.content.atlToken;b.Meta.set("atl-token",e);c('input[name="atl_token"]').val(e);b.trigger("analyticsEvent",{name:"quick-edit-success"});c("#navigation").remove();
var d=new Date,h=function(b,c){if(d&&!(c.type==="keydown"&&[91,92,93,224,33,34,37,38,39,40,16,17,18,20,112,113,114,115,116,117,118,119,120,121,122,123].indexOf(c.keyCode)>-1)){var e=new Date-d;d=null;j.Analytics.publish("confluence.editor.transition.firstkeydown",{delay:e});a.editor.onKeyDown.remove(h);a.editor.onChange.remove(h)}};a.editor.onKeyDown.add(h);a.editor.onChange.add(h)}function s(a){setTimeout(function(){if(i){var b;b=c(a.getBody());b=i.hasBlock()?b.children().first().children().eq(i.blockIndex).find(".innerCell").eq(i.columnIndex).children().eq(i.index):
b.children().eq(i.index);a.getWin().scrollTo(0,b.offset().top+i.offset);c("#main").css("visibility","visible")}})}function t(){var a=new c.Deferred,f=c.ajax({url:b.contextPath()+"/rest/tinymce/1/content/"+j.getContentId()+".json",cache:false});f.success(function(b){a.resolve(b)});f.error(function(b){a.reject("error fetching content",b)});return a}var m,i,g={editShortcut:o.createShortcut("e","#editPageLink"),activateEventHandler:function(a){if(!a.metaKey&&!a.shiftKey&&!a.ctrlKey&&!a.altKey&&!(a.which===
2||a.which===3)){a.preventDefault();if(m&&m.state()==="pending")b.debug("Editor is being activated. Ignoring handler...");else{m=g.activateEditor();a=c("#editPageLink");a.find(".aui-icon").css("visibility","hidden");a.parent().spin({left:"10px"})}}},enable:function(){if(c("body").is(".theme-default")){var a=c("#editPageLink");a.bind("click",g.activateEventHandler);a.removeClass("full-load");g.editShortcut.bind();b.debug("QuickPageEdit enabled")}else b.debug("QuickPageEdit not enabled")},activateEditor:function(){var a=
c("#content").find(".quick-comment-form"),f=function(){var a=require("tinymce").activeEditor.getWin(),d=c(a.document).find("#tinymce");if(a=n(d,a.pageYOffset,b.params.pageId))sessionStorage.viewPort=JSON.stringify(a)};return b.Confluence.QuickEdit.activateEditor({fetchContent:t(),$container:c("#content"),$form:a.length?a:c('<form method="post"></form>'),preInitialise:q,postInitialise:r,saveHandler:function(){b.DarkFeatures.isEnabled("confluence.view.edit.transition")&&f();j.Editor.getNumConcurrentEditors()>
1&&b.Confluence.Analytics.publish("rte.notification.concurrent-editing.save",{numEditors:j.Editor.getNumConcurrentEditors(),pageId:b.params.pageId,draftType:b.params.draftType})},cancelHandler:function(){b.DarkFeatures.isEnabled("confluence.view.edit.transition")&&f();j.Editor.getNumConcurrentEditors()>1&&b.Confluence.Analytics.publish("rte.notification.concurrent-editing.cancel",{numEditors:j.Editor.getNumConcurrentEditors(),pageId:b.params.pageId,draftType:b.params.draftType})},plugins:b.Confluence.Editor._Profiles.createProfileForPageEditor({versionComment:true,
notifyWatchers:true}).plugins,onInitialise:function(a){b.DarkFeatures.isEnabled("confluence.view.edit.transition")&&a.onLoad.add(s)}}).fail(function(a,d){if(d&&d.status===423){var f=JSON.parse(d.responseText).user,g=c("#editPageLink");g.find(".aui-icon").css("visibility","visible");g.parent().spinStop();b.MessageHandler.flag({type:"info",title:"Unable to edit",body:b.format("Collaborative editing is offline right now, and {0} is editing this page. Try again in a few minutes.",f),close:"manual"})}else k.location=c("#editPageLink").attr("href")})},
disable:function(){b.debug("QuickPageEdit disabled.");g.editShortcut.unbind();c("#editPageLink").unbind("click",g.activateEventHandler)}};b.Confluence.QuickEdit.register(g);return{disable:g.disable}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/page","AJS.Confluence.QuickEdit.QuickEditPage");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/init.js' */
define("confluence-quick-edit/init",["ajs","jquery","window"],function(a,b,c){return function(){b("body").hasClass("page-gadget")?a.debug("QuickComment: editor preload is disabled"):b(c).load(function(){a.debug("QuickComment: instigated background loading of the comment editor.");a.Confluence.EditorLoader.load()});a.Confluence.QuickEdit.enableHandlers();a.trigger("rte-quick-edit-enable-handlers")}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/init",function(a){var b=require("ajs");b.DarkFeatures.isEnabled("disable-quick-edit")?b.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually."):b.toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment.js' */
define("confluence-quick-edit/handlers/comment","ajs confluence/legacy jquery aui/flag confluence-quick-edit/util confluence-editor/editor/page-editor-message".split(" "),function(a,f,d,m,k,g){function l(a,c){var h=a.match(RegExp("[?&]"+c+"=(\\d+)"));return h&&h.length>1?parseInt(h[1]):0}d(function(){a.AppLinksInitialisationBinder=function(b){a.bind("init.rte",b)}});var e={timeout:8E3,showLoadingEditorErrorMessage:function(){a.trigger("rte-quick-comment-loading-failed");m({type:"error",title:"Error",
persistent:false,body:"\u52a0\u8f7d\u8bc4\u8bba\u7f16\u8f91\u5668\u51fa\u9519"})},preInitialise:function(){a.Confluence.QuickEdit.QuickEditPage.disable();a.Meta.set("content-type","comment");a.Meta.set("draft-type","");a.params.contentType="comment";a.params.draftType="";a.Meta.set("use-inline-tasks","false");d("#editor-precursor").children().eq(0).hide();d("#pagelayout-menu").parent().hide();d("#page-layout-2-group").hide();d("#rte-button-tasklist").remove();d("#pluggable-status-container").remove();
d("#rte-insert-tasklist").parent().remove()},postInitialise:function(b){a.Rte.editorFocus(b.editor)},delegatingSaveCommentHandler:function(a){return a.asyncRenderSafe?e.ajaxSaveCommentHandler(a):e.reloadPageSaveCommentHandler(a)},reloadPageSaveCommentHandler:function(a){var c=k.getBaseUrl();c.addQueryParam("focusedCommentId",a.id);c.addQueryParam("refresh",+new Date);window.location.href=c.toString()+"#comment-"+a.id},ajaxSaveCommentHandler:function(b){var c={isDefault:true,path:a.Meta.get("static-resource-url-prefix")+
"/images/icons/profilepics/default.png"};a.Meta.get("current-user-avatar-uri-reference")!==a.contextPath()+"/images/icons/profilepics/default.png"&&(c={isDefault:false,path:a.Meta.get("current-user-avatar-uri-reference")});var h=a.Meta.get("remote-user"),d={userName:h===""?null:h,displayName:a.Meta.get("current-user-fullname"),profilePicture:c};e.cancelComment().done(function(){f.CommentDisplayManager.addOrUpdateComment(d,b,true,false);a.trigger("page.commentAddedOrUpdated",{commentId:b.id})})},cancelHandler:function(){if(a.Confluence.QuickEdit){a.Rte.Content.editorResetContentChanged();
a.Confluence.QuickEdit.deactivateEditor()}},createCommenterParam:function(b,c,d){return{userName:c||a.Meta.get("remote-user")||null,displayName:d||a.Meta.get("user-display-name"),profilePicture:{isDefault:b.hasClass("defaultLogo"),path:b.attr("src")}}},createSaveHandler:function(b,c){var h=k.generateUUID();return function(e){e.preventDefault();if(a.Rte.Content.isEmpty()){a.Confluence.EditorNotification.notify("warning","\u8bc4\u8bba\u6587\u5b57\u4e3a\u7a7a\uff0c\u4e0d\u80fd\u6dfb\u52a0\u7a7a\u7684\u8bc4\u8bba\u3002");f.Editor.UI.toggleSavebarBusy(false)}else{var i=
e=0,j=a.Confluence.EditorLoader.getEditorForm();if(j.is("form")){i=j.attr("action");e=l(i,"parentId");i=l(i,"commentId")}var g=new a.Confluence.QuickEditCaptchaManager(j),j=function(a){c(a);g.refreshCaptcha()},k=d("#watchPage").is(":checked");i>0?f.Editor.CommentManager.updateComment(f.getContentId(),i,a.Rte.Content.getHtml(),k,g.getCaptchaData(),b,j):f.Editor.CommentManager.saveComment(f.getContentId(),e,a.Rte.Content.getHtml(),k,h,g.getCaptchaData(),b,j)}}},saveCommentErrorHandler:function(b){f.Editor.UI.toggleSavebarBusy(false);
var c;if(b&&b.search(/captcha/i)!==-1){c="\u8f93\u5165\u7684\u6587\u5b57\u4e0e\u56fe\u7247\u4e2d\u7684\u6587\u5b57\u4e0d\u4e00\u81f4\u3002";g.closeMessages(["captcha-response-failed"]);g.handleMessage("captcha-response-failed",{type:"error",message:c})}else{c="\u4fdd\u5b58\u8bc4\u8bba\u5931\u8d25\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002";g.closeMessages(["server-offline"]);g.handleMessage("server-offline",{type:"error",message:c})}a.logError("Error saving comment",b)},cancelComment:function(){a.Rte.Content.editorResetContentChanged();return a.Confluence.QuickEdit.deactivateEditor()},
proceedWithActivation:function(){var b=new d.Deferred,c=a.Rte&&a.Rte.getEditor();if(c)if(c.isDirty()&&!f.Editor.isEmpty())if(confirm("\u8bc4\u8bba\u5c06\u4e22\u5931\u3002"))b=e.cancelComment();else return b.reject();else b=e.cancelComment();else b.resolve();return b}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment","AJS.Confluence.QuickEdit.QuickComment");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/top-level.js' */
define("confluence-quick-edit/handlers/comment/top-level",["ajs","jquery","confluence-quick-edit/handlers/shortcut","confluence-quick-edit/handlers/comment","window"],function(b,a,e,c,f){function g(a){c.preInitialise(a)}function h(b){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#rte-savebar").scrollWindowToElement();c.postInitialise(b)}function i(){b.Confluence.EditorLoader.resourcesLoaded()||(b.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"}),
a(".quick-comment-prompt").hide(),a(".quick-comment-loading-container").fadeIn().spin("medium"))}function j(b){b.preventDefault();f.location=a("#add-comment-rte").attr("href")}var k=b.DarkFeatures.isEnabled("editor.slow.comment.disable"),d={commentShortcut:e.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(e){e.preventDefault();c.proceedWithActivation().done(function(){var d=c.createSaveHandler(c.delegatingSaveCommentHandler,c.saveCommentErrorHandler);return b.Confluence.QuickEdit.activateEditor({preActivate:i,
$container:a("form[name=inlinecommentform]").closest(".quick-comment-container"),$form:a("form[name=inlinecommentform]"),preInitialise:g,saveHandler:d,cancelHandler:c.cancelHandler,postInitialise:h,plugins:b.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:c.timeout}).fail(function(){k?c.showLoadingEditorErrorMessage():f.location=a("#add-comment-rte").attr("href")})}).fail(function(){a("#comments-section").one("click",
".quick-comment-prompt",d.activateEventHandler)})},enable:function(){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#add-comment-rte").removeClass("full-load");this.commentShortcut.bind()},disable:function(){a("#comments-section").off("click",".quick-comment-prompt");this.commentShortcut.unbind()}};b.Confluence.QuickEdit.register(d);return{bindCommentAreaFallbackHandler:function(){a("#comments-section").delegate(".quick-comment-prompt","click",j)},cancelComment:function(){b.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.Confluence.QuickEdit.QuickComment.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/top-level","AJS.Confluence.QuickEdit.QuickComment.TopLevel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/reply.js' */
define("confluence-quick-edit/handlers/comment/reply",["ajs","confluence/legacy","jquery"],function(a,g,b){function i(b){a.Confluence.QuickEdit.QuickComment.preInitialise(b);b.$container.scrollWindowToElement()}function j(b){a.Confluence.QuickEdit.QuickComment.postInitialise(b)}function h(b){var e=b.attr("id").match(/comment-(\d+)/),f=0;e?f=parseInt(e[1]):(a.trigger("analytics",{name:"rte.quick-edit.get-reply-parent.failed"}),a.logError("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id "+
b.attr("id")));return f}function k(){b(".comment.reply").closest(".comment-threads").remove()}var l=a.DarkFeatures.isEnabled("editor.slow.comment.disable"),d={activateEventHandler:function(d){d.preventDefault();d.stopPropagation();var e=this;if(b(e).attr("reply-disabled"))return!1;a.Confluence.QuickEdit.QuickComment.proceedWithActivation().done(function(){var f=b(e).closest("div.comment"),c=b(".quick-comment-container img.userLogo"),c=a.Confluence.QuickEdit.QuickComment.createCommenterParam(c),c=
{contentId:g.getContentId(),parentCommentId:h(f),commenter:c,context:{contextPath:a.Meta.get("context-path"),staticResourceUrlPrefix:a.Meta.get("static-resource-url-prefix")}},c=b(g.Templates.Comments.displayReplyEditorLoadingContainer(c)),d=b(".quick-comment-loading-container",c);d.hide();f.after(c);a.Confluence.EditorLoader.resourcesLoaded()?a.trigger("analytics",{name:"rte.quick-edit.reply-comment.no-spinner"}):(a.trigger("analytics",{name:"rte.quick-edit.reply-comment.spinner"}),f.after(c),d.fadeIn(),
d.spin("medium"),d[0].scrollIntoView());c=b(e).closest(".comment-thread").find(".quick-comment-container");a.Meta.set("form-name",b("form",c).attr("name"));a.Confluence.QuickEdit.activateEditor({$container:c,$form:b("form.quick-comment-form[name=threadedcommentform]"),preInitialise:i,postInitialise:j,saveHandler:a.Confluence.QuickEdit.QuickComment.createSaveHandler(a.Confluence.QuickEdit.QuickComment.delegatingSaveCommentHandler,a.Confluence.QuickEdit.QuickComment.saveCommentErrorHandler),cancelHandler:a.Confluence.QuickEdit.QuickComment.cancelHandler,
plugins:a.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:k,additionalResources:["wrc!comment-editor"],timeoutResources:a.Confluence.QuickEdit.QuickComment.timeout}).fail(function(){l?a.Confluence.QuickEdit.QuickComment.showLoadingEditorErrorMessage():window.location=b("#reply-comment-"+h(f)).attr("href")});b(e).attr("reply-disabled",!0)})},enable:function(){b("#comments-section").delegate(".action-reply-comment","click",d.activateEventHandler)},disable:function(){b("#comments-section").undelegate(".action-reply-comment",
"click")}};a.Confluence.QuickEdit.register(d);return{cancelComment:function(){a.log("'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return a.Confluence.QuickEdit.QuickComment.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/reply","AJS.Confluence.QuickEdit.QuickComment.Reply");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/edit.js' */
define("confluence-quick-edit/handlers/comment/edit",["ajs","confluence-quick-edit/handlers/comment","jquery","confluence/legacy"],function(e,b,d,i){function j(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function k(a){b.postInitialise(a)}function h(a){return(a=a.attr("id").match(/comment-(\d+)/))?parseInt(a[1]):0}function l(a){var b=new d.Deferred;d.ajax({url:e.contextPath()+"/rest/api/content/"+a+"?expand=body.editor",cache:!1}).done(function(a){!a||!a.body||!a.body.editor?b.reject("invalid response from loading comment rest endpoint"):
b.resolve({editorContent:a.body.editor.value})}).fail(function(){b.reject("error fetching content")});return b}function m(){var a=d(".comment.edit");a.prev(".comment").show();a.remove()}var n=e.DarkFeatures.isEnabled("editor.slow.comment.disable"),g={activateEventHandler:function(a){var g=this;a.preventDefault();a.stopPropagation();b.proceedWithActivation().done(function(){var a=d(g).closest("div.comment"),c;c=a.find(".author .confluence-userlink");var f=a.find(".comment-user-logo img.userLogo");
c=b.createCommenterParam(f,c.attr("data-username"),c.text());c={contentId:i.getContentId(),commentId:h(a),commenter:c,context:{contextPath:e.Meta.get("context-path"),staticResourceUrlPrefix:e.Meta.get("static-resource-url-prefix")},mode:"edit"};c=d(i.Templates.Comments.displayEditEditorContainer(c));f=d(".quick-comment-loading-container",c);a.hide();a.after(c);f.fadeIn().spin("medium");f[0].scrollIntoView();c=a.next(".quick-comment-container");e.Meta.set("form-name",d("form",c).attr("name"));e.Confluence.QuickEdit.activateEditor({$container:c,
$form:d("form.quick-comment-form[name=editcommentform]"),fetchContent:l(h(a)),preInitialise:j,postInitialise:k,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:e.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:m,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){n?b.showLoadingEditorErrorMessage():window.location=d("#edit-comment-"+h(a)).attr("href")})})},
enable:function(){d("#comments-section").delegate(".comment-action-edit","click",g.activateEventHandler)},disable:function(){d("#comments-section").undelegate(".comment-action-edit","click")}};e.Confluence.QuickEdit.register(g);return{cancelComment:function(){e.log("'AJS.Confluence.QuickEdit.QuickComment.Edit.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return b.cancelComment()}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/edit","AJS.Confluence.QuickEdit.QuickComment.Edit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/editor-comment-manager.js' */
define("confluence-quick-edit/editor-comment-manager",["ajs","jquery","confluence/legacy"],function(d,e,j){return function(){function k(a,f,l,i,b,g,h){d.trigger("analytics",{name:"confluence.page.comment.create",data:{pageID:d.Meta.get("page-id")}});a={type:"POST",url:a,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{html:f,watch:l,uuid:i},dataType:"json",cache:!1,headers:{"X-Atlassian-Token":"no-check"},success:function(a){g(a)},error:function(a,c,b){c=c+": "+b;a.responseText&&
(c=c+" - "+a.responseText);h(c)},timeout:12E4};b&&b.id&&(a.headers["X-Atlassian-Captcha-Id"]=b.id,a.headers["X-Atlassian-Captcha-Response"]=b.response);e.ajax(a)}return{addComment:function(a,f,d,i,b,g,h,e,c){j.Editor.CommentManager.saveComment(a,f,d,function(a){j.CommentDisplayManager.addComment(h,a,g);e(a)},c)},saveComment:function(a,f,e,i,b,g,h,j){var c=null,c=f?d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"/comment?actions=true":d.contextPath()+"/rest/tinymce/1/content/"+a+"/comment?actions=true";
k(c,e,i,b,g,h,j)},updateComment:function(a,f,e,i,b,g,h){a=d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"?actions=true";k(a,e,i,null,b,g,h)}}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/editor-comment-manager",function(d){var e=require("confluence/legacy");require("ajs").bind("init.rte",function(){e.Editor.CommentManager=d()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation-util.js' */
define("confluence-quick-edit/view-content/pushed-navigation-util",["ajs","jquery","window"],function(d,f,a){function c(){return d.Rte&&d.Rte.getEditor()&&!!f("#editpageform").length}var b=a.location.hash,e=a.location.search;return{isInEditPage:c,filterPreviewHashChange:function(){var g=c()||a.history.pushState||!(a.location.hash&&0===a.location.hash.indexOf("#!"))&&!(b&&0===b.indexOf("#!"));b=a.location.hash;return g},filterPreviewNavigationEvent:function(){var b=c()||!/[?&]preview=([^&]*)/.test(a.location.search)&&
!/[?&]preview=([^&]*)/.test(e);e=a.location.search;return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/view-content/pushed-navigation-util","Confluence.Editor.PushedNavUtil");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation.js' */
define("confluence-quick-edit/view-content/pushed-navigation","jquery underscore window confluence/legacy ajs confluence-quick-edit/view-content/pushed-navigation-util".split(" "),function(b,n,a,g,c,d){function e(){if(h){if(f.split("#")[0]!=a.location.href.split("#")[0]){b(a).unbind("popstate",k);a.location.reload()}}else f.split("#")[0]==a.location.href.split("#")[0]&&f.split("#")[1]!=="editor"||a.location.reload()}function i(){f=a.location.href}function l(){var b=g.Editor.Drafts.unloadMessage();
if(b){g.Editor.Drafts.unBindUnloadMessage();if(confirm(b+"\n\n"+"\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u7ee7\u7eed\uff0c\u6216\u8005\u201c\u53d6\u6d88\u201d\u7ee7\u7eed\u5f85\u5728\u6b64\u9875\u9762\u3002")){c.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"});e()}else{c.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"});if(h){j=true;a.history.forward()}else a.location.hash="editor";g.Editor.Drafts.bindUnloadMessage()}}else e()}function o(){d.isInEditPage()?a.location.hash!=="#editor"&&l():e()}function k(){j?j=false:d.isInEditPage()?l():e()}function m(a,b){return function(){n.every(b,
function(a){return a()})&&a()}}var h=!!a.history.pushState,j=false,f=a.location.href,p=[d.filterPreviewHashChange],q=[d.filterPreviewNavigationEvent];c.bind("rte-quick-edit-enable-handlers",function(){a.location.hash==="#editor"&&b("#editPageLink").click()});return function(){i();if(h){b(a).bind("popstate",m(k,q));b(a).bind("rte-quick-edit-push-state",i)}else{b(a).bind("hashchange",m(o,p));b(a).bind("rte-quick-edit-push-hash",i)}}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/view-content/pushed-navigation",function(b){require("ajs").toInit(function(){setTimeout(b,0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-trigger', location = 'node_modules/@atlassian/aui/src/js/aui/trigger.js' */
("undefined"===typeof window?global:window).__95749f652ed34ee0455a0368fbf75645=function(){function e(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){if(a.isEnabled()){var c=document.getElementById(a.getAttribute("aria-controls"));c&&c.message&&c.message(b)}}"use strict";var g=e(__2fd777cca7fe187ff4048afabed6a6b5),h=e(__7e0423727525720eec50a0fbce0cace2),f=e(__7a4f1c37715fcec19fc8ec09205ad4f4);(0,f.default)("data-aui-trigger",{type:f.default.type.ATTRIBUTE,events:{click:function(a,b){var c=
b.target,c=(0,g.default)(c).closest("a[href]",a);c.length&&c[0]!==a||(d(a,b),b.preventDefault())},mouseenter:function(a,b){d(a,b)},mouseleave:function(a,b){d(a,b)},focus:function(a,b){d(a,b)},blur:function(a,b){d(a,b)}},prototype:{disable:function(){this.setAttribute("aria-disabled","true")},enable:function(){this.setAttribute("aria-disabled","false")},isEnabled:function(){return"true"!==this.getAttribute("aria-disabled")}}});(0,h.default)("aui/trigger");return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-trigger', location = 'src/soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.trigger.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '" ' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '" aria-controls="' + soy.$$escapeHtml(opt_data.menu.id) + '" aria-haspopup="true" role="button"' + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '') + (((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex || (! opt_data.extraAttributes.href || ! opt_data.extraAttributes.tabindex))) ? ' tabindex="0"' : '') + ' data-aui-trigger' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + ((! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + '>';
};
if (goog.DEBUG) {
  aui.trigger.trigger.soyTemplateName = 'aui.trigger.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-attributes', location = 'node_modules/@atlassian/aui/src/js/aui/internal/attributes.js' */
("undefined"===typeof window?global:window).__188d80192fc203276ef4023d49a19fca=function(){function d(a){return null!==a}function e(a,b,c){c?a.setAttribute(b,""):a.removeAttribute(b)}function f(a,b){var c=function(a){return a.toLowerCase()===b.toLowerCase()},d=null===b,e=!d&&!a.values.filter(c).length;return d?a.hasOwnProperty("missingDefault")?a.missingDefault:null:e?a.hasOwnProperty("invalidDefault")?a.invalidDefault:a.hasOwnProperty("missingDefault")?a.missingDefault:null:a.values.length?a.values.filter(c)[0]:
null}function g(a,b,c){a.setAttribute(b.attribute,c)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.computeBooleanValue=d;b.setBooleanAttribute=e;b.computeEnumValue=f;b.setEnumAttribute=g;b.default={computeBooleanValue:d,setBooleanAttribute:e,computeEnumValue:f,setEnumAttribute:g};return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-enforcer', location = 'node_modules/@atlassian/aui/src/js/aui/internal/enforcer.js' */
("undefined"===typeof window?global:window).__db30000271e9ecc5679f29c76598f9cd=function(){var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d;var a=__4f4d08f5cd21aa65e83ce6be211355f4;if(a&&a.__esModule)d=a;else{var b={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);b.default=a;d=b}c.default=function(a){function c(b){return e(function(){return a.hasAttribute(b)},b+" wasn't defined")}function b(d){if(!c(d,a))return!1;var f=a.getAttribute(d);
return e(function(){return document.getElementById(f)},'an element with id set to "'+f+'" was not found')}function e(b,c){return!b()?(a?d.error(c,a):d.error(c),!1):!0}return{attributeExists:c,refersTo:b,satisfiesRules:e,ariaControls:function(){return b("aria-controls")},ariaOwns:function(){return b("aria-owns")}}};return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-inline-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/inline-dialog2.js' */
("undefined"===typeof window?global:window).__44e8af835fb6de354c20ddffb240864c=function(){function c(a){return a&&a.__esModule?a:{"default":a}}function k(a,b){var c=document.querySelector('[aria-controls="'+a.id+'"]');c&&b(c)}function m(a){a=a.target;(0,d.default)(a).set("mouse-inside",!0);a.message({type:"mouseenter"})}function n(a){a=a.target;(0,d.default)(a).set("mouse-inside",!1);a.message({type:"mouseleave"})}function l(a){(0,d.default)(a).set("mouse-inside",void 0);a.removeEventListener("mouseenter",
m);a.removeEventListener("mouseleave",n);"hover"===a.respondsTo&&((0,d.default)(a).set("mouse-inside",!1),a.addEventListener("mouseenter",m),a.addEventListener("mouseleave",n))}function i(a){var b=!a.hasAttribute("aria-hidden"),c=a.hasAttribute("open");if(b||a.open!==c)c?((0,d.default)(a).set("is-processing-show",!0),(0,e.default)(a).show(),(0,e.default)(a).isVisible()?k(a,function(b){a._auiAlignment||(a._auiAlignment=new o.default(a,b));a._auiAlignment.enable();b.setAttribute("aria-expanded","true")}):
a.open=!1,(0,d.default)(a).set("is-processing-show",!1)):((0,e.default)(a).hide(),(0,e.default)(a).isVisible()?a.open=!0:k(a,function(b){a._auiAlignment||(a._auiAlignment=new o.default(a,b));a._auiAlignment.disable();b.setAttribute("aria-expanded","false")}))}var j={};"use strict";Object.defineProperty(j,"__esModule",{value:!0});var p=c(__2fd777cca7fe187ff4048afabed6a6b5),o=c(__c3a107a0f74c5ec71c09a1f1f4b838f9),q=c(__7e0423727525720eec50a0fbce0cace2),f=c(__188d80192fc203276ef4023d49a19fca),r=c(__db30000271e9ecc5679f29c76598f9cd),
s=c(__dd0dee18d8910035abf3563b0855343d),e=c(__32c9c638c13fb3cc78ab29b878f9b179),g=c(__7a4f1c37715fcec19fc8ec09205ad4f4),d=c(__57064c5323b462d4619db8aa6f7d7eb4),t={click:function(a){if(a.open){if(!(0,e.default)(a).isPersistent())a.open=!1}else a.open=!0},mouseenter:function(a){a.open||(a.open=!0);a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout()},mouseleave:function(a){if(!(0,e.default)(a).isPersistent()&&a.open){a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout();var b=setTimeout(function(){if(!(0,
d.default)(a).get("mouse-inside"))a.open=!1},1E3);a._clearMouseleaveTimeout=function(){clearTimeout(b);a._clearMouseleaveTimeout=null}}},focus:function(a){a.open||(a.open=!0)},blur:function(a){if(!(0,e.default)(a).isPersistent()&&a.open)a.open=!1}},h={attribute:"responds-to",values:["toggle","hover"],missingDefault:"toggle",invalidDefault:"toggle"},g=(0,g.default)("aui-inline-dialog",{prototype:{get open(){return(0,e.default)(this).isVisible()},set open(a){f.default.setBooleanAttribute(this,"open",
a);i(this)},get persistent(){return this.hasAttribute("persistent")},set persistent(a){f.default.setBooleanAttribute(this,"persistent",a)},get respondsTo(){return f.default.computeEnumValue(h,this.getAttribute(h.attribute))},set respondsTo(a){var b=this.respondsTo;f.default.setEnumAttribute(this,h,a);b!==this.respondsTo&&l(this)},message:function(a){var b={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]}[this.respondsTo];if(b&&-1<b.indexOf(a.type))t[a.type](this,a);return this}},
created:function(a){(0,d.default)(a).set("is-processing-show",!1);k(a,function(b){b.setAttribute("aria-expanded",a.open);b.setAttribute("aria-haspopup","true")})},attributes:{"aria-hidden":function(a,b){f.default.setBooleanAttribute(a,"open","false"===b.newValue)},open:function(a){document.body.contains(a)&&i(a)},"responds-to":function(a,b){var c=f.default.computeEnumValue(h,b.oldValue),d=f.default.computeEnumValue(h,b.newValue);c!==d&&l(a)}},attached:function(a){(0,r.default)(a).attributeExists("id");
a.hasAttribute("open")?(0,d.default)(a).get("is-processing-show")||i(a):i(a);l(a)},detached:function(a){a._auiAlignment&&a._auiAlignment.destroy()},template:function(a){var b=(0,p.default)('<div class="aui-inline-dialog-contents"></div>').append(a.childNodes);(0,p.default)(a).addClass("aui-layer").html(b)}});(0,q.default)("aui/inline-dialog2",g);(0,s.default)("InlineDialog2",g);j.default=g;return j=j["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = 'src/soy/inline-dialog2.soy' */
// This file was automatically generated from inline-dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.inlineDialog2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.inlineDialog2 == 'undefined') { aui.inlineDialog2 = {}; }


aui.inlineDialog2.inlineDialog2 = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.alignment) ? ' alignment="' + soy.$$escapeHtml(opt_data.alignment) + '"' : '') + ((opt_data.open) ? ' open' : '') + ((opt_data.persistent) ? ' persistent' : '') + ((opt_data.respondsTo) ? ' responds-to="' + soy.$$escapeHtml(opt_data.respondsTo) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  aui.inlineDialog2.inlineDialog2.soyTemplateName = 'aui.inlineDialog2.inlineDialog2';
}


aui.inlineDialog2.trigger = function(opt_data, opt_ignored) {
  return '' + aui.trigger.trigger(soy.$$augmentMap(opt_data, {showIcon: opt_data.showIcon ? opt_data.showIcon : false}));
};
if (goog.DEBUG) {
  aui.inlineDialog2.trigger.soyTemplateName = 'aui.inlineDialog2.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview-support.js' */
define("cp/confluence/preview-support",["ajs"],function(a){var d=function(){var e=b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.LINK_IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE;if(b.isPDFSupported()){e+=", "+b.SELECTOR_STRINGS.PDF+", "+b.SELECTOR_STRINGS.LINK_PDF}return e};var c=function(){return b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE+", "+b.SELECTOR_STRINGS.FILE+", "+b.SELECTOR_STRINGS.LINK_FILE+", "+b.SELECTOR_STRINGS.ATTACHMENT_MACRO};var b={SELECTOR_STRINGS:{IMAGE:"img.confluence-embedded-image[data-linked-resource-id]",EXTERNAL_IMAGE:"img.confluence-embedded-image.confluence-external-resource",PDF:"a.confluence-embedded-file[data-nice-type='PDF Document']",LINK_IMAGE:"a[data-linked-resource-type='attachment'][data-nice-type='Image']",LINK_PDF:"a[data-linked-resource-type='attachment'][data-nice-type='PDF Document']",FILE:"a.confluence-embedded-file",LINK_FILE:"a[data-linked-resource-type='attachment']",FILE_OVERLAY:"span.confluence-embedded-file-wrapper .overlay",ATTACHMENT_MACRO:".plugin_attachments_container a.previewAttachmentLink"},VIEW_MODE:{FULL:"full",COMMENT:"comment",SIMPLE:"simple"},isPDFSupported:function(){return a.DarkFeatures.isEnabled("pdf-preview")},getFileSelectorString:function(){if(a.DarkFeatures.isEnabled("previews.trigger-all-file-types")){return c()}else{return d()}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview.js' */
define("cp/confluence/preview",["underscore","jquery","cp/confluence/preview-support","ajs","confluence/jsUri"],function(k,e,f,i,b){var j,l;e(document).ready(g);function g(){var o=e(f.getFileSelectorString());o.off("click.fb");e(document.body).off("click.filePreviews");e(document.body).on("click.filePreviews",f.getFileSelectorString(),n);e(document.body).on("click.filePreviews",f.SELECTOR_STRINGS.FILE_OVERLAY,h);e(window).on("popstate",function(){if(!l&&i.DarkFeatures.isEnabled("previews.sharing.pushstate")){a()}});a()}function n(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey&&!e(this).parent().closest("a, #draft-changes-dialog, #cp-annotations").length){o.preventDefault();m(this)}}function h(p){p.preventDefault();var o=e(p.target);var q=o.closest("span.confluence-embedded-file-wrapper");m(q.find(f.SELECTOR_STRINGS.IMAGE+","+f.SELECTOR_STRINGS.FILE),undefined,undefined,o.closest(".comment-count-overlay").length>0)}function m(p,q,o,v){if(!l){var r="confluence-previews-css";WRM.require("wr!com.atlassian.confluence.plugins.confluence-previews:"+r);var w=e.Deferred(),t=w.promise();var s=setInterval(function(){for(var y=0;y<document.styleSheets.length;y++){if(document.styleSheets[y].href&&document.styleSheets[y].href.indexOf(r)!==-1){u();return}if(document.styleSheets[y].imports&&document.all&&!window.atob){for(var x=0;x<document.styleSheets[y].imports.length;x++){if(document.styleSheets[y].imports[x].href.indexOf(r)!==-1){u();return}}}}},100);var u=function(){w.resolve();clearInterval(s)};l=e.when(WRM.require(["wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-js","wrc!file-viewer"]),t);l.done(function(){j=require("cp/confluence/file-preview-loader");d(p,q,o,v)});Confluence.PageLoadingIndicator(e("body")).showUntilResolved(l,"We were unable to load the file previewer")}else{l.done(k.partial(d,p,q,o,v))}return l}var d=function(q,p,s,t){var o=e("#content");var r=e(q).closest(".comment,.cq-content,.ic-content");if(!p){if(!(o.hasClass("page")||o.hasClass("blogpost"))){p=f.VIEW_MODE.SIMPLE}else{if(r.length){p=f.VIEW_MODE.COMMENT}}}if(p===f.VIEW_MODE.COMMENT){j.showPreviewerForComment(q,r,p,t)}else{if(p===f.VIEW_MODE.SIMPLE){j.showPreviewerForSingleFile(q,p,s)}else{p=f.VIEW_MODE.FULL;j.showPreviewer(undefined,q,p,t)}}};function a(){if(c()){var q=new b(window.location.href);var p=window.history.pushState&&i.DarkFeatures.isEnabled("previews.sharing.pushstate");if(q.getQueryParamValue("preview")&&!p){var r="#!/preview"+q.getQueryParamValue("preview");var o=decodeURIComponent(q.deleteQueryParam("preview").setAnchor(r).toString());if(window.history.replaceState){window.history.replaceState({},"",o)}else{window.location=o}}else{if(q.anchor().indexOf("!/preview")===0&&p){var o;if(q.getQueryParamValue("preview")){o=q.setAnchor("")}else{o=q.addQueryParam("preview",q.anchor().substr("!/preview".length,q.anchor().length)).setAnchor("")}window.history.replaceState({},"",o)}}m()}}function c(){var o=new b(window.location.href);return i.DarkFeatures.isEnabled("previews.sharing")&&(o.getQueryParamValue("preview")||(o.anchor()&&o.anchor().indexOf("!/preview")===0))}return{loadConfluencePreviews:m}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/jquery-previewer.js' */
require(["cp/confluence/preview","jquery"],function(b,a){a.fn.previewer=function(c){if(!a(this).length){return this}var d=a.extend({},c);return this.each(function(){var f=a(this);var e=f.closest("li");var g=d.src||f.attr("data-image-src")||f.attr("src");if(g){f.click(function(j){var i={src:g,type:d.type,thumbnail:g,title:d.title||e.attr("data-file-name")||g,id:e.attr("data-attachment-id"),ownerId:e.attr("data-owner-id")};var h=b.loadConfluencePreviews([i],d.viewMode||"simple",d.from||"custom");d.zindex&&h.done(function(){a("#cp-container").css({"z-index":d.zindex})})})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:toc-plugin-analytics', location = 'net/customware/confluence/plugin/toc/analytics/analytics.js' */
AJS.toInit(function(){AJS.$(".toc-macro a").click(function(){AJS.trigger("analyticsEvent",{name:"confluence.toc-macro.heading-click"})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/js/client-side-toc.js' */
require(["ajs"],function(a){a.toInit(function(f){function b(n){var m=f({});m.data("precedenceLevel",n);return m}function g(m){return f(m).data("precedenceLevel")}function i(n,m){f(n).data("precedenceLevel",m);return n}function h(n,m){return m===g(n)}function d(s,m,o){if(s.length===0){return f()}var n=s.map(g).reduce(function(u,t){return Math.min(u,t)});if(!h(s[0],n)){s.unshift(b(n))}var q=m.createTocLevelContainer();var r={subElements:[],currentItem:undefined,outline:undefined,flush:function(){if(this.subElements.length>0&&this.currentItem){d(this.subElements,m,this.outline).appendTo(this.currentItem);this.subElements=[]}},add:function(t){this.subElements.push(t)},resetItem:function(t){this.outline=(o||[]).slice(0);this.outline.push(t);this.currentItem=m.createTocItemContainer();this.currentItem.appendTo(q);return this.currentItem}};var p=0;s.forEach(function(t){if(h(t,n)){p++;r.flush();r.resetItem(p);if(t.textContent){c(t,r.outline.join(".")).appendTo(r.currentItem)}else{r.currentItem.addClass("toc-empty-item")}}else{r.add(t)}});r.flush();if(o.length===0&&m.decorateToc){m.decorateToc(q)}return q}function c(m,n){return f(Confluence.Plugins.TableOfContents.Client.tocItemBody({outline:n,linkHref:"#"+m.id,linkText:m.textContent}))}function l(m){return{createTocLevelContainer:function(){return this.createTocItemContainer()},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer({cssClass:"toc-item-container"}))},decorateToc:function(o){function n(r,p){var s=r in m?m[r]:p;if(s){var q=f(Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator({separator:s}));q.appendTo(o)}}n("preseparator","[ ");f(o).find("span.toc-item-body").each(function(p,q){if(p>0){n("midseparator"," ] [ ")}f(q).appendTo(o)});n("postseparator"," ]");f(o).find(".toc-item-container").remove()}}}function e(m){return{createTocLevelContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer({cssliststyle:m.cssliststyle,csslistindent:m.csslistindent}))},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer())}}}function j(m){var o;if(m.includeheaderregex){o=new RegExp(m.includeheaderregex)}var n;if(m.excludeheaderregex){n=new RegExp(m.excludeheaderregex)}return function(){var p=f(this).text();if(o&&!o.test(p)){return false}if(n&&n.test(p)){return false}return true}}function k(o,q){var m=q.headerelements;var r=m.split(",");var p=j(q);var n=f("#main-content").find(m).filter(p).each(function(){i(this,r.indexOf(this.nodeName))}).toArray();return d(n,o,[])}f(".client-side-toc-macro").each(function(){var o=f(this);var n=o.data()||{};var m;if(n.structure==="flat"){m=l(n)}else{m=e(n)}if(n.numberedoutline!==true){o.addClass("hidden-outline")}o.html(k(m,n))})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/templates/client.soy' */
// This file was automatically generated from client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Plugins.TableOfContents.Client.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Plugins == 'undefined') { Confluence.Plugins = {}; }
if (typeof Confluence.Plugins.TableOfContents == 'undefined') { Confluence.Plugins.TableOfContents = {}; }
if (typeof Confluence.Plugins.TableOfContents.Client == 'undefined') { Confluence.Plugins.TableOfContents.Client = {}; }


Confluence.Plugins.TableOfContents.Client.tocItemBody = function(opt_data, opt_ignored) {
  return '<span class="toc-item-body" data-outline="' + soy.$$escapeHtml(opt_data.outline) + '"><span class="toc-outline">' + soy.$$escapeHtml(opt_data.outline) + '</span><a href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="toc-link">' + soy.$$escapeHtml(opt_data.linkText) + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.tocItemBody.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.tocItemBody';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer = function(opt_data, opt_ignored) {
  return '<ul style="' + ((opt_data.cssliststyle) ? ' list-style: ' + soy.$$escapeHtml(opt_data.cssliststyle) + ';' : '') + ((opt_data.csslistindent) ? ' padding-left: ' + soy.$$escapeHtml(opt_data.csslistindent) + ';' : '') + '"></ul>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<li></li>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.cssClass) + '"></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator = function(opt_data, opt_ignored) {
  return '<span class="toc-separator">' + soy.$$escapeHtml(opt_data.separator) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){AJS.$(".jira-chart-macro-img").load(function(a){AJS.log("Jira Chart Macro - chart image loaded");AJS.$(".insert-jira-chart-macro-button",window.parent.document).enable()}).error(function(d){AJS.log("Jira Chart Macro - chart image loaded error");AJS.$(".insert-jira-chart-macro-button",window.parent.document).disable();var e=AJS.$(d.target);var c=e.parent();var b=c.parent();c.remove();var a="\u4e0d\u80fd\u5448\u73b0JIRA\u56fe\u8868\u5b8f\uff0c\u53d1\u751f\u8fd0\u884c\u9519\u8bef\u3002";AJS.messages.error(b,{body:a})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/twodimensionalchart-showlink.js' */
var TwoDimensionalShowLink=(function(e){var d=function(i){var h=e("#two-dimensional-chart-"+i);var g=h.position();e("<div />",{id:"twodimensional-dark-layout-"+i,"class":"jim-sortable-dark-layout",css:{top:g.top+"px",left:g.left+"px",width:h.width()+"px",height:h.height()+"px"}}).appendTo(h.parent())};var a=function(g){e("#twodimensional-dark-layout-"+g).remove()};var b=function(){var h=e(this).attr("data-chart-id");d(h);var g={pageId:e("#chart-page-id-"+h).val(),wikiMarkup:e("#chart-wiki-"+h).val(),isShowMore:e(this).attr("data-is-show-more")};AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/twoDimensionalShowMoreRenderer",data:g,success:function(i){if(e(i).find(".aui-message.error").length){var j=e(i).find(".message").text();e("#two-dimensional-chart-"+h).find(".show-error").html(j)}else{var k=e(i).find(".show-link-container a").attr("data-chart-id");e("#two-dimensional-chart-"+h).replaceWith(i);c(k)}a(h)},error:function(){e("#two-dimensional-chart-"+h).find(".show-error").html("\u4e0d\u80fd\u5448\u73b0JIRA\u56fe\u8868\u5b8f\uff0c\u8fd0\u884c\u8d85\u65f6\u3002");a(h)}})};var c=function(g){e("#show-link-"+g).on("click",b)};var f=function(){e(".show-link-container a").each(function(){c(e(this).attr("data-chart-id"))})};return{init:f}})(AJS.$);AJS.$(function(){TwoDimensionalShowLink.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/shCore.js' */
var XRegExp;if(XRegExp){throw Error("can't load XRegExp twice in the same frame")}(function(x){function z(c,a){if(!XRegExp.isRegExp(c)){throw TypeError("type RegExp expected")}var d=c._xregexp;return c=XRegExp(c.source,v(c)+(a||"")),d&&(c._xregexp={source:d.source,captureNames:d.captureNames?d.captureNames.slice(0):null}),c}function v(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")}function g(s,G,h,c){var d=D.length,F,E,p;q=!0;try{while(d--){p=D[d];if(h&p.scope&&(!p.trigger||p.trigger.call(c))){p.pattern.lastIndex=G,E=p.pattern.exec(s);if(E&&E.index===G){F={output:p.handler.call(c,E,h),match:E};break}}}}catch(i){throw i}finally{q=!1}return F}function y(d,a,f){if(Array.prototype.indexOf){return d.indexOf(a,f)}for(var c=f||0;c<d.length;c++){if(d[c]===a){return c}}return -1}XRegExp=function(F,c){var G=[],E=XRegExp.OUTSIDE_CLASS,o=0,l,i,n,p,e;if(XRegExp.isRegExp(F)){if(c!==x){throw TypeError("can't supply flags when constructing one RegExp from another")}return z(F)}if(q){throw Error("can't call the XRegExp constructor within token definition functions")}c=c||"",l={hasNamedCapture:!1,captureNames:[],hasFlag:function(a){return c.indexOf(a)>-1},setFlag:function(a){c+=a}};while(o<F.length){i=g(F,o,E,l),i?(G.push(i.output),o+=i.match[0].length||1):(n=j.exec.call(m[E],F.slice(o)))?(G.push(n[0]),o+=n[0].length):(p=F.charAt(o),p==="["?E=XRegExp.INSIDE_CLASS:p==="]"&&(E=XRegExp.OUTSIDE_CLASS),G.push(p),o++)}return e=RegExp(G.join(""),j.replace.call(c,k,"")),e._xregexp={source:F,captureNames:l.hasNamedCapture?l.captureNames:null},e},XRegExp.version="1.5.1",XRegExp.INSIDE_CLASS=1,XRegExp.OUTSIDE_CLASS=2;var C=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,k=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,b=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,q=!1,D=[],j={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},B=j.exec.call(/()??/,"")[1]===x,A=function(){var a=/^/g;return j.test.call(a,""),!a.lastIndex}(),w=RegExp.prototype.sticky!==x,m={};m[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,m[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,XRegExp.addToken=function(d,a,f,c){D.push({pattern:z(d,"g"+(w?"y":"")),handler:a,scope:f||XRegExp.OUTSIDE_CLASS,trigger:c||null})},XRegExp.cache=function(c,a){var d=c+"/"+(a||"");return XRegExp.cache[d]||(XRegExp.cache[d]=XRegExp(c,a))},XRegExp.copyAsGlobal=function(a){return z(a,"g")},XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},XRegExp.execAt=function(h,c,l,f){var a=z(c,"g"+(f&&w?"y":"")),d;return a.lastIndex=l=l||0,d=a.exec(h),f&&d&&d.index!==l&&(d=null),c.global&&(c.lastIndex=d?a.lastIndex:0),d},XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}},XRegExp.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"},XRegExp.iterate=function(h,c,p,f){var a=z(c,"g"),d=-1,l;while(l=a.exec(h)){c.global&&(c.lastIndex=a.lastIndex),p.call(f,l,++d,h,c),a.lastIndex===l.index&&a.lastIndex++}c.global&&(c.lastIndex=0)},XRegExp.matchChain=function(c,a){return function d(p,n){var h=a[n].regex?a[n]:{regex:a[n]},l=z(h.regex,"g"),t=[],f;for(f=0;f<p.length;f++){XRegExp.iterate(p[f],l,function(i){t.push(h.backref?i[h.backref]||"":i[0])})}return n===a.length-1||!t.length?t:d(t,n+1)}([c],0)},RegExp.prototype.apply=function(c,a){return this.exec(a[0])},RegExp.prototype.call=function(c,a){return this.exec(a)},RegExp.prototype.exec=function(c){var l,e,a,d;this.global||(d=this.lastIndex),l=j.exec.apply(this,arguments);if(l){!B&&l.length>1&&y(l,"")>-1&&(a=RegExp(this.source,j.replace.call(v(this),"g","")),j.replace.call((c+"").slice(l.index),a,function(){for(var f=1;f<arguments.length-2;f++){arguments[f]===x&&(l[f]=x)}}));if(this._xregexp&&this._xregexp.captureNames){for(var h=1;h<l.length;h++){e=this._xregexp.captureNames[h-1],e&&(l[e]=l[h])}}!A&&this.global&&!l[0].length&&this.lastIndex>l.index&&this.lastIndex--}return this.global||(this.lastIndex=d),l},RegExp.prototype.test=function(c){var a,d;return this.global||(d=this.lastIndex),a=j.exec.call(this,c),a&&!A&&this.global&&!a[0].length&&this.lastIndex>a.index&&this.lastIndex--,this.global||(this.lastIndex=d),!!a},String.prototype.match=function(c){XRegExp.isRegExp(c)||(c=RegExp(c));if(c.global){var a=j.match.apply(this,arguments);return c.lastIndex=0,a}return c.exec(this)},String.prototype.replace=function(o,p){var l=XRegExp.isRegExp(o),f,h,d,c;return l?(o._xregexp&&(f=o._xregexp.captureNames),o.global||(c=o.lastIndex)):o+="",Object.prototype.toString.call(p)==="[object Function]"?h=j.replace.call(this+"",o,function(){if(f){arguments[0]=new String(arguments[0]);for(var a=0;a<f.length;a++){f[a]&&(arguments[0][f[a]]=arguments[a+1])}}return l&&o.global&&(o.lastIndex=arguments[arguments.length-2]+arguments[0].length),p.apply(null,arguments)}):(d=this+"",h=j.replace.call(d,o,function(){var a=arguments;return j.replace.call(p+"",C,function(e,F,u){if(!F){var E=+u;return E<=a.length-3?a[E]:(E=f?y(f,u):-1,E>-1?a[E+1]:e)}switch(F){case"$":return"$";case"&":return a[0];case"`":return a[a.length-1].slice(0,a[a.length-2]);case"'":return a[a.length-1].slice(a[a.length-2]+a[0].length);default:var i="";F=+F;if(!F){return e}while(F>a.length-3){i=String.prototype.slice.call(F,-1)+i,F=Math.floor(F/10)}return(F?a[F]||"":"$")+i}})})),l&&(o.global?o.lastIndex=0:o.lastIndex=c),h},String.prototype.split=function(f,o){if(!XRegExp.isRegExp(f)){return j.split.apply(this,arguments)}var l=this+"",e=[],h=0,d,c;if(o===x||+o<0){o=Infinity}else{o=Math.floor(+o);if(!o){return[]}}f=XRegExp.copyAsGlobal(f);while(d=f.exec(l)){if(f.lastIndex>h){e.push(l.slice(h,d.index)),d.length>1&&d.index<l.length&&Array.prototype.push.apply(e,d.slice(1)),c=d[0].length,h=f.lastIndex;if(e.length>=o){break}}f.lastIndex===d.index&&f.lastIndex++}return h===l.length?(!j.test.call(f,"")||c)&&e.push(""):e.push(l.slice(h)),e.length>o?e.slice(0,o):e},XRegExp.addToken(/\(\?#[^)]*\)/,function(a){return j.test.call(b,a.input.slice(a.index+a[0].length))?"":"(?:)"}),XRegExp.addToken(/\((?!\?)/,function(){return this.captureNames.push(null),"("}),XRegExp.addToken(/\(\?<([$\w]+)>/,function(a){return this.captureNames.push(a[1]),this.hasNamedCapture=!0,"("}),XRegExp.addToken(/\\k<([\w$]+)>/,function(c){var a=y(this.captureNames,c[1]);return a>-1?"\\"+(a+1)+(isNaN(c.input.charAt(c.index+c[0].length))?"":"(?:)"):c[0]}),XRegExp.addToken(/\[\^?]/,function(a){return a[0]==="[]"?"\\b\\B":"[\\s\\S]"}),XRegExp.addToken(/^\(\?([imsx]+)\)/,function(a){return this.setFlag(a[1]),""}),XRegExp.addToken(/(?:\s+|#.*)+/,function(a){return j.test.call(b,a.input.slice(a.index+a[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")}),XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})();var SyntaxHighlighter=function(){function ab(b,a){return b.className.indexOf(a)!=-1}function ag(a,b){ab(a,b)||(a.className+=" "+b)}function ad(b,a){b.className=b.className.replace(a,"")}function ak(b){var a=[];for(var c=0;c<b.length;c++){a.push(b[c])}return a}function ac(a){return a.split("\n")}function af(b){var a="highlighter_";return b.indexOf(a)==0?b:a+b}function aa(a){return ao.vars.highlighters[af(a)]}function at(a){return document.getElementById(af(a))}function an(a){ao.vars.highlighters[af(a.id)]=a}function ai(g,c,k){if(g==null){return null}var f=k!=1?g.childNodes:[g.parentNode],b={"#":"id",".":"className"}[c.substr(0,1)]||"nodeName",d,h;d=b!="nodeName"?c.substr(1):c.toUpperCase();if((g[b]||"").indexOf(d)!=-1){return g}for(var a=0;f&&a<f.length&&h==null;a++){h=ai(f[a],c,k)}return h}function aq(b,a){return ai(b,a,!0)}function al(c,a,d){d=Math.max(d||0,0);for(var b=d;b<c.length;b++){if(c[b]==a){return b}}return -1}function ae(a){return(a||"")+Math.round(Math.random()*1000000).toString()}function ap(c,a){var d={},b;for(b in c){d[b]=c[b]}for(b in a){d[b]=a[b]}return d}function Z(b){var a={"true":!0,"false":!1}[b];return a==null?b:a}function ah(g,c,k,f,b){var d=(screen.width-k)/2,h=(screen.height-f)/2;b+=", left="+d+", top="+h+", width="+k+", height="+f,b=b.replace(/^,/,"");var a=window.open(g,c,b);return a.focus(),a}function am(d,b,f,c){function a(g){g=g||window.event,g.target||(g.target=g.srcElement,g.preventDefault=function(){this.returnValue=!1}),f.call(c||window,g)}d.attachEvent?d.attachEvent("on"+b,a):d.addEventListener(b,a,!1)}function W(a){window.alert(ao.config.strings.alert+a)}function ar(e,k){var g=ao.vars.discoveredBrushes,d=null;if(g==null){g={};for(var f in ao.brushes){var h=ao.brushes[f],c=h.aliases;if(c==null){continue}h.brushName=f.toLowerCase();for(var b=0;b<c.length;b++){g[c[b]]=f}}ao.vars.discoveredBrushes=g}return d=ao.brushes[g[e]],d==null&&k!=0&&W(ao.config.strings.noBrush+e),d}function Y(c,a){var d=ac(c);for(var b=0;b<d.length;b++){d[b]=a(d[b],b)}return d.join("\n")}function K(a){return a.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")}function q(f){var b,h={},d=new XRegExp("^\\[(?<values>(.*?))\\]$"),a=new XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");while((b=a.exec(f))!=null){var c=b.value.replace(/^['"]|['"]$/g,"");if(c!=null&&d.test(c)){var g=d.exec(c);c=g.values.length>0?g.values.split(/\s*,\s*/):[]}h[b.name]=c}return h}function X(a,b){return a==null||a.length==0||a=="\n"?a:(a=a.replace(/</g,"&lt;"),a=a.replace(/ {2,}/g,function(c){var e="";for(var d=0;d<c.length-1;d++){e+=ao.config.space}return e+" "}),b!=null&&(a=Y(a,function(d){if(d.length==0){return""}var c="";return d=d.replace(/^(&nbsp;| )+/,function(f){return c=f,""}),d.length==0?c:c+'<code class="'+b+'">'+d+"</code>"})),a)}function j(b,a){var c=b.toString();while(c.length<a){c="0"+c}return c}function F(c,a){var d="";for(var b=0;b<a;b++){d+=" "}return c.replace(/\t/g,d)}function R(f,c){function a(k,i,l){return k.substr(0,i)+b.substr(0,l)+k.substr(i+1,k.length)}var h=ac(f),d="	",b="";for(var g=0;g<50;g++){b+="                    "}return f=Y(f,function(l){if(l.indexOf(d)==-1){return l}var m=0;while((m=l.indexOf(d))!=-1){var k=c-m%c;l=a(l,m,k)}return l}),f}function aj(b){var d=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi,c=/&#39;/g,a=/&quot;/g;return ao.config.bloggerMode==1&&(b=b.replace(d,"\n")),ao.config.stripBrs==1&&(b=b.replace(d,"")),b=b.replace(c,"'"),b=b.replace(a,'"'),b}function I(a){return a.replace(/^\s+|\s+$/g,"")}function U(h){var f=ac(aj(h)),l=new Array,g=/^\s*/,d=1000;for(var k=0;k<f.length&&d>0;k++){var c=f[k];if(I(c).length==0){continue}var b=g.exec(c);if(b==null){return h}d=Math.min(b[0].length,d)}if(d>0){for(var k=0;k<f.length;k++){f[k]=f[k].substr(d)}}return f.join("\n")}function B(b,a){return b.index<a.index?-1:b.index>a.index?1:b.length<a.length?-1:b.length>a.length?1:0}function G(e,k){function g(i,a){return i[0]}var d=0,f=null,h=[],c=k.func?k.func:g;while((f=k.regex.exec(e))!=null){var b=c(f,k);typeof b=="string"&&(b=[new ao.Match(b,f.index,k.css)]),h=h.concat(b)}return h}function au(a){var b=/(.*)((&gt;|&lt;).*)/;return a.replace(ao.regexLib.url,function(h){var d="",g=null;if(g=b.exec(h)){h=g[1],d=g[2]}if(h.indexOf("<")!=-1){var c=h.substring(0,h.indexOf("<")),f=h.substring(h.indexOf("<"),h.length);return d+=f,'<a href="'+c+'">'+c+"</a>"+d}return'<a href="'+h+'">'+h+"</a>"+d})}function Q(){var b=document.getElementsByTagName("script"),a=[];for(var c=0;c<b.length;c++){b[c].type=="syntaxhighlighter"&&a.push(b[c])}return a}function z(g){var c="<![CDATA[",k="]]>",f=I(g),b=!1,d=c.length,h=k.length;f.indexOf(c)==0&&(f=f.substring(d),b=!0);var a=f.length;return f.indexOf(k)==a-h&&(f=f.substring(0,a-h),b=!0),b?f:g}function J(d){var c=d.target,b=aq(c,".syntaxhighlighter"),a=aq(c,".container");if(!a||!b){return}V(a)}function V(b){var a,c;if(document.body.createTextRange){a=document.body.createTextRange();a.moveToElementText(b);a.select()}else{if(window.getSelection){c=window.getSelection();a=document.createRange();a.selectNodeContents(b);c.removeAllRanges();c.addRange(a)}}}typeof require!="undefined"&&typeof XRegExp=="undefined"&&(XRegExp=require("XRegExp").XRegExp);var ao={defaults:{"class-name":"","first-line":1,"pad-line-numbers":!1,highlight:null,title:null,"smart-tabs":!0,"tab-size":4,gutter:!0,toolbar:!0,"quick-code":!0,collapse:!1,"auto-links":!0,light:!1,"html-script":!1},config:{space:"&nbsp;",useScriptTags:!0,bloggerMode:!1,stripBrs:!1,tagName:"pre",strings:{expandSource:"expand source",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>'}},vars:{discoveredBrushes:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:new XRegExp('"([^\\\\"]|\\\\.)*"',"gs"),multiLineSingleQuotedString:new XRegExp("'([^\\\\']|\\\\.)*'","gs"),xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,url:/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{getHtml:function(b){function c(g,h){return ao.toolbar.getButtonHtml(g,h,ao.config.strings[h])}var f='<div class="toolbar">',d=ao.toolbar.items,a=d.list;for(var e=0;e<a.length;e++){f+=(d[a[e]].getHtml||c)(b,a[e])}return f+="</div>",f},getButtonHtml:function(b,a,c){return'<span><a href="#" class="toolbar_item command_'+a+" "+a+'">'+c+"</a></span>"},handler:function(b){function a(h){var g=new RegExp(h+"_(\\w+)"),i=g.exec(d);return i?i[1]:null}var f=b.target,d=f.className||"",c=aa(aq(f,".syntaxhighlighter").id),e=a("command");c&&e&&ao.toolbar.items[e].execute(c),b.preventDefault()},items:{list:["expandSource","help"],expandSource:{getHtml:function(a){if(a.getParam("collapse")!=1){return""}var b=a.getParam("title");return ao.toolbar.getButtonHtml(a,"expandSource",b?b:ao.config.strings.expandSource)},execute:function(b){var a=at(b.id);ad(a,"collapsed")}},help:{execute:function(a){var c=ah("","_blank",500,250,"scrollbars=0"),b=c.document;b.write(ao.config.strings.aboutDialog),b.close(),c.focus()}}}},findElements:function(d,h){var f=h?[h]:ak(document.getElementsByTagName(ao.config.tagName)),e=ao.config,g=[];e.useScriptTags&&(f=f.concat(Q()));if(f.length===0){return g}for(var c=0;c<f.length;c++){var b={target:f[c],params:ap(d,q(f[c].getAttribute("data-syntaxhighlighter-params")))};if(b.params.brush==null){continue}g.push(b)}return g},highlight:function(y,e){var b=this.findElements(y,e),k="innerHTML",A=null,d=ao.config;if(b.length===0){return}for(var x=0;x<b.length;x++){var e=b[x],w=e.target,p=e.params,g=p.brush,v;if(g==null){continue}if(p["html-script"]=="true"||ao.defaults["html-script"]==1){A=new ao.HtmlScript(g),g="htmlscript"}else{var m=ar(g);if(!m){continue}A=new m}v=w[k],d.useScriptTags&&(v=z(v)),(w.title||"")!=""&&(p.title=w.title),p.brush=g,A.init(p),e=A.getDiv(v),(w.id||"")!=""&&(e.id=w.id),w.parentNode.replaceChild(e,w)}},all:function(a){am(window,"load",function(){ao.highlight(a)})}};return ao.all=ao.all,ao.highlight=ao.highlight,ao.Match=function(b,a,c){this.value=b,this.index=a,this.length=b.length,this.css=c,this.brushName=null},ao.Match.prototype.toString=function(){return this.value},ao.HtmlScript=function(p){function h(f,a){for(var i=0;i<f.length;i++){f[i].index+=a}}function e(x,D){var r=x.code,E=[],f=b.regexList,C=x.index+x.left.length,A=b.htmlScript,n;for(var y=0;y<f.length;y++){n=G(r,f[y]),h(n,C),E=E.concat(n)}A.left!=null&&x.left!=null&&(n=G(x.left,A.left),h(n,x.index),E=E.concat(n)),A.right!=null&&x.right!=null&&(n=G(x.right,A.right),h(n,x.index+x[0].lastIndexOf(x.right)),E=E.concat(n));for(var w=0;w<E.length;w++){E[w].brushName=d.brushName}return E}var d=ar(p),b,g=new ao.brushes.Xml,v=null,c=this,m="getDiv getHtml init".split(" ");if(d==null){return}b=new d;for(var k=0;k<m.length;k++){(function(){var a=m[k];c[a]=function(){return g[a].apply(g,arguments)}})()}if(b.htmlScript==null){W(ao.config.strings.brushNotHtmlScript+p);return}g.regexList.push({regex:b.htmlScript.code,func:e})},ao.Highlighter=function(){},ao.Highlighter.prototype={getParam:function(b,a){var c=this.params[b];return Z(c==null?a:c)},create:function(a){return document.createElement(a)},findMatches:function(c,a){var d=[];if(c!=null){for(var b=0;b<c.length;b++){typeof c[b]=="object"&&(d=d.concat(G(a,c[b])))}}return this.removeNestedMatches(d.sort(B))},removeNestedMatches:function(f){for(var b=0;b<f.length;b++){if(f[b]===null){continue}var g=f[b],d=g.index+g.length;for(var a=b+1;a<f.length&&f[b]!==null;a++){var c=f[a];if(c===null){continue}if(c.index>d){break}c.index==g.index&&c.length>g.length?f[b]=null:c.index>=g.index&&c.index<d&&(f[a]=null)}}return f},figureOutLineNumbers:function(b){var a=[],c=parseInt(this.getParam("first-line"));return Y(b,function(f,d){a.push(d+c)}),a},isLineHighlighted:function(b){var a=this.getParam("highlight",[]);return typeof a!="object"&&a.push==null&&(a=[a]),al(a,b.toString())!=-1},getLineHtml:function(c,a,d){var b=["line","number"+a,"index"+c,"alt"+(a%2==0?1:2).toString()];return this.isLineHighlighted(a)&&b.push("highlighted"),a==0&&b.push("break"),'<div class="'+b.join(" ")+'">'+d+"</div>"},getLineNumbersHtml:function(e,l){var g="",d=ac(e).length,k=parseInt(this.getParam("first-line")),c=this.getParam("pad-line-numbers");c==1?c=(k+d-1).toString().length:isNaN(c)==1&&(c=0);for(var b=0;b<d;b++){var h=l?l[b]:k+b,e=h==0?ao.config.space:j(h,c);g+=this.getLineHtml(b,h,e)}return g},getCodeLinesHtml:function(x,e){x=I(x);var b=ac(x),k=this.getParam("pad-line-numbers"),d=parseInt(this.getParam("first-line")),x="",w=this.getParam("brush");for(var v=0;v<b.length;v++){var p=b[v],g=/^(&nbsp;|\s)+/.exec(p),s=null,m=e?e[v]:d+v;g!=null&&(s=g[0].toString(),p=p.substr(s.length),s=s.replace(" ",ao.config.space)),p=I(p),p.length==0&&(p=ao.config.space),x+=this.getLineHtml(v,m,(s!=null?'<code class="'+w+' spaces">'+s+"</code>":"")+p)}return x},getTitleHtml:function(a){return a?"<caption>"+a+"</caption>":""},getMatchesHtml:function(g,l){function m(i){var a=i?i.brushName||f:f;return a?a+" ":""}var d=0,b="",f=this.getParam("brush","");for(var c=0;c<l.length;c++){var k=l[c],h;if(k===null||k.length===0){continue}h=m(k),b+=X(g.substr(d,k.index-d),h+"plain")+X(k.value,h+k.css),d=k.index+k.length+(k.offset||0)}return b+=X(g.substr(d),m()+"plain"),b},getHtml:function(c){var f="",e=["syntaxhighlighter"],b,d,a;return this.getParam("light")==1&&(this.params.toolbar=this.params.gutter=!1),className="syntaxhighlighter",this.getParam("collapse")==1&&e.push("collapsed"),e.push("sh-"+this.getParam("theme").toLowerCase()),(gutter=this.getParam("gutter"))==0&&e.push("nogutter"),e.push(this.getParam("class-name")),e.push(this.getParam("brush")),c=K(c).replace(/\r/g," "),b=this.getParam("tab-size"),c=this.getParam("smart-tabs")==1?R(c,b):F(c,b),c=U(c),gutter&&(a=this.figureOutLineNumbers(c)),d=this.findMatches(this.regexList,c),f=this.getMatchesHtml(c,d),f=this.getCodeLinesHtml(f,a),this.getParam("auto-links")&&(f=au(f)),typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.match(/MSIE/)&&e.push("ie"),f='<div id="'+af(this.id)+'" class="'+e.join(" ")+'">'+(this.getParam("toolbar")?ao.toolbar.getHtml(this):"")+'<table border="0" cellpadding="0" cellspacing="0">'+this.getTitleHtml(this.getParam("title"))+"<tbody><tr>"+(gutter?'<td class="gutter">'+this.getLineNumbersHtml(c)+"</td>":"")+'<td class="code"><div class="container" title="Hint: double-click to select code">'+f+"</div></td></tr></tbody></table></div>",f},getDiv:function(a){a===null&&(a=""),this.code=a;var b=this.create("div");return b.innerHTML=this.getHtml(a),this.getParam("toolbar")&&am(ai(b,".toolbar"),"click",ao.toolbar.handler),this.getParam("quick-code")&&am(ai(b,".code"),"dblclick",J),b},init:function(a){this.id=ae(),an(this),this.params=ap(ao.defaults,a||{}),this.getParam("light")==1&&(this.params.toolbar=this.params.gutter=!1)},getKeywords:function(a){return a=a.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|"),"\\b(?:"+a+")\\b"},forHtmlScript:function(a){this.htmlScript={left:{regex:a.left,css:"script"},right:{regex:a.right,css:"script"},code:new XRegExp("(?<left>"+a.left.source+")(?<code>.*?)(?<right>"+a.right.source+")","sgi")}}},ao}();typeof exports!="undefined"?exports.SyntaxHighlighter=SyntaxHighlighter:null;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/shLegacy.js' */
var dp={SyntaxHighlighter:{}};dp.SyntaxHighlighter={parseParams:function(m,d,c,h,l,a){function e(t,q){var s=new XRegExp("^"+q+"\\[(?<value>\\w+)\\]$","gi"),p=null;for(var r=0;r<t.length;r++){if((p=s.exec(t[r]))!=null){return p.value}}return null}function k(p,i){return p!=null?p:i}function j(i){return i!=null?i.toString():null}var b=m.split(":"),n=b[0],o={},g={"true":true};reverse={"true":false},result=null,defaults=SyntaxHighlighter.defaults;for(var f in b){o[b[f]]="true"}d=j(k(d,defaults.gutter));c=j(k(c,defaults.toolbar));h=j(k(h,defaults.collapse));a=j(k(a,defaults.ruler));l=j(k(l,defaults["first-line"]));return{brush:n,gutter:k(reverse[o.nogutter],d),toolbar:k(reverse[o.nocontrols],c),collapse:k(g[o.collapse],h),"first-line":k(e(b,"firstline"),l)}},HighlightAll:function(b,h,g,n,q,c){function e(){var r=arguments;for(var s=0;s<r.length;s++){if(r[s]===null){continue}if(typeof(r[s])=="string"&&r[s]!=""){return r[s]+""}if(typeof(r[s])=="object"&&r[s].value!=""){return r[s].value+""}}return null}function p(v,s,u){var r=document.getElementsByTagName(u);for(var t=0;t<r.length;t++){if(r[t].getAttribute("name")==s){v.push(r[t])}}}var a=[],o=null,d={},m="innerHTML";p(a,b,"pre");p(a,b,"textarea");if(a.length===0){return}for(var l=0;l<a.length;l++){var k=a[l],f=e(k.attributes["class"],k.className,k.attributes.language,k.language),j="";if(f===null){continue}f=dp.SyntaxHighlighter.parseParams(f,h,g,n,q,c);SyntaxHighlighter.highlight(f,k)}}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/collapseSource.js' */
AJS.toInit(function(a){function b(d){var c="highlighter_";return d.indexOf(c)==0?d:c+d}a(".codeHeader .collapse-source").click(function(){var g=a(this);var d=g.parent().parent().children(".codeContent");var f=d.children().children(".syntaxhighlighter").attr("id");var e=g.children(".expand-control-icon");var c=a(document.getElementById(b(f)));if(c.hasClass("collapsed")){c.removeClass("collapsed");c.addClass("expanded");d.addClass("show-border-top");a(".expand-control-text",g).text("\u6298\u53e0\u539f\u7801");e.addClass("expanded")}else{if(c.hasClass("expanded")){c.removeClass("expanded");c.addClass("collapsed");d.removeClass("show-border-top");a(".expand-control-text",g).text("\u5c55\u5f00\u539f\u7801");e.removeClass("expanded")}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushAppleScript.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="after before beginning continue copy each end every from return get global in local named of set some that the then times to where whose with without";var d="first second third fourth fifth sixth seventh eighth ninth tenth last front back middle";var b="activate add alias AppleScript ask attachment boolean class constant delete duplicate empty exists false id integer list make message modal modified new no paragraph pi properties quit real record remove rest result reveal reverse run running save string true word yes";this.regexList=[{regex:/(--|#).*$/gm,css:"comments"},{regex:/\(\*(?:[\s\S]*?\(\*[\s\S]*?\*\))*[\s\S]*?\*\)/gm,css:"comments"},{regex:/"[\s\S]*?"/gm,css:"string"},{regex:/(?:,|:|\u00AC\u00A8|'s\b|\(|\)|\{|\}|\u00AC\u00B4|\b\w*\u00AC\u00AA)/g,css:"color1"},{regex:/(-)?(\d)+(\.(\d)?)?(E\+(\d)+)?/g,css:"color1"},{regex:/(?:&(amp;|gt;|lt;)?|=|\u00D4\u00F8\u2126 |>|<|\u201A\u00E2\u2022|>=|\u201A\u00E2\u00A7|<=|\*|\+|-|\/|\u221A\u2211|\^)/g,css:"color2"},{regex:/\b(?:and|as|div|mod|not|or|return(?!\s&)(ing)?|equals|(is(n't| not)? )?equal( to)?|does(n't| not) equal|(is(n't| not)? )?(greater|less) than( or equal( to)?)?|(comes|does(n't| not) come) (after|before)|is(n't| not)?( in)? (back|front) of|is(n't| not)? behind|is(n't| not)?( (in|contained by))?|does(n't| not) contain|contain(s)?|(start|begin|end)(s)? with|((but|end) )?(consider|ignor)ing|prop(erty)?|(a )?ref(erence)?( to)?|repeat (until|while|with)|((end|exit) )?repeat|((else|end) )?if|else|(end )?(script|tell|try)|(on )?error|(put )?into|(of )?(it|me)|its|my|with (timeout( of)?|transaction)|end (timeout|transaction))\b/g,css:"keyword"},{regex:/\b\d+(st|nd|rd|th)\b/g,css:"keyword"},{regex:/\b(?:about|above|against|around|at|below|beneath|beside|between|by|(apart|aside) from|(instead|out) of|into|on(to)?|over|since|thr(ough|u)|under)\b/g,css:"color3"},{regex:/\b(?:adding folder items to|after receiving|choose( ((remote )?application|color|folder|from list|URL))?|clipboard info|set the clipboard to|(the )?clipboard|entire contents|display(ing| (alert|dialog|mode))?|document( (edited|file|nib name))?|file( (name|type))?|(info )?for|giving up after|(name )?extension|quoted form|return(ed)?|second(?! item)(s)?|list (disks|folder)|text item(s| delimiters)?|(Unicode )?text|(disk )?item(s)?|((current|list) )?view|((container|key) )?window|with (data|icon( (caution|note|stop))?|parameter(s)?|prompt|properties|seed|title)|case|diacriticals|hyphens|numeric strings|punctuation|white space|folder creation|application(s( folder)?| (processes|scripts position|support))?|((desktop )?(pictures )?|(documents|downloads|favorites|home|keychain|library|movies|music|public|scripts|sites|system|users|utilities|workflows) )folder|desktop|Folder Action scripts|font(s| panel)?|help|internet plugins|modem scripts|(system )?preferences|printer descriptions|scripting (additions|components)|shared (documents|libraries)|startup (disk|items)|temporary items|trash|on server|in AppleTalk zone|((as|long|short) )?user name|user (ID|locale)|(with )?password|in (bundle( with identifier)?|directory)|(close|open for) access|read|write( permission)?|(g|s)et eof|using( delimiters)?|starting at|default (answer|button|color|country code|entr(y|ies)|identifiers|items|name|location|script editor)|hidden( answer)?|open(ed| (location|untitled))?|error (handling|reporting)|(do( shell)?|load|run|store) script|administrator privileges|altering line endings|get volume settings|(alert|boot|input|mount|output|set) volume|output muted|(fax|random )?number|round(ing)?|up|down|toward zero|to nearest|as taught in school|system (attribute|info)|((AppleScript( Studio)?|system) )?version|(home )?directory|(IPv4|primary Ethernet) address|CPU (type|speed)|physical memory|time (stamp|to GMT)|replacing|ASCII (character|number)|localized string|from table|offset|summarize|beep|delay|say|(empty|multiple) selections allowed|(of|preferred) type|invisibles|showing( package contents)?|editable URL|(File|FTP|News|Media|Web) [Ss]ervers|Telnet hosts|Directory services|Remote applications|waiting until completion|saving( (in|to))?|path (for|to( (((current|frontmost) )?application|resource))?)|POSIX (file|path)|(background|RGB) color|(OK|cancel) button name|cancel button|button(s)?|cubic ((centi)?met(re|er)s|yards|feet|inches)|square ((kilo)?met(re|er)s|miles|yards|feet)|(centi|kilo)?met(re|er)s|miles|yards|feet|inches|lit(re|er)s|gallons|quarts|(kilo)?grams|ounces|pounds|degrees (Celsius|Fahrenheit|Kelvin)|print( (dialog|settings))?|clos(e(able)?|ing)|(de)?miniaturized|miniaturizable|zoom(ed|able)|attribute run|action (method|property|title)|phone|email|((start|end)ing|home) page|((birth|creation|current|custom|modification) )?date|((((phonetic )?(first|last|middle))|computer|host|maiden|related) |nick)?name|aim|icq|jabber|msn|yahoo|address(es)?|save addressbook|should enable action|city|country( code)?|formatte(r|d address)|(palette )?label|state|street|zip|AIM [Hh]andle(s)?|my card|select(ion| all)?|unsaved|(alpha )?value|entr(y|ies)|group|(ICQ|Jabber|MSN) handle|person|people|company|department|icon image|job title|note|organization|suffix|vcard|url|copies|collating|pages (across|down)|request print time|target( printer)?|((GUI Scripting|Script menu) )?enabled|show Computer scripts|(de)?activated|awake from nib|became (key|main)|call method|of (class|object)|center|clicked toolbar item|closed|for document|exposed|(can )?hide|idle|keyboard (down|up)|event( (number|type))?|launch(ed)?|load (image|movie|nib|sound)|owner|log|mouse (down|dragged|entered|exited|moved|up)|move|column|localization|resource|script|register|drag (info|types)|resigned (active|key|main)|resiz(e(d)?|able)|right mouse (down|dragged|up)|scroll wheel|(at )?index|should (close|open( untitled)?|quit( after last window closed)?|zoom)|((proposed|screen) )?bounds|show(n)?|behind|in front of|size (mode|to fit)|update(d| toolbar item)?|was (hidden|miniaturized)|will (become active|close|finish launching|hide|miniaturize|move|open|quit|(resign )?active|((maximum|minimum|proposed) )?size|show|zoom)|bundle|data source|movie|pasteboard|sound|tool(bar| tip)|(color|open|save) panel|coordinate system|frontmost|main( (bundle|menu|window))?|((services|(excluded from )?windows) )?menu|((executable|frameworks|resource|scripts|shared (frameworks|support)) )?path|(selected item )?identifier|data|content(s| view)?|character(s)?|click count|(command|control|option|shift) key down|context|delta (x|y|z)|key( code)?|location|pressure|unmodified characters|types|(first )?responder|playing|(allowed|selectable) identifiers|allows customization|(auto saves )?configuration|visible|image( name)?|menu form representation|tag|user(-| )defaults|associated file name|(auto|needs) display|current field editor|floating|has (resize indicator|shadow)|hides when deactivated|level|minimized (image|title)|opaque|position|release when closed|sheet|title(d)?)\b/g,css:"color3"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color3"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["applescript"];SyntaxHighlighter.brushes.AppleScript=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushAS3.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="class interface function package";var b="-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape extends false final finally flash_proxy for get if implements import in include Infinity instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null Null Number Object object_proxy override parseFloat parseInt private protected public return set static String super switch this throw true try typeof uint undefined unescape use void while with";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color3"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"},{regex:new RegExp("var","gm"),css:"variable"},{regex:new RegExp("trace","gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["actionscript3","as3","actionscript"];SyntaxHighlighter.brushes.AS3=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushBash.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="if fi then elif else for do done until while break continue case function return in eq ne ge le";var b="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chrootcksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig import install join kill less let ln local locate logname logout look lpc lpr lprint lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir vi watch wc whereis which who whoami Wget xargs yes";this.regexList=[{regex:/^#!.*$/gm,css:"preprocessor bold"},{regex:/\/[\w-\/]+/gm,css:"plain"},{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["bash","shell"];SyntaxHighlighter.brushes.Bash=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushColdFusion.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="Abs ACos AddSOAPRequestHeader AddSOAPResponseHeader AjaxLink AjaxOnLoad ArrayAppend ArrayAvg ArrayClear ArrayDeleteAt ArrayInsertAt ArrayIsDefined ArrayIsEmpty ArrayLen ArrayMax ArrayMin ArraySet ArraySort ArraySum ArraySwap ArrayToList Asc ASin Atn BinaryDecode BinaryEncode BitAnd BitMaskClear BitMaskRead BitMaskSet BitNot BitOr BitSHLN BitSHRN BitXor Ceiling CharsetDecode CharsetEncode Chr CJustify Compare CompareNoCase Cos CreateDate CreateDateTime CreateObject CreateODBCDate CreateODBCDateTime CreateODBCTime CreateTime CreateTimeSpan CreateUUID DateAdd DateCompare DateConvert DateDiff DateFormat DatePart Day DayOfWeek DayOfWeekAsString DayOfYear DaysInMonth DaysInYear DE DecimalFormat DecrementValue Decrypt DecryptBinary DeleteClientVariable DeserializeJSON DirectoryExists DollarFormat DotNetToCFType Duplicate Encrypt EncryptBinary Evaluate Exp ExpandPath FileClose FileCopy FileDelete FileExists FileIsEOF FileMove FileOpen FileRead FileReadBinary FileReadLine FileSetAccessMode FileSetAttribute FileSetLastModified FileWrite Find FindNoCase FindOneOf FirstDayOfMonth Fix FormatBaseN GenerateSecretKey GetAuthUser GetBaseTagData GetBaseTagList GetBaseTemplatePath GetClientVariablesList GetComponentMetaData GetContextRoot GetCurrentTemplatePath GetDirectoryFromPath GetEncoding GetException GetFileFromPath GetFileInfo GetFunctionList GetGatewayHelper GetHttpRequestData GetHttpTimeString GetK2ServerDocCount GetK2ServerDocCountLimit GetLocale GetLocaleDisplayName GetLocalHostIP GetMetaData GetMetricData GetPageContext GetPrinterInfo GetProfileSections GetProfileString GetReadableImageFormats GetSOAPRequest GetSOAPRequestHeader GetSOAPResponse GetSOAPResponseHeader GetTempDirectory GetTempFile GetTemplatePath GetTickCount GetTimeZoneInfo GetToken GetUserRoles GetWriteableImageFormats Hash Hour HTMLCodeFormat HTMLEditFormat IIf ImageAddBorder ImageBlur ImageClearRect ImageCopy ImageCrop ImageDrawArc ImageDrawBeveledRect ImageDrawCubicCurve ImageDrawLine ImageDrawLines ImageDrawOval ImageDrawPoint ImageDrawQuadraticCurve ImageDrawRect ImageDrawRoundRect ImageDrawText ImageFlip ImageGetBlob ImageGetBufferedImage ImageGetEXIFTag ImageGetHeight ImageGetIPTCTag ImageGetWidth ImageGrayscale ImageInfo ImageNegative ImageNew ImageOverlay ImagePaste ImageRead ImageReadBase64 ImageResize ImageRotate ImageRotateDrawingAxis ImageScaleToFit ImageSetAntialiasing ImageSetBackgroundColor ImageSetDrawingColor ImageSetDrawingStroke ImageSetDrawingTransparency ImageSharpen ImageShear ImageShearDrawingAxis ImageTranslate ImageTranslateDrawingAxis ImageWrite ImageWriteBase64 ImageXORDrawingMode IncrementValue InputBaseN Insert Int IsArray IsBinary IsBoolean IsCustomFunction IsDate IsDDX IsDebugMode IsDefined IsImage IsImageFile IsInstanceOf IsJSON IsLeapYear IsLocalHost IsNumeric IsNumericDate IsObject IsPDFFile IsPDFObject IsQuery IsSimpleValue IsSOAPRequest IsStruct IsUserInAnyRole IsUserInRole IsUserLoggedIn IsValid IsWDDX IsXML IsXmlAttribute IsXmlDoc IsXmlElem IsXmlNode IsXmlRoot JavaCast JSStringFormat LCase Left Len ListAppend ListChangeDelims ListContains ListContainsNoCase ListDeleteAt ListFind ListFindNoCase ListFirst ListGetAt ListInsertAt ListLast ListLen ListPrepend ListQualify ListRest ListSetAt ListSort ListToArray ListValueCount ListValueCountNoCase LJustify Log Log10 LSCurrencyFormat LSDateFormat LSEuroCurrencyFormat LSIsCurrency LSIsDate LSIsNumeric LSNumberFormat LSParseCurrency LSParseDateTime LSParseEuroCurrency LSParseNumber LSTimeFormat LTrim Max Mid Min Minute Month MonthAsString Now NumberFormat ParagraphFormat ParseDateTime Pi PrecisionEvaluate PreserveSingleQuotes Quarter QueryAddColumn QueryAddRow QueryConvertForGrid QueryNew QuerySetCell QuotedValueList Rand Randomize RandRange REFind REFindNoCase ReleaseComObject REMatch REMatchNoCase RemoveChars RepeatString Replace ReplaceList ReplaceNoCase REReplace REReplaceNoCase Reverse Right RJustify Round RTrim Second SendGatewayMessage SerializeJSON SetEncoding SetLocale SetProfileString SetVariable Sgn Sin Sleep SpanExcluding SpanIncluding Sqr StripCR StructAppend StructClear StructCopy StructCount StructDelete StructFind StructFindKey StructFindValue StructGet StructInsert StructIsEmpty StructKeyArray StructKeyExists StructKeyList StructKeyList StructNew StructSort StructUpdate Tan TimeFormat ToBase64 ToBinary ToScript ToString Trim UCase URLDecode URLEncodedFormat URLSessionFormat Val ValueList VerifyClient Week Wrap Wrap WriteOutput XmlChildPos XmlElemNew XmlFormat XmlGetNodeType XmlNew XmlParse XmlSearch XmlTransform XmlValidate Year YesNoFormat";var d="cfabort cfajaximport cfajaxproxy cfapplet cfapplication cfargument cfassociate cfbreak cfcache cfcalendar cfcase cfcatch cfchart cfchartdata cfchartseries cfcol cfcollection cfcomponent cfcontent cfcookie cfdbinfo cfdefaultcase cfdirectory cfdiv cfdocument cfdocumentitem cfdocumentsection cfdump cfelse cfelseif cferror cfexchangecalendar cfexchangeconnection cfexchangecontact cfexchangefilter cfexchangemail cfexchangetask cfexecute cfexit cffeed cffile cfflush cfform cfformgroup cfformitem cfftp cffunction cfgrid cfgridcolumn cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfimage cfimport cfinclude cfindex cfinput cfinsert cfinterface cfinvoke cfinvokeargument cflayout cflayoutarea cfldap cflocation cflock cflog cflogin cfloginuser cflogout cfloop cfmail cfmailparam cfmailpart cfmenu cfmenuitem cfmodule cfNTauthenticate cfobject cfobjectcache cfoutput cfparam cfpdf cfpdfform cfpdfformparam cfpdfparam cfpdfsubform cfpod cfpop cfpresentation cfpresentationslide cfpresenter cfprint cfprocessingdirective cfprocparam cfprocresult cfproperty cfquery cfqueryparam cfregistry cfreport cfreportparam cfrethrow cfreturn cfsavecontent cfschedule cfscript cfsearch cfselect cfset cfsetting cfsilent cfslider cfsprydataset cfstoredproc cfswitch cftable cftextarea cfthread cfthrow cftimer cftooltip cftrace cftransaction cftree cftreeitem cftry cfupdate cfwddx cfwindow cfxml cfzip cfzipparam";var b="all and any between cross in join like not null or outer some";this.regexList=[{regex:new RegExp("--(.*)$","gm"),css:"comments"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(d),"gmi"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["coldfusion","cf"];SyntaxHighlighter.brushes.ColdFusion=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCpp.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var d="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed";var b="break case catch class const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend goto inline mutable naked namespace new noinline noreturn nothrow register reinterpret_cast return selectany sizeof static static_cast struct switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while";var c="assert isalnum isalpha iscntrl isdigit isgraph islower isprintispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^ *#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"color1 bold"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"functions bold"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword bold"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["cpp","c"];SyntaxHighlighter.brushes.Cpp=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCSharp.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while";function b(d,f){var e=(d[0].indexOf("///")==0)?"color1":"comments";return[new SyntaxHighlighter.Match(d[0],d.index,e)]}this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,func:b},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:/@"(?:[^"]|"")*"/g,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:/\bpartial(?=\s+(?:class|interface|struct)\b)/g,css:"keyword"},{regex:/\byield(?=\s+(?:return|break)\b)/g,css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["c#","c-sharp","csharp"];SyntaxHighlighter.brushes.CSharp=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCss.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){function b(g){return"\\b([a-z_]|)"+g.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b"}function d(g){return"\\b"+g.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b"}var e="ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";var c="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";var f="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:new RegExp(b(e),"gm"),css:"keyword"},{regex:new RegExp(d(c),"g"),css:"value"},{regex:new RegExp(this.getKeywords(f),"g"),css:"color1"}];this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["css"];SyntaxHighlighter.brushes.CSS=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushDelphi.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="abs addr and ansichar ansistring array as asm begin boolean byte cardinal case char class comp const constructor currency destructor div do double downto else end except exports extended false file finalization finally for function goto if implementation in inherited int64 initialization integer interface is label library longint longword mod nil not object of on or packed pansichar pansistring pchar pcurrency pdatetime pextended pint64 pointer private procedure program property pshortstring pstring pvariant pwidechar pwidestring protected public published raise real real48 record repeat set shl shortint shortstring shr single smallint string then threadvar to true try type unit until uses val var varirnt while widechar widestring with word write writeln xor";this.regexList=[{regex:/\(\*[\s\S]*?\*\)/gm,css:"comments"},{regex:/{(?!\$)[\s\S]*?}/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\{\$[a-zA-Z]+ .+\}/g,css:"color1"},{regex:/\b[\d\.]+\b/g,css:"value"},{regex:/\$[a-zA-Z0-9]+\b/g,css:"value"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["delphi","pascal","pas"];SyntaxHighlighter.brushes.Delphi=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushDiff.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){this.regexList=[{regex:/^\+\+\+.*$/gm,css:"color2"},{regex:/^\-\-\-.*$/gm,css:"color2"},{regex:/^\s.*$/gm,css:"color1"},{regex:/^@@.*@@$/gm,css:"variable"},{regex:/^\+[^\+]{1}.*$/gm,css:"string"},{regex:/^\-[^\-]{1}.*$/gm,css:"comments"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["diff","patch"];SyntaxHighlighter.brushes.Diff=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushErlang.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="after and andalso band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse query receive rem try when xor module export import define";this.regexList=[{regex:new RegExp("[A-Z][A-Za-z0-9_]+","g"),css:"constants"},{regex:new RegExp("\\%.+","gm"),css:"comments"},{regex:new RegExp("\\?[A-Za-z0-9_]+","g"),css:"preprocessor"},{regex:new RegExp("[a-z0-9_]+:[a-z0-9_]+","g"),css:"functions"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["erl","erlang"];SyntaxHighlighter.brushes.Erland=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushGroovy.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var e="as assert break case catch class continue def default do else extends finally if in implements import instanceof interface new package property return switch throw throws try while public protected private static";var d="void boolean byte char short int long float double";var c="null";var b="allProperties count get size collect each eachProperty eachPropertyName eachWithIndex find findAll findIndexOf grep inject max min reverseEach sort asImmutable asSynchronized flatten intersect join pop reverse subMap toList padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText splitEachLine withReader append encodeBase64 decodeBase64 filterLine transformChar transformLine withOutputStream withPrintWriter withStream withStreams withWriter withWriterAppend write writeLine dump inspect invokeMethod print println step times upto use waitForOrKill getText";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/""".*"""/g,css:"string"},{regex:new RegExp("\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b","gi"),css:"value"},{regex:new RegExp(this.getKeywords(e),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"color1"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"constants"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["groovy"];SyntaxHighlighter.brushes.Groovy=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJava.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="abstract assert boolean break byte case catch char class const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:/\/\*([^\*][\s\S]*?)?\*\//gm,css:"comments"},{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}];this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g})}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["java"];SyntaxHighlighter.brushes.Java=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJavaFX.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="Boolean Byte Character Double Duration Float Integer Long Number Short String Void";var b="abstract after and as assert at before bind bound break catch class continue def delete else exclusive extends false finally first for from function if import in indexof init insert instanceof into inverse last lazy mixin mod nativearray new not null on or override package postinit protected public public-init public-read replace return reverse sizeof step super then this throw true try tween typeof var where while with attribute let private readonly static trigger";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,css:"color2"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"variable"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["jfx","javafx"];SyntaxHighlighter.brushes.JavaFX=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJScript.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with";var c=SyntaxHighlighter.regexLib;this.regexList=[{regex:c.multiLineDoubleQuotedString,css:"string"},{regex:c.multiLineSingleQuotedString,css:"string"},{regex:c.singleLineCComments,css:"comments"},{regex:c.multiLineCComments,css:"comments"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}];this.forHtmlScript(c.scriptScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["js","jscript","javascript"];SyntaxHighlighter.brushes.JScript=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPerl.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr chroot close closedir connect cos crypt defined delete each endgrent endhostent endnetent endprotoent endpwent endservent eof exec exists exp fcntl fileno flock fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getppid getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt glob gmtime grep hex index int ioctl join keys kill lc lcfirst length link listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd oct open opendir ord pack pipe pop pos print printf prototype push quotemeta rand read readdir readline readlink readpipe recv rename reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat study substr symlink syscall sysopen sysread sysseek system syswrite tell telldir time times tr truncate uc ucfirst umask undef unlink unpack unshift utime values vec wait waitpid warn write";var c="bless caller continue dbmclose dbmopen die do dump else elsif eval exit for foreach goto if import last local my next no our package redo ref require return sub tie tied unless untie until use wantarray while";this.regexList=[{regex:new RegExp("#[^!].*$","gm"),css:"comments"},{regex:new RegExp("^\\s*#!.*$","gm"),css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp("(\\$|@|%)\\w+","g"),css:"variable"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["perl","Perl","pl"];SyntaxHighlighter.brushes.Perl=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPhp.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare";var d="abstract and array as break case catch cfunction class clone const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function include include_once global goto if implements interface instanceof namespace new old_function or private protected public return require require_once static switch throw try use var while xor ";var c="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"constants"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["php"];SyntaxHighlighter.brushes.Php=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPlain.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["text","plain"];SyntaxHighlighter.brushes.Plain=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPowerShell.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="Add-Content Add-History Add-Member Add-PSSnapin Clear(-Content)? Clear-Item Clear-ItemProperty Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy(-Item)? Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach(-Object)? Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move(-Item)? Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set(-Variable)? Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where(-Object)? Write-Debug Write-Error Write(-Host)? Write-Output Write-Progress Write-Verbose Write-Warning";var b="ac asnp clc cli clp clv cpi cpp cvpa diff epal epcsv fc fl ft fw gal gc gci gcm gdr ghy gi gl gm gp gps group gsv gsnp gu gv gwmi iex ihy ii ipal ipcsv mi mp nal ndr ni nv oh rdr ri rni rnp rp rsnp rv rvpa sal sasv sc select si sl sleep sort sp spps spsv sv tee cat cd cp h history kill lp ls mount mv popd ps pushd pwd r rm rmdir echo cls chdir del dir erase rd ren type % \\?";this.regexList=[{regex:/#.*$/gm,css:"comments"},{regex:/\$[a-zA-Z0-9]+\b/g,css:"value"},{regex:/\-[a-zA-Z]+\b/g,css:"keyword"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["powershell","ps"];SyntaxHighlighter.brushes.PowerShell=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPython.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var d="and assert break class continue def del elif else except exec finally for from global if import in is lambda not or pass print raise return try yield while";var b="__import__ abs all any apply basestring bin bool buffer callable chr classmethod cmp coerce compile complex delattr dict dir divmod enumerate eval execfile file filter float format frozenset getattr globals hasattr hash help hex id input int intern isinstance issubclass iter len list locals long map max min next object oct open ord pow print property range raw_input reduce reload repr reversed round set setattr slice sorted staticmethod str sum super tuple type type unichr unicode vars xrange zip";var c="None True False self cls class_";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["py","python"];SyntaxHighlighter.brushes.Python=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushRuby.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="alias and BEGIN begin break case class def define_method defined do each else elsif END end ensure false for if in module new next nil not or raise redo rescue retry return self super then throw true undef unless until when while yield";var c="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ThreadGroup Thread Time TrueClass";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b[A-Z0-9_]+\b/g,css:"constants"},{regex:/:[a-z][A-Za-z0-9_]*/g,css:"color2"},{regex:/(\$|@@|@)\w+/g,css:"variable bold"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["ruby","rails","ror","rb"];SyntaxHighlighter.brushes.Ruby=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushSass.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){function b(j){return"\\b([a-z_]|)"+j.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b"}function e(j){return"\\b"+j.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b"}var g="ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";var d="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";var i="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";var c="!important !default";var f="@import @extend @debug @warn @if @for @while @mixin @include";var h=SyntaxHighlighter.regexLib;this.regexList=[{regex:h.multiLineCComments,css:"comments"},{regex:h.singleLineCComments,css:"comments"},{regex:h.doubleQuotedString,css:"string"},{regex:h.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/\b(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)\b/g,css:"value"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(c),"g"),css:"color3"},{regex:new RegExp(this.getKeywords(f),"g"),css:"preprocessor"},{regex:new RegExp(b(g),"gm"),css:"keyword"},{regex:new RegExp(e(d),"g"),css:"value"},{regex:new RegExp(this.getKeywords(i),"g"),css:"color1"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["sass","scss"];SyntaxHighlighter.brushes.Sass=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushScala.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="val sealed case def true trait implicit forSome import match object null finally super override try lazy for var catch throw type extends class while with new final yield abstract else do if return protected private this package false";var b="[_:=><%#@]+";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/0x[a-f0-9]+|\d+(\.\d+)?/gi,css:"value"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:new RegExp(b,"gm"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["scala"];SyntaxHighlighter.brushes.Scala=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushSql.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var c="abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year";var d="absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work";var b="all and any between cross in join like not null or outer some";this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(d),"gmi"),css:"keyword"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["sql"];SyntaxHighlighter.brushes.Sql=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushVb.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){var b="AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType Date Decimal Declare Default Delegate Dim DirectCast Do Double Each Else ElseIf End Enum Erase Error Event Exit False Finally For Friend Function Get GetType GoSub GoTo Handles If Implements Imports In Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing NotInheritable NotOverridable Object On Option Optional Or OrElse Overloads Overridable Overrides ParamArray Preserve Private Property Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume Return Select Set Shadows Shared Short Single Static Step Stop String Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until Variant When While With WithEvents WriteOnly Xor";this.regexList=[{regex:/'.*$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/^\s*#.*$/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["vb","vbnet"];SyntaxHighlighter.brushes.Vb=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushXml.js' */
(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){function b(f,j){var g=SyntaxHighlighter.Match,i=f[0],d=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(i),c=[];if(f.attributes!=null){var e,h=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");while((e=h.exec(i))!=null){c.push(new g(e.name,f.index+e.index,"color1"));c.push(new g(e.value,f.index+e.index+e[0].indexOf(e.value),"string"))}}if(d!=null){c.push(new g(d.name,f.index+d[0].indexOf(d.name),"keyword"))}return c}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:b}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["xml","xhtml","xslt","html","html/xml"];SyntaxHighlighter.brushes.Xml=a;typeof(exports)!="undefined"?exports.Brush=a:null})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return a.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","backbone"],function(b,a,c){return c.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(f){var d=b(f.target).is(":checked");this.model.saveWatchPage(d)},changeWatchBlogs:function(f){var d=b(f.target).is(":checked");this.model.saveWatchBlogs(d)},changeWatchSpace:function(f){var d=b(f.target).is(":checked");this.model.saveWatchSpace(d)},togglePageEnabledState:function(d){var e=d.get("watchingPage");var g=d.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",g);this.$("#cw-watch-page").prop("checked",e||g);var f=g?"\u60a8\u5c06\u4f1a\u6536\u5230\u6b64\u9875\u9762\u7684\u66f4\u65b0\uff0c\u56e0\u4e3a\u60a8\u5df2\u7ecf\u5173\u6ce8\u4e86\u6b64\u7a7a\u95f4\u3002":"";this.$(".cw-tooltip-watch-page").attr("original-title",f)},toggleBlogsEnabledState:function(d){var g=d.get("watchingBlogs");var f=d.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",f);this.$("#cw-watch-blogs").prop("checked",g||f);var e=f?"\u60a8\u5df2\u8ba2\u9605\u4e86\u6240\u6709\u535a\u6587\uff0c\u56e0\u4e3a\u60a8\u5df2\u5173\u6ce8\u6b64\u7a7a\u95f4\u3002":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",e)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var e=this.model.get("watchingPage");var i=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var d=this.model.get("isBlogPost");function h(){if(g){return{title:"\u60a8\u6b63\u5728\u5173\u6ce8\u6b64\u7a7a\u95f4",description:"\u6b63\u5728\u5bf9\u6b64\u7a7a\u95f4\u6240\u6709\u5185\u5bb9\u63a5\u6536email\u66f4\u65b0\u3002",}}if(e&&d&&i){return{title:"\u60a8\u6b63\u5728\u5173\u6ce8\u6b64\u535a\u6587",description:"\u6b63\u5728\u901a\u8fc7email\u63a5\u6536\u6b64\u535a\u6587\u7684\u53d8\u66f4\u548c\u6240\u6709\u6b64\u7a7a\u95f4\u7684\u65b0\u535a\u6587\u3002",}}if(e&&d){return{title:"\u60a8\u6b63\u5728\u5173\u6ce8\u6b64\u535a\u6587",description:"\u6b63\u5728\u5bf9\u6b64\u535a\u6587\u7684\u53d8\u66f4\u63a5\u6536email\u66f4\u65b0\u3002",}}if(e){return{title:"\u60a8\u6b63\u5728\u5173\u6ce8\u6b64\u9875\u9762",description:"\u6b63\u5728\u5bf9\u6b64\u9875\u9762\u7684\u53d8\u66f4\u63a5\u6536email\u66f4\u65b0\u3002",}}if(d&&i){return{title:"\u60a8\u6b63\u5728\u5173\u6ce8\u65b0\u7684\u535a\u6587",description:"\u6b63\u5728\u5bf9\u6b64\u7a7a\u95f4\u7684\u65b0\u535a\u6587\u63a5\u6536email\u66f4\u65b0\u3002",}}if(d){return{title:"\u60a8\u6ca1\u6709\u5173\u6ce8\u6b64\u535a\u6587",description:"\u5f00\u59cb\u5173\u6ce8\u4ee5\u5bf9\u6b64\u535a\u6587\u7684\u53d8\u66f4\u63a5\u6536email\u66f4\u65b0\u3002",}}return{title:"\u60a8\u6ca1\u6709\u5173\u6ce8\u6b64\u9875\u9762",description:"\u5f00\u59cb\u5173\u6ce8\u4ee5\u5bf9\u6b64\u9875\u9762\u7684\u53d8\u66f4\u63a5\u6536email\u66f4\u65b0\u3002",}}var f=h();this.$(".cw-title").text(f.title);this.$(".cw-title-description").text(f.description)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(b,i,h,f,d,g){h.toInit(function(){var j=b("#watch-content-button");if(!j.length){return}j.click(function(l){l.preventDefault()});var k=h.Meta.get("page-id");b.getJSON(h.contextPath()+"/rest/watch-button/1.0/watchState/"+k,function(l){i.extend(l,{pageId:k,spaceKey:h.Meta.get("space-key"),spaceName:h.Meta.get("space-name")});a(j,l);j.addClass("watch-state-initialised")})});function a(j,n){e(j,n);var m=new f(n);var l=new d({model:m});h.InlineDialog(j,"confluence-watch",function(p,o,q){l.setElement(p);l.render();q()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){b(".tipsy").hide()}});m.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(o){e(j,o.toJSON())});m.on("change:watchingPage",function(o,q){var p=q?"watch-page":"unwatch-page";h.trigger("analytics",{name:p})});m.on("change:watchingBlogs",function(o,q){var p=q?"watch-blogs":"unwatch-blogs";h.trigger("analytics",{name:p})});m.on("change:watchingSpace",function(o,q){var p=q?"watch-space":"unwatch-space";h.trigger("analytics",{name:p})});c(m);var k=false;b(document).on("keyup",function(){k=false});window.CW_watchPage=function(){if(k){return}k=true;var q=m.get("watchingSpace");var p=m.get("watchingPage");if(q){b("body, #splitter-content").animate({scrollTop:0},300,function(){j.click();setTimeout(function(){b(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var r=!p;m.saveWatchPage(r);var o=r?"\u5f00\u59cb\u5173\u6ce8\u6b64\u9875\u9762":"\u60a8\u505c\u6b62\u4e86\u5bf9\u6b64\u9875\u9762\u7684\u5173\u6ce8\u3002";g(o)}}}function e(k,q){var m=q.watchingPage;var j=q.isBlogPost&&q.watchingBlogs;var o=q.watchingSpace;if(m||j||o){var l=k.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var n=h.format("{0}W{1}\u5173\u6ce8\u4e2d","<u>","</u>");k.prop("title","\u505c\u6b62\u5173\u6ce8 (w)").children("span").empty().append(l).append(" "+n)}else{var l=k.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var p=h.format("{0}W{1}atch","<u>","</u>");k.prop("title","Watch (w)").children("span").empty().append(l).append(" "+p)}}function c(j){j.on("change:watchingPage",function(k,m){var l=m?"watchpage.pageoperation":"unwatchpage.pageoperation";h.trigger(l)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Watch.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_ignored) {
  return '<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ' + ((opt_data.watchingPage) ? 'checked' : '') + '><label for="cw-watch-page">' + ((opt_data.isBlogPost) ? soy.$$escapeHtml("\u5173\u6ce8\u535a\u6587") : soy.$$escapeHtml("\u5173\u6ce8\u9875\u9762")) + '</label></div></div>' + ((opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("\u5173\u6ce8\u6b64\u7a7a\u95f4\u7684\u65b0\u535a\u6587") + '</label></div></div>' : '') + '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ' + ((opt_data.watchingSpace) ? 'checked' : '') + '><label for="cw-watch-space">' + soy.$$escapeHtml("\u5173\u6ce8\u6b64\u7a7a\u95f4\u7684\u6240\u6709\u5185\u5bb9") + '</label></div></form>' + ((opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("\u7ba1\u7406\u5173\u6ce8\u4eba") + '</button></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Watch.Templates.dialogBody.soyTemplateName = 'Confluence.Watch.Templates.dialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml("\u65e0\u5339\u914d\u5185\u5bb9") + '" placeholder="' + soy.$$escapeHtml("\u7528\u6237\u540d\uff0c\u7ec4\u6216Email") + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml("\u6dfb\u52a0\u4e00\u4e2a\u53ef\u9009\u7684\u8bf4\u660e") + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml("\u5206\u4eab") + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml("\u53d6\u6d88") + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
AJS.Confluence.SharePage={};AJS.Confluence.SharePage.autocompleteUser=function(d){d=d||document.body;var e=AJS.$,a=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var c=function(j){if(!j||!j.result){throw new Error("Invalid JSON format")}var f=[];for(var g=0;g<j.result.length;g++){var h=j.result[g];if(h.type=="group"){h=b(h)}}f.push(j.result);return f};function b(f){if(f.name=="confluence-users"||f.name=="confluence-administrators"){return f}f.title=f.name;f.group=f.name;f.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};f.link=[{href:Confluence.getContextPath(),rel:"self"}];return f}e("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",d).each(function(){var h=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var g=h.attr("data-max")||10,j=h.attr("data-alignment")||"left",i=h.attr("data-dropdown-target"),f=null;if(i){f=e(i)}else{f=e("<div></div>");h.after(f)}f.addClass("aui-dd-parent autocomplete");h.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){h.trigger("open.autocomplete-sharepage")},{makeParams:function(k){return{"max-results":g,query:k.replace("{|}","")}},dropdownPlacement:function(k){f.append(k)},makeRestMatrixFromData:c,addDropdownData:function(l){var k=e.trim(h.val());if(a.test(k)){l.push([{name:k,email:k,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!l.length){var m=h.attr("data-none-message");if(m){l.push([{name:m,className:"no-results",href:"#"}])}}return l},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(m,l){if(l.find(".search-for").length){h.trigger("selected.autocomplete-sharepage",{searchFor:h.val()});return}if(l.find(".no-results").length){this.hide();m.preventDefault();return}var k=e("span:eq(0)",l).data("properties");if(!k.email){k=k.restObj}h.trigger("selected.autocomplete-sharepage",{content:k});this.hide();m.preventDefault()}}})})};(function(a){jQuery.fn.extend({elastic:function(){var b=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var g=jQuery(this),c=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),j=parseInt(g.css("line-height"),10)||parseInt(g.css("font-size"),"10"),l=parseInt(g.css("height"),10)||j*3,k=parseInt(g.css("max-height"),10)||Number.MAX_VALUE,d=0;if(k<0){k=Number.MAX_VALUE}c.appendTo(g.parent());var f=b.length;while(f--){c.css(b[f].toString(),g.css(b[f].toString()))}function h(){var i=Math.floor(parseInt(g.width(),10));if(c.width()!==i){c.css({width:i+"px"});e(true)}}function m(i,o){var n=Math.floor(parseInt(i,10));if(g.height()!==n){g.css({height:n+"px",overflow:o})}}function e(p){var o=g.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=c.html().replace(/<br>/ig,"<br />");if(p||o+"&nbsp;"!==i){c.html(o+"&nbsp;");if(Math.abs(c.height()+j-g.height())>3){var n=c.height()+j;if(n>=k){m(k,"auto")}else{if(n<=l){m(l,"hidden")}else{m(n,"hidden")}}}}}g.css({overflow:"hidden"});g.bind("keyup change cut paste",function(){e()});a(window).bind("resize",h);g.bind("resize",h);g.bind("update",e);g.bind("input paste",function(i){setTimeout(e,250)});e()})}})})(AJS.$);(function(f){var e,c={hideCallback:a,width:250,hideDelay:3600000,calculatePositions:function(h,o,w,s){var p;var y;var u;var l=-7;var m;var q;var x=o.target.offset();var g=o.target.outerWidth();var j=x.left+g/2;var t=(window.pageYOffset||document.documentElement.scrollTop)+f(window).height();var k=10;u=x.top+o.target.outerHeight()+s.offsetY;p=x.left+s.offsetX;var n=x.top>h.height();var i=(u+h.height())<t;q=(!i&&n)||(s.onTop&&n);var r=f(window).width()-(p+s.width+k);if(q){u=x.top-h.height()-8;var v=s.displayShadow?(AJS.$.browser.msie?10:9):0;l=h.height()-v}m=j-p+s.arrowOffsetX;if(s.isRelativeToMouse){if(r<0){y=k;p="auto";m=w.x-(f(window).width()-s.width)}else{p=w.x-20;y="auto";m=w.x-p}}else{if(r<0){y=k;p="auto";m=j-(f(window).width()-h.outerWidth())}else{if(s.width<=g/2){m=s.width/2;p=j-s.width/2}}}return{displayAbove:q,popupCss:{left:p,right:y,top:u},arrowCss:{position:"absolute",left:m,right:"auto",top:l}}}};var a=function(){f(".dashboard-actions .explanation").hide()};var d=function(j,h,i){if(j.find("input").length){i();return}j.append(Confluence.Templates.Share.Dialog.shareContentPopup());AJS.Confluence.SharePage.autocompleteUser();var k=function(m){AJS.Confluence.SharePage.current.hide();if(m){setTimeout(function(){j.empty()},300)}return false};f(document).keyup(function(m){if(m.keyCode==27){k(true);f(document).unbind("keyup",arguments.callee);return false}return true});j.find(".close-dialog").click(function(){k(true)});j.find("#note").elastic();j.find("form").submit(function(){var r=[];j.find(".recipients li").each(function(s,t){r.push(f(t).attr("data-userKey"))});if(r.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");j.find(".progress-messages-icon").removeClass("error");j.find(".progress-messages").text("\u53d1\u9001");j.find(".progress-messages").attr("title","\u53d1\u9001");var o=Raphael.spinner(j.find(".progress-messages-icon")[0],7,"#666");j.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");j.find(".progress-messages").css("padding-left",j.find(".progress-messages-icon").innerWidth()+20);var r=[];j.find(".recipients li[data-userKey]").each(function(s,t){r.push(f(t).attr("data-userKey"))});var q=[];j.find(".recipients li[data-email]").each(function(s,t){q.push(f(t).attr("data-email"))});var m=[];j.find(".recipients li[data-group]").each(function(s,t){m.push(f(t).attr("data-group"))});var n=j.find("#note");var p={users:r,emails:q,groups:m,note:n.hasClass("placeholded")?"":n.val(),entityId:AJS.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(p),dataType:"text",success:function(){setTimeout(function(){o();j.find(".progress-messages-icon").addClass("done");j.find(".progress-messages").text("\u5df2\u53d1\u9001");j.find(".progress-messages").attr("title","\u5df2\u53d1\u9001");setTimeout(function(){j.find(".progress-messages").text("");j.find(".progress-messages-icon").removeClass("done");j.find("#note").val("");f("button,input,textarea",j).removeAttr("disabled");k(false)},1000)},500)},error:function(t,s){o();j.find(".progress-messages-icon").addClass("error");j.find(".progress-messages").text("\u9519\u8bef\u53d1\u9001\u4e2d");j.find(".progress-messages").attr("title","\u9519\u8bef\u53d1\u9001\u4e2d"+": "+s);f("button,input,textarea",j).removeAttr("disabled")}});return false});var l=j.find("#users");var g=j.find("input.submit");l.bind("selected.autocomplete-sharepage",function(n,m){var o=function(r,q,s){var u=j.find(".recipients"),t,p;t="li[data-"+r+'="'+s.content[r]+'"]';if(u.find(t).length>0){u.find(t).hide()}else{u.append(q(s.content))}p=u.find(t);p.find(".remove-recipient").click(function(){p.remove();if(u.find("li").length==0){g.attr("disabled","true")}AJS.Confluence.SharePage.current.refresh();l.focus();return false});p.fadeIn(200)};if(m.content.email){o("email",Confluence.Templates.Share.Dialog.recipientEmail,m)}else{if(m.content.type=="group"){o("group",Confluence.Templates.Share.Dialog.recipientGroup,m)}else{o("userKey",Confluence.Templates.Share.Dialog.recipientUser,m)}}AJS.Confluence.SharePage.current.refresh();g.removeAttr("disabled");l.val("");l.focus();return false});l.bind("open.autocomplete-sharepage",function(n,m){if(f("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()}});l.keypress(function(m){return m.keyCode!=13});f(document).bind("showLayer",function(o,n,m){if(n=="inlineDialog"&&m.popup==AJS.Confluence.SharePage.current){m.popup.find("#users").focus()}});f(h).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);i()};var b=function(g){var h=f("#splitter-content");if(h.length!==0){g.container=h;g.offsetY=AJS.InlineDialog.opts.offsetY-h.offset().top}return g};AJS.Confluence.SharePage.initDialog=function(g,i,h){if(g.length){var j=f.extend(false,b(c),h);AJS.Confluence.SharePage.current=AJS.InlineDialog(g,i,d,j)}};AJS.toInit(function(g){AJS.Confluence.SharePage.initDialog(g("#shareContentLink"),"shareContentPopup")})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-view-storage-javascript', location = 'jscripts/source-editor/view-source.js' */
AJS.toInit(function(a){if(a("#action-view-storage-link").length){a("#action-source-editor-view-storage-link").closest("li").hide()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^\?|#]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,n,k,l,h){var b={},m;b.setAnalyticsSource=function(a,d){if(typeof m==="undefined"){var c=j._data(k,"events");m=c&&c.analytics&&c.analytics.length>0}m&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(l.URL),d={userKey:n.get("remote-user-key"),pageID:n.get("page-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(l.URL);l.URL!==a&&
k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-analytics', location = '/includes/js/page.js' */
define("confluence/page",["ajs","jquery","confluence/analytics-support","window","document"],function(a,b,e,f,g){var i=a.Meta.get("page-id"),d=function(c,a){e.publish("confluence.page."+c,b.extend({pageID:i},a||{}))},j=(new Date).getTime();return function(){var c=b("#main-content");d("view");c.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(f.location.host)?"internal":"external";d("link.click",{linkType:a})});var h=b(f),e=(new Date).getTime();h.on("scroll.content",a.debounce(function(){var a=
g.body.scrollTop+g.body.offsetHeight,b=c.offset().top+c.height();a>b&&(d("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-j)/1E3}),h.off("scroll.content"))},200));setTimeout(function(){d("reading")},3E5)}});require("confluence/module-exporter").safeRequire("confluence/page",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/templates-amd.js' */
define("tc/templates",function(){return Confluence.TeamCalendars.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/dialogs-amd.js' */
define("tc/dialogs",function(){return Confluence.TeamCalendars.Dialogs});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/backbone-amd.js' */
(function(a,b){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(e,f,d){a.Backbone=b(a,d,e,f)})}else{if(typeof exports!=="undefined"){var c=require("underscore");b(a,exports,c)}else{a.Backbone=b(a,{},a._,(a.jQuery||a.Zepto||a.ender||a.$))}}}(this,function(t,c,G,h){var r=t.Backbone;var j=[];var s=j.slice;c.VERSION="1.1.2";c.$=h;c.noConflict=function(){t.Backbone=r;return this};c.emulateHTTP=false;c.emulateJSON=false;var p=c.Events={on:function(J,M,L){if(!I(this,"on",J,[M,L])||!M){return this}this._events||(this._events={});var K=this._events[J]||(this._events[J]=[]);K.push({callback:M,context:L,ctx:L||this});return this},once:function(K,N,L){if(!I(this,"once",K,[N,L])||!N){return this}var J=this;var M=G.once(function(){J.off(K,M);N.apply(this,arguments)});M._callback=N;return this.on(K,M,L)},off:function(K,S,L){if(!this._events||!I(this,"off",K,[S,L])){return this}if(!K&&!S&&!L){this._events=void 0;return this}var R=K?[K]:G.keys(this._events);for(var Q=0,M=R.length;Q<M;Q++){K=R[Q];var T=this._events[K];if(!T){continue}if(!S&&!L){delete this._events[K];continue}var O=[];for(var P=0,N=T.length;P<N;P++){var J=T[P];if(S&&S!==J.callback&&S!==J.callback._callback||L&&L!==J.context){O.push(J)}}if(O.length){this._events[K]=O}else{delete this._events[K]}}return this},trigger:function(L){if(!this._events){return this}var K=s.call(arguments,1);if(!I(this,"trigger",L,K)){return this}var M=this._events[L];var J=this._events.all;if(M){d(M,K)}if(J){d(J,arguments)}return this},stopListening:function(M,K,O){var L=this._listeningTo;if(!L){return this}var J=!K&&!O;if(!O&&typeof K==="object"){O=this}if(M){(L={})[M._listenId]=M}for(var N in L){M=L[N];M.off(K,O,this);if(J||G.isEmpty(M._events)){delete this._listeningTo[N]}}return this}};var a=/\s+/;var I=function(Q,O,J,M){if(!J){return true}if(typeof J==="object"){for(var L in J){Q[O].apply(Q,[L,J[L]].concat(M))}return false}if(a.test(J)){var P=J.split(a);for(var K=0,N=P.length;K<N;K++){Q[O].apply(Q,[P[K]].concat(M))}return false}return true};var d=function(O,M){var P,N=-1,L=O.length,K=M[0],J=M[1],Q=M[2];switch(M.length){case 0:while(++N<L){(P=O[N]).callback.call(P.ctx)}return;case 1:while(++N<L){(P=O[N]).callback.call(P.ctx,K)}return;case 2:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J)}return;case 3:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J,Q)}return;default:while(++N<L){(P=O[N]).callback.apply(P.ctx,M)}return}};var q={listenTo:"on",listenToOnce:"once"};G.each(q,function(J,K){p[K]=function(N,L,P){var M=this._listeningTo||(this._listeningTo={});var O=N._listenId||(N._listenId=G.uniqueId("l"));M[O]=N;if(!P&&typeof L==="object"){P=this}N[J](L,P,this);return this}});p.bind=p.on;p.unbind=p.off;G.extend(c,p);var m=c.Model=function(J,L){var K=J||{};L||(L={});this.cid=G.uniqueId("c");this.attributes={};if(L.collection){this.collection=L.collection}if(L.parse){K=this.parse(K,L)||{}}K=G.defaults({},K,G.result(this,"defaults"));this.set(K,L);this.changed={};this.initialize.apply(this,arguments)};G.extend(m.prototype,p,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(J){return G.clone(this.attributes)},sync:function(){return c.sync.apply(this,arguments)},get:function(J){return this.attributes[J]},escape:function(J){return G.escape(this.get(J))},has:function(J){return this.get(J)!=null},set:function(R,K,V){var P,S,T,Q,O,U,L,N;if(R==null){return this}if(typeof R==="object"){S=R;V=K}else{(S={})[R]=K}V||(V={});if(!this._validate(S,V)){return false}T=V.unset;O=V.silent;Q=[];U=this._changing;this._changing=true;if(!U){this._previousAttributes=G.clone(this.attributes);this.changed={}}N=this.attributes,L=this._previousAttributes;if(this.idAttribute in S){this.id=S[this.idAttribute]}for(P in S){K=S[P];if(!G.isEqual(N[P],K)){Q.push(P)}if(!G.isEqual(L[P],K)){this.changed[P]=K}else{delete this.changed[P]}T?delete N[P]:N[P]=K}if(!O){if(Q.length){this._pending=V}for(var M=0,J=Q.length;M<J;M++){this.trigger("change:"+Q[M],this,N[Q[M]],V)}}if(U){return this}if(!O){while(this._pending){V=this._pending;this._pending=false;this.trigger("change",this,V)}}this._pending=false;this._changing=false;return this},unset:function(J,K){return this.set(J,void 0,G.extend({},K,{unset:true}))},clear:function(K){var J={};for(var L in this.attributes){J[L]=void 0}return this.set(J,G.extend({},K,{unset:true}))},hasChanged:function(J){if(J==null){return !G.isEmpty(this.changed)}return G.has(this.changed,J)},changedAttributes:function(L){if(!L){return this.hasChanged()?G.clone(this.changed):false}var N,M=false;var K=this._changing?this._previousAttributes:this.attributes;for(var J in L){if(G.isEqual(K[J],(N=L[J]))){continue}(M||(M={}))[J]=N}return M},previous:function(J){if(J==null||!this._previousAttributes){return null}return this._previousAttributes[J]},previousAttributes:function(){return G.clone(this._previousAttributes)},fetch:function(K){K=K?G.clone(K):{};if(K.parse===void 0){K.parse=true}var J=this;var L=K.success;K.success=function(M){if(!J.set(J.parse(M,K),K)){return false}if(L){L(J,M,K)}J.trigger("sync",J,M,K)};e(this,K);return this.sync("read",this,K)},save:function(N,K,R){var O,J,Q,L=this.attributes;if(N==null||typeof N==="object"){O=N;R=K}else{(O={})[N]=K}R=G.extend({validate:true},R);if(O&&!R.wait){if(!this.set(O,R)){return false}}else{if(!this._validate(O,R)){return false}}if(O&&R.wait){this.attributes=G.extend({},L,O)}if(R.parse===void 0){R.parse=true}var M=this;var P=R.success;R.success=function(T){M.attributes=L;var S=M.parse(T,R);if(R.wait){S=G.extend(O||{},S)}if(G.isObject(S)&&!M.set(S,R)){return false}if(P){P(M,T,R)}M.trigger("sync",M,T,R)};e(this,R);J=this.isNew()?"create":(R.patch?"patch":"update");if(J==="patch"){R.attrs=O}Q=this.sync(J,this,R);if(O&&R.wait){this.attributes=L}return Q},destroy:function(K){K=K?G.clone(K):{};var J=this;var N=K.success;var L=function(){J.trigger("destroy",J,J.collection,K)};K.success=function(O){if(K.wait||J.isNew()){L()}if(N){N(J,O,K)}if(!J.isNew()){J.trigger("sync",J,O,K)}};if(this.isNew()){K.success();return false}e(this,K);var M=this.sync("delete",this,K);if(!K.wait){L()}return M},url:function(){var J=G.result(this,"urlRoot")||G.result(this.collection,"url")||x();if(this.isNew()){return J}return J.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(K,J){return K},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return !this.has(this.idAttribute)},isValid:function(J){return this._validate({},G.extend(J||{},{validate:true}))},_validate:function(L,K){if(!K.validate||!this.validate){return true}L=G.extend({},this.attributes,L);var J=this.validationError=this.validate(L,K)||null;if(!J){return true}this.trigger("invalid",this,J,G.extend(K,{validationError:J}));return false}});var C=["keys","values","pairs","invert","pick","omit","chain"];G.each(C,function(J){if(!G[J]){return}m.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.attributes);return G[J].apply(G,K)}});var H=c.Collection=function(K,J){J||(J={});if(J.model){this.model=J.model}if(J.comparator!==void 0){this.comparator=J.comparator}this._reset();this.initialize.apply(this,arguments);if(K){this.reset(K,G.extend({silent:true},J))}};var z={add:true,remove:true,merge:true};var n={add:true,remove:false};G.extend(H.prototype,p,{model:m,initialize:function(){},toJSON:function(J){return this.map(function(K){return K.toJSON(J)})},sync:function(){return c.sync.apply(this,arguments)},add:function(K,J){return this.set(K,G.extend({merge:false},J,n))},remove:function(Q,L){var N=!G.isArray(Q);Q=N?[Q]:G.clone(Q);L||(L={});for(var M=0,O=Q.length;M<O;M++){var K=Q[M]=this.get(Q[M]);if(!K){continue}var P=this.modelId(K.attributes);if(P!=null){delete this._byId[P]}delete this._byId[K.cid];var J=this.indexOf(K);this.models.splice(J,1);this.length--;if(!L.silent){L.index=J;K.trigger("remove",K,this,L)}this._removeReference(K,L)}return N?Q[0]:Q},set:function(ab,L){L=G.defaults({},L,z);if(L.parse){ab=this.parse(ab,L)}var O=!G.isArray(ab);ab=O?(ab?[ab]:[]):ab.slice();var T,M,V,S,aa;var Q=L.at;var J=this.comparator&&(Q==null)&&L.sort!==false;var Z=G.isString(this.comparator)?this.comparator:null;var ac=[],W=[],U={};var R=L.add,N=L.merge,ad=L.remove;var X=!J&&R&&ad?[]:false;for(var Y=0,K=ab.length;Y<K;Y++){V=ab[Y];if(S=this.get(V)){if(ad){U[S.cid]=true}if(N&&V!==S){V=this._isModel(V)?V.attributes:V;if(L.parse){V=S.parse(V,L)}S.set(V,L);if(J&&!aa&&S.hasChanged(Z)){aa=true}}ab[Y]=S}else{if(R){M=ab[Y]=this._prepareModel(V,L);if(!M){continue}ac.push(M);this._addReference(M,L)}}M=S||M;if(!M){continue}T=this.modelId(M.attributes);if(X&&(M.isNew()||!U[T])){X.push(M)}U[T]=true}if(ad){for(var Y=0,K=this.length;Y<K;Y++){if(!U[(M=this.models[Y]).cid]){W.push(M)}}if(W.length){this.remove(W,L)}}if(ac.length||(X&&X.length)){if(J){aa=true}this.length+=ac.length;if(Q!=null){for(var Y=0,K=ac.length;Y<K;Y++){this.models.splice(Q+Y,0,ac[Y])}}else{if(X){this.models.length=0}var P=X||ac;for(var Y=0,K=P.length;Y<K;Y++){this.models.push(P[Y])}}}if(aa){this.sort({silent:true})}if(!L.silent){for(var Y=0,K=ac.length;Y<K;Y++){(M=ac[Y]).trigger("add",M,this,L)}if(aa||(X&&X.length)){this.trigger("sort",this,L)}}return O?ab[0]:ab},reset:function(M,J){J||(J={});for(var K=0,L=this.models.length;K<L;K++){this._removeReference(this.models[K],J)}J.previousModels=this.models;this._reset();M=this.add(M,G.extend({silent:true},J));if(!J.silent){this.trigger("reset",this,J)}return M},push:function(K,J){return this.add(K,G.extend({at:this.length},J))},pop:function(K){var J=this.at(this.length-1);this.remove(J,K);return J},unshift:function(K,J){return this.add(K,G.extend({at:0},J))},shift:function(K){var J=this.at(0);this.remove(J,K);return J},slice:function(){return s.apply(this.models,arguments)},get:function(J){if(J==null){return void 0}var K=this.modelId(this._isModel(J)?J.attributes:J);return this._byId[J]||this._byId[K]||this._byId[J.cid]},at:function(J){return this.models[J]},where:function(J,K){if(G.isEmpty(J)){return K?void 0:[]}return this[K?"find":"filter"](function(L){for(var M in J){if(J[M]!==L.get(M)){return false}}return true})},findWhere:function(J){return this.where(J,true)},sort:function(J){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}J||(J={});if(G.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(G.bind(this.comparator,this))}if(!J.silent){this.trigger("sort",this,J)}return this},pluck:function(J){return G.invoke(this.models,"get",J)},fetch:function(J){J=J?G.clone(J):{};if(J.parse===void 0){J.parse=true}var L=J.success;var K=this;J.success=function(M){var N=J.reset?"reset":"set";K[N](M,J);if(L){L(K,M,J)}K.trigger("sync",K,M,J)};e(this,J);return this.sync("read",this,J)},create:function(K,J){J=J?G.clone(J):{};if(!(K=this._prepareModel(K,J))){return false}if(!J.wait){this.add(K,J)}var M=this;var L=J.success;J.success=function(N,O){if(J.wait){M.add(N,J)}if(L){L(N,O,J)}};K.save(null,J);return K},parse:function(K,J){return K},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(J){return J[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(L,K){if(this._isModel(L)){if(!L.collection){L.collection=this}return L}K=K?G.clone(K):{};K.collection=this;var J=new this.model(L,K);if(!J.validationError){return J}this.trigger("invalid",this,J.validationError,K);return false},_isModel:function(J){return J instanceof m},_addReference:function(K,J){this._byId[K.cid]=K;var L=this.modelId(K.attributes);if(L!=null){this._byId[L]=K}K.on("all",this._onModelEvent,this)},_removeReference:function(K,J){if(this===K.collection){delete K.collection}K.off("all",this._onModelEvent,this)},_onModelEvent:function(L,K,N,J){if((L==="add"||L==="remove")&&N!==this){return}if(L==="destroy"){this.remove(K,J)}if(L==="change"){var M=this.modelId(K.previousAttributes());var O=this.modelId(K.attributes);if(M!==O){if(M!=null){delete this._byId[M]}if(O!=null){this._byId[O]=K}}}this.trigger.apply(this,arguments)}});var D=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample","partition"];G.each(D,function(J){if(!G[J]){return}H.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.models);return G[J].apply(G,K)}});var i=["groupBy","countBy","sortBy","indexBy"];G.each(i,function(J){if(!G[J]){return}H.prototype[J]=function(M,K){var L=G.isFunction(M)?M:function(N){return N.get(M)};return G[J](this.models,L,K)}});var w=c.View=function(J){this.cid=G.uniqueId("view");J||(J={});G.extend(this,G.pick(J,y));this._ensureElement();this.initialize.apply(this,arguments)};var g=/^(\S+)\s*(.*)$/;var y=["model","collection","el","id","attributes","className","tagName","events"];G.extend(w.prototype,p,{tagName:"div",$:function(J){return this.$el.find(J)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(J){this.undelegateEvents();this._setElement(J);this.delegateEvents();return this},_setElement:function(J){this.$el=J instanceof c.$?J:c.$(J);this.el=this.$el[0]},delegateEvents:function(L){if(!(L||(L=G.result(this,"events")))){return this}this.undelegateEvents();for(var K in L){var M=L[K];if(!G.isFunction(M)){M=this[L[K]]}if(!M){continue}var J=K.match(g);this.delegate(J[1],J[2],G.bind(M,this))}return this},delegate:function(K,J,L){this.$el.on(K+".delegateEvents"+this.cid,J,L)},undelegateEvents:function(){if(this.$el){this.$el.off(".delegateEvents"+this.cid)}return this},undelegate:function(K,J,L){this.$el.off(K+".delegateEvents"+this.cid,J,L)},_createElement:function(J){return document.createElement(J)},_ensureElement:function(){if(!this.el){var J=G.extend({},G.result(this,"attributes"));if(this.id){J.id=G.result(this,"id")}if(this.className){J["class"]=G.result(this,"className")}this.setElement(this._createElement(G.result(this,"tagName")));this._setAttributes(J)}else{this.setElement(G.result(this,"el"))}},_setAttributes:function(J){this.$el.attr(J)}});c.sync=function(Q,L,K){var N=u[Q];G.defaults(K||(K={}),{emulateHTTP:c.emulateHTTP,emulateJSON:c.emulateJSON});var P={type:N,dataType:"json"};if(!K.url){P.url=G.result(L,"url")||x()}if(K.data==null&&L&&(Q==="create"||Q==="update"||Q==="patch")){P.contentType="application/json";P.data=JSON.stringify(K.attrs||L.toJSON(K))}if(K.emulateJSON){P.contentType="application/x-www-form-urlencoded";P.data=P.data?{model:P.data}:{}}if(K.emulateHTTP&&(N==="PUT"||N==="DELETE"||N==="PATCH")){P.type="POST";if(K.emulateJSON){P.data._method=N}var M=K.beforeSend;K.beforeSend=function(R){R.setRequestHeader("X-HTTP-Method-Override",N);if(M){return M.apply(this,arguments)}}}if(P.type!=="GET"&&!K.emulateJSON){P.processData=false}var J=K.error;K.error=function(S,T,R){K.textStatus=T;K.errorThrown=R;if(J){J.apply(this,arguments)}};var O=K.xhr=c.ajax(G.extend(P,K));L.trigger("request",L,O,K);return O};var u={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};c.ajax=function(){return c.$.ajax.apply(c.$,arguments)};var F=c.Router=function(J){J||(J={});if(J.routes){this.routes=J.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var l=/\((.*?)\)/g;var k=/(\(\?)?:\w+/g;var E=/\*\w+/g;var f=/[\-{}\[\]+?.,\\\^$|#\s]/g;G.extend(F.prototype,p,{initialize:function(){},route:function(K,L,M){if(!G.isRegExp(K)){K=this._routeToRegExp(K)}if(G.isFunction(L)){M=L;L=""}if(!M){M=this[L]}var J=this;c.history.route(K,function(O){var N=J._extractParameters(K,O);if(J.execute(M,N,L)!==false){J.trigger.apply(J,["route:"+L].concat(N));J.trigger("route",L,N);c.history.trigger("route",J,L,N)}});return this},execute:function(L,K,J){if(L){L.apply(this,K)}},navigate:function(K,J){c.history.navigate(K,J);return this},_bindRoutes:function(){if(!this.routes){return}this.routes=G.result(this,"routes");var K,J=G.keys(this.routes);while((K=J.pop())!=null){this.route(K,this.routes[K])}},_routeToRegExp:function(J){J=J.replace(f,"\\$&").replace(l,"(?:$1)?").replace(k,function(L,K){return K?L:"([^/?]+)"}).replace(E,"([^?]*?)");return new RegExp("^"+J+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(J,K){var L=J.exec(K).slice(1);return G.map(L,function(N,M){if(M===L.length-1){return N||null}return N?decodeURIComponent(N):null})}});var b=c.History=function(){this.handlers=[];G.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var o=/^[#\/]|\s+$/g;var B=/^\/+|\/+$/g;var v=/#.*$/;b.started=false;G.extend(b.prototype,p,{interval:50,atRoot:function(){var J=this.location.pathname.replace(/[^\/]$/,"$&/");return J===this.root&&!this.location.search},getHash:function(K){var J=(K||this).location.href.match(/#(.*)$/);return J?J[1]:""},getPath:function(){var K=decodeURI(this.location.pathname+this.location.search);var J=this.root.slice(0,-1);if(!K.indexOf(J)){K=K.slice(J.length)}return K.slice(1)},getFragment:function(J){if(J==null){if(this._hasPushState||!this._wantsHashChange){J=this.getPath()}else{J=this.getHash()}}return J.replace(o,"")},start:function(K){if(b.started){throw new Error("Backbone.history has already been started")}b.started=true;this.options=G.extend({root:"/"},this.options,K);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange" in window;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);this.fragment=this.getFragment();var M=window.addEventListener||function(N,O){return attachEvent("on"+N,O)};this.root=("/"+this.root+"/").replace(B,"/");if(!this._hasHashChange&&this._wantsHashChange&&(!this._wantsPushState||!this._hasPushState)){var L=document.createElement("iframe");L.src="javascript:0";L.style.display="none";L.tabIndex=-1;var J=document.body;this.iframe=J.insertBefore(L,J.firstChild).contentWindow;this.navigate(this.fragment)}if(this._hasPushState){M("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){M("hashchange",this.checkUrl,false)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.location.replace(this.root+"#"+this.getPath());return true}else{if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}}if(!this.options.silent){return this.loadUrl()}},stop:function(){var J=window.removeEventListener||function(K,L){return detachEvent("on"+K,L)};if(this._hasPushState){J("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){J("hashchange",this.checkUrl,false)}}if(this.iframe){document.body.removeChild(this.iframe.frameElement);this.iframe=null}if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)}b.started=false},route:function(J,K){this.handlers.unshift({route:J,callback:K})},checkUrl:function(K){var J=this.getFragment();if(J===this.fragment&&this.iframe){J=this.getHash(this.iframe)}if(J===this.fragment){return false}if(this.iframe){this.navigate(J)}this.loadUrl()},loadUrl:function(J){J=this.fragment=this.getFragment(J);return G.any(this.handlers,function(K){if(K.route.test(J)){K.callback(J);return true}})},navigate:function(L,K){if(!b.started){return false}if(!K||K===true){K={trigger:!!K}}var J=this.root+(L=this.getFragment(L||""));L=decodeURI(L.replace(v,""));if(this.fragment===L){return}this.fragment=L;if(L===""&&J!=="/"){J=J.slice(0,-1)}if(this._hasPushState){this.history[K.replace?"replaceState":"pushState"]({},document.title,J)}else{if(this._wantsHashChange){this._updateHash(this.location,L,K.replace);if(this.iframe&&(L!==this.getHash(this.iframe))){if(!K.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,L,K.replace)}}else{return this.location.assign(J)}}if(K.trigger){return this.loadUrl(L)}},_updateHash:function(J,L,M){if(M){var K=J.href.replace(/(javascript:|#).*$/,"");J.replace(K+"#"+L)}else{J.hash="#"+L}}});c.history=new b;var A=function(J,L){var K=this;var N;if(J&&G.has(J,"constructor")){N=J.constructor}else{N=function(){return K.apply(this,arguments)}}G.extend(N,K,L);var M=function(){this.constructor=N};M.prototype=K.prototype;N.prototype=new M;if(J){G.extend(N.prototype,J)}N.__super__=K.prototype;return N};m.extend=H.extend=F.extend=w.extend=b.extend=A;var x=function(){throw new Error('A "url" property or function must be specified')};var e=function(L,K){var J=K.error;K.error=function(M){if(J){J(L,M,K)}L.trigger("error",L,M,K)}};return c}));if(typeof Backbone!=="undefined"){var backboneTCVersion=Backbone.noConflict();define("tc-backbone",["underscore"],function(){return backboneTCVersion})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/wrm-amd.js' */
define("wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:skate-0.12.6', location = 'libs/skate/0.12.6/skate-0.12.6.js' */
(function e(g,c,j){function h(a,k){if(!c[a]){if(!g[a]){var d="function"==typeof require&&require;if(!k&&d)return d(a,!0);if(f)return f(a,!0);d=Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d;}d=c[a]={exports:{}};g[a][0].call(d.exports,function(c){var f=g[a][1][c];return h(f?f:c)},d,d.exports,e,g,c,j)}return c[a].exports}for(var f="function"==typeof require&&require,d=0;d<j.length;d++)h(j[d]);return h})({1:[function(b,g,c){Object.defineProperty(c,"__esModule",{value:!0});"use strict";
c.ATTR_IGNORE="data-skate-ignore";c.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"}},{}],2:[function(b,g){g.exports={get:function(c,b){if(c.__SKATE_DATA)return c.__SKATE_DATA[b]},set:function(c,b,h){c.__SKATE_DATA||(c.__SKATE_DATA={});c.__SKATE_DATA[b]=h;return c}}},{}],3:[function(b,g){function c(c){for(var f=c.length,b=0;b<f;b++){var i=c[b],o=i.addedNodes,i=i.removedNodes;o&&(o.length&&!p(o[0].parentNode))&&d(o);i&&i.length&&a(i)}}var j=function(c){return c&&c.__esModule?
c["default"]:c},h=j(b("./globals")),f=b("./lifecycle"),d=f.initElements,a=f.removeElements,k=j(b("./mutation-observer")),p=b("./utils").getClosestIgnoredElement;g.exports={register:function(a){a&&(k.fixIe(),this.unregister());h.observer||(a=new k(c),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&(h.observer.disconnect(),h.observer=void 0);return this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],4:[function(b,g){window.__skate||
(window.__skate={observer:void 0,registry:{}});g.exports=window.__skate},{}],5:[function(b,g,c){function j(o,c,a){if(k.get(o,c.id+":lifecycle:"+a))return!0;k.set(o,c.id+":lifecycle:"+a,!0);return!1}function h(c,a){if(!j(c,a,"created")){m(c,a.prototype,!0);a.template&&a.template(c);var b=function(a,b){return function(f){if(!b)return a(c,f,c);for(var d=f.target;d&&d!==document&&d!==c.parentNode;){if(i.call(d,b))return a(c,f,d);d=d.parentNode}}};"object"===typeof a.events&&l(a.events,function(a,d){var f,
i;i=d.split(" ");f=i.shift();i=i.join(" ");c.addEventListener(f,b(a,i),!!i&&("blur"===f||"focus"===f))});var f=function(i,f,d,b){var k;a.attributes&&a.attributes[f]&&"function"===typeof a.attributes[f][i]?k=a.attributes[f][i]:a.attributes&&"function"===typeof a.attributes[f]?k=a.attributes[f]:"function"===typeof a.attributes&&(k=a.attributes);k&&k(c,{type:i,name:f,newValue:d,oldValue:b})},d,k=c.attributes,h=[],g=k.length;(new p(function(a){a.forEach(function(a){var c,i=a.attributeName,d=k[i];d&&null===
a.oldValue?c="created":d&&null!==a.oldValue?c="updated":d||(c="removed");f(c,i,d?d.value||d.nodeValue:void 0,a.oldValue)})})).observe(c,{attributes:!0,attributeOldValue:!0});for(d=0;d<g;d++)h.push(k[d]);for(d=0;d<g;d++){var n=h[d];f("created",n.nodeName,n.value||n.nodeValue)}a.created&&a.created(c)}}function f(c){for(var i=c.length,d=0;d<i;d++){var b=c[d];if(!(1!==b.nodeType||b.attributes[a])){for(var k=n.getForElement(b),g=k.length,m=0;m<g;m++){var l=b,p=k[m];h(l,p);j(l,p,"attached")||(l.removeAttribute(p.unresolvedAttribute),
l.setAttribute(p.resolvedAttribute,""),p.attached&&p.attached(l))}b=b.childNodes;b.length&&f(b)}}}function d(a){for(var c=a.length,i=0;i<c;i++){var f=a[i];if(1===f.nodeType){d(f.childNodes);for(var b=n.getForElement(f),g=b.length,j=0;j<g;j++){var h=f,m=b[j];m.detached&&m.detached(h);k.set(h,m.id+":lifecycle:attached",!1)}}}}g=function(a){return a&&a.__esModule?a["default"]:a};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var a=b("./constants").ATTR_IGNORE,k=g(b("./data")),p=g(b("./mutation-observer")),
n=g(b("./registry")),b=b("./utils"),m=b.inherit,l=b.objEach,b=window.HTMLElement.prototype,i=b.matches||b.msMatchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector;c.triggerCreated=h;c.initElements=f;c.removeElements=d},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],6:[function(b,g){function c(a,c){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:a,
type:c||"childList"}}function j(a,c){var f=a.childNodes;if(f)for(var d=f.length,b=0;b<d;b++){var k=f[b];c(k);j(k,c)}}function h(a){if(n&&!m)return new n(a);this.callback=a;this.elements=[]}var f=b("./utils"),d=f.debounce,a=f.objEach,k=window.HTMLElement.prototype,p=window.HTMLElement.prototype.contains,n=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,l=-1<window.navigator.userAgent.indexOf("Trident");h.fixIe=function(){if(l&&!m){var a=Object.getOwnPropertyDescriptor(k,
"innerHTML");Object.defineProperty(k,"innerHTML",{get:function(){return a.get.call(this)},set:function(c){j(this,function(a){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,c)}});m=!0}};Object.defineProperty(h,"isFixingIe",{get:function(){return m}});h.prototype={observe:function(a,f){function b(a){h.push(a);n()}var k=this,j,g,h=[],l=[],n=d(function(){for(var b=h.length,d=0;d<b;d++){var n=h[d],r=
n.target;if(r){var n=n.type,q=r.parentNode;if(f.childList&&(f.subtree||q===a)){var s=m&&"DOMNodeRemoved"===n,t=j&&(1!==j.nodeType?!1:j.contains?j.contains(r):p.call(j,r));if(s||!t){if(!g||g.target!==q)l.push(g=c(q));"DOMNodeInserted"===n?(g.addedNodes||(g.addedNodes=[]),g.addedNodes.push(r)):(g.removedNodes||(g.removedNodes=[]),g.removedNodes.push(r));j=r}}}}k.callback(l);h=[];l=[];g=j=void 0}),t={},q=[],u=d(function(){var a=q.length;k.callback(q);q.splice(0,a)}),s={target:a,options:f,insertHandler:b,
removeHandler:b,attributeHandler:function(d){var b=d.target;if(f.attributes&&(f.subtree||b===a)){var k=d.attrName,g=d.prevValue,d=d.newValue,b=c(b,"attributes");b.attributeName=k;f.attributeOldValue&&(b.oldValue=t[k]||g||null);q.push(b);f.attributeOldValue&&(t[k]=d);u()}}};this.elements.push(s);f.childList&&(a.addEventListener("DOMNodeInserted",s.insertHandler),a.addEventListener("DOMNodeRemoved",s.removeHandler));f.attributes&&a.addEventListener("DOMAttrModified",s.attributeHandler);return this},
disconnect:function(){a(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler);a.target.removeEventListener("DOMNodeRemoved",a.removeHandler);a.target.removeEventListener("DOMAttrModified",a.attributeHandler)});this.elements=[];return this}};g.exports=h},{"./utils":9}],7:[function(b,g){function c(a,c){return d(j.registry,a)&&-1<j.registry[a].type.indexOf(c)}var j,h=b("./globals");j=h&&h.__esModule?h["default"]:h;var f=b("./constants.js").types,d=b("./utils").hasOwn;
g.exports={clear:function(){j.registry={};return this},getForElement:function(a){var d=a.attributes,b=d.length,g=[],h=d.is,l=h&&(h.value||h.nodeValue),h=a.tagName.toLowerCase(),i=l||h,o;c(i,f.TAG)&&(i=j.registry[i],o=i["extends"],l?h===o&&g.push(i):o||g.push(i));for(l=0;l<b;l++)i=d[l].nodeName,c(i,f.ATTR)&&(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));(d=a.classList)?a=d:(a=a.attributes,a=a["class"]&&a["class"].nodeValue.split(/\s+/)||[]);d=a.length;for(b=0;b<d;b++)i=a[b],c(i,f.CLASS)&&
(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));return g},has:function(a){return d(j.registry,a)},set:function(a,c){if(this.has(a))throw Error('A definition of type "'+c.type+'" with the ID of "'+a+'" already exists.');j.registry[a]=c;return this},remove:function(a){this.has(a)&&delete j.registry[a];return this}}},{"./constants.js":1,"./globals":4,"./utils":9}],8:[function(b,g){function c(a,b){b=n(b||{},c.defaults);b.id=a;if(k.has(b.id))throw Error('A definition of type "'+b.type+'" with the ID of "'+
a+'" already exists.');k.set(b.id,b);i();h.register(b.remove);if(-1<b.type.indexOf(m.TAG)){var f=b,g=function(){var a;a=f["extends"];var b=f.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);f.prototype=g.prototype;d(a,f);return a};g.prototype=f.prototype;return g}}var j=function(a){return a&&a.__esModule?a["default"]:a},h=j(b("./document-observer")),f=b("./lifecycle"),d=f.triggerCreated,a=f.initElements,k=j(b("./registry")),p=b("./utils"),f=p.debounce,n=p.inherit,
j=j(b("./version")),m=b("./constants").types,l=!!document.attachEvent,i=f(function(){var b=function(){a(document.getElementsByTagName("html"))},c;c=l?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;c?b():l?window.addEventListener("load",b):document.addEventListener("DOMContentLoaded",b)});c.init=function(b){if(b)return"string"===typeof b&&(b=document.querySelectorAll(b)),a("undefined"===typeof b.length?[b]:b),b};c.types=m;c.version=j;c.defaults=
{attributes:void 0,events:void 0,"extends":"",id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:m.ANY,unresolvedAttribute:"unresolved"};var o=window.skate;c.noConflict=function(){window.skate=o;return this};window.skate=c;g.exports=c},{"./constants":1,"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],9:[function(b,g,c){function j(b,c){return Object.prototype.hasOwnProperty.call(b,c)}c.hasOwn=j;c.debounce=function(b){var c=!1;return function(){c||
(c=!0,setTimeout(function(){c=!1;b()},1))}};c.getClosestIgnoredElement=function(b){for(;b&&b!==document&&!(b instanceof DocumentFragment);){if(b.hasAttribute(h))return b;b=b.parentNode}};c.inherit=function(b,c,a){for(var g=Object.getOwnPropertyNames(c),h=g.length,j=0;j<h;j++){var m=g[j];if(a||void 0===b[m]){var l=Object.getOwnPropertyDescriptor(c,m);l.get||l.set||!l.writable||!l.enumerable||!l.configurable?Object.defineProperty(b,m,l):b[m]=c[m]}}return b};c.objEach=function(b,c){for(var a in b)j(b,
a)&&c(b[a],a)};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var h=b("./constants").ATTR_IGNORE},{"./constants":1}],10:[function(b,g){g.exports="0.12.6"},{}]},{},[8]);(function(b){var g=b.skate.noConflict();define("atlassian/libs/skate-0.12.6",[],function(){return g})})(window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:skate', location = '/includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-common', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/init-resources.js' */
define("tc/init-resources",["wrm","jquery"],function(a,c){var b=function(d){return d.removeClass("spinner").removeClass("aui-icon").removeClass("aui-icon-wait")};return{requireResources:function(){a.require(["wrc!com.atlassian.confluence.extra.team-calendars.resources-batch"],function(){b(c("div.plugin-calendar"));require(["tc/calendar-plugin"],function(d){d.onTeamCalendarsLoaded()})}).fail(function(){b(c("div.plugin-calendar")).text("Failed to load calendar resources")})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/initialiser.js' */
require(["ajs","tc/init-resources"],function(a,b){var d=function(e){e("calendar-container",{type:e.types.CLASS,attached:function(){b.requireResources()},create:function(){b.requireResources()},ready:function(){b.requireResources()}})};var c=a.Meta.get("version-number").split(".");if(c[0]==="5"&&c[1]<9){d(window.skate)}else{require(["skate"],function(e){d(e)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
jQuery(function(a){a(".macro-blank-experience .create-post").bind("click",function(){var b=AJS.Meta.get("base-url")+"/pages/createblogpost.action?spaceKey="+AJS.Meta.get("space-key");window.location=b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function(b){function a(e,d){var c;if(d>=20){AJS.log("unable to auto size flash - took too long to load");return}c=b([]);e.each(function(){var g=b(this);var i;var f;if(this.GetVariable){if(!g.attr("height")){i=this.GetVariable("height");if(i){g.height(i)}else{c=c.add(g);return}}if(!g.attr("width")){f=this.GetVariable("width");if(f){g.width(f)}else{c=c.add(g);return}}}});if(c.length){setTimeout(function(){a(c,d+1)},100)}}a(b('embed[type="application/x-shockwave-flash"]'),0);b(window).bind("render-content-loaded",function(d,c){a(b('embed[type="application/x-shockwave-flash"]',c),0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: "\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f", content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"\u65e0\u6cd5\u68c0\u7d22\u8fdc\u7a0b\u9879\u76ee\u7684\u5feb\u6377\u65b9\u5f0f",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(b,c){var a="wr!confluence.extra.jira:jira-issues-view-mode-async-resource";c(document).ready(function(){var d=c(".wiki-content [data-jira-key][data-client-id]");if(d.length==0){return false}WRM.require(a,function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(f,e){f.init(d).done(function(){e.fixBreakIconInOldConf()})})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var a={};a.namespace=function(e,f,d){var g=e.split(".");d=d||window;for(var c=0,h=g.length-1;c<h;c++){var b=d[g[c]];d=(b!=null)?b:d[g[c]]={}}if(d[g[c]]){if(window.console&&window.console.warn){window.console.warn('Value of "'+e+'" was overridden')}}d[g[c]]=f||d[g[c]]||{};return d[g[c]]};a.safeRequire=function(c,b){if(define&&define.amd===undefined){var d=require(c);if(b){b(d)}}};a.exportModuleAsGlobal=function(c,d,b){a.safeRequire(c,function(e){a.namespace(d,e);if(b){b(e)}})};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-amd-global.js' */
define("applinks/lib/lodash",function(){if(!window._){throw"lodash not found"}return window._});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
define("applinks/lib/version",["applinks/lib/lodash"],function(c){function d(f,g){if(c.isUndefined(f)){return 0}else{if(typeof f!=="number"||isNaN(f)){throw new Error(g+": expected a number, was: <"+f+">")}else{return Math.floor(f)}}}function a(f,g){if(!f||!(f instanceof e)){throw new Error(g+": expected a Version object, was: <"+f+">")}return f}function b(f,g){return f>g?1:f==g?0:-1}function e(g,h,f){this.major=d(g,"major");this.minor=d(h,"minor");this.bugfix=d(f,"bugfix")}e.parse=function(g,h){h=h||"versionString";if(!g){throw new Error(h+": expected a non-empty string")}var f=g.split(".");if(f.length!==3){throw new Error(h+": expected <major>.<minor>.<bugfix> string, was: <"+g+">")}return new e(parseInt(f[0]),parseInt(f[1]),parseInt(f[2]))};e.comparator=function(g,f){return a(g,"versionOne").compareTo(a(f,"versionTwo"))};e.prototype.compareTo=function(h){a(h,"that");var f=b(this.major,h.major);if(f!=0){return f}var g=b(this.minor,h.minor);if(g!=0){return g}return b(this.bugfix,h.bugfix)};e.prototype.greaterThan=function(f){return this.compareTo(f)>0};e.prototype.greaterThanOrEqual=function(f){return this.compareTo(f)>=0};e.prototype.lessThan=function(f){return this.compareTo(f)<0};e.prototype.lessThanOrEqual=function(f){return this.compareTo(f)<=0};e.prototype.equals=function(f){return this.compareTo(f)==0};e.prototype.toMinor=function(){return new e(this.major,this.minor)};e.prototype.toMajor=function(){return new e(this.major)};e.prototype.toString=function(){return this.major+"."+this.minor+"."+this.bugfix};return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define("applinks/lib/aui-version-details",["applinks/lib/version"],function(g){var d=new g(5,8,15);var f=new g(5,9,13);var e=new g(5,8);var c=new g(5,9);function a(h){if(h.lessThan(d)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+d+" or "+f+" for Applinks to work")}if(h.greaterThanOrEqual(c)&&h.lessThan(f)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+f+" for Applinks to work")}}function b(h){var i=g.parse(h.version,"AUI version");a(i);h.versionDetails=i;h.versionDetails.is58=i.toMinor().equals(e);h.versionDetails.is59=i.toMinor().equals(c);return h}return{addVersionDetails:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define("applinks/lib/console",function(){return window.console});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define("applinks/lib/jquery",function(){return window.jQuery});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define("applinks/lib/aui",["applinks/lib/window","applinks/lib/aui-version-details"],function(b,c){var a=b.AJS;if(!a){throw new Error("window.AJS not defined, cannot load AUI")}return c.addVersionDetails(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
define("applinks/lib/wrm",function(){return window.WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define("applinks/lib/skate",function(){return window.skate});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
define("applinks/lib/window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define("applinks/common/docs",["applinks/lib/jquery","applinks/lib/aui","applinks/common/help-paths"],function(c,b,a){return{createDocLink:function(d,f,e){if(!e){e=""}else{e=" "+e}return c("<a/>",{"class":"ual-help-link help-link"+e,href:this.getDocHref(d,f),target:"_blank","data-help-link-key":d,text:"\u5e2e\u52a9",title:"\u5e2e\u52a9"})},getDocHref:function(e,f){var d=a.getFullPath(e);if(f){d+="#"+a.getPath(f)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define("applinks/common/help-paths",["applinks/lib/console","applinks/lib/wrm","applinks/lib/lodash","applinks/common/modules","applinks/common/preconditions"],function(b,a,g,e,d){var f=g.memoize(function(){var j=a.data.claim(e.dataFqn(e.COMMON_EXPORTED,"applinks-help-paths"));if(!j.entries){b.warn("Help paths not found, all help links are likely to be broken.")}return j.entries||{}});var i=function(j,m){d.nonEmptyString(j,"key");var l=f()[j]||j;if(m){d.nonEmptyString(m,"sectionKey");var k=l.replace(/\+/g,"");l+="#"+k+"-"+m}return l};function c(j,k){return j.indexOf(k,j.length-k.length)!==-1}function h(j,k){return c(j,k)?j:j+k}return{getPath:i,getFullPath:function(j,l){var k=this.baseUrl();return h(k,"/")+this.getPath(j,l)},baseUrl:g.partial(i,"applinks.docs.root")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define("applinks/common/events",["applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/preconditions"],function(e,b,d,f){var c="applinks.event.";function a(g){return c+f.nonEmptyString(g,"eventId")}return{PREREADY:a("preready"),READY:a("ready"),APPLINKS_LOADED:a("loaded"),APPLINKS_UPDATED:a("updated"),NEW_APPLINK_CREATED:a("created"),ORPHANED_UPGRADE:a("orphaned.upgrade"),V3_ONBOARDING_FINISHED:a("v3-onboarding-finished"),Legacy:{MESSAGE_BOX_DISPLAYED:a("message-box-displayed")},applinksEvent:a,on:function(h,i,g){var j=g?b.bind(i,g):i;e(d.document).on(h,j)},off:function(g,h){e(d.document).off(g,h)},trigger:function(g,h){e(d.document).trigger(g,h)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define("applinks/common/i18n",["applinks/lib/lodash","applinks/lib/jquery","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions","applinks/common/products"],function(e,g,c,f,h,b){var a=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"entity-types"));return h.hasValue(i,"entity-types","Entity Types data not found")});var d=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"authentication-types"));return h.hasValue(i,"authentication-types","Authentication Types data not found")});return{getApplicationTypeName:function(i){return b.getTypeName(i)},getEntityTypeName:function(i){return a().singular[i]||i},getPluralizedEntityTypeName:function(i){return a().plural[i]||i},getAuthenticationTypeName:function(i){return d()[i]||i}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
define("applinks/common/modules",function(){return{PLUGIN_KEY:"com.atlassian.applinks.applinks-plugin",COMMON_EXPORTED:"applinks-common-exported",COMMON:"applinks-common",fqn:function(a){return this.PLUGIN_KEY+":"+a},dataFqn:function(a,b){return this.fqn(a)+"."+b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define("applinks/common/preconditions",["applinks/lib/lodash"],function(c){function f(i,j,h){return d(c.isString(i)&&!c.isEmpty(i),h,b(j,": expected a non-empty string, was: <"+i+">"),i)}function g(i,j,h){return d(c.isFunction(i),h,b(j,": expected a function, was: "+i),i)}function a(i,j,h){return d(c.isArray(i),h,b(j,": expected an array, was: "+i),i)}function e(i,j,h){return d(i,h,b(j,": expected a value"),i)}function d(l,i,h,k){var j=i?i:h;if(!l){throw new Error(j)}return k||l}function b(i,h){return(i||"[unspecified]")+h}return{checkArgument:c.partial(d,c,c,"",c),nonEmptyString:f,isArray:a,isFunction:g,hasValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define("applinks/common/products",["applinks/lib/lodash","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions"],function(c,b,d,f){var a=c.memoize(function(){var g=b.data.claim(d.dataFqn(d.COMMON_EXPORTED,"applinks-types"));return f.hasValue(g,"types","Application Types data not found")});function e(g){return a()[g]||g}return{BAMBOO:"bamboo",BITBUCKET:"stash",CONFLUENCE:"confluence",FECRU:"fecru",JIRA:"jira",REFAPP:"refapp",STASH:"stash",getTypeName:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
(function(a,c,b){AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"},I18n:a,Docs:c});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,b);if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(d){AJS.toInit(d)}}AppLinks.initialisationBinder(function(){var d=AJS.$;AppLinks=d.extend(window.AppLinks||{},{failure:function(g){if(g.status==401){window.location.reload()}else{var e=AppLinks.parseError(g);var f=d(".page-error");if(f.length>0){f.html(e).fadeIn("slow")}else{alert("REST request failed: "+e)}}},jsonRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:i,error:e})},xmlRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:i,error:e})},parseError:function(h){var f;try{f=JSON.parse(h.responseText)}catch(g){if(h.statusText){return f=h.statusText}else{return h}}if(f.message){if(d.isArray(f.message)){return f.message.join(" ")}return f.message}else{return h.statusText}},put:function(f,g,h,e){return AppLinks.jsonRequest(f,"PUT",g,h,e)},post:function(f,g,h,e){return AppLinks.jsonRequest(f,"POST",g,h,e)},update:function(f,g,e){AppLinks.put(AppLinks.self_link(f),f,g,e)},get:function(f,g,e){return AppLinks.jsonRequest(f,"GET",null,g,e)},getXml:function(f,g,e){return AppLinks.xmlRequest(f,"GET",null,g,e)},self_link:function(g){for(var e=0,h=g.link.length;e<h;e++){var f=g.link[e];if(f.rel=="self"){return f.href}}throw"No self-link found"},del:function(h,g,f){var e;if(typeof(h)=="string"){e=h}else{e=AppLinks.self_link(h)}return AppLinks.jsonRequest(e,"DELETE",null,g,f)},SPI:d.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",OAUTH_REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks-oauth/",OAUTH_BASE_URL:AJS.contextPath()+"/rest/applinks-oauth/1.0",setApiVersion:function(e){AppLinks.SPI.API_VERSION=e;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(e){AppLinks.SPI.BASE_URL=e},setOAuthBaseUrl:function(e){AppLinks.SPI.OAUTH_BASE_URL=e},getRemoteRestBaseUrl:function(e){return e+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(e){return e+"/plugins/servlet"},getAllLinks:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(e,g,f)},getAllLinksWithAuthInfo:function(g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(e,g,f)},getApplicationLinkState:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinkstates/id/"+h;return AppLinks.get(e,g,f)},getLinksOfType:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+g;return AppLinks.get(e,h,f)},tryToFetchManifest:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(g);return AppLinks.get(e,h,f)},getManifestFor:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/manifest/"+h+".json";return AppLinks.get(e,g,f)},getLocalManifest:function(g,f){var e=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(e,g,f)},getRemoteManifest:function(g,h,f){var e=AppLinks.SPI.getRemoteRestBaseUrl(g)+"/manifest.json";return AppLinks.get(e,h,f)},getRemoteOAuthConsumerInfo:function(g,h,f){var e=AppLinks.SPI.getRemotePluginServletBaseUrl(g)+"/oauth/consumer-info";return AppLinks.getXml(e,h,f)},getApplinkStatus:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/status/"+h;return AppLinks.get(e,g,f)},createStaticUrlAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+h;return AppLinks.post(e,null,g,f)},createLink:function(l,j,n,f,k,m,h,o,g){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var i={applicationLink:l,username:j,password:n,createTwoWayLink:f,customRpcURL:k,rpcUrl:m,configFormValues:h};return AppLinks.post(e,i,o,g)},createLinkWithOrphanedTrust:function(l,j,o,f,k,m,h,n,p,g){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var i={applicationLink:l,username:j,password:o,createTwoWayLink:f,customRpcURL:k,rpcUrl:m,configFormValues:h,orphanedTrust:n};return AppLinks.post(e,i,p,g)},verifyTwoWayLinkDetails:function(e,k,l,h,j,g){var f=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var i={username:l,password:h,remoteUrl:e,rpcUrl:k};return AppLinks.post(f,i,j,g)},getApplicationLinkInfo:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+g;return AppLinks.get(e,h,f)},deleteLink:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/applicationlink/"+i.id;if(e){f+="?reciprocate=true"}return AppLinks.del(f,h,g)},makePrimary:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+g.id;return AppLinks.post(e,null,f)},relocate:function(j,h,e,i,g){var f=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+j.id+"?newUrl="+encodeURIComponent(h)+"&nowarning="+(e?"true":"false");return AppLinks.post(f,null,i,g)},legacyUpgrade:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+h.id;return AppLinks.post(e,null,g,f)},ualUpgrade:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+i.id;return AppLinks.post(f,e,h,g)},getEntityTypesForApplicationType:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/type/entity/"+h;return AppLinks.get(e,g,f)},getLocalEntitiesWithLinksToApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+e+".json";return AppLinks.get(f,h,g)},getEntityLinksForApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/"+e+".json";AppLinks.get(f,h,g)},getEntityLinksForApplicationUsingAnonymousAccess:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+e+".json";return AppLinks.get(f,h,g)},createNonUalEntityLink:function(n,i,f,h,l,g,m,k){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+n+"/"+i+"?reciprocate=false";var j={applicationId:f,typeId:h,key:l,name:g,isPrimary:false};return AppLinks.put(e,j,m,k)},createEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?reciprocate=";g+=(e?"true":"false");return AppLinks.put(g,f,k,h)},getConfiguredEntityLinks:function(h,g,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+h+"/"+g+".json";return AppLinks.get(e,i,f)},deleteEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?typeId="+f.typeId+"&key="+f.key+"&applicationId="+f.applicationId+"&reciprocate="+e;return AppLinks.del(g,k,h)},makePrimaryEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+i+"/"+h+"?typeId="+e.typeId+"&key="+e.key+"&applicationId="+e.applicationId;return AppLinks.post(f,null,j,g)},canDeleteAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+h;return AppLinks.get(e,g,f)},canDeleteEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+e.applicationId+"/"+i+"/"+h+"/"+e.typeId+"/"+e.key;return AppLinks.get(f,j,g)},canCreateReciprocateEntityLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+h;return AppLinks.get(e,g,f)},processPermissionCode:function(f){var e={noPermission:function(){},missing:function(){},credentialsRequired:function(g){},authenticationFailed:function(g){},noAuthentication:function(g){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(g){},updateView:function(i,h,g){}};if(!f){f={}}f=d.extend(e,f);return function(h){var g=h.code;if(g=="NO_PERMISSION"){f.noPermission()}else{if(g=="MISSING"){f.missing()}else{if(g=="CREDENTIALS_REQUIRED"){f.credentialsRequired(h.url)}else{if(g=="AUTHENTICATION_FAILED"){f.authenticationFailed(h.url)}else{if(g=="NO_AUTHENTICATION"){f.noAuthentication(h.url)}else{if(g=="NO_AUTHENTICATION_CONFIGURED"){f.noAuthenticationConfigured()}else{if(g=="NO_CONNECTION"){f.noConnection()}else{if(g=="ALLOWED"){f.allowed()}else{f.unrecognisedCode(h.code)}}}}}}}}}},addAuthenticationTrigger:function(g,e,f){if(!f){f={}}if(typeof f.onSuccess=="undefined"){f.onSuccess=function(){location.reload()}}if(typeof f.onFailure=="undefined"){f.onFailure=function(){return true}}d(g).unbind("click");d(g).click(function(){if(f.before){f.before()}AppLinks.authenticateRemoteCredentials(e,f.onSuccess,f.onFailure)})},deleteOrphanedTrust:function(i,g,h,f){var e=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+g+"/"+i;return AppLinks.del(e,h,f)},getOrphanedTrust:function(g,f){var e=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(e,g,f)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+h;return AppLinks.get(e,g,f)},createApplicationLink:function(h,f,k,l,e,m,i){var g=AppLinks.SPI.BASE_URL+"/applicationlink";var j={id:h,name:f,rpcUrl:k,displayUrl:l,typeId:e};return AppLinks.put(g,j,m,i)},createConsumer:function(g,p,f,o,k,n,i,r,j,m,q,h){var e=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+g+"/authentication/consumer";var l={key:p,name:f,description:o,sharedSecret:k,publicKey:n,outgoing:m,twoLOAllowed:i,executingTwoLOUser:r,twoLOImpersonationAllowed:j};return AppLinks.put(e,l,q,h)},createConsumerAutoConfigure:function(l,k,h,e,j,g){var f=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+l+"/authentication/consumer?autoConfigure=true";var i={twoLOAllowed:k,executingTwoLOUser:h,twoLOImpersonationAllowed:e};return AppLinks.put(f,i,j,g)},registerProvider:function(k,j,g,i,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+k+"/authentication/provider";var h={config:g,provider:j};return AppLinks.put(e,h,i,f)},enableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.put(e,{},h,f)},disableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.del(e,h,f)}},(window.AppLinks&&window.AppLinks.SPI)||{})});AppLinks.UI={showInfoBox:function(e){d(".aui-message.success").remove();AppLinks.UI.createMessage("success",e,"page-info")},hideInfoBox:function(){d(".aui-message.success").remove()},showErrorBox:function(e){AppLinks.UI.createMessage("error",e,"page-error")},hideErrorBox:function(){d(".aui-message.error").remove()},showWarningBox:function(f){if(d.isArray(f)&&f.length>0){var e=d("<ul></ul>");d(f).each(function(h){e.append(d("<li/>",{text:f[h]}))});var g=d('<div class="page-warning"></div>').append(e);AppLinks.UI.createMessage("warning",g.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",f,"page-warning")}},hideWarningBox:function(){d(".aui-message.warning").remove()},shortenString:function(f,e){if(f.length>e){f=f.substring(0,e)+"..."}return f},createMessage:function(f,g,e){var h=d('<div class="'+e+'">');h.html(g);AJS.messages[f](".applinks-message-bar",{title:"",body:h.wrap("<div></div>").parent().html(),closeable:true});d(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED)},displayValidationErrorMessages:function(e,g,f){if(d.isArray(f)){d(f).each(function(k,j){var l=d('<div class="error applinks-error">');l.text(j);d(g).find("."+e).append(l)})}else{if(typeof f!="undefined"){var h=d('<div class="error applinks-error">');h.text(f.toString());d(g).find("."+e).append(h)}}},displayValidationError:function(e,f,g){return function(l){if(l.status==401){window.location.reload();return}d(".applinks-error").remove();d(".loading").remove();var j=l.responseText;var k=d.parseJSON(j);var i=k.message;if(typeof k.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(e,f,i)}else{var h=k.fields;d(h).each(function(m){var n=d('<div class="error applinks-error" id="'+h[m]+'-error">');n.text(i[m]);if(d(f).find("."+h[m]).length>0){n.insertAfter(d(f).find("."+h[m]))}else{n.insertAfter(d(f).find("."+e).append(n))}})}d(f).find("."+e).addClass("fully-populated-errors");if(g){g()}}},addProtocolToURL:function(e){var h=d.trim(e);var g=h.toLowerCase();var f=false;if(g.length>=7){if(g.substring(0,7).indexOf("http")!=-1){f=true}}if(!f){h="http://"+h}return h},prettyJoin:function(f,i,h){if(!h){h="\u548c"}var e=f.length;var g="";d.each(f,function(j,k){if(j==(e-1)&&e>1){g+=" "+h+"  "+i(k)}else{g+=i(k);if(j+2<e){g+=", "}}});return g},showLoadingIcon:function(e){d('<span class="loading">&nbsp;</span>').insertAfter(e)},hideLoadingIcon:function(e){d(e).next(".loading").remove()},findUrl:function(h){var g=undefined;var i=h.toLowerCase();var f=i.indexOf("http:");if(f==-1){f=i.indexOf("https:")}if(f>-1){var e=i.indexOf(" ",f);if(e==-1){e=i.length}g=h.substring(f,e)}return g},findApplicationType:function(e){e=e.toLowerCase();if(e.indexOf("jira")!=-1){return"jira"}else{if(e.indexOf("fisheye")!=-1){return"fecru"}else{if(e.indexOf("confluence")!=-1){return"confluence"}else{if(e.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(e){return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(e){var f={"<":"&lt;",'"':"&quot;","&":"&amp;"};return e.replace(/[<"&]/g,function(g){return f[g]})},refreshOrphanedTrust:function(){var e=function(f){d("tr.orphaned-trust-row").each(function(){var l=d(this);var m=l.attr("data-id");var j=l.attr("data-type");var h=false;for(var g=0;g<f.orphanedTrust.length;g++){var k=f.orphanedTrust[g];if(m==k.id&&j==k.type){h=true;break}}if(!h){l.remove();if(f.orphanedTrust.length==0){d(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(e)},removeCssClass:function(e,f){d(e).removeClass(function(h,j){var i=j.split(" ");var g="";d.each(i,function(k,l){if(l.indexOf(f)!=-1){g=l}});return g})}};(function(){var e=d({});d.each(["bind","unbind","trigger"],function(f,g){AppLinks.UI[g]=function(){return e[g].apply(e,arguments)}})})();d(document).trigger(AppLinks.Event.PREREADY);d(document).trigger(AppLinks.Event.READY)})})(require("applinks/common/i18n"),require("applinks/common/docs"),require("applinks/common/events"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
(function(c,a,b){AppLinks.authenticateRemoteCredentials=function(d,f,e){c(".applinks-error").remove();new b(d).onSuccess(f).onFailure(e).open()}})(require("applinks/lib/jquery"),require("applinks/common/events"),require("applinks/feature/oauth-callback"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"\u8ba4\u8bc1"+"</a> "+"\u67e5\u770b\u95ee\u9898\u8be6\u60c5"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"\u8ba4\u8bc1"+"</a> "+"\u68c0\u7d22\u60a8\u7684\u95ee\u9898"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"JIRA\u670d\u52a1\u5668\u4e0d\u80fd\u5904\u7406\u6b64\u67e5\u8be2\uff0c\u8fd9\u53ef\u80fd\u662f\u6b64\u5b8f\u7684\u8bed\u6cd5\u6709\u95ee\u9898\uff0c\u6216\u8005\u662f\u7531\u4e8e\u60a8\u6ca1\u6709\u67e5\u770b\u8fd9\u4e9b\u95ee\u9898\u7684\u6743\u9650\u3002")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f==1){e.text(AJS.format("{0} \u95ee\u9898",f))}else{e.text(AJS.format("{0} \u95ee\u9898",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("\u8ba4\u8bc1").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"\u68c0\u7d22\u60a8\u7684\u95ee\u9898"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute("\u8fc7\u6ee4\u5668") + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<div class="page-icon"><a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + ' class="icon icon-' + soy.$$escapeHtmlAttribute(opt_data.type) + '"></a></div><div class="page-title"><a class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</a></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="\u54e5\u4eec\u5bf9\u4e0d\u8d77\uff0c\u8c8c\u4f3c\u4f60\u8fd8\u6ca1\u6709\u8bbf\u95ee\u4efb\u4f55\u9875\u9762\u3002"}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="\u6211\u4eec\u5728\u4f60\u7684\u5386\u53f2\u4e2d\u627e\u4e0d\u5230\u5339\u914d\u7684\u9875\u9762\u3002"+" "+AJS.format("\u003ca href=\u0022{0}\u0022\u003e\u70b9\u51fb\u6b64\u5904\u003c/a\u003e \u53ef\u4ee5\u641c\u7d22\u8fd9\u4e2a\u8bcd\u3002",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"\u4eca\u65e5"});this.$yesterday=new RY.PageGroupView({title:"\u6628\u5929"});this.$older=new RY.PageGroupView({title:"\u4ee5\u524d\u7684"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"\u66f4\u591a\u8fd1\u671f\u6d4f\u89c8\u7684\u9875\u9762..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var h=a(this);var e=h.find("span");var g=e.data("properties");var f=g?g.spaceName:null;if(f&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(f));h.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){if(!AJS.Meta.get("remote-user")){return}var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("\u6700\u8fd1\u67e5\u770b\u8fc7\u7684\u9875\u9762");c.addPanel("SinglePanel",f);c.addLink("\u5173\u95ed",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("\u63d0\u793a\uff1a\u5728\u4efb\u4f55\u5730\u65b9\u8f93\u5165\u0022g\u0022 \u7136\u540e\u8f93\u5165 \u0022r\u0022\u6765\u5feb\u901f\u6253\u5f00\u6b64\u83dc\u5355");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: "\u7a7a\u95f4", showIcon: true, text: "\u7a7a\u95f4"}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var g=b(".acs-side-bar");var f=g.find("a:not(.external_link a, #acs-configure-link)");c(f,"sidebar");var e=g.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var h=g.find(".ia-secondary-container a:not(.more-children-link)");if(g.find(".ia-secondary-container").data("tree-type")=="pages"){c(h,"contextnavchildmode")}else{if(g.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(h,"contextnavpagetreemode")}else{c(h,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesEmail})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesEmail})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LicenseBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$filterNoAutoescape(opt_data.contentHTML) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.wrapper.soyTemplateName = 'Confluence.Templates.LicenseBanner.wrapper';
}


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy8 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy12 = '</a>';
  var mailTag__soy14 = '<a id="license-banner-sales-link" href="mailto:' + soy.$$escapeHtml(opt_data.sales) + '">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format("\u60a8\u7684Confluence\u6388\u6743\u8bb8\u53ef\u4f1a\u5728\u4eca\u5929\u8fc7\u671f\uff0c\u5c4a\u65f6Confluence\u4e2d\u7684\u6570\u636e\u5c06\u53ea\u80fd\u67e5\u770b\u3002\u8bf7\u5728\u7ebf{1}\u7eed\u8d39{0}\u6216\u8054\u7cfb{2}\u9500\u552e\u4eba\u5458{3}\u3002",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format("\u60a8\u7684Confluence\u6388\u6743\u8bb8\u53ef\u4f1a\u5728\u4eca\u5929\u8fc7\u671f\uff0c\u5c4a\u65f6Confluence\u4e2d\u7684\u6570\u636e\u5c06\u53ea\u80fd\u67e5\u770b\u3002\u8bf7\u5728\u7ebf{1}\u7eed\u8d39{0}\u6216\u8054\u7cfb{2}\u9500\u552e\u4eba\u5458{3}\u3002",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : soy.$$filterNoAutoescape(AJS.format("Your license subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Confluence will become read-only after the expiry. Please renew {1}online{2} or contact {3}sales{4}.",opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12))) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.expiryBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.expiryBanner';
}


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy39 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy43 = '</a>';
  var later__soy45 = '<a href="#" id="license-banner-later">';
  var never__soy47 = '<a href="#" id="license-banner-never">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format("\u60a8\u5df2\u7ecf\u65e0\u6cd5\u83b7\u53d6\u6280\u672f\u652f\u6301\u548c\u66f4\u65b0\u3002{0}\u5728\u7ebf\u7eed\u8d39{1}\uff0c{2}\u7a0d\u540e\u63d0\u9192\u6211{3}\u6216{4}\u6c38\u8fdc\u4e0d\u8981\u518d\u63d0\u9192\u6211{5}\u3002",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format("\u60a8\u5c06\u518d\u4eca\u5929\u5931\u53bb\u6280\u672f\u652f\u6301\u548c\u66f4\u65b0\u670d\u52a1. {0}\u5728\u7ebf\u7eed\u8d39{1}, {2}\u7a0d\u540e\u63d0\u9192\u6211{3}\u6216{4}\u6c38\u8fdc\u4e0d\u8981\u63d0\u9192\u6211{5}\u3002",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : soy.$$filterNoAutoescape(AJS.format("\u60a8\u5373\u5c06\u5728{0,choice,1#{0}\u5929|1\x3c{0}\u5929}\u540e\u65e0\u6cd5\u83b7\u53d6\u6280\u672f\u652f\u6301\u548c\u66f4\u65b0\u3002{1}\u5728\u7ebf\u7eed\u8d39{2}\uff0c{3}\u7a0d\u540e\u63d0\u9192\u6211{4}\u6216{5}\u6c38\u8fdc\u4e0d\u8981\u518d\u63d0\u9192\u6211{6}\u3002",opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43))) + '</div>', id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.maintenanceBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.maintenanceBanner';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    output += '<div class="aui-nav-heading sidebar-section-header">' + soy.$$escapeHtml(opt_data.title) + '</div><ul class="aui-nav nav-links">';
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      output += navlinks.templates.appswitcher.applicationsItem(linkData8);
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.linkSection.soyTemplateName = 'navlinks.templates.appswitcher.linkSection';
}


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsItem';
}


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.shortcutsItem.soyTemplateName = 'navlinks.templates.appswitcher.shortcutsItem';
}


navlinks.templates.appswitcher.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape("\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\x3cspan class\x3d\x22app-switcher-retry\x22\x3e\u518d\u8bd5\u4e00\u6b21\x3c/span\x3e.") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.error.soyTemplateName = 'navlinks.templates.appswitcher.error';
}


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_ignored) {
  return '<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">' + soy.$$escapeHtml("\u5e94\u7528\u94fe\u63a5") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("\u6b63\u5728\u8fd0\u884c\x26hellip;") + '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">' + soy.$$escapeHtml("\u5feb\u6377\u65b9\u5f0f") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("\u6b63\u5728\u8fd0\u884c\x26hellip;") + '</div></div></nav></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebarContents.soyTemplateName = 'navlinks.templates.appswitcher.sidebarContents';
}


navlinks.templates.appswitcher.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml("\u5df2\u94fe\u63a5\u7a0b\u5e8f") + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.trigger.soyTemplateName = 'navlinks.templates.appswitcher.trigger';
}


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-title">' + aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}) + '<div class="sidebar-project-name">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.projectHeaderSection.soyTemplateName = 'navlinks.templates.appswitcher.projectHeaderSection';
}


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_ignored) {
  var output = '';
  var dropdownList__soy74 = '' + navlinks.templates.appswitcher.dropdownList({list: opt_data.links});
  output += aui.dropdown2.dropdown2({menu: {id: opt_data.id, content: dropdownList__soy74, extraClasses: 'aui-style-default sidebar-customize-section'}, trigger: {showIcon: false, content: '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', container: '#app-switcher'}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.cogDropdown.soyTemplateName = 'navlinks.templates.appswitcher.cogDropdown';
}


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_ignored) {
  var output = '<ul class="sidebar-admin-links">';
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output += '<li class="nav-link"><a href="' + soy.$$escapeHtml(linkData82.href) + '" title="' + soy.$$escapeHtml(linkData82.title) + '"><span class="nav-link-label">' + soy.$$escapeHtml(linkData82.label) + '</span></a></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.dropdownList.soyTemplateName = 'navlinks.templates.appswitcher.dropdownList';
}


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = '' + navlinks.templates.appswitcher.sidebarContents(null);
      var triggerContent__soy99 = '' + navlinks.templates.appswitcher.trigger(null);
      output += navlinks.templates.appswitcher.sidebar({sidebar: {id: 'app-switcher', content: sidebarContents__soy97}, trigger: {showIcon: false, content: triggerContent__soy99}});
    } else {
      output += navlinks.templates.appswitcher_old.switcher(null);
    }
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" class="sidebar-trigger app-switcher-trigger" aria-owns="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" aria-haspopup="true" data-is-user-admin="' + soy.$$escapeHtml(false) + '" data-is-sidebar="true" >' + soy.$$filterNoAutoescape(opt_data.trigger.content) + '</a><div id=' + soy.$$escapeHtml(opt_data.sidebar.id) + ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">' + soy.$$filterNoAutoescape(opt_data.sidebar.content) + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebar.soyTemplateName = 'navlinks.templates.appswitcher.sidebar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(e,a){var d="is-user-admin";var c="#app-switcher";a.SideBar=function(f){var g=this;this.$sidebar=null;f=e.extend({sidebarContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(i,h){g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:h,name:i}))};this.getProjectData=function(){var h=e(".project-shortcut-dialog-trigger"),i=h.data("key"),j=h.data("entity-type");if(h.size()==0||!i||!j){e(".app-switcher-shortcuts").remove();return}var l,k;k=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+i,cache:false,data:{entityType:j},dataType:"json"});l=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+i,cache:false,data:{entityType:j},dataType:"json"});e.when(k,l).then(function(n,m){g.updateProjectShortcuts(n,m,{key:i,entityType:j,name:h.data("name"),avatarUrl:h.find("img").prop("src")})},g.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=e(f.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){e(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"\u81ea\u5b9a\u4e49\u5bfc\u822a",title:"\u6dfb\u52a0\u65b0\u7684\u6761\u76ee\uff0c\u9690\u85cf\u73b0\u6709\u7684\u6216\u9650\u5236\u8c01\u80fd\u770b\u89c1\u4ec0\u4e48"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u94fe\u63a5",title:"\u94fe\u63a5\u5230\u66f4\u591aAtlassian\u5e94\u7528\u7a0b\u5e8f"}]}))};this.addProjectShortcutsCog=function(h,j){var i=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+h,label:"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e",title:""}];if(g.entityMappings[j]){i.push({href:g.generateEntityLinksUrl(h,g.entityMappings[j]),label:"\u7ba1\u7406\u4ea7\u54c1\u94fe\u63a5",title:""})}g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:i}))};this.updateAppLinks=function(h){e(function(){g.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"\u5e94\u7528\u94fe\u63a5",list:h}));if(g.getSidebar().data(d)){g.addApplicationsCog()}g.bindAnalyticsHandlers(g.getSidebar(),h)})};this.updateProjectShortcuts=function(k,i,j){var l=k[0].shortcuts,h=i[0].shortcuts;g.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"\u5feb\u6377\u65b9\u5f0f",list:l.concat(h)}));if(g.getSidebar().data(d)){g.addProjectShortcutsCog(j.key,j.entityType)}g.populateProjectHeader(j.name,j.avatarUrl);g.bindAnalyticsHandlers(g.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(h,i){if(i===g.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+i+"&key="+h}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+i+"/"+h}};this.showAppSwitcherError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.showProjectShortcutsError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.retryLoading=function(h){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();h&&h.stopPropagation()};this.bindAnalyticsHandlers=function(h,i){};this.getLinks();e(this.getProjectData);this.toggleSidebar=function(j){var k=g.getSidebar(),i=e("body"),h=e(window.document);if(!i.hasClass("app-switcher-open")){var m=e("#header");k.css("left",-k.width());k.parent("body").length||k.appendTo("body");b({data:k});k.animate({left:0},300);function l(n){var p=n.target&&e(n.target),o=n.keyCode;if(n.originalEvent===j.originalEvent){return}if(p&&!o&&!(p.closest(k).length||p.closest(m).length)&&j.which==1&&!(n.shiftKey||n.ctrlKey||n.metaKey)){g.toggleSidebar()}else{if(o===27){g.toggleSidebar()}}}h.on("click.appSwitcher",l);h.on("keydown.appSwitcher",l);h.on("scroll.appSwitcher",k,b)}else{h.off(".appSwitcher")}i.toggleClass("app-switcher-open")};e("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(h){var f=e(document).scrollTop(),i=e("#header"),g=(i.height()+i.offset().top)-f;if(g>=0){h.data.css({top:g,position:"fixed"})}else{h.data.css({top:0,left:0,position:"fixed"})}}e(function(){if(e(c).data("is-sidebar")===true){new a.SideBar({sidebarContents:c})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click";var APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show";var APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error";var APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click";var APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";(function(c,f){var b="isAppSuggestionAvailable";var d="isSiteAdminUser";var e="isUserAdmin";var a="#app-switcher";f.AppSwitcher=function(j){var l=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var k="unified.usermanagement";var m=this;this.$dropdown=null;j=c.extend({dropdownContents:null},j);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=c(j.dropdownContents);this.envData=this.$dropdown.data("environment")}return this.$dropdown};this.updateDropdown=function(n){c(function(){m.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:n,showAdminLink:m.envData[e],adminLink:l}));m.bindAnalyticsHandlers();if(m.envData[b]===true){m.handleSuggestionApps(n)}})};this.bindAnalyticsHandlers=function(){c(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});c("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});c("#app-switcher .nav-link").on("click",function(){var p="custom";var q=c(this).find("a");var o=q.attr("href");var n=window.location.hostname;if(o&&o.indexOf("bitbucket.org")>-1){p="bitbucket-cloud"}else{if(o.indexOf(n+"/wiki")>-1){p="confluence"}else{if(o.indexOf(n+"/build")>-1){p="bamboo"}else{if(o.indexOf(n)>-1){p="jira"}}}}AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:p}})});c(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.isBillingSystemEnabled=function(){return(this.envData[d]===true)&&AJS.DarkFeatures.isEnabled(k)};this.handleSuggestionApps=function(q){var r=_.map(q,function(s){return s.applicationType.toLowerCase()});var o=c("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");o.html(navlinks.templates.appswitcher_old.suggestionApps);var p=o.find(".suggestion-apps");var n=false;_.each(g,function(s){if(!_.contains(r,s.appName)){n=true;p.append(navlinks.templates.appswitcher_old.suggestionApp({suggestionApp:s,isBillingSystemEnabled:m.isBillingSystemEnabled()}))}});if(!n){return}c("#app-switcher").append(o);c(".app-discovery-suggestion-app").click(function(){var t=c(this).find("a");var s;if(m.envData[d]===true){s="appswitcher.discovery.siteadmin.select.inproduct."}else{s="appswitcher.discovery.user.select."}s=s+t.attr("id").toLowerCase();AJS.trigger("analytics",{name:s})});c(".app-discovery-suggestion-app").hover(function(){c(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});c(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});i(h,"true");o.remove()})};this.showError=function(){c(function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});m.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(m.retryLoading,m))})};this.retryLoading=function(n){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();n&&n.stopPropagation()};this.getLinks()};var h="key-no-thanks";var g=[{appName:"jira",appDesc:"\u95ee\u9898 & \u9879\u76ee\u8ddf\u8e2a\u8f6f\u4ef6",discoveryUrl:"https://www.atlassian.com/software/jira",billingSystemDiscoveryUrl:"/admin/billing/addapplication"},{appName:"confluence",appDesc:"\u534f\u4f5c\u548c\u5185\u5bb9\u5206\u4eab",discoveryUrl:"https://www.atlassian.com/software/confluence",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=confluence.ondemand"},{appName:"bamboo",appDesc:"\u6301\u7eed\u96c6\u6210",discoveryUrl:"https://www.atlassian.com/software/bamboo",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=bamboo.ondemand"}];var i=function(j,k){c.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:j,value:k})})};c(function(){if(c(a).data("is-switcher")===true){new f.AppSwitcher({dropdownContents:a})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher_old.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher_old.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applications.soyTemplateName = 'navlinks.templates.appswitcher_old.applications';
}


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param19 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      param19 += navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentMap(linkData27, {showDescription: opt_data.showDescription}));
    }
    param19 += '</ul>';
    output += aui.dropdown2.section({content: param19});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsSection';
}


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsItem';
}


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape("\u914d\u7f6e...") + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.adminSection.soyTemplateName = 'navlinks.templates.appswitcher_old.adminSection';
}


navlinks.templates.appswitcher_old.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape("\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\x3cspan class\x3d\x22app-switcher-retry\x22\x3e\u518d\u8bd5\u4e00\u6b21\x3c/span\x3e.") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.error.soyTemplateName = 'navlinks.templates.appswitcher_old.error';
}


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape("\u6b63\u5728\u8fd0\u884c\x26hellip;") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.loading.soyTemplateName = 'navlinks.templates.appswitcher_old.loading';
}


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml("\u5df2\u94fe\u63a5\u7a0b\u5e8f") + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.trigger.soyTemplateName = 'navlinks.templates.appswitcher_old.trigger';
}


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    var loadingContent__soy81 = '' + navlinks.templates.appswitcher_old.loading(null);
    var triggerContent__soy83 = '' + navlinks.templates.appswitcher_old.trigger(null);
    output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy81, extraClasses: 'aui-style-default', extraAttributes: {'data-environment': {}, 'data-is-switcher': 'true'}}, trigger: {showIcon: false, content: triggerContent__soy83, extraClasses: 'app-switcher-trigger', extraAttributes: {href: '#app-switcher'}}});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.switcher.soyTemplateName = 'navlinks.templates.appswitcher_old.switcher';
}


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_ignored) {
  var output = '';
  var href__soy89 = opt_data.isBillingSystemEnabled == true ? opt_data.suggestionApp.billingSystemDiscoveryUrl : opt_data.suggestionApp.discoveryUrl;
  output += '<li class="app-discovery-suggestion-app"><a id="' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '" href="' + soy.$$escapeHtml(href__soy89) + '" class="app-discovery-link aui-icon-container app-discovery-' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '-product-icon" title="' + soy.$$escapeHtml(href__soy89) + '" target="_blank"/><div class="app-discovery-small">' + soy.$$escapeHtml(opt_data.suggestionApp.appDesc) + '</div></li>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApp.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApp';
}


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_ignored) {
  return '<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>' + soy.$$escapeHtml("\u5c1d\u8bd5\u5176\u4ed6Atlassian\u7684\u5e94\u7528") + '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>' + soy.$$escapeHtml("\u4e0d\u518d\u663e\u793a") + '</button></div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApps.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApps';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'de.griffel.confluence.plugins.plant-uml:plantuml-resources', location = 'soy/wizard-templates.soy' */
// This file was automatically generated from wizard-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace plantuml.wizard.
 */

if (typeof plantuml == 'undefined') { var plantuml = {}; }
if (typeof plantuml.wizard == 'undefined') { plantuml.wizard = {}; }


plantuml.wizard.page1FormUml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_activity_diagram_simple">' + soy.$$escapeHtml("Activity Diagram") + '</option><option value="plantuml_template_class_diagram_simple">' + soy.$$escapeHtml("Class Diagram") + '</option><option value="plantuml_template_component_diagram_simple">' + soy.$$escapeHtml("Component Diagram") + '</option><option value="plantuml_template_state_diagram_simple">' + soy.$$escapeHtml("State Diagram") + '</option><option value="plantuml_template_sequence_diagram_simple">' + soy.$$escapeHtml("Sequence Diagram") + '</option><option value="plantuml_template_usecase_diagram_simple">' + soy.$$escapeHtml("Use Case Diagram") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/classes.html") + '" class="external-link">' + soy.$$escapeHtml("UML Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormUml.soyTemplateName = 'plantuml.wizard.page1FormUml';
}


plantuml.wizard.page1FormGraphviz = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_graphviz_diagram_simple">' + soy.$$escapeHtml("Graphviz") + '</option><option value="plantuml_template_flowchart_diagram_simple">' + soy.$$escapeHtml("Flowchart") + '</option></select><p><a href="' + soy.$$escapeHtml("http://www.graphviz.org/Documentation.php") + '" class="external-link">' + soy.$$escapeHtml("Graphviz Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormGraphviz.soyTemplateName = 'plantuml.wizard.page1FormGraphviz';
}


plantuml.wizard.page1FormDitaa = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_ditaa_diagram_simple">' + soy.$$escapeHtml("DITAA") + '</option></select><p><a href="' + soy.$$escapeHtml("http://ditaa.sourceforge.net/") + '" class="external-link">' + soy.$$escapeHtml("DITAA Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormDitaa.soyTemplateName = 'plantuml.wizard.page1FormDitaa';
}


plantuml.wizard.page1FormJcckit = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_jcckit_diagram_simple">' + soy.$$escapeHtml("JCCKit") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/jcckit.html") + '" class="external-link">' + soy.$$escapeHtml("JCCKit Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormJcckit.soyTemplateName = 'plantuml.wizard.page1FormJcckit';
}


plantuml.wizard.page1FormPlantuml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Function") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_plantuml_spacegraph">' + soy.$$escapeHtml("Spacegraph") + '</option><option value="plantuml_template_plantuml_version">' + soy.$$escapeHtml("PlantUML Version Info") + '</option><option value="plantuml_template_plantuml_xearth">' + soy.$$escapeHtml("XEarth") + '</option></select><p><a href="' + soy.$$escapeHtml("plantuml.blueprint.wizard.plantumlxearth.documentation_url") + '" class="external-link">' + soy.$$escapeHtml("plantuml.blueprint.wizard.plantumlxearth.documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormPlantuml.soyTemplateName = 'plantuml.wizard.page1FormPlantuml';
}


plantuml.wizard.page1FormSalt = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_salt_diagram_simple">' + soy.$$escapeHtml("Salt") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/salt.html") + '" class="external-link">' + soy.$$escapeHtml("Salt Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormSalt.soyTemplateName = 'plantuml.wizard.page1FormSalt';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-on-space.js' */
(function(a){a(function(){function b(){var c="com.atlassian.confluence.extra.team-calendars:tc-on-space-blueprint-webitem";Confluence.Blueprint.setDirectCallback(c,function(f,d){d.finalUrl=Confluence.getContextPath()+"/display/"+d.spaceKey+"/calendars?src=sidebar&openAddCalDialog=true"})}b()})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyWork.Templates.Anchor.
 */

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml("\u5728\u4f60\u7684\u4e2a\u4eba\u4fe1\u606f\u9875\u9762\u7684\u4efb\u52a1\u9009\u9879\u5361\u4e2d\uff0c\u6d4f\u89c8\u5206\u914d\u7ed9\u4f60\u6216\u7531\u4f60\u521b\u5efa\u7684\u4efb\u52a1\u3002") + '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="' + soy.$$escapeHtml(opt_data.tasksUrl) + '" class="aui-button aui-style"><p>' + soy.$$escapeHtml("\u67e5\u770b\u4efb\u52a1") + '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">' + soy.$$escapeHtml("\u4e0d\u518d\u63d0\u793a") + '</a></li></ul>';
};
if (goog.DEBUG) {
  MyWork.Templates.Anchor.tasksFeatureDiscovery.soyTemplateName = 'MyWork.Templates.Anchor.tasksFeatureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-workbox-empty";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","\u6253\u5f00\u901a\u77e5")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");v.addClass("aui-iconfont-workbox").removeClass("aui-iconfont-workbox-empty");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread");v.addClass("aui-iconfont-workbox-empty").removeClass("aui-iconfont-workbox")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=AJS.$("#user-menu-link");var C=AJS.$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){AJS.trigger("analytics",{name:"mywork.host.button.clicked.notifications",data:{}});MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){window.location=state.finalUrl}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-ui-jquery-ui-datepicker', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
("undefined"===typeof window?global:window).__716e1ce77ba41179f2e03684627da84b=function(){(function(d){function B(){this.debug=!1;this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass=
"ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "),weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};d.extend(this._defaults,this.regional[""]);this.dpDiv=C(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function C(a){return a.bind("mouseout",
function(a){a=d(a.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");a.length&&a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!d.datepicker._isDisabledDatepicker(D.inline?a.parent()[0]:D.input[0])&&b.length)b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
b.addClass("ui-state-hover"),b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover"),b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")})}function z(a,b){d.extend(a,b);for(var c in b)if(null==b[c]||void 0==b[c])a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.24"}});var x=(new Date).getTime(),D;d.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){z(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null,e;for(e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f="div"==e||"span"==e;a.id||(this.uuid+=1,a.id="dp"+this.uuid);var j=this._newInst(d(a),f);j.settings=d.extend({},b||{},c||{});"input"==e?this._connectDatepicker(a,j):f&&this._inlineDatepicker(a,j)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:C(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),d.data(a,"datepicker",b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();c&&(b.append=d('<span class="'+this._appendClass+'">'+c+"</span>"),a[e?"before":"after"](b.append));a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");("focus"==
c||"both"==c)&&a.focus(this._showDatepicker);if("button"==c||"both"==c){var c=this._get(b,"buttonText"),f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(""==f?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){if(d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0])d.datepicker._hideDatepicker();
else{d.datepicker._datepickerShowing&&d.datepicker._lastInput!=a[0]&&d.datepicker._hideDatepicker();d.datepicker._showDatepicker(a[0])}return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){for(var b=0,c=0,d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":
"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),d.data(a,"datepicker",b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),
b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;a||(this.uuid+=1,this._dialogInput=d('<input type="text" id="dp'+this.uuid+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),d("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},d.data(this._dialogInput[0],"datepicker",a));z(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;this._pos||(this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]);this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");"input"==e?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==e||"span"==e)&&b.removeClass(this.markerClassName).empty()}},
_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().removeClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");this._disabledInputs=d.map(this._disabledInputs,
function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().addClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled",
"disabled");this._disabledInputs=d.map(this._disabledInputs,function(b){return b==a?null:b});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(2==arguments.length&&"string"==typeof b)return"defaults"==
b?d.extend({},d.datepicker._defaults):e?"all"==b?d.extend({},e.settings):this._get(e,b):null;var f=b||{};"string"==typeof b&&(f={},f[b]=c);if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,!0),j=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");z(e.settings,f);null!==j&&(void 0!==f.dateFormat&&void 0===f.minDate)&&(e.settings.minDate=this._formatDate(e,j));null!==g&&(void 0!==f.dateFormat&&void 0===f.maxDate)&&(e.settings.maxDate=this._formatDate(e,g));this._attachments(d(a),
e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=
d.datepicker._getInst(a.target),c=!0,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=!1;break;case 13:return c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv),c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]),(a=d.datepicker._get(b,"onSelect"))?(c=d.datepicker._formatDate(b),a.apply(b.input?b.input[0]:null,[c,b])):d.datepicker._hideDatepicker(),
!1;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;
break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?1:-1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,
a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,7,"D");c=a.ctrlKey||a.metaKey;break;default:c=!1}else 36==a.keyCode&&a.ctrlKey?d.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){var b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat")),c=String.fromCharCode(void 0==
a.charCode?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||" ">c||!b||-1<b.indexOf(c)}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a)))d.datepicker._setDateFromField(a),d.datepicker._updateAlternate(a),d.datepicker._updateDatepicker(a)}catch(b){d.datepicker.log(b)}return!0},_showDatepicker:function(a){a=a.target||a;"input"!=a.nodeName.toLowerCase()&&
(a=d("input",a.parentNode)[0]);if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&(d.datepicker._curInst.dpDiv.stop(!0,!0),b&&d.datepicker._datepickerShowing&&d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));var c=d.datepicker._get(b,"beforeShow"),c=c?c.apply(a,[a,b]):{};if(!1!==c){z(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);d.datepicker._inDialog&&
(a.value="");d.datepicker._pos||(d.datepicker._pos=d.datepicker._findPos(a),d.datepicker._pos[1]+=a.offsetHeight);var e=!1;d(a).parents().each(function(){e=e|d(this).css("position")=="fixed";return!e});e&&d.browser.opera&&(d.datepicker._pos[0]-=document.documentElement.scrollLeft,d.datepicker._pos[1]-=document.documentElement.scrollTop);c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){var c=d.datepicker._get(b,"showAnim"),f=d.datepicker._get(b,"duration"),h=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(a.length){var c=d.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
!0;if(d.effects&&d.effects[c])b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h);else b.dpDiv[c||"show"](c?f:null,h);(!c||!f)&&h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);D=a;a.dpDiv.empty().append(this._generateHTML(a));this._attachHandlers(a);var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),
height:a.dpDiv.outerHeight()});a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");1<c&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(1!=b[0]||1!=b[1]?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&(d.datepicker._datepickerShowing&&
a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement)&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=
a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,j=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+(c?0:d(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:d(document).scrollTop());b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+j?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,
b.top+f>i&&i>f?Math.abs(f+j):0);return b},_findPos:function(a){for(var b=this._getInst(a),b=this._get(b,"isRTL");a&&("hidden"==a.type||1!=a.nodeType||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(b&&!(a&&b!=d.data(a,"datepicker"))&&this._datepickerShowing){var a=this._get(b,"showAnim"),c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b)};if(d.effects&&d.effects[a])b.dpDiv.hide(a,
d.datepicker._get(b,"showOptions"),c,e);else b.dpDiv["slideDown"==a?"slideUp":"fadeIn"==a?"fadeOut":"hide"](a?c:null,e);a||e();this._datepickerShowing=!1;(a=this._get(b,"onClose"))&&a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._lastInput=null;this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),d.blockUI&&(d.unblockUI(),d("body").append(this.dpDiv)));this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){var a=d(a.target),b=d.datepicker._getInst(a[0]);(a[0].id!=d.datepicker._mainDivId&&0==a.parents("#"+d.datepicker._mainDivId).length&&!a.hasClass(d.datepicker.markerClassName)&&!a.closest("."+d.datepicker._triggerClass).length&&d.datepicker._datepickerShowing&&(!d.datepicker._inDialog||!d.blockUI)||a.hasClass(d.datepicker.markerClassName)&&d.datepicker._curInst!=b)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var a=d(a),e=this._getInst(a[0]);
this._isDisabledDatepicker(a[0])||(this._adjustInstDate(e,b+("M"==c?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var a=d(a),b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay)b.selectedDay=b.currentDay,b.drawMonth=b.selectedMonth=b.currentMonth,b.drawYear=b.selectedYear=b.currentYear;else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},
_selectMonthYear:function(a,b,c){var a=d(a),e=this._getInst(a[0]);e["selected"+("M"==c?"Month":"Year")]=e["draw"+("M"==c?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);!d(e).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(f[0])&&(f=this._getInst(f[0]),f.selectedDay=f.currentDay=d("a",e).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,
f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){var c=d(a),c=this._getInst(c[0]),b=null!=b?b:this._formatDate(c);c.input&&c.input.val(b);this._updateAlternate(c);var e=this._get(c,"onSelect");e?e.apply(c.input?c.input[0]:null,[b,c]):c.input&&c.input.trigger("change");c.inline?this._updateDatepicker(c):(this._hideDatepicker(),this._lastInput=c.input[0],"object"!=typeof c.input[0]&&c.input.focus(),this._lastInput=
null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[0<a&&6>a,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(null==
a||null==b)throw"Invalid arguments";b="object"==typeof b?b.toString():b+"";if(""==b)return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,j=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,i=c=-1,p=-1,r=-1,k=!1,m=function(b){(b=y+1<a.length&&
a.charAt(y+1)==b)&&y++;return b},l=function(a){var c=m(a),a=RegExp("^\\d{1,"+("@"==a?14:"!"==a?20:"y"==a&&c?4:"o"==a?3:2)+"}"),a=b.substring(u).match(a);if(!a)throw"Missing number at position "+u;u+=a[0].length;return parseInt(a[0],10)},n=function(a,c,e){var a=d.map(m(a)?e:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;d.each(a,function(a,c){var d=c[1];if(b.substr(u,d.length).toLowerCase()==d.toLowerCase())return f=c[0],u+=d.length,!1});if(-1!=f)return f+
1;throw"Unknown name at position "+u;},s=function(){if(b.charAt(u)!=a.charAt(y))throw"Unexpected literal at position "+u;u++},u=0,y=0;y<a.length;y++)if(k)"'"==a.charAt(y)&&!m("'")?k=!1:s();else switch(a.charAt(y)){case "d":p=l("d");break;case "D":n("D",f,h);break;case "o":r=l("o");break;case "m":i=l("m");break;case "M":i=n("M",j,g);break;case "y":c=l("y");break;case "@":var v=new Date(l("@")),c=v.getFullYear(),i=v.getMonth()+1,p=v.getDate();break;case "!":v=new Date((l("!")-this._ticksTo1970)/1E4);
c=v.getFullYear();i=v.getMonth()+1;p=v.getDate();break;case "'":m("'")?s():k=!0;break;default:s()}if(u<b.length)throw"Extra/unparsed characters found in date: "+b.substring(u);-1==c?c=(new Date).getFullYear():100>c&&(c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100));if(-1<r){i=1;p=r;do{e=this._getDaysInMonth(c,i-1);if(p<=e)break;i++;p-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,i-1,p));if(v.getFullYear()!=c||v.getMonth()+1!=i||v.getDate()!=p)throw"Invalid date";return v},
ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864E9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,
c=(c?c.monthNames:null)||this._defaults.monthNames,j=function(b){(b=r+1<a.length&&a.charAt(r+1)==b)&&r++;return b},g=function(a,b,c){b=""+b;if(j(a))for(;b.length<c;)b="0"+b;return b},i="",p=!1;if(b)for(var r=0;r<a.length;r++)if(p)"'"==a.charAt(r)&&!j("'")?p=!1:i+=a.charAt(r);else switch(a.charAt(r)){case "d":i+=g("d",b.getDate(),2);break;case "D":var k;k=b.getDay();var m=d,l=f;k=j("D")?l[k]:m[k];i+=k;break;case "o":i+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":i+=g("m",b.getMonth()+1,2);break;case "M":k=b.getMonth();m=h;l=c;k=j("M")?l[k]:m[k];i+=k;break;case "y":i+=j("y")?b.getFullYear():(10>b.getYear()%100?"0":"")+b.getYear()%100;break;case "@":i+=b.getTime();break;case "!":i+=1E4*b.getTime()+this._ticksTo1970;break;case "'":j("'")?i+="'":p=!0;break;default:i+=a.charAt(r)}return i},_possibleChars:function(a){for(var b="",c=!1,d=function(b){(b=f+1<a.length&&a.charAt(f+1)==b)&&f++;return b},
f=0;f<a.length;f++)if(c)"'"==a.charAt(f)&&!d("'")?c=!1:b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var j=
this._getFormatConfig(a);try{f=this.parseDate(c,d,j)||h}catch(g){this.log(g),d=b?"":d}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=d?f.getDate():0;a.currentMonth=d?f.getMonth():0;a.currentYear=d?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){if(null==b||""===b)b=c;else{var e;if("string"==
typeof b)a:{try{e=d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),b,d.datepicker._getFormatConfig(a));break a}catch(f){}var h=(b.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,a=h.getFullYear();e=h.getMonth();for(var h=h.getDate(),j=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,g=j.exec(b);g;){switch(g[2]||"d"){case "d":case "D":h+=parseInt(g[1],10);break;case "w":case "W":h+=7*parseInt(g[1],10);break;case "m":case "M":e+=parseInt(g[1],10);h=Math.min(h,d.datepicker._getDaysInMonth(a,
e));break;case "y":case "Y":a+=parseInt(g[1],10),h=Math.min(h,d.datepicker._getDaysInMonth(a,e))}g=j.exec(b)}e=new Date(a,e,h)}else"number"==typeof b?isNaN(b)?b=c:(a=new Date,a.setDate(a.getDate()+b),b=a):b=new Date(b.getTime()),e=b;b=e}if(b=b&&"Invalid Date"==b.toString()?c:b)b.setHours(0),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},_setDate:function(a,
b,c){var d=!b,f=a.selectedMonth,h=a.selectedYear,b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();(f!=a.selectedMonth||h!=a.selectedYear)&&!c&&this._notifyChange(a);this._adjustInstDate(a);a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&""==a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,
a.currentMonth,a.currentDay))},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){d(this).bind(this.getAttribute("data-event"),{prev:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+x].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+x].datepicker._gotoToday(c)},selectDay:function(){window["DP_jQuery_"+
x].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"M");return!1},selectYear:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"Y");return!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date,b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),
f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),j=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),p=1!=j[0]||1!=j[1],r=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),g=a.drawMonth-g,l=a.drawYear;0>g&&(g+=12,l--);if(m)for(var n=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-j[0]*j[1]+1,m.getDate())),
n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(l,g,1))>n;)g--,0>g&&(g=11,l--);a.drawMonth=g;a.drawYear=l;var n=this._get(a,"prevText"),n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(l,g-i,1)),this._getFormatConfig(a)),n=this._canAdjustMonth(a,-1,l,g)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+
n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>",s=this._get(a,"nextText"),s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(l,g+i,1)),this._getFormatConfig(a)),f=this._canAdjustMonth(a,1,l,g)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+s+"</span></a>",i=this._get(a,"currentText"),s=this._get(a,"gotoCurrent")&&a.currentDay?r:b,i=!h?i:this.formatDate(i,s,this._getFormatConfig(a)),h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>":"",e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+
i+"</button>":"")+(c?"":h)+"</div>":"",h=parseInt(this._get(a,"firstDay"),10),h=isNaN(h)?0:h,i=this._get(a,"showWeek"),s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var u=this._get(a,"dayNamesMin"),y=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),z=this._get(a,"showOtherMonths"),D=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var B=this._getDefaultDate(a),E="",F=0;F<j[0];F++){var I="";this.maxRows=4;for(var G=0;G<j[1];G++){var C=
this._daylightSavingAdjust(new Date(l,g,a.selectedDay)),t=" ui-corner-all",q="";if(p){q+='<div class="ui-datepicker-group';if(1<j[1])switch(G){case 0:q+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case j[1]-1:q+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:q+=" ui-datepicker-group-middle",t=""}q+='">'}for(var q=q+('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&0==F?c?f:n:"")+(/all|right/.test(t)&&
0==F?c?n:f:"")+this._generateMonthYearHeader(a,g,l,k,m,0<F||0<G,y,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>'),w=i?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"",t=0;7>t;t++)var o=(t+h)%7,w=w+("<th"+(5<=(t+h+6)%7?' class="ui-datepicker-week-end"':"")+'><span title="'+s[o]+'">'+u[o]+"</span></th>");q+=w+"</tr></thead><tbody>";w=this._getDaysInMonth(l,g);l==a.selectedYear&&g==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,w));t=(this._getFirstDayOfMonth(l,
g)-h+7)%7;w=Math.ceil((t+w)/7);this.maxRows=w=p?this.maxRows>w?this.maxRows:w:w;for(var o=this._daylightSavingAdjust(new Date(l,g,1-t)),L=0;L<w;L++){for(var q=q+"<tr>",J=!i?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(o)+"</td>",t=0;7>t;t++){var H=x?x.apply(a.input?a.input[0]:null,[o]):[!0,""],A=o.getMonth()!=g,K=A&&!D||!H[0]||k&&o<k||m&&o>m,J=J+('<td class="'+(5<=(t+h+6)%7?" ui-datepicker-week-end":"")+(A?" ui-datepicker-other-month":"")+(o.getTime()==C.getTime()&&g==a.selectedMonth&&
a._keyEvent||B.getTime()==o.getTime()&&B.getTime()==C.getTime()?" "+this._dayOverClass:"")+(K?" "+this._unselectableClass+" ui-state-disabled":"")+(A&&!z?"":" "+H[1]+(o.getTime()==r.getTime()?" "+this._currentClass:"")+(o.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!A||z)&&H[2]?' title="'+H[2]+'"':"")+(K?"":' data-handler="selectDay" data-event="click" data-month="'+o.getMonth()+'" data-year="'+o.getFullYear()+'"')+">"+(A&&!z?"&#xa0;":K?'<span class="ui-state-default">'+o.getDate()+"</span>":
'<a class="ui-state-default'+(o.getTime()==b.getTime()?" ui-state-highlight":"")+(o.getTime()==r.getTime()?" ui-state-active":"")+(A?" ui-priority-secondary":"")+'" href="#">'+o.getDate()+"</a>")+"</td>");o.setDate(o.getDate()+1);o=this._daylightSavingAdjust(o)}q+=J+"</tr>"}g++;11<g&&(g=0,l++);q+="</tbody></table>"+(p?"</div>"+(0<j[0]&&G==j[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");I+=q}E+=I}E+=e+(d.browser.msie&&7>parseInt(d.browser.version,10)&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=!1;return E},_generateMonthYearHeader:function(a,b,c,d,f,h,j,g){var i=this._get(a,"changeMonth"),p=this._get(a,"changeYear"),r=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',m="";if(h||!i)m+='<span class="ui-datepicker-month">'+j[b]+"</span>";else{for(var j=d&&d.getFullYear()==c,l=f&&f.getFullYear()==c,m=m+'<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">',n=0;12>n;n++)if((!j||n>=d.getMonth())&&(!l||n<=f.getMonth()))m+='<option value="'+
n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";m+="</select>"}r||(k+=m+(h||!i||!p?"&#xa0;":""));if(!a.yearshtml)if(a.yearshtml="",h||!p)k+='<span class="ui-datepicker-year">'+c+"</span>";else{var g=this._get(a,"yearRange").split(":"),s=(new Date).getFullYear(),j=function(a){a=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?s+parseInt(a,10):parseInt(a,10);return isNaN(a)?s:a},b=j(g[0]),g=Math.max(b,j(g[1]||"")),b=d?Math.max(b,d.getFullYear()):b,g=f?Math.min(g,f.getFullYear()):
g;for(a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}k+=this._get(a,"yearSuffix");r&&(k+=(h||!i||!p?"&#xa0;":"")+m);return k+"</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"==c?b:0),f=a.drawMonth+("M"==c?b:0),b=Math.min(a.selectedDay,this._getDaysInMonth(d,f))+("D"==c?b:0),d=this._restrictMinMax(a,
this._daylightSavingAdjust(new Date(d,f,b)));a.selectedDay=d.getDate();a.drawMonth=a.selectedMonth=d.getMonth();a.drawYear=a.selectedYear=d.getFullYear();("M"==c||"Y"==c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),c=c&&b<c?c:b;return d&&c>d?d:c},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,
"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var f=this._getNumberOfMonths(a),c=this._daylightSavingAdjust(new Date(c,d+(0>b?b:f[0]*f[1]),1));0>b&&c.setDate(this._getDaysInMonth(c.getFullYear(),
c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff"),b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,
"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);b=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;d.datepicker.initialized||(d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv),
d.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return"string"==typeof a&&("isDisabled"==a||"getDate"==a||"widget"==a)||"option"==a&&2==arguments.length&&"string"==typeof arguments[1]?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new B;d.datepicker.initialized=!1;d.datepicker.uuid=
(new Date).getTime();d.datepicker.version="1.8.24";window["DP_jQuery_"+x]=d})(jQuery);return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-date-picker', location = 'node_modules/@atlassian/aui/src/js/aui/date-picker.js' */
("undefined"===typeof window?global:window).__f60531af6fc7657922d6dda15e693588=function(){function g(a){return a&&a.__esModule?a:{"default":a}}function f(a,c){var d,g,b,i,m;d={};i=w++;b=(0,e.default)(a);b.attr("data-aui-dp-uuid",i);c=e.default.extend(void 0,f.prototype.defaultOptions,c);d.getField=function(){return b};d.getOptions=function(){return c};g=function(){var a,g,h,k,s,u,p,q,j,n;d.hide=function(){j.hide()};d.show=function(){j.show()};d.setDate=function(b){"undefined"!==typeof a&&a.datepicker("setDate",
b)};d.getDate=function(){if("undefined"!==typeof a)return a.datepicker("getDate")};u=function(f){n.off();if(c.hint){var l=(0,e.default)("<div/>").addClass("aui-datepicker-hint");l.append("<span/>").text(c.hint);n.append(l)}a=(0,e.default)("<div/>");a.attr("data-aui-dp-popup-uuid",i);n.append(a);l={dateFormat:c.dateFormat,defaultDate:b.val(),maxDate:b.attr("max"),minDate:b.attr("min"),nextText:">",onSelect:function(a){b.val(a);b.change();d.hide();p=!0;b.focus();c.onSelect&&c.onSelect.call(this,a)},
onChangeMonthYear:function(){setTimeout(j.refresh,0)},prevText:"<"};e.default.extend(l,f);-1<c.firstDay&&(l.firstDay=c.firstDay);"undefined"!==typeof b.attr("step")&&t.log("WARNING: The date picker polyfill currently does not support the step attribute!");a.datepicker(l);(0,e.default)("body").on("keydown",g);b.on("focusout keydown",h);b.on("propertychange keyup input paste",s)};g=function(a){var c=(0,e.default)(a.target),f=c.closest(n).length||c.is(b),g=c.closest(".ui-datepicker-header").length;!f&&
!g||a.keyCode===x.default.ESCAPE?d.hide():c[0]!==b[0]&&a.preventDefault()};h=function(){q||((0,e.default)("body").on("focus blur click mousedown","*",g),q=!0)};k=function(){p?p=!1:d.show()};s=function(){if((0,e.default)(this).val())a.datepicker("setDate",b.val()),a.datepicker("option",{maxDate:b.attr("max"),minDate:b.attr("min")})};d.destroyPolyfill=function(){d.hide();b.attr("placeholder",null);b.off("propertychange keyup input paste",s);b.off("focus click",k);b.off("focusout keydown",h);(0,e.default)("body").off("keydown",
h);f.prototype.browserSupportsDateField&&(b[0].type="date");"undefined"!==typeof a&&a.datepicker("destroy");delete d.destroyPolyfill;delete d.show;delete d.hide};q=p=!1;c.languageCode in f.prototype.localisations||(c.languageCode="");var v=f.prototype.localisations,r="",o=240;"large"===v.size&&(o=325,r="aui-datepicker-dialog-large");o={hideCallback:function(){(0,e.default)("body").off("focus blur click mousedown","*",g);q=false;m&&m._datePickerPopup&&delete m._datePickerPopup},hideDelay:null,noBind:!0,
persistent:!0,closeOthers:!1,width:o};c.position&&(o.calculatePositions=function(a,b){var d=(0,e.default)(a[0]);return c.position.call(this,d,b)});j=(0,y.default)(b,void 0,function(b,c,d){if(typeof a==="undefined"){n=b;u(v)}if(m=(0,e.default)(c).closest(".aui-inline-dialog").get(0))m._datePickerPopup=j;d()},o);j.addClass("aui-datepicker-dialog");j.addClass(r);b.on("focus click",k);b.attr("placeholder",c.dateFormat);if(c.overrideBrowserDefault&&f.prototype.browserSupportsDateField&&(b[0].type="text",
r=b[0].getAttribute("value")))b[0].value=r};d.reset=function(){"function"===typeof d.destroyPolyfill&&d.destroyPolyfill();(!f.prototype.browserSupportsDateField||c.overrideBrowserDefault)&&g()};d.reset();return d}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var e=g(__2fd777cca7fe187ff4048afabed6a6b5);__716e1ce77ba41179f2e03684627da84b;var t;var a=__4f4d08f5cd21aa65e83ce6be211355f4;if(a&&a.__esModule)t=a;else{var k={};if(null!=a)for(var i in a)Object.prototype.hasOwnProperty.call(a,
i)&&(k[i]=a[i]);k.default=a;t=k}i=g(__dd0dee18d8910035abf3563b0855343d);var y=g(__afb690a989e69e0e0958267e81e20b37),x=g(__2df6ae9f601a70792914228c0cba1eb9),a=g(__c224cbc2582565ddc04950dfebb7528b),w=0;f.prototype.browserSupportsDateField="date"===(0,e.default)('<input type="date" />')[0].type;f.prototype.defaultOptions={overrideBrowserDefault:!1,firstDay:-1,languageCode:(0,e.default)("html").attr("lang")||"en-AU",dateFormat:e.default.datepicker.W3C};f.prototype.localisations={dayNames:[a.default.getText("ajs.datepicker.localisations.day-names.sunday"),
a.default.getText("ajs.datepicker.localisations.day-names.monday"),a.default.getText("ajs.datepicker.localisations.day-names.tuesday"),a.default.getText("ajs.datepicker.localisations.day-names.wednesday"),a.default.getText("ajs.datepicker.localisations.day-names.thursday"),a.default.getText("ajs.datepicker.localisations.day-names.friday"),a.default.getText("ajs.datepicker.localisations.day-names.saturday")],dayNamesMin:[a.default.getText("ajs.datepicker.localisations.day-names-min.sunday"),a.default.getText("ajs.datepicker.localisations.day-names-min.monday"),
a.default.getText("ajs.datepicker.localisations.day-names-min.tuesday"),a.default.getText("ajs.datepicker.localisations.day-names-min.wednesday"),a.default.getText("ajs.datepicker.localisations.day-names-min.thursday"),a.default.getText("ajs.datepicker.localisations.day-names-min.friday"),a.default.getText("ajs.datepicker.localisations.day-names-min.saturday")],firstDay:a.default.getText("ajs.datepicker.localisations.first-day"),isRTL:"true"===a.default.getText("ajs.datepicker.localisations.is-RTL")?
!0:!1,monthNames:[a.default.getText("ajs.datepicker.localisations.month-names.january"),a.default.getText("ajs.datepicker.localisations.month-names.february"),a.default.getText("ajs.datepicker.localisations.month-names.march"),a.default.getText("ajs.datepicker.localisations.month-names.april"),a.default.getText("ajs.datepicker.localisations.month-names.may"),a.default.getText("ajs.datepicker.localisations.month-names.june"),a.default.getText("ajs.datepicker.localisations.month-names.july"),a.default.getText("ajs.datepicker.localisations.month-names.august"),
a.default.getText("ajs.datepicker.localisations.month-names.september"),a.default.getText("ajs.datepicker.localisations.month-names.october"),a.default.getText("ajs.datepicker.localisations.month-names.november"),a.default.getText("ajs.datepicker.localisations.month-names.december")],showMonthAfterYear:"true"===a.default.getText("ajs.datepicker.localisations.show-month-after-year")?!0:!1,yearSuffix:a.default.getText("ajs.datepicker.localisations.year-suffix")};e.default.fn.datePicker=function(a){return new f(this,
a)};(0,i.default)("DatePicker",f);h.default=f;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-datepicker', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
("undefined"===typeof window?global:window).__716e1ce77ba41179f2e03684627da84b=function(){(function(d){function B(){this.debug=!1;this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass=
"ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "),weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};d.extend(this._defaults,this.regional[""]);this.dpDiv=C(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function C(a){return a.bind("mouseout",
function(a){a=d(a.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");a.length&&a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!d.datepicker._isDisabledDatepicker(D.inline?a.parent()[0]:D.input[0])&&b.length)b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
b.addClass("ui-state-hover"),b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover"),b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")})}function z(a,b){d.extend(a,b);for(var c in b)if(null==b[c]||void 0==b[c])a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.24"}});var x=(new Date).getTime(),D;d.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){z(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null,e;for(e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f="div"==e||"span"==e;a.id||(this.uuid+=1,a.id="dp"+this.uuid);var j=this._newInst(d(a),f);j.settings=d.extend({},b||{},c||{});"input"==e?this._connectDatepicker(a,j):f&&this._inlineDatepicker(a,j)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:C(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),d.data(a,"datepicker",b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();c&&(b.append=d('<span class="'+this._appendClass+'">'+c+"</span>"),a[e?"before":"after"](b.append));a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");("focus"==
c||"both"==c)&&a.focus(this._showDatepicker);if("button"==c||"both"==c){var c=this._get(b,"buttonText"),f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(""==f?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){if(d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0])d.datepicker._hideDatepicker();
else{d.datepicker._datepickerShowing&&d.datepicker._lastInput!=a[0]&&d.datepicker._hideDatepicker();d.datepicker._showDatepicker(a[0])}return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){for(var b=0,c=0,d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":
"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),d.data(a,"datepicker",b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),
b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;a||(this.uuid+=1,this._dialogInput=d('<input type="text" id="dp'+this.uuid+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),d("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},d.data(this._dialogInput[0],"datepicker",a));z(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;this._pos||(this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]);this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");"input"==e?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==e||"span"==e)&&b.removeClass(this.markerClassName).empty()}},
_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().removeClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");this._disabledInputs=d.map(this._disabledInputs,
function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().addClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled",
"disabled");this._disabledInputs=d.map(this._disabledInputs,function(b){return b==a?null:b});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(2==arguments.length&&"string"==typeof b)return"defaults"==
b?d.extend({},d.datepicker._defaults):e?"all"==b?d.extend({},e.settings):this._get(e,b):null;var f=b||{};"string"==typeof b&&(f={},f[b]=c);if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,!0),j=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");z(e.settings,f);null!==j&&(void 0!==f.dateFormat&&void 0===f.minDate)&&(e.settings.minDate=this._formatDate(e,j));null!==g&&(void 0!==f.dateFormat&&void 0===f.maxDate)&&(e.settings.maxDate=this._formatDate(e,g));this._attachments(d(a),
e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=
d.datepicker._getInst(a.target),c=!0,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=!1;break;case 13:return c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv),c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]),(a=d.datepicker._get(b,"onSelect"))?(c=d.datepicker._formatDate(b),a.apply(b.input?b.input[0]:null,[c,b])):d.datepicker._hideDatepicker(),
!1;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;
break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?1:-1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,
a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,7,"D");c=a.ctrlKey||a.metaKey;break;default:c=!1}else 36==a.keyCode&&a.ctrlKey?d.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){var b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat")),c=String.fromCharCode(void 0==
a.charCode?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||" ">c||!b||-1<b.indexOf(c)}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a)))d.datepicker._setDateFromField(a),d.datepicker._updateAlternate(a),d.datepicker._updateDatepicker(a)}catch(b){d.datepicker.log(b)}return!0},_showDatepicker:function(a){a=a.target||a;"input"!=a.nodeName.toLowerCase()&&
(a=d("input",a.parentNode)[0]);if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&(d.datepicker._curInst.dpDiv.stop(!0,!0),b&&d.datepicker._datepickerShowing&&d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));var c=d.datepicker._get(b,"beforeShow"),c=c?c.apply(a,[a,b]):{};if(!1!==c){z(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);d.datepicker._inDialog&&
(a.value="");d.datepicker._pos||(d.datepicker._pos=d.datepicker._findPos(a),d.datepicker._pos[1]+=a.offsetHeight);var e=!1;d(a).parents().each(function(){e=e|d(this).css("position")=="fixed";return!e});e&&d.browser.opera&&(d.datepicker._pos[0]-=document.documentElement.scrollLeft,d.datepicker._pos[1]-=document.documentElement.scrollTop);c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){var c=d.datepicker._get(b,"showAnim"),f=d.datepicker._get(b,"duration"),h=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(a.length){var c=d.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
!0;if(d.effects&&d.effects[c])b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h);else b.dpDiv[c||"show"](c?f:null,h);(!c||!f)&&h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);D=a;a.dpDiv.empty().append(this._generateHTML(a));this._attachHandlers(a);var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),
height:a.dpDiv.outerHeight()});a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");1<c&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(1!=b[0]||1!=b[1]?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&(d.datepicker._datepickerShowing&&
a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement)&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=
a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,j=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+(c?0:d(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:d(document).scrollTop());b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+j?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,
b.top+f>i&&i>f?Math.abs(f+j):0);return b},_findPos:function(a){for(var b=this._getInst(a),b=this._get(b,"isRTL");a&&("hidden"==a.type||1!=a.nodeType||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(b&&!(a&&b!=d.data(a,"datepicker"))&&this._datepickerShowing){var a=this._get(b,"showAnim"),c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b)};if(d.effects&&d.effects[a])b.dpDiv.hide(a,
d.datepicker._get(b,"showOptions"),c,e);else b.dpDiv["slideDown"==a?"slideUp":"fadeIn"==a?"fadeOut":"hide"](a?c:null,e);a||e();this._datepickerShowing=!1;(a=this._get(b,"onClose"))&&a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._lastInput=null;this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),d.blockUI&&(d.unblockUI(),d("body").append(this.dpDiv)));this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){var a=d(a.target),b=d.datepicker._getInst(a[0]);(a[0].id!=d.datepicker._mainDivId&&0==a.parents("#"+d.datepicker._mainDivId).length&&!a.hasClass(d.datepicker.markerClassName)&&!a.closest("."+d.datepicker._triggerClass).length&&d.datepicker._datepickerShowing&&(!d.datepicker._inDialog||!d.blockUI)||a.hasClass(d.datepicker.markerClassName)&&d.datepicker._curInst!=b)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var a=d(a),e=this._getInst(a[0]);
this._isDisabledDatepicker(a[0])||(this._adjustInstDate(e,b+("M"==c?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var a=d(a),b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay)b.selectedDay=b.currentDay,b.drawMonth=b.selectedMonth=b.currentMonth,b.drawYear=b.selectedYear=b.currentYear;else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},
_selectMonthYear:function(a,b,c){var a=d(a),e=this._getInst(a[0]);e["selected"+("M"==c?"Month":"Year")]=e["draw"+("M"==c?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);!d(e).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(f[0])&&(f=this._getInst(f[0]),f.selectedDay=f.currentDay=d("a",e).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,
f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){var c=d(a),c=this._getInst(c[0]),b=null!=b?b:this._formatDate(c);c.input&&c.input.val(b);this._updateAlternate(c);var e=this._get(c,"onSelect");e?e.apply(c.input?c.input[0]:null,[b,c]):c.input&&c.input.trigger("change");c.inline?this._updateDatepicker(c):(this._hideDatepicker(),this._lastInput=c.input[0],"object"!=typeof c.input[0]&&c.input.focus(),this._lastInput=
null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[0<a&&6>a,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(null==
a||null==b)throw"Invalid arguments";b="object"==typeof b?b.toString():b+"";if(""==b)return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,j=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,i=c=-1,p=-1,r=-1,k=!1,m=function(b){(b=y+1<a.length&&
a.charAt(y+1)==b)&&y++;return b},l=function(a){var c=m(a),a=RegExp("^\\d{1,"+("@"==a?14:"!"==a?20:"y"==a&&c?4:"o"==a?3:2)+"}"),a=b.substring(u).match(a);if(!a)throw"Missing number at position "+u;u+=a[0].length;return parseInt(a[0],10)},n=function(a,c,e){var a=d.map(m(a)?e:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;d.each(a,function(a,c){var d=c[1];if(b.substr(u,d.length).toLowerCase()==d.toLowerCase())return f=c[0],u+=d.length,!1});if(-1!=f)return f+
1;throw"Unknown name at position "+u;},s=function(){if(b.charAt(u)!=a.charAt(y))throw"Unexpected literal at position "+u;u++},u=0,y=0;y<a.length;y++)if(k)"'"==a.charAt(y)&&!m("'")?k=!1:s();else switch(a.charAt(y)){case "d":p=l("d");break;case "D":n("D",f,h);break;case "o":r=l("o");break;case "m":i=l("m");break;case "M":i=n("M",j,g);break;case "y":c=l("y");break;case "@":var v=new Date(l("@")),c=v.getFullYear(),i=v.getMonth()+1,p=v.getDate();break;case "!":v=new Date((l("!")-this._ticksTo1970)/1E4);
c=v.getFullYear();i=v.getMonth()+1;p=v.getDate();break;case "'":m("'")?s():k=!0;break;default:s()}if(u<b.length)throw"Extra/unparsed characters found in date: "+b.substring(u);-1==c?c=(new Date).getFullYear():100>c&&(c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100));if(-1<r){i=1;p=r;do{e=this._getDaysInMonth(c,i-1);if(p<=e)break;i++;p-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,i-1,p));if(v.getFullYear()!=c||v.getMonth()+1!=i||v.getDate()!=p)throw"Invalid date";return v},
ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864E9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,
c=(c?c.monthNames:null)||this._defaults.monthNames,j=function(b){(b=r+1<a.length&&a.charAt(r+1)==b)&&r++;return b},g=function(a,b,c){b=""+b;if(j(a))for(;b.length<c;)b="0"+b;return b},i="",p=!1;if(b)for(var r=0;r<a.length;r++)if(p)"'"==a.charAt(r)&&!j("'")?p=!1:i+=a.charAt(r);else switch(a.charAt(r)){case "d":i+=g("d",b.getDate(),2);break;case "D":var k;k=b.getDay();var m=d,l=f;k=j("D")?l[k]:m[k];i+=k;break;case "o":i+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":i+=g("m",b.getMonth()+1,2);break;case "M":k=b.getMonth();m=h;l=c;k=j("M")?l[k]:m[k];i+=k;break;case "y":i+=j("y")?b.getFullYear():(10>b.getYear()%100?"0":"")+b.getYear()%100;break;case "@":i+=b.getTime();break;case "!":i+=1E4*b.getTime()+this._ticksTo1970;break;case "'":j("'")?i+="'":p=!0;break;default:i+=a.charAt(r)}return i},_possibleChars:function(a){for(var b="",c=!1,d=function(b){(b=f+1<a.length&&a.charAt(f+1)==b)&&f++;return b},
f=0;f<a.length;f++)if(c)"'"==a.charAt(f)&&!d("'")?c=!1:b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var j=
this._getFormatConfig(a);try{f=this.parseDate(c,d,j)||h}catch(g){this.log(g),d=b?"":d}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=d?f.getDate():0;a.currentMonth=d?f.getMonth():0;a.currentYear=d?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){if(null==b||""===b)b=c;else{var e;if("string"==
typeof b)a:{try{e=d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),b,d.datepicker._getFormatConfig(a));break a}catch(f){}var h=(b.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,a=h.getFullYear();e=h.getMonth();for(var h=h.getDate(),j=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,g=j.exec(b);g;){switch(g[2]||"d"){case "d":case "D":h+=parseInt(g[1],10);break;case "w":case "W":h+=7*parseInt(g[1],10);break;case "m":case "M":e+=parseInt(g[1],10);h=Math.min(h,d.datepicker._getDaysInMonth(a,
e));break;case "y":case "Y":a+=parseInt(g[1],10),h=Math.min(h,d.datepicker._getDaysInMonth(a,e))}g=j.exec(b)}e=new Date(a,e,h)}else"number"==typeof b?isNaN(b)?b=c:(a=new Date,a.setDate(a.getDate()+b),b=a):b=new Date(b.getTime()),e=b;b=e}if(b=b&&"Invalid Date"==b.toString()?c:b)b.setHours(0),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},_setDate:function(a,
b,c){var d=!b,f=a.selectedMonth,h=a.selectedYear,b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();(f!=a.selectedMonth||h!=a.selectedYear)&&!c&&this._notifyChange(a);this._adjustInstDate(a);a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&""==a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,
a.currentMonth,a.currentDay))},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){d(this).bind(this.getAttribute("data-event"),{prev:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+x].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+x].datepicker._gotoToday(c)},selectDay:function(){window["DP_jQuery_"+
x].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"M");return!1},selectYear:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"Y");return!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date,b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),
f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),j=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),p=1!=j[0]||1!=j[1],r=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),g=a.drawMonth-g,l=a.drawYear;0>g&&(g+=12,l--);if(m)for(var n=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-j[0]*j[1]+1,m.getDate())),
n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(l,g,1))>n;)g--,0>g&&(g=11,l--);a.drawMonth=g;a.drawYear=l;var n=this._get(a,"prevText"),n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(l,g-i,1)),this._getFormatConfig(a)),n=this._canAdjustMonth(a,-1,l,g)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+
n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>",s=this._get(a,"nextText"),s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(l,g+i,1)),this._getFormatConfig(a)),f=this._canAdjustMonth(a,1,l,g)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+s+"</span></a>",i=this._get(a,"currentText"),s=this._get(a,"gotoCurrent")&&a.currentDay?r:b,i=!h?i:this.formatDate(i,s,this._getFormatConfig(a)),h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>":"",e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+
i+"</button>":"")+(c?"":h)+"</div>":"",h=parseInt(this._get(a,"firstDay"),10),h=isNaN(h)?0:h,i=this._get(a,"showWeek"),s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var u=this._get(a,"dayNamesMin"),y=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),z=this._get(a,"showOtherMonths"),D=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var B=this._getDefaultDate(a),E="",F=0;F<j[0];F++){var I="";this.maxRows=4;for(var G=0;G<j[1];G++){var C=
this._daylightSavingAdjust(new Date(l,g,a.selectedDay)),t=" ui-corner-all",q="";if(p){q+='<div class="ui-datepicker-group';if(1<j[1])switch(G){case 0:q+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case j[1]-1:q+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:q+=" ui-datepicker-group-middle",t=""}q+='">'}for(var q=q+('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&0==F?c?f:n:"")+(/all|right/.test(t)&&
0==F?c?n:f:"")+this._generateMonthYearHeader(a,g,l,k,m,0<F||0<G,y,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>'),w=i?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"",t=0;7>t;t++)var o=(t+h)%7,w=w+("<th"+(5<=(t+h+6)%7?' class="ui-datepicker-week-end"':"")+'><span title="'+s[o]+'">'+u[o]+"</span></th>");q+=w+"</tr></thead><tbody>";w=this._getDaysInMonth(l,g);l==a.selectedYear&&g==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,w));t=(this._getFirstDayOfMonth(l,
g)-h+7)%7;w=Math.ceil((t+w)/7);this.maxRows=w=p?this.maxRows>w?this.maxRows:w:w;for(var o=this._daylightSavingAdjust(new Date(l,g,1-t)),L=0;L<w;L++){for(var q=q+"<tr>",J=!i?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(o)+"</td>",t=0;7>t;t++){var H=x?x.apply(a.input?a.input[0]:null,[o]):[!0,""],A=o.getMonth()!=g,K=A&&!D||!H[0]||k&&o<k||m&&o>m,J=J+('<td class="'+(5<=(t+h+6)%7?" ui-datepicker-week-end":"")+(A?" ui-datepicker-other-month":"")+(o.getTime()==C.getTime()&&g==a.selectedMonth&&
a._keyEvent||B.getTime()==o.getTime()&&B.getTime()==C.getTime()?" "+this._dayOverClass:"")+(K?" "+this._unselectableClass+" ui-state-disabled":"")+(A&&!z?"":" "+H[1]+(o.getTime()==r.getTime()?" "+this._currentClass:"")+(o.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!A||z)&&H[2]?' title="'+H[2]+'"':"")+(K?"":' data-handler="selectDay" data-event="click" data-month="'+o.getMonth()+'" data-year="'+o.getFullYear()+'"')+">"+(A&&!z?"&#xa0;":K?'<span class="ui-state-default">'+o.getDate()+"</span>":
'<a class="ui-state-default'+(o.getTime()==b.getTime()?" ui-state-highlight":"")+(o.getTime()==r.getTime()?" ui-state-active":"")+(A?" ui-priority-secondary":"")+'" href="#">'+o.getDate()+"</a>")+"</td>");o.setDate(o.getDate()+1);o=this._daylightSavingAdjust(o)}q+=J+"</tr>"}g++;11<g&&(g=0,l++);q+="</tbody></table>"+(p?"</div>"+(0<j[0]&&G==j[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");I+=q}E+=I}E+=e+(d.browser.msie&&7>parseInt(d.browser.version,10)&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=!1;return E},_generateMonthYearHeader:function(a,b,c,d,f,h,j,g){var i=this._get(a,"changeMonth"),p=this._get(a,"changeYear"),r=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',m="";if(h||!i)m+='<span class="ui-datepicker-month">'+j[b]+"</span>";else{for(var j=d&&d.getFullYear()==c,l=f&&f.getFullYear()==c,m=m+'<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">',n=0;12>n;n++)if((!j||n>=d.getMonth())&&(!l||n<=f.getMonth()))m+='<option value="'+
n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";m+="</select>"}r||(k+=m+(h||!i||!p?"&#xa0;":""));if(!a.yearshtml)if(a.yearshtml="",h||!p)k+='<span class="ui-datepicker-year">'+c+"</span>";else{var g=this._get(a,"yearRange").split(":"),s=(new Date).getFullYear(),j=function(a){a=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?s+parseInt(a,10):parseInt(a,10);return isNaN(a)?s:a},b=j(g[0]),g=Math.max(b,j(g[1]||"")),b=d?Math.max(b,d.getFullYear()):b,g=f?Math.min(g,f.getFullYear()):
g;for(a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}k+=this._get(a,"yearSuffix");r&&(k+=(h||!i||!p?"&#xa0;":"")+m);return k+"</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"==c?b:0),f=a.drawMonth+("M"==c?b:0),b=Math.min(a.selectedDay,this._getDaysInMonth(d,f))+("D"==c?b:0),d=this._restrictMinMax(a,
this._daylightSavingAdjust(new Date(d,f,b)));a.selectedDay=d.getDate();a.drawMonth=a.selectedMonth=d.getMonth();a.drawYear=a.selectedYear=d.getFullYear();("M"==c||"Y"==c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),c=c&&b<c?c:b;return d&&c>d?d:c},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,
"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var f=this._getNumberOfMonths(a),c=this._daylightSavingAdjust(new Date(c,d+(0>b?b:f[0]*f[1]),1));0>b&&c.setDate(this._getDaysInMonth(c.getFullYear(),
c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff"),b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,
"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);b=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;d.datepicker.initialized||(d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv),
d.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return"string"==typeof a&&("isDisabled"==a||"getDate"==a||"widget"==a)||"option"==a&&2==arguments.length&&"string"==typeof arguments[1]?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new B;d.datepicker.initialized=!1;d.datepicker.uuid=
(new Date).getTime();d.datepicker.version="1.8.24";window["DP_jQuery_"+x]=d})(jQuery);return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml("\u5229\u7528\u4f1a\u8bae\u7eaa\u8981\u4f60\u80fd......") + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml("\u53d1\u5e03\u4f1a\u8bae\u65e5\u7a0b") + '</h3><p>' + soy.$$escapeHtml("\u5206\u53d1\u4f1a\u8bae\u8bae\u7a0b\u5e76\u4fdd\u6301\u4f1a\u8bae\u96c6\u4e2d\u3002") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("\u8bb0\u5f55\u4f1a\u8bae\u7eaa\u8981") + '</h3><p>' + soy.$$escapeHtml("\u505a\u8bb0\u5f55\u5e76\u8ba9\u4ed6\u4eec\u5bf9\u6240\u6709\u4eba\u53ef\u89c1\u3002") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("\u521b\u5efa\u53ca\u5206\u914d\u4efb\u52a1") + '</h3><p>' + soy.$$escapeHtml("\u5728\u4f1a\u540e\u7ed9\u4e0e\u4f1a\u8005\u5206\u914d\u5de5\u4f5c\u6761\u76ee\u3002") + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@\u63d0\u53ca\u4e00\u4e2a\u53c2\u4f1a\u4eba\u5458\uff0c\u4ed6/\u5979\u5c06\u6536\u5230\u90ae\u4ef6\u901a\u77e5\u3002") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@\u63d0\u53ca\u4e00\u4e2a\u53c2\u4f1a\u4eba\u5458\uff0c\u4ed6/\u5979\u5c06\u6536\u5230\u90ae\u4ef6\u901a\u77e5\u3002") + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-questions:create-content-resources', location = 'widget/createcontent/ask-question.js' */
(function(b){function a(){var e="com.atlassian.confluence.plugins.confluence-questions:ask-a-question-blueprint-webitem";Confluence.Blueprint.setDirectCallback(e,function(g,f){f.finalUrl=Confluence.getContextPath()+"/questions/ask?src=createdialog"});function d(i,h){var g;if(h){if(h.config){g=h.config}else{if(h.item){g=h.item.data()}}}var f=g&&g.itemModuleCompleteKey||null;b(".create-dialog-body .space-select").select2("enable",f!==e)}AJS.bind(Confluence.Dialogs.Events.ITEM_SELECTED,d)}function c(){var d="com.atlassian.confluence.plugins.confluence-questions:ask-a-space-question-blueprint-webitem";Confluence.Blueprint.setDirectCallback(d,function(g,f){f.finalUrl=Confluence.getContextPath()+"/display/"+f.spaceKey+"/questions/ask?src=createdialog"})}a();c()}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-questions:util-resources', location = 'util/util.soy' */
// This file was automatically generated from util.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CQ.Templates.util.
 */

if (typeof CQ == 'undefined') { var CQ = {}; }
if (typeof CQ.Templates == 'undefined') { CQ.Templates = {}; }
if (typeof CQ.Templates.util == 'undefined') { CQ.Templates.util = {}; }


CQ.Templates.util.metaData = function(opt_data, opt_ignored, opt_ijData) {
  return '' + CQ.Templates.util.meta({prefix: 'ajs-', meta: opt_data.metaData}, null, opt_ijData);
};
if (goog.DEBUG) {
  CQ.Templates.util.metaData.soyTemplateName = 'CQ.Templates.util.metaData';
}


CQ.Templates.util.meta = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.meta) {
    var datumList9 = soy.$$getMapKeys(opt_data.meta);
    var datumListLen9 = datumList9.length;
    for (var datumIndex9 = 0; datumIndex9 < datumListLen9; datumIndex9++) {
      var datumData9 = datumList9[datumIndex9];
      output += '<meta name="' + ((opt_data.prefix) ? soy.$$escapeHtml(opt_data.prefix) : '') + soy.$$escapeHtml(datumData9) + '" content="' + soy.$$escapeHtml(opt_data.meta[datumData9]) + '">';
    }
  }
  return output;
};
if (goog.DEBUG) {
  CQ.Templates.util.meta.soyTemplateName = 'CQ.Templates.util.meta';
}


CQ.Templates.util.actionErrors = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.actionErrors && opt_data.actionErrors.length > 0) {
    var param25 = '<ul>';
    var errorList27 = opt_data.actionErrors;
    var errorListLen27 = errorList27.length;
    for (var errorIndex27 = 0; errorIndex27 < errorListLen27; errorIndex27++) {
      var errorData27 = errorList27[errorIndex27];
      param25 += '<li>' + soy.$$escapeHtml(errorData27) + '</li>';
    }
    param25 += '</ul>';
    output += aui.message.warning({titleContent: "\u53d1\u751f\u5982\u4e0b\u9519\u8bef\uff1a", closeable: 'true', id: 'messageIDattribute', content: param25}, null, opt_ijData);
  }
  return output;
};
if (goog.DEBUG) {
  CQ.Templates.util.actionErrors.soyTemplateName = 'CQ.Templates.util.actionErrors';
}


CQ.Templates.util.fieldErrors = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  if (opt_ijData.fieldErrors && opt_ijData.fieldErrors[opt_data.field]) {
    var errorList37 = opt_ijData.fieldErrors[opt_data.field];
    var errorListLen37 = errorList37.length;
    for (var errorIndex37 = 0; errorIndex37 < errorListLen37; errorIndex37++) {
      var errorData37 = errorList37[errorIndex37];
      output += aui.form.fieldError({message: " + errorData37 + "}, null, opt_ijData);
    }
  }
  return output;
};
if (goog.DEBUG) {
  CQ.Templates.util.fieldErrors.soyTemplateName = 'CQ.Templates.util.fieldErrors';
}


CQ.Templates.util.dataAttributes = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.attributes) {
    var keyList44 = soy.$$getMapKeys(opt_data.attributes);
    var keyListLen44 = keyList44.length;
    for (var keyIndex44 = 0; keyIndex44 < keyListLen44; keyIndex44++) {
      var keyData44 = keyList44[keyIndex44];
      output += (keyData44.indexOf('data-') != -1) ? soy.$$escapeHtml(keyData44) + '="' + soy.$$escapeHtml(opt_data.attributes[keyData44]) + '"' : '';
    }
  }
  return output;
};
if (goog.DEBUG) {
  CQ.Templates.util.dataAttributes.soyTemplateName = 'CQ.Templates.util.dataAttributes';
}


CQ.Templates.util.contentMeta = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="cq-content-meta ' + ((opt_data.extraClasses) ? soy.$$escapeHtml(opt_data.extraClasses) : '') + '"><ul>';
  var itemList58 = opt_data.items;
  var itemListLen58 = itemList58.length;
  for (var itemIndex58 = 0; itemIndex58 < itemListLen58; itemIndex58++) {
    var itemData58 = itemList58[itemIndex58];
    output += '<li class="' + ((itemData58.styleClass) ? 'cq-meta-li-' + soy.$$escapeHtml(itemData58.styleClass) : '') + ' ' + ((itemData58.id) ? 'cq-meta-li-' + soy.$$escapeHtml(itemData58.id) : '') + '"><a ' + ((itemData58.id) ? 'id="' + soy.$$escapeHtml(itemData58.id) + '"' : '') + ' href="' + soy.$$escapeHtml(itemData58.url) + '" class="' + soy.$$escapeHtml(itemData58.styleClass) + '"' + CQ.Templates.util.dataAttributes({attributes: itemData58.params}, null, opt_ijData) + '>' + ((itemData58.params && itemData58.params['iconClass']) ? '<span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(itemData58.params['iconClass']) + '"></span>&nbsp;' : '') + soy.$$escapeHtml(itemData58.label) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  CQ.Templates.util.contentMeta.soyTemplateName = 'CQ.Templates.util.contentMeta';
}


CQ.Templates.util.compactInteger = function(opt_data, opt_ignored, opt_ijData) {
  return '' + ((opt_data.value > 999) ? '<div class="' + soy.$$escapeHtml(opt_data.extraClasses) + ' cq-tooltip" data-value="' + soy.$$escapeHtml(opt_data.value) + '" title="' + soy.$$escapeHtml(opt_data.value) + '">' + soy.$$escapeHtml(require('cq/util/util').formatInteger(opt_data.value)) + '</div>' : '<div class="' + soy.$$escapeHtml(opt_data.extraClasses) + '" data-value="' + soy.$$escapeHtml(opt_data.value) + '">' + soy.$$escapeHtml(opt_data.value) + '</div>');
};
if (goog.DEBUG) {
  CQ.Templates.util.compactInteger.soyTemplateName = 'CQ.Templates.util.compactInteger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=j("username"),e=j("userFullName");var c=e.split("+");e=c.join(" ");var g=d("#system-content-items");var k=d("#content-metadata-page-restrictions.restricted").length!==0;if(!g.length||!k||!j("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(m,l,n){m.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));m.on("click",".aui-button.grant-access",function(q){q.stopPropagation();var p=m.find(".actions-result");p.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var o="",r=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(t,u,s){if(s.status==202){o="\u5df2\u7ecf\u6388\u6743\u7528\u6237\u8bbf\u95ee\u3002"}else{o="\u8bbf\u95ee\u6388\u6743\u5df2\u7ecf\u901a\u77e5\uff0c\u5c06\u4f1a\u4e3a\u7528\u6237\u53d1\u9001\u901a\u77e5\u3002"}},error:function(s){r=false;if(s.status==412){o="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(s.status==502){o="Access was granted, but an unexpected error happened while sending the notification."}else{o="Sorry, there was an unexpected error while granting access."}}},complete:function(s){b.replaceWith(d(Confluence.Grant.Access.result({success:r,message:o})));setTimeout(function(){i.hide()},6000)}})});m.on("click",".aui-button.deny-access",function(o){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});n();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function j(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+l+"=([^&#]*)"),m=n.exec(location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_ignored) {
  var output = '<div id="request-access">';
  if (opt_data.success) {
    var usernameLink__soy6 = '' + Confluence.Request.Access.usernameLink({user: opt_data.recipient});
    output += '<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">' + soy.$$filterNoAutoescape(AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6)) + '</p>';
  } else {
    output += '<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin.") + '</p>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Request.Access.result.soyTemplateName = 'Confluence.Request.Access.result';
}


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml("Loading, please wait") + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  output += '<h2 class="grant-access-title">' + soy.$$escapeHtml("Access request") + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(AJS.format("{0} wants to view this page.",usernameLink__soy4)) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml("\u6388\u6743\u8bbf\u95ee") + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml("\u963b\u6b62") + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.result = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-' + ((opt_data.success) ? 'approve' : 'error') + '" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.result.soyTemplateName = 'Confluence.Grant.Access.result';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-hide-traditional', location = 'jscripts/add-comment-hider.js' */
define("confluence-quick-edit/add-comment-hider",[],function(){return function(a){a("#comments-actions").hide()}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/add-comment-hider",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};