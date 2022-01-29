
def init 

    questions = [113, 232, 258, 259, 313, 316, 399]
    
    i = 0
    while i < questions.length do
        puts "question_#{i+1}_id: #{questions[i]},"
        i += 1
    end

end

init()

# Game.create(question_1_id: 113,
# question_2_id: 232,
# question_3_id: 258,
# question_4_id: 259,
# question_5_id: 313,
# question_6_id: 316,
# question_7_id: 399,)