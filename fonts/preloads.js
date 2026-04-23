
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.4XibJhY7.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor.DH1yE6tT.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.DDE8un88.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-FullScreenBackground.D3xUPlfH.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-unactionable-errors.DB8CJ7u8.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer.Ce4qX0AG.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency.BqXKkVfG.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shared.CABA-6Vm.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-BusinessCustomerShippingAddressManager.C97A8BpO.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-shared.zEYERC3z.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-usePostPurchase.5C8-eck4.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.D2Fpq5Mq.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.B_GTFjoJ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CI_Ih3nx.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-MarketsProDisclaimer.BowAHG2z.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-VatNumberValidationField.CPmcz0Jn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayButtonClassName.GguGMUSr.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo.DrE-8aUa.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment.DwgIfYsi.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine.2VFpUPWz.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview.CPLRkV6d.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo.CTOYE4bK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.D1F7A8E3.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField.Cyy-cJlp.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-useShowShopPayOptin.CAI9I34d.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer.tNPv8TK4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-RememberMeDescriptionText.B2iDAAHD.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary.Cb3fAQtO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery.Dtr6HUtk.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice.D6_ngrCF.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops._9WnKl7-.js","/cdn/shopifycloud/checkout-web/assets/c1/shopPaySessionTokenStorage-Page.BXTyqy5S.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-PaymentButtons.8kN1ozXA.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-OffsitePaymentFailed.DHq4l3bU.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.BuZMiQoo.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility.Dbq7s45q.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown.CmZ4COii.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal.BjACD4Lo.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options.Boxg-hfE.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions.CstkBE0f.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector.DUJ8gkg8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown.DXMEsTWd.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.B4aL9KX0.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions.CnLYXSj5.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets.DuDQ-v7W.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.bVOX7KJg.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-NoAddressLocationFullDetour.DrFLDehp.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.fH9d1Lew.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.Dr-4Ca3z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.sDBy1cou.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CqEBJWPh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.LuHtqm8n.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.Cko1fUoG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.BoGr8xHD.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.cbVP6Hp_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.D14orovx.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0741/8465/5066/files/Logotipo_Azul_x320.png?v=1770822627"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  