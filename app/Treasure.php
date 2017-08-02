<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Treasure extends Model
{
    public function treasureType() {
    	return $this->belongsTo('App\Treasure_Type');
    }
}
