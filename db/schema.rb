# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_24_205442) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clues", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.bigint "question_1_id"
    t.bigint "question_2_id"
    t.bigint "question_3_id"
    t.bigint "question_4_id"
    t.bigint "question_5_id"
    t.bigint "question_6_id"
    t.bigint "question_7_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_1_id"], name: "index_games_on_question_1_id"
    t.index ["question_2_id"], name: "index_games_on_question_2_id"
    t.index ["question_3_id"], name: "index_games_on_question_3_id"
    t.index ["question_4_id"], name: "index_games_on_question_4_id"
    t.index ["question_5_id"], name: "index_games_on_question_5_id"
    t.index ["question_6_id"], name: "index_games_on_question_6_id"
    t.index ["question_7_id"], name: "index_games_on_question_7_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "question"
    t.string "difficulty"
    t.string "correct_answer"
    t.text "incorrect_answers", array: true
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scores", force: :cascade do |t|
    t.integer "score"
    t.bigint "user_id", null: false
    t.bigint "game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_scores_on_game_id"
    t.index ["user_id"], name: "index_scores_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "games", "questions", column: "question_1_id"
  add_foreign_key "games", "questions", column: "question_2_id"
  add_foreign_key "games", "questions", column: "question_3_id"
  add_foreign_key "games", "questions", column: "question_4_id"
  add_foreign_key "games", "questions", column: "question_5_id"
  add_foreign_key "games", "questions", column: "question_6_id"
  add_foreign_key "games", "questions", column: "question_7_id"
  add_foreign_key "scores", "games"
  add_foreign_key "scores", "users"
end
