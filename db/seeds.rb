# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Allows for url to accessed
require "rest-client"

def init 

    puts "Seeding 50 questions, 20 times..."

    url = "https://opentdb.com/api.php?amount=50&type=multiple"

    20.times do
        # Query url
        # url = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"
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
    end

        # # Query url
        # url = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"
        # json = RestClient.get(url)
        # # byebug
        # # parse the JSON into a hash
        # parsed = JSON.parse(json)["results"]
        # parsed.each do |result|
        #     Question.create(
        #         category: result["category"],
        #         difficulty: result["difficulty"],            
        #         question: result["question"], 
        #         correct_answer: result["correct_answer"], 
        #         incorrect_answers: result["incorrect_answers"],
        #     )
        # end
        
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

        Score.create(
            user_id: 2,
            game_id: 1,
            score: 5
        )

        Score.create(
            user_id: 1,
            game_id: 2,
            score: 4
        )

        ## games

        Game.create(
            question_1_id: 1, 
            question_2_id: 2,
            question_3_id: 3,
            question_4_id: 4,
            question_5_id: 5,
            question_6_id: 6,
            question_7_id: 7,
        )

        puts "Creating sample games..."
        
        Game.create(question_1_id: 237, question_2_id: 358, question_3_id: 711, question_4_id: 732, question_5_id: 756, question_6_id: 396, question_7_id: 561)

        Game.create(question_1_id: 62, question_2_id: 106, question_3_id: 139, question_4_id: 182, question_5_id: 183, question_6_id: 267, question_7_id: 329)

        Game.create(question_1_id: 24, question_2_id: 48, question_3_id: 81, question_4_id: 112, question_5_id: 151, question_6_id: 202, question_7_id: 446)

        Game.create(question_1_id: 26, question_2_id: 33, question_3_id: 154, question_4_id: 210, question_5_id: 378, question_6_id: 636, question_7_id: 377)
        
        Game.create(question_1_id: 69, question_2_id: 110, question_3_id: 332, question_4_id: 490, question_5_id: 536, question_6_id: 830, question_7_id: 856)

        Game.create(question_1_id: 113, question_2_id: 232, question_3_id: 258, question_4_id: 259, question_5_id: 313, question_6_id: 316, question_7_id: 399)

    # categories = [
    #     {
    #     "id": 9,
    #     "name": "General Knowledge"
    #     },
    #     {
    #     "id": 10,
    #     "name": "Entertainment: Books"
    #     },
    #     {
    #     "id": 11,
    #     "name": "Entertainment: Film"
    #     },
    #     {
    #     "id": 12,
    #     "name": "Entertainment: Music"
    #     },
    #     {
    #     "id": 13,
    #     "name": "Entertainment: Musicals & Theatres"
    #     },
    #     {
    #     "id": 14,
    #     "name": "Entertainment: Television"
    #     },
    #     {
    #     "id": 15,
    #     "name": "Entertainment: Video Games"
    #     },
    #     {
    #     "id": 16,
    #     "name": "Entertainment: Board Games"
    #     },
    #     {
    #     "id": 17,
    #     "name": "Science & Nature"
    #     },
    #     {
    #     "id": 18,
    #     "name": "Science: Computers"
    #     },
    #     {
    #     "id": 19,
    #     "name": "Science: Mathematics"
    #     },
    #     {
    #     "id": 20,
    #     "name": "Mythology"
    #     },
    #     {
    #     "id": 21,
    #     "name": "Sports"
    #     },
    #     {
    #     "id": 22,
    #     "name": "Geography"
    #     },
    #     {
    #     "id": 23,
    #     "name": "History"
    #     },
    #     {
    #     "id": 24,
    #     "name": "Politics"
    #     },
    #     {
    #     "id": 25,
    #     "name": "Art"
    #     },
    #     {
    #     "id": 26,
    #     "name": "Celebrities"
    #     },
    #     {
    #     "id": 27,
    #     "name": "Animals"
    #     },
    #     {
    #     "id": 28,
    #     "name": "Vehicles"
    #     },
    #     {
    #     "id": 29,
    #     "name": "Entertainment: Comics"
    #     },
    #     {
    #     "id": 30,
    #     "name": "Science: Gadgets"
    #     },
    #     {
    #     "id": 31,
    #     "name": "Entertainment: Japanese Anime & Manga"
    #     },
    #     {
    #     "id": 32,
    #     "name": "Entertainment: Cartoon & Animations"
    #     }
    # ]

end

init()
    