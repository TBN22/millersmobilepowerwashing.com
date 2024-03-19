! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function(e, t) {
    class i extends elementorModules.frontend.handlers.Base {
        bindEvents() {
            this.$element.data("stickyTop", this.$element.offset().top), this.runSticky()
        }
        runSticky() {
            if (!this.$element.hasClass("jkit-sticky-element--enabled")) return;
            const e = this,
                t = jQuery,
                i = this.$element,
                s = this.getElementSettings(),
                n = i.hasClass("jkit-sticky-element-on--down") ? "down" : i.hasClass("jkit-sticky-element-on--up") ? "up" : "both",
                o = i.hasClass("jkit-sticky-position--fixed") ? "fixed" : "sticky";
            let r = i.data("stickyTop"),
                c = 0;
            e.stickyTop = r, e.width = i.outerWidth(), e.height = i.outerHeight(), e.margin = i.css("margin"), "fixed" === o ? (i.wrap('<div class="wrapper-sticky-fixed"></div>'), i.parent().css("width", e.width), i.parent().css("height", e.height), i.parent().css("margin", e.margin), i.css("width", e.width), i.css("height", e.height), i.css("margin", e.margin)) : i.parent().hasClass("wrapper-sticky-fixed") && i.unwrap(), t(window).on("load resize scroll", i, (function(d) {
                const a = t("body").attr("data-elementor-device-mode"),
                    l = t(this).scrollTop();
                let h = !0;
                if ("fixed" === o && "resize" === d.type && (i.parent().hasClass("wrapper-sticky-fixed") && (i.unwrap(), i.css("position", "relative"), i.removeClass("sticky-pinned")), i.css("width", ""), i.css("height", ""), i.css("margin", ""), e.width = i.outerWidth(), e.height = i.outerHeight(), e.margin = i.css("margin"), i.wrap('<div class="wrapper-sticky-fixed"></div>'), i.parent().css("width", e.width), i.parent().css("height", e.height), i.parent().css("margin", e.margin), i.css("width", e.width), i.css("height", e.height), i.css("margin", e.margin)), "string" == typeof s.jkit_sticky_device && (s.jkit_sticky_device = [s.jkit_sticky_device]), Object.values(s.jkit_sticky_device).forEach((function(e) {
                        a !== e || (h = !1)
                    })), h) return i.css("position", "relative"), i.removeClass("sticky-pinned"), void(i.hasClass("elementor-column") || i.css("width", "unset"));
                const p = "down" === n ? l : l + t(this).height(),
                    k = "down" === n ? r : r + i.outerHeight(!0);
                if (!i.hasClass("sticky-pinned") && (r = i.offset().top, void 0 !== s)) {
                    if (void 0 !== s.jkit_sticky_top_position) {
                        r -= s.jkit_sticky_top_position.size;
                        const e = t("#wpadminbar");
                        e.length && (r -= e.height(), i.css("--wpadminbar-height", e.height() + "px"))
                    }
                    void 0 !== s.jkit_sticky_bottom_position && (r += s.jkit_sticky_bottom_position.size)
                }
                "down" === n && k < p || "up" === n && k > p ? (i.css("position", o), i.addClass("sticky-pinned"), e.hideOnScroll(l, c, n, d, i)) : "both" === n && "sticky" === o ? (i.css("position", o), i.addClass("sticky-pinned")) : (i.css("position", "relative"), i.removeClass("hide-sticky"), i.removeClass("sticky-pinned")), c = l
            }))
        }
        hideOnScroll(e, t, i, s, n) {
            if ("scroll" === s.type) {
                if ("down" === i) {
                    if (this.stickyTop + this.height >= t && n.hasClass("jkit-sticky-element--threshold")) return void n.removeClass("hide-sticky");
                    if (e > t && n.hasClass("jkit-sticky-element--hide-on-scroll")) return void n.addClass("hide-sticky")
                } else if ("up" === i) {
                    if (Math.abs(jQuery(window).height() - this.height - this.stickyTop + this.height) <= t && n.hasClass("jkit-sticky-element--threshold")) return void n.removeClass("hide-sticky");
                    if (e < t && n.hasClass("jkit-sticky-element--hide-on-scroll")) return void n.addClass("hide-sticky")
                }
                n.removeClass("hide-sticky")
            }
        }
        onElementChange(e) {
            -1 !== ["jkit_sticky_section", "jkit_sticky_device", "jkit_sticky_trigger", "jkit_sticky_position"].indexOf(e) && (jQuery(window).off("load resize scroll", this.$element), this.runSticky())
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        const e = e => {
            elementorFrontend.elementsHandler.addHandler(i, {
                $element: e
            })
        };
        elementorFrontend.hooks.addAction("frontend/element_ready/section", e), elementorFrontend.hooks.addAction("frontend/element_ready/column", e)
    }))
}]);