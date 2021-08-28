class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :rating, :description, :brand_id

  belongs_to :brand
  has_many :influencers_products
  has_many :influencers, through: :influencers_products
end
