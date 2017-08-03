<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonstersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 25)->nullable();
            $table->string('title')->nullable();
            $table->integer('adventurers_defeated');
            $table->integer('treasure');
            $table->decimal('lat', 10, 7);
            $table->decimal('lng', 10, 7);
            $table->boolean('active');
            $table->integer('monster_type_id')->unsigned();
            $table->foreign('monster_type_id')->references('id')->on('monster__types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('monsters');
    }
}
