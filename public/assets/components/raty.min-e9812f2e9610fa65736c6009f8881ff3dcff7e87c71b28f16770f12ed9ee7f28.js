/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("rating",{mode:"init",defaults:{targetKeep:!0,icon:"font",starType:"i",starOff:"icon wb-star",starOn:"icon wb-star orange-600",cancelOff:"icon wb-minus-circle",cancelOn:"icon wb-minus-circle orange-600",starHalf:"icon wb-star-half orange-500"},init:function(context){if($.fn.raty){var defaults=$.components.getDefaults("rating");$('[data-plugin="rating"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());options.hints&&(options.hints=options.hints.split(",")),$this.raty(options)})}}});
