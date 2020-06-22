# DB設計



## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|index:true,null: false|
|password|string|null:false|
|email|string|null:false,unique:true|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|index:true,null: false,unique:true|

### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|group|references|null:false, foreign_key:true|
|user|references|null:false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

|Column|Type|Option|
|------|----|------|
|group|references|null:false, foreign_key:true|
|user|references|null:false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :group
