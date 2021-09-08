class Api::InfluencersProducts_Controller < ApplicationController

    def index
        influencers_products = InfluencersProduct.all
        render json: influencers_products, each_serializer: InfluencersProductsSerializer
    end

    def create
        influencers_product = InfluencersProduct.new(influencers_product_params)
        
        if influencers_product.save
            render json: influencers_product, each_serializer: ProductSerializer
        else
            render json: {error: 'Oops! There was an error adding the product.'}
        end
    end

    def show
        influencers_product = InfluencersProduct.find(params[:id])
        render json: influencers_product, each_serializer: InfluencersProductsSerializer
    end

    def destroy
        influencers_product = InfluencersProduct.find(params[:id])
        influencers_product.destroy
    end

    private

    def influencers_product_params
        params.require(:influencers_product).permit(:product_id, :influencer_id)
    end
end
