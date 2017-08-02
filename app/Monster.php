<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    //

    public function monsterType() {
    	return $this->belongsTo('App\Monster_Type');
    }
}
