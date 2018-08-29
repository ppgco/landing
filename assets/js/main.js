$(function() {
  /**
   * Async inject code into page
   */
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-80826141-1', 'auto');
  ga('send', 'pageview');
  (function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = { hjid: 431312, hjsv: 5 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');

  (function(a, l, b, c, r, s) {
    _nQc = c, r = a.createElement(l), s = a.getElementsByTagName(l)[0];
    r.async = 1;
    r.src = l.src = ("https:" == a.location.protocol ? "https://" : "http://") + b;
    s.parentNode.insertBefore(r, s);
  })(document, "script", "serve.albacross.com/track.js", "89620050");

  (function(e, a) {
    if (!a.__SV) {
      var b = window;
      try {
        var c, l, i, j = b.location, g = j.hash;
        c = function(a, b) {
          return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null
        };
        g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)))
      } catch (m) {
      }
      var k, h;
      window.mixpanel = a;
      a._i = [];
      a.init = function(b, c, f) {
        function e(b, a) {
          var c = a.split(".");
          2 == c.length && (b = b[c[0]], a = c[1]);
          b[a] = function() {
            b.push([a].concat(Array.prototype.slice.call(arguments,
              0)))
          }
        }

        var d = a;
        "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";
        d.people = d.people || [];
        d.toString = function(b) {
          var a = "mixpanel";
          "mixpanel" !== f && (a += "." + f);
          b || (a += " (stub)");
          return a
        };
        d.people.toString = function() {
          return d.toString(1) + ".people (stub)"
        };
        k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
        for (h = 0; h < k.length; h++) e(d, k[h]);
        a._i.push([b, c, f])
      };
      a.__SV = 1.2;
      b = e.createElement("script");
      b.type = "text/javascript";
      b.async = !0;
      b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
      c = e.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(b, c)
    }
  })(document, window.mixpanel || []);
  mixpanel.init("990d62dbba53d999b1e54cd92ed1a63d");

  !function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window,
    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', '1959134684349655');
  fbq('track', 'PageView');

  /**
   * @deprecated - remove after few months
   */
  if (navigator['serviceWorker']) {
    navigator
      .serviceWorker
      .getRegistrations()
      .then(function(registrations) {
        (registrations || []).forEach(function (registration) {
          if (registration.active && registration.active.scriptURL && registration.active.scriptURL.indexOf('service-worker') !== -1) {
            console.log('Unregister old service-worker...')
            registration
              .unregister()
              .then(function(result) {
                console.log('Unregister status: ', result)
              })
          }
        })
      });
  }

  /** End Of async */
  var Click2Call, app, c2cconfig, planSliders, pricingHelper, Webinars;

  c2cconfig = {
    apiUrl: 'https://api.pushpushgo.com/call',
    call: {
      onSuccess: function(response) {
        var self;
        self = this;
        this.status('ok');
        return setTimeout((function() {
          return self.closeModal();
        }), 5000);
      },
      onFail: function(error) {
        var self;
        self = this;
        this.status('error');
        return this.unlock();
      }
    },
    modal: {
      id: 'c2c-modal',
      delay: 30000,
      "class": 'hide',
      input: {
        id: 'c2c-input',
        regexp: new RegExp(/^[0-9\-\+]{9,15}$/)
      },
      button: {
        id: 'c2c-call'
      }
    },
    button: {
      id: 'c2c-btn'
    }
  };

  Click2Call = (function(config, window, document) {
    var Click2Call;
    var getEl, instance;
    Click2Call = function() {
      this.modalTimer = null;
      return this.blocked = false;
    };
    getEl = function(id) {
      return document.getElementById(id);
    };
    Click2Call.prototype.unlock = function() {
      var el;
      this.blocked = false;
      el = getEl(config.modal.button.id);
      return el.classList.toggle('c2c-disabled', false);
    };
    Click2Call.prototype.lock = function() {
      var el;
      this.blocked = true;
      el = getEl(config.modal.button.id);
      return el.classList.toggle('c2c-disabled', true);
    };
    Click2Call.prototype.status = function(status) {
      var elements, i, statusEl;
      elements = document.getElementsByClassName('c2c-status');
      i = 0;
      while (i < elements.length) {
        elements[i].classList.toggle('hide', true);
        i++;
      }
      statusEl = getEl('c2c-status-' + status);
      return statusEl.classList.remove('hide');
    };
    Click2Call.prototype.validate = function(value) {
      value = parseInt(value);
      return config.modal.input.regexp.test(value);
    };
    Click2Call.prototype.call = function(phone, onSuccess, onFail) {
      var xmlhttp;
      xmlhttp = new XMLHttpRequest;
      xmlhttp.open('POST', config.apiUrl);
      xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          return onSuccess(xmlhttp.responseText);
        } else {
          return onFail(xmlhttp.responseText);
        }
      };
      return xmlhttp.send(JSON.stringify({
        phone: phone
      }));
    };
    Click2Call.prototype.getDate = function() {
      return new Date().toISOString().split('T')[0];
    };
    Click2Call.prototype.lockDay = function() {
      return localStorage.setItem('c2c', this.getDate());
    };
    Click2Call.prototype.isLocked = function() {
      return localStorage.getItem('c2c') === this.getDate();
    };
    Click2Call.prototype.bindModal = function(delayed) {
      var el, self;
      self = this;
      el = getEl(config.modal.button.id);
      if (!el) return;
      return el.addEventListener('click', function(e) {
        var inputEl, value;
        e.preventDefault();
        if (self.blocked) {
          return;
        }
        self.lock();
        self.status('loading');
        inputEl = getEl(config.modal.input.id);
        value = inputEl.value;
        if (self.validate(value)) {
          return self.call(value, config.call.onSuccess.bind(self), config.call.onFail.bind(self));
        } else {
          self.status('validate');
          return self.unlock();
        }
      });
    };
    Click2Call.prototype.showModal = function() {
      var btnEl, closeBtn, el, self;
      this.lockDay();
      ga('send', 'event', 'call', 'show');
      self = this;
      el = getEl(config.modal.id);
      btnEl = getEl(config.modal.button.id);
      closeBtn = getEl('c2c-modal-close');
      el.classList.toggle(config.modal["class"], false);
      closeBtn.addEventListener('click', function(e) {
        ga('send', 'event', 'call', 'make');
        e.preventDefault();
        return self.closeModal(e);
      });
      return el.addEventListener('keypress', function(e) {
        if (e.which === 13) {
          return btnEl.dispatchEvent(new CustomEvent('click'));
        }
      });
    };
    Click2Call.prototype.closeModal = function() {
      var el;
      ga('send', 'event', 'call', 'close');
      el = getEl(config.modal.id);
      return el.classList.toggle(config.modal["class"], true);
    };
    Click2Call.prototype.showButton = function(delayed) {
      var self;
      self = this;
      return setTimeout((function() {
        var buttons, callTrigger, el, i;
        el = getEl(config.button.id);
        buttons = document.getElementsByClassName(config.button.id);
        callTrigger = function(e) {
          e.preventDefault();
          if (self.modalTimer) {
            clearInterval(self.modalTimer);
          }
          return self.showModal();
        };
        i = 0;
        while (i < buttons.length) {
          buttons[i].addEventListener('click', callTrigger, false);
          i++;
        }
        if (el) {
          el.addEventListener('click', callTrigger, false);
          return el.classList.toggle(config.button["class"]);
        }
      }), delayed);
    };

    instance = new Click2Call;
    if (config.button) {
      instance.showButton(config.button.delay || 0);
    }
    instance.bindModal(config.modal.delay || 0);
    return instance;
  })(c2cconfig, window, document);

  app = {
    el: {
      window: $(window),
      body: $('body, html'),
      header: $('header.main'),
      intro: $('.intro'),
      carouselButton: $('.push-carousel-nav-button'),
      headerMenu: $('.main-menu'),
      toggleMenuBtn: $('.main-menu-toggle'),
      registerButton: $('.register'),
      testPushBtn: $('.app-test-push'),
      ppgTabTrigger: $('.ppg-tab-trigger'),
      ppgVideo: $('#ppg-video'),
      faqMenu: $('.faq-menu a'),
      faqItem: $('.faq__item'),
      faqSection: $('.faq__section'),
      popupClose: $('.popup__close'),
      cookiesClose: $('.ppg-cookies__close')
    },
    inVieportElems: ['.features-list', '.click-animation', '.browser', '.integration-animation', '.section-test-push', '.app-screen'],
    run: function() {
      this.showFaqCategoryOnStart();
      this.showPopup();
      this.showCookiesBar();
      this.showClick2CallOnPricing()
      this.el.popupClose.on('click', (function(_this) {
        return function() {
          return _this.closePopup();
        };
      })(this));
      this.el.cookiesClose.on('click', (function(_this) {
        return function() {
          return _this.closeCookiesBar();
        };
      })(this));
      this.el.carouselButton.on('click', (function(_this) {
        return function(event) {
          return _this.changeSlide(event);
        };
      })(this));
      this.el.window.on('scroll', (function(_this) {
        return function(event) {
          return _this.toggleScrollClass(event);
        };
      })(this));
      this.el.window.on('scroll', (function(_this) {
        return function(event) {
          return _this.toggleInVieport(event);
        };
      })(this));
      this.el.toggleMenuBtn.on('click', (function(_this) {
        return function(event) {
          return _this.toggleMenu(event);
        };
      })(this));
      this.el.registerButton.on('click', (function(_this) {
        return function() {
          return ga('send', 'event', 'user', 'register');
        };
      })(this));
      this.el.ppgTabTrigger.on('click', (function(_this) {
        return function(event) {
          return _this.showTab(event)
        };
      })(this));
      this.el.ppgVideo.on('click', (function(_this) {
        return function(event) {
          return _this.playVideo(event)
        };
      })(this));
      return this.el.faqMenu.on('click', (function(_this) {
        return function(event) {
          return _this.showFaqCategory(event)
        };
      })(this));
    },
    showClick2CallOnPricing: function() {
      if (location.href.indexOf('pricing') > -1 || location.href.indexOf('cennik') > -1) {
        setTimeout(function() {
          Click2Call.showModal()
        }, 10e3);
      }
    },
    showTab: function(event) {
      const target = $(event.target);
      const tabBox = target.closest('.ppg-tabs');
      const tabName = target.data('tab')
      target.addClass('active');
      target.siblings().removeClass('active');
      $('.ppg-tab-content').removeClass('opened');
      $('.ppg-tab-content#' + tabName).addClass('opened');
    },
    showFaqCategoryOnStart: function() {
      const topic = window.location.hash.replace('#', '');
      if (topic) {
        $('.faq-menu a').removeClass('active');
        $('a[href="#' + topic + '"]').addClass('active');
        $('.faq__section[data-topic=' + topic + ']').show();
      }
    },
    showPopup: function() {
      const closedPopup = this.getCookies('ebook-popup');
      if (closedPopup) {
        return false;
      }

      setTimeout(function() {
        $('.popup').addClass('popup--visible');
      }, 6000);
    },
    showCookiesBar: function() {
      const closedCookiesBar = this.getCookies('cookies-bar');
      if (closedCookiesBar) {
        return false;
      }

      $('.ppg-cookies').show();
    },
    closePopup: function() {
      $('.popup').removeClass('popup--visible');
      this.setCookies('ebook-popup', true, 365);
    },
    closeCookiesBar: function() {
      $('.ppg-cookies').hide();
      this.setCookies('cookies-bar', true, 365);
    },
    showFaqCategory: function(event) {
      const target = $(event.target);
      const topic = target.attr('href').replace('#', '');
      $('.faq-menu a').removeClass('active');
      target.addClass('active');
      $('.faq__section').hide();
      $('.faq__section[data-topic=' + topic + ']').show();
    },
    playVideo: function(event) {
      const video = document.getElementById('ppg-video')
      video.play();
    },
    resizeIntro: function() {
      return this.el.intro.css('height', this.el.window.height() - this.el.header.height());
    },
    toggleScrollClass: function() {
      return this.el.body.toggleClass('scrolled', this.el.window.scrollTop() > 0);
    },
    toggleMenu: function() {
      return this.el.headerMenu.toggle();
    },
    toggleInVieport: function(event) {
      var self;
      self = this;
      return this.inVieportElems.forEach(function(elem) {
        var elemBottom, elemTop, windowBottom, windowTop;
        if ($(elem).length > 0) {
          windowTop = self.el.window.scrollTop();
          windowBottom = windowTop + self.el.window.height();
          elemTop = $(elem).offset().top;
          elemBottom = elemTop + $(elem).offsetHeight;
          if (!(windowTop > elemBottom) && windowBottom > elemTop) {
            return $(elem).addClass('in-viewport');
          } else {
            return $(elem).removeClass('in-viewport');
          }
        }
      });
    },
    setCookies: function(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookies: function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  };
  app.run();
  pricingHelper = {
    nbpApiUrl: 'https://api.nbp.pl/api/exchangerates/rates/A/USD?format=json',
    getLang: function() {
      return $('body').data().lang;
    },
    roundPrice: function(value) {
      return Math.round(value * 100) / 100;
    },
    decoratePrice: function(priceNum, label) {
      priceNum = this.roundPrice(priceNum);
      if (label === true) {
        return priceNum + ' PLN ';
      } else {
        return priceNum;
      }
    },
    getPlRate: function() {
      return $.ajax({
        url: this.nbpApiUrl
      });
    }
  };
  planSliders = {
    el: {
      starterPlan: $('.plan--starter'),
      premiumPlan: $('.plan--premium'),
      enterprisePlan: $('.plan--enterprise'),
      starterRange: $('#starter-range'),
      premiumRange: $('#premium-range'),
      enterpriseRange: $('#enterprise-range'),
      plStarterSum: $('#pl-starter-sum'),
      enStarterSum: $('#en-starter-sum'),
      plPremiumSum: $('#pl-premium-sum'),
      enPremiumSum: $('#en-premium-sum'),
      enterpriseSum: $('#enterprise-sum'),
      starterCount: $('#starter-count'),
      premiumCount: $('#premium-count'),
      enterpriseCount: $('#enterprise-count')
    },
    plStarterPrice: 0.04,
    plPremiumPrice: 0.06,
    enStarterPrice: 0.01,
    enPremiumPrice: 0.02,
    enterprisePrice: 0.01,
    updateStarterCount: function() {
      var count, plSum, enSum;
      count = this.el.starterRange.val();
      plSum = count * this.plStarterPrice;
      enSum = count * this.enStarterPrice;
      if (count >= 30000) {
        this.el.starterPlan.addClass('plan--callus');
      } else {
        this.el.starterPlan.removeClass('plan--callus');
      }
      this.el.plStarterSum.text(plSum);
      this.el.enStarterSum.text(enSum);
      return this.el.starterCount.text(count);
    },
    updatePremiumCount: function() {
      var count, plSum, enSum;
      count = this.el.premiumRange.val();
      plSum = count * this.plPremiumPrice;
      enSum = count * this.enPremiumPrice;
      if (count >= 30000) {
        this.el.premiumPlan.addClass('plan--callus');
      } else {
        this.el.premiumPlan.removeClass('plan--callus');
      }
      this.el.plPremiumSum.text(plSum);
      this.el.enPremiumSum.text(enSum);
      return this.el.premiumCount.text(count);
    },
    updateEnterpriseCount: function() {
      var count, sum;
      count = this.el.enterpriseRange.val();
      sum = count * this.enterprisePrice;
      if (count >= 30000) {
        this.el.enterprisePlan.addClass('plan--callus');
      } else {
        this.el.enterprisePlan.removeClass('plan--callus');
      }
      this.el.enterpriseSum.text(sum);
      return this.el.enterpriseCount.text(count);
    },
    run: function() {
      this.updateStarterCount();
      this.updatePremiumCount();
      this.updateEnterpriseCount();
      this.el.starterRange.on('change click keyup wheel', (function(_this) {
        return function() {
          return _this.updateStarterCount();
        };
      })(this));
      this.el.premiumRange.on('change click keyup wheel', (function(_this) {
        return function() {
          return _this.updatePremiumCount();
        };
      })(this));
      return this.el.enterpriseRange.on('change click keyup wheel', (function(_this) {
        return function() {
          return _this.updateEnterpriseCount();
        };
      })(this));
    }
  };
  return planSliders.run();
});
