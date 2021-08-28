class Api::InfluencersController < ApplicationController

    def index
        influencers = Influencer.all
        render json: InfluencerSerializer.new(inflencers)
    end

    def create
        influencer = Influencer.new(name: params[:name])

        if influencer.save
            render json: InfluencerSerializer.new(influencer), status: :accepted
        else
            render json: {error: 'Oops! There was an error adding the influencer.'}, status: :unprocessable_entity
        end
    end

    def show
        influencer = Influencer.find(params[:id])
        render json: InfluencerSerializer.new(influencer)
    end

    def destroy
        influencer = Influencer.find(params[:id])
        influencer.destroy
    end

    private
    def influencer_params
        params.require(:influencer).permit(:name)
    end
end
