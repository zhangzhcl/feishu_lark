# Feishu / Lark One-Click App Creator

Generates a Feishu or Lark device-authorization link using `@larksuiteoapi/node-sdk`. After the user opens the link and confirms, the terminal prints a new App ID and App Secret.

[中文说明](README.zh-CN.md)

## Requirements

- Node.js 18 or later

## Usage

```bash
npm install
npm run create
```

Open the URL printed in the terminal, then scan and confirm it in Feishu or Lark. Every run creates a **new** app.

## Requested permissions

The launcher uses the minimal bot preset and requests the following 53 scopes: 44 app-identity scopes and 9 user-identity scopes. The platform confirmation page is authoritative; an unavailable scope identifier may be ignored by the platform.

### App identity (44)

| Permission | Scope |
| --- | --- |
| Manage the app's own resources | `application:application:self_manage` |
| Manage bot menus | `application:bot.menu:write` |
| Read bot basic information | `application:bot.basic_info:read` |
| Read slash commands | `application:app_slash_command:read` |
| Manage slash commands | `application:app_slash_command:write` |
| Read cards | `cardkit:card:read` |
| Create and update cards | `cardkit:card:write` |
| Read basic contacts | `contact:contact.base:readonly` |
| Read user employee IDs | `contact:user.employee_id:readonly` |
| Convert text to document blocks | `docx:document.block:convert` |
| Read documents | `docx:document:readonly` |
| Edit documents | `docx:document:write_only` |
| Read Drive metadata | `drive:drive.metadata:readonly` |
| Manage app feed cards | `im:app_feed_card:write` |
| Read and update chats | `im:chat` |
| Create chats | `im:chat:create` |
| Read chats | `im:chat:read` |
| Update chats | `im:chat:update` |
| Subscribe to bot member events | `im:chat.members:bot_access` |
| Read message flags | `im:feed.flag:read` |
| Manage message flags | `im:feed.flag:write` |
| Read shortcuts | `im:feed.shortcut:read` |
| Manage shortcuts | `im:feed.shortcut:write` |
| Read and send messages | `im:message` |
| Read messages | `im:message:readonly` |
| Send messages as the bot | `im:message:send_as_bot` |
| Send messages as a user | `im:message:send_as_user` |
| Send messages to multiple users | `im:message:send_multi_users` |
| Send messages to departments | `im:message:send_multi_depts` |
| Send system-template messages | `im:message:send_sys_msg` |
| Update messages | `im:message:update` |
| Recall messages | `im:message:recall` |
| Update message urgent status | `im:message:urgent.status:write` |
| Read group @-bot messages | `im:message.group_at_msg:readonly` |
| Read @-bot messages including bot messages | `im:message.group_at_msg.include_bot:readonly` |
| Read group messages | `im:message.group_msg` |
| Read group messages including bot messages | `im:message.group_msg.include_bot:read` |
| Read direct messages sent to the bot | `im:message.p2p_msg:readonly` |
| Read pinned messages | `im:message.pins:read` |
| Manage pinned messages | `im:message.pins:write_only` |
| Read message reactions | `im:message.reactions:read` |
| Manage message reactions | `im:message.reactions:write_only` |
| Upload and retrieve IM resources | `im:resource` |
| Read wiki nodes | `wiki:node:read` |

### User identity (9)

| Permission | Scope |
| --- | --- |
| Maintain access to authorized data | `offline_access` |
| Read user employee IDs | `contact:user.employee_id:readonly` |
| Read document content | `docs:document.content:read` |
| Read chats | `im:chat:read` |
| Read and send messages | `im:message` |
| Read messages | `im:message:readonly` |
| Send messages as the user | `im:message.send_as_user` |
| Update messages | `im:message:update` |
| Upload and retrieve IM resources | `im:resource` |

### Event and callback

| Type | Identifier |
| --- | --- |
| App event | `im.message.receive_v1` |
| Callback | `card.action.trigger` |
