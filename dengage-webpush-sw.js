var swUrl = new URL(location);
var accountId = swUrl.searchParams.get('account_id') || '';
var appGuid = swUrl.searchParams.get('app_guid') || '';
var version = swUrl.searchParams.get('version') || '';
if (accountId && appGuid) {
  importScripts("https://dev.lib.dengage.com/p/push/" + accountId + "/" + appGuid + "/dengage_sw.js?v=" + version);
}
