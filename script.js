!(function () {
  var t,
    e = {
      847: function (t, e, a) {
        a(27), a(421), a(895);
      },
      895: function () {
        var t = "rtl" === document.dir;
        $(".news-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: !0,
          rtl: t,
          dots: !0,
          autoplay: !0,
          autoplaySpeed: 2e3,
        }),
          $(".announcements-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: !0,
            autoplaySpeed: 5e3,
            rtl: t,
            responsive: [
              {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
              {
                breakpoint: 1440,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
              },
              { breakpoint: 1800, settings: { slidesToShow: 3 } },
            ],
          }),
          $(".albums-slider").slick({
            slidesToShow: 4,
            rtl: t,
            arrows: !1,
            useTransform: !1,
            responsive: [
              { breakpoint: 768, settings: { slidesToShow: 1 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 1200, settings: { slidesToShow: 3 } },
              { breakpoint: 1440, settings: { slidesToShow: 4 } },
            ],
          }),
          $(".partners-slider").slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e3,
            rtl: t,
            responsive: [
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
              { breakpoint: 1200, settings: { slidesToShow: 6 } },
              { breakpoint: 1440, settings: { slidesToShow: 8 } },
            ],
          }),
          $(".videos-slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e3,
            rtl: t,
            responsive: [
              { breakpoint: 768, settings: { slidesToShow: 1 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 1200, settings: { slidesToShow: 3 } },
              { breakpoint: 1440, settings: { slidesToShow: 4 } },
            ],
          }),
          $(".playVideo a").click(function (t) {
            t.preventDefault();
            var e = "#videoModal",
              a = $(this).data("embed"),
              r = $(this).attr("title"),
              o = a + "?autoplay=1";
            $("#videoModal iframe").attr("src", o),
              $("#videoModal .modal-title").text(r),
              $(e).on("hidden.bs.modal", function () {
                $("#videoModal iframe").attr("src", "");
              });
          });
      },
      27: function () {
        "use strict";
        var t = navigator.userAgent.toLowerCase(),
          e = new Date(),
          a = $(document),
          r = $(window),
          o = $("html"),
          i = o.hasClass("desktop"),
          s =
            -1 != t.indexOf("msie")
              ? parseInt(t.split("msie")[1])
              : -1 != t.indexOf("trident")
              ? 11
              : -1 != t.indexOf("edge") && 12,
          n =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          l = "ontouchstart" in window,
          d = {
            pointerEvents: s < 11 && "js/pointer-events.min.js",
            bootstrapTooltip: $("[data-toggle='tooltip']"),
            bootstrapTabs: $(".tabs"),
            materialParallax: $(".parallax-container"),
            rdAudioPlayer: $(".rd-audio"),
            rdVideoPlayer: $(".rd-video-player"),
            responsiveTabs: $(".responsive-tabs"),
            rdGoogleMaps: $("#rd-google-map"),
            rdNavbar: $(".rd-navbar"),
            filePicker: $(".rd-file-picker"),
            fileDrop: $(".rd-file-drop"),
            videBG: $(".bg-vide"),
            stepper: $("input[type='number']"),
            toggles: $(".toggle-custom"),
            facebookplugin: $("#fb-root"),
            textRotator: $(".text-rotator"),
            demonstration: $(".rd-navbar-iframe-demonstration iframe"),
            owl: $(".owl-carousel"),
            swiper: $(".swiper-slider"),
            counter: $(".counter"),
            photoSwipeGallery: $("[data-photo-swipe-item]"),
            flickrfeed: $(".flickr"),
            twitterfeed: $(".twitter"),
            slick: $(".slick-slider"),
            progressBar: $(".progress-linear"),
            circleProgress: $(".progress-bar-circle"),
            isotope: $(".isotope"),
            countDown: $(".countdown"),
            stacktable: $("table[data-responsive='true']"),
            customToggle: $("[data-custom-toggle]"),
            customWaypoints: $("[data-custom-scroll-to]"),
            resizable: $(".resizable"),
            dateCountdown: $(".DateCountdown"),
            selectFilter: $("select"),
            calendar: $(".rd-calendar"),
            productThumb: $(".product-thumbnails"),
            imgZoom: $(".img-zoom"),
            facebookfeed: $(".facebook"),
            pageLoader: $(".page-loader"),
            search: $(".rd-search"),
            searchResults: $(".rd-search-results"),
            instafeed: $(".instafeed"),
            iframeEmbed: $("iframe.embed-responsive-item"),
            bootstrapDateTimePicker: $("[date-time-picker]"),
            checkoutRDTabs: $(".checkout-tabs"),
            galleryRDTabs: $(".gallery-tabs"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            radio: $("input[type='radio']"),
            checkbox: $("input[type='checkbox']"),
            captcha: $(".recaptcha"),
            mailchimp: $(".mailchimp-mailform"),
            campaignMonitor: $(".campaign-mailform"),
          };
        a.ready(function () {
          var t = window.xMode;
          function c(t) {
            var e = $(window);
            return (
              t.offset().top + t.outerHeight() >= e.scrollTop() &&
              t.offset().top <= e.scrollTop() + e.height()
            );
          }
          function p(t, e) {
            jQuery(window).on("load scroll", function () {
              !t.hasClass("lazy-loaded") &&
                c(t) &&
                (e.call(), t.addClass("lazy-loaded"));
            });
          }
          function u(t, e) {
            var a,
              r = t.attr("data-" + e);
            if (r && (a = r.match(/(px)|(%)|(vh)$/i)).length)
              switch (a[0]) {
                case "px":
                  return parseFloat(r);
                case "vh":
                  return $(window).height() * (parseFloat(r) / 100);
                case "%":
                  return t.width() * (parseFloat(r) / 100);
              }
          }
          function f(t) {
            var e;
            $.grep(t.slides, function (a, r) {
              var o = $(a);
              r === t.activeIndex
                ? (e = o.find("video")).length && e.get(0).play()
                : o.find("video").each(function () {
                    this.pause();
                  });
            });
          }
          function g(t) {
            if (!(s && s < 10)) {
              var e = $(t.container),
                a = $(t.slides[t.activeIndex]);
              e.find("[data-caption-animate]").each(function () {
                var t = $(this);
                t.removeClass("animated")
                  .removeClass(t.attr("data-caption-animate"))
                  .addClass("not-animated");
              }),
                a.find("[data-caption-animate]").each(function () {
                  var t = $(this),
                    e = t.attr("data-caption-delay");
                  setTimeout(
                    function () {
                      t.removeClass("not-animated")
                        .addClass(t.attr("data-caption-animate"))
                        .addClass("animated");
                    },
                    e ? parseInt(e) : 0
                  );
                });
            }
          }
          function h(t) {
            $("#" + t.live)
              .removeClass("cleared")
              .html(),
              t.current++,
              t.spin.addClass("loading"),
              $.get(
                it,
                {
                  s: decodeURI(t.term),
                  liveSearch: t.live,
                  dataType: "html",
                  liveCount: t.liveCount,
                  filter: t.filter,
                  template: t.template,
                },
                function (e) {
                  t.processed++;
                  var a = $("#" + t.live);
                  t.processed != t.current ||
                    a.hasClass("cleared") ||
                    (a.find("> #search-results").removeClass("active"),
                    a.html(e),
                    setTimeout(function () {
                      a.find("> #search-results").addClass("active");
                    }, 50)),
                    t.spin
                      .parents(".rd-search")
                      .find(".input-group-addon")
                      .removeClass("loading");
                }
              );
          }
          function m(t, e) {
            var a,
              r = 0;
            if (t.length) {
              for (_ = 0; _ < t.length; _++) {
                var o = $(t[_]);
                if ((a = o.regula("validate")).length)
                  for (T = 0; T < a.length; T++)
                    r++,
                      o
                        .siblings(".form-validation")
                        .text(a[T].message)
                        .parent()
                        .addClass("has-error");
                else
                  o.siblings(".form-validation")
                    .text("")
                    .parent()
                    .removeClass("has-error");
              }
              return e && e.length
                ? (function (t) {
                    if (0 === t.find(".g-recaptcha-response").val().length)
                      return (
                        t
                          .siblings(".form-validation")
                          .html("Please, prove that you are not robot.")
                          .addClass("active"),
                        t.closest(".form-group").addClass("has-error"),
                        t.on("propertychange", function () {
                          var t = $(this);
                          t.find(".g-recaptcha-response").val().length > 0 &&
                            (t.closest(".form-group").removeClass("has-error"),
                            t
                              .siblings(".form-validation")
                              .removeClass("active")
                              .html(""),
                            t.off("propertychange"));
                        }),
                        !1
                      );
                    return !0;
                  })(e) && 0 === r
                : 0 === r;
            }
            return !0;
          }
          if (
            ((window.onloadCaptchaCallback = function () {
              for (H = 0; H < d.captcha.length; H++) {
                var t = $(d.captcha[H]);
                grecaptcha.render(t.attr("id"), {
                  sitekey: t.attr("data-sitekey"),
                  size: t.attr("data-size") ? t.attr("data-size") : "normal",
                  theme: t.attr("data-theme") ? t.attr("data-theme") : "light",
                  callback: function (t) {
                    $(".recaptcha").trigger("propertychange");
                  },
                }),
                  t.after("<span class='form-validation'></span>");
              }
            }),
            d.captcha.length &&
              $.getScript(
                "//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"
              ),
            d.radio.length)
          )
            for (H = 0; H < d.radio.length; H++)
              $(d.radio[H])
                .addClass("radio-custom")
                .after("<span class='radio-custom-dummy'></span>");
          if (d.checkbox.length)
            for (H = 0; H < d.checkbox.length; H++)
              $(d.checkbox[H])
                .addClass("checkbox-custom")
                .after("<span class='checkbox-custom-dummy'></span>");
          if (
            (d.rdInputLabel.length && d.rdInputLabel.RDInputLabel(),
            d.regula.length &&
              (function (t) {
                for (var e = 0; e < t.length; e++) {
                  var a = $(t[e]);
                  a
                    .addClass("form-control-has-validation")
                    .after("<span class='form-validation'></span>"),
                    a.parent().find(".form-validation").is(":last-child") &&
                      a.addClass("form-control-last-child");
                }
                t.on("input change propertychange blur", function (t) {
                  var a,
                    r = $(this);
                  if (
                    ("blur" === t.type || r.parent().hasClass("has-error")) &&
                    !r.parents(".rd-mailform").hasClass("success")
                  )
                    if ((a = r.regula("validate")).length)
                      for (e = 0; e < a.length; e++)
                        r.siblings(".form-validation")
                          .text(a[e].message)
                          .parent()
                          .addClass("has-error");
                    else
                      r.siblings(".form-validation")
                        .text("")
                        .parent()
                        .removeClass("has-error");
                }).regula("bind");
                var r = [
                  {
                    type: regula.Constraint.Required,
                    newMessage: "The text field is required.",
                  },
                  {
                    type: regula.Constraint.Email,
                    newMessage: "The email is not a valid email.",
                  },
                  {
                    type: regula.Constraint.Numeric,
                    newMessage: "Only numbers are required",
                  },
                  {
                    type: regula.Constraint.Selected,
                    newMessage: "Please choose an option.",
                  },
                ];
                for (e = 0; e < r.length; e++) {
                  var o = r[e];
                  regula.override({
                    constraintType: o.type,
                    defaultMessage: o.newMessage,
                  });
                }
              })(d.regula),
            d.mailchimp.length)
          )
            for (H = 0; H < d.mailchimp.length; H++) {
              var v = $(d.mailchimp[H]),
                w = v.find('input[type="email"]');
              v.attr("novalidate", "true"),
                w.attr("name", "EMAIL"),
                v.on(
                  "submit",
                  $.proxy(function (e) {
                    e.preventDefault();
                    var a = this,
                      r = {},
                      o = a
                        .attr("action")
                        .replace("/post?", "/post-json?")
                        .concat("&c=?"),
                      i = a.serializeArray(),
                      s = $("#" + a.attr("data-form-output"));
                    for (H = 0; H < i.length; H++) r[i[H].name] = i[H].value;
                    return (
                      $.ajax({
                        data: r,
                        url: o,
                        dataType: "jsonp",
                        error: function (t, e) {
                          s.html("Server error: " + e),
                            setTimeout(function () {
                              s.removeClass("active");
                            }, 4e3);
                        },
                        success: function (t) {
                          s.html(t.msg).addClass("active"),
                            setTimeout(function () {
                              s.removeClass("active");
                            }, 6e3);
                        },
                        beforeSend: function (e) {
                          if (t || !m(a.find("[data-constraints]"))) return !1;
                          s.html("Submitting...").addClass("active");
                        },
                      }),
                      !1
                    );
                  }, v)
                );
            }
          if (d.campaignMonitor.length)
            for (H = 0; H < d.campaignMonitor.length; H++) {
              var b = $(d.campaignMonitor[H]);
              b.on(
                "submit",
                $.proxy(function (e) {
                  var a = {},
                    r = this.attr("action"),
                    o = this.serializeArray(),
                    i = $("#" + d.campaignMonitor.attr("data-form-output")),
                    s = $(this);
                  for (H = 0; H < o.length; H++) a[o[H].name] = o[H].value;
                  return (
                    $.ajax({
                      data: a,
                      url: r,
                      dataType: "jsonp",
                      error: function (t, e) {
                        i.html("Server error: " + e),
                          setTimeout(function () {
                            i.removeClass("active");
                          }, 4e3);
                      },
                      success: function (t) {
                        i.html(t.Message).addClass("active"),
                          setTimeout(function () {
                            i.removeClass("active");
                          }, 6e3);
                      },
                      beforeSend: function (e) {
                        if (t || !m(s.find("[data-constraints]"))) return !1;
                        i.html("Submitting...").addClass("active");
                      },
                    }),
                    !1
                  );
                }, b)
              );
            }
          if (d.rdMailForm.length) {
            var y = {
              MF000: "Successfully sent!",
              MF001: "Recipients are not set!",
              MF002: "Form will not work locally!",
              MF003: "Please, define email field in your form!",
              MF004: "Please, define type of your form!",
              MF254: "Something went wrong with PHPMailer!",
              MF255: "Aw, snap! Something went wrong.",
            };
            for (H = 0; H < d.rdMailForm.length; H++) {
              var k = $(d.rdMailForm[H]),
                C = !1;
              k.attr("novalidate", "novalidate").ajaxForm({
                data: {
                  "form-type": k.attr("data-form-type") || "contact",
                  counter: H,
                },
                beforeSubmit: function (e, a, r) {
                  if (!t) {
                    var o = $(d.rdMailForm[this.extraData.counter]),
                      i = o.find("[data-constraints]"),
                      s = $("#" + o.attr("data-form-output")),
                      n = o.find(".recaptcha"),
                      l = !0;
                    if ((s.removeClass("active error success"), !m(i, n)))
                      return !1;
                    if (n.length) {
                      var c = n.find(".g-recaptcha-response").val(),
                        p = {
                          CPT001:
                            'Please, setup you "site key" and "secret key" of reCaptcha',
                          CPT002: "Something wrong with google reCaptcha",
                        };
                      (C = !0),
                        $.ajax({
                          method: "POST",
                          url: "bat/reCaptcha.php",
                          data: { "g-recaptcha-response": c },
                          async: !1,
                        }).done(function (t) {
                          "CPT000" !== t &&
                            (s.hasClass("snackbars")
                              ? (s.html(
                                  '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                                    p[t] +
                                    "</span></p>"
                                ),
                                setTimeout(function () {
                                  s.removeClass("active");
                                }, 3500),
                                (l = !1))
                              : s.html(p[t]),
                            s.addClass("active"));
                        });
                    }
                    if (!l) return !1;
                    o.addClass("form-in-process"),
                      s.hasClass("snackbars") &&
                        (s.html(
                          '<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'
                        ),
                        s.addClass("active"));
                  }
                },
                error: function (e) {
                  if (!t) {
                    var a = $(
                        "#" +
                          $(d.rdMailForm[this.extraData.counter]).attr(
                            "data-form-output"
                          )
                      ),
                      r = $(d.rdMailForm[this.extraData.counter]);
                    a.text(y[e]),
                      r.removeClass("form-in-process"),
                      C && grecaptcha.reset();
                  }
                },
                success: function (e) {
                  if (!t) {
                    var a = $(d.rdMailForm[this.extraData.counter]),
                      r = $("#" + a.attr("data-form-output")),
                      o = a.find("select");
                    a.addClass("success").removeClass("form-in-process"),
                      C && grecaptcha.reset(),
                      (e = 5 === e.length ? e : "MF255"),
                      r.text(y[e]),
                      "MF000" === e
                        ? r.hasClass("snackbars")
                          ? r.html(
                              '<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' +
                                y[e] +
                                "</span></p>"
                            )
                          : r.addClass("active success")
                        : r.hasClass("snackbars")
                        ? r.html(
                            ' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' +
                              y[e] +
                              "</span></p>"
                          )
                        : r.addClass("active error"),
                      a.clearForm(),
                      o.length && o.select2("val", ""),
                      a.find("input, textarea").trigger("blur"),
                      setTimeout(function () {
                        r.removeClass("active error success"),
                          a.removeClass("success");
                      }, 3500);
                  }
                },
              });
            }
          }
          s &&
            (s < 10 && o.addClass("lt-ie-10"),
            s < 11 &&
              d.pointerEvents &&
              $.getScript(d.pointerEvents).done(function () {
                o.addClass("ie-10"), PointerEventsPolyfill.initialize({});
              }),
            11 === s && $("html").addClass("ie-11"),
            12 === s && $("html").addClass("ie-edge")),
            d.swiper.length &&
              d.swiper.each(function () {
                var t = $(this),
                  e = t.find(".swiper-pagination"),
                  a = t.find(".swiper-button-next"),
                  r = t.find(".swiper-button-prev"),
                  o = t.find(".swiper-scrollbar");
                u(d.swiper, "height"), u(d.swiper, "min-height");
                t
                  .find(".swiper-slide")
                  .each(function () {
                    var t,
                      e = $(this);
                    (t = e.attr("data-slide-bg")) &&
                      e.css({
                        "background-image": "url(" + t + ")",
                        "background-size": "cover",
                      });
                  })
                  .end()
                  .find("[data-caption-animate]")
                  .addClass("not-animated")
                  .end()
                  .swiper({
                    autoplay: "true" === t.attr("data-autoplay") && 5e3,
                    direction: t.attr("data-direction")
                      ? t.attr("data-direction")
                      : "horizontal",
                    effect: t.attr("data-slide-effect")
                      ? t.attr("data-slide-effect")
                      : "fade",
                    speed: t.attr("data-slide-speed")
                      ? t.attr("data-slide-speed")
                      : 600,
                    keyboardControl: "true" === t.attr("data-keyboard"),
                    mousewheelControl: "true" === t.attr("data-mousewheel"),
                    mousewheelReleaseOnEdges:
                      "true" === t.attr("data-mousewheel-release"),
                    nextButton: a.length ? a.get(0) : null,
                    prevButton: r.length ? r.get(0) : null,
                    pagination: e.length ? e.get(0) : null,
                    simulateTouch: !1,
                    paginationClickable:
                      !!e.length && "false" !== e.attr("data-clickable"),
                    paginationBulletRender:
                      e.length && "true" === e.attr("data-index-bullet")
                        ? function (t, e) {
                            return (
                              '<span class="' + e + '">' + (t + 1) + "</span>"
                            );
                          }
                        : null,
                    scrollbar: o.length ? o.get(0) : null,
                    scrollbarDraggable:
                      !o.length || "false" !== o.attr("data-draggable"),
                    scrollbarHide:
                      !!o.length && "false" === o.attr("data-draggable"),
                    loop: "false" !== t.attr("data-loop"),
                    loopAdditionalSlides: 0,
                    loopedSlides: 0,
                    onTransitionStart: function (t) {
                      f(t);
                    },
                    onTransitionEnd: function (t) {
                      g(t), $(window).trigger("resize");
                    },
                    onInit: function (t) {
                      if (d.pageLoader.length) {
                        var e = $("#page-loader").attr("data-slide-bg"),
                          a = document.createElement("img");
                        (a.src = e),
                          (a.onload = function () {
                            d.pageLoader.addClass("loaded");
                          });
                      }
                      f(t),
                        g(t),
                        $(window).on("resize", function () {
                          t.update(!0);
                        });
                    },
                  }),
                  $(window)
                    .on("resize", function () {
                      var e = u(t, "min-height"),
                        a = u(t, "height");
                      a && t.css("height", e && e > a ? e : a);
                    })
                    .load(function () {
                      t.find("video").each(function () {
                        $(this).parents(".swiper-slide-active").length ||
                          this.pause();
                      });
                    })
                    .trigger("resize");
              });
          var T,
            x = $("#copyright-year");
          if ((x.length && x.text(e.getFullYear()), d.circleProgress.length))
            for (H = 0; H < d.circleProgress.length; H++) {
              var S = $(d.circleProgress[H]);
              a.on("scroll", function () {
                if (!S.hasClass("animated")) {
                  var t = S.attr("data-gradient").split(",");
                  S.circleProgress({
                    value: S.attr("data-value"),
                    size: S.attr("data-size") ? S.attr("data-size") : 175,
                    fill: { gradient: t, gradientAngle: Math.PI / 4 },
                    startAngle: (-Math.PI / 4) * 2,
                    emptyFill: S.attr("data-empty-fill")
                      ? S.attr("data-empty-fill")
                      : "rgb(245,245,245)",
                    thickness: S.attr("data-thickness")
                      ? parseInt(S.attr("data-thickness"))
                      : 4,
                  }).on("circle-animation-progress", function (t, e, a) {
                    $(this)
                      .find("span")
                      .text(
                        String(a.toFixed(2))
                          .replace("0.", "")
                          .replace("1.", "1")
                      );
                  }),
                    S.addClass("animated");
                }
              }).trigger("scroll");
            }
          if (d.progressBar.length)
            for (H = 0; H < d.progressBar.length; H++) {
              var M = $(d.progressBar[H]);
              r.on(
                "scroll load",
                $.proxy(function () {
                  var t = $(this);
                  if (!t.hasClass("animated-first") && c(t)) {
                    var e = t.attr("data-to");
                    t.find(".progress-bar-linear").css({ width: e + "%" }),
                      t
                        .find(".progress-value")
                        .countTo({
                          refreshInterval: 40,
                          from: 0,
                          to: e,
                          speed: 500,
                        }),
                      t.addClass("animated-first");
                  }
                }, M)
              );
            }
          if (d.countDown.length)
            for (H = 0; H < d.countDown.length; H++) {
              var D = d.countDown[H],
                P = $(D),
                F = new Date(),
                I = D.getAttribute("data-type"),
                A = D.getAttribute("data-time"),
                O = D.getAttribute("data-format"),
                z = [];
              F.setTime(Date.parse(A)).toLocaleString(),
                (z[I] = F),
                (z.format = O),
                P.parents(".countdown-modern").length &&
                  (z.onTick = function () {
                    var t = $(this).find(".countdown-section");
                    for (_ = 0; _ < t.length; _++)
                      $(t[t.length - _ - 1]).append(
                        '<span class="countdown-letter">' +
                          O[O.length - _ - 1] +
                          "</span>"
                      );
                  }),
                P.countdown(z);
            }
          if (
            (d.smoothScroll && $.getScript(d.smoothScroll),
            d.bootstrapTabs.length)
          )
            for (H = 0; H < d.bootstrapTabs.length; H++) {
              $(d.bootstrapTabs[H]).on("click", "a", function (t) {
                t.preventDefault(), $(this).tab("show");
              });
            }
          if (
            (d.bootstrapTooltip.length && d.bootstrapTooltip.tooltip(),
            d.rdAudioPlayer.length)
          ) {
            for (H = 0; H < d.rdAudioPlayer.length; H++)
              $(d.rdAudioPlayer[H]).RDAudio();
            var R = $(".rd-audio-playlist-button"),
              E = d.rdAudioPlayer.find(".rd-audio-playlist-wrap");
            R.length &&
              (R.on("click", function (t) {
                t.preventDefault(),
                  d.rdAudioPlayer.toggleClass("playlist-show"),
                  E.is(":hidden") ? E.slideDown(300) : E.slideUp(300);
              }),
              a.on("click", function (t) {
                $(t.target).is(E) ||
                  0 != E.find($(t.target)).length ||
                  $(t.target).is(R) ||
                  E.slideUp(300);
              }));
          }
          function L() {
            $(".rd-video-player").removeClass("playlist-show");
          }
          function B() {
            $(".rd-video-player").addClass("playlist-show");
          }
          if (d.rdVideoPlayer.length)
            for (H = 0; H < d.rdVideoPlayer.length; H++) {
              var N = $(d.rdVideoPlayer[H]);
              r.on(
                "scroll",
                $.proxy(function () {
                  var t = $(this);
                  i &&
                    !t.hasClass("played") &&
                    t.hasClass("play-on-scroll") &&
                    c(t) &&
                    (t.find("video")[0].play(), t.addClass("played"));
                }, N)
              ),
                N.RDVideoPlayer({
                  callbacks: { onPlay: L, onPaused: B, onEnded: B },
                }),
                r.on("load", B);
              var j = $(".rd-video-volume-wrap");
              j.on("mouseenter", function () {
                $(this).addClass("hover");
              }),
                j.on("mouseleave", function () {
                  $(this).removeClass("hover");
                }),
                l &&
                  (j.find(".rd-video-volume").on("click", function () {
                    $(this).toggleClass("hover");
                  }),
                  a.on("click", function (t) {
                    $(t.target).is(j) ||
                      0 != $(t.target).parents(j).length ||
                      j.find(".rd-video-volume").removeClass("hover");
                  }));
            }
          if (d.responsiveTabs.length) {
            var H = 0;
            for (H = 0; H < d.responsiveTabs.length; H++) {
              (dt = $(d.responsiveTabs[H])).easyResponsiveTabs({
                type: dt.attr("data-type"),
                tabidentify:
                  dt.find(".resp-tabs-list").attr("data-group") || "tab",
              });
            }
            $(".tabs-nav").length &&
              ($(".resp-tabs-list")
                .find("li")
                .eq(parseInt(window.location.hash.split("#").pop()))
                .trigger("click"),
              (window.location.hash = ""),
              $(".tabs-nav a").click(function (t) {
                t.preventDefault(),
                  $(".resp-tabs-list")
                    .find("li")
                    .eq($(this).parent().index())
                    .trigger("click");
              }));
          }
          d.rdGoogleMaps.length &&
            $.getScript(
              "//maps.google.com/maps/api/js?key=AIzaSyAFeB0kVA6ouyJ_gEvFbMaefLy3cBCyRwo&sensor=false&libraries=geometry,places&v=3.7",
              function () {
                var t = document.getElementsByTagName("head")[0],
                  e = t.insertBefore;
                for (
                  t.insertBefore = function (a, r) {
                    (a.href &&
                      -1 !=
                        a.href.indexOf(
                          "//fonts.googleapis.com/css?family=Roboto"
                        )) ||
                      -1 != a.innerHTML.indexOf("gm-style") ||
                      e.call(t, a, r);
                  },
                    H = 0;
                  H < d.rdGoogleMaps.length;
                  H++
                ) {
                  var a = $(d.rdGoogleMaps[H]);
                  p(
                    a,
                    $.proxy(function () {
                      var t = $(this),
                        e = t.attr("data-styles");
                      t.googleMap({
                        styles: e ? JSON.parse(e) : [],
                        onInit: function (t) {
                          var e = $("#rd-google-map-address");
                          if (e.length) {
                            var a = e,
                              r = new google.maps.Geocoder(),
                              o = new google.maps.Marker({
                                map: t,
                                icon: "images/gmap_marker.png",
                              });
                            new google.maps.places.Autocomplete(e[0]).bindTo(
                              "bounds",
                              t
                            ),
                              e.attr("placeholder", ""),
                              e.on("change", function () {
                                $("#rd-google-map-address-submit").trigger(
                                  "click"
                                );
                              }),
                              e.on("keydown", function (t) {
                                13 == t.keyCode &&
                                  $("#rd-google-map-address-submit").trigger(
                                    "click"
                                  );
                              }),
                              $("#rd-google-map-address-submit").on(
                                "click",
                                function (e) {
                                  e.preventDefault();
                                  var i = a.val();
                                  r.geocode({ address: i }, function (e, a) {
                                    if (a == google.maps.GeocoderStatus.OK) {
                                      var r = e[0].geometry.location.lat(),
                                        i = e[0].geometry.location.lng();
                                      t.setCenter(
                                        new google.maps.LatLng(
                                          parseFloat(r),
                                          parseFloat(i)
                                        )
                                      ),
                                        o.setPosition(
                                          new google.maps.LatLng(
                                            parseFloat(r),
                                            parseFloat(i)
                                          )
                                        );
                                    }
                                  });
                                }
                              );
                          }
                        },
                      });
                    }, a)
                  );
                }
              }
            );
          if (d.flickrfeed.length > 0)
            for (H = 0; H < d.flickrfeed.length; H++) {
              var W = $(d.flickrfeed[H]);
              W.RDFlickr({
                callback: function () {
                  var t = W.find("[data-photo-swipe-item]");
                  if (t.length)
                    for (var e = 0; e < t.length; e++) {
                      var a = new Image();
                      a.setAttribute("data-index", e),
                        (a.onload = function () {
                          t[this.getAttribute("data-index")].setAttribute(
                            "data-size",
                            this.naturalWidth + "x" + this.naturalHeight
                          );
                        }),
                        (a.src = t[e].getAttribute("href"));
                    }
                },
              });
            }
          if (d.twitterfeed.length > 0)
            for (H = 0; H < d.twitterfeed.length; H++) {
              var G = d.twitterfeed[H];
              $(G).RDTwitter({
                hideReplies: !1,
                localTemplate: {
                  avatar: "images/features/rd-twitter-post-avatar-48x48.jpg",
                },
                callback: function () {
                  r.trigger("resize");
                },
              });
            }
          if (
            (d.stepper.length &&
              d.stepper.stepper({ labels: { up: "", down: "" } }),
            o.hasClass("desktop") &&
              o.hasClass("wow-animation") &&
              $(".wow").length &&
              new WOW().init(),
            d.textRotator.length)
          )
            for (H = 0; H < d.textRotator.length; H++) {
              $(d.textRotator[H]).rotator();
            }
          if (d.counter.length)
            for (H = 0; H < d.counter.length; H++) {
              var Y = $(d.counter[H]);
              r.on(
                "scroll load",
                $.proxy(function () {
                  var t = $(this);
                  !t.hasClass("animated-first") &&
                    c(t) &&
                    (t.countTo({
                      refreshInterval: 40,
                      speed: t.attr("data-speed") || 1e3,
                    }),
                    t.addClass("animated-first"));
                }, Y)
              );
            }
          if (d.owl.length)
            for (T = 0; T < d.owl.length; T++) {
              var _,
                U = $(d.owl[T]),
                q = {},
                J = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
                V = [0, 480, 768, 992, 1200, 1800];
              for (H = 0; H < V.length; H++)
                for (q[V[H]] = {}, _ = H; _ >= -1; _--)
                  !q[V[H]].items &&
                    U.attr("data" + J[_] + "items") &&
                    (q[V[H]].items =
                      _ < 0 ? 1 : parseInt(U.attr("data" + J[_] + "items"))),
                    !q[V[H]].stagePadding &&
                      0 !== q[V[H]].stagePadding &&
                      U.attr("data" + J[_] + "stage-padding") &&
                      (q[V[H]].stagePadding =
                        _ < 0
                          ? 0
                          : parseInt(U.attr("data" + J[_] + "stage-padding"))),
                    !q[V[H]].margin &&
                      0 !== q[V[H]].margin &&
                      U.attr("data" + J[_] + "margin") &&
                      (q[V[H]].margin =
                        _ < 0
                          ? 30
                          : parseInt(U.attr("data" + J[_] + "margin"))),
                    !q[V[H]].dotsEach &&
                      0 !== q[V[H]].dotsEach &&
                      U.attr("data" + J[_] + "dots-each") &&
                      (q[V[H]].dotsEach =
                        !(_ < 0) &&
                        parseInt(U.attr("data" + J[_] + "dots-each")));
              U.attr("data-dots-custom") &&
                U.on("initialized.owl.carousel", function (t) {
                  var e = $(t.currentTarget),
                    a = $(e.attr("data-dots-custom")),
                    r = 0;
                  e.attr("data-active") &&
                    (r = parseInt(e.attr("data-active"))),
                    e.trigger("to.owl.carousel", [r, 300, !0]),
                    a.find("[data-owl-item='" + r + "']").addClass("active"),
                    a.find("[data-owl-item]").on("click", function (t) {
                      t.preventDefault(),
                        e.trigger("to.owl.carousel", [
                          parseInt(this.getAttribute("data-owl-item")),
                          300,
                          !0,
                        ]);
                    }),
                    e.on("translate.owl.carousel", function (t) {
                      a.find(".active").removeClass("active"),
                        a
                          .find("[data-owl-item='" + t.item.index + "']")
                          .addClass("active");
                    });
                }),
                U.attr("data-nav-custom") &&
                  U.on("initialized.owl.carousel", function (t) {
                    var e = $(t.currentTarget),
                      a = $(e.attr("data-nav-custom"));
                    a.find("[data-owl-prev]").on("click", function (t) {
                      t.preventDefault(), e.trigger("prev.owl.carousel", [300]);
                    }),
                      a.find("[data-owl-next]").on("click", function (t) {
                        t.preventDefault(),
                          e.trigger("next.owl.carousel", [300]);
                      });
                  }),
                U.owlCarousel({
                  autoplay: "true" === U.attr("data-autoplay"),
                  center: "true" === U.attr("data-center"),
                  rtl: "true" === U.attr("data-rtl"),
                  loop: "true" === U.attr("data-loop"),
                  items: 1,
                  autoplaySpeed: 600,
                  autoplayTimeout: 3e3,
                  dotsContainer: U.attr("data-pagination-class") || !1,
                  navContainer: U.attr("data-navigation-class") || !1,
                  mouseDrag: "true" === U.attr("data-mouse-drag"),
                  nav: "true" === U.attr("data-nav"),
                  dots: "true" === U.attr("data-dots"),
                  dotsEach:
                    !!U.attr("data-dots-each") &&
                    parseInt(U.attr("data-dots-each")),
                  responsive: q,
                  animateOut: U.attr("data-animation-out") || !1,
                  navText: JSON.stringify(U.attr("data-nav-text")) || [],
                  navClass: JSON.stringify(U.attr("data-nav-class")) || [
                    "owl-prev",
                    "owl-next",
                  ],
                });
            }
          if (d.isotope.length) {
            var Z = [];
            for (H = 0; H < d.isotope.length; H++) {
              var Q = d.isotope[H],
                K = new Isotope(Q, {
                  itemSelector: ".isotope-item",
                  layoutMode: Q.getAttribute("data-isotope-layout")
                    ? Q.getAttribute("data-isotope-layout")
                    : "masonry",
                  filter: "*",
                });
              Z.push(K);
            }
            $(window).on("load", function () {
              setTimeout(function () {
                var t;
                for (t = 0; t < Z.length; t++)
                  (Z[t].element.className += " isotope--loaded"), Z[t].layout();
              }, 600);
            }),
              $("[data-isotope-filter]")
                .on("click", function (t) {
                  t.preventDefault();
                  var e = $(this);
                  clearTimeout(undefined),
                    e
                      .parents(".isotope-filters")
                      .find(".active")
                      .removeClass("active"),
                    e.addClass("active");
                  var a = $(
                    '.isotope[data-isotope-group="' +
                      this.getAttribute("data-isotope-group") +
                      '"]'
                  );
                  a.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: a.attr("data-isotope-layout")
                      ? a.attr("data-isotope-layout")
                      : "masonry",
                    filter:
                      "*" == this.getAttribute("data-isotope-filter")
                        ? "*"
                        : '[data-filter*="' +
                          this.getAttribute("data-isotope-filter") +
                          '"]',
                  });
                })
                .eq(0)
                .trigger("click");
          }
          if (d.facebookplugin.length)
            for (H = 0; H < d.facebookplugin.length; H++)
              !(function (t, e, a) {
                var r,
                  o = t.getElementsByTagName(e)[0];
                t.getElementById(a) ||
                  (((r = t.createElement(e)).id = a),
                  (r.src =
                    "//connect.facebook.net/en/sdk.js#xfbml=1&version=v2.5"),
                  o.parentNode.insertBefore(r, o));
              })(document, "script", "facebook-jssdk");
          if (d.videBG.length)
            for (var H = 0; H < d.videBG.length; H++) {
              var X = $(d.videBG[H]),
                tt = X.data("vide-options"),
                et = X.data("vide-bg");
              X.vide(et, tt);
            }
          if (
            (d.rdNavbar.length &&
              (d.rdNavbar.RDNavbar({
                stickUpClone:
                  !!d.rdNavbar.attr("data-stick-up-clone") &&
                  "true" === d.rdNavbar.attr("data-stick-up-clone"),
                stickUpOffset: d.rdNavbar.attr("data-stick-up-offset")
                  ? d.rdNavbar.attr("data-stick-up-offset")
                  : 1,
                anchorNavOffset: -78,
              }),
              d.rdNavbar.attr("data-body-class") &&
                (document.body.className +=
                  " " + d.rdNavbar.attr("data-body-class"))),
            d.photoSwipeGallery.length &&
              a.delegate("[data-photo-swipe-item]", "click", function (t) {
                t.preventDefault();
                var e,
                  a = $(this),
                  r = a
                    .parents("[data-photo-swipe-gallery]")
                    .find("a[data-photo-swipe-item]"),
                  o = document.querySelectorAll(".pswp")[0],
                  i = {},
                  s = [],
                  n = 0;
                0 == r.length && (r = a),
                  r.each(function () {
                    var t,
                      e = $(this),
                      a = e.attr("href"),
                      r = e.attr("data-size").split("x");
                    e.is(":visible") &&
                      (i[a] ||
                        ((t = {
                          src: a,
                          w: parseInt(r[0], 10),
                          h: parseInt(r[1], 10),
                          el: e,
                        }),
                        (i[a] = { item: t, index: n }),
                        s.push(t),
                        n++));
                  }),
                  (e = {
                    index: i[a.attr("href")].index,
                    getThumbBoundsFn: function (t) {
                      var e = s[t].el,
                        a = e.offset();
                      return { x: a.left, y: a.top, w: e.width() };
                    },
                  }),
                  new PhotoSwipe(o, PhotoSwipeUI_Default, s, e).init();
              }),
            d.stacktable.length)
          )
            for (H = 0; H < d.stacktable.length; H++) {
              $(d.stacktable[H]).stacktable();
            }
          if (d.selectFilter.length)
            for (H = 0; H < d.selectFilter.length; H++) {
              var at = $(d.selectFilter[H]);
              at.select2({ theme: "bootstrap", dir: at.attr("dir") })
                .next()
                .addClass(
                  at
                    .attr("class")
                    .match(/(input-sm)|(input-lg)|($)/i)
                    .toString()
                    .replace(new RegExp(",", "g"), " ")
                );
            }
          if (d.productThumb.length)
            for (H = 0; H < d.productThumb.length; H++) {
              $(d.productThumb[H])
                .find("li")
                .on("click", function () {
                  var t = $(this);
                  t.parent().find(".active").removeClass("active");
                  var e = t.parents(".product").find(".product-image-area");
                  e.removeClass("animateImageIn"),
                    e.addClass("animateImageOut"),
                    t.addClass("active"),
                    setTimeout(function () {
                      var a = t.find("img").attr("src");
                      t.attr("data-large-image") &&
                        (a = t.attr("data-large-image")),
                        e.attr("src", a),
                        e.removeClass("animateImageOut"),
                        e.addClass("animateImageIn");
                    }, 300);
                });
            }
          if (d.calendar.length)
            for (H = 0; H < d.calendar.length; H++) {
              var rt = $(d.calendar[H]);
              rt.rdCalendar({
                days: rt.attr("data-days")
                  ? U.attr("data-days").split(/\s?,\s?/i)
                  : ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"],
                month: rt.attr("data-months")
                  ? U.attr("data-months").split(/\s?,\s?/i)
                  : [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ],
              });
            }
          if (d.imgZoom.length)
            for (H = 0; H < d.imgZoom.length; H++) {
              $(d.imgZoom[H]).elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 300,
                zoomWindowFadeOut: 300,
                scrollZoom: !0,
              });
            }
          if (d.facebookfeed.length > 0)
            for (H = 0; H < d.facebookfeed.length; H++) {
              var ot = d.facebookfeed[H];
              $(ot).RDFacebookFeed({
                callbacks: {
                  postsLoaded: function () {
                    var t = $(".post-facebook"),
                      e = 0;
                    for (e = 0; e < t.length; e++) {
                      var a = $(t[e]),
                        o = a.find(".post-comments"),
                        i = a.find(".post-comments [data-fb-comment]"),
                        s = 0;
                      for (s = 0; s < i.length; s++) {
                        var n = i[s];
                        0 == n.innerHTML.trim().length && $(n).remove();
                      }
                      0 == o.find("[data-fb-comment]").length && o.remove();
                    }
                    r.trigger("resize");
                  },
                },
              });
            }
          if (
            (d.pageLoader.length > 0 &&
              r.on("load", function () {
                setTimeout(function () {
                  d.pageLoader.addClass("loaded"), r.trigger("resize");
                }, 200);
              }),
            d.search.length || d.searchResults)
          ) {
            var it = "bat/rd-search.php",
              st =
                '<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5><p>...#{token}...</p><p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
            if (d.search.length)
              for (H = 0; H < d.search.length; H++) {
                var nt = $(d.search[H]);
                tt = {
                  element: nt,
                  filter: nt.attr("data-search-filter")
                    ? nt.attr("data-search-filter")
                    : "*.html",
                  template: nt.attr("data-search-template")
                    ? nt.attr("data-search-template")
                    : st,
                  live:
                    !!nt.attr("data-search-live") &&
                    nt.attr("data-search-live"),
                  liveCount: nt.attr("data-search-live-count")
                    ? parseInt(nt.attr("data-search-live"))
                    : 4,
                  current: 0,
                  processed: 0,
                  timer: {},
                };
                if ($(".rd-navbar-search-toggle").length)
                  $(".rd-navbar-search-toggle").on("click", function () {
                    $(this).hasClass("active") ||
                      nt.find("input").val("").trigger("propertychange");
                  });
                tt.live &&
                  nt.find("input").on(
                    "keyup input propertychange",
                    $.proxy(
                      function () {
                        (this.term = this.element.find("input").val().trim()),
                          (this.spin = this.element.find(".input-group-addon")),
                          clearTimeout(this.timer),
                          this.term.length > 2
                            ? (this.timer = setTimeout(h(this), 200))
                            : 0 == this.term.length &&
                              $("#" + this.live)
                                .addClass("cleared")
                                .html("");
                      },
                      tt,
                      this
                    )
                  ),
                  nt.submit(
                    $.proxy(
                      function () {
                        return (
                          $("<input />")
                            .attr("type", "hidden")
                            .attr("name", "filter")
                            .attr("value", this.filter)
                            .appendTo(this.element),
                          !0
                        );
                      },
                      tt,
                      this
                    )
                  );
              }
            if (d.searchResults.length) {
              var lt = /\?.*s=([^&]+)\&filter=([^&]+)/g.exec(location.search);
              null != lt &&
                $.get(
                  it,
                  {
                    s: decodeURI(lt[1]),
                    dataType: "html",
                    filter: lt[2],
                    template: st,
                    live: "",
                  },
                  function (t) {
                    d.searchResults.html(t);
                  }
                );
            }
          }
          if (d.instafeed.length > 0)
            for (H = 0; H < d.instafeed.length; H++) {
              $(d.instafeed[H]).RDInstafeed({});
            }
          if (
            (i &&
              $().UItoTop({
                easingType: "easeOutQuart",
                containerClass:
                  "ui-to-top icon icon-xs icon-circle icon-darker-filled fa fa-angle-up",
              }),
            d.customToggle.length)
          )
            for (
              a.delegate("[data-custom-toggle]", "click", function (t) {
                t.preventDefault(),
                  $("#" + $(this).attr("data-custom-toggle"))
                    .add(this)
                    .toggleClass("active");
              }),
                H = 0;
              H < d.customToggle.length;
              H++
            ) {
              var dt;
              "true" ===
                (dt = $(d.customToggle[H])).attr(
                  "data-custom-toggle-disable-on-blur"
                ) &&
                $("body").on("click", dt, function (t) {
                  t.target !== t.data[0] &&
                    0 ==
                      $("#" + t.data.attr("data-custom-toggle")).find(
                        $(t.target)
                      ).length &&
                    0 == t.data.find($(t.target)).length &&
                    $("#" + t.data.attr("data-custom-toggle"))
                      .add(t.data[0])
                      .removeClass("active");
                });
            }
          d.customWaypoints.length &&
            a.delegate("[data-custom-scroll-to]", "click", function (t) {
              t.preventDefault(),
                $("body, html")
                  .stop()
                  .animate(
                    {
                      scrollTop: $(
                        "#" + $(this).attr("data-custom-scroll-to")
                      ).offset().top,
                    },
                    1e3,
                    function () {
                      $(window).trigger("resize");
                    }
                  );
            });
          if (d.bootstrapDateTimePicker.length)
            for (H = 0; H < d.bootstrapDateTimePicker.length; H++) {
              var ct = $(d.bootstrapDateTimePicker[H]);
              tt = { format: "dddd DD MMMM YYYY - HH:mm" };
              "date" == ct.attr("date-time-picker")
                ? ((tt.format = "dddd DD MMMM YYYY"), (tt.minDate = new Date()))
                : "time" == ct.attr("date-time-picker") &&
                  (tt.format = "HH:mm"),
                (tt.time = "date" != ct.attr("date-time-picker")),
                (tt.date = "time" != ct.attr("date-time-picker")),
                (tt.shortTime = !0),
                ct.bootstrapMaterialDatePicker(tt);
            }
          if (d.materialParallax.length)
            if (t || s || n)
              for (var H = 0; H < d.materialParallax.length; H++) {
                var pt = $(d.materialParallax[H]),
                  ut = pt.data("parallax-img");
                pt.css({
                  "background-image": "url(" + ut + ")",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                });
              }
            else d.materialParallax.parallax();
          if (d.filePicker.length || d.fileDrop.length) {
            for (H = 0; H < d.filePicker.length; H++) {
              var ft = d.filePicker[H];
              $(ft).RDFilepicker({ metaFieldClass: "rd-file-picker-meta" });
            }
            for (H = 0; H < d.fileDrop.length; H++) {
              var gt = d.fileDrop[H];
              $(gt).RDFilepicker({
                metaFieldClass: "rd-file-drop-meta",
                buttonClass: "rd-file-drop-btn",
                dropZoneClass: "rd-file-drop",
              });
            }
          }
          if (d.dateCountdown.length)
            for (H = 0; H < d.dateCountdown.length; H++) {
              var ht = $(d.dateCountdown[H]);
              A = {
                Days: { text: "Days", color: "#333", show: !0 },
                Hours: { text: "Hours", color: "#333", show: !0 },
                Minutes: { text: "Minutes", color: "#333", show: !0 },
                Seconds: { text: "Seconds", color: "#333", show: !0 },
              };
              ht.TimeCircles({
                fg_width: 0.02,
                circle_bg_color: "#e7e7e7",
                bg_width: 0.5,
              }),
                $(window).on("load resize orientationchange", function () {
                  window.innerWidth < 479 || window.innerWidth < 991
                    ? ht
                        .TimeCircles({
                          time: {
                            Days: { color: "#0d2d62", show: !0 },
                            Hours: { color: "#0d2d62", show: !0 },
                            Minutes: { color: "#0d2d62", show: !0 },
                            Seconds: { show: !1 },
                          },
                        })
                        .rebuild()
                    : ht.TimeCircles({ time: A }).rebuild();
                });
            }
          if (d.slick.length)
            for (H = 0; H < d.slick.length; H++) {
              var mt = $(d.slick[H]);
              mt.slick({
                slidesToScroll: parseInt(mt.attr("data-slide-to-scroll")) || 1,
                asNavFor: mt.attr("data-for") || !1,
                rtl: "true" == mt.attr("data-rtl"),
                dots: "true" == mt.attr("data-dots"),
                infinite: "true" == mt.attr("data-loop"),
                focusOnSelect: !0,
                arrows: "true" == mt.attr("data-arrows"),
                swipe: "true" == mt.attr("data-swipe"),
                autoplay: "true" == mt.attr("data-autoplay"),
                vertical: "true" == mt.attr("data-vertical"),
                centerMode: "true" == mt.attr("data-center-mode"),
                centerPadding: mt.attr("data-center-padding")
                  ? mt.attr("data-center-padding")
                  : "0.50",
                mobileFirst: !0,
                fade: !!mt.attr("data-fade") && mt.attr("data-fade"),
                responsive: [
                  {
                    breakpoint: 0,
                    settings: {
                      arrows: !1,
                      dots: !1,
                      slidesToShow: parseInt(mt.attr("data-items")) || 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: !1,
                      dots: !1,
                      slidesToShow: parseInt(mt.attr("data-xs-items")) || 1,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      arrows: !1,
                      dots: !1,
                      slidesToShow: parseInt(mt.attr("data-sm-items")) || 1,
                    },
                  },
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: parseInt(mt.attr("data-md-items")) || 1,
                    },
                  },
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: parseInt(mt.attr("data-lg-items")) || 1,
                    },
                  },
                ],
              }).on("afterChange", function (t, e, a, r) {
                var o = $(this).attr("data-child");
                o &&
                  ($(o + " .slick-slide").removeClass("slick-current"),
                  $(o + " .slick-slide")
                    .eq(a)
                    .addClass("slick-current"));
              });
            }
        });
      },
      421: function () {
        $('a[target="popup"]').on("click", function (t) {
          t.preventDefault();
          var e = $(this).attr("href"),
            a =
              void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
            r = void 0 !== window.screenTop ? window.screenTop : window.screenY,
            o = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            i = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height,
            s = o / window.screen.availWidth,
            n = (o - 600) / 2 / s + a,
            l = (i - 600) / 2 / s + r,
            d = window.open(
              e,
              "",
              "\n              scrollbars=yes,\n              width="
                .concat(600 / s, ",\n              height=")
                .concat(600 / s, ",\n              top=")
                .concat(l, ",\n              left=")
                .concat(n, "\n            ")
            );
          window.focus && d.focus();
        });
      },
      87: function () {},
    },
    a = {};
  function r(t) {
    var o = a[t];
    if (void 0 !== o) return o.exports;
    var i = (a[t] = { exports: {} });
    return e[t](i, i.exports, r), i.exports;
  }
  (r.m = e),
    (t = []),
    (r.O = function (e, a, o, i) {
      if (!a) {
        var s = 1 / 0;
        for (c = 0; c < t.length; c++) {
          (a = t[c][0]), (o = t[c][1]), (i = t[c][2]);
          for (var n = !0, l = 0; l < a.length; l++)
            (!1 & i || s >= i) &&
            Object.keys(r.O).every(function (t) {
              return r.O[t](a[l]);
            })
              ? a.splice(l--, 1)
              : ((n = !1), i < s && (s = i));
          if (n) {
            t.splice(c--, 1);
            var d = o();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      i = i || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
      t[c] = [a, o, i];
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      var t = { 308: 0, 113: 0 };
      r.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, a) {
          var o,
            i,
            s = a[0],
            n = a[1],
            l = a[2],
            d = 0;
          if (
            s.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in n) r.o(n, o) && (r.m[o] = n[o]);
            if (l) var c = l(r);
          }
          for (e && e(a); d < s.length; d++)
            (i = s[d]), r.o(t, i) && t[i] && t[i][0](), (t[s[d]] = 0);
          return r.O(c);
        },
        a = (self.webpackChunk = self.webpackChunk || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })(),
    r.O(void 0, [113], function () {
      return r(847);
    });
  var o = r.O(void 0, [113], function () {
    return r(87);
  });
  o = r.O(o);
})();
