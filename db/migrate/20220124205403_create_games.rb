class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.references :question_1, foreign_key: { to_table: :questions }
      t.references :question_2, foreign_key: { to_table: :questions }
      t.references :question_3, foreign_key: { to_table: :questions }
      t.references :question_4, foreign_key: { to_table: :questions }
      t.references :question_5, foreign_key: { to_table: :questions }
      t.references :question_6, foreign_key: { to_table: :questions }
      t.references :question_7, foreign_key: { to_table: :questions }

      t.timestamps
    end
  end
end
