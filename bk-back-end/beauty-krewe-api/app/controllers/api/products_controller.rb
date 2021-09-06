class Api::ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products, each_serializer: ProductSerializer
    end

    def create
        product = Product.new(product_params)
        binding.pry
        
        if product.save
            render json: product, each_serializer: ProductSerializer
        else
            render json: {error: 'Oops! There was an error adding the product.'}
        end
    end

    def show
        product = Product.find(params[:id])
        render json: product, each_serializer: ProductSerializer
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
    end

    private

    def product_params
        params.require(:product).permit(:name, :price, :description, :brand_id, :influencers_product)
    end
end
