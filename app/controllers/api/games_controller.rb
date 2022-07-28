class Api::GamesController < ApplicationController
  # skip_before_action :verify_authenticity_token, :only => [:create]
  wrap_parameters false

  # GET  /api/games/:id(.:format)
  def show
    @game = Game.find(params[:id])
    if @game
      render json: @game
    else
      render json: {error: 'record(s) not found'}
    end
  end

  # POST  /api/games/new(.:format)
  def create
    @game = Game.create()

    render json: @game
  end

  # GET  /api/games
  def index
    @games = Game.all
    render json: @games
  end
end