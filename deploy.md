# Deployment Instructions

1. Push to Heroku Master
2. run php artisan migrate
3. run php db:seed --class=MonsterTypeSeeder
4. run php db:seed --class=TreasureTypeTableSeeder
5. run php db:seed --class=MonsterTableSeeder
6. run php db:seed --class=TreasureTableSeeder
