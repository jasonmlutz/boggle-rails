class Game < ApplicationRecord
  before_validation :generate_cubes, on: :create

  private
    def generate_cubes
      res = ''
      ids = ('a'..'p').to_a.shuffle
      ids.each do |id|
        res += id + rand(6).to_s
      end

      self.cubes = res
    end
end