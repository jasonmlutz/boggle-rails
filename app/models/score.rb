# == Schema Information
#
# Table name: scores
#
#  id         :uuid             not null, primary key
#  player     :string
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Score < ApplicationRecord
  validates :player, :score, presence: true
end
