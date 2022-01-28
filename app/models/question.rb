class Question < ApplicationRecord
    has_many :question_1, class_name: "Game", foreign_key: "question_1_id"
    has_many :question_2, class_name: "Game", foreign_key: "question_2_id"
    has_many :question_3, class_name: "Game", foreign_key: "question_3_id"
    has_many :question_4, class_name: "Game", foreign_key: "question_4_id"
    has_many :question_5, class_name: "Game", foreign_key: "question_5_id"
    has_many :question_6, class_name: "Game", foreign_key: "question_6_id"
    has_many :question_7, class_name: "Game", foreign_key: "question_7_id"

    validates :question, uniqueness: true
    
end
