/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("progress",{mode:"init",defaults:{bootstrap:!0,onUpdate:function(n){var per=(n-this.min)/(this.max-this.min);.5>per?this.$target.addClass("progress-bar-success").removeClass("progress-bar-warning progress-bar-danger"):per>=.5&&.8>per?this.$target.addClass("progress-bar-warning").removeClass("progress-bar-success progress-bar-danger"):this.$target.addClass("progress-bar-danger").removeClass("progress-bar-success progress-bar-warning")},labelCallback:function(n){var label,labelType=this.$element.data("labeltype");if("percentage"===labelType){var percentage=this.getPercentage(n);label=percentage+"%"}else if("steps"===labelType){var total=this.$element.data("totalsteps");total||(total=10);var step=Math.round(total*(n-this.min)/(this.max-this.min));label=step+" / "+total}else label=n;return this.$element.parent().hasClass("contextual-progress")&&this.$element.parent().find(".progress-label").html(label),label}},init:function(context){if($.fn.asProgress){var defaults=$.components.getDefaults("progress");$('[data-plugin="progress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend({},defaults,options),$this.asProgress(options)})}}});
