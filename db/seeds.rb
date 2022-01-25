# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Allows for url to accessed
require "rest-client"


puts "Seeding 20 General Knowledge questions..."

# 20.times do
    # Query url
    url = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"
    json = RestClient.get(url)
    # byebug
    # parse the JSON into a hash
    parsed = JSON.parse(json)["results"]
    parsed.each do |result|
        Question.create(
            category: result["category"],
            difficulty: result["difficulty"],            
            question: result["question"], 
            correct_answer: result["correct_answer"], 
            incorrect_answers: result["incorrect_answers"],
        )
    end
# end
    
    puts "Creating sample game..."
    Game.create(
        question_1_id: 1, 
        question_2_id: 2,
        question_3_id: 3,
        question_4_id: 4,
        question_5_id: 5,
        question_6_id: 6,
        question_7_id: 7,
    )
    
    puts "Creating sample users..."
    User.create(
        username: "Jimbo",
        password_digest: "placeholder"
    )
    
    User.create(
        username: "Moe",
        password_digest: "placeholder"
    )
    
    puts "Creating sample scores..."
    Score.create(
        user_id: 1,
        game_id: 1,
        score: 6
    )
    
# end
    
    