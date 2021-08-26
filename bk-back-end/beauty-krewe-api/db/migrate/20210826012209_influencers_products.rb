class InfluencersProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :influencers_products, id: false do |t|
      t.belongs_to :influencer
      t.belongs_to :product
    end
  end
end
