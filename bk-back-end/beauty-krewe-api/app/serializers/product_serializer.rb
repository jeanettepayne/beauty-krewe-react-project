class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :rating, :description, :brand_id

  belongs_to :brand
end
