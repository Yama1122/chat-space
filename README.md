# README


## usersテーブル

|Column|Type|Option|
|------|----|------|
|user_name|string|null: false|
|password|string|null:false|
|email|string|null:false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|group_name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :users_groups

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string||
|group_id|integer|null:false, foreign_key:true|
|user_id|integer|null:false, foreign_key:true|

### Association
- belongs_to :user
- belong_to :group

## users_groupsテーブル

|group_id|integer|null:false, foreign_key:true|
|user_id|integer|null:false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :group
