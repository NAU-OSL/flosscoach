/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("highlight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.hightlight){$.components.getDefaults("highlight");$('[data-plugin="highlight"]',context).each(function(i,block){hljs.highlightBlock(block)})}}});
