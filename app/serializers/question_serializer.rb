class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :correct_answer, :incorrect_answers, :category, :difficulty
end
