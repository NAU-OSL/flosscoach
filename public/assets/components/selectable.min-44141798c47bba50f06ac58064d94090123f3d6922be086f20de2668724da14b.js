/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("selectable",{mode:"init",defaults:{allSelector:".selectable-all",itemSelector:".selectable-item",rowSelector:"tr",rowSelectable:!1,rowActiveClass:"active",onChange:null},init:function(context){if($.fn.asSelectable){var defaults=$.components.getDefaults("selectable");$('[data-plugin="selectable"], [data-selectable="selectable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asSelectable(options)})}}});
