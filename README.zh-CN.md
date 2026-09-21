# 飞书 / Lark 一键创建应用

本项目使用 `@larksuiteoapi/node-sdk` 生成飞书或 Lark 的设备授权链接。用户打开链接并确认后，终端会输出新应用的 App ID 和 App Secret。

[English](README.md)

## 环境要求

- Node.js 18 或更高版本

## 使用方法

```bash
npm install
npm run create
```

在终端输出的链接中完成扫码确认。每次运行都会创建一个**新的**应用。

## 将申请的权限

启动程序使用最小机器人基座，共申请 61 项权限：47 项应用身份权限和 14 项用户身份权限。平台确认页为最终准则；若平台目录中不存在某个权限标识，平台可能会忽略它。

### 应用身份权限（47 项）

| 权限说明 | 权限标识 |
| --- | --- |
| 管理应用自身资源 | `application:application:self_manage` |
| 创建、更新、删除机器人菜单 | `application:bot.menu:write` |
| 获取机器人基本信息 | `application:bot.basic_info:read` |
| 查询 Slash Command | `application:app_slash_command:read` |
| 编辑 Slash Command | `application:app_slash_command:write` |
| 获取卡片信息 | `cardkit:card:read` |
| 创建与更新卡片 | `cardkit:card:write` |
| 获取通讯录基本信息 | `contact:contact.base:readonly` |
| 获取用户 user ID | `contact:user.employee_id:readonly` |
| 转换文本为云文档块 | `docx:document.block:convert` |
| 创建及编辑新版文档 | `docx:document` |
| 查看新版文档 | `docx:document:readonly` |
| 编辑新版文档 | `docx:document:write_only` |
| 查看云空间文件元数据 | `drive:drive.metadata:readonly` |
| 创建、更新应用消息流卡片 | `im:app_feed_card:write` |
| 获取与更新群组信息 | `im:chat` |
| 创建群 | `im:chat:create` |
| 查看群信息 | `im:chat:read` |
| 更新群信息 | `im:chat:update` |
| 订阅机器人进、出群事件 | `im:chat.members:bot_access` |
| 获取标记数据 | `im:feed.flag:read` |
| 创建、删除标记 | `im:feed.flag:write` |
| 查看置顶 | `im:feed.shortcut:read` |
| 创建、删除置顶 | `im:feed.shortcut:write` |
| 获取与发送单聊、群组消息 | `im:message` |
| 获取单聊、群组消息 | `im:message:readonly` |
| 以应用身份发消息 | `im:message:send_as_bot` |
| 以用户身份发消息 | `im:message:send_as_user` |
| 给多个用户批量发消息 | `im:message:send_multi_users` |
| 给一个或多个部门成员批量发消息 | `im:message:send_multi_depts` |
| 发送特定模板系统消息 | `im:message:send_sys_msg` |
| 更新消息 | `im:message:update` |
| 撤回消息 | `im:message:recall` |
| 修改消息加急状态 | `im:message.urgent.status:write` |
| 获取群组中用户 @ 机器人消息 | `im:message.group_at_msg:readonly` |
| 获取群组中其他机器人和用户 @ 当前机器人的消息 | `im:message.group_at_msg.include_bot:readonly` |
| 获取群组中所有消息 | `im:message.group_msg` |
| 获取群组中用户和机器人发送的消息 | `im:message.group_msg.include_bot:read` |
| 读取用户发给机器人的单聊消息 | `im:message.p2p_msg:readonly` |
| 查看 Pin 消息 | `im:message.pins:read` |
| 添加、取消 Pin 消息 | `im:message.pins:write_only` |
| 查看消息表情回复 | `im:message.reactions:read` |
| 发送、删除消息表情回复 | `im:message.reactions:write_only` |
| 获取与上传图片或文件资源 | `im:resource` |
| 查看知识空间节点信息 | `wiki:node:read` |
| 查看、编辑和管理知识库 | `wiki:wiki` |
| 查看知识库 | `wiki:wiki:readonly` |

### 用户身份权限（14 项）

| 权限说明 | 权限标识 |
| --- | --- |
| 持续访问已授权的数据 | `offline_access` |
| 获取用户 user ID | `contact:user.employee_id:readonly` |
| 查看云文档内容 | `docs:document.content:read` |
| 创建及编辑新版文档 | `docx:document` |
| 查看新版文档 | `docx:document:readonly` |
| 查看群信息 | `im:chat:read` |
| 获取与发送单聊、群组消息 | `im:message` |
| 获取单聊、群组消息 | `im:message:readonly` |
| 以用户身份发送消息 | `im:message.send_as_user` |
| 更新消息 | `im:message:update` |
| 获取与上传图片或文件资源 | `im:resource` |
| 查看知识空间节点信息 | `wiki:node:read` |
| 查看、编辑和管理知识库 | `wiki:wiki` |
| 查看知识库 | `wiki:wiki:readonly` |

### 事件与回调

| 类型 | 标识 |
| --- | --- |
| 应用身份事件 | `im.message.receive_v1` |
| 回调 | `card.action.trigger` |
