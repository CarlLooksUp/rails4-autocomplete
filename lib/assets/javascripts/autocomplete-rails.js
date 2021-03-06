/*
* Unobtrusive autocomplete
*
* To use it, you just have to include the HTML attribute autocomplete
* with the autocomplete URL as the value
*
*   Example:
*       <input type="text" data-autocomplete="/url/to/autocomplete">
*
* Optionally, you can use a jQuery selector to specify a field that can
* be updated with the element id whenever you find a matching value
*
*   Example:
*       <input type="text" data-autocomplete="/url/to/autocomplete" data-id-element="#id_field">
*/
!function(t){var e={}
t.fn.railsAutocomplete=function(){var a=function(){this.railsAutoCompleter||(this.railsAutoCompleter=new t.railsAutocomplete(this))}
return e[this.selector.replace("#","")]=arguments[0],void 0!==t.fn.on?$(document).on("focus",this.selector,a):this.live("focus",a)},t.railsAutocomplete=function(t){_e=t,this.init(_e)},t.railsAutocomplete.fn=t.railsAutocomplete.prototype={railsAutocomplete:"0.0.2"},t.railsAutocomplete.fn.extend=t.railsAutocomplete.extend=t.extend,t.railsAutocomplete.fn.extend({init:function(a){function i(t){return t.split(a.delimiter)}function n(t){return i(t).pop().replace(/^\s+/,"")}a.delimiter=t(a).attr("data-delimiter")||null,t(a).autocomplete($.extend({source:function(e,i){t.getJSON(t(a).attr("data-autocomplete"),{term:n(e.term),scope:t(a).data("scope")},function(){if(0==arguments[0].length){var e="No existing matches"
void 0!==t(a).attr("data-autocomplete-label")&&(e=t(a).attr("data-autocomplete-label")),arguments[0]=[],arguments[0][0]={id:"",label:e}}t(arguments[0]).each(function(e,i){var n={}
n[i.id]=i,t(a).data(n)}),i.apply(null,arguments)})},change:function(e,a){if(""!=t(t(this).attr("data-id-element")).val()){t(t(this).attr("data-id-element")).val(a.item?a.item.id:"")
var i=!1
t(this).attr("data-update-elements")&&(i=t.parseJSON(t(this).attr("data-update-elements")))
var n=a.item?t(this).data(a.item.id.toString()):{}
if(!i||""!=t(i.id).val())for(var r in i)t(i[r]).val(a.item?n[r]:"")}},search:function(){var e=n(this.value)
return e.length<t(this).attr("data-minLength")?!1:void 0},focus:function(){return!1},select:function(e,n){var r=i(this.value)
if(r.pop(),""!=n.item.id&&r.push(n.item.value),null!=a.delimiter)r.push(""),this.value=r.join(a.delimiter)
else if(this.value=r.join(""),t(this).attr("data-id-element")&&t(t(this).attr("data-id-element")).val(n.item.id),t(this).attr("data-update-elements")){var l=t(this).data(n.item.id.toString()),o=t.parseJSON(t(this).attr("data-update-elements"))
for(var u in o)t(o[u]).val(l[u])}var s=this.value
return t(this).bind("keyup.clearId",function(){t(this).val().trim()!=s.trim()&&(t(t(this).attr("data-id-element")).val(""),t(this).unbind("keyup.clearId"))}),t(a).trigger("railsAutocomplete.select",n),!1}},e[a.id]))}}),t(document).ready(function(){t("input[data-autocomplete]").railsAutocomplete()})}(jQuery)
