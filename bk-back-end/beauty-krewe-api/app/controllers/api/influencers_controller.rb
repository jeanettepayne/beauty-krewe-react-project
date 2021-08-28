class Api::InfluencersController < ApplicationController

    def index
        influencers = Influencer.all
        render json: Influencer.new(inflencers)
    end

    def create
        influencer = Influencer.new(name: params[:name])

        if influencer.save
            render json: InfluencerSerializer.new(influencer), status: :accepted
        else
            render json: {errors: board.errors.full_messages}, status: :unprocessable_entity
        end
    end
end
