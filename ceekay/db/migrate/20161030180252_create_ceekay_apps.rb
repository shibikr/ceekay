class CreateCeekayApps < ActiveRecord::Migration
  def change
    create_table :ceekay_apps do |t|

      t.timestamps null: false
    end
  end
end
