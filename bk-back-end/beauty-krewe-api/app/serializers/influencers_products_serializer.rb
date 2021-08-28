class InfluencersProductsSerializer < ActiveModel::Serializer
  attributes :id, :influencer_id, :product_id
end
