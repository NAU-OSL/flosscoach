/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("verticalTab",{mode:"init",init:function(context){$.fn.matchHeight&&$(".nav-tabs-vertical",context).each(function(){$(this).children().matchHeight()})}}),$.components.register("horizontalTab",{mode:"init",init:function(context){$.fn.responsiveHorizontalTabs&&$(".nav-tabs-horizontal",context).responsiveHorizontalTabs()}});
