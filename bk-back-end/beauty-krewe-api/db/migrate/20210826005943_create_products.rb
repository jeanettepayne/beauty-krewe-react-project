class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :rating
      t.text :description

      t.timestamps
    end
  end
end
