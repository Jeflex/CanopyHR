class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :firstname
      t.string :middlename
      t.string :lastname
      t.string :homephone
      t.string :workphone
      t.string :ssn
      t.string :birthday
      t.string :email

      t.timestamps
    end
  end
end
