class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :question
      t.string :difficulty
      t.string :correct_answer
      t.text :incorrect_answers, array: true
      t.string :category

      t.timestamps
    end
  end
end
