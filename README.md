# slack_status_update_web

## 步骤1

建立Slack App
https://api.slack.com/apps?new_app=1

## 步骤2

App管理页面
OAuth & Permissions->OAuth Tokens for Your Workspace->User OAuth Token

## 步骤3

发送HTTP Get链接
http://localhost:3000/status/update?token=xxxxxxxxxxx&text=1234&emoji=😃&expiration=11