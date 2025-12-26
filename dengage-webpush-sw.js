var swUrl = new URL(location);
var accountId = swUrl.searchParams.get('account_id') || '';
var appGuid = swUrl.searchParams.get('app_guid') || '';
var version = swUrl.searchParams.get('version') || '';
var hash = swUrl.searchParams.get('hash') || '';
if (accountId && appGuid) {
  importScripts("https://dev.lib.dengage.com/p/push/" + accountId + "/" + appGuid + "/sdk/" + version + "/dengage_sw."+ hash +".js");
}
