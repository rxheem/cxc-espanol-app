/**
 * Push v1.0-beta
 * ==============
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!(function(e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).Push = e();
  }
})(function() {
  return (function e(t, n, i) {
    function o(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var u = "function" == typeof require && require;
          if (!a && u) return u(s, !0);
          if (r) return r(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var f = (n[s] = {
          exports: {}
        });
        t[s][0].call(
          f.exports,
          function(e) {
            var n = t[s][1][e];
            return o(n || e);
          },
          f,
          f.exports,
          e,
          t,
          n,
          i
        );
      }
      return n[s].exports;
    }
    for (
      var r = "function" == typeof require && require, s = 0;
      s < i.length;
      s++
    )
      o(i[s]);
    return o;
  })(
    {
      1: [
        function(e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          n.default = {
            errors: {
              incompatible: "PushError: Push.js is incompatible with browser.",
              invalid_plugin:
                "PushError: plugin class missing from plugin manifest (invalid plugin). Please check the documentation.",
              invalid_title:
                "PushError: title of notification must be a string",
              permission_denied: "PushError: permission request declined",
              sw_notification_error:
                "PushError: could not show a ServiceWorker notification due to the following reason: ",
              sw_registration_error:
                "PushError: could not register the ServiceWorker due to the following reason: ",
              unknown_interface:
                "PushError: unable to create notification: unknown interface"
            }
          };
        },
        {}
      ],
      2: [
        function(e, t, n) {
          "use strict";

          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var o = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            r = (function() {
              function e(t) {
                i(this, e),
                  (this._win = t),
                  (this.DEFAULT = "default"),
                  (this.GRANTED = "granted"),
                  (this.DENIED = "denied"),
                  (this._permissions = [
                    this.GRANTED,
                    this.DEFAULT,
                    this.DENIED
                  ]);
              }
              return (
                o(e, [
                  {
                    key: "request",
                    value: function(e, t) {
                      var n = this,
                        i = this.get(),
                        o = function(i) {
                          i === n.GRANTED || 0 === i ? e && e() : t && t();
                        };
                      i !== this.DEFAULT
                        ? o(i)
                        : this._win.Notification &&
                          this._win.Notification.requestPermission
                        ? this._win.Notification.requestPermission()
                            .then(o)
                            .catch(function() {
                              t && t();
                            })
                        : this._win.webkitNotifications &&
                          this._win.webkitNotifications.checkPermission
                        ? this._win.webkitNotifications.requestPermission(o)
                        : e && e();
                    }
                  },
                  {
                    key: "has",
                    value: function() {
                      return this.get() === this.GRANTED;
                    }
                  },
                  {
                    key: "get",
                    value: function() {
                      return this._win.Notification &&
                        this._win.Notification.permission
                        ? this._win.Notification.permission
                        : this._win.webkitNotifications &&
                          this._win.webkitNotifications.checkPermission
                        ? this._permissions[
                            this._win.webkitNotifications.checkPermission()
                          ]
                        : navigator.mozNotification
                        ? this.GRANTED
                        : this._win.external && this._win.external.msIsSiteMode
                        ? this._win.external.msIsSiteMode()
                          ? this.GRANTED
                          : this.DEFAULT
                        : this.GRANTED;
                    }
                  }
                ]),
                e
              );
            })();
          n.default = r;
        },
        {}
      ],
      3: [
        function(e, t, n) {
          "use strict";

          function i(e) {
            return e && e.__esModule
              ? e
              : {
                  default: e
                };
          }

          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var r = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            s = i(e("./Messages")),
            a = i(e("./Permission")),
            u = i(e("./Util")),
            c = i(e("./agents/DesktopAgent")),
            f = i(e("./agents/MobileChromeAgent")),
            l = i(e("./agents/MobileFirefoxAgent")),
            h = i(e("./agents/MSAgent")),
            d = i(e("./agents/WebKitAgent")),
            p = (function() {
              function e(t) {
                o(this, e),
                  (this._currentId = 0),
                  (this._notifications = {}),
                  (this._win = t),
                  (this.Permission = new a.default(t)),
                  (this._agents = {
                    desktop: new c.default(t),
                    chrome: new f.default(t),
                    firefox: new l.default(t),
                    ms: new h.default(t),
                    webkit: new d.default(t)
                  }),
                  (this._configuration = {
                    serviceWorker: "/serviceWorker.min.js",
                    fallback: function(e) {}
                  });
              }
              return (
                r(e, [
                  {
                    key: "_closeNotification",
                    value: function(e) {
                      var t = !0,
                        n = this._notifications[e];
                      if (void 0 !== n) {
                        if (
                          ((t = this._removeNotification(e)),
                          this._agents.desktop.isSupported())
                        )
                          this._agents.desktop.close(n);
                        else if (this._agents.webkit.isSupported())
                          this._agents.webkit.close(n);
                        else {
                          if (!this._agents.ms.isSupported())
                            throw ((t = !1),
                            new Error(s.default.errors.unknown_interface));
                          this._agents.ms.close();
                        }
                        return t;
                      }
                      return !1;
                    }
                  },
                  {
                    key: "_addNotification",
                    value: function(e) {
                      var t = this._currentId;
                      return (this._notifications[t] = e), this._currentId++, t;
                    }
                  },
                  {
                    key: "_removeNotification",
                    value: function(e) {
                      var t = !1;
                      return (
                        this._notifications.hasOwnProperty(e) &&
                          (delete this._notifications[e], (t = !0)),
                        t
                      );
                    }
                  },
                  {
                    key: "_prepareNotification",
                    value: function(e, t) {
                      var n = this,
                        i = void 0;
                      return (
                        (i = {
                          get: function() {
                            return n._notifications[e];
                          },
                          close: function() {
                            n._closeNotification(e);
                          }
                        }),
                        t.timeout &&
                          setTimeout(function() {
                            i.close();
                          }, t.timeout),
                        i
                      );
                    }
                  },
                  {
                    key: "_serviceWorkerCallback",
                    value: function(e, t, n) {
                      var i = this,
                        o = this._addNotification(e[e.length - 1]);
                      navigator.serviceWorker.addEventListener(
                        "message",
                        function(e) {
                          var t = JSON.parse(e.data);
                          "close" === t.action &&
                            Number.isInteger(t.id) &&
                            i._removeNotification(t.id);
                        }
                      ),
                        n(this._prepareNotification(o, t));
                    }
                  },
                  {
                    key: "_createCallback",
                    value: function(e, t, n) {
                      var i = this,
                        o = void 0,
                        r = null;
                      if (
                        ((t = t || {}),
                        (o = function(e) {
                          i._removeNotification(e),
                            u.default.isFunction(t.onClose) &&
                              t.onClose.call(i, r);
                        }),
                        this._agents.desktop.isSupported())
                      )
                        try {
                          r = this._agents.desktop.create(e, t);
                        } catch (o) {
                          var s = this._currentId,
                            a = this.config().serviceWorker,
                            c = function(e) {
                              return i._serviceWorkerCallback(e, t, n);
                            };
                          this._agents.chrome.isSupported() &&
                            this._agents.chrome.create(s, e, t, a, c);
                        }
                      else
                        this._agents.webkit.isSupported()
                          ? (r = this._agents.webkit.create(e, t))
                          : this._agents.firefox.isSupported()
                          ? this._agents.firefox.create(e, t)
                          : this._agents.ms.isSupported()
                          ? (r = this._agents.ms.create(e, t))
                          : ((t.title = e), this.config().fallback(t));
                      if (null !== r) {
                        var f = this._addNotification(r),
                          l = this._prepareNotification(f, t);
                        u.default.isFunction(t.onShow) &&
                          r.addEventListener("show", t.onShow),
                          u.default.isFunction(t.onError) &&
                            r.addEventListener("error", t.onError),
                          u.default.isFunction(t.onClick) &&
                            r.addEventListener("click", t.onClick),
                          r.addEventListener("close", function() {
                            o(f);
                          }),
                          r.addEventListener("cancel", function() {
                            o(f);
                          }),
                          n(l);
                      }
                      n(null);
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t) {
                      var n = this,
                        i = void 0;
                      if (!u.default.isString(e))
                        throw new Error(s.default.errors.invalid_title);
                      return (
                        (i = this.Permission.has()
                          ? function(i, o) {
                              try {
                                n._createCallback(e, t, i);
                              } catch (e) {
                                o(e);
                              }
                            }
                          : function(i, o) {
                              n.Permission.request(
                                function() {
                                  try {
                                    n._createCallback(e, t, i);
                                  } catch (e) {
                                    o(e);
                                  }
                                },
                                function() {
                                  o(s.default.errors.permission_denied);
                                }
                              );
                            }),
                        new Promise(i)
                      );
                    }
                  },
                  {
                    key: "count",
                    value: function() {
                      var e = void 0,
                        t = 0;
                      for (e in this._notifications)
                        this._notifications.hasOwnProperty(e) && t++;
                      return t;
                    }
                  },
                  {
                    key: "close",
                    value: function(e) {
                      var t = void 0;
                      for (t in this._notifications)
                        if (
                          this._notifications.hasOwnProperty(t) &&
                          this._notifications[t].tag === e
                        )
                          return this._closeNotification(t);
                    }
                  },
                  {
                    key: "clear",
                    value: function() {
                      var e = void 0,
                        t = !0;
                      for (e in this._notifications)
                        this._notifications.hasOwnProperty(e) &&
                          (t = t && this._closeNotification(e));
                      return t;
                    }
                  },
                  {
                    key: "supported",
                    value: function() {
                      var e = !1;
                      for (var t in this._agents)
                        this._agents.hasOwnProperty(t) &&
                          (e = e || this._agents[t].isSupported());
                      return e;
                    }
                  },
                  {
                    key: "config",
                    value: function(e) {
                      return (
                        (void 0 !== e ||
                          (null !== e && u.default.isObject(e))) &&
                          u.default.objectMerge(this._configuration, e),
                        this._configuration
                      );
                    }
                  },
                  {
                    key: "extend",
                    value: function(e) {
                      var t,
                        n = {}.hasOwnProperty;
                      if (!n.call(e, "plugin"))
                        throw new Error(s.default.errors.invalid_plugin);
                      n.call(e, "config") &&
                        u.default.isObject(e.config) &&
                        null !== e.config &&
                        this.config(e.config),
                        (t = new (0, e.plugin)(this.config()));
                      for (var i in t)
                        n.call(t, i) &&
                          u.default.isFunction(t[i]) &&
                          (this[i] = t[i]);
                    }
                  }
                ]),
                e
              );
            })();
          n.default = p;
        },
        {
          "./Messages": 1,
          "./Permission": 2,
          "./Util": 4,
          "./agents/DesktopAgent": 6,
          "./agents/MSAgent": 7,
          "./agents/MobileChromeAgent": 8,
          "./agents/MobileFirefoxAgent": 9,
          "./agents/WebKitAgent": 10
        }
      ],
      4: [
        function(e, t, n) {
          "use strict";

          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            r = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            s = (function() {
              function e() {
                i(this, e);
              }
              return (
                r(e, null, [
                  {
                    key: "isUndefined",
                    value: function(e) {
                      return void 0 === e;
                    }
                  },
                  {
                    key: "isString",
                    value: function(e) {
                      return "string" == typeof e;
                    }
                  },
                  {
                    key: "isFunction",
                    value: function(e) {
                      return e && "[object Function]" === {}.toString.call(e);
                    }
                  },
                  {
                    key: "isObject",
                    value: function(e) {
                      return "object" == (void 0 === e ? "undefined" : o(e));
                    }
                  },
                  {
                    key: "objectMerge",
                    value: function(e, t) {
                      for (var n in t)
                        e.hasOwnProperty(n) &&
                        this.isObject(e[n]) &&
                        this.isObject(t[n])
                          ? this.objectMerge(e[n], t[n])
                          : (e[n] = t[n]);
                    }
                  }
                ]),
                e
              );
            })();
          n.default = s;
        },
        {}
      ],
      5: [
        function(e, t, n) {
          "use strict";

          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          n.default = function e(t) {
            i(this, e), (this._win = t);
          };
        },
        {}
      ],
      6: [
        function(e, t, n) {
          "use strict";

          function i(e) {
            return e && e.__esModule
              ? e
              : {
                  default: e
                };
          }

          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }

          function r(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }

          function s(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            u = i(e("./AbstractAgent")),
            c = i(e("../Util")),
            f = (function(e) {
              function t() {
                return (
                  o(this, t),
                  r(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                s(t, u.default),
                a(t, [
                  {
                    key: "isSupported",
                    value: function() {
                      return void 0 !== this._win.Notification;
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t) {
                      return new this._win.Notification(e, {
                        icon:
                          c.default.isString(t.icon) ||
                          c.default.isUndefined(t.icon)
                            ? t.icon
                            : t.icon.x32,
                        body: t.body,
                        tag: t.tag,
                        requireInteraction: t.requireInteraction
                      });
                    }
                  },
                  {
                    key: "close",
                    value: function(e) {
                      e.close();
                    }
                  }
                ]),
                t
              );
            })();
          n.default = f;
        },
        {
          "../Util": 4,
          "./AbstractAgent": 5
        }
      ],
      7: [
        function(e, t, n) {
          "use strict";

          function i(e) {
            return e && e.__esModule
              ? e
              : {
                  default: e
                };
          }

          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }

          function r(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }

          function s(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            u = i(e("./AbstractAgent")),
            c = i(e("../Util")),
            f = (function(e) {
              function t() {
                return (
                  o(this, t),
                  r(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                s(t, u.default),
                a(t, [
                  {
                    key: "isSupported",
                    value: function() {
                      return (
                        void 0 !== this._win.external &&
                        void 0 !== this._win.external.msIsSiteMode
                      );
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t) {
                      return (
                        this._win.external.msSiteModeClearIconOverlay(),
                        this._win.external.msSiteModeSetIconOverlay(
                          c.default.isString(t.icon) ||
                            c.default.isUndefined(t.icon)
                            ? t.icon
                            : t.icon.x16,
                          e
                        ),
                        this._win.external.msSiteModeActivate(),
                        null
                      );
                    }
                  },
                  {
                    key: "close",
                    value: function() {
                      this._win.external.msSiteModeClearIconOverlay();
                    }
                  }
                ]),
                t
              );
            })();
          n.default = f;
        },
        {
          "../Util": 4,
          "./AbstractAgent": 5
        }
      ],
      8: [
        function(e, t, n) {
          "use strict";

          function i(e) {
            return e && e.__esModule
              ? e
              : {
                  default: e
                };
          }

          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }

          function r(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }

          function s(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            u = i(e("./AbstractAgent")),
            c = i(e("../Util")),
            f = i(e("../Messages")),
            l = (function(e) {
              function t() {
                return (
                  o(this, t),
                  r(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                s(t, u.default),
                a(t, [
                  {
                    key: "isSupported",
                    value: function() {
                      return (
                        void 0 !== this._win.navigator &&
                        void 0 !== this._win.navigator.serviceWorker
                      );
                    }
                  },
                  {
                    key: "getFunctionBody",
                    value: function(e) {
                      return e.toString().match(/function[^{]+{([\s\S]*)}$/)[1];
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t, n, i, o) {
                      var r = this;
                      this._win.navigator.serviceWorker.register(i),
                        this._win.navigator.serviceWorker.ready
                          .then(function(i) {
                            var s = {
                              id: e,
                              link: n.link,
                              origin: document.location.href,
                              onClick: c.default.isFunction(n.onClick)
                                ? r.getFunctionBody(n.onClick)
                                : "",
                              onClose: c.default.isFunction(n.onClose)
                                ? r.getFunctionBody(n.onClose)
                                : ""
                            };
                            void 0 !== n.data &&
                              null !== n.data &&
                              (s = Object.assign(s, n.data)),
                              i
                                .showNotification(t, {
                                  icon: n.icon,
                                  body: n.body,
                                  vibrate: n.vibrate,
                                  tag: n.tag,
                                  data: s,
                                  requireInteraction: n.requireInteraction,
                                  silent: n.silent
                                })
                                .then(function() {
                                  i.getNotifications().then(function(e) {
                                    i.active.postMessage(""), o(e);
                                  });
                                })
                                .catch(function(e) {
                                  throw new Error(
                                    f.default.errors.sw_notification_error +
                                      e.message
                                  );
                                });
                          })
                          .catch(function(e) {
                            throw new Error(
                              f.default.errors.sw_registration_error + e.message
                            );
                          });
                    }
                  },
                  {
                    key: "close",
                    value: function() {}
                  }
                ]),
                t
              );
            })();
          n.default = l;
        },
        {
          "../Messages": 1,
          "../Util": 4,
          "./AbstractAgent": 5
        }
      ],
      9: [
        function(e, t, n) {
          "use strict";

          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }

          function o(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }

          function r(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var s = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            a = (function(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e
                  };
            })(e("./AbstractAgent")),
            u = (function(e) {
              function t() {
                return (
                  i(this, t),
                  o(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                r(t, a.default),
                s(t, [
                  {
                    key: "isSupported",
                    value: function() {
                      return void 0 !== this._win.navigator.mozNotification;
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t) {
                      var n = this._win.navigator.mozNotification.createNotification(
                        e,
                        t.body,
                        t.icon
                      );
                      return n.show(), n;
                    }
                  }
                ]),
                t
              );
            })();
          n.default = u;
        },
        {
          "./AbstractAgent": 5
        }
      ],
      10: [
        function(e, t, n) {
          "use strict";

          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }

          function o(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }

          function r(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var s = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            a = (function(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e
                  };
            })(e("./AbstractAgent")),
            u = (function(e) {
              function t() {
                return (
                  i(this, t),
                  o(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                r(t, a.default),
                s(t, [
                  {
                    key: "isSupported",
                    value: function() {
                      return void 0 !== this._win.webkitNotifications;
                    }
                  },
                  {
                    key: "create",
                    value: function(e, t) {
                      var n = this._win.webkitNotifications.createNotification(
                        t.icon,
                        e,
                        t.body
                      );
                      return n.show(), n;
                    }
                  },
                  {
                    key: "close",
                    value: function(e) {
                      e.cancel();
                    }
                  }
                ]),
                t
              );
            })();
          n.default = u;
        },
        {
          "./AbstractAgent": 5
        }
      ],
      11: [
        function(e, t, n) {
          "use strict";
          var i = (function(e) {
            return e && e.__esModule
              ? e
              : {
                  default: e
                };
          })(e("./classes/Push"));
          t.exports = new i.default(
            "undefined" != typeof window ? window : void 0
          );
        },
        {
          "./classes/Push": 3
        }
      ]
    },
    {},
    [11]
  )(11);
});
//# sourceMappingURL=push.min.js.map
