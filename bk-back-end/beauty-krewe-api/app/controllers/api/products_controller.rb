class Api::ProductsController < ApplicationController

    def index

    end

    def create

    end

    def show

    end

    def destroy

    end

    private

    def product_params
        params.require(:product).permit(:name, :price, :rating, :description, :brand_id)
    end
end
