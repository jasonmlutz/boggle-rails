class Api::ScoresController < ApplicationController
  # GET /api/games
  def index
    @scores = Score.all
    render json: @scores
  end
end