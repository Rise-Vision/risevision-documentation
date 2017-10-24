angular.module("risevision.common.config")
  .value("MONITORING_SERVICE_URL", "https://monitoring-dot-rvacore-test.appspot.com/_ah/api");

angular.module('risevision.common.i18n.config', [])
  .constant('LOCALES_PREFIX',
    'locales/translation_')
  .constant('LOCALES_SUFIX', '.json');
