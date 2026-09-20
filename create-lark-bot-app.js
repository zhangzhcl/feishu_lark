const lark = require('@larksuiteoapi/node-sdk');
const options = require('./create-lark-bot-app.config');

async function main() {
  try {
    const result = await lark.registerApp({
      ...options,
      onQRCodeReady({ url, expireIn }) {
        console.log('\n请在飞书或 Lark 中打开并确认此链接：');
        console.log(url);
        console.log(`链接将在 ${expireIn} 秒后过期。`);
      },
      onStatusChange({ status, interval }) {
        const suffix = interval ? `（下次轮询间隔：${interval} 秒）` : '';
        console.log(`授权状态：${status}${suffix}`);
      },
    });

    console.log('\n应用创建成功。请立即保存以下凭据：');
    console.log(`App ID: ${result.client_id}`);
    console.log(`App Secret: ${result.client_secret}`);
    if (result.user_info) {
      console.log(`授权租户：${result.user_info.tenant_brand || '未知'}`);
    }
  } catch (error) {
    console.error(`创建未完成：${error.code || 'unknown_error'} ${error.description || error.message || ''}`);
    process.exitCode = 1;
  }
}

main();
