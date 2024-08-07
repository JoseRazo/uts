(function (h, g, c, j, e, k, f) { /*! Jssor */
    new(function () {});
    var d = h.$Jease$ = {
        $Swing: function (a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        $Linear: function (a) {
            return a
        },
        $InQuad: function (a) {
            return a * a
        },
        $OutQuad: function (a) {
            return -a * (a - 2)
        },
        $InOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        },
        $InCubic: function (a) {
            return a * a * a
        },
        $OutCubic: function (a) {
            return (a -= 1) * a * a + 1
        },
        $InOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        },
        $InQuart: function (a) {
            return a * a * a * a
        },
        $OutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        },
        $InOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        },
        $InQuint: function (a) {
            return a * a * a * a * a
        },
        $OutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        },
        $InOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        },
        $InSine: function (a) {
            return 1 - c.cos(c.PI / 2 * a)
        },
        $OutSine: function (a) {
            return c.sin(c.PI / 2 * a)
        },
        $InOutSine: function (a) {
            return -1 / 2 * (c.cos(c.PI * a) - 1)
        },
        $InExpo: function (a) {
            return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
        },
        $OutExpo: function (a) {
            return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
        },
        $InOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
        },
        $InCirc: function (a) {
            return -(c.sqrt(1 - a * a) - 1)
        },
        $OutCirc: function (a) {
            return c.sqrt(1 - (a -= 1) * a)
        },
        $InOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
        },
        $InElastic: function (a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
        },
        $OutElastic: function (a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
        },
        $InOutElastic: function (a) {
            if (!a || a == 1) return a;
            var b = .45,
                d = .1125;
            return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
        },
        $InBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        $OutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        $InOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        },
        $InBounce: function (a) {
            return 1 - d.$OutBounce(1 - a)
        },
        $OutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        },
        $InOutBounce: function (a) {
            return a < 1 / 2 ? d.$InBounce(a * 2) * .5 : d.$OutBounce(a * 2 - 1) * .5 + .5
        },
        $GoBack: function (a) {
            return 1 - c.abs(2 - 1)
        },
        $InWave: function (a) {
            return 1 - c.cos(a * c.PI * 2)
        },
        $OutWave: function (a) {
            return c.sin(a * c.PI * 2)
        },
        $OutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        },
        $InJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        },
        $Early: c.ceil,
        $Late: c.floor
    };
    h.$JssorEasing$ = {
        $EaseSwing: d.$Swing,
        $EaseLinear: d.$Linear,
        $EaseInQuad: d.$InQuad,
        $EaseOutQuad: d.$OutQuad,
        $EaseInOutQuad: d.$InOutQuad,
        $EaseInCubic: d.$InCubic,
        $EaseOutCubic: d.$OutCubic,
        $EaseInOutCubic: d.$InOutCubic,
        $EaseInQuart: d.$InQuart,
        $EaseOutQuart: d.$OutQuart,
        $EaseInOutQuart: d.$InOutQuart,
        $EaseInQuint: d.$InQuint,
        $EaseOutQuint: d.$OutQuint,
        $EaseInOutQuint: d.$InOutQuint,
        $EaseInSine: d.$InSine,
        $EaseOutSine: d.$OutSine,
        $EaseInOutSine: d.$InOutSine,
        $EaseInExpo: d.$InExpo,
        $EaseOutExpo: d.$OutExpo,
        $EaseInOutExpo: d.$InOutExpo,
        $EaseInCirc: d.$InCirc,
        $EaseOutCirc: d.$OutCirc,
        $EaseInOutCirc: d.$InOutCirc,
        $EaseInElastic: d.$InElastic,
        $EaseOutElastic: d.$OutElastic,
        $EaseInOutElastic: d.$InOutElastic,
        $EaseInBack: d.$InBack,
        $EaseOutBack: d.$OutBack,
        $EaseInOutBack: d.$InOutBack,
        $EaseInBounce: d.$InBounce,
        $EaseOutBounce: d.$OutBounce,
        $EaseInOutBounce: d.$InOutBounce,
        $EaseGoBack: d.$GoBack,
        $EaseInWave: d.$InWave,
        $EaseOutWave: d.$OutWave,
        $EaseOutJump: d.$OutJump,
        $EaseInJump: d.$InJump
    };
    var b = h.$Jssor$ = new function () {
        var i = this,
            yb = /\S+/g,
            K = 1,
            ib = 2,
            lb = 3,
            kb = 4,
            ob = 5,
            L, s = 0,
            l = 0,
            t = 0,
            A = 0,
            B = 0,
            E = navigator,
            tb = E.appName,
            o = E.userAgent,
            z = g.documentElement,
            q = parseFloat;

        function Gb() {
            if (!L) {
                L = {
                    Jf: "ontouchstart" in h || "createTouch" in g
                };
                var a;
                if (E.pointerEnabled || (a = E.msPointerEnabled)) L.Md = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function v(i) {
            if (!s) {
                s = -1;
                if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    s = K;
                    t = q(o.substring(e + 5, o.indexOf(";", e)));;
                    l = g.documentMode || t
                } else if (tb == "Netscape" && !!h.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        f = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = ib;
                        l = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var j = o.substring(0, b).lastIndexOf("/");
                        s = f >= 0 ? kb : lb;
                        l = q(o.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            s = K;
                            l = t = q(a[1])
                        }
                    }
                    if (c >= 0) B = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        s = ob;
                        l = q(a[2])
                    }
                }
            }
            return i == s
        }

        function r() {
            return v(K)
        }

        function hb() {
            return r() && (l < 6 || g.compatMode == "BackCompat")
        }

        function zb() {
            return v(ib)
        }

        function jb() {
            return v(lb)
        }

        function Cb() {
            return v(kb)
        }

        function nb() {
            return v(ob)
        }

        function db() {
            return jb() && B > 534 && B < 535
        }

        function H() {
            v();
            return B > 537 || l > 42 || s == K && l >= 11
        }

        function fb() {
            return r() && l < 9
        }

        function eb(a) {
            var b, c;
            return function (g) {
                if (!b) {
                    b = e;
                    var d = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (h, e) {
                        var b = a;
                        if (e) b = h + d;
                        if (g.style[b] != f) return c = b
                    })
                }
                return c
            }
        }

        function cb(b) {
            var a;
            return function (c) {
                a = a || eb(b)(c) || b;
                return a
            }
        }
        var M = cb("transform");

        function sb(a) {
            return {}.toString.call(a)
        }
        var pb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
            pb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (sb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function G(a) {
            return a == j ? String(a) : pb[sb(a)] || "object"
        }

        function qb(a) {
            for (var b in a) return e
        }

        function C(a) {
            try {
                return G(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function wb(b, a) {
            setTimeout(b, a || 0)
        }

        function D(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function R(b, a) {
            if (l < 9) b.style.filter = a
        }
        i.$Device = Gb;
        i.$IsBrowserIE = r;
        i.$IsBrowserIeQuirks = hb;
        i.$IsBrowserFireFox = zb;
        i.$IsBrowserSafari = jb;
        i.$IsBrowserChrome = Cb;
        i.$IsBrowserOpera = nb;
        i.ef = H;
        i.Ub = fb;
        eb("transform");
        i.$BrowserVersion = function () {
            return l
        };
        i.$BrowserEngineVersion = function () {
            return t || l
        };
        i.$WebKitVersion = function () {
            v();
            return B
        };
        i.$Delay = wb;

        function Y(a) {
            a.constructor === Y.caller && a.ke && a.ke.apply(a, Y.caller.arguments)
        }
        i.ke = Y;
        i.$GetElement = function (a) {
            if (i.af(a)) a = g.getElementById(a);
            return a
        };

        function u(a) {
            return a || h.event
        }
        i.ge = u;
        i.$EvtSrc = function (b) {
            b = u(b);
            var a = b.target || b.srcElement || g;
            if (a.nodeType == 3) a = i.he(a);
            return a
        };
        i.pe = function (a) {
            a = u(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };
        i.$WindowSize = function () {
            var a = g.body;
            return {
                x: a.clientWidth || z.clientWidth,
                y: a.clientHeight || z.clientHeight
            }
        };

        function w(c, d, a) {
            if (a !== f) c.style[d] = a == f ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function ab(b, c, a, d) {
            if (a !== f) {
                if (a == j) a = "";
                else d && (a += "px");
                w(b, c, a)
            } else return q(w(b, c))
        }

        function m(c, a) {
            var d = a ? ab : w,
                b;
            if (a & 4) b = cb(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Bb(b) {
            if (r() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Db(b, a, f) {
            if (r() && t < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = D(h, [i], d);
                R(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var N = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!H()) N = F(N, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function O(d, a) {
            var c = "";
            if (a) {
                if (r() && l && l < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.$Each(a, function (d, b) {
                    var a = N[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (P[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (H()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != f) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == f) a.$ScaleX = 1;
                    if (a.$ScaleY == f) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[M(d)] = c
        }
        i.me = m("transformOrigin", 4);
        i.qf = m("backfaceVisibility", 4);
        i.nf = m("transformStyle", 4);
        i.kf = m("perspective", 6);
        i.jf = m("perspectiveOrigin", 4);
        i.mf = function (a, b) {
            if (r() && t < 9 || t < 10 && hb()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = M(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = D(e, [g], f);
                a.style[c] = d
            }
        };
        i.nc = function (b, a) {
            return function (c) {
                c = u(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !i.lf(a, d)) && b(c)
            }
        };
        i.$AddEvent = function (a, c, d, b) {
            a = i.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.U = function (a, c, d, b) {
            a = i.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.$FireEvent = function (c, b) {
            var a;
            if (g.createEvent) {
                a = g.createEvent("HTMLEvents");
                a.initEvent(b, k, k);
                c.dispatchEvent(a)
            } else {
                var d = "on" + b;
                a = g.createEventObject();
                c.fireEvent(d, a)
            }
        };
        i.$CancelEvent = function (a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = e;
            a.returnValue = k
        };
        i.$StopEvent = function (a) {
            a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = e
        };
        i.$CreateCallback = function (d, c) {
            var a = [].slice.call(arguments, 2),
                b = function () {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        i.$InnerText = function (a, b) {
            if (b == f) return a.textContent || a.innerText;
            var c = g.createTextNode(b);
            i.Jc(a);
            a.appendChild(c)
        };
        i.$InnerHtml = function (a, b) {
            if (b == f) return a.innerHTML;
            a.innerHTML = b
        };
        i.$ClearInnerHtml = function (a) {
            a.innerHTML = ""
        };
        i.$Children = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function rb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (V(a, b) == c) return a;
                    if (!e) {
                        var d = rb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        i.$FindChild = rb;

        function T(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    V(a, b) == d && c.push(a);
                    if (!f) {
                        var e = T(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function mb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = mb(a, c, d);
                        if (b) return b
                    }
                }
        }
        i.og = mb;

        function gb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = gb(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        i.ng = gb;
        i.pg = function (b, a) {
            return b.getElementsByTagName(a)
        };

        function F() {
            var e = arguments,
                d, c, b, a, h = 1 & e[0],
                g = 1 + h;
            d = e[g - 1] || {};
            for (; g < e.length; g++)
                if (c = e[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== f) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (C(i) || C(a)) ? F(h, {}, i, a) : a
                        }
                    }
            return d
        }
        i.p = F;

        function Z(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (C(a) && C(b)) {
                        a = Z(a, b);
                        e = !qb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        i.od = function (a) {
            return G(a) == "function"
        };
        i.af = function (a) {
            return G(a) == "string"
        };
        i.jc = function (a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        i.$Each = n;
        i.Qd = C;

        function S(a) {
            return g.createElement(a)
        }
        i.$CreateElement = S;
        i.$CreateDiv = function () {
            return S("DIV")
        };
        i.Nf = function () {
            return S("SPAN")
        };
        i.Dd = function () {};

        function W(b, c, a) {
            if (a == f) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function V(a, b) {
            return W(a, b) || W(a, "data-" + b)
        }
        i.$Attribute = W;
        i.$AttributeEx = V;

        function y(b, a) {
            if (a == f) return b.className;
            b.className = a
        }
        i.vd = y;

        function vb(b) {
            var a = {};
            n(b, function (b) {
                if (b != f) a[b] = b
            });
            return a
        }

        function xb(b, a) {
            return b.match(a || yb)
        }

        function Q(b, a) {
            return vb(xb(b || "", a))
        }
        i.Pf = xb;

        function bb(b, c) {
            var a = "";
            n(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            y(a, bb(" ", F(Z(Q(y(a)), Q(c)), Q(b))))
        }
        i.he = function (a) {
            return a.parentNode
        };
        i.R = function (a) {
            i.hb(a, "none")
        };
        i.u = function (a, b) {
            i.hb(a, b ? "none" : "")
        };
        i.Rf = function (b, a) {
            b.removeAttribute(a)
        };
        i.Zf = function () {
            return r() && l < 10
        };
        i.Yf = function (d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top || a.D || 0) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left || a.v || 0) + "px)";
            else if (a !== f) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = D(h, g, "");
                b.$CssCssText(d, e)
            }
        };
        i.V = function () {
            return +new Date
        };
        i.$AppendChild = function (b, a) {
            b.appendChild(a)
        };
        i.ec = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        i.Ib = function (b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        i.Vf = function (a, b) {
            n(a, function (a) {
                i.Ib(a, b)
            })
        };
        i.Jc = function (a) {
            i.Vf(i.$Children(a, e), a)
        };
        i.Uf = function (a, b) {
            var c = i.he(a);
            b & 1 && i.B(a, (i.$CssWidth(c) - i.$CssWidth(a)) / 2);
            b & 2 && i.C(a, (i.$CssHeight(c) - i.$CssHeight(a)) / 2)
        };
        i.oc = function (b, a) {
            return parseInt(b, a || 10)
        };
        i.Te = q;
        i.lf = function (b, a) {
            var c = g.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return k
            }
            return b === a
        };

        function X(d, c, b) {
            var a = d.cloneNode(!c);
            !b && i.Rf(a, "id");
            return a
        }
        i.$CloneNode = X;
        i.Gb = function (d, f) {
            var a = new Image;

            function b(e, d) {
                i.U(a, "load", b);
                i.U(a, "abort", c);
                i.U(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, e)
            }
            if (nb() && l < 11.6 || !d) b(!d);
            else {
                i.$AddEvent(a, "load", b);
                i.$AddEvent(a, "abort", c);
                i.$AddEvent(a, "error", c);
                a.src = d
            }
        };
        i.Xe = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function (a) {
                i.Gb(a.src, b)
            });
            b()
        };
        i.cd = function (a, g, i, h) {
            if (h) a = X(a);
            var c = T(a, g);
            if (!c.length) c = b.pg(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = X(i);
                y(e, y(d));
                b.$CssCssText(e, d.style.cssText);
                b.ec(e, d);
                b.Ib(d)
            }
            return a
        };

        function Eb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                h = 0,
                d = 0;

            function j() {
                J(a, q, e[d || k || h & 2 || h]);
                b.$Css(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                i.U(g, "mouseup", c);
                i.U(g, "touchend", c);
                i.U(g, "touchcancel", c)
            }

            function o(a) {
                if (d) i.$CancelEvent(a);
                else {
                    k = 4;
                    j();
                    i.$AddEvent(g, "mouseup", c);
                    i.$AddEvent(g, "touchend", c);
                    i.$AddEvent(g, "touchcancel", c)
                }
            }
            l.wd = function (a) {
                if (a === f) return h;
                h = a & 2 || a & 1;
                j()
            };
            l.$Enable = function (a) {
                if (a === f) return !d;
                d = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = i.$GetElement(a);
            var m = b.Pf(y(a));
            if (m) p = m.shift();
            n(r, function (a) {
                e.push(p + a)
            });
            q = bb(" ", e);
            e.unshift("");
            i.$AddEvent(a, "mousedown", o);
            i.$AddEvent(a, "touchstart", o)
        }
        i.Zb = function (a) {
            return new Eb(a)
        };
        i.$Css = w;
        i.lb = m("overflow");
        i.C = m("top", 2);
        i.B = m("left", 2);
        i.$CssWidth = m("width", 2);
        i.$CssHeight = m("height", 2);
        i.xc = m("marginLeft", 2);
        i.yc = m("marginTop", 2);
        i.A = m("position");
        i.hb = m("display");
        i.z = m("zIndex", 1);
        i.Hb = function (b, a, c) {
            if (a != f) Db(b, a, c);
            else return Bb(b)
        };
        i.$CssCssText = function (a, b) {
            if (b != f) a.style.cssText = b;
            else return a.style.cssText
        };
        i.Ee = function (b, a) {
            if (a === f) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var U = {
            $Opacity: i.Hb,
            $Top: i.C,
            $Left: i.B,
            T: i.$CssWidth,
            W: i.$CssHeight,
            Kb: i.A,
            Nh: i.hb,
            $ZIndex: i.z
        };

        function x(g, l) {
            var e = fb(),
                b = H(),
                d = db(),
                h = M(g);

            function k(b, d, a) {
                var e = b.jb(p(-d / 2, -a / 2)),
                    f = b.jb(p(d / 2, -a / 2)),
                    g = b.jb(p(d / 2, a / 2)),
                    h = b.jb(p(-d / 2, a / 2));
                b.jb(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.$TranslateZ || 0,
                    p = (a.$RotateX || 0) % 360,
                    q = (a.$RotateY || 0) % 360,
                    u = (a.$Rotate || 0) % 360,
                    l = a.$ScaleX,
                    m = a.$ScaleY,
                    g = a.Mh;
                if (l == f) l = 1;
                if (m == f) m = 1;
                if (g == f) g = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    g = 0
                }
                var c = new Ab(a.$TranslateX, a.$TranslateY, n);
                c.$RotateX(p);
                c.$RotateY(q);
                c.Ue(u);
                c.Be(a.$SkewX, a.$SkewY);
                c.$Scale(l, m, g);
                if (b) {
                    c.$Move(a.v, a.D);
                    d.style[h] = c.ze()
                } else if (!A || A < 9) {
                    var o = "",
                        j = {
                            x: 0,
                            y: 0
                        };
                    if (a.$OriginalWidth) j = k(c, a.$OriginalWidth, a.$OriginalHeight);
                    i.yc(d, j.y);
                    i.xc(d, j.x);
                    o = c.Ie();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = D(s, [t], o);
                    R(d, r)
                }
            }
            x = function (e, c) {
                c = c || {};
                var h = c.v,
                    k = c.D,
                    g;
                n(U, function (a, b) {
                    g = c[b];
                    g !== f && a(e, g)
                });
                i.Yf(e, c.$Clip);
                if (!b) {
                    h != f && i.B(e, (c.Sc || 0) + h);
                    k != f && i.C(e, (c.Rc || 0) + k)
                }
                if (c.Ce)
                    if (d) wb(i.$CreateCallback(j, O, e, c));
                    else a(e, c)
            };
            i.Db = O;
            if (d) i.Db = x;
            if (e) i.Db = a;
            else if (!b) a = O;
            i.N = x;
            x(g, l)
        }
        i.Db = x;
        i.N = x;

        function Ab(i, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1],
                h = c.sin,
                g = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return m.apply(j, (a || b).concat(c))
            }
            d.$Scale = function (a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function (a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Ue = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Be = function (a, c) {
                if (a || c) {
                    i = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.jb = function (c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.ze = function () {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Ie = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function (b, c) {
                return a.qe(b, c, 0)
            };
            a.$ScaleY = function (b, c) {
                return a.qe(b, 0, c)
            };
            a.qe = function (a, c, d) {
                return b(a, [[c, 0], [0, d]])
            };
            a.jb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return p(a[0][0], a[1][0])
            }
        });
        var P = {
            Sc: 0,
            Rc: 0,
            v: 0,
            D: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        i.zc = function (c, d) {
            var a = c || {};
            if (c)
                if (b.od(c)) a = {
                    eb: a
                };
                else if (b.od(c.$Clip)) a.$Clip = {
                eb: c.$Clip
            };
            a.eb = a.eb || d;
            if (a.$Clip) a.$Clip.eb = a.$Clip.eb || d;
            return a
        };

        function ub(c, a) {
            var b = {};
            n(c, function (c, d) {
                var e = c;
                if (a[d] != f)
                    if (i.jc(c)) e = c + a[d];
                    else e = ub(c, a[d]);
                b[d] = e
            });
            return b
        }
        i.Qe = ub;
        i.je = function (n, i, s, t, B, C, o) {
            var a = i;
            if (n) {
                a = {};
                for (var h in i) {
                    var D = C[h] || 1,
                        z = B[h] || [0, 1],
                        g = (s - z[0]) / z[1];
                    g = c.min(c.max(g, 0), 1);
                    g = g * D;
                    var x = c.floor(g);
                    if (g != x) g -= x;
                    var k = t.eb || d.$Linear,
                        m, E = n[h],
                        q = i[h];
                    if (b.jc(q)) {
                        k = t[h] || k;
                        var A = k(g);
                        m = E + q * A
                    } else {
                        m = b.p({
                            Tb: {}
                        }, n[h]);
                        var y = t[h] || {};
                        b.$Each(q.Tb || q, function (d, a) {
                            k = y[a] || y.eb || k;
                            var c = k(g),
                                b = d * c;
                            m.Tb[a] = b;
                            m[a] += b
                        })
                    }
                    a[h] = m
                }
                var w = b.$Each(i, function (b, a) {
                    return P[a] != f
                });
                w && b.$Each(P, function (c, b) {
                    if (a[b] == f && n[b] !== f) a[b] = n[b]
                });
                if (w) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = o.$OriginalWidth;
                    a.$OriginalHeight = o.$OriginalHeight;
                    if (r() && l >= 11 && (i.v || i.D) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8;
                    a.Ce = e
                }
            }
            if (i.$Clip && o.$Move) {
                var p = a.$Clip.Tb,
                    v = (p.$Top || 0) + (p.$Bottom || 0),
                    u = (p.$Left || 0) + (p.$Right || 0);
                a.$Left = (a.$Left || 0) + u;
                a.$Top = (a.$Top || 0) + v;
                a.$Clip.$Left -= u;
                a.$Clip.$Right -= u;
                a.$Clip.$Top -= v;
                a.$Clip.$Bottom -= v
            }
            if (a.$Clip && b.Zf() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.D && !a.$Clip.v && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = j;
            return a
        }
    };

    function m() {
        var a = this,
            d = [];

        function i(a, b) {
            d.push({
                rc: a,
                uc: b
            })
        }

        function g(a, c) {
            b.$Each(d, function (b, e) {
                b.rc == a && b.uc === c && d.splice(e, 1)
            })
        }
        a.$On = a.addEventListener = i;
        a.$Off = a.removeEventListener = g;
        a.m = function (a) {
            var c = [].slice.call(arguments, 1);
            b.$Each(d, function (b) {
                b.rc == a && b.uc.apply(h, c)
            })
        }
    }
    var l = function (A, D, g, L, O, J) {
        A = A || 0;
        var a = this,
            p, m, n, t, B = 0,
            H, I, G, C, z = 0,
            i = 0,
            l = 0,
            y, j, d, f, o, x, v = [],
            w;

        function P(a) {
            d += a;
            f += a;
            j += a;
            i += a;
            l += a;
            z += a
        }

        function s(p) {
            var h = p;
            if (o)
                if (!x && (h >= f || h < d) || x && h >= d) h = ((h - d) % o + o) % o + d;
            if (!y || t || i != h) {
                var k = c.min(h, f);
                k = c.max(k, d);
                if (!y || t || k != l) {
                    if (J) {
                        var m = (k - j) / (D || 1);
                        if (g.$Reverse) m = 1 - m;
                        var n = b.je(O, J, m, H, G, I, g);
                        if (w) b.$Each(n, function (b, a) {
                            w[a] && w[a](L, b)
                        });
                        else b.N(L, n)
                    }
                    a.tc(l - j, k - j);
                    var r = l,
                        q = l = k;
                    b.$Each(v, function (b, c) {
                        var a = !y && x || h <= i ? v[v.length - c - 1] : b;
                        a.L(l - z)
                    });
                    i = h;
                    y = e;
                    a.Pb(r, q)
                }
            }
        }

        function E(a, b, e) {
            b && a.$Shift(f);
            if (!e) {
                d = c.min(d, a.Vb() + z);
                f = c.max(f, a.mb() + z)
            }
            v.push(a)
        }
        var u = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (b.$IsBrowserSafari() && b.$BrowserVersion() < 7 || !u) u = function (a) {
            b.$Delay(a, g.$Interval)
        };

        function K() {
            if (p) {
                var d = b.V(),
                    e = c.min(d - B, g.Pd),
                    a = i + e * n;
                B = d;
                if (a * n >= m * n) a = m;
                s(a);
                if (!t && a * n >= m * n) M(C);
                else u(K)
            }
        }

        function r(g, h, j) {
            if (!p) {
                p = e;
                t = j;
                C = h;
                g = c.max(g, d);
                g = c.min(g, f);
                m = g;
                n = m < i ? -1 : 1;
                a.Ed();
                B = b.V();
                u(K)
            }
        }

        function M(b) {
            if (p) {
                t = p = C = k;
                a.Cd();
                b && b()
            }
        }
        a.$Play = function (a, b, c) {
            r(a ? i + a : f, b, c)
        };
        a.Jd = r;
        a.qb = M;
        a.Oe = function (a) {
            r(a)
        };
        a.X = function () {
            return i
        };
        a.Hd = function () {
            return m
        };
        a.Ab = function () {
            return l
        };
        a.L = s;
        a.Ke = function () {
            s(f, e)
        };
        a.$Move = function (a) {
            s(i + a)
        };
        a.$IsPlaying = function () {
            return p
        };
        a.We = function (a) {
            o = a
        };
        a.$Shift = P;
        a.P = function (a, b) {
            E(a, 0, b)
        };
        a.Ic = function (a) {
            E(a, 1)
        };
        a.be = function (a) {
            f += a
        };
        a.Vb = function () {
            return d
        };
        a.mb = function () {
            return f
        };
        a.Pb = a.Ed = a.Cd = a.tc = b.Dd;
        a.Cc = b.V();
        g = b.p({
            $Interval: 16,
            Pd: 50
        }, g);
        o = g.Gc;
        x = g.xe;
        w = g.He;
        d = j = A;
        f = A + D;
        I = g.$Round || {};
        G = g.$During || {};
        H = b.zc(g.$Easing)
    };
    var o = h.$JssorSlideshowFormations$ = new function () {
        var h = this,
            b = 0,
            a = 1,
            f = 2,
            d = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.dc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function (q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.dc,
                A = [],
                z = [],
                u = 0,
                c = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    c = r;
                    h = 0;
                    p = [f, a, d, b];
                    break;
                case l:
                    c = 0;
                    h = s;
                    p = [b, d, a, f];
                    break;
                case o:
                    c = r;
                    h = s;
                    p = [d, a, f, b];
                    break;
                case n:
                    c = r;
                    h = s;
                    p = [a, d, b, f];
                    break;
                case i:
                    c = 0;
                    h = 0;
                    p = [f, b, d, a];
                    break;
                case k:
                    c = r;
                    h = 0;
                    p = [a, f, b, d];
                    break;
                case m:
                    c = 0;
                    h = s;
                    p = [d, b, f, a];
                    break;
                default:
                    c = 0;
                    h = 0;
                    p = [b, f, a, d]
            }
            u = 0;
            while (u < w) {
                t = h + "," + c;
                if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                    z[t] = e;
                    g(A, u++, [h, c])
                } else switch (p[v++ % p.length]) {
                    case b:
                        c--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        c++;
                        break;
                    case d:
                        h++
                }
                switch (p[v % p.length]) {
                    case b:
                        c++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        c--;
                        break;
                    case d:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function (p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.dc,
                t = [],
                u = 0,
                c = 0,
                e = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    c = q;
                    e = 0;
                    h = [f, a, d, a];
                    break;
                case l:
                    c = 0;
                    e = r;
                    h = [b, d, a, d];
                    break;
                case o:
                    c = q;
                    e = r;
                    h = [d, a, f, a];
                    break;
                case n:
                    c = q;
                    e = r;
                    h = [a, d, b, d];
                    break;
                case i:
                    c = 0;
                    e = 0;
                    h = [f, b, d, b];
                    break;
                case k:
                    c = q;
                    e = 0;
                    h = [a, f, b, f];
                    break;
                case m:
                    c = 0;
                    e = r;
                    h = [d, b, f, b];
                    break;
                default:
                    c = 0;
                    e = 0;
                    h = [b, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = e + "," + c;
                if (c >= 0 && c < w && e >= 0 && e < x && typeof t[y] == "undefined") {
                    g(t, u++, [e, c]);
                    switch (h[s % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            e++;
                            break;
                        case a:
                            c--;
                            break;
                        case d:
                            e--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            e--;
                            break;
                        case a:
                            c++;
                            break;
                        case d:
                            e++
                    }
                    switch (h[s++ % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            e++;
                            break;
                        case a:
                            c--;
                            break;
                        case d:
                            e--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function (q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.dc,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function (i) {
            var a = i.$Cols || 1,
                b = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < b ? (b - a) / 2 : 0;
            h = a > b ? (a - b) / 2 : 0;
            k = c.round(c.max(a / 2, b / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function (f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, b, i;
            i = c.round(c.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
            return h
        };
        h.$FormationRandom = function (d) {
            for (var e = [], a, b = 0; b < d.$Rows; b++)
                for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
            return e
        };
        h.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
            return h
        };
        h.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
            return h
        };
        h.$FormationRectangleCross = function (f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
            return j
        }
    };
    h.$JssorSlideshowRunner$ = function (n, s, q, u, z, A) {
        var f = this,
            v, g, a, y = 0,
            x = u.$TransitionsOrder,
            r, h = 8;

        function t(a) {
            if (a.$Top) a.D = a.$Top;
            if (a.$Left) a.v = a.$Left;
            b.$Each(a, function (a) {
                b.Qd(a) && t(a)
            })
        }

        function i(g, f) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: k,
                $SlideOut: k,
                $Reverse: k,
                $Formation: o.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: d.$Swing,
                $Round: {},
                Lb: [],
                $During: {}
            };
            b.p(a, g);
            t(a);
            a.dc = a.$Cols * a.$Rows;
            a.$Easing = b.zc(a.$Easing, d.$Swing);
            a.Me = c.ceil(a.$Duration / a.$Interval);
            a.Je = function (c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.Lb[f]) {
                    a.Lb[f] = {
                        T: c,
                        W: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.Lb[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.Lb[f]
            };
            if (a.$Brother) {
                a.$Brother = i(a.$Brother, f);
                a.$SlideOut = e
            }
            return a
        }

        function p(B, h, a, v, n, l) {
            var y = this,
                t, u = {},
                i = {},
                m = [],
                f, d, r, p = a.$ChessMode.$Column || 0,
                q = a.$ChessMode.$Row || 0,
                g = a.Je(n, l),
                o = C(a),
                D = o.length - 1,
                s = a.$Duration + a.$Delay * D,
                w = v + s,
                j = a.$SlideOut,
                x;
            w += 50;

            function C(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.Id = w;
            y.Sb = function (d) {
                d -= v;
                var e = d < s;
                if (e || x) {
                    x = e;
                    if (!j) d = s - d;
                    var f = c.ceil(d / a.$Interval);
                    b.$Each(i, function (a, e) {
                        var d = c.max(f, a.De);
                        d = c.min(d, a.length - 1);
                        if (a.se != d) {
                            if (!a.se && !j) b.u(m[e]);
                            else d == a.ye && j && b.R(m[e]);
                            a.se = d;
                            b.N(m[e], a[d])
                        }
                    })
                }
            };
            h = b.$CloneNode(h);
            A(h, 0, 0);
            if (b.Ub()) {
                var E = !h["no-image"],
                    z = b.ng(h);
                b.$Each(z, function (a) {
                    (E || a["jssor-slider"]) && b.Hb(a, b.Hb(a), e)
                })
            }
            b.$Each(o, function (h, m) {
                b.$Each(h, function (G) {
                    var K = G[0],
                        J = G[1],
                        v = K + "," + J,
                        o = k,
                        s = k,
                        x = k;
                    if (p && J % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = s ? a.$Bottom : a.$Top,
                        z = s ? a.$Top : a.$Bottom,
                        B = o ? a.$Right : a.$Left,
                        A = o ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    r = {};
                    d = {
                        D: 0,
                        v: 0,
                        $Opacity: 1,
                        T: n,
                        W: l
                    };
                    f = b.p({}, d);
                    t = b.p({}, g[v]);
                    if (a.$Opacity) d.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        d.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var H = e;
                        if (b.Ub())
                            if (a.$Cols * a.$Rows > 1) H = k;
                            else I = k;
                        if (H) {
                            d.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (b.Ub() || b.$IsBrowserOpera()) d.$Zoom = c.min(d.$Zoom, 2);
                            var N = a.$Rotate || 0;
                            d.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = t.Tb = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.W / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.W * w;
                            else if (z) h.$Top = g.W * w;
                            if (B && A) {
                                h.$Left = g.T / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.T * w;
                            else if (A) h.$Left = g.T * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (a.x) d.v += n * a.x * L;
                    if (a.y) d.D += l * a.y * M;
                    b.$Each(d, function (a, c) {
                        if (b.jc(a))
                            if (a != f[c]) r[c] = a - f[c]
                    });
                    u[v] = j ? f : d;
                    var D = a.Me,
                        y = c.round(m * a.$Delay / a.$Interval);
                    i[v] = new Array(y);
                    i[v].De = y;
                    i[v].ye = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.je(f, r, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        i[v].push(E)
                    }
                })
            });
            o.reverse();
            b.$Each(o, function (a) {
                b.$Each(a, function (c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = h;
                    if (e || f) a = b.$CloneNode(h);
                    b.N(a, u[d]);
                    b.lb(a, "hidden");
                    b.A(a, "absolute");
                    B.Ve(a);
                    m[d] = a;
                    b.u(a, !j)
                })
            })
        }

        function w() {
            var b = this,
                c = 0;
            l.call(b, 0, v);
            b.Pb = function (d, b) {
                if (b - c > h) {
                    c = b;
                    a && a.Sb(b);
                    g && g.Sb(b)
                }
            };
            b.pc = r
        }
        f.Le = function () {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].tb = a);
            return b[a]
        };
        f.Re = function (w, x, k, l, b) {
            r = b;
            b = i(b, h);
            var j = l.Qc,
                e = k.Qc;
            j["no-image"] = !l.lc;
            e["no-image"] = !k.lc;
            var m = j,
                o = e,
                u = b,
                d = b.$Brother || i({}, h);
            if (!b.$SlideOut) {
                m = e;
                o = j
            }
            var t = d.$Shift || 0;
            g = new p(n, o, d, c.max(t - d.$Interval, 0), s, q);
            a = new p(n, m, u, c.max(d.$Interval - t, 0), s, q);
            g.Sb(0);
            a.Sb(0);
            v = c.max(g.Id, a.Id);
            f.tb = w
        };
        f.Cb = function () {
            n.Cb();
            g = j;
            a = j
        };
        f.Ne = function () {
            var b = j;
            if (a) b = new w;
            return b
        };
        if (b.Ub() || b.$IsBrowserOpera() || z && b.$WebKitVersion() < 537) h = 16;
        m.call(f);
        l.call(f, -1e7, 1e7)
    };
    var i = h.$JssorSlider$ = function (q, hc) {
        var a = this;

        function Ec() {
            var b = this;
            l.call(b, -1e8, 2e8);
            b.Pe = function () {
                var a = b.Ab(),
                    d = c.floor(a),
                    f = v(d),
                    e = a - c.floor(a);
                return {
                    tb: f,
                    Sf: d,
                    Kb: e
                }
            };
            b.Pb = function (d, b) {
                var f = c.floor(b);
                if (f != b && b > d) f++;
                Xb(f, e);
                a.m(i.$EVT_POSITION_CHANGE, v(b), v(d), b, d)
            }
        }

        function Dc() {
            var a = this;
            l.call(a, 0, 0, {
                Gc: s
            });
            b.$Each(B, function (b) {
                N & 1 && b.We(s);
                a.Ic(b);
                b.$Shift(hb / dc)
            })
        }

        function Cc() {
            var a = this,
                b = Wb.$Elmt;
            l.call(a, -1, 2, {
                $Easing: d.$Linear,
                He: {
                    Kb: bc
                },
                Gc: s
            }, b, {
                Kb: 1
            }, {
                Kb: -2
            });
            a.hc = b
        }

        function rc(n, m) {
            var b = this,
                d, f, g, h, c;
            l.call(b, -1e8, 2e8, {
                Pd: 100
            });
            b.Ed = function () {
                Q = e;
                S = j;
                a.m(i.$EVT_SWIPE_START, v(x.X()), x.X())
            };
            b.Cd = function () {
                Q = k;
                h = k;
                var b = x.Pe();
                a.m(i.$EVT_SWIPE_END, v(x.X()), x.X());
                !b.Kb && Gc(b.Sf, r)
            };
            b.Pb = function (i, e) {
                var a;
                if (h) a = c;
                else {
                    a = f;
                    if (g) {
                        var b = e / g;
                        a = o.$SlideEasing(b) * (f - d) + d
                    }
                }
                x.L(a)
            };
            b.Qb = function (a, e, c, h) {
                d = a;
                f = e;
                g = c;
                x.L(a);
                b.L(0);
                b.Jd(c, h)
            };
            b.Mf = function (a) {
                h = e;
                c = a;
                b.$Play(a, j, e)
            };
            b.Kf = function (a) {
                c = a
            };
            x = new Ec;
            x.P(n);
            x.P(m)
        }

        function sc() {
            var c = this,
                a = Zb();
            b.z(a, 0);
            b.$Css(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.Ve = function (c) {
                b.$AppendChild(a, c);
                b.u(a)
            };
            c.Cb = function () {
                b.R(a);
                b.Jc(a)
            }
        }

        function Ac(h, f) {
            var d = this,
                q, N, y, n, z = [],
                x, E, U, H, R, D, K, g, t, p;
            l.call(d, -w, w + 1, {});

            function F(a) {
                q && q.zd();
                T(h, a, 0);
                D = e;
                q = new I.$Class(h, I, b.Te(b.$AttributeEx(h, "idle")) || qc, !u);
                q.L(0)
            }

            function Y() {
                q.Cc < I.Cc && F()
            }

            function P(p, r, m) {
                if (!H) {
                    H = e;
                    if (n && m) {
                        var g = m.width,
                            c = m.height,
                            l = g,
                            j = c;
                        if (g && c && o.$FillMode) {
                            if (o.$FillMode & 3 && (!(o.$FillMode & 4) || g > M || c > L)) {
                                var h = k,
                                    q = M / L * c / g;
                                if (o.$FillMode & 1) h = q > 1;
                                else if (o.$FillMode & 2) h = q < 1;
                                l = h ? g * L / c : M;
                                j = h ? L : c * M / g
                            }
                            b.$CssWidth(n, l);
                            b.$CssHeight(n, j);
                            b.C(n, (L - j) / 2);
                            b.B(n, (M - l) / 2)
                        }
                        b.A(n, "absolute");
                        a.m(i.$EVT_LOAD_END, f)
                    }
                }
                b.R(r);
                p && p(d)
            }

            function X(b, c, e, g) {
                if (g == S && r == f && u)
                    if (!Fc) {
                        var a = v(b);
                        C.Re(a, f, c, d, e);
                        c.ag();
                        V.$Shift(a - V.Vb() - 1);
                        V.L(a);
                        A.Qb(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == S && r == f) {
                    if (!g) {
                        var a = j;
                        if (C)
                            if (C.tb == f) a = C.Ne();
                            else C.Cb();
                        Y();
                        g = new yc(h, f, a, q);
                        g.nd(p)
                    }!g.$IsPlaying() && g.wc()
                }
            }

            function G(a, e, k) {
                if (a == f) {
                    if (a != e) B[e] && B[e].sd();
                    else !k && g && g.mg();
                    p && p.$Enable();
                    var l = S = b.V();
                    d.Gb(b.$CreateCallback(j, ab, l))
                } else {
                    var i = c.min(f, a),
                        h = c.max(f, a),
                        n = c.min(h - i, i + s - h),
                        m = w + o.$LazyLoading - 1;
                    (!R || n <= m) && d.Gb()
                }
            }

            function bb() {
                if (r == f && g) {
                    g.qb();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.Vc()
                }
            }

            function cb() {
                r == f && g && g.qb()
            }

            function Z(b) {
                !J && a.m(i.$EVT_CLICK, f, b)
            }

            function Q() {
                p = t.pInstance;
                g && g.nd(p)
            }
            d.Gb = function (d, c) {
                c = c || y;
                if (z.length && !H) {
                    b.u(c);
                    if (!U) {
                        U = e;
                        a.m(i.$EVT_LOAD_START, f);
                        b.$Each(z, function (a) {
                            if (!b.$Attribute(a, "src")) {
                                a.src = b.$AttributeEx(a, "src2") || "";
                                b.hb(a, a["display-origin"])
                            }
                        })
                    }
                    b.Xe(z, n, b.$CreateCallback(j, P, d, c))
                } else P(d, c)
            };
            d.cf = function () {
                if (s == 1) {
                    d.sd();
                    G(f, f)
                } else if (C) {
                    var a = C.Le(s);
                    if (a) {
                        var g = S = b.V(),
                            c = f + lb,
                            e = B[v(c)];
                        return e.Gb(b.$CreateCallback(j, X, c, e, a, g), y)
                    }
                } else Bb(lb)
            };
            d.Hc = function () {
                G(f, f, e)
            };
            d.sd = function () {
                p && p.$Quit();
                p && p.$Disable();
                d.le();
                g && g.Ze();
                g = j;
                F()
            };
            d.ag = function () {
                b.R(h)
            };
            d.le = function () {
                b.u(h)
            };
            d.gf = function () {
                p && p.$Enable()
            };

            function T(a, d, c, h) {
                if (b.$Attribute(a, "jssor-slider")) return;
                if (!D) {
                    if (a.tagName == "IMG") {
                        z.push(a);
                        if (!b.$Attribute(a, "src")) {
                            R = e;
                            a["display-origin"] = b.hb(a);
                            b.R(a)
                        }
                    }
                    var f = b.Ee(a);
                    if (f) {
                        var g = new Image;
                        b.$AttributeEx(g, "src2", f);
                        z.push(g)
                    }
                    if (c) {
                        b.z(a, (b.z(a) || 0) + 1);
                        b.yc(a, b.yc(a) || 0);
                        b.xc(a, b.xc(a) || 0);
                        b.Db(a, {
                            $TranslateZ: 0
                        })
                    }
                }
                var i = b.$Children(a);
                b.$Each(i, function (f) {
                    var i = f.tagName,
                        j = b.$AttributeEx(f, "u");
                    if (j == "player" && !t) {
                        t = f;
                        if (t.pInstance) Q();
                        else b.$AddEvent(t, "dataavailable", Q)
                    }
                    if (j == "caption") {
                        if (d) {
                            b.me(f, b.$AttributeEx(f, "to"));
                            b.qf(f, b.$AttributeEx(f, "bf"));
                            K && b.$AttributeEx(f, "3d") && b.nf(f, "preserve-3d")
                        } else if (!b.$IsBrowserIE()) {
                            var g = b.$CloneNode(f, k, e);
                            b.ec(g, f, a);
                            b.Ib(f, a);
                            f = g;
                            d = e
                        }
                    } else if (!D && !c && !n) {
                        if (i == "A") {
                            if (b.$AttributeEx(f, "u") == "image") n = b.og(f, "IMG");
                            else n = b.$FindChild(f, "image", e);
                            if (n) {
                                x = f;
                                b.hb(x, "block");
                                b.N(x, W);
                                E = b.$CloneNode(x, e);
                                b.A(x, "relative");
                                b.Hb(E, 0);
                                b.$Css(E, "backgroundColor", "#000")
                            }
                        } else if (i == "IMG" && b.$AttributeEx(f, "u") == "image") n = f;
                        if (n) {
                            n.border = 0;
                            b.N(n, W)
                        }
                    }
                    T(f, d, c + 1, h)
                });
                !D && c
            }
            d.tc = function (c, b) {
                var a = w - b;
                bc(N, a)
            };
            d.tb = f;
            m.call(d);
            K = b.$AttributeEx(h, "p");
            b.kf(h, K);
            b.jf(h, b.$AttributeEx(h, "po"));
            var O = b.$FindChild(h, "thumb", e);
            if (O) {
                d.hf = b.$CloneNode(O);
                b.R(O)
            }
            b.u(h);
            y = b.$CloneNode(eb);
            b.z(y, 1e3);
            b.$AddEvent(h, "click", Z);
            F(e);
            d.lc = n;
            d.re = E;
            d.Qc = h;
            d.hc = N = h;
            b.$AppendChild(N, y);
            a.$On(203, G);
            a.$On(28, cb);
            a.$On(24, bb)
        }

        function yc(z, g, p, q) {
            var c = this,
                n = 0,
                v = 0,
                h, j, f, d, m, t, s, o = B[g];
            l.call(c, 0, 0);

            function w() {
                b.Jc(K);
                fc && m && o.re && b.$AppendChild(K, o.re);
                b.u(K, !m && o.lc)
            }

            function x() {
                c.wc()
            }

            function y(a) {
                s = a;
                c.qb();
                c.wc()
            }
            c.wc = function () {
                var b = c.Ab();
                if (!D && !Q && !s && r == g) {
                    if (!b) {
                        if (h && !m) {
                            m = e;
                            c.Vc(e);
                            a.m(i.$EVT_SLIDESHOW_START, g, n, v, h, d)
                        }
                        w()
                    }
                    var k, p = i.$EVT_STATE_CHANGE;
                    if (b != d)
                        if (b == f) k = d;
                        else if (b == j) k = f;
                    else if (!b) k = j;
                    else k = c.Hd();
                    a.m(p, g, b, n, j, f, d);
                    var l = u && (!E || F);
                    if (b == d)(f != d && !(E & 12) || l) && o.cf();
                    else(l || b != f) && c.Jd(k, x)
                }
            };
            c.mg = function () {
                f == d && f == c.Ab() && c.L(j)
            };
            c.Ze = function () {
                C && C.tb == g && C.Cb();
                var b = c.Ab();
                b < d && a.m(i.$EVT_STATE_CHANGE, g, -b - 1, n, j, f, d)
            };
            c.Vc = function (a) {
                p && b.lb(jb, a && p.pc.$Outside ? "" : "hidden")
            };
            c.tc = function (c, b) {
                if (m && b >= h) {
                    m = k;
                    w();
                    o.le();
                    C.Cb();
                    a.m(i.$EVT_SLIDESHOW_END, g, n, v, h, d)
                }
                a.m(i.$EVT_PROGRESS_CHANGE, g, b, n, j, f, d)
            };
            c.nd = function (a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.Ae, y)
                }
            };
            p && c.Ic(p);
            h = c.mb();
            c.Ic(q);
            j = h + q.Ld;
            d = c.mb();
            f = u ? h + q.Kd : d
        }

        function tb(a, c, d) {
            b.B(a, c);
            b.C(a, d)
        }

        function bc(c, b) {
            var a = y > 0 ? y : ib,
                d = Db * b * (a & 1),
                e = Eb * b * (a >> 1 & 1);
            tb(c, d, e)
        }

        function Sb() {
            qb = Q;
            Nb = A.Hd();
            G = x.X()
        }

        function ic() {
            Sb();
            if (D || !F && E & 12) {
                A.qb();
                a.m(i.Hf)
            }
        }

        function gc(e) {
            if (!D && (F || !(E & 12)) && !A.$IsPlaying()) {
                var b = x.X(),
                    a = c.ceil(G);
                if (e && c.abs(H) >= o.$MinDragOffsetToSlide) {
                    a = c.ceil(b);
                    a += gb
                }
                if (!(N & 1)) a = c.min(s - w, c.max(a, 0));
                var d = c.abs(a - b);
                d = 1 - c.pow(1 - d, 5);
                if (!J && qb) A.Oe(Nb);
                else if (b == a) {
                    vb.gf();
                    vb.Hc()
                } else A.Qb(b, a, d * Ab)
            }
        }

        function Lb(a) {
            !b.$AttributeEx(b.$EvtSrc(a), "nodrag") && b.$CancelEvent(a)
        }

        function vc(a) {
            ac(a, 1)
        }

        function ac(c, d) {
            c = b.ge(c);
            var l = b.$EvtSrc(c);
            if (!O && !b.$AttributeEx(l, "nodrag") && wc() && (!d || c.touches.length == 1)) {
                D = e;
                Cb = k;
                S = j;
                b.$AddEvent(g, d ? "touchmove" : "mousemove", Fb);
                b.V();
                J = 0;
                ic();
                if (!qb) y = 0;
                if (d) {
                    var h = c.touches[0];
                    xb = h.clientX;
                    yb = h.clientY
                } else {
                    var f = b.pe(c);
                    xb = f.x;
                    yb = f.y
                }
                H = 0;
                db = 0;
                gb = 0;
                a.m(i.$EVT_DRAG_START, v(G), G, c)
            }
        }

        function Fb(d) {
            if (D) {
                d = b.ge(d);
                var f;
                if (d.type != "mousemove") {
                    var l = d.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.pe(d);
                if (f) {
                    var j = f.x - xb,
                        k = f.y - yb;
                    if (c.floor(G) != G) y = y || ib & O;
                    if ((j || k) && !y) {
                        if (O == 3)
                            if (c.abs(k) > c.abs(j)) y = 2;
                            else y = 1;
                        else y = O;
                        if (Y && y == 1 && c.abs(k) - c.abs(j) > 3) Cb = e
                    }
                    if (y) {
                        var a = k,
                            i = Eb;
                        if (y == 1) {
                            a = j;
                            i = Db
                        }
                        if (!(N & 1)) {
                            if (a > 0) {
                                var g = i * r,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (s - w - r),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - db < -2) gb = 0;
                        else if (H - db > 2) gb = -1;
                        db = H;
                        H = a;
                        ub = G - H / i / (bb || 1);
                        if (H && y && !Cb) {
                            b.$CancelEvent(d);
                            if (!Q) A.Mf(ub);
                            else A.Kf(ub)
                        }
                    }
                }
            }
        }

        function nb() {
            tc();
            if (D) {
                D = k;
                b.V();
                b.U(g, "mousemove", Fb);
                b.U(g, "touchmove", Fb);
                J = H;
                J && u & 8 && (u = 0);
                A.qb();
                var c = x.X();
                a.m(i.$EVT_DRAG_END, v(c), c, v(G), G);
                E & 12 && Sb();
                gc(e)
            }
        }

        function nc(c) {
            if (J) {
                b.$StopEvent(c);
                var a = b.$EvtSrc(c);
                while (a && t !== a) {
                    a.tagName == "A" && b.$CancelEvent(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            } else u & 4 && (u = 0)
        }

        function jc(a) {
            B[r];
            r = v(a);
            vb = B[r];
            x.L(r);
            Xb(r);
            return r
        }

        function Gc(b, c) {
            y = 0;
            jc(b);
            if (u & 2 && (lb > 0 && r == s - 1 || lb < 0 && !r)) u = 0;
            a.m(i.$EVT_PARK, r, c)
        }

        function Xb(a, c) {
            P = a;
            b.$Each(T, function (b) {
                b.qc(v(a), a, c)
            })
        }

        function wc() {
            var b = i.Od || 0,
                a = ab;
            if (Y) a & 1 && (a &= 1);
            i.Od |= a;
            return O = a & ~b
        }

        function tc() {
            if (O) {
                i.Od &= ~ab;
                O = 0
            }
        }

        function Zb() {
            var a = b.$CreateDiv();
            b.N(a, W);
            b.A(a, "absolute");
            return a
        }

        function v(b, a) {
            a = a || s || 1;
            return (b % a + a) % a
        }

        function pb(c, a, b) {
            u & 8 && (u = 0);
            Ib(c, Ab, a, b)
        }

        function zb() {
            b.$Each(T, function (a) {
                a.Lc(a.Nb.$ChanceToShow <= F)
            })
        }

        function lc() {
            if (!F) {
                F = 1;
                zb();
                if (!D) {
                    E & 12 && gc();
                    E & 3 && B[r] && B[r].Hc()
                }
            }
        }

        function kc() {
            if (F) {
                F = 0;
                zb();
                D || !(E & 12) || ic()
            }
        }

        function mc() {
            W = {
                T: M,
                W: L,
                $Top: 0,
                $Left: 0
            };
            b.$Each(U, function (a) {
                b.N(a, W);
                b.A(a, "absolute");
                b.lb(a, "hidden");
                b.R(a)
            });
            b.N(eb, W)
        }

        function Bb(b, a) {
            Ib(b, a, e)
        }

        function Ib(h, g, l, m) {
            if (Ub && (!D && (F || !(E & 12)) || o.$NaviQuitDrag)) {
                Q = e;
                D = k;
                A.qb();
                if (g == f) g = Ab;
                var d = Gb.Ab(),
                    b = h;
                if (l) {
                    b = P + h;
                    if (h > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                var a = b;
                if (!(N & 1))
                    if (m) a = v(b);
                    else {
                        a = c.max(0, c.min(b, s - w));
                        if (a == P)
                            if (N & 2) a = a ? 0 : s - w
                    }
                var j = (a - d) % s;
                a = d + j;
                var i = d == a ? 0 : g * c.abs(j);
                i = c.min(i, g * w * 1.5);
                A.Qb(d, a, i || 1)
            }
        }
        a.$PlayTo = Ib;
        a.$GoTo = function (a) {
            jc(a)
        };
        a.$Next = function () {
            Bb(1)
        };
        a.$Prev = function () {
            Bb(-1)
        };
        a.$Pause = function () {
            u = 0
        };
        a.$Play = function () {
            a.$AutoPlay(u || 1)
        };
        a.$SetSlideshowTransitions = function (a) {
            o.$SlideshowOptions.$Transitions = a
        };
        a.$SetCaptionTransitions = function (a) {
            I.$Transitions = a;
            I.Cc = b.V()
        };
        a.$SlidesCount = function () {
            return U.length
        };
        a.$CurrentIndex = function () {
            return r
        };
        a.$AutoPlay = function (a) {
            if (a == f) return a;
            if (a != u) {
                u = a;
                u && B[r] && B[r].Hc()
            }
        };
        a.$IsDragging = function () {
            return D
        };
        a.$IsSliding = function () {
            return Q
        };
        a.$IsMouseOver = function () {
            return !F
        };
        a.$LastDragSucceded = function () {
            return J
        };

        function Z() {
            return b.$CssWidth(z || q)
        }

        function kb() {
            return b.$CssHeight(z || q)
        }
        a.$OriginalWidth = a.$GetOriginalWidth = Z;
        a.$OriginalHeight = a.$GetOriginalHeight = kb;

        function Jb(c, d) {
            if (c == f) return b.$CssWidth(q);
            if (!z) {
                var a = b.$CreateDiv(g);
                b.vd(a, b.vd(q));
                b.$CssCssText(a, b.$CssCssText(q));
                b.hb(a, "block");
                b.A(a, "relative");
                b.C(a, 0);
                b.B(a, 0);
                b.lb(a, "visible");
                z = b.$CreateDiv(g);
                b.A(z, "absolute");
                b.C(z, 0);
                b.B(z, 0);
                b.$CssWidth(z, b.$CssWidth(q));
                b.$CssHeight(z, b.$CssHeight(q));
                b.me(z, "0 0");
                b.$AppendChild(z, a);
                var i = b.$Children(q);
                b.$AppendChild(q, z);
                b.$Css(q, "backgroundImage", "");
                b.$Each(i, function (c) {
                    b.$AppendChild(b.$AttributeEx(c, "noscale") ? q : a, c);
                    b.$AttributeEx(c, "autocenter") && Ob.push(c)
                })
            }
            bb = c / (d ? b.$CssHeight : b.$CssWidth)(z);
            b.mf(z, bb);
            var h = d ? bb * Z() : c,
                e = d ? c : bb * kb();
            b.$CssWidth(q, h);
            b.$CssHeight(q, e);
            b.$Each(Ob, function (a) {
                var c = b.oc(b.$AttributeEx(a, "autocenter"));
                b.Uf(a, c)
            })
        }
        a.$ScaleHeight = a.$GetScaleHeight = function (a) {
            if (a == f) return b.$CssHeight(q);
            Jb(a, e)
        };
        a.$ScaleWidth = a.$SetScaleWidth = a.$GetScaleWidth = Jb;
        a.ae = function (a) {
            var d = c.ceil(v(hb / dc)),
                b = v(a - P + d);
            if (b > w) {
                if (a - P > s / 2) a -= s;
                else if (a - P <= -s / 2) a += s
            } else a = P + b - d;
            return a
        };
        m.call(a);
        a.$Elmt = q = b.$GetElement(q);
        var o = b.p({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: 0,
            $Loop: 1,
            $HWA: e,
            $NaviQuitDrag: e,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: d.$OutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, hc);
        o.$HWA = o.$HWA && b.ef();
        if (o.$Idle != f) o.$AutoPlayInterval = o.$Idle;
        if (o.$ParkingPosition != f) o.$Align = o.$ParkingPosition;
        var ib = o.$PlayOrientation & 3,
            fb = o.$SlideshowOptions,
            I = b.p({
                $Class: p,
                $PlayInMode: 1,
                $PlayOutMode: 1,
                $HWA: o.$HWA
            }, o.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var rb = o.$BulletNavigatorOptions,
            X = o.$ArrowNavigatorOptions,
            cb = o.$ThumbnailNavigatorOptions,
            R = !o.$UISearchMode,
            z, t = b.$FindChild(q, "slides", R),
            eb = b.$FindChild(q, "loading", R) || b.$CreateDiv(g),
            Mb = b.$FindChild(q, "navigator", R),
            ec = b.$FindChild(q, "arrowleft", R),
            cc = b.$FindChild(q, "arrowright", R),
            Kb = b.$FindChild(q, "thumbnavigator", R),
            pc = b.$CssWidth(t),
            oc = b.$CssHeight(t),
            W, U = [],
            xc = b.$Children(t);
        b.$Each(xc, function (a) {
            a.tagName == "DIV" && !b.$AttributeEx(a, "u") && U.push(a);
            b.z(a, (b.z(a) || 0) + 1)
        });
        var r = -1,
            P, vb, s = U.length,
            M = o.$SlideWidth || pc,
            L = o.$SlideHeight || oc,
            Yb = o.$SlideSpacing,
            Db = M + Yb,
            Eb = L + Yb,
            dc = ib & 1 ? Db : Eb,
            w = c.min(o.$Cols, s),
            jb, y, O, Cb, T = [],
            Tb, Vb, Rb, fc, Fc, u, lb = o.$AutoPlaySteps,
            E = o.$PauseOnHover,
            qc = o.$AutoPlayInterval,
            Ab = o.$SlideDuration,
            sb, wb, hb, Ub = w < s,
            N = Ub ? o.$Loop : 0,
            ab, J, F = 1,
            Q, D, S, xb = 0,
            yb = 0,
            H, db, gb, Gb, x, V, A, Wb = new sc,
            bb, Ob = [];
        if (s) {
            var Hb = b.$Device(),
                Y = Hb.Jf;
            if (o.$HWA && (Y || !b.$IsBrowserFireFox() || b.$BrowserVersion() < 53)) tb = function (a, c, d) {
                b.Db(a, {
                    $TranslateX: c,
                    $TranslateY: d
                })
            };
            u = o.$AutoPlay & 63;
            a.Nb = hc;
            mc();
            b.$Attribute(q, "jssor-slider", e);
            b.z(t, b.z(t) || 0);
            b.A(t, "absolute");
            jb = b.$CloneNode(t, e);
            b.ec(jb, t);
            if (fb) {
                fc = fb.$ShowLink;
                sb = fb.$Class;
                wb = w == 1 && s > 1 && sb && (!b.$IsBrowserIE() || b.$BrowserVersion() >= 8)
            }
            hb = wb || w >= s || !(N & 1) ? 0 : o.$Align;
            ab = (w > 1 || hb ? ib : -1) & o.$DragOrientation;
            var B = [],
                C, K, G, qb, Nb, ub;
            Hb.Md && b.$Css(t, Hb.Md, ([j, "pan-y", "pan-x", "none"])[ab] || "");
            V = new Cc;
            if (wb) C = new sb(Wb, M, L, fb, Y, tb);
            b.$AppendChild(jb, V.hc);
            b.lb(t, "hidden");
            K = Zb();
            b.$Css(K, "backgroundColor", "#000");
            b.Hb(K, 0);
            b.z(K, 0);
            b.ec(K, t.firstChild, t);
            for (var ob = 0; ob < U.length; ob++) {
                var zc = U[ob],
                    Bc = new Ac(zc, ob);
                B.push(Bc)
            }
            b.R(eb);
            Gb = new Dc;
            A = new rc(Gb, V);
            b.$AddEvent(t, "click", nc, e);
            b.$AddEvent(q, "mouseout", b.nc(lc, q));
            b.$AddEvent(q, "mouseover", b.nc(kc, q));
            if (ab) {
                b.$AddEvent(t, "mousedown", ac);
                b.$AddEvent(t, "touchstart", vc);
                b.$AddEvent(t, "dragstart", Lb);
                b.$AddEvent(t, "selectstart", Lb);
                b.$AddEvent(g, "mouseup", nb);
                b.$AddEvent(g, "touchend", nb);
                b.$AddEvent(g, "touchcancel", nb);
                b.$AddEvent(h, "blur", nb)
            }
            E &= Y ? 10 : 5;
            if (Mb && rb) {
                Tb = new rb.$Class(Mb, rb, Z(), kb());
                T.push(Tb)
            }
            if (X && ec && cc) {
                X.$Loop = N;
                X.$Cols = w;
                Vb = new X.$Class(ec, cc, X, Z(), kb());
                T.push(Vb)
            }
            if (Kb && cb) {
                cb.$StartIndex = o.$StartIndex;
                Rb = new cb.$Class(Kb, cb);
                T.push(Rb)
            }
            b.$Each(T, function (a) {
                a.Fc(s, B, eb);
                a.$On(n.ic, pb)
            });
            b.$Css(q, "visibility", "visible");
            Jb(Z());
            zb();
            o.$ArrowKeyNavigation && b.$AddEvent(g, "keydown", function (a) {
                if (a.keyCode == 37) pb(-o.$ArrowKeyNavigation, e);
                else a.keyCode == 39 && pb(o.$ArrowKeyNavigation, e)
            });
            var mb = o.$StartIndex;
            if (!(N & 1)) mb = c.max(0, c.min(mb, s - w));
            A.Qb(mb, mb, 0)
        }
    };
    i.$EVT_CLICK = 21;
    i.$EVT_DRAG_START = 22;
    i.$EVT_DRAG_END = 23;
    i.$EVT_SWIPE_START = 24;
    i.$EVT_SWIPE_END = 25;
    i.$EVT_LOAD_START = 26;
    i.$EVT_LOAD_END = 27;
    i.Hf = 28;
    i.$EVT_POSITION_CHANGE = 202;
    i.$EVT_PARK = 203;
    i.$EVT_SLIDESHOW_START = 206;
    i.$EVT_SLIDESHOW_END = 207;
    i.$EVT_PROGRESS_CHANGE = 208;
    i.$EVT_STATE_CHANGE = 209;
    var n = {
        ic: 1
    };
    h.$JssorBulletNavigator$ = function (d, C) {
        var f = this;
        m.call(f);
        d = b.$GetElement(d);
        var s, A, z, r, l = 0,
            a, o, i, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].wd(a == l)
        }

        function t(a) {
            f.m(n.ic, a * o)
        }
        f.$Elmt = d;
        f.qc = function (a) {
            if (a != r) {
                var d = l,
                    b = c.floor(a / o);
                l = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.Lc = function (a) {
            b.u(d, a)
        };
        var u;
        f.Fc = function (E) {
            if (!u) {
                s = c.ceil(E / o);
                l = 0;
                var n = q + w,
                    r = p + x,
                    m = c.ceil(s / i) - 1;
                A = q + n * (!h ? m : i - 1);
                z = p + r * (h ? m : i - 1);
                b.$CssWidth(d, A);
                b.$CssHeight(d, z);
                for (var f = 0; f < s; f++) {
                    var C = b.Nf();
                    b.$InnerText(C, f + 1);
                    var k = b.cd(g, "numbertemplate", C, e);
                    b.A(k, "absolute");
                    var v = f % (m + 1);
                    b.B(k, !h ? n * v : f % i * n);
                    b.C(k, h ? r * v : c.floor(f / (m + 1)) * r);
                    b.$AppendChild(d, k);
                    B[f] = k;
                    a.$ActionMode & 1 && b.$AddEvent(k, "click", b.$CreateCallback(j, t, f));
                    a.$ActionMode & 2 && b.$AddEvent(k, "mouseover", b.nc(b.$CreateCallback(j, t, f), k));
                    y[f] = b.Zb(k)
                }
                u = e
            }
        };
        f.Nb = a = b.p({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = b.$FindChild(d, "prototype");
        q = b.$CssWidth(g);
        p = b.$CssHeight(g);
        b.Ib(g, d);
        o = a.$Steps || 1;
        i = a.$Rows || 1;
        w = a.$SpacingX;
        x = a.$SpacingY;
        h = a.$Orientation - 1;
        a.$Scale == k && b.$Attribute(d, "noscale", e);
        a.$AutoCenter && b.$Attribute(d, "autocenter", a.$AutoCenter)
    };
    h.$JssorArrowNavigator$ = function (a, g, h) {
        var c = this;
        m.call(c);
        var r, d, f, i;
        b.$CssWidth(a);
        b.$CssHeight(a);
        var p, o;

        function l(a) {
            c.m(n.ic, a, e)
        }

        function t(c) {
            b.u(a, c);
            b.u(g, c)
        }

        function s() {
            p.$Enable(h.$Loop || d > 0);
            o.$Enable(h.$Loop || d < r - h.$Cols)
        }
        c.qc = function (b, a, c) {
            if (c) d = a;
            else {
                d = b;
                s()
            }
        };
        c.Lc = t;
        var q;
        c.Fc = function (c) {
            r = c;
            d = 0;
            if (!q) {
                b.$AddEvent(a, "click", b.$CreateCallback(j, l, -i));
                b.$AddEvent(g, "click", b.$CreateCallback(j, l, i));
                p = b.Zb(a);
                o = b.Zb(g);
                q = e
            }
        };
        c.Nb = f = b.p({
            $Steps: 1
        }, h);
        i = f.$Steps;
        if (f.$Scale == k) {
            b.$Attribute(a, "noscale", e);
            b.$Attribute(g, "noscale", e)
        }
        if (f.$AutoCenter) {
            b.$Attribute(a, "autocenter", f.$AutoCenter);
            b.$Attribute(g, "autocenter", f.$AutoCenter)
        }
    };
    h.$JssorThumbnailNavigator$ = function (g, B) {
        var h = this,
            y, p, a, v = [],
            z, x, d, q, r, u, t, o, s, f, l;
        m.call(h);
        g = b.$GetElement(g);

        function A(q, f) {
            var g = this,
                c, o, m;

            function r() {
                o.wd(p == f)
            }

            function i(g) {
                if (g || !s.$LastDragSucceded()) {
                    var a = d - f % d,
                        b = s.ae((f + a) / d - 1),
                        c = b * d + d - a;
                    h.m(n.ic, c, k, e)
                }
            }
            g.tb = f;
            g.ie = r;
            m = q.hf || q.lc || b.$CreateDiv();
            g.hc = c = b.cd(l, "thumbnailtemplate", m, e);
            o = b.Zb(c);
            a.$ActionMode & 1 && b.$AddEvent(c, "click", b.$CreateCallback(j, i, 0));
            a.$ActionMode & 2 && b.$AddEvent(c, "mouseover", b.nc(b.$CreateCallback(j, i, 1), c))
        }
        h.qc = function (b, e, f) {
            var a = p;
            p = b;
            a != -1 && v[a].ie();
            v[b].ie();
            !f && s.$PlayTo(s.ae(c.floor(e / d)))
        };
        h.Lc = function (a) {
            b.u(g, a)
        };
        var w;
        h.Fc = function (F, D) {
            if (!w) {
                y = F;
                c.ceil(y / d);
                p = -1;
                o = c.min(o, D.length);
                var h = a.$Orientation & 1,
                    m = u + (u + q) * (d - 1) * (1 - h),
                    l = t + (t + r) * (d - 1) * h,
                    B = m + (m + q) * (o - 1) * h,
                    n = l + (l + r) * (o - 1) * (1 - h);
                b.A(f, "absolute");
                b.lb(f, "hidden");
                a.$AutoCenter & 1 && b.B(f, (z - B) / 2);
                a.$AutoCenter & 2 && b.C(f, (x - n) / 2);
                b.$CssWidth(f, B);
                b.$CssHeight(f, n);
                var j = [];
                b.$Each(D, function (l, g) {
                    var i = new A(l, g),
                        e = i.hc,
                        a = c.floor(g / d),
                        k = g % d;
                    b.B(e, (u + q) * k * (1 - h));
                    b.C(e, (t + r) * k * h);
                    if (!j[a]) {
                        j[a] = b.$CreateDiv();
                        b.$AppendChild(f, j[a])
                    }
                    b.$AppendChild(j[a], e);
                    v.push(i)
                });
                var E = b.p({
                    $AutoPlay: 0,
                    $NaviQuitDrag: k,
                    $SlideWidth: m,
                    $SlideHeight: l,
                    $SlideSpacing: q * h + r * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                s = new i(g, E);
                w = e
            }
        };
        h.Nb = a = b.p({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, B);
        z = b.$CssWidth(g);
        x = b.$CssHeight(g);
        f = b.$FindChild(g, "slides", e);
        l = b.$FindChild(f, "prototype");
        u = b.$CssWidth(l);
        t = b.$CssHeight(l);
        b.Ib(l, f);
        d = a.$Rows || 1;
        q = a.$SpacingX;
        r = a.$SpacingY;
        o = a.$Cols;
        a.$Scale == k && b.$Attribute(g, "noscale", e)
    };

    function p(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.zd = b.Dd;
        a.Ld = 0;
        a.Kd = c
    }
    h.$JssorCaptionSlideo$ = function (v, i, u, E) {
        var a = this,
            w, o = {},
            p = i.$Transitions,
            s = i.$Controls,
            m = new l(0, 0),
            q = [],
            g = [],
            D = E,
            f = D ? 1e8 : 0;
        l.call(a, 0, 0);

        function r(d, c) {
            var a = {};
            b.$Each(d, function (d, f) {
                var e = o[f];
                if (e) {
                    if (b.Qd(d)) d = r(d, c || f == "e");
                    else if (c)
                        if (b.jc(d)) d = w[d];
                    a[e] = d
                }
            });
            return a
        }

        function t(d, e) {
            var a = [],
                c = b.$Children(d);
            b.$Each(c, function (c) {
                var h = b.$AttributeEx(c, "u") == "caption";
                if (h) {
                    var d = b.$AttributeEx(c, "t"),
                        g = p[b.oc(d)] || p[d],
                        f = {
                            $Elmt: c,
                            pc: g
                        };
                    a.push(f)
                }
                a = a.concat(t(c, e + 1))
            });
            return a
        }

        function n(c, e) {
            var a = q[c];
            if (a == j) {
                a = q[c] = {
                    Y: c,
                    Oc: [],
                    Yd: []
                };
                var d = 0;
                !b.$Each(g, function (a, b) {
                    d = b;
                    return a.Y > c
                }) && d++;
                g.splice(d, 0, a)
            }
            return a
        }

        function z(t, u, g) {
            var a, d;
            if (s) {
                var o = b.$AttributeEx(t, "c");
                if (o) {
                    var m = s[b.oc(o)];
                    if (m) {
                        a = n(m.r, 0);
                        a.Ge = m.e || 0
                    }
                }
            }
            b.$Each(u, function (i) {
                var h = b.p(e, {}, r(i)),
                    j = b.zc(h.$Easing);
                delete h.$Easing;
                if (h.$Left) {
                    h.v = h.$Left;
                    j.v = j.$Left;
                    delete h.$Left
                }
                if (h.$Top) {
                    h.D = h.$Top;
                    j.D = j.$Top;
                    delete h.$Top
                }
                var o = {
                        $Easing: j,
                        $OriginalWidth: g.T,
                        $OriginalHeight: g.W
                    },
                    k = new l(i.b, i.d, o, t, g, h);
                f = c.max(f, i.b + i.d);
                if (a) {
                    if (!d) d = new l(i.b, 0);
                    d.P(k)
                } else {
                    var m = n(i.b, i.b + i.d);
                    m.Oc.push(k)
                }
                g = b.Qe(g, h)
            });
            if (a && d) {
                d.Ke();
                var h = d,
                    k, i = d.Vb(),
                    p = d.mb(),
                    q = c.max(p, a.Ge);
                if (a.Y < p) {
                    if (a.Y > i) {
                        h = new l(i, a.Y - i);
                        h.P(d, e)
                    } else h = j;
                    k = new l(a.Y, q - i, {
                        Gc: q - a.Y,
                        xe: e
                    });
                    k.P(d, e)
                }
                h && a.Oc.push(h);
                k && a.Yd.push(k)
            }
            return g
        }

        function y(a) {
            b.$Each(a, function (f) {
                var a = f.$Elmt,
                    e = b.$CssWidth(a),
                    d = b.$CssHeight(a),
                    c = {
                        $Left: b.B(a),
                        $Top: b.C(a),
                        v: 0,
                        D: 0,
                        $Opacity: 1,
                        $ZIndex: b.z(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        T: e,
                        W: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.Sc = c.$Left;
                c.Rc = c.$Top;
                z(a, f.pc, c)
            })
        }

        function B(f, d, g) {
            var c = f.b - d;
            if (c) {
                var b = new l(d, c);
                b.P(m, e);
                b.$Shift(g);
                a.P(b)
            }
            a.be(f.d);
            return c
        }

        function A(e) {
            var c = m.Vb(),
                d = 0;
            b.$Each(e, function (e, f) {
                e = b.p({
                    d: u
                }, e);
                B(e, c, d);
                c = e.b;
                d += e.d;
                if (!f || e.t == 2) {
                    a.Ld = c;
                    a.Kd = c + e.d
                }
            })
        }

        function h(k, d, e) {
            var g = d.length;
            if (g > 4)
                for (var m = c.ceil(g / 4), a = 0; a < m; a++) {
                    var i = d.slice(a * 4, c.min(a * 4 + 4, g)),
                        j = new l(i[0].Y, 0);
                    h(j, i, e);
                    k.P(j)
                } else b.$Each(d, function (a) {
                    b.$Each(e ? a.Yd : a.Oc, function (a) {
                        e && a.be(f - a.mb());
                        k.P(a)
                    })
                })
        }
        a.zd = function () {
            a.L(-1, e)
        };
        w = [d.$Linear, d.$Swing, d.$InQuad, d.$OutQuad, d.$InOutQuad, d.$InCubic, d.$OutCubic, d.$InOutCubic, d.$InQuart, d.$OutQuart, d.$InOutQuart, d.$InQuint, d.$OutQuint, d.$InOutQuint, d.$InSine, d.$OutSine, d.$InOutSine, d.$InExpo, d.$OutExpo, d.$InOutExpo, d.$InCirc, d.$OutCirc, d.$InOutCirc, d.$InElastic, d.$OutElastic, d.$InOutElastic, d.$InBack, d.$OutBack, d.$InOutBack, d.$InBounce, d.$OutBounce, d.$InOutBounce, d.$Early, d.$Late];
        var C = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.$Each(C, function (b, a) {
            o[b] = a
        });
        y(t(v, 1));
        h(m, g);
        var x = i.$Breaks || [],
            k = [].concat(x[b.oc(b.$AttributeEx(v, "b"))] || []);
        k.push({
            b: f,
            d: k.length ? 0 : u
        });
        A(k);
        f = c.max(f, a.mb());
        h(a, g, e);
        a.L(-1)
    }
})(window, document, Math, null, true, false)
