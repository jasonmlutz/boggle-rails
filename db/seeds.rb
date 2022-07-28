# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

def generate_cubes
  res = ''
  ids = ('a'..'p').to_a.shuffle
  ids.each do |id|
    res += id + rand(6).to_s
  end
  return res
end

puts "seeding scores"

Score.destroy_all

(1..10).each do
  Score.create(
    player:Faker::Name.first_name,
    score:rand(1000)
  )
end

puts 'generating games'

Game.destroy_all

(1..10).each do
  Game.create(cubes: generate_cubes())
end

puts 'done'
