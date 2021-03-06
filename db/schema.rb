# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170716163811) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "subreddit_follows", force: :cascade do |t|
    t.integer  "subreddit_id", null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["subreddit_id", "user_id"], name: "index_subreddit_follows_on_subreddit_id_and_user_id", unique: true, using: :btree
  end

  create_table "subreddits", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["url"], name: "index_subreddits_on_url", unique: true, using: :btree
  end

  create_table "twitch_channel_follows", force: :cascade do |t|
    t.integer  "twitch_channel_id", null: false
    t.integer  "user_id",           null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["twitch_channel_id", "user_id"], name: "index_twitch_channel_follows_on_twitch_channel_id_and_user_id", unique: true, using: :btree
  end

  create_table "twitch_channels", force: :cascade do |t|
    t.string   "name",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "thumbnail"
    t.string   "display_name"
    t.string   "embed_url"
    t.string   "chat_url"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

  create_table "youtube_channel_follows", force: :cascade do |t|
    t.integer  "youtube_channel_id", null: false
    t.integer  "user_id",            null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["youtube_channel_id", "user_id"], name: "index_youtube_channel_follows_on_youtube_channel_id_and_user_id", unique: true, using: :btree
  end

  create_table "youtube_channels", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "url",          null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "upload_id"
    t.string   "thumbnail"
    t.string   "display_name"
    t.index ["url"], name: "index_youtube_channels_on_url", unique: true, using: :btree
  end

end
