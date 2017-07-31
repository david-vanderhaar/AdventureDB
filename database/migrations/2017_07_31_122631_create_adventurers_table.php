<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdventurersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adventurers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 25);
            $table->string('title')->nullable();
            $table->integer('stamina');
            $table->integer('defense');
            $table->integer('attack');
            $table->integer('monsters_defeated');
            $table->integer('treasure');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('adventurers');
    }
}
