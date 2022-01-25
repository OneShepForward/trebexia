class Game < ApplicationRecord
    belongs_to :question_1, class_name: "Question", foreign_key: "question_1_id"
    belongs_to :question_2, class_name: "Question", foreign_key: "question_2_id"
    belongs_to :question_3, class_name: "Question", foreign_key: "question_3_id"
    belongs_to :question_4, class_name: "Question", foreign_key: "question_4_id"
    belongs_to :question_5, class_name: "Question", foreign_key: "question_5_id"
    belongs_to :question_6, class_name: "Question", foreign_key: "question_6_id"
    belongs_to :question_7, class_name: "Question", foreign_key: "question_7_id"

    has_many :scores
end
