/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run()}),window.edit=function(){$(".click2edit").summernote({focus:!0})},window.save=function(){$(".click2edit").summernote("destroy")},function(){$("#exampleHint2Basic").summernote({height:100,toolbar:!1,placeholder:"type with apple, orange, watermelon and lemon",hint:{words:["apple","arange","watermelon","lemon"],match:/\b(\w{1,})$/,search:function(keyword,callback){callback($.grep(this.words,function(item){return 0===item.indexOf(keyword)}))}}})}(),function(){$("#exampleHint2Mention").summernote({height:100,toolbar:!1,hint:{mentions:["jayden","sam","alvin","david"],match:/\B@(\w*)$/,search:function(keyword,callback){callback($.grep(this.mentions,function(item){return 0==item.indexOf(keyword)}))},content:function(item){return"@"+item}}})}()}(document,window,jQuery);
