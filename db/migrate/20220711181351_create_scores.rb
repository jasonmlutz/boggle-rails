class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores, id: :uuid do |t|
      t.string :player
      t.integer :score
      t.timestamps
    end
  end
end
