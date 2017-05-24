angular.module("risevision.common.config")
  .value("MONITORING_SERVICE_URL", "https://monitoring-dot-rvaserver2.appspot.com/_ah/api");

angular.module('risevision.common.i18n.config', [])
  .constant('LOCALES_PREFIX',
    'bower_components/rv-common-i18n/dist/locales/translation_')
  .constant('LOCALES_SUFIX', '.json');
