# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    names = ['Enoch Greely',
    'Destiny Pohlmann',
    'Luciano Levalley',
    'Soo Macken',
    'Tonisha Saum',
    'Lenny Prado',
    'Diego Licon',
    'Valeri Cousin',
    'Ebonie Abelson',
    'Meaghan Yeates',
    'Reginia Siders',
    'Raelene Cass',
    'Alise Gaskill',
    'Tawny Deibel',
    'Piedad Messinger',
    'Javier Kosloski',
    'Carie Eyer',
    'Aja Flavors',
    'Almeda Delbosque',
    'Aurea Buchan']
    names.each{ |name|
      fl = name.split(' ')
      Employee.create(firstname:fl[0], middlename:'', lastname:fl[1], homephone: Random.rand(1111111111...9999999999).to_s, workphone:Random.rand(1111111111...9999999999).to_s, ssn:Random.rand(111111111...999999999).to_s, birthday:'mm/dd/yyyy', email:fl[0]+fl[1]+'@gmail.com')}
