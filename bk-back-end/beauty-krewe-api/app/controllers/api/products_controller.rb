class Api::ProductsController < ApplicationController

    def index
        products = Product.all
        render json: ProductSerializer.new(products)
    end

    def create
        product = Product.new(product_params)
        
        if product.save
            render json: ProductSerializer.new(product)
        else
            render json: {error: 'Oops! There was an error adding the product.'}
        end
    end

    def show
        product = Product.find(params[:id])
        render json: ProductSerializer.new(product)
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
    end

    private

    def product_params
        params.require(:product).permit(:name, :price, :rating, :description, :brand_id)
    end
end
