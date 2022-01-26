class GameQuestionsSerializer < ActiveModel::Serializer
  attributes :id

  has_many :question_1
  has_many :question_2
  has_many :question_3
  has_many :question_4
  has_many :question_5
  has_many :question_6
  has_many :question_7


end
